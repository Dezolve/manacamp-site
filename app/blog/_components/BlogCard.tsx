import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import type { BlogPost } from "@/app/blog/_lib/posts";
import { formatBlogDate } from "@/app/blog/_lib/posts";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`panel group h-full rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong ${
        featured ? "panel-strong border-[rgba(90,178,255,0.18)]" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-2 text-xs text-text-muted mb-4">
        <span className="eyebrow-pill !py-2 text-[11px] uppercase tracking-[0.24em]">
          Blog
        </span>
        <span>{formatBlogDate(post.date)}</span>
        <span>•</span>
        <span className="inline-flex items-center gap-1">
          <Clock3 className="w-3 h-3" />
          {post.readingMinutes} min read
        </span>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[rgba(90,178,255,0.18)] bg-[rgba(90,178,255,0.08)] px-3 py-1 text-[11px] font-medium text-[rgb(182,224,255)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-3 text-balance">
        {post.title}
      </h2>
      <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4">
        {post.description}
      </p>
      <p className="text-sm text-text-muted leading-relaxed mb-6">{post.excerpt}...</p>

      <div className="mt-auto flex items-center justify-between gap-3">
        <div className="text-sm text-text-secondary">
          By <span className="text-white">{post.author}</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[rgb(182,224,255)] transition-colors group-hover:text-white"
        >
          Read article
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
