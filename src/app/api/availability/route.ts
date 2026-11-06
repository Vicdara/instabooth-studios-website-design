import { and, eq, ne } from "drizzle-orm";
import { db } from "@/db";
import { bookings } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const date = new URL(request.url).searchParams.get("date") ?? "";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return Response.json({ ok: false, booked: [], message: "A valid date is required." }, { status: 400 });
  }

  try {
    const rows = await db
      .select({ sessionTime: bookings.sessionTime })
      .from(bookings)
      .where(and(eq(bookings.sessionDate, date), ne(bookings.status, "cancelled")));

    return Response.json({ ok: true, date, booked: [...new Set(rows.map((row) => row.sessionTime))] });
  } catch (error) {
    console.error("availability lookup failed", error);
    return Response.json({ ok: false, booked: [], message: "Availability is unavailable right now." });
  }
}
