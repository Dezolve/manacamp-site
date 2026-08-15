"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CircleHelp,
  Compass,
  Download,
  Headphones,
  Mail,
  MessagesSquare,
  Search,
  ShieldCheck,
  Sparkles,
  UserRound,
  Wrench,
  X,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  getArticlesForCategory,
  getSupportCategory,
  supportArticles,
  supportCategories,
  type SupportCategory,
} from "@/app/support/support-content";

const iconMap: Record<SupportCategory["icon"], LucideIcon> = {
  compass: Compass,
  user: UserRound,
  messages: MessagesSquare,
  headphones: Headphones,
  shield: ShieldCheck,
  wrench: Wrench,
};

export default function SupportClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const resultsRef = useRef<HTMLElement>(null);
  const normalizedQuery = query.trim().toLowerCase();

  const visibleArticles = useMemo(() => {
    if (normalizedQuery) {
      return supportArticles.filter((article) => {
        const category = getSupportCategory(article.category);
        const searchable = [
          article.title,
          article.description,
          category?.title ?? "",
          ...article.keywords,
        ]
          .join(" ")
          .toLowerCase();

        return searchable.includes(normalizedQuery);
      });
    }

    if (activeCategory) {
      return getArticlesForCategory(activeCategory);
    }

    return [];
  }, [activeCategory, normalizedQuery]);

  const popularArticles = supportArticles.filter((article) => article.popular).slice(0, 8);
  const showingResults = Boolean(normalizedQuery || activeCategory);
  const activeCategoryDetails = activeCategory ? getSupportCategory(activeCategory) : null;

  function chooseCategory(slug: string) {
    setQuery("");
    setActiveCategory(slug);
    window.requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function clearResults() {
    setQuery("");
    setActiveCategory(null);
  }

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,32,0.72),transparent)]" />
          <div className="ambient-blue absolute left-1/2 top-[52%] h-[360px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
          <div className="ambient-ember absolute right-[8%] top-[18%] h-[220px] w-[220px] rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="eyebrow-pill mx-auto mb-6 text-sm">
              <CircleHelp className="h-3.5 w-3.5" />
              ManaCamp Help Center
            </div>
            <h1 className="mb-4 text-balance text-4xl font-bold text-white sm:text-6xl">
              What can we help you <span className="gradient-text">figure out?</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-balance text-base text-text-secondary sm:text-lg">
              Search for an answer or browse guides for accounts, conversations, live sessions,
              safety, and troubleshooting.
            </p>

            <div className="relative mx-auto max-w-2xl text-left">
              <Search
                className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted"
                aria-hidden="true"
              />
              <label htmlFor="help-search" className="sr-only">
                Search ManaCamp help articles
              </label>
              <input
                id="help-search"
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setActiveCategory(null);
                }}
                placeholder="Search for an answer..."
                autoComplete="off"
                className="help-search w-full rounded-2xl py-4 pl-14 pr-12 text-base text-white shadow-[0_24px_70px_rgba(1,6,18,0.48)] sm:py-5 sm:text-lg"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : null}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="categories" ref={resultsRef} className="section-divider scroll-mt-24 pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16">
          {showingResults ? (
            <div>
              <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(182,224,255)]">
                    {normalizedQuery ? "Search results" : "Category"}
                  </p>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    {normalizedQuery
                      ? `${visibleArticles.length} ${visibleArticles.length === 1 ? "answer" : "answers"} for “${query.trim()}”`
                      : activeCategoryDetails?.title}
                  </h2>
                  {activeCategoryDetails ? (
                    <p className="mt-2 text-sm text-text-secondary">
                      {activeCategoryDetails.description}
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={clearResults}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-border-subtle bg-white/[0.025] px-4 py-2 text-sm text-text-secondary transition-colors hover:border-border-strong hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                  Clear results
                </button>
              </div>

              {visibleArticles.length ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {visibleArticles.map((article, index) => {
                    const category = getSupportCategory(article.category);

                    return (
                      <ScrollReveal key={article.slug} delay={Math.min(index * 0.04, 0.2)}>
                        <Link
                          href={`/support/${article.slug}`}
                          className="panel group flex h-full min-h-40 flex-col rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong sm:p-6"
                        >
                          <span className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgb(182,224,255)]">
                            {category?.title}
                          </span>
                          <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-[rgb(182,224,255)]">
                            {article.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-text-secondary">
                            {article.description}
                          </p>
                          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-white">
                            Read guide
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Link>
                      </ScrollReveal>
                    );
                  })}
                </div>
              ) : (
                <div className="panel rounded-3xl px-6 py-12 text-center sm:px-10">
                  <CircleHelp className="mx-auto mb-4 h-10 w-10 text-accent-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-white">No guide matches that search yet.</h3>
                  <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-text-secondary">
                    Try a shorter phrase like “audio,” “password,” or “messages.” If you are still stuck,
                    send the support team an email.
                  </p>
                  <a
                    href={`mailto:support@manacamp.app?subject=${encodeURIComponent("ManaCamp help request")}`}
                    className="btn-primary inline-flex min-h-0 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
                  >
                    <Mail className="h-4 w-4" />
                    Email support
                  </a>
                </div>
              )}
            </div>
          ) : (
            <>
              <ScrollReveal>
                <div className="mb-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(182,224,255)]">
                      Browse help
                    </p>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">Choose a topic</h2>
                  </div>
                  <span className="hidden text-sm text-text-muted sm:block">
                    {supportArticles.length} guides and growing
                  </span>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {supportCategories.map((category, index) => {
                  const Icon = iconMap[category.icon];
                  const articleCount = getArticlesForCategory(category.slug).length;

                  return (
                    <ScrollReveal key={category.slug} delay={index * 0.06}>
                      <button
                        type="button"
                        onClick={() => chooseCategory(category.slug)}
                        className="panel group h-full w-full rounded-3xl p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_24px_55px_rgba(3,9,24,0.55)]"
                      >
                        <span className="icon-tile mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-accent-primary transition-transform group-hover:scale-105">
                          <Icon className="h-6 w-6" />
                        </span>
                        <h3 className="mb-2 text-lg font-semibold text-white">{category.title}</h3>
                        <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                          {category.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-[rgb(182,224,255)]">
                          {articleCount} {articleCount === 1 ? "guide" : "guides"}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </button>
                    </ScrollReveal>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {!showingResults ? (
        <section className="section-divider pb-16 sm:pb-20">
          <div className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 sm:pt-16">
            <ScrollReveal>
              <div className="mb-8 flex items-center gap-3">
                <span className="icon-tile flex h-9 w-9 items-center justify-center rounded-xl">
                  <Sparkles className="h-4 w-4 text-accent-warm-soft" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-muted">
                    Start here
                  </p>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">Popular guides</h2>
                </div>
              </div>
            </ScrollReveal>

            <div className="panel overflow-hidden rounded-3xl">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {popularArticles.map((article) => {
                  const category = getSupportCategory(article.category);

                  return (
                    <Link
                      key={article.slug}
                      href={`/support/${article.slug}`}
                      className="group flex items-center justify-between gap-4 border-b border-border-subtle p-5 transition-colors hover:bg-white/[0.025] md:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-child(odd)]:border-r"
                    >
                      <div>
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                          {category?.title}
                        </p>
                        <h3 className="text-sm font-medium text-white transition-colors group-hover:text-[rgb(182,224,255)] sm:text-base">
                          {article.title}
                        </h3>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-text-muted transition-all group-hover:translate-x-1 group-hover:text-white" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-divider pb-20 sm:pb-24">
        <div className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 sm:pt-16">
          <ScrollReveal>
            <div className="panel-strong relative overflow-hidden rounded-[2rem] p-6 sm:p-9">
              <div className="ambient-blue absolute -right-20 -top-28 h-72 w-72 rounded-full blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[rgb(182,224,255)]">
                    Still need a hand?
                  </p>
                  <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">
                    Tell us where you got stuck.
                  </h2>
                  <p className="max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
                    Include your device, what you expected, and what happened instead. Please never send
                    your password or verification codes.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href={`mailto:support@manacamp.app?subject=${encodeURIComponent("ManaCamp support request")}`}
                    className="btn-primary inline-flex min-h-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                  >
                    <Mail className="h-4 w-4" />
                    Email support
                  </a>
                  <Link
                    href="/download"
                    className="btn-secondary inline-flex min-h-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                  >
                    <Download className="h-4 w-4" />
                    Get the app
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
