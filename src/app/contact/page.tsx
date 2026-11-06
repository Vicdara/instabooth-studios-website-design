import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ArrowIcon } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { CTABand, PageHero, SectionHeading } from "@/components/Ui";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Visit",
  description:
    "Contact Instabooth Studios in Sabo, Yaba, Lagos. Call +234 818 875 7888 or +234 909 787 5736, WhatsApp the studio, or send an enquiry about photography, video and costume rental.",
  alternates: { canonical: "/contact" },
};

const channels = [
  {
    label: "Main line",
    value: site.phones[0].display,
    href: site.phones[0].href,
    note: "Studio enquiries, bookings and fittings",
    action: "Call the studio",
    icon: "phone" as const,
  },
  {
    label: "Second line",
    value: site.phones[1].display,
    href: site.phones[1].href,
    note: "Try this line if the first is on set",
    action: "Call the second line",
    icon: "phone" as const,
  },
  {
    label: "WhatsApp",
    value: "Message the studio",
    href: whatsappLink(),
    note: "Send references, dates and costume screenshots",
    action: "Open WhatsApp",
    icon: "chat" as const,
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Best for briefs, invoices and documents",
    action: "Write to the studio",
    icon: "mail" as const,
  },
  {
    label: "Instagram",
    value: site.instagramHandle,
    href: site.instagram,
    note: "Latest frames and behind-the-scenes",
    action: "View the profile",
    icon: "instagram" as const,
  },
  {
    label: "Visit",
    value: `${site.address.lead}, ${site.address.area}`,
    href: site.mapsLink,
    note: `${site.address.city}, ${site.address.country} · by appointment`,
    action: "Get directions",
    icon: "pin" as const,
  },
];

function ChannelIcon({ name }: { name: "phone" | "chat" | "mail" | "instagram" | "pin" }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "size-5",
    "aria-hidden": true,
  };
  if (name === "phone")
    return (
      <svg {...common}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
      </svg>
    );
  if (name === "chat")
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-[22px]" aria-hidden>
        <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.85 9.85 0 0 0 4.68 1.19c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0 0 12.04 2Zm0 17.96a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.15 8.15 0 0 1-1.25-4.32c0-4.52 3.68-8.19 8.2-8.19 2.19 0 4.25.85 5.79 2.4a8.13 8.13 0 0 1 2.4 5.8c0 4.52-3.68 8.19-8.2 8.19Z" />
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.9-2.15-.23-.56-.47-.49-.65-.5-.17 0-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.34 5.1 4.55.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    );
  if (name === "mail")
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const channelIconStyle = {
  phone:
    "border-clay/35 bg-clay/12 text-clay group-hover:border-clay/60 group-hover:bg-clay/20 group-hover:text-[#ff7043]",
  chat: "border-[#25D366]/30 bg-[#25D366] text-white shadow-[0_10px_26px_-12px_rgba(37,211,102,0.9)]",
  mail: "border-gold/35 bg-gold/12 text-gold group-hover:border-gold/60 group-hover:bg-gold/20 group-hover:text-[#e8c894]",
  instagram:
    "border-0 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-[0_10px_26px_-12px_rgba(220,39,67,0.85)]",
  pin: "border-[#3b82f6]/35 bg-[#3b82f6]/12 text-[#60a5fa] group-hover:border-[#3b82f6]/60 group-hover:bg-[#3b82f6]/20 group-hover:text-[#93c5fd]",
};

const channelGlow = {
  phone: "bg-clay/25",
  chat: "bg-[#25D366]/20",
  mail: "bg-gold/20",
  instagram: "bg-[#dc2743]/25",
  pin: "bg-[#3b82f6]/20",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Talk to the studio"
        title={
          <>
            Let&apos;s get
            <br />
            you <span className="text-clay">booked.</span>
          </>
        }
        intro="Call, WhatsApp, email or send the form. Tell us the service, the date and the idea — the studio replies with availability and a clear quote."
        image={13699196}
        adjustable
        defaultTextTransform={{ scale: 1.01, x: 5, y: 0 }}
        defaultImageTransform={{ width: 83, scale: 1.16, x: 56, y: -4 }}
      />

      <section id="direct-lines" className="relative bg-ink py-12 md:py-16">
        <div className="shell">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-x-6 gap-y-2 md:mb-8">
            <p className="eyebrow text-clay">Direct lines</p>
            <p className="text-[12.5px] text-bone/40">Tap a card to reach the studio</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {channels.map((channel, index) => (
              <Reveal key={channel.label} delay={index * 60}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative flex h-full min-h-[12.5rem] flex-col overflow-hidden rounded-2xl border border-bone/12 bg-gradient-to-br from-bone/[0.055] via-bone/[0.025] to-bone/[0.01] p-5 shadow-sm shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-clay/40 hover:shadow-xl hover:shadow-black/25 sm:p-6"
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -right-8 -top-10 size-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${channelGlow[channel.icon]}`}
                  />
                  <div className="relative flex items-start justify-between gap-3">
                    <p className="pt-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-bone/50">
                      {channel.label}
                    </p>
                    <span
                      className={`grid size-11 shrink-0 place-items-center rounded-full border transition-transform duration-300 group-hover:scale-105 ${channelIconStyle[channel.icon]}`}
                    >
                      <ChannelIcon name={channel.icon} />
                    </span>
                  </div>
                  <div className="relative mt-3 flex-1">
                    <p className="break-words font-display text-[18px] font-semibold leading-snug text-bone transition-colors duration-300 group-hover:text-clay sm:text-[19px]">
                      {channel.value}
                    </p>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-bone/50 sm:text-[13.5px]">
                      {channel.note}
                    </p>
                  </div>
                  <div className="relative mt-5 flex items-center justify-between gap-3 border-t border-bone/10 pt-3.5">
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-bone/35 transition-colors duration-300 group-hover:text-bone/60">
                      {channel.action}
                    </span>
                    <ArrowIcon className="size-3.5 shrink-0 text-bone/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-clay" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="send-message" className="paper py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <SectionHeading
              tone="light"
              eyebrow="Send a message"
              title={
                <>
                  A short brief is
                  <br /> all we need to start.
                </>
              }
              intro="Tell us what you have in mind, when you need it and any references that can help. We’ll reply with availability and a clear next step."
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-5">
            <Reveal>
              <div className="rounded-2xl border border-ink/15 bg-white/60 p-6">
                <p className="eyebrow text-clay-deep">Studio hours</p>
                <dl className="mt-5 space-y-3">
                  {site.hours.map((entry) => (
                    <div
                      key={entry.day}
                      className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-[15px] text-ink/60">{entry.day}</dt>
                      <dd className="font-display text-[16px] font-bold text-ink">{entry.time}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-[13.5px] leading-relaxed text-ink/62">{site.hoursNote}</p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="rounded-2xl bg-ink p-6 text-bone">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-bone/55">
                  Before you visit
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-bone/70">
                  Instabooth is at 1–11 Commercial Avenue, Sabo, Yaba. The studio is on an appointment
                  basis, so message or call first — especially on Sundays. The exact suite and the
                  preferred phone line are confirmed by the team when your session is set.
                </p>
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow mt-5 inline-flex text-[14px] text-clay"
                >
                  Open the location in Maps
                </a>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-2xl border border-ink/15 bg-white/60 p-6">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-clay-deep">
                  Helpful to include
                </p>
                <ul className="mt-4 space-y-2.5 text-[14.5px] text-ink/65">
                  {[
                    "Service and preferred date",
                    "Number of people and looks",
                    "Costume pieces or styling needs",
                    "Location (studio or on-site)",
                    "Any references or moodboards",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-clay-deep" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="#send-message" className="btn btn-ink mt-5 w-full">
                  Send an enquiry <ArrowIcon />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="paper py-12 md:py-16">
        <div className="shell">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="eyebrow text-clay-deep">Find us in Yaba</p>
            <h2 className="display-md mt-3 text-ink">
              Find our studio in <span className="text-clay-deep">Yaba.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15.5px] leading-relaxed text-ink/60">
              We’re at 1–11 Commercial Avenue. Visits are by appointment, so message us before you arrive and we’ll help you find us.
            </p>
          </div>
          <div className="mx-auto max-w-[72rem] overflow-hidden rounded-2xl border border-ink/15 shadow-lg">
            <iframe
              title="Map of Instabooth Studios, Commercial Avenue, Sabo, Yaba, Lagos"
              src={site.mapEmbed}
              className="h-[380px] w-full sm:h-[460px] md:h-[560px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
