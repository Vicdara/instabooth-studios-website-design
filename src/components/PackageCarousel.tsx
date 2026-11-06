"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import type { Pack } from "@/lib/site";

export function PackageCarousel({ packages }: { packages: Pack[] }) {
  const pageCount = Math.ceil(packages.length / 3);
  const [page, setPage] = useState(0);
  const shown = packages.slice(page * 3, page * 3 + 3);
  const first = page * 3 + 1;
  const last = Math.min(first + shown.length - 1, packages.length);

  return (
    <div className="mt-12">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink/50" aria-live="polite">
          {String(first).padStart(2, "0")}–{String(last).padStart(2, "0")} of {String(packages.length).padStart(2, "0")} packages
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Show previous packages"
            onClick={() => setPage((current) => Math.max(0, current - 1))}
            disabled={page === 0}
            className="grid size-10 place-items-center rounded-full border border-ink/20 text-ink transition hover:bg-ink hover:text-bone disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            <ArrowIcon className="size-4 rotate-180" />
          </button>
          <button
            type="button"
            aria-label="Show next packages"
            onClick={() => setPage((current) => Math.min(pageCount - 1, current + 1))}
            disabled={page >= pageCount - 1}
            className="grid size-10 place-items-center rounded-full border border-ink/20 text-ink transition hover:bg-ink hover:text-bone disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-ink"
          >
            <ArrowIcon className="size-4" />
          </button>
        </div>
      </div>

      <div aria-live="polite" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((pack, index) => (
          <Reveal key={pack.name} delay={index * 60}>
            <PackageCardView pack={pack} />
          </Reveal>
        ))}
      </div>

      <p className="mt-6 text-[13.5px] leading-relaxed text-ink/60">
        Edited pictures are ready within 24 hours. Extra edited pictures are ₦3,000 each (product shoots have their listed rates). Need a different setup?{" "}
        <Link href="/contact" className="font-semibold text-clay-deep underline underline-offset-4">
          Send us a custom brief.
        </Link>
      </p>
    </div>
  );
}

function PackageCardView({ pack }: { pack: Pack }) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
        pack.featured
          ? "border-ink bg-ink text-bone shadow-[0_28px_60px_-30px_rgba(11,10,9,0.7)]"
          : "border-ink/15 bg-white/60 text-ink hover:border-ink/40"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`text-[11.5px] font-bold uppercase tracking-[0.18em] ${pack.featured ? "text-clay" : "text-clay-deep"}`}>
            {pack.name === "Item Product Shoot" || pack.name === "Model Product Shoot" ? "Product photography" : "Photoshoot package"}
          </p>
          <h3 className="mt-4 font-display text-[24px] font-bold leading-tight">{pack.name}</h3>
        </div>
        {pack.badge ? (
          <span className="shrink-0 rounded-full border border-clay bg-clay px-2.5 py-1 text-[11.5px] font-bold uppercase tracking-[0.12em] text-white">
            {pack.badge}
          </span>
        ) : null}
      </div>
      <p className={`mt-3 text-[15px] leading-relaxed ${pack.featured ? "text-bone/55" : "text-ink/55"}`}>
        Best for: {pack.bestFor}
      </p>
      <div className={`mt-6 flex-1 border-t pt-4 ${pack.featured ? "border-bone/15" : "border-ink/10"}`}>
        <p className={`mb-2 text-[10.5px] font-bold uppercase tracking-[0.16em] ${pack.featured ? "text-bone/45" : "text-ink/45"}`}>
          Package · price
        </p>
        <ul className="space-y-2.5">
          {pack.prices.map((price) => (
            <li key={price.detail} className="flex items-baseline justify-between gap-3">
              <span className={`text-[13px] leading-snug ${pack.featured ? "text-bone/75" : "text-ink/70"}`}>{price.detail}</span>
              <span className={`shrink-0 font-display text-[15px] font-bold ${pack.featured ? "text-bone" : "text-ink"}`}>{price.amount}</span>
            </li>
          ))}
        </ul>
        {pack.note ? (
          <p className={`mt-3 border-t pt-3 text-[12.5px] leading-relaxed ${pack.featured ? "border-bone/10 text-bone/55" : "border-ink/10 text-ink/55"}`}>
            {pack.note}
          </p>
        ) : null}
      </div>
      <div className="mt-8">
        <Link href="/contact" className={`btn mt-3 w-full ${pack.featured ? "btn-clay" : "btn-ink"}`}>
          Book this package <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

