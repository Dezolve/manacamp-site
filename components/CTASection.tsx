"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-divider py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="panel-strong relative rounded-3xl overflow-hidden border-[rgba(116,164,255,0.22)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(90,178,255,0.16),transparent_40%,rgba(255,138,61,0.12))]" />
            <div className="absolute top-0 left-1/4 w-64 h-64 ambient-blue rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 ambient-ember rounded-full blur-3xl translate-y-1/2" />

            <div className="relative px-5 sm:px-16 py-12 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-6xl font-bold text-white mb-5 sm:mb-6 text-balance">
                Ready to bring your{" "}
                <span className="gradient-text">community together?</span>
              </h2>
              <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed text-balance">
                Download ManaCamp for Windows and start building a space for
                channels, DMs, sessions, bots, and everything your group needs
                to stay connected.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/download"
                  className="btn-primary w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  Get ManaCamp for Windows
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/support"
                  className="btn-secondary w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
