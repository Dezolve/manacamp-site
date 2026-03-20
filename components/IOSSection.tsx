"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Apple, Bell, Star, Smartphone } from "lucide-react";

export default function IOSSection() {
  return (
    <section id="ios" className="section-divider py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,32,0.28),rgba(9,15,30,0.54))]" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] ambient-blue rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <span className="eyebrow-pill text-xs uppercase tracking-[0.28em] mb-6">
              <Apple className="w-3.5 h-3.5" />
              iOS App
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              ManaCamp for{" "}
              <span className="gradient-text">iPhone & iPad</span>
              <br />
              <span className="text-text-secondary text-3xl font-normal">
                Coming Soon
              </span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              We&apos;re bringing ManaCamp to iPhone and iPad so your community
              stays with you everywhere. Keep up with channels and DMs, check
              activity, manage notifications, and stay connected when you&apos;re
              away from your desktop.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Stay connected to channels and DMs on the go",
                "Check activity, replies, and notifications in real time",
                "Follow conversations and community activity from anywhere",
                "Built for a fast, clean, native-feeling experience",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-text-secondary">
                  <div className="icon-tile w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border-[rgba(90,178,255,0.22)] bg-[rgba(90,178,255,0.08)]">
                    <Star className="w-2.5 h-2.5 text-white" fill="white" />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm text-text-secondary mb-3">
              Get notified when the iOS app is ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field flex-1 px-4 py-3 rounded-full transition-colors text-sm"
              />
              <button className="btn-primary px-6 py-3 rounded-full font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap">
                <Bell className="w-4 h-4" />
                Notify Me
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-64 h-[520px] rounded-[3rem] panel-strong overflow-hidden relative mx-auto border-[rgba(124,168,255,0.24)] shadow-[0_40px_100px_rgba(3,9,24,0.68)]">
                  <div className="absolute inset-2 rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(14,23,46,0.98),rgba(7,12,24,0.98))] overflow-hidden">
                    <div className="flex items-center justify-between px-6 pt-4 pb-2">
                      <span className="text-xs text-white/70">9:41</span>
                      <div className="w-20 h-5 rounded-full bg-black/50" />
                      <div className="flex gap-1">
                        <div className="w-4 h-2 rounded-sm bg-white/50" />
                      </div>
                    </div>
                    <div className="px-4 pt-4">
                      <div className="text-white font-bold text-lg mb-1">Campfire</div>
                      <div className="text-[rgb(182,224,255)] text-xs mb-4">3 friends online now</div>
                      <div className="space-y-2 mb-4">
                        {[
                          "# general",
                          "# sessions",
                          "# clips",
                          "DMs",
                        ].map((item, i) => (
                          <div
                            key={item}
                            className="h-10 rounded-xl flex items-center px-3 text-sm text-white/80 border border-border-subtle"
                            style={{
                              background: i === 1
                                ? "linear-gradient(135deg, rgba(18,37,71,0.95), rgba(11,18,35,0.95))"
                                : i === 2
                                  ? "linear-gradient(135deg, rgba(28,33,70,0.88), rgba(11,18,35,0.95))"
                                  : "linear-gradient(135deg, rgba(14,28,55,0.95), rgba(9,15,30,0.95))",
                            }}
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                      <div className="rounded-xl border border-border-subtle bg-white/5 p-3 mb-2">
                        <div className="text-[11px] text-text-muted mb-1">Activity</div>
                        <div className="text-xs text-white/80">Kai started a voice session</div>
                      </div>
                      <div className="flex gap-2 text-[11px] text-white/70">
                        <div className="flex-1 h-8 rounded-lg border border-[rgba(90,178,255,0.22)] bg-[rgba(90,178,255,0.12)] flex items-center justify-center">
                          Friends
                        </div>
                        <div className="flex-1 h-8 rounded-lg border border-[rgba(255,138,61,0.22)] bg-[rgba(255,138,61,0.12)] flex items-center justify-center">
                          Sessions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 -z-10 ambient-blue blur-2xl rounded-full scale-75" />
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 -right-4 panel rounded-2xl px-4 py-2 shadow-xl border-[rgba(255,138,61,0.24)]"
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-accent-warm-soft" />
                  <span className="text-xs font-semibold text-[rgb(255,198,158)]">Coming Soon</span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
