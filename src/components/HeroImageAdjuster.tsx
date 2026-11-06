"use client";

import type { CSSProperties, ReactNode } from "react";

type HeroImageAdjusterProps = {
  src: string;
  alt: string;
  smallSrc: string;
  smallAlt: string;
  text: ReactNode;
};
type Transform = { scale: number; x: number; y: number };

const imageDefault: Transform = { scale: 0.92, x: 41, y: -54 };
const smallDefault: Transform = { scale: 0.87, x: -76, y: 11 };
const textDefault: Transform = { scale: 0.99, x: -8, y: -48 };

export function HeroImageAdjuster({ src, alt, smallSrc, smallAlt, text }: HeroImageAdjusterProps) {
  return (
    <div className="relative">
      <div className="grid w-full items-center gap-10 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div
          data-user-adjusted="false"
          className="home-hero-text-target relative z-20 max-w-xl"
          style={{
            "--home-hero-text-x": `${textDefault.x}px`,
            "--home-hero-text-y": `${textDefault.y}px`,
            "--home-hero-text-scale": textDefault.scale,
          } as CSSProperties}
        >
          {text}
        </div>
        <div
          data-user-adjusted="false"
          className="home-hero-image-target relative z-20 mx-auto w-full select-none lg:ml-auto lg:mr-0"
          style={{
            width: "min(100%, 40rem, calc((100svh - 7rem) * 0.84))",
            "--home-hero-image-x": `${imageDefault.x}px`,
            "--home-hero-image-y": `${imageDefault.y}px`,
            "--home-hero-image-scale": imageDefault.scale,
          } as CSSProperties}
        >
          <div className="relative aspect-[5/6] overflow-hidden rounded-[1.75rem] border border-bone/12 bg-ink-2 shadow-2xl sm:aspect-[4/5]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={alt} className="breath size-full object-cover" draggable={false} fetchPriority="high" />
            <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full border border-bone/20 bg-ink/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-bone backdrop-blur sm:left-4 sm:top-4 sm:text-[10px]">
              <span aria-hidden className="size-1.5 rounded-full bg-clay" />
              Studio portrait <span aria-hidden>·</span> Yaba
            </span>
          </div>
          <div
            data-user-adjusted="false"
            className="home-hero-small-card pointer-events-none absolute bottom-3 left-4 z-30 w-[min(10rem,38%)] select-none sm:w-44"
            style={{
              "--home-small-x": `${smallDefault.x}px`,
              "--home-small-y": `${smallDefault.y}px`,
              "--home-small-scale": smallDefault.scale,
            } as CSSProperties}
          >
            <div className="animate-floaty overflow-hidden rounded-xl border border-bone/20 bg-ink-2 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={smallSrc} alt={smallAlt} className="aspect-[4/5] w-full object-cover" loading="lazy" draggable={false} />
              <div className="border-t border-clay/30 bg-ink-2 px-2.5 py-2 text-right">
                <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-bone/50">Costume rail</p>
                <p className="mt-0.5 text-[10px] font-semibold leading-tight text-bone">Gele &amp; lace</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
