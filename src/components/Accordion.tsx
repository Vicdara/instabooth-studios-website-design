"use client";

import { useState } from "react";

type AccordionItem = { q: string; a: string };

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/12 border-y border-ink/12">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-clay-deep md:py-6"
            >
              <span className="flex gap-4">
                <span className="mt-1 font-display text-[13px] font-bold tracking-[0.1em] text-clay-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[19px] font-bold leading-snug tracking-[-0.02em] text-ink md:text-[22px]">
                  {item.q}
                </span>
              </span>
              <span
                className={`mt-1 grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-400 ${
                  isOpen ? "rotate-45 border-clay bg-clay text-white" : "border-ink/25 text-ink/60"
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4" aria-hidden>
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              className="grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-6 pl-9 pr-4 text-[16px] leading-relaxed text-ink/65 md:text-[17px]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
