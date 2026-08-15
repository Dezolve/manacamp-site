import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Compass,
  Headphones,
  Info,
  Mail,
  MessagesSquare,
  ShieldCheck,
  UserRound,
  Wrench,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  getArticlesForCategory,
  getRelatedArticles,
  getSupportArticle,
  getSupportCategory,
  supportArticles,
  type SupportCategory,
} from "@/app/support/support-content";
import { absoluteUrl, createMetadata, seo } from "@/app/seo";

type SupportArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const iconMap: Record<SupportCategory["icon"], LucideIcon> = {
  compass: Compass,
  user: UserRound,
  messages: MessagesSquare,
  headphones: Headphones,
  shield: ShieldCheck,
  wrench: Wrench,
};

export function generateStaticParams() {
  return supportArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: SupportArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getSupportArticle(slug);

  if (!article) {
    return {
      title: `Guide Not Found | ${seo.siteName}`,
      robots: { index: false, follow: false },
    };
  }

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/support/${article.slug}`,
    keywords: [...seo.defaultKeywords, ...article.keywords, "ManaCamp help", "support guide"],
    type: "article",
  });
}

export default async function SupportArticlePage({ params }: SupportArticlePageProps) {
  const { slug } = await params;
  const article = getSupportArticle(slug);

  if (!article) {
    notFound();
  }

  const category = getSupportCategory(article.category);
  if (!category) {
    notFound();
  }

  const CategoryIcon = iconMap[category.icon];
  const categoryArticles = getArticlesForCategory(category.slug);
  const relatedArticles = getRelatedArticles(article);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${article.updated}T00:00:00Z`));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    dateModified: article.updated,
    author: {
      "@type": "Organization",
      name: seo.siteName,
    },
    publisher: {
      "@type": "Organization",
      name: seo.siteName,
      url: seo.siteUrl,
    },
    mainEntityOfPage: absoluteUrl(`/support/${article.slug}`),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Help Center",
        item: absoluteUrl("/support"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.title,
        item: `${absoluteUrl("/support")}#categories`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: absoluteUrl(`/support/${article.slug}`),
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="relative overflow-hidden pb-10 pt-28 sm:pb-12 sm:pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,32,0.68),transparent)]" />
          <div className="ambient-blue absolute left-1/2 top-8 h-[280px] w-[620px] -translate-x-1/2 rounded-full blur-3xl opacity-80" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm">
            <Link href="/support" className="text-text-secondary transition-colors hover:text-white">
              Help Center
            </Link>
            <span className="text-text-muted">/</span>
            <span className="text-text-secondary">{category.title}</span>
            <span className="text-text-muted">/</span>
            <span className="max-w-full truncate text-white">{article.title}</span>
          </nav>

          <ScrollReveal>
            <div className="max-w-4xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(90,178,255,0.18)] bg-[rgba(90,178,255,0.08)] px-3 py-1.5 text-xs font-medium text-[rgb(182,224,255)]">
                <CategoryIcon className="h-3.5 w-3.5" />
                {category.title}
              </div>
              <h1 className="mb-5 text-balance text-4xl font-bold text-white sm:text-6xl">
                {article.title}
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-text-secondary sm:text-lg">
                {article.description}
              </p>
              <p className="mt-5 text-xs text-text-muted">Updated {formattedDate}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-divider pb-16 sm:pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:pt-12">
          <ScrollReveal>
            <article className="help-article panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
              {article.sections.map((section, sectionIndex) => (
                <section key={`${article.slug}-${sectionIndex}`}>
                  {section.heading ? <h2>{section.heading}</h2> : null}

                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

                  {section.steps ? (
                    <ol className="help-steps">
                      {section.steps.map((step, stepIndex) => (
                        <li key={step}>
                          <span aria-hidden="true">{stepIndex + 1}</span>
                          <p>{step}</p>
                        </li>
                      ))}
                    </ol>
                  ) : null}

                  {section.bullets ? (
                    <ul className="help-bullets">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>
                          <Check className="h-4 w-4" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {section.note ? (
                    <aside className="help-note">
                      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                      <p>{section.note}</p>
                    </aside>
                  ) : null}
                </section>
              ))}

              <div className="mt-10 border-t border-border-subtle pt-7">
                <p className="mb-3 text-sm font-medium text-white">Did this guide leave something out?</p>
                <a
                  href={`mailto:support@manacamp.app?subject=${encodeURIComponent(`Help with: ${article.title}`)}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(182,224,255)] transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  Tell support what happened
                </a>
              </div>
            </article>
          </ScrollReveal>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="panel rounded-3xl p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="icon-tile flex h-9 w-9 items-center justify-center rounded-xl text-accent-primary">
                  <CategoryIcon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                    In this topic
                  </p>
                  <h2 className="text-sm font-semibold text-white">{category.title}</h2>
                </div>
              </div>
              <ul className="space-y-1">
                {categoryArticles.map((candidate) => (
                  <li key={candidate.slug}>
                    {candidate.slug === article.slug ? (
                      <span className="block rounded-xl bg-[rgba(90,178,255,0.09)] px-3 py-2.5 text-sm font-medium text-[rgb(182,224,255)]">
                        {candidate.title}
                      </span>
                    ) : (
                      <Link
                        href={`/support/${candidate.slug}`}
                        className="block rounded-xl px-3 py-2.5 text-sm leading-snug text-text-secondary transition-colors hover:bg-white/[0.03] hover:text-white"
                      >
                        {candidate.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href="/support"
                className="mt-5 inline-flex items-center gap-2 border-t border-border-subtle pt-5 text-sm font-medium text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                All help topics
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {relatedArticles.length ? (
        <section className="section-divider pb-20 sm:pb-24">
          <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16">
            <ScrollReveal>
              <h2 className="mb-7 text-2xl font-bold text-white sm:text-3xl">Related guides</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {relatedArticles.map((related, index) => (
                <ScrollReveal key={related.slug} delay={index * 0.08}>
                  <Link
                    href={`/support/${related.slug}`}
                    className="panel group flex h-full min-h-44 flex-col rounded-3xl p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-[rgb(182,224,255)]">
                      {related.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">{related.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-white">
                      Read guide
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
