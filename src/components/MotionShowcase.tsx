"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowIcon } from "@/components/Header";

type Clip = {
  src: string;
  poster: string;
  label: string;
  title: string;
  tone: "wide" | "tall";
};

const clips: Clip[] = [
  {
    src: "https://videos.pexels.com/video-files/27913925/12261308_1920_1080_30fps.mp4",
    poster:
      "https://images.pexels.com/videos/27913925/photography-session-27913925.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    label: "On set",
    title: "Studio sessions, in motion",
    tone: "wide",
  },
  {
    src: "https://videos.pexels.com/video-files/19366395/19366395-hd_1920_1080_25fps.mp4",
    poster:
      "https://images.pexels.com/videos/19366395/beauty-boy-bride-is-dancing-care-19366395.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    label: "Coverage",
    title: "Celebrations, edited",
    tone: "tall",
  },
];

function Clip({ clip }: { clip: Clip }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-bone/12 bg-ink-3 ${
        clip.tone === "wide" ? "aspect-[16/10] lg:col-span-3" : "aspect-[4/5] lg:col-span-2"
      }`}
    >
      <video
        ref={videoRef}
        className="size-full object-cover"
        src={clip.src}
        poster={clip.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={clip.title}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/25" />
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11.5px] font-bold uppercase tracking-[0.2em] text-clay">{clip.label}</p>
          <p className="mt-1 font-display text-lg font-bold text-bone md:text-xl">{clip.title}</p>
        </div>
        <button
          type="button"
          onClick={toggle}
          className="grid size-10 shrink-0 place-items-center rounded-full border border-bone/30 bg-ink/50 text-bone backdrop-blur transition hover:border-clay hover:bg-clay hover:text-white"
          aria-label={playing ? `Pause ${clip.title}` : `Play ${clip.title}`}
        >
          {playing ? (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden>
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export function MotionShowcase() {
  return (
    <section className="relative border-y border-bone/10 bg-ink-2 py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow text-clay">Photo + film</p>
            <h2 className="display-lg mt-5 max-w-xl text-bone">
              A still holds the moment.
              <br />
              <span className="text-clay">Motion holds the feeling.</span>
            </h2>
          </div>
          <div>
            <p className="max-w-lg text-[16.5px] leading-relaxed text-bone/65">
              Our production side covers brand films, event films and social-first cutdowns, shot
              alongside the stills so every frame carries the same styling and grade.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/services#photography-video" className="btn btn-bone">
                Photography &amp; video <ArrowIcon />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Plan coverage
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {clips.map((clip) => (
            <Clip key={clip.src} clip={clip} />
          ))}
        </div>
        <p className="mt-4 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-bone/30">
          Motion direction · Studio sessions · Event coverage
        </p>
      </div>
    </section>
  );
}
