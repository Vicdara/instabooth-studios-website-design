"use client";

import { useState } from "react";

export function AttributionBadge() {
  const [expanded, setExpanded] = useState(false);

  if (!expanded) {
    return (
      <button
        type="button"
        onClick={() => setExpanded(true)}
        aria-label="Show Internative Labs credit"
        className="group fixed bottom-4 right-4 z-[70] grid size-12 place-items-center rounded-full border border-bone/20 bg-ink/95 font-display text-[12px] font-bold tracking-tight text-bone shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-clay/60"
      >
        IL
        <span className="absolute right-[7px] top-[6px] size-2.5 rounded-full border-2 border-ink bg-clay" aria-hidden />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-[70] flex max-w-[calc(100vw-2rem)] items-center gap-1.5 rounded-2xl border border-bone/15 bg-ink/95 p-2.5 text-bone shadow-[0_12px_36px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl transition duration-300 hover:border-clay/50 hover:shadow-[0_16px_40px_-12px_rgba(236,90,46,0.24)]">
      <a
        href="https://internativelabs.pages.dev"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Made by Internative Labs, opens in a new tab"
        className="group flex min-w-0 items-center gap-3 rounded-xl py-0.5 pl-0.5 pr-1"
      >
        <span className="relative grid size-10 shrink-0 place-items-center rounded-xl border border-bone/15 bg-bone/[0.04] font-display text-[13px] font-bold tracking-tight text-bone transition group-hover:border-clay/50">
          IL
          <span className="absolute -right-1 -top-1 size-2.5 rounded-full border-2 border-ink bg-clay" aria-hidden />
        </span>
        <span className="min-w-0 leading-tight">
          <span className="block truncate text-[9px] font-bold uppercase tracking-[0.19em] text-clay">
            Demo for Instabooth
          </span>
          <span className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-[12.5px] font-semibold text-bone/90">
            Made by Internative Labs
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-3.5 shrink-0 text-bone/55 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-clay" aria-hidden>
              <path d="M14 4h6v6M20 4l-9 9" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </span>
      </a>
      <button
        type="button"
        onClick={() => setExpanded(false)}
        aria-label="Minimize Internative Labs badge"
        className="grid size-8 shrink-0 place-items-center rounded-full text-bone/50 transition hover:bg-bone/10 hover:text-bone"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-4" aria-hidden>
          <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
