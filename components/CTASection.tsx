"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-violet-800/20 to-amber-600/20" />
            <div className="absolute inset-0 glass" />
            <div className="absolute inset-0 border border-white/10 rounded-3xl" />

            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl translate-y-1/2" />

            <div className="relative px-8 sm:px-16 py-16 sm:py-20 text-center">
              <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6">
                Ready to level up{" "}
                <span className="gradient-text">your game?</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
                Download ManaCamp today and join thousands of players who are
                already playing smarter, building better decks, and winning more.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="#download"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-amber-500 text-white font-semibold text-base hover:opacity-90 transition-all duration-200 shadow-xl hover:shadow-purple-500/40 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get ManaCamp Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/support"
                  className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200"
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
