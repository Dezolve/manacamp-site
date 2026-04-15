import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, NotebookPen } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/app/blog/_components/BlogCard";
import { getAllPosts, getFeaturedPosts } from "@/app/blog/_lib/posts";
import { absoluteUrl, createMetadata, seo } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Read the ManaCamp blog for product updates, community strategy, release notes, and guides for running lively real-time spaces.",
  path: "/blog",
  keywords: [...seo.defaultKeywords, "blog", "product updates", "community guides", "release notes"],
});

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featuredPosts = getFeaturedPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${seo.siteName} Blog`,
    url: absoluteUrl("/blog"),
    description:
      "Product updates, release notes, and community-building guides from ManaCamp.",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      author: {
        "@type": "Person",
        name: post.author,
      },
      url: absoluteUrl(`/blog/${post.slug}`),
    })),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,32,0.58),transparent)]" />
          <div className="absolute left-[10%] top-20 w-[24rem] h-[24rem] ambient-blue rounded-full blur-3xl opacity-80" />
          <div className="absolute right-[10%] top-24 w-[18rem] h-[18rem] ambient-ember rounded-full blur-3xl opacity-70" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="eyebrow-pill text-sm mb-6 mx-auto sm:mx-0">
              <NotebookPen className="w-3.5 h-3.5" />
              ManaCamp Blog
            </div>
            <div className="max-w-4xl">
              <h1 className="text-4xl sm:text-6xl font-bold text-white mb-5 text-balance">
                Guides, launches, and ideas for running a more alive{" "}
                <span className="gradient-text">community.</span>
              </h1>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
                This is the editorial home for ManaCamp. Use it for product
                updates, feature launches, release notes, and practical guidance
                for channels, sessions, moderation, and community design.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {featuredPosts.length > 0 ? (
        <section className="section-divider pb-14 sm:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <ScrollReveal>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[rgb(182,224,255)] mb-2">
                    Featured Posts
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                    Best starting points
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <ScrollReveal key={post.slug} delay={index * 0.08}>
                  <BlogCard post={post} featured />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-divider pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-text-muted mb-2">
                  All Articles
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  Latest writing from ManaCamp
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {posts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.05}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="panel rounded-3xl p-6 sm:p-8 mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  More stories are on the way
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
                  We&apos;ll keep publishing product thinking, launch notes, and
                  practical ideas for running better real-time communities.
                </p>
              </div>
              <Link
                href="/support"
                className="btn-secondary rounded-full px-5 py-3 text-sm font-medium inline-flex items-center justify-center gap-2"
              >
                Contact the team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
