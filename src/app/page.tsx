import Link from "next/link";
import { ArrowIcon } from "@/components/Header";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { Stats } from "@/components/Stats";
import { InteractiveHero } from "@/components/InteractiveHero";
import { CTABand, Marquee, SectionHeading } from "@/components/Ui";
import {
  gallery,
  photos,
  site,
  studioImages,
} from "@/lib/site";

const featured = [
  gallery.find((g) => g.id === "20261102_082007_DfO3QbUiHTP_3.webp"),  // Amber Glow (Portraits)
  gallery.find((g) => g.id === "20260306_113240_DVipt3WCFUn_2.webp"),  // Family Smile (Couples & Family)
  gallery.find((g) => g.id === "20260504_080915_DX6NVhDCDOd_2.webp"),  // Shadow & Tint (Editorial)
  gallery.find((g) => g.id === "20260209_101934_DUiJefXCEwy_1.webp"),  // Earthy Serenity (Portraits)
  gallery.find((g) => g.id === "20260503_131339_DX4LTM_oL_T.jpg"),     // Emerald Joy (Traditional)
  gallery.find((g) => g.id === "20260611_082651_DZcFju7DWCh_1.webp"),  // Princess Tiara (Portraits/Kids)
  gallery.find((g) => g.id === "20260911_061551_DcwPS_hI9FP.webp"),    // The Full Generation (Couples & Family)
  gallery.find((g) => g.id === "/instagram_photos/costumes/20260211_204126_DUoaO_HCOwk_3.webp"), // Royal Crimson Agbada (Costume)
  gallery.find((g) => g.id === "/instagram_photos/costumes/20251129_140951_DRpKmLCCPyn_1.webp"), // Crimson Fan Gele (Costume)
].filter(Boolean) as typeof gallery;

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO (INTERACTIVE TUNER) ---------------- */}
      <InteractiveHero />

      <div className="relative z-10 mt-6 mb-3 md:mt-8 md:mb-5">
        <Marquee
          items={[
            "Studio portraiture",
            "Brand films",
            "Costume rental",
            "Event coverage",
            "Photobooth",
            "Studio hire",
            "Sabo, Yaba",
          ]}
        />
      </div>

      {/* ---------------- ABOUT / STATS ---------------- */}
      <section className="relative bg-ink py-12 md:py-20">
        <div className="shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-x-14 lg:gap-y-9 xl:gap-x-20">
          <div className="lg:col-start-2 lg:row-start-1">
            <Reveal>
              <p className="eyebrow text-clay">The studio</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3.5 max-w-2xl text-[clamp(2.15rem,4.5vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.045em] text-bone">
                A studio for people<br />who <span className="text-clay">care how it looks.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-3.5 max-w-2xl text-[12.5px] leading-relaxed text-bone/70 md:text-[13.5px]">
                Thoughtful portraits, costume styling and film production shaped around your story. We plan the look, light and direction with you.
              </p>
              <p className="mt-2 max-w-2xl text-[12.5px] leading-relaxed text-bone/60 md:hidden">
                From backdrop to final retouch, we guide every detail so you can arrive confident and enjoy the session.
              </p>
              <p className="mt-3 hidden max-w-xl text-[14px] leading-relaxed text-bone/55 lg:block">
                From choosing a backdrop to the final retouch, our team guides each detail so you can arrive confident and enjoy the session.
              </p>
            </Reveal>
          </div>

          <Reveal
            variant="scale"
            className="lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-stretch"
          >
            <figure className="relative w-full overflow-hidden rounded-2xl border border-bone/12 bg-ink-2 shadow-2xl lg:h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos(studioImages[0], 1200)}
                alt="Lighting and softboxes inside the Instabooth Studios photography room"
                className="aspect-square w-full object-cover object-center lg:aspect-auto lg:h-full"
                loading="lazy"
              />
            </figure>
          </Reveal>

          <div className="lg:col-start-2 lg:row-start-2">
            <Reveal delay={220}>
              <Stats />
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="/services" className="btn btn-outline">
                  See all services <ArrowIcon />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURED WORK ---------------- */}
      <section id="work" className="relative scroll-mt-24 border-y border-bone/10 bg-ink-2 py-10 md:py-16">
        <div className="shell">
          <SectionHeading
            eyebrow="Selected frames"
            title={
              <>
                The work, <span className="text-clay">without the filler.</span>
              </>
            }
            intro="Portraits, traditional sets, couples and costume stories shot in studio and on location. Tap any frame to look closer."
            action={
              <Link href="/portfolio" className="btn btn-outline">
                Full portfolio <ArrowIcon />
              </Link>
            }
          />
          <div className="mx-auto mt-8 max-w-[76rem]">
            <Gallery items={featured} filters={false} columns={3} />
          </div>
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <section className="paper relative py-10 md:py-16">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-10">
            <div>
              <Reveal>
                <p className="eyebrow text-clay-deep">What we do</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-lg mt-3.5 text-ink">
                  Six ways to make a <span className="text-clay-deep">frame.</span>
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-3.5 max-w-2xl text-[14.5px] leading-relaxed text-ink/70 md:text-[15.5px]">
                  Book one service or stack them. Photography, video, costume and the room itself are all handled by the same studio team.
                </p>
              </Reveal>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Reveal delay={200} className="w-full max-w-[28rem]">
                <div className="flex justify-start lg:justify-end">
                  <Link href="/services" className="btn btn-ink">
                    Services &amp; packages <ArrowIcon />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
          <div className="mt-8 md:mt-10">
            <ServiceExplorer />
          </div>
        </div>
      </section>

      {/* ---------------- INSTAGRAM ---------------- */}
      <section className="relative bg-ink pt-10 pb-12 md:pt-14 md:pb-16 lg:pb-20">
        <div className="shell">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <Reveal>
                <p className="eyebrow text-clay">Latest from the set</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="display-md mt-3 text-bone">Follow the studio work</h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-transparent bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] font-bold text-white shadow-md shadow-[#dc2743]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#dc2743]/40 hover:brightness-110"
              >
                {site.instagramHandle} on Instagram <ArrowIcon />
              </a>
            </Reveal>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            {[
              { image: "20261105_081147_DfWkr-0CH_f_2.webp", post: "DfWkr-0CH_f", alt: "Blue gown portrait from the Instabooth studio" },
              { image: "20261102_082007_DfO3QbUiHTP_3.webp", post: "DfO3QbUiHTP", alt: "Orange editorial portrait from the Instabooth studio" },
              { image: "20261031_230546_DezA1g_Ih1B.webp", post: "DezA1g_Ih1B", alt: "White fashion portrait from the Instabooth studio" },
            ].map((item, index) => (
              <Reveal key={item.post} delay={index * 80}>
                <a
                  href={`https://www.instagram.com/p/${item.post}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.alt} — view on Instagram`}
                  className="group block overflow-hidden rounded-2xl border border-bone/10 bg-ink-2"
                >
                  <div className="hover-zoom relative aspect-[3/4]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photos(item.image, 700)}
                      alt={item.alt}
                      className="size-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 grid place-items-center bg-ink/60 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="size-7 text-bone" aria-hidden>
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
