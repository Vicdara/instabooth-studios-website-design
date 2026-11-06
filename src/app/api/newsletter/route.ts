import { db } from "@/db";
import { subscribers } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let email = "";
  try {
    const payload = (await request.json()) as { email?: unknown };
    email = typeof payload.email === "string" ? payload.email.trim().slice(0, 160).toLowerCase() : "";
  } catch {
    return Response.json({ ok: false, message: "Please enter a valid email." }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return Response.json({ ok: false, message: "Please enter a valid email." }, { status: 400 });
  }

  try {
    await db.insert(subscribers).values({ email }).onConflictDoNothing();
    return Response.json({ ok: true, message: "You are on the studio list. Watch your inbox." });
  } catch (error) {
    console.error("newsletter insert failed", error);
    return Response.json(
      { ok: false, message: "Could not add you right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
