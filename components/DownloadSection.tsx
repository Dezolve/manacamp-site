"use client";

import ScrollReveal from "./ScrollReveal";
import { Monitor, Download, Shield, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const requirements = [
  "Windows 10 / 11 (64-bit)",
  "4 GB RAM minimum",
  "500 MB disk space",
  "Internet connection for sync",
];

const highlights = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Native Windows performance with instant search",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    desc: "Your data is encrypted and stays yours",
  },
  {
    icon: Monitor,
    title: "Desktop Power",
    desc: "Full keyboard shortcuts and multi-window support",
  },
];

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Windows download card */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main card */}
              <div className="glass border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-amber-600/5 rounded-3xl" />

                <div className="relative">
                  {/* Windows icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 shadow-xl shadow-blue-500/30">
                    <Monitor className="w-8 h-8 text-white" />
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs mb-3">
                    Available Now
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    ManaCamp for Windows
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    Version 1.0.0 · Free Download
                  </p>

                  <a
                    href="/download/manacamp-windows-setup.exe"
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] mb-4"
                    download
                  >
                    <Download className="w-5 h-5" />
                    Download for Windows (.exe)
                  </a>

                  <p className="text-xs text-gray-500 text-center">
                    Free download · No credit card required
                  </p>
                </div>
              </div>

              {/* System requirements card */}
              <div className="mt-4 glass border border-white/10 rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-gray-300 mb-3">
                  System Requirements
                </h4>
                <ul className="space-y-2">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Highlights */}
          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full glass border border-amber-500/30 text-xs text-amber-300 uppercase tracking-widest mb-6">
                Windows Desktop App
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Full power on{" "}
                <span className="gradient-text">your desktop</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                The ManaCamp desktop app brings the complete experience to
                Windows. Manage thousands of cards, build complex decks, and
                track every game — all with the comfort of a full keyboard and
                large screen.
              </p>

              <div className="space-y-6">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <ScrollReveal key={item.title} delay={0.2 + i * 0.1} direction="right">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
