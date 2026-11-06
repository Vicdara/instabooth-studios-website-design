"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  gallery as allImages,
  galleryCategories,
  photos,
  type GalleryImage,
} from "@/lib/site";

type GalleryProps = {
  items?: GalleryImage[];
  filters?: boolean;
  columns?: 2 | 3;
  tone?: "dark" | "light";
};

export function Gallery({ items, filters = true, columns = 3, tone = "dark" }: GalleryProps) {
  const source = items ?? allImages;
  const categories = useMemo(() => {
    if (!filters) return ["All"] as string[];
    const available = new Set(source.map((item) => item.category));
    return galleryCategories.filter((category) => category === "All" || available.has(category));
  }, [filters, source]);

  const [category, setCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (category === "All" ? source : source.filter((item) => item.category === category)),
    [category, source],
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (direction: number) => {
      setOpenIndex((current) => {
        if (current === null) return current;
        const next = (current + direction + visible.length) % visible.length;
        return next;
      });
    },
    [visible.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, step]);

  const active = openIndex !== null ? visible[openIndex] : null;
  const light = tone === "light";

  return (
    <div>
      {filters ? (
        <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Filter portfolio">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              onClick={() => {
                setCategory(item);
                setOpenIndex(null);
              }}
              className={`chip ${light ? "" : "!border-bone/20 !text-bone/70 hover:!border-bone/60"} ${
                category === item ? "chip-active !border-clay !bg-clay !text-white" : ""
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      ) : null}

      <div
        className={`mt-6 gap-3 md:gap-3.5 ${
          columns === 2
            ? "columns-1 sm:columns-2"
            : "columns-1 sm:columns-2 lg:columns-3"
        }`}
      >
        {visible.map((item, index) => (
          <button
            key={`${item.id}-${item.title}`}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group mb-3 block w-full break-inside-avoid text-left md:mb-3.5"
            style={{ animation: "soft-in 0.7s var(--ease-out-expo) both", animationDelay: `${(index % 6) * 55}ms` }}
            aria-label={`View ${item.title}`}
          >
            <div
              className="hover-zoom relative overflow-hidden rounded-xl border border-bone/10 bg-ink-3"
              style={{ aspectRatio: item.aspect === "landscape" ? "5 / 4" : item.aspect === "square" ? "4 / 5" : "2 / 3" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos(item.id, 900)}
                alt={`${item.title} — ${item.category} photographed by Instabooth Studios`}
                className="size-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-x-4 bottom-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-clay">{item.category}</p>
                <p className="mt-1 font-display text-xl font-bold text-bone">{item.title}</p>
              </div>
              <div className="absolute right-4 top-4 grid size-10 place-items-center rounded-full border border-white/30 bg-ink/40 text-white opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="flex items-baseline justify-between gap-3 pt-3">
              <p className={`font-display text-[17px] font-semibold ${light ? "text-ink" : "text-bone"}`}>
                {item.title}
              </p>
              <p className={`text-[12px] font-bold uppercase tracking-[0.14em] ${light ? "text-ink/55" : "text-bone/55"}`}>
                {item.category}
              </p>
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-ink/95 p-4 backdrop-blur-md md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 grid size-12 place-items-center rounded-full border border-bone/25 text-bone transition hover:border-clay hover:text-clay md:right-8 md:top-8"
            aria-label="Close gallery"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-bone/25 bg-ink/50 text-bone transition hover:border-clay hover:text-clay md:left-6"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-bone/25 bg-ink/50 text-bone transition hover:border-clay hover:text-clay md:right-6"
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5" aria-hidden>
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <figure
            className="mx-auto flex max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-bone/15 bg-ink-2 md:max-h-[calc(100dvh-4rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex min-h-0 flex-1 items-center justify-center p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos(active.id, 1600)}
                alt={active.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <figcaption className="flex flex-none flex-wrap items-center justify-between gap-2 border-t border-bone/10 px-4 py-3 md:gap-3 md:px-5 md:py-4">
              <div>
                <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-clay">{active.category}</p>
                <p className="mt-1 font-display text-xl font-bold text-bone">{active.title}</p>
              </div>
              <p className="text-[13.5px] text-bone/55">
                {active.note} · {(openIndex ?? 0) + 1} / {visible.length}
              </p>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
