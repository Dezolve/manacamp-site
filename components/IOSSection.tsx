"use client";

import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Apple, Bell, Star, Smartphone } from "lucide-react";

export default function IOSSection() {
  return (
    <section
      id="ios"
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950/30 to-indigo-950/30" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <ScrollReveal direction="left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-gray-500/30 text-xs text-gray-300 uppercase tracking-widest mb-6">
              <Apple className="w-3.5 h-3.5" />
              iOS App
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              ManaCamp for{" "}
              <span className="gradient-text">iPhone & iPad</span>
              <br />
              <span className="text-gray-400 text-3xl font-normal">
                Coming Soon
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We&apos;re bringing the full ManaCamp experience to iOS. Get
              notified when it launches and be the first to download it on your
              iPhone or iPad.
            </p>

            {/* Features list */}
            <ul className="space-y-3 mb-8">
              {[
                "Native iOS design with smooth animations",
                "iCloud sync across all your Apple devices",
                "Widget support for quick collection stats",
                "Apple Watch companion app",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                    <Star className="w-2.5 h-2.5 text-white" fill="white" />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Notify form */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full glass border border-white/20 text-white placeholder-gray-500 bg-transparent focus:outline-none focus:border-purple-500 transition-colors text-sm"
              />
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-medium text-sm hover:from-purple-500 hover:to-violet-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/30 flex items-center justify-center gap-2 whitespace-nowrap">
                <Bell className="w-4 h-4" />
                Notify Me
              </button>
            </div>
          </ScrollReveal>

          {/* Right: Phone mockup */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Phone frame */}
                <div className="w-64 h-[520px] rounded-[3rem] glass border border-white/20 shadow-2xl shadow-purple-900/40 overflow-hidden relative mx-auto">
                  {/* Screen */}
                  <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-b from-purple-900/80 to-[#0a0a1a] overflow-hidden">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-6 pt-4 pb-2">
                      <span className="text-xs text-white/70">9:41</span>
                      <div className="w-20 h-5 rounded-full bg-black/50" />
                      <div className="flex gap-1">
                        <div className="w-4 h-2 rounded-sm bg-white/50" />
                      </div>
                    </div>
                    {/* App content preview */}
                    <div className="px-4 pt-4">
                      <div className="text-white font-bold text-lg mb-1">My Collection</div>
                      <div className="text-purple-300 text-xs mb-4">2,847 cards · $1,234 value</div>
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className="aspect-[2/3] rounded-lg"
                            style={{
                              background: `linear-gradient(135deg, hsl(${270 + i * 20}, 60%, ${30 + i * 5}%), hsl(${290 + i * 15}, 50%, 20%))`,
                            }}
                          />
                        ))}
                      </div>
                      <div className="h-2 rounded-full bg-purple-500/30 mb-2">
                        <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-purple-500 to-violet-500" />
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-8 rounded-lg bg-purple-500/20" />
                        <div className="flex-1 h-8 rounded-lg bg-amber-500/20" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute inset-0 -z-10 bg-purple-500/20 blur-2xl rounded-full scale-75" />
              </motion.div>

              {/* Coming soon badge */}
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 -right-4 glass border border-amber-500/30 rounded-2xl px-4 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-amber-300">Coming Soon</span>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
