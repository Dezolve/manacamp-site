import type { Metadata } from "next";
import SupportClient from "@/app/support/SupportClient";
import { faqs } from "@/app/support/support-content";
import { absoluteUrl, createMetadata, seo } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "Support",
  description:
    "Get ManaCamp support, browse answers to common questions, find download help, and contact the team for account or troubleshooting issues.",
  path: "/support",
  keywords: [...seo.defaultKeywords, "support", "help center", "faq", "troubleshooting"],
});

export default function SupportPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((section) =>
      section.questions.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    ),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <SupportClient />
    </>
  );
}
