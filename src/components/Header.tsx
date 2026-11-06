"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 24);

      if (open) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      if (currentScrollY <= 40) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY + 8) {
        // Scrolling down -> hide header
        setVisible(false);
      } else if (currentScrollY < lastScrollY - 8) {
        // Scrolling up -> reveal header
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-[65] border-b transition-all duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "border-bone/12 bg-ink/92 backdrop-blur-xl shadow-lg shadow-black/20"
            : "border-transparent bg-gradient-to-b from-ink/80 to-transparent"
        }`}
      >
        <div className="shell flex h-[74px] items-center justify-between gap-4 md:h-[86px]">
          <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} home`}>
            <span className="relative grid size-11 place-items-center rounded-full border border-bone/25 bg-bone/5 font-display text-[15px] font-bold tracking-tight text-bone transition-colors duration-500 group-hover:border-clay group-hover:bg-clay group-hover:text-white">
              IB
            </span>
            <span className="leading-none">
              <span className="block font-display text-[19px] font-bold tracking-[-0.03em] text-bone md:text-[21px]">
                Instabooth<span className="text-clay">.</span>
              </span>
              <span className="mt-1 block text-[11.5px] font-bold uppercase tracking-[0.34em] text-bone/55">
                Studios
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {nav.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-2 text-[15px] font-semibold transition-colors ${
                    active ? "text-bone" : "text-bone/65 hover:text-bone"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-clay transition-all duration-400 ${
                      active ? "w-5" : "w-0 group-hover:w-5"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link href="/contact" className="btn btn-clay hidden sm:inline-flex">
              Book a session
              <ArrowIcon />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="grid size-11 place-items-center rounded-full border border-bone/25 text-bone lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 block h-[2px] w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-[2px] w-5 bg-current transition-all duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-[2px] w-5 bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-[74px] z-[64] transition-all duration-500 md:top-[86px] lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ink/97 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div
          className={`shell relative flex h-full min-h-0 flex-col justify-between py-4 sm:py-6 transition-transform duration-500 ${
            open ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="flex flex-1 flex-col justify-evenly" aria-label="Mobile">
            {nav.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-bone/12 py-3.5 font-display text-3xl font-bold tracking-tight text-bone transition hover:text-clay sm:py-4 sm:text-4xl"
                style={{ transitionDelay: open ? `${index * 40}ms` : "0ms" }}
              >
                {item.label}
                <span className="text-xs font-bold tracking-[0.2em] text-bone/50">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>
          <div className="pt-4 sm:pt-6">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn btn-clay w-full justify-center py-4 text-[17px]">
              Book a session <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export function WhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.9-2.15-.23-.56-.47-.49-.65-.5-.17 0-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.34 5.1 4.55.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.85 9.85 0 0 0 4.68 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0 0 19 4.9 9.79 9.79 0 0 0 12.04 2Zm0 17.96a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.15 8.15 0 0 1-1.25-4.32c0-4.52 3.68-8.19 8.2-8.19 2.19 0 4.25.85 5.79 2.4a8.13 8.13 0 0 1 2.4 5.8c0 4.52-3.68 8.19-8.2 8.19Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}
