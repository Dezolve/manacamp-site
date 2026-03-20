"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Bell, ChevronDown, Download, Mail, MessageSquare, Zap } from "lucide-react";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I download ManaCamp for Windows?",
        a: "Visit our homepage and click the 'Download for Windows' button. The installer will guide you through the setup process. ManaCamp requires Windows 10 or 11 (64-bit).",
      },
      {
        q: "Is ManaCamp free to use?",
        a: "ManaCamp is free to download on Windows. If pricing or paid plans change later, they&apos;ll be shown clearly in the app and on the site.",
      },
      {
        q: "When will the iOS app be available?",
        a: "We're actively developing the ManaCamp iOS app. Sign up for early access notifications on our homepage to be the first to know when it launches on the App Store.",
      },
    ],
  },
  {
    category: "Account & Sync",
    questions: [
      {
        q: "How do I create an account?",
        a: "Open ManaCamp and click 'Create Account'. You can sign up with your email address or use Google/Apple sign-in for faster access.",
      },
      {
        q: "How does cloud sync work?",
        a: "When you&apos;re signed in, ManaCamp keeps your account state, settings, and supported activity in sync so you can pick up where you left off on available platforms.",
      },
      {
        q: "Can I use ManaCamp on multiple devices?",
        a: "Yes! Your account syncs across all your devices. Once the iOS app launches, you'll be able to seamlessly switch between Windows and iOS.",
      },
    ],
  },
  {
    category: "Communities & Chats",
    questions: [
      {
        q: "How do channels and DMs work?",
        a: "Channels keep shared conversations organized by topic, while DMs let you move into one-on-one or small-group chats without leaving the app.",
      },
      {
        q: "Can I use bots in my space?",
        a: "ManaCamp is built to support bots and interactive tools that help communities coordinate, automate tasks, and add more activity to their spaces.",
      },
      {
        q: "How do I know who&apos;s online or active?",
        a: "Presence and activity indicators help you see who&apos;s around, who&apos;s active, and when a session is already happening so it&apos;s easy to jump in.",
      },
    ],
  },
  {
    category: "Troubleshooting",
    questions: [
      {
        q: "The app won't start on Windows — what should I do?",
        a: "First, make sure you're running Windows 10 or 11 (64-bit). Try right-clicking the installer and selecting 'Run as administrator'. If the issue persists, contact our support team.",
      },
      {
        q: "My messages or activity aren&apos;t updating. How do I fix this?",
        a: "Check your connection, make sure you&apos;re still signed in, and restart the app. If the issue continues, contact support with your Windows version and what you were doing when it happened.",
      },
      {
        q: "How do I reset my password?",
        a: "On the login screen, click 'Forgot Password' and enter your email address. You'll receive a password reset link within a few minutes.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border-subtle last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex items-center justify-between gap-4 group"
      >
        <span className="text-sm sm:text-base text-text-secondary group-hover:text-white transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-sm text-text-secondary leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,32,0.58),transparent)]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] ambient-blue rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow-pill text-sm mb-6 mx-auto">
              <MessageSquare className="w-3.5 h-3.5" />
              Support Center
            </div>
            <h1 className="text-3xl sm:text-6xl font-bold text-white mb-4 text-balance">
              How can we <span className="gradient-text">help you?</span>
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto text-balance">
              Find answers to common questions, or reach out to our team
              directly. We&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-divider pb-14 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                icon: Mail,
                title: "Email Support",
                desc: "Get a response within 24 hours",
                action: "Send Email",
                href: "mailto:support@manacamp.app",
                iconClass: "text-accent-primary",
                tileClass: "border-[rgba(90,178,255,0.22)] bg-[rgba(90,178,255,0.08)]",
              },
              {
                icon: Download,
                title: "Windows Download",
                desc: "Install the desktop app and get started",
                action: "Get Windows App",
                href: "/#download",
                iconClass: "text-accent-primary",
                tileClass: "border-[rgba(90,178,255,0.22)] bg-[rgba(90,178,255,0.08)]",
              },
              {
                icon: Bell,
                title: "iOS Updates",
                desc: "Join the waitlist for launch news",
                action: "Join Waitlist",
                href: "/#ios",
                iconClass: "text-accent-warm-soft",
                tileClass: "border-[rgba(255,138,61,0.24)] bg-[rgba(255,138,61,0.08)]",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={i * 0.1}>
                  <div className="panel h-full rounded-2xl p-5 sm:p-6 text-center hover:border-border-strong transition-colors group">
                    <div
                      className={`icon-tile ${item.tileClass} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className={`w-6 h-6 ${item.iconClass}`} />
                    </div>
                    <h3 className="font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-secondary mb-4">{item.desc}</p>
                    <a
                      href={item.href}
                      className="btn-secondary inline-block px-4 py-2 rounded-full text-white text-xs font-medium transition-colors"
                    >
                      {item.action}
                    </a>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-divider pb-20 sm:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-10">
              <div className="icon-tile w-8 h-8 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {faqs.map((section, i) => (
              <ScrollReveal key={section.category} delay={i * 0.1}>
                <div className="panel rounded-2xl p-5 sm:p-6">
                  <h3 className="text-sm font-semibold text-[rgb(182,224,255)] uppercase tracking-[0.28em] mb-4">
                    {section.category}
                  </h3>
                  <div>
                    {section.questions.map((item) => (
                      <FAQItem key={item.q} q={item.q} a={item.a} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-divider pb-20 sm:pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="panel rounded-3xl p-5 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Still need help?
              </h2>
              <p className="text-text-secondary text-sm mb-6">
                Send us a message and our team will get back to you within 24
                hours.
              </p>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-text-secondary mb-1 block">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input-field w-full px-4 py-3 rounded-xl transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-text-secondary mb-1 block">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="input-field w-full px-4 py-3 rounded-xl transition-colors text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-text-secondary mb-1 block">
                    Subject
                  </label>
                  <select className="input-field w-full px-4 py-3 rounded-xl transition-colors text-sm">
                    <option value="">Select a topic</option>
                    <option>Account issue</option>
                    <option>Chat or sync issue</option>
                    <option>Windows install</option>
                    <option>iOS waitlist</option>
                    <option>Bug report</option>
                    <option>Feature request</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-text-secondary mb-1 block">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe your issue in detail..."
                    className="input-field w-full px-4 py-3 rounded-xl transition-colors text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full py-3 rounded-xl font-semibold transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
