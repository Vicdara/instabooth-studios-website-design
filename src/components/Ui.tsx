import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon, InstagramIcon, WhatsAppIcon } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { PageHeroAdjuster } from "@/components/PageHeroAdjuster";
import { photos, site, whatsappLink } from "@/lib/site";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  action?: ReactNode;
}) {
  const light = tone === "light";
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={align === "center" ? "max-w-3xl" : "max-w-2xl"}>
        {eyebrow ? (
          <Reveal>
            <p className={`eyebrow ${light ? "text-clay-deep" : "text-clay"}`}>{eyebrow}</p>
          </Reveal>
        ) : null}
        <Reveal delay={eyebrow ? 90 : 0}>
          <h2 className={`display-lg ${eyebrow ? "mt-3.5" : ""} ${light ? "text-ink" : "text-bone"}`}>{title}</h2>
        </Reveal>
        {intro ? (
          <Reveal delay={160}>
            <p className={`mt-3.5 text-[14.5px] leading-relaxed md:text-[15.5px] ${light ? "paper-muted" : "text-bone/70"}`}>
              {intro}
            </p>
          </Reveal>
        ) : null}
      </div>
      {action ? (
        <Reveal delay={220} className={align === "center" ? "" : "shrink-0"}>
          {action}
        </Reveal>
      ) : null}
    </div>
  );
}

export type HeroAction = {
  label: string;
  href: string;
  icon?: "whatsapp" | "instagram";
};

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageContent,
  imageBadge,
  meta,
  crumb,
  showFindUs = false,
  fit = false,
  secondaryAction,
  adjustable = true,
  defaultTextTransform,
  defaultImageTransform,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: number | string;
  imageContent?: ReactNode;
  imageBadge?: ReactNode;
  meta?: { label: string; value: string }[];
  crumb?: string;
  showFindUs?: boolean;
  /** Show the full image uncropped, using its natural aspect ratio. */
  fit?: boolean;
  secondaryAction?: HeroAction;
  adjustable?: boolean;
  defaultTextTransform?: { scale?: number; x?: number; y?: number };
  defaultImageTransform?: { scale?: number; x?: number; y?: number; width?: number };
}) {
  return (
    <section
      className={`relative bg-ink py-4 md:py-6 lg:py-6 ${
        fit ? "lg:flex lg:min-h-[calc(100svh-86px)] lg:items-center" : ""
      }`}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* 1. Ambient Lighting Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -top-32 size-[36rem] rounded-full opacity-35 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(236,90,46,0.45), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 size-[30rem] rounded-full opacity-20 blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(216,178,122,0.35), transparent 70%)" }}
      />

      {/* 2. Studio Viewfinder Grid with soft radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(242, 236, 225, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(242, 236, 225, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 85%)",
        }}
      />

      {/* 3. Concentric Lens Viewfinder Rings */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
      >
        <svg viewBox="0 0 600 600" className="size-full">
          <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 14" className="text-bone" />
          <circle cx="300" cy="300" r="210" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 10" className="text-bone" />
          <circle cx="300" cy="300" r="150" fill="none" stroke="currentColor" strokeWidth="1" className="text-bone" />
        </svg>
      </div>

      {/* 4. Subtle Studio Typography Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[14vw] font-black uppercase tracking-tight text-bone/[0.02]"
      >
        Instabooth
      </div>

      {/* 5. Minimalist camera framing viewfinder marks */}
      <div aria-hidden className="pointer-events-none absolute inset-x-8 inset-y-6 hidden sm:block">
        <span className="absolute left-0 top-0 font-mono text-[9.5px] tracking-widest text-bone/20">⌜ INSTABOOTH · 01</span>
        <span className="absolute right-0 top-0 font-mono text-[9.5px] tracking-widest text-bone/20">6°30′N · 3°23′E ⌝</span>
        <span className="absolute bottom-0 left-0 font-mono text-[9.5px] tracking-widest text-bone/20">⌞ YABA · LAGOS</span>
        <span className="absolute bottom-0 right-0 font-mono text-[9.5px] tracking-widest text-bone/20">5600K · STUDIO ⌟</span>
      </div>
      </div>

      <PageHeroAdjuster
        key={eyebrow}
        className="shell relative grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14"
        imageClassName={fit ? "w-full max-w-[27rem] sm:max-w-[30rem] lg:max-w-[32rem]" : "w-full max-w-[28rem] sm:max-w-[31rem] lg:max-w-[33rem]"}
        defaultTextTransform={defaultTextTransform}
        defaultImageTransform={defaultImageTransform}
        text={
          <div>
          {crumb ? (
            <Reveal key="breadcrumb">
              <p className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.2em] text-bone/55">
                <Link key="home-link" href="/" className="transition hover:text-bone">
                  Instabooth
                </Link>
                <span key="crumb-separator" className="text-clay">/</span>
                <span key="crumb-label" className="text-bone/80">{crumb}</span>
              </p>
            </Reveal>
          ) : null}
          <Reveal key="eyebrow" delay={80}>
            <p className={`eyebrow text-clay ${crumb ? "mt-4" : "mt-2.5 md:mt-3"}`}>{eyebrow}</p>
          </Reveal>
          <Reveal key="title" delay={140}>
            <h1 className="display-xl mt-4 md:mt-5 text-bone">{title}</h1>
          </Reveal>
          <Reveal key="intro" delay={220}>
            <p className="lede mt-6 max-w-xl text-[17px] leading-relaxed text-bone/70 md:text-[16.5px]">
              {intro}
            </p>
          </Reveal>
          <Reveal key="actions" delay={300}>
            <div className="mt-8 flex flex-nowrap items-center gap-2 md:mt-9 md:gap-3.5">
              <Link key="book-link" href="/contact" className="btn btn-clay shrink-0 !gap-1.5 !px-2.5 !py-3 !text-[12px] whitespace-nowrap sm:!gap-2.5 sm:!px-5 sm:!py-4 sm:!text-[14px]">
                Book a session <ArrowIcon />
              </Link>
              {secondaryAction?.icon === "instagram" ? (
                <a
                  key="instagram-action"
                  href={secondaryAction.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap border-0 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] !px-2.5 !py-3 !text-[12px] font-bold text-white shadow-lg shadow-[#dc2743]/20 transition hover:scale-[1.02] hover:opacity-95 sm:!gap-2 sm:!px-5 sm:!py-4 sm:!text-[14px]"
                >
                  <InstagramIcon className="size-4 text-white" />
                  {secondaryAction.label}
                </a>
              ) : (
                <a
                  key="secondary-action"
                  href={secondaryAction?.href ?? whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap border border-[#25D366] bg-[#25D366] !px-2.5 !py-3 !text-[12px] text-white transition hover:border-[#20bd5a] hover:bg-[#20bd5a] sm:!gap-2 sm:!px-5 sm:!py-4 sm:!text-[14px]"
                >
                  <WhatsAppIcon className="size-4" />
                  {secondaryAction?.label ?? "Chat on WhatsApp"}
                </a>
              )}
            </div>
          </Reveal>
          {meta?.length ? (
            <Reveal key="meta" delay={380}>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-bone/12 pt-6 sm:grid-cols-3">
                {meta.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <dt className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-bone/50">
                      {item.label}
                    </dt>
                    <dd className="mt-1 break-all font-display text-[16px] font-semibold text-bone">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ) : null}
          </div>
        }
        image={
          <Reveal
            variant="scale"
            delay={180}
            className="relative w-full"
          >
            <div className="page-hero-image-inner relative mx-auto" style={{ width: "var(--hero-image-width, 100%)" }}>
              <div
                key="image-frame"
                className={
                  fit
                    ? `relative w-full overflow-hidden rounded-2xl border border-bone/12 shadow-2xl ${adjustable ? "" : "aspect-[3.85/5] max-h-[min(34rem,calc(100svh-9rem))]"}`
                    : `relative w-full overflow-hidden rounded-2xl border border-bone/12 shadow-2xl ${adjustable ? "" : "aspect-[5/6] max-h-[33rem]"}`
                }
              style={adjustable
                ? { height: fit
                    ? "min(34rem, calc(100svh - 9rem), calc(130vw - 3.9rem))"
                    : "min(33rem, calc(100svh - 9rem), calc(120vw - 3.6rem))" }
                : undefined}
              >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {imageContent ?? (
              <img
                key="portrait"
                src={photos(image, 1200)}
                alt={`${site.name} — ${eyebrow.toLowerCase()}`}
                className="size-full object-cover object-center"
                loading="eager"
              />
            )}
            {!imageContent ? <div key="overlay" className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" /> : null}
            {showFindUs ? (
              <div key="find-us" className="absolute inset-x-3.5 bottom-3.5 flex items-center justify-between gap-3 rounded-xl border border-bone/20 bg-ink/65 px-3.5 py-2.5 backdrop-blur-md">
                <div key="address">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-bone/50">Find us</p>
                  <p className="mt-0.5 text-[13px] font-semibold text-bone">
                    {site.address.lead}, {site.address.area}
                  </p>
                </div>
                <span key="arrow" className="grid size-8 shrink-0 place-items-center rounded-full bg-clay text-white">
                  <ArrowIcon className="size-3.5 -rotate-45" />
                </span>
              </div>
            ) : null}
              </div>
              {imageBadge ? (
                <div className="pointer-events-none absolute -right-2 -top-2 z-30 sm:-right-4 sm:-top-4">
                  {imageBadge}
                </div>
              ) : null}
            </div>
          </Reveal>
        }
      />
    </section>
  );
}

export function Marquee({ items, tone = "dark", bordered = true }: { items: string[]; tone?: "dark" | "clay"; bordered?: boolean }) {
  const clay = tone === "clay";
  const content = [...items, ...items];
  return (
    <div
      className={`marquee-shell relative flex overflow-hidden py-4 ${bordered ? "border-y" : ""} ${
        clay ? "border-ink/15 bg-clay text-white" : "border-bone/12 bg-ink-2 text-bone"
      }`}
    >
      <div className="marquee-track items-center gap-10 pr-10">
        {content.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-10 text-[13px] font-bold uppercase tracking-[0.22em]"
          >
            {item}
            <span className={`inline-block size-1.5 rounded-full ${clay ? "bg-white/70" : "bg-clay"}`} aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-clay text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.9) 0 1px, transparent 1px 26px)",
        }}
      />
      <div className="shell relative py-16 md:py-24 lg:py-28">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow text-white/75">Your session starts here</p>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="display-lg mt-3.5 max-w-2xl text-white">
                Let&apos;s put your story in front of our light.
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-3.5 max-w-xl text-[14.5px] leading-relaxed text-white/80">
                Tell us the date, the mood and the service. You will get availability and a clear quote,
                usually within 24 hours.
              </p>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <div className="flex flex-col gap-2.5 sm:flex-row lg:justify-end">
              <Link href="/contact" className="btn btn-ink">
                Book a session <ArrowIcon />
              </Link>
              <a href={site.phones[0].href} className="btn border border-white/45 text-white hover:bg-white/10">
                {site.phones[0].display}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full border border-white/15 bg-[#1faa59] py-2.5 pl-2.5 pr-4 text-white shadow-[0_14px_35px_-10px_rgba(0,0,0,0.65)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#178c48] md:bottom-7 md:right-7"
      aria-label="Chat with Instabooth Studios on WhatsApp"
    >
      <span className="grid size-10 place-items-center rounded-full bg-white/15">
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden>
          <path d="M12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.85 9.85 0 0 0 4.68 1.19h.01c5.43 0 9.85-4.42 9.85-9.86A9.8 9.8 0 0 0 19 4.9 9.79 9.79 0 0 0 12.04 2Zm0 17.96a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.1.81.83-3.02-.2-.31a8.15 8.15 0 0 1-1.25-4.32c0-4.52 3.68-8.19 8.2-8.19 2.19 0 4.25.85 5.79 2.4a8.13 8.13 0 0 1 2.4 5.8c0 4.52-3.68 8.19-8.2 8.19Z" />
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.65-1.57-.9-2.15-.23-.56-.47-.49-.65-.5-.17 0-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.34 5.1 4.55.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.75-.71 2-1.4.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
        </svg>
      </span>
      <span className="hidden text-[14px] font-bold sm:block">Chat with us</span>
    </a>
  );
}
