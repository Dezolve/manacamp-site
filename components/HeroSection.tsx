"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 via-[#0a0a1a] to-[#0a0a1a]" />
        {/* Glowing orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(167,139,250,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/30 text-sm text-purple-300 mb-8"
        >
          <Zap className="w-3.5 h-3.5 text-amber-400" fill="currentColor" />
          <span>iOS App Coming Soon · Windows Available Now</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-white">Your Ultimate</span>
          <br />
          <span className="gradient-text">Card Game</span>
          <br />
          <span className="text-white">Companion</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Track your collection, build winning decks, and manage your gameplay —
          all in one beautifully designed app built for serious players.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#download"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white font-semibold text-base hover:from-purple-500 hover:to-violet-500 transition-all duration-200 shadow-xl hover:shadow-purple-500/40 hover:scale-105"
          >
            Download for Windows
          </Link>
          <Link
            href="#ios"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200 hover:scale-105"
          >
            iOS — Coming Soon
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
