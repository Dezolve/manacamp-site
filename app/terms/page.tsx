import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { Shield, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions – ManaCamp",
  description:
    "Read ManaCamp's Terms of Service and Privacy Policy. Learn how we collect, use, and protect your data.",
};

const lastUpdated = "March 1, 2025";

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

const privacySections = [
  {
    id: "privacy-collect",
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as:
• Account information (name, email address, password)
  • Messages, uploads, profile details, and other content you choose to add
  • Payment information for paid services, when applicable, handled by our payment providers
• Communications with our support team

We also collect automatically:
• Device information (OS, app version)
• Usage analytics (features used, session duration)
• Crash reports and performance data`,
  },
  {
    id: "privacy-use",
    title: "How We Use Your Information",
    content: `We use your information to:
• Provide, maintain, and improve the App
• Process transactions and send related information
  • Sync supported account data across devices
• Send you technical notices and support messages
• Respond to your comments and questions
• Analyze usage to improve features

We do not sell your personal information to third parties.`,
  },
  {
    id: "privacy-sharing",
    title: "Information Sharing",
    content: `We may share your information with:
• Service providers who assist in our operations (cloud hosting, analytics)
• Law enforcement when required by law

All third-party service providers are bound by confidentiality agreements and may only process your data as directed by us.`,
  },
  {
    id: "privacy-security",
    title: "Data Security",
    content: `We use administrative, technical, and organizational measures designed to protect your information.

No system is completely secure. We encourage you to use a strong, unique password for your account and to protect access to your devices.`,
  },
  {
    id: "privacy-rights",
    title: "Your Rights",
    content: `Depending on your location, you may have rights to:
• Access the personal information we hold about you
• Correct inaccurate information
• Request deletion of your account and data
• Object to or restrict processing of your information
• Portability of your data

To exercise these rights, contact us at privacy@manacamp.app.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/30 text-sm text-indigo-300 mb-6">
              <FileText className="w-3.5 h-3.5" />
              Legal
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              Terms &{" "}
              <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-gray-400 text-sm">
              Last updated: {lastUpdated}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Table of contents */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="glass border border-white/10 rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4">
                Table of Contents
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-sm text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Terms sections */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          {sections.map((section, i) => (
            <ScrollReveal key={section.id} delay={i * 0.04}>
              <div
                id={section.id}
                className="glass border border-white/10 rounded-2xl p-6 scroll-mt-24"
              >
                <h2 className="text-lg font-bold text-white mb-4">
                  {section.title}
                </h2>
                <div className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Privacy policy */}
      <section id="privacy" className="pb-24 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Privacy Policy
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {privacySections.map((section, i) => (
              <ScrollReveal key={section.id} delay={i * 0.05}>
                <div
                  id={section.id}
                  className="glass border border-white/10 rounded-2xl p-6 scroll-mt-24"
                >
                  <h3 className="text-base font-bold text-white mb-3">
                    {section.title}
                  </h3>
                  <div className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
