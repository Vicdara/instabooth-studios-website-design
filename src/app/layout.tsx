import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/manrope";
import "@fontsource-variable/bricolage-grotesque";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AttributionBadge } from "@/components/AttributionBadge";
import { ScrollProgress } from "@/components/Reveal";
import { photos, site } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Instabooth Studios — Photography, Film & Costume Rental in Yaba, Lagos",
    template: "%s · Instabooth Studios",
  },
  description: site.description,
  keywords: [
    "Instabooth Studios",
    "photography studio Yaba",
    "photo studio Lagos",
    "photobooth Lagos",
    "costume rental Lagos",
    "videography Yaba",
    "portrait photographer Sabo",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: site.name,
    title: "Instabooth Studios — Photography, Film & Costume Rental, Lagos",
    description: site.description,
    images: [
      {
        url: photos("20260209_101934_DUiJefXCEwy_1.webp", 1200),
        width: 1200,
        height: 630,
        alt: "Portrait photographed at Instabooth Studios, Sabo, Yaba, Lagos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instabooth Studios — Photography, Film & Costume Rental in Lagos",
    description: site.description,
    images: [photos("20260209_101934_DUiJefXCEwy_1.webp", 1200)],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0a09",
  colorScheme: "dark",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  additionalType: "https://schema.org/Photograph",
  name: site.name,
  description: site.description,
  url: siteUrl,
  email: site.email,
  telephone: site.phones.map((phone) => phone.display),
  image: photos("20260209_101934_DUiJefXCEwy_1.webp", 1200),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Commercial Avenue, Sabo",
    addressLocality: "Yaba",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  areaServed: ["Lagos", "Nigeria"],
  sameAs: [site.instagram],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Studio photography" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photography and video production" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Costume rental" } },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-NG">
      <body className="bg-ink text-bone antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-bone focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <AttributionBadge />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
