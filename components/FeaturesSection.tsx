"use client";

import ScrollReveal from "./ScrollReveal";
import {
  Library,
  Layers,
  BarChart3,
  Search,
  Users,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: Library,
    title: "Collection Tracker",
    description:
      "Catalog every card you own with smart search and filtering. Know your collection's value at a glance.",
    color: "from-purple-500 to-violet-600",
    highlight: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Layers,
    title: "Deck Builder",
    description:
      "Craft powerful decks with our intelligent builder. Get real-time suggestions and mana curve analysis.",
    color: "from-amber-500 to-orange-600",
    highlight: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: BarChart3,
    title: "Game Analytics",
    description:
      "Track your win rates, favorite strategies, and opponent patterns to constantly improve your play.",
    color: "from-emerald-500 to-teal-600",
    highlight: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Search,
    title: "Card Database",
    description:
      "Search millions of cards across all sets with powerful filters for power, toughness, colors, and type.",
    color: "from-blue-500 to-cyan-600",
    highlight: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Share decks, trade cards, and connect with players worldwide. Find your next big tournament match.",
    color: "from-pink-500 to-rose-600",
    highlight: "bg-pink-500/10 border-pink-500/20",
  },
  {
    icon: Wifi,
    title: "Offline Ready",
    description:
      "Access your collection and decks anywhere, even without internet. Sync automatically when you reconnect.",
    color: "from-indigo-500 to-purple-600",
    highlight: "bg-indigo-500/10 border-indigo-500/20",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass border border-purple-500/30 text-xs text-purple-300 uppercase tracking-widest mb-4">
            Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Everything you need to{" "}
            <span className="gradient-text">play smarter</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ManaCamp is packed with powerful tools designed for serious players
            who want to take their game to the next level.
          </p>
        </ScrollReveal>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal
                key={feature.title}
                delay={index * 0.08}
                direction="up"
              >
                <div
                  className={`group p-6 rounded-2xl glass border ${feature.highlight} hover:bg-white/5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
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
