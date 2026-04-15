import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import IOSSection from "@/components/IOSSection";
import DownloadSection from "@/components/DownloadSection";
import CTASection from "@/components/CTASection";
import { absoluteUrl, createMetadata, seo } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  description:
    "Explore ManaCamp, a modern community platform for channels, DMs, presence, voice, video, screen sharing, bots, and live sessions across Windows and iOS.",
  keywords: [
    ...seo.defaultKeywords,
    "community software",
    "live sessions",
    "desktop community app",
  ],
});

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: seo.siteUrl,
        name: seo.siteName,
        description: seo.defaultDescription,
      },
      {
        "@type": "SoftwareApplication",
        "@id": absoluteUrl("/#app"),
        name: seo.siteName,
        applicationCategory: "CommunicationApplication",
        operatingSystem: "Windows, iOS",
        downloadUrl: absoluteUrl("/download"),
        url: seo.siteUrl,
        description: seo.defaultDescription,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        publisher: {
          "@type": "Organization",
          name: seo.siteName,
          url: seo.siteUrl,
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroSection />
      <FeaturesSection />
      <IOSSection />
      <DownloadSection />
      <CTASection />
    </>
  );
}
