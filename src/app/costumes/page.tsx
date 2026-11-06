import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, WhatsAppIcon } from "@/components/Header";
import { CostumeLookbook } from "@/components/CostumeLookbook";
import { Marquee, PageHero } from "@/components/Ui";
import { whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Costume Rental & Lookbook",
  description:
    "Rent lace, aso-oke, gele and editorial costume pieces from Instabooth Studios in Sabo, Yaba, Lagos. In-studio fittings and styling support available.",
  alternates: { canonical: "/costumes" },
};

export default function CostumesPage() {
  return (
    <>
      <PageHero
        eyebrow="The costume rail"
        title={
          <>
            Dressed
            <br />
            for the <span className="text-clay">frame.</span>
          </>
        }
        intro="Lace, aso-oke, gele and editorial pieces available to rent from the studio. Book a fitting, style the full look, and step in front of the light already finished."
        image="/instagram_photos/costumes/20260211_204126_DUoaO_HCOwk_3.webp"
        adjustable
        defaultTextTransform={{ scale: 1, x: -2, y: 0 }}
        defaultImageTransform={{ width: 83, scale: 1.16, x: 56, y: -4 }}
      />

      <div className="mt-8 md:mt-12">
        <Marquee
          tone="clay"
          items={[
            "Bridal & lace",
            "Aso-oke",
            "Gele & headwear",
            "Editorial pieces",
            "Accessory styling",
            "Fittings in Yaba",
          ]}
        />
      </div>

      <section className="relative bg-ink py-20 md:py-28">
        <div className="shell">
          <CostumeLookbook />
        </div>
      </section>

      <section className="relative bg-ink py-10 md:py-14">
        <div className="shell">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-bone/12 bg-ink-2 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-12 lg:px-14">
          <div>
            <p className="eyebrow text-clay">Bring both together</p>
            <h2 className="display-md mt-4 max-w-xl text-bone">Costume plus studio, one booking.</h2>
            <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-bone/55">
              Pair a rental with a portrait sitting and we will plan the fitting, the light and the
              looks in one schedule.
            </p>
          </div>
          <div className="flex w-full flex-nowrap gap-2 sm:w-auto sm:gap-3">
            <Link href="/contact" className="btn btn-clay flex-1 justify-center !gap-1.5 !px-4 !py-3.5 !text-[14px] whitespace-nowrap sm:flex-none sm:!gap-2.5 sm:!px-5 sm:!py-4">
              Plan a session <ArrowIcon />
            </Link>
            <a
              href={whatsappLink("2348188757888", "Hello Instabooth Studios, I would like to rent a costume and book a shoot.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn inline-flex flex-1 items-center justify-center gap-1.5 border border-[#25D366] bg-[#25D366] !px-4 !py-3.5 !text-[14px] whitespace-nowrap text-white transition hover:border-[#20bd5a] hover:bg-[#20bd5a] sm:flex-none sm:!gap-2 sm:!px-5 sm:!py-4"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </a>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
