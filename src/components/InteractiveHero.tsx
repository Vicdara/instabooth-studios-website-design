import { HeroImageAdjuster } from "@/components/HeroImageAdjuster";
import { ArrowIcon } from "@/components/Header";
import { photos } from "@/lib/site";
import Link from "next/link";

export function Hero() {
  return (
    <section className="grain relative flex min-h-[calc(100svh-5.375rem)] items-center overflow-hidden bg-ink py-10 sm:py-12 lg:py-12">
      {/* 1. Warm studio lighting / key-lights */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-10 size-[38rem] rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(236,90,46,0.35), transparent 65%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-20 size-[34rem] rounded-full opacity-35 blur-[110px]"
        style={{ background: "radial-gradient(circle, rgba(216,178,122,0.45), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -top-32 size-[44rem] -translate-x-1/2 rounded-full opacity-25 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(236,90,46,0.3), transparent 70%)" }}
      />

      {/* 2. Studio Viewfinder Grid with soft radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(242, 236, 225, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(242, 236, 225, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 85%)",
        }}
      />

      {/* 3. Subtle Concentric Lens / Viewfinder Ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
      >
        <svg viewBox="0 0 600 600" className="size-full animate-spin-slow">
          <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 14" className="text-bone" />
          <circle cx="300" cy="300" r="230" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 10" className="text-bone" />
          <circle cx="300" cy="300" r="170" fill="none" stroke="currentColor" strokeWidth="1" className="text-bone" />
        </svg>
      </div>

      {/* 4. Giant subtle studio typography watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[68%] top-1/2 select-none -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[14vw] font-black uppercase tracking-tight text-bone/[0.015]"
      >
        Instabooth
      </div>

      {/* 5. Minimalist camera framing viewfinder marks */}
      <div aria-hidden className="pointer-events-none absolute inset-x-8 inset-y-6 hidden sm:block">
        <span className="absolute left-0 top-0 font-mono text-[10px] tracking-widest text-bone/20">⌜ 6°30′N · 3°23′E</span>
        <span className="absolute right-0 top-0 font-mono text-[10px] tracking-widest text-bone/20">FRAME · 01 ⌝</span>
        <span className="absolute bottom-0 left-0 font-mono text-[10px] tracking-widest text-bone/20">⌞ YABA · LAGOS</span>
        <span className="absolute bottom-0 right-0 font-mono text-[10px] tracking-widest text-bone/20">5600K · STUDIO ⌟</span>
      </div>

      {/* ================= MAIN HERO GRID ================= */}
      <div className="shell relative w-full">
        <HeroImageAdjuster
          src={photos("20261105_081147_DfWkr-0CH_f_2.webp", 1200)}
          alt="Editorial portrait photographed under studio lighting at Instabooth Studios in Yaba"
          smallSrc={photos("20261031_070040_DfJkhT7iFtO_1.webp", 600)}
          smallAlt="Black editorial look photographed at Instabooth Studios"
          text={
            <div className="relative z-20 max-w-xl py-4 lg:py-0">
              <p className="eyebrow text-clay">Instabooth Studios</p>
              <h1 className="display-xl mt-5 max-w-[12ch] text-bone">
                Your story,
                <br />
                in its <span className="text-clay">best light.</span>
              </h1>
              <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-bone/65 md:text-[17px]">
                From portraits and family stories to brand shoots, event films and costume styling, our Yaba team shapes the light and direction around you.
              </p>
              <Link href="/contact" className="btn btn-clay mt-8">
                Book a session <ArrowIcon />
              </Link>
            </div>
          }
        />
      </div>
    </section>
  );
}

export const InteractiveHero = Hero;

