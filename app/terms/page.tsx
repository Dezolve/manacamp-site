import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { FileText } from "lucide-react";
import { legalLastUpdated } from "@/app/legalContent";

export const metadata: Metadata = {
  title: "Terms & Conditions – ManaCamp",
  description:
    "Read ManaCamp's Terms of Service and the rules governing use of the platform.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By downloading, installing, or using ManaCamp ("the App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the App.

These Terms apply to all users of the App, including visitors and registered users. We reserve the right to update these Terms at any time. Your continued use of the App after changes constitutes acceptance of the new Terms.`,
  },
  {
    id: "use",
    title: "2. Use of the App",
    content: `ManaCamp grants you a limited, non-exclusive, non-transferable, revocable license to use the App for your lawful use of the service.

You agree not to:
• Reverse engineer, decompile, or disassemble the App
• Use the App for any unlawful purpose
• Attempt to gain unauthorized access to any part of the App
• Interfere with or disrupt the App's servers or networks
  • Use abusive automation, scraping, or unauthorized clients to interact with the App
• Resell or redistribute the App without express written permission`,
  },
  {
    id: "accounts",
    title: "3. User Accounts",
    content: `To access certain features, you must create an account. You are responsible for:
• Maintaining the confidentiality of your account credentials
• All activities that occur under your account
• Notifying us immediately of any unauthorized use

You may not create accounts using false identities or impersonate any person or entity. We reserve the right to terminate accounts at our discretion.`,
  },
  {
    id: "content",
    title: "4. User Content",
    content: `You retain ownership of any content you create within the App, such as messages, uploads, profile details, and community content. By using the App, you grant ManaCamp a limited, worldwide license to store and process your content solely to provide the service.

You are responsible for ensuring your content does not violate any third-party rights, including intellectual property rights. ManaCamp is not responsible for content accuracy or any losses arising from your content.`,
  },
  {
    id: "subscriptions",
    title: "5. Billing and Paid Services",
    content: `ManaCamp may offer paid services or premium features. If you purchase a paid service:
• Pricing, billing terms, and refund details will be disclosed at the time of purchase
• You authorize us or our payment processor to charge the payment method you provide
• Ongoing services may renew automatically unless cancelled before renewal, if disclosed at purchase

You are responsible for reviewing the applicable purchase terms before completing any transaction.`,
  },
  {
    id: "disclaimer",
    title: "6. Disclaimer of Warranties",
    content: `THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. MANACAMP DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

  ManaCamp does not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components.`,
  },
  {
    id: "limitation",
    title: "7. Limitation of Liability",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, MANACAMP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF PROFITS, OR BUSINESS INTERRUPTION.

Our total liability to you for any claims arising from your use of the App shall not exceed the amount you paid to ManaCamp in the twelve months preceding the claim.`,
  },
  {
    id: "termination",
    title: "8. Termination",
    content: `We may terminate or suspend your access to the App at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, ManaCamp, third parties, or the public.

Upon termination, your license to use the App will immediately cease. Sections relating to intellectual property, disclaimer of warranties, limitation of liability, and governing law survive termination.`,
  },
  {
    id: "governing",
    title: "9. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.

Any disputes arising from these Terms or your use of the App shall be subject to the exclusive jurisdiction of the courts located in Delaware, United States.`,
  },
  {
    id: "contact",
    title: "10. Contact",
    content: `If you have questions about these Terms, please contact us:

Email: legal@manacamp.app`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,32,0.58),transparent)]" />
          <div className="absolute left-1/2 top-16 -translate-x-1/2 w-[520px] h-[260px] ambient-blue rounded-full blur-3xl opacity-80" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="eyebrow-pill text-sm mb-6">
              <FileText className="w-3.5 h-3.5" />
              Legal
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              Terms &{" "}
              <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-text-secondary text-sm">
              Last updated: {legalLastUpdated}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-divider pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="panel rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-[0.28em] mb-4">
                Table of Contents
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-sm text-[rgb(182,224,255)] hover:text-white transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-divider pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          {sections.map((section, i) => (
            <ScrollReveal key={section.id} delay={i * 0.04}>
              <div
                id={section.id}
                className="panel rounded-2xl p-6 scroll-mt-24"
              >
                <h2 className="text-lg font-bold text-white mb-4">
                  {section.title}
                </h2>
                <div className="text-sm text-text-secondary leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-divider pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="panel rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Privacy Policy
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                  Privacy terms now live on a dedicated page so policy updates and legal references stay separate from the platform terms.
                </p>
              </div>
              <Link
                href="/privacy"
                className="btn-secondary rounded-full px-5 py-3 text-sm font-medium text-center transition-all duration-200"
              >
                View Privacy Policy
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
