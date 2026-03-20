import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { Shield } from "lucide-react";
import { legalLastUpdated, privacySections } from "@/app/legalContent";

export const metadata: Metadata = {
  title: "Privacy Policy – ManaCamp",
  description:
    "Read ManaCamp's Privacy Policy and learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
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
              <Shield className="w-3.5 h-3.5" />
              Privacy
            </div>
            <h1 className="text-3xl sm:text-6xl font-bold text-white mb-4 text-balance">
              Privacy <span className="gradient-text">Policy</span>
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
                {privacySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-sm text-[rgb(182,224,255)] hover:text-white transition-colors"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-divider pb-20 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          {privacySections.map((section, index) => (
            <ScrollReveal key={section.id} delay={index * 0.05}>
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
    </div>
  );
}