"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowIcon } from "@/components/Header";
import { photos, services } from "@/lib/site";

export function ServiceExplorer() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
      <div className="border-t border-ink/15">
        {services.map((service, index) => (
          <Link
            key={service.id}
            href={`/services#${service.id}`}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            className="group block border-b border-ink/15 py-2.5 transition-colors duration-300 hover:bg-ink/[0.03] md:py-3.5"
          >
            <div className="flex items-start gap-3.5 md:gap-5">
              <span
                className={`mt-0.5 font-display text-[11.5px] font-bold tracking-[0.12em] transition-colors duration-300 ${
                  active === index ? "text-clay" : "text-ink/35"
                }`}
              >
                {service.eyebrow}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-base font-bold tracking-[-0.02em] text-ink transition-transform duration-500 group-hover:translate-x-1 md:text-lg">
                    {service.name}
                  </h3>
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
                      active === index
                        ? "border-clay bg-clay text-white"
                        : "border-ink/20 text-ink/60 group-hover:border-ink/50"
                    }`}
                  >
                    <ArrowIcon className="size-3 -rotate-45" />
                  </span>
                </div>
                <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-ink/60">
                  {service.summary}
                </p>
                <div className="mt-2.5 flex items-center gap-2.5 lg:hidden">
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photos(service.image, 500)}
                      alt=""
                      className="size-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink/55">
                    {service.duration}
                  </div>
                </div>
                <div className="mt-2 hidden items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-ink/55 lg:flex">
                  <span>{service.duration}</span>
                  <span className="size-1 rounded-full bg-clay" aria-hidden />
                  <span>{service.tag}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="sticky top-24">
          <div className="relative ml-auto aspect-[4/5] w-full max-w-[28rem] overflow-hidden rounded-2xl bg-ink-3 shadow-2xl">
            {services.map((service, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={service.id}
                src={photos(service.image, 1200)}
                alt={`${service.name} at Instabooth Studios`}
                className={`absolute inset-0 size-full object-cover object-center transition-opacity duration-700 ${
                  active === index ? "opacity-100" : "opacity-0"
                }`}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute inset-x-5 bottom-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-clay">
                {services[active].tag}
              </p>
              <p className="mt-1 font-display text-xl font-bold text-bone md:text-2xl">{services[active].name}</p>
              <p className="mt-1 text-[13px] text-bone/70">{services[active].duration}</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between text-[11.5px] font-bold uppercase tracking-[0.14em] text-ink/55 md:mt-7">
            <span>Hover a service to preview</span>
            <span className="font-mono text-clay">
              {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
