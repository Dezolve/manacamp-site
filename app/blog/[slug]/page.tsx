import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import {
  formatBlogDate,
  getAdjacentPosts,
  getAllPosts,
  getPostBySlug,
} from "@/app/blog/_lib/posts";
import { absoluteUrl, seo } from "@/app/seo";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: `Post Not Found | ${seo.siteName}`,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = absoluteUrl(`/blog/${post.slug}`);

  return {
    title: `${post.title} | ${seo.siteName}`,
    description: post.description,
    alternates: {
      canonical,
    },
    keywords: [...seo.defaultKeywords, ...post.tags, "blog"],
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url: canonical,
      title: `${post.title} | ${seo.siteName}`,
      description: post.description,
      siteName: seo.siteName,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: absoluteUrl(seo.ogImagePath),
          width: 1200,
          height: 630,
          alt: `${post.title} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | ${seo.siteName}`,
      description: post.description,
      site: seo.xHandle,
      creator: seo.xHandle,
      images: [absoluteUrl(seo.ogImagePath)],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { previousPost, nextPost } = getAdjacentPosts(post.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: absoluteUrl(seo.ogImagePath),
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: seo.siteName,
      url: seo.siteUrl,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,16,32,0.58),transparent)]" />
          <div className="absolute left-1/2 top-16 -translate-x-1/2 w-[520px] h-[260px] ambient-blue rounded-full blur-3xl opacity-80" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(90,178,255,0.18)] bg-[rgba(90,178,255,0.08)] px-3 py-1 text-[11px] font-medium text-[rgb(182,224,255)]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-5 text-balance">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl mb-6">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-muted">
              <span>
                By <span className="text-white">{post.author}</span>
              </span>
              <span>{formatBlogDate(post.date)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock3 className="w-3.5 h-3.5" />
                {post.readingMinutes} min read
              </span>
              {post.updated ? <span>Updated {formatBlogDate(post.updated)}</span> : null}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-divider pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <article
              className="blog-prose panel rounded-[2rem] p-6 sm:p-8 lg:p-10"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-divider pb-20 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {previousPost ? (
            <Link
              href={`/blog/${previousPost.slug}`}
              className="panel rounded-3xl p-5 sm:p-6 hover:border-border-strong transition-colors"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-text-muted mb-3">
                Previous
              </p>
              <h2 className="text-xl font-semibold text-white mb-2">
                {previousPost.title}
              </h2>
              <p className="text-sm text-text-secondary">{previousPost.description}</p>
            </Link>
          ) : (
            <div />
          )}

          {nextPost ? (
            <Link
              href={`/blog/${nextPost.slug}`}
              className="panel rounded-3xl p-5 sm:p-6 hover:border-border-strong transition-colors md:text-right"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-text-muted mb-3">
                Next
              </p>
              <div className="inline-flex items-center gap-2 text-white text-xl font-semibold mb-2">
                {nextPost.title}
                <ArrowRight className="w-4 h-4" />
              </div>
              <p className="text-sm text-text-secondary">{nextPost.description}</p>
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  );
}
