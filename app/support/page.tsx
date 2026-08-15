import type { Metadata } from "next";
import SupportClient from "@/app/support/SupportClient";
import { supportArticles, supportCategories } from "@/app/support/support-content";
import { absoluteUrl, createMetadata, seo } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "Help Center",
  description:
    "Search ManaCamp help guides for accounts, channels, messages, voice, video, sessions, safety, downloads, and troubleshooting.",
  path: "/support",
  keywords: [...seo.defaultKeywords, "support", "help center", "faq", "troubleshooting"],
});

export default function SupportPage() {
  const helpCenterJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${seo.siteName} Help Center`,
    url: absoluteUrl("/support"),
    description: "ManaCamp help guides and troubleshooting resources.",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: supportArticles.length,
      itemListElement: supportArticles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: absoluteUrl(`/support/${article.slug}`),
      })),
    },
    about: supportCategories.map((category) => category.title),
  };

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `${seo.siteName} Support`,
    url: absoluteUrl("/support"),
    description: "ManaCamp support center and troubleshooting resources.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(helpCenterJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <SupportClient />
    </>
  );
}
