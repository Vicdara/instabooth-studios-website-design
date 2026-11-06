import Link from "next/link";
import { WhatsAppIcon } from "@/components/Header";
import { nav, services, site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#0c0908] text-bone">
      {/* Warm ambient glow matching reference footer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(225, 85, 40, 0.25), transparent 75%)",
        }}
      />

      <div className="shell relative grid gap-10 pt-20 pb-16 md:grid-cols-2 md:pt-24 md:pb-18 lg:grid-cols-[1.3fr_0.8fr_1fr_1.2fr] lg:pt-28 lg:pb-20">
        {/* Brand column */}
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-full border border-bone/25 bg-bone/5 font-display text-sm font-bold">
              IB
            </span>
            <span className="leading-none">
              <span className="block font-display text-[20px] font-bold tracking-tight text-bone">
                Instabooth<span className="text-clay">.</span>
              </span>
              <span className="mt-0.5 block text-[11px] font-bold uppercase tracking-[0.3em] text-bone/50">
                Studios
              </span>
            </span>
          </Link>

          <p className="mt-4 max-w-xs text-[16px] leading-relaxed text-bone/65">
            Studio photography, photo &amp; video production and costume rental in Sabo, Yaba — serving Lagos and beyond.
          </p>

          {/* Star rating */}
          <div className="mt-4 flex items-center gap-2 text-[14.5px] font-medium text-bone/75">
            <div className="flex items-center gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="size-3.5">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>5.0 Google rating</span>
          </div>

          {/* Social circular icon buttons */}
          <div className="mt-4 flex items-center gap-2.5">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid size-8 place-items-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm transition hover:scale-110 hover:shadow-md"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid size-8 place-items-center rounded-full bg-[#25D366] text-white shadow-sm transition hover:scale-110 hover:shadow-md hover:bg-[#20bd5a]"
            >
              <WhatsAppIcon className="size-4" />
            </a>

            <a
              href={site.phones[0].href}
              aria-label="Call studio"
              className="grid size-8 place-items-center rounded-full bg-[#1877F2] text-white shadow-sm transition hover:scale-110 hover:shadow-md hover:bg-[#166fe5]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-bone/50">Explore</p>
          <ul className="mt-4 space-y-3 text-[16px]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-bone/70 transition hover:text-clay">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="font-semibold text-bone transition hover:text-clay">
                Book a session
              </Link>
            </li>
          </ul>
        </div>

        {/* Services / What we shoot */}
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-bone/50">What we shoot</p>
          <ul className="mt-4 space-y-3 text-[16px]">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/services#${service.id}`}
                  className="text-bone/70 transition hover:text-clay"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Studio / Contact */}
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-bone/50">Studio</p>
          <div className="mt-4 space-y-3.5 text-[16px]">
            {/* Address */}
            <div className="flex items-start gap-2.5 text-bone/75">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 size-4 shrink-0 text-[#ec5a2e]" aria-hidden>
                <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <div>
                <p className="font-medium text-bone">{site.address.lead}</p>
                <p className="text-bone/60">{site.address.area}, {site.address.city}, {site.address.country}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5 text-bone/75">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 shrink-0 text-[#a855f7]" aria-hidden>
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
              <a href={`mailto:${site.email}`} className="text-bone/80 transition hover:text-clay">
                {site.email}
              </a>
            </div>

            {/* Instagram handle */}
            <div className="flex items-center gap-2.5 text-bone/75">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 shrink-0 text-[#f09433]" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-bone/80 transition hover:text-clay">
                {site.instagramHandle}
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2.5 text-bone/75">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4 shrink-0 text-[#25D366]" aria-hidden>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <a href={site.phones[0].href} className="text-bone/80 transition hover:text-clay">
                {site.phones[0].display}
              </a>
            </div>

            {/* Note */}
            <p className="pt-2 text-[14px] leading-relaxed text-bone/45">
              Sessions by appointment. Public opening hours vary — message before visiting.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom copyright bar */}
      <div className="shell relative">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] py-6 text-[14px] text-bone/50">
          <p>© {new Date().getFullYear()} Instabooth Studios. All frames reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
            <span>Mon–Sat · by appointment</span>
            <Link href="/studio-desk" className="transition hover:text-bone">
              Studio desk
            </Link>
            <Link href="/contact" className="transition hover:text-bone">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
