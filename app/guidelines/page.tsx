import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { legalLastUpdated, guidelineSections } from "@/app/legalContent";

export const metadata: Metadata = {
  title: "Community Guidelines – ManaCamp",
  description:
    "Read ManaCamp's Community Guidelines and learn what behavior is expected on the platform.",
};

export default function GuidelinesPage() {
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
              <BookOpen className="w-3.5 h-3.5" />
              Legal
            </div>
            <h1 className="text-3xl sm:text-6xl font-bold text-white mb-4 text-balance">
              Community{" "}
              <span className="gradient-text">Guidelines</span>
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
                {guidelineSections.map((s) => (
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
          {guidelineSections.map((section, i) => (
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="panel rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Terms & Conditions
                </h2>
                <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                  These Community Guidelines are incorporated into our Terms & Conditions. Review the full legal terms governing your use of ManaCamp.
                </p>
              </div>
              <Link
                href="/terms"
                className="btn-secondary rounded-full px-5 py-3 text-sm font-medium text-center transition-all duration-200"
              >
                View Terms & Conditions
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
