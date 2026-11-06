"use client";

import { useEffect, useRef, useState } from "react";
import { stats as siteStats } from "@/lib/site";

export function Stats({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState<number[]>(() => siteStats.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      const fallback = window.requestAnimationFrame(() => setStarted(true));
      return () => window.cancelAnimationFrame(fallback);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      const settle = window.requestAnimationFrame(() => setValues(siteStats.map((stat) => stat.value)));
      return () => window.cancelAnimationFrame(settle);
    }
    const duration = 1500;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValues(siteStats.map((stat) => Math.round(stat.value * eased)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started]);

  const light = tone === "light";
  const line = light ? "border-ink/12" : "border-bone/12";

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 border-t ${line} ${light ? "text-ink" : "text-bone"} ${className}`}
    >
      {siteStats.map((stat, index) => (
        <div
          key={stat.label}
          className={`py-5 ${index % 2 === 0 ? "pr-4 sm:pr-7" : `border-l ${line} pl-4 sm:pl-7`} ${
            index >= 2 ? `border-t ${line}` : ""
          }`}
        >
          <p className="font-display text-[clamp(2.25rem,3.6vw,3.1rem)] font-bold leading-none tracking-[-0.04em] tabular-nums">
            {String(values[index]).padStart(2, "0")}
            <span className="text-clay">{stat.suffix}</span>
          </p>
          <p className={`mt-2.5 text-[14px] font-bold ${light ? "text-ink" : "text-bone"}`}>{stat.label}</p>
          <p className={`mt-1 text-[13px] leading-relaxed ${light ? "paper-muted" : "text-bone/55"}`}>
            {stat.note}
          </p>
        </div>
      ))}
    </div>
  );
}
