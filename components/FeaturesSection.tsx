"use client";

import ScrollReveal from "./ScrollReveal";
import {
  Bot,
  Hash,
  MessagesSquare,
  Users,
  Video,
  MonitorUp,
} from "lucide-react";

const features = [
  {
    icon: Hash,
    title: "Channels",
    description:
      "Organize conversations into dedicated spaces for your groups, topics, and communities. Keep everything easy to follow and always in the right place.",
    accent: "text-accent-primary",
    tile: "border-[rgba(90,178,255,0.2)] bg-[rgba(90,178,255,0.08)]",
  },
  {
    icon: MessagesSquare,
    title: "Direct Messages",
    description:
      "Start one-on-one or small-group conversations instantly. Move naturally between private chats and shared community spaces.",
    accent: "text-accent-warm-soft",
    tile: "border-[rgba(255,159,67,0.22)] bg-[rgba(255,138,61,0.08)]",
  },
  {
    icon: Video,
    title: "Voice & Video",
    description:
      "Jump into live sessions when text isn&apos;t enough. Hang out, talk strategy, catch up, or collaborate in real time.",
    accent: "text-emerald-300",
    tile: "border-[rgba(72,187,120,0.22)] bg-[rgba(34,197,94,0.08)]",
  },
  {
    icon: MonitorUp,
    title: "Screen Sharing",
    description:
      "Share your screen for walkthroughs, help, watch-together moments, or live collaboration without leaving the app.",
    accent: "text-accent-primary",
    tile: "border-[rgba(90,178,255,0.2)] bg-[rgba(77,163,255,0.08)]",
  },
  {
    icon: Users,
    title: "Friends & Presence",
    description:
      "See who&apos;s around, who&apos;s active, and who&apos;s in session. Presence makes your community feel alive and ready to join.",
    accent: "text-[rgb(185,164,255)]",
    tile: "border-[rgba(123,97,255,0.22)] bg-[rgba(123,97,255,0.08)]",
  },
  {
    icon: Bot,
    title: "Bots & Activity",
    description:
      "Extend your server with bots, automations, music, utility features, and interactive tools that make your space more powerful.",
    accent: "text-accent-warm-soft",
    tile: "border-[rgba(255,159,67,0.22)] bg-[rgba(255,159,67,0.08)]",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="section-divider py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,32,0.46),rgba(6,8,22,0))]" />
        <div className="absolute left-[8%] top-20 w-80 h-80 ambient-blue blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12 sm:mb-16">
          <span className="eyebrow-pill text-xs uppercase tracking-[0.28em] mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 text-balance">
            Everything you need to{" "}
            <span className="gradient-text">run your space</span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed text-balance">
            ManaCamp gives communities the tools to chat, coordinate, hang out,
            and stay connected across channels, DMs, voice, video, and bots.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal
                key={feature.title}
                delay={index * 0.08}
                direction="up"
              >
                <div className="panel group h-full p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-border-strong cursor-default">
                  <div
                    className={`icon-tile ${feature.tile} w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-border-strong group-hover:shadow-[0_0_26px_rgba(90,178,255,0.12)]`}
                  >
                    <Icon className={`w-6 h-6 ${feature.accent}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
