import type { Metadata } from "next";
import Link from "next/link";
import { count, desc } from "drizzle-orm";
import { db } from "@/db";
import { bookings, enquiries } from "@/db/schema";
import { ArrowIcon } from "@/components/Header";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Studio Desk",
  description: "Internal studio desk for Instabooth Studios bookings and enquiries.",
  robots: { index: false, follow: false },
};

const dateLabel = (value: string) => {
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-NG", { weekday: "short", day: "numeric", month: "short" });
};

export default async function StudioDeskPage() {
  let bookingRows: Awaited<ReturnType<typeof fetchBookings>> = [];
  let enquiryRows: Awaited<ReturnType<typeof fetchEnquiries>> = [];
  let bookingCount = 0;
  let enquiryCount = 0;
  let dbError = false;

  try {
    const [bRows, eRows, bCount, eCount] = await Promise.all([
      fetchBookings(),
      fetchEnquiries(),
      db.select({ value: count() }).from(bookings),
      db.select({ value: count() }).from(enquiries),
    ]);
    bookingRows = bRows;
    enquiryRows = eRows;
    bookingCount = bCount[0]?.value ?? 0;
    enquiryCount = eCount[0]?.value ?? 0;
  } catch (error) {
    console.error("studio desk query failed", error);
    dbError = true;
  }

  return (
    <section className="relative min-h-[80vh] bg-ink py-14 md:py-20">
      <div className="shell">
        <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.22em] text-bone/55">
          <Link href="/" className="transition hover:text-bone">
            Instabooth
          </Link>
          <span className="text-clay">/</span>
          <span className="text-bone/80">Studio desk</span>
        </p>
        <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="display-lg text-bone">
              Studio <span className="text-clay">desk.</span>
            </h1>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-bone/55">
              Every booking request and enquiry submitted through this website, newest first. Internal
              view — not indexed by search engines.
            </p>
          </div>
          <Link href="/contact" className="btn btn-outline shrink-0">
            New request <ArrowIcon />
          </Link>
        </div>

        {dbError ? (
          <div className="mt-10 rounded-2xl border border-clay/40 bg-clay/10 p-6">
            <p className="font-display text-xl font-bold text-bone">The desk cannot reach the database.</p>
            <p className="mt-2 text-[15px] text-bone/60">
              Push the schema with <code className="rounded bg-ink px-1.5 py-0.5">npx drizzle-kit push</code>{" "}
              and refresh this page.
            </p>
          </div>
        ) : null}

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Booking requests", value: bookingCount },
            { label: "Enquiries", value: enquiryCount },
            { label: "New status", value: bookingRows.filter((row) => row.status === "new").length },
            {
              label: "Next session",
              value:
                bookingRows
                  .map((row) => row.sessionDate)
                  .filter((value) => value >= new Date().toISOString().slice(0, 10))
                  .sort()[0] ?? "—",
            },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-bone/12 bg-bone/[0.04] p-5">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-bone/55">{stat.label}</p>
              <p className="mt-2 font-display text-[28px] font-bold leading-none text-bone">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-[24px] font-bold text-bone">Booking requests</h2>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-bone/50">
              Latest {bookingRows.length}
            </p>
          </div>
          <div className="mt-5 space-y-3">
            {bookingRows.length === 0 ? (
              <p className="rounded-2xl border border-bone/12 bg-bone/[0.03] p-6 text-[15px] text-bone/50">
                No booking requests yet. Submit one from the{" "}
                <Link href="/contact" className="font-bold text-clay">
                  booking page
                </Link>{" "}
                to see it appear here.
              </p>
            ) : null}
            {bookingRows.map((row) => (
              <article key={row.id} className="rounded-2xl border border-bone/12 bg-bone/[0.03] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="rounded-full border border-bone/20 px-2.5 py-1 font-display text-[12px] font-bold text-clay">
                      {row.reference}
                    </span>
                    <span className="rounded-full bg-clay px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-white">
                      {row.status}
                    </span>
                    <span className="text-[13px] text-bone/55">
                      Received {row.createdAt.toLocaleDateString("en-NG", { day: "numeric", month: "short" })}
                    </span>
                  </div>
                  <p className="font-display text-[17px] font-semibold text-bone">
                    {dateLabel(row.sessionDate)} · {row.sessionTime}
                  </p>
                </div>
                <div className="mt-4 grid gap-3 text-[14px] sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-bone/50">Client</p>
                    <p className="mt-1 font-bold text-bone">{row.name}</p>
                    <p className="text-bone/50">{row.phone}</p>
                    <p className="break-all text-bone/50">{row.email}</p>
                  </div>
                  <div>
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-bone/50">Service</p>
                    <p className="mt-1 text-bone/80">{row.service}</p>
                    <p className="text-bone/55">{row.packageName || "Package TBC"}</p>
                  </div>
                  <div>
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-bone/50">Details</p>
                    <p className="mt-1 text-bone/80">{row.location}</p>
                    <p className="text-bone/55">
                      {row.guests} on set · {row.addOns || "no add-ons"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.16em] text-bone/50">Brief</p>
                    <p className="mt-1 max-w-xs text-bone/60">{row.brief || "—"}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-[24px] font-bold text-bone">Enquiries</h2>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-bone/50">
              Latest {enquiryRows.length}
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {enquiryRows.length === 0 ? (
              <p className="rounded-2xl border border-bone/12 bg-bone/[0.03] p-6 text-[15px] text-bone/50 md:col-span-2">
                No contact messages yet.
              </p>
            ) : null}
            {enquiryRows.map((row) => (
              <article key={row.id} className="rounded-2xl border border-bone/12 bg-bone/[0.03] p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-display text-[17px] font-semibold text-bone">{row.name}</p>
                  <span className="rounded-full border border-bone/20 px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-bone/60">
                    {row.topic}
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-bone/55">
                  {row.email}
                  {row.phone ? ` · ${row.phone}` : ""}
                </p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-bone/65">{row.message}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function fetchBookings() {
  return db.select().from(bookings).orderBy(desc(bookings.createdAt)).limit(30);
}

function fetchEnquiries() {
  return db.select().from(enquiries).orderBy(desc(enquiries.createdAt)).limit(20);
}
