"use client";

import { useState } from "react";
import { costumeCategories, costumes, photos } from "@/lib/site";

export function CostumeLookbook() {
  const [category, setCategory] = useState<string>("All");
  const visible = category === "All" ? costumes : costumes.filter((look) => look.category === category);

  return (
    <div>
      <div className="mb-7 max-w-2xl">
        <p className="eyebrow text-clay">Explore the rail</p>
        <p className="mt-3 text-[15px] leading-relaxed text-bone/60 md:text-base">
          Find traditional pieces, lace and statement looks for your next portrait or celebration.
        </p>
      </div>
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter costume lookbook">
        {costumeCategories.map((item) => (
          <button
            key={item}
            type="button"
            role="tab"
            aria-selected={category === item}
            onClick={() => setCategory(item)}
            className={`chip !border-bone/20 !text-bone/70 ${category === item ? "chip-active !border-clay !bg-clay !text-white" : ""}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((look, index) => (
          <article
            key={`${look.id}-${look.name}`}
            className="group overflow-hidden rounded-2xl border border-bone/12 bg-bone/[0.03]"
            style={{ animation: "soft-in 0.65s var(--ease-out-expo) both", animationDelay: `${(index % 6) * 60}ms` }}
          >
            <div className="hover-zoom relative aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos(look.id, 900)}
                alt={`${look.name} — costume available for rent at Instabooth Studios`}
                className="size-full object-cover"
                loading="lazy"
              />
              <span className="absolute left-3.5 top-3.5 rounded-full border border-bone/25 bg-ink/65 px-3 py-1 text-[11.5px] font-bold uppercase tracking-[0.14em] text-bone/85 backdrop-blur">
                {look.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-[21px] font-bold text-bone">{look.name}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-bone/55">{look.note}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {look.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-bone/15 px-2.5 py-1 text-[11.5px] font-semibold text-bone/55">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-[13.5px] leading-relaxed text-bone/55">
        The rail moves. Not every piece is available on every date — send your date and we will confirm
        what is in the studio, plus fitting times.
      </p>
    </div>
  );
}
