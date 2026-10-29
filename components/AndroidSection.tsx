"use client";

import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight, Smartphone, ShieldCheck } from "lucide-react";

const contactEmail = "hello@manacamp.app";
const subject = "ManaCamp Android Internal Testing Access";
const body = "Hi! I'd like to request access to the ManaCamp Android internal test.\n\nGoogle Play account email: \n\nThanks!";
const requestHref = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export default function AndroidSection() {
  return (
    <section id="android" className="section-divider py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="panel-strong relative rounded-3xl overflow-hidden border-[rgba(90,178,255,0.22)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_20%,rgba(90,178,255,0.16),transparent_42%),linear-gradient(130deg,rgba(90,178,255,0.08),transparent_65%)]" />
            <div className="relative flex flex-col md:flex-row md:items-center gap-7 md:gap-10 p-6 sm:p-10">
              <div className="icon-tile shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center border-[rgba(90,178,255,0.28)]">
                <Smartphone className="w-8 h-8 text-accent-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.19em] text-[rgb(182,224,255)] mb-3">
                  <ShieldCheck className="w-4 h-4" />
                  Internal testing · By invitation
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  ManaCamp for Android
                </h2>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
                  Android is available to a limited group of testers while we prepare for a wider release.
                  Interested in trying it? Reach out to request access. Invitations are handled manually
                  and may take some time.
                </p>
              </div>
              <a
                href={requestHref}
                className="btn-secondary shrink-0 inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                Request Android access
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
