import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/Ui";
import { photos, site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected portrait, editorial, traditional, costume and family photography from Instabooth Studios in Sabo, Yaba, Lagos.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Frames in focus"
        title={
          <>
            Frames with
            <br key="portfolio-title-break" />
            <span key="portfolio-title-highlight" className="text-clay">intention.</span>
          </>
        }
        intro="A working selection of portrait, editorial, traditional, costume and family sessions shot by the Instabooth team. Light, styling and direction — all in-house."
        image={"20261102_082007_DfO3QbUiHTP_3.webp"}
        imageContent={
          <div className="grid size-full grid-cols-[1.55fr_1fr] gap-3 bg-ink p-3">
            <figure className="relative min-h-0 overflow-hidden rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photos("20261102_082007_DfO3QbUiHTP_3.webp", 1000)} alt="Amber silk studio portrait" className="size-full object-cover" loading="eager" />
              <figcaption className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-ink/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-bone backdrop-blur">Portraits</figcaption>
            </figure>
            <div className="grid min-h-0 grid-rows-[1.12fr_0.88fr] gap-3">
              <figure className="relative min-h-0 overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photos("/instagram_photos/costumes/20260211_204126_DUoaO_HCOwk_3.webp", 700)} alt="Royal crimson traditional agbada" className="size-full object-cover" loading="eager" />
                <figcaption className="absolute bottom-2 left-2 rounded-full border border-white/20 bg-ink/75 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-bone backdrop-blur">Traditional</figcaption>
              </figure>
              <figure className="relative min-h-0 overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photos("20260306_113240_DVipt3WCFUn_2.webp", 700)} alt="Joyful family studio portrait" className="size-full object-cover" loading="eager" />
                <figcaption className="absolute bottom-2 left-2 rounded-full border border-white/20 bg-ink/75 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-bone backdrop-blur">Family</figcaption>
              </figure>
            </div>
          </div>
        }
        imageBadge={
          <div className="grid size-[5.25rem] place-items-center rounded-full border border-clay/55 bg-ink/95 text-center shadow-xl shadow-black/30 sm:size-24">
            <span className="px-2 text-[9px] font-bold uppercase leading-[1.35] tracking-[0.13em] text-bone sm:text-[10px]">
              Made in<br />Yaba
              <span className="mx-auto mt-1 block size-1.5 rounded-full bg-clay" aria-hidden />
            </span>
          </div>
        }
        fit
        adjustable
        defaultTextTransform={{ scale: 1.05, x: -2, y: 0 }}
        defaultImageTransform={{ width: 83, scale: 1.16, x: 56, y: -4 }}
        secondaryAction={{
          label: "See our full work",
          href: site.instagram,
          icon: "instagram",
        }}
      />

      <section className="relative border-t border-bone/10 bg-ink pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="shell">
          <div className="pt-4 md:pt-0">
            <Gallery />
          </div>

          <Reveal>
            <div className="mt-16 grid min-h-64 gap-6 rounded-2xl border border-bone/12 bg-bone/[0.04] p-8 md:min-h-72 md:grid-cols-[1.4fr_0.6fr] md:items-center md:p-12">
              <div>
                <h2 className="font-display text-[clamp(1.5rem,2.4vw,2.1rem)] font-bold text-bone">
                  Want a set built around your idea?
                </h2>
                <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-bone/60">
                  Send references, a mood, colour notes or even a Pinterest board. We will translate it
                  into light, styling and a shot list that works in our Yaba studio or on location.
                </p>
              </div>
              <div className="flex flex-col gap-2.5">
                <Link href="/contact" className="btn btn-clay w-full">
                  Start a booking <ArrowIcon />
                </Link>
                <a
                  href={whatsappLink(site.phones[0].whatsapp, "Hello Instabooth Studios, I saw the portfolio and have a shoot idea.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full"
                >
                  Send a reference
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </>
  );
}
