import type { Metadata } from "next";
import Link from "next/link";
import {
  Braces,
  Gamepad2,
  ShieldPlus,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { absoluteUrl, createMetadata, seo } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn the vision behind ManaCamp, a modern platform built to bring presence back to online community for gaming spaces and beyond.",
  path: "/about",
  keywords: [
    ...seo.defaultKeywords,
    "about manacamp",
    "gaming community platform",
    "battle.net inspiration",
    "online presence",
  ],
});

const builtFor = [
  {
    title: "Players",
    description: "Spaces that feel social, alive, and worth returning to",
    icon: Gamepad2,
    accent:
      "border-[rgba(90,178,255,0.2)] bg-[rgba(90,178,255,0.08)] text-accent-primary",
  },
  {
    title: "Communities",
    description: "Better presence, stronger identity, deeper connection",
    icon: Users,
    accent:
      "border-[rgba(123,97,255,0.22)] bg-[rgba(123,97,255,0.08)] text-[rgb(185,164,255)]",
  },
  {
    title: "Creators & Moderators",
    description: "Tools that support structure, culture, and growth",
    icon: ShieldPlus,
    accent:
      "border-[rgba(255,159,67,0.22)] bg-[rgba(255,138,61,0.08)] text-accent-warm-soft",
  },
  {
    title: "Developers & Power Users",
    description:
      "A platform built with flexibility, utility, and future depth in mind",
    icon: Braces,
    accent:
      "border-[rgba(90,178,255,0.22)] bg-[rgba(255,255,255,0.05)] text-[rgb(182,224,255)]",
  },
];

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": absoluteUrl("/about#page"),
        url: absoluteUrl("/about"),
        name: `About ${seo.siteName}`,
        description:
          "ManaCamp is a modern platform built for gaming communities first, created to bring presence back to online community.",
        isPartOf: {
          "@id": absoluteUrl("/#website"),
        },
      },
      {
        "@type": "CreativeWork",
        "@id": absoluteUrl("/about#vision"),
        name: "Bringing presence back to online community",
        creator: {
          "@type": "Person",
          name: "Chad Wessendorf",
        },
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <div className="min-h-screen">
        <section className="relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-18">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,32,0.72),rgba(6,8,22,0.28)_58%,transparent)]" />
            <div className="absolute left-1/2 top-14 h-[22rem] w-[22rem] -translate-x-1/2 rounded-full ambient-blue blur-3xl opacity-80 sm:h-[30rem] sm:w-[30rem]" />
            <div className="absolute right-[10%] top-28 h-48 w-48 rounded-full ambient-ember blur-3xl opacity-70" />
            <div className="absolute left-[8%] bottom-0 h-52 w-52 rounded-full bg-accent-support/10 blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <ScrollReveal>
              <div className="eyebrow-pill text-sm mb-6 mx-auto">
                About ManaCamp
              </div>
              <h1 className="mx-auto max-w-[13ch] text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white text-balance">
                Bringing presence back to{" "}
                <span className="gradient-text">online community.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-[rgb(183,197,229)] leading-relaxed text-balance max-w-4xl mx-auto">
                ManaCamp is a modern platform built for gaming communities first,
                inspired by the era when Blizzard&apos;s Battle.net 1.0
                connected Diablo II, StarCraft, and Warcraft in one shared
                social space, and being online felt like being part of
                something bigger than chat.
              </p>
              <p className="mt-5 text-sm sm:text-base text-[rgb(141,158,194)] leading-relaxed text-balance max-w-3xl mx-auto">
                Created by Chad Wessendorf, solo developer and founder of
                DezolveLabs, ManaCamp is built to make online spaces feel more
                alive, more social, and more meaningful while giving
                developers, creators, moderators, and power users the depth to
                build stronger communities.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-3.5">
                <Link
                  href="/download"
                  className="btn-primary rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
                >
                  Explore ManaCamp
                </Link>
                <Link
                  href="#why-manacamp"
                  className="btn-secondary rounded-full px-7 py-3.5 text-base font-semibold border-[rgba(122,176,255,0.14)] bg-[rgba(8,13,27,0.76)] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Why ManaCamp
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-divider pb-8 sm:pb-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="panel-strong relative overflow-hidden rounded-[1.75rem] border-[rgba(116,164,255,0.22)] px-6 py-8 sm:px-10 sm:py-10">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(90,178,255,0.12),transparent_46%,rgba(255,138,61,0.08))]" />
                <div className="absolute right-0 top-0 h-40 w-40 ambient-blue blur-3xl opacity-70" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.28em] text-text-secondary">
                    Mission
                  </p>
                  <h2 className="mt-4 text-2xl sm:text-4xl font-semibold text-white text-balance">
                    ManaCamp exists to bring to life what was lost.
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm sm:text-base text-[rgb(184,199,232)] leading-relaxed">
                    Modern platforms gained speed and convenience, but often
                    lost the sense of presence that made online communities feel
                    real. ManaCamp is built to restore that feeling, combining
                    identity, chat, voice, and community into a space that
                    feels alive instead of disposable.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section
          id="why-manacamp"
          className="section-divider py-10 sm:py-14 scroll-mt-24"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <ScrollReveal className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.28em] text-text-secondary">
                Why ManaCamp
              </p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-white text-balance">
                A modern social space shaped by what made being online feel
                like somewhere.
              </h2>
            </ScrollReveal>

            <div className="mt-8 grid gap-4 sm:gap-5">
              {[
                "ManaCamp draws inspiration from an earlier era of online community, when Blizzard's original Battle.net 1.0 brought Diablo II, StarCraft, and Warcraft into one connected social space. It was more than messaging. It created presence.",
                "ManaCamp brings that idea forward in a modern form: a place where friends, groups, guilds, and communities can gather in spaces that feel immersive, expressive, and connected.",
                "This is not just about chat. It is about belonging, momentum, identity, and building digital spaces people genuinely want to return to.",
              ].map((paragraph, index) => (
                <ScrollReveal key={paragraph} delay={index * 0.08}>
                  <div className="panel rounded-2xl border-[rgba(122,176,255,0.12)] px-6 py-6 sm:px-7 sm:py-6">
                    <p className="text-sm sm:text-base leading-relaxed text-[rgb(184,199,232)]">
                      {paragraph}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-divider py-10 sm:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <ScrollReveal className="mb-8 sm:mb-10">
              <p className="text-xs uppercase tracking-[0.28em] text-text-secondary">
                Built For
              </p>
              <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-white text-balance">
                Gaming-first, with the depth to support the people who shape a
                community.
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {builtFor.map((item, index) => {
                const Icon = item.icon;

                return (
                  <ScrollReveal
                    key={item.title}
                    delay={index * 0.08}
                    direction="up"
                  >
                    <div className="panel group h-full rounded-2xl border-[rgba(122,176,255,0.12)] p-6 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong">
                      <div
                        className={`icon-tile mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${item.accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-sm leading-relaxed text-[rgb(184,199,232)]">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-divider py-10 sm:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="panel rounded-[1.75rem] border-[rgba(122,176,255,0.12)] px-6 py-7 sm:px-8 sm:py-8">
                <p className="text-xs uppercase tracking-[0.28em] text-text-secondary">
                  Built Independently
                </p>
                <div className="mt-4 max-w-4xl space-y-4 text-sm sm:text-base leading-relaxed text-[rgb(184,199,232)]">
                  <p>
                    ManaCamp is created by Chad Wessendorf, solo developer and
                    founder of DezolveLabs.
                  </p>
                  <p>
                    With a technology background dating back to 2009, Chad has
                    worked across systems, digital experience platforms,
                    business systems analysis, and technology leadership.
                    ManaCamp brings those years of technical experience together
                    with a lifelong passion for gaming, product design, and
                    online community.
                  </p>
                  <p>
                    As an independent product, ManaCamp is being built with a
                    hands-on approach: thoughtful design, strong technical
                    foundations, and a clear belief that gaming communities
                    deserve better digital spaces.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-divider pb-20 sm:pb-24 pt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="text-center">
                <p className="text-2xl sm:text-4xl font-semibold text-white text-balance">
                  A better home for the people who play, connect, and build
                  together.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
