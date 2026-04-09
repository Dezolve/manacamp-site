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
    content: `By downloading, installing, accessing, or using ManaCamp ("ManaCamp," "we," "us," or "our"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, do not use ManaCamp.

These Terms apply to all users of the service, including visitors, registered users, community participants, hosts, moderators, and purchasers of any paid features. We may update these Terms from time to time. If we make material changes, we may provide notice through the service or by other reasonable means. Your continued use of ManaCamp after updated Terms become effective constitutes acceptance of the revised Terms.`,
  },
  {
    id: "eligibility",
    title: "2. Eligibility and Account Registration",
    content: `You may need to create an account to access certain features of ManaCamp. When creating and maintaining an account, you agree to:
• Provide accurate and complete information
• Keep your credentials secure and confidential
• Be responsible for activity that occurs under your account
• Notify us promptly of any unauthorized access or security incident

You may not create an account using false information, impersonate another person or entity, or create accounts to evade enforcement actions. We may suspend, restrict, or terminate accounts that violate these Terms or create risk for ManaCamp or its users.`,
  },
  {
    id: "license",
    title: "3. Limited License and Acceptable Use",
    content: `Subject to your compliance with these Terms, ManaCamp grants you a limited, non-exclusive, non-transferable, revocable license to access and use the service for its intended lawful purposes.

You agree not to:
• Reverse engineer, decompile, or disassemble the service
• Use ManaCamp for unlawful, fraudulent, or harmful purposes
• Attempt to gain unauthorized access to accounts, systems, or data
• Interfere with the operation, integrity, or security of the service
• Use scraping, abusive automation, bots, or unauthorized clients except where expressly permitted
• Resell, redistribute, sublicense, or commercially exploit ManaCamp without written permission`,
  },
  {
    id: "user-content",
    title: "4. User Content and Responsibility",
    content: `ManaCamp may allow you to create, submit, post, transmit, display, or store content, including messages, profile details, usernames, display names, room names, channel names, group information, media, and other materials ("User Content").

You retain ownership of your User Content, but you grant ManaCamp a limited, worldwide, non-exclusive license to host, store, process, reproduce, and display that content solely as necessary to operate, improve, secure, and provide the service.

You are solely responsible for the User Content you create or share. You represent that your User Content does not violate the rights of others, applicable law, or these Terms.`,
  },
  {
    id: "conduct",
    title: "5. Prohibited Conduct and Objectionable Content",
    content: `ManaCamp has no tolerance for objectionable content or abusive users.

You may not use ManaCamp to create, share, promote, or organize content or conduct involving:
• Harassment, bullying, or severe targeted abuse
• Hate speech, slurs, or dehumanizing content directed at protected groups
• Threats of violence or content encouraging serious physical harm
• Sexual exploitation, sexual abuse, or coercive sexual content
• Content involving the sexual exploitation of minors
• Spam, scams, phishing, impersonation, or fraud
• Illegal activity or content that violates the rights of others
• Evasion of moderation, enforcement, or safety systems

This list is illustrative and not exhaustive. We may restrict or remove content and take action against accounts that we determine violate these Terms, our Community Guidelines, applicable law, or the safety of ManaCamp and its users.`,
  },
  {
    id: "moderation",
    title: "6. Moderation, Reporting, Blocking, and Enforcement",
    content: `ManaCamp may use automated systems, human review, or both to detect, prevent, review, or address objectionable content and abusive conduct.

Users may be able to report content, users, rooms, channels, or other activity for review. Users may also be able to block other users and use additional safety features provided by the service.

We reserve the right, in our sole discretion, to:
• Review reported or suspected violations
• Remove, restrict, or disable access to content
• Limit account features or participation
• Suspend or terminate accounts
• Preserve relevant records for safety, abuse prevention, legal compliance, or dispute resolution

We are not obligated to publish detailed explanations of moderation decisions, but we may do so when appropriate.`,
  },
  {
    id: "guidelines",
    title: "7. Community Guidelines",
    content: `Your use of ManaCamp is also subject to our Community Guidelines, which describe expected conduct and prohibited behavior in more practical terms. The Community Guidelines are incorporated into these Terms by reference.

If there is a conflict between these Terms and the Community Guidelines, these Terms control to the extent of the conflict.

Community Guidelines: https://manacamp.app/guidelines`,
  },
  {
    id: "paid-services",
    title: "8. Billing and Paid Services",
    content: `ManaCamp may offer paid services, subscriptions, or premium features. If you purchase any paid feature:
• Pricing, billing terms, and refund information will be disclosed at the time of purchase
• You authorize us or our payment processor to charge your selected payment method
• Recurring services may renew automatically if disclosed at purchase, unless cancelled before renewal

You are responsible for reviewing all purchase terms before completing a transaction.`,
  },
  {
    id: "termination",
    title: "9. Suspension and Termination",
    content: `We may suspend, restrict, or terminate your access to ManaCamp, with or without notice, if we believe you have violated these Terms, created risk for other users, interfered with the service, or exposed ManaCamp to legal, security, or reputational harm.

Upon termination, your right to use ManaCamp ends immediately. Sections that by their nature should survive termination, including provisions relating to user content licenses, moderation, disclaimers, limitations of liability, governing law, and dispute-related provisions, will survive.`,
  },
  {
    id: "disclaimer",
    title: "10. Disclaimer of Warranties",
    content: `MANACAMP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND QUIET ENJOYMENT.

We do not guarantee that ManaCamp will be uninterrupted, error-free, secure, or free of harmful components, or that content available through the service will be accurate, complete, or reliable.`,
  },
  {
    id: "liability",
    title: "11. Limitation of Liability",
    content: `TO THE MAXIMUM EXTENT PERMITTED BY LAW, MANACAMP AND ITS AFFILIATES, OFFICERS, EMPLOYEES, CONTRACTORS, AND PARTNERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF DATA, PROFITS, REVENUE, GOODWILL, OR BUSINESS INTERRUPTION, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.

TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR CLAIMS ARISING OUT OF OR RELATING TO MANACAMP WILL NOT EXCEED THE GREATER OF: (A) THE AMOUNT YOU PAID TO MANACAMP IN THE TWELVE MONTHS BEFORE THE CLAIM AROSE, OR (B) USD $50.`,
  },
  {
    id: "governing-law",
    title: "12. Governing Law and Contact",
    content: `These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict of laws principles.

Any disputes arising out of or relating to these Terms or your use of ManaCamp will be subject to the exclusive jurisdiction of the state or federal courts located in Delaware, unless applicable law requires otherwise.

If you have questions about these Terms, please contact:

legal@manacamp.app`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,32,0.58),transparent)]" />
          <div className="absolute left-1/2 top-16 -translate-x-1/2 w-[520px] h-[260px] ambient-blue rounded-full blur-3xl opacity-80" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <div className="eyebrow-pill text-sm mb-6 mx-auto">
              <FileText className="w-3.5 h-3.5" />
              Legal
            </div>
            <h1 className="text-3xl sm:text-6xl font-bold text-white mb-4 text-balance">
              Terms &{" "}
              <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-text-secondary text-sm">
              Last updated: {legalLastUpdated}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-divider pb-6 sm:pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="panel rounded-2xl p-5 sm:p-6">
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

      <section className="section-divider pb-14 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          {sections.map((section, i) => (
            <ScrollReveal key={section.id} delay={i * 0.04}>
              <div
                id={section.id}
                className="panel rounded-2xl p-5 sm:p-6 scroll-mt-24"
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

      <section className="section-divider pb-20 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <ScrollReveal>
            <div className="panel rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Community Guidelines
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                  Our Community Guidelines describe expected conduct and prohibited behavior in practical terms. They are incorporated into these Terms by reference.
                </p>
              </div>
              <Link
                href="/guidelines"
                className="btn-secondary rounded-full px-5 py-3 text-sm font-medium text-center transition-all duration-200"
              >
                View Community Guidelines
              </Link>
            </div>
          </ScrollReveal>
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
