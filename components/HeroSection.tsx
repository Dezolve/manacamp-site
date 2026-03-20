"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import BrandMark from "@/components/BrandMark";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[42rem] sm:min-h-[46rem] lg:min-h-[clamp(46rem,88svh,54rem)]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(65,123,211,0.26),transparent_28%),linear-gradient(180deg,rgba(8,16,34,0.94)_0%,rgba(6,8,22,0.92)_48%,rgba(6,8,22,1)_100%)]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.22, 0.34, 0.22],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[14%] left-[6%] sm:left-[16%] w-[24rem] h-[24rem] sm:w-[34rem] sm:h-[34rem] ambient-blue rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[12%] right-[4%] sm:right-[14%] w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] ambient-ember rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[38%] right-[10%] sm:right-[28%] w-52 h-52 sm:w-72 sm:h-72 bg-accent-support/10 rounded-full blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(4,8,18,0.3))]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-8 sm:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-6 sm:mb-8 flex justify-center lg:justify-start"
        >
          <div className="panel rounded-full px-4 py-2 text-xs sm:text-sm text-text-secondary border-[rgba(255,138,61,0.18)]">
            Under construction. Early preview in active development.
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,540px)] lg:items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow-pill mb-6 sm:mb-8 mx-auto lg:mx-0 text-center lg:text-left whitespace-nowrap"
            >
              <BrandMark className="w-3.5 h-3.5 text-accent-primary" />
              <span className="text-sm">Windows available now · iOS coming soon</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mx-auto max-w-[12ch] lg:max-w-none text-4xl leading-[0.98] sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight mb-5 sm:mb-6"
            >
              <span className="text-white">See who&apos;s around.</span>
              <br />
              <span className="gradient-text">Join what&apos;s happening.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed text-balance"
            >
              ManaCamp brings channels, DMs, voice, video, screen sharing, bots,
              and live sessions into one immersive space built for real-time communities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="text-sm text-text-muted max-w-xl mx-auto lg:mx-0 -mt-2 mb-8 sm:mb-10"
            >
              Early product and site preview. Features, polish, and platform support are still actively being refined.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Link
                href="#download"
                className="btn-primary w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                Download for Windows
              </Link>
              <Link
                href="#ios"
                className="btn-secondary w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                Join iOS Waitlist
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-sm text-text-muted"
            >
              <span className="eyebrow-pill border-[rgba(255,153,86,0.22)]">Presence that feels live</span>
              <span className="eyebrow-pill">Voice, video, and sessions</span>
              <span className="eyebrow-pill">Built for social spaces</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mx-auto w-full max-w-[34rem]"
          >
            <div className="absolute -inset-4 sm:-inset-8 ambient-blue opacity-90 blur-3xl" />
            <div className="absolute -bottom-6 sm:-bottom-10 right-6 sm:right-8 w-32 h-32 sm:w-40 sm:h-40 ambient-ember blur-3xl" />
            <div className="panel-strong relative rounded-[1.75rem] sm:rounded-[2rem] p-2.5 sm:p-4 border shadow-[0_40px_120px_rgba(3,9,24,0.65)]">
              <div className="rounded-[1.65rem] border border-[rgba(134,178,255,0.14)] bg-[linear-gradient(180deg,rgba(10,17,32,0.98),rgba(8,13,24,0.96))] overflow-hidden">
                <div className="flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 border-b border-border-subtle gap-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgba(255,138,61,0.8)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgba(90,178,255,0.6)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[rgba(123,97,255,0.45)]" />
                  </div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.24em] sm:tracking-[0.28em] text-text-muted text-right">Live server</span>
                </div>

                <div className="grid grid-cols-[84px_minmax(0,1fr)] sm:grid-cols-[132px_minmax(0,1fr)] min-h-[360px] sm:min-h-[420px]">
                  <div className="bg-[linear-gradient(180deg,rgba(13,21,42,0.94),rgba(9,15,30,0.96))] border-r border-border-subtle p-2.5 sm:p-4 space-y-2 sm:space-y-3">
                    {[
                      "ManaCamp",
                      "Raid",
                      "Media",
                      "Friends",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-xl sm:rounded-2xl px-2.5 sm:px-3 py-2 text-[11px] sm:text-xs font-medium ${
                          index === 0
                            ? "bg-[rgba(90,178,255,0.16)] text-white border border-[rgba(110,200,255,0.22)]"
                            : "text-text-secondary bg-[rgba(255,255,255,0.02)]"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-rows-[auto_minmax(0,1fr)_auto]">
                    <div className="flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4 border-b border-border-subtle bg-[rgba(11,18,35,0.78)] gap-3">
                      <div>
                        <p className="text-sm font-semibold text-white"># general</p>
                        <p className="text-xs text-text-muted">42 members online</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="rounded-full border border-[rgba(255,153,86,0.28)] bg-[rgba(255,138,61,0.12)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[rgba(255,194,153,0.9)]">
                          Session live
                        </div>
                      </div>
                    </div>

                    <div className="p-3 sm:p-6 space-y-3 sm:space-y-4 bg-[radial-gradient(circle_at_top,rgba(53,104,192,0.12),transparent_32%)]">
                      {[
                        {
                          name: "Kai",
                          text: "Voice room is open if anyone wants to jump in before tonight's run.",
                        },
                        {
                          name: "Mira",
                          text: "Pinned the schedule and bot commands in resources.",
                        },
                        {
                          name: "Noah",
                          text: "Screen share is ready. I can walk through the setup in five.",
                        },
                      ].map((message, index) => (
                        <div key={message.name} className="rounded-2xl border border-border-subtle bg-[rgba(255,255,255,0.02)] px-3 sm:px-4 py-3 text-left">
                          <div className="flex items-center gap-3 mb-1.5 min-w-0">
                            <div
                              className={`h-8 w-8 rounded-full ${
                                index === 0
                                  ? "bg-[linear-gradient(135deg,rgba(90,178,255,0.9),rgba(77,163,255,0.6))]"
                                  : index === 1
                                    ? "bg-[linear-gradient(135deg,rgba(123,97,255,0.78),rgba(90,178,255,0.36))]"
                                    : "bg-[linear-gradient(135deg,rgba(255,138,61,0.92),rgba(90,178,255,0.4))]"
                              }`}
                            />
                            <div>
                              <p className="text-sm font-medium text-white truncate">{message.name}</p>
                              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted">Now active</p>
                            </div>
                          </div>
                          <p className="text-[13px] sm:text-sm leading-relaxed text-text-secondary">{message.text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col items-start sm:flex-row sm:items-center justify-between gap-3 px-3 sm:px-5 py-3 sm:py-4 border-t border-border-subtle bg-[rgba(8,13,24,0.94)]">
                      <div className="flex items-center gap-2 text-[13px] sm:text-sm text-text-secondary">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        8 in voice, 3 screens live
                      </div>
                      <div className="rounded-full border border-[rgba(90,178,255,0.22)] bg-[rgba(90,178,255,0.08)] px-3 py-1.5 text-xs font-medium text-white">
                        Open session controls
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 sm:mt-12 flex flex-col items-center gap-2"
        >
          <Link href="#features" className="flex flex-col items-center gap-2">
            <span className="text-xs text-text-muted uppercase tracking-[0.3em]">
              See Features
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-5 h-5 text-text-muted" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
