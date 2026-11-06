import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, WhatsAppIcon } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { PackageCarousel } from "@/components/PackageCarousel";
import { Marquee, PageHero, SectionHeading } from "@/components/Ui";
import { packages, photos, services, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Packages",
  description:
    "Studio portraiture, photography and video production, costume rental, event photobooth, studio hire and creative direction at Instabooth Studios, Sabo, Yaba, Lagos.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio services"
        title={
          <>
            One studio.
            <br />
            <span className="text-clay">Every angle.</span>
          </>
        }
        intro="Portrait sittings, film coverage, costume rental, photobooth, set hire and full creative direction. Choose the service and we will shape the brief, the quote and the shoot day around it."
        image="20261102_082007_DfO3QbUiHTP_3.webp"
        adjustable
        defaultTextTransform={{ scale: 1, x: -2, y: 0 }}
        defaultImageTransform={{ width: 83, scale: 1.16, x: 56, y: -4 }}
      />

      <div className="mt-8 md:mt-12">
        <Marquee
          items={[
            "Portraiture",
            "Editorial",
            "Wedding & events",
            "Brand films",
            "Costume rental",
            "Photobooth",
            "Studio hire",
          ]}
        />
      </div>

      <section className="relative bg-ink py-20 md:py-28">
        <div className="shell space-y-16 md:space-y-24">
          <div className="relative left-[5px] top-5 max-w-2xl">
            <p className="eyebrow text-[12px] text-clay md:text-[13px]">Made for your moment</p>
            <p className="mt-3 text-[16px] leading-relaxed text-bone/65 md:text-[18px]">
              Explore portraits, films, events and studio hire—planned by one creative team in Yaba.
            </p>
          </div>
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-32 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16"
            >
              <Reveal
                variant="scale"
                className={index % 2 === 1 ? "lg:order-2" : ""}
              >
                <div className="relative mx-auto w-full max-w-[26rem] overflow-hidden rounded-[1.75rem] border border-bone/12 bg-ink-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photos(service.image, 1100)}
                    alt={`${service.name} at Instabooth Studios`}
                    className="aspect-[4/5] w-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 rounded-full border border-bone/25 bg-ink/70 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.16em] text-bone/80 backdrop-blur">
                    {service.duration}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={120} className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-[13px] font-bold tracking-[0.16em] text-clay">
                      {service.eyebrow}
                    </span>
                    <span className="h-px w-10 bg-bone/25" aria-hidden />
                    <span className="text-[11.5px] font-bold uppercase tracking-[0.18em] text-bone/55">
                      {service.tag}
                    </span>
                  </div>
                  <h2 className="display-md mt-5 text-bone">{service.name}</h2>
                  <p className="mt-4 text-[17px] leading-relaxed text-bone/70">{service.summary}</p>
                  <p className="mt-3 text-[15.5px] leading-relaxed text-bone/50">{service.detail}</p>

                  <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px] text-bone/75">
                        <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-clay" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link href="/contact" className="btn btn-clay">
                      Enquire about this <ArrowIcon />
                    </Link>
                    <a
                      href={whatsappLink(
                        "2348188757888",
                        `Hello Instabooth Studios, I am interested in ${service.name}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn inline-flex items-center gap-2 border border-[#25D366] bg-[#25D366] text-white transition hover:border-[#20bd5a] hover:bg-[#20bd5a]"
                    >
                      <WhatsAppIcon className="size-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* packages */}
      <section className="paper py-20 md:py-28">
        <div className="shell">
          <SectionHeading
            tone="light"
            eyebrow="Session shapes"
            title={
              <>
                Clear prices.
                <br />
                <span className="text-clay-deep">Beautiful frames.</span>
              </>
            }
          />

          <PackageCarousel packages={packages} />
        </div>
      </section>
    </>
  );
}
