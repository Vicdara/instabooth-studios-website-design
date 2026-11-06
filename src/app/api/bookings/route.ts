import { and, eq, ne } from "drizzle-orm";
import { db } from "@/db";
import { bookings } from "@/db/schema";
import { addOns as allowedAddOns, serviceOptions, sessionTimes } from "@/lib/site";

export const dynamic = "force-dynamic";

const asText = (value: unknown, max = 600) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const fail = (message: string, status = 400) =>
  Response.json({ ok: false, message }, { status });

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return fail("We could not read that request. Please try again.");
  }

  const name = asText(payload.name, 120);
  const email = asText(payload.email, 160);
  const phone = asText(payload.phone, 40);
  const service = asText(payload.service, 80);
  const packageName = asText(payload.packageName, 120);
  const sessionDate = asText(payload.sessionDate, 10);
  const sessionTime = asText(payload.sessionTime, 5);
  const location = asText(payload.location, 40) || "studio";
  const brief = asText(payload.brief, 2000);
  const guests = Number(payload.guests);
  const requestedAddOns = Array.isArray(payload.addOns)
    ? payload.addOns.filter((item): item is string => typeof item === "string" && allowedAddOns.includes(item))
    : [];

  if (name.length < 2) return fail("Please share your full name.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return fail("Please use a valid email address.");
  if (phone.replace(/\D/g, "").length < 7) return fail("Please add a valid phone number.");
  if (!serviceOptions.includes(service)) return fail("Please choose one of the listed services.");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(sessionDate)) return fail("Please choose a valid session date.");
  if (!sessionTimes.includes(sessionTime)) return fail("Please choose one of the studio time slots.");
  if (!Number.isFinite(guests) || guests < 1 || guests > 50)
    return fail("Please tell us how many people will be on set (1–50).");
  if (brief.length < 10) return fail("Please add a short note about the shoot.");

  const chosenDate = new Date(`${sessionDate}T00:00:00`);
  if (Number.isNaN(chosenDate.getTime())) return fail("That date could not be understood.");
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (chosenDate < today) return fail("Please choose today or a future date.");

  const reference = `IBS-${sessionDate.replace(/-/g, "").slice(2)}-${Math.random()
    .toString(36)
    .slice(2, 6)
    .toUpperCase()}`;

  try {
    const clash = await db
      .select({ id: bookings.id })
      .from(bookings)
      .where(
        and(
          eq(bookings.sessionDate, sessionDate),
          eq(bookings.sessionTime, sessionTime),
          ne(bookings.status, "cancelled"),
        ),
      )
      .limit(1);

    if (clash.length > 0) {
      return fail(
        "That slot has just been requested by someone else. Pick another time or message the studio on WhatsApp.",
        409,
      );
    }

    await db.insert(bookings).values({
      reference,
      name,
      email,
      phone,
      service,
      packageName,
      sessionDate,
      sessionTime,
      location,
      guests,
      addOns: requestedAddOns.join(", "),
      brief,
    });

    return Response.json({ ok: true, reference });
  } catch (error) {
    console.error("booking insert failed", error);
    return fail(
      "Our booking desk is briefly unavailable. Please call +234 818 875 7888 or try again shortly.",
      500,
    );
  }
}
