import { db } from "@/db";
import { enquiries } from "@/db/schema";
import { contactTopics } from "@/lib/site";

export const dynamic = "force-dynamic";

const asText = (value: unknown, max = 600) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return Response.json({ ok: false, message: "We could not read that message." }, { status: 400 });
  }

  const name = asText(payload.name, 120);
  const email = asText(payload.email, 160);
  const phone = asText(payload.phone, 40);
  const topic = asText(payload.topic, 80) || "General enquiry";
  const message = asText(payload.message, 2500);

  if (name.length < 2) {
    return Response.json({ ok: false, message: "Please share your name." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return Response.json({ ok: false, message: "Please use a valid email address." }, { status: 400 });
  }
  if (message.length < 10) {
    return Response.json(
      { ok: false, message: "Please add a little more detail to your message." },
      { status: 400 },
    );
  }

  try {
    await db.insert(enquiries).values({
      name,
      email,
      phone,
      topic: contactTopics.includes(topic) ? topic : "General enquiry",
      message,
    });
    return Response.json({ ok: true, message: "Message received — the studio will reply shortly." });
  } catch (error) {
    console.error("enquiry insert failed", error);
    return Response.json(
      {
        ok: false,
        message:
          "Our desk is briefly unavailable. Please call +234 818 875 7888 or email instaboothnigeria@gmail.com.",
      },
      { status: 500 },
    );
  }
}
