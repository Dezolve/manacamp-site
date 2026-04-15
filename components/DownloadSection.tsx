"use client";

import ScrollReveal from "./ScrollReveal";
import { Bot, CheckCircle, Download, Monitor, Video, Zap } from "lucide-react";
import { motion } from "framer-motion";

const requirements = [
  "Windows 10 / 11 (64-bit)",
  "Internet connection required",
];

const highlights = [
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Move between channels, DMs, and community spaces without friction.",
  },
  {
    icon: Video,
    title: "Voice & Screen Share",
    desc: "Launch live sessions, talk in real time, and share what you&apos;re doing.",
  },
  {
    icon: Bot,
    title: "Bots & Community Tools",
    desc: "Add utility, music, automation, and interactive functionality to your space.",
  },
];

export default function DownloadSection() {
  return (
    <section id="download" className="section-divider py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,32,0),rgba(10,16,32,0.44))]" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] ambient-ember rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="panel-strong rounded-3xl p-5 sm:p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(90,178,255,0.12),transparent_46%,rgba(255,138,61,0.08))] rounded-3xl" />

                <div className="relative">
                  <div className="icon-tile w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-[rgba(90,178,255,0.22)] shadow-[0_0_30px_rgba(90,178,255,0.14)]">
                    <Monitor className="w-8 h-8 text-accent-primary" />
                  </div>

                  <span className="eyebrow-pill text-xs mb-3 border-[rgba(90,178,255,0.22)] text-[rgb(182,224,255)]">
                    Available Now
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-balance">
                    ManaCamp for Windows
                  </h3>
                  <p className="text-text-secondary text-sm mb-6">
                    Latest desktop build · Available now
                  </p>

                  <a
                    href="/download"
                    className="btn-primary flex items-center justify-center gap-3 w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl font-semibold transition-all duration-200 hover:-translate-y-0.5 mb-4"
                  >
                    <Download className="w-5 h-5" />
                    Download ManaCamp for Windows (.exe)
                  </a>

                  <p className="text-xs text-text-muted text-center">
                    Latest build · Free download · No credit card required
                  </p>
                </div>
              </div>

              <div className="mt-4 panel rounded-2xl p-4 sm:p-5">
                <h4 className="text-sm font-semibold text-text-secondary mb-3">
                  System Requirements
                </h4>
                <ul className="space-y-2">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-center gap-2 text-sm text-text-secondary">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div>
              <span className="eyebrow-pill text-xs uppercase tracking-[0.28em] mb-6 border-[rgba(255,138,61,0.2)] text-[rgb(255,198,158)]">
                Windows Desktop App
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mb-5 sm:mb-6 text-balance">
                Full power on{" "}
                <span className="gradient-text">your desktop</span>
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 sm:mb-10 text-balance">
                ManaCamp&apos;s desktop app is designed for the full experience:
                fast navigation, immersive chat, rich community spaces, voice
                and video sessions, screen sharing, and room for the tools that
                make your server feel alive.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <ScrollReveal key={item.title} delay={0.2 + i * 0.1} direction="right">
                      <div className="panel flex items-start gap-4 rounded-2xl p-4 min-w-0">
                        <div className="icon-tile w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border-[rgba(90,178,255,0.18)]">
                          <Icon className={`w-5 h-5 ${i === 1 ? "text-accent-warm-soft" : "text-accent-primary"}`} />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">
                            {item.title}
                          </h4>
                          <p className="text-text-secondary text-sm">{item.desc}</p>
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
