import type { MetadataRoute } from "next";
import { getAllPosts } from "@/app/blog/_lib/posts";
import { legalLastUpdated } from "@/app/legalContent";
import { absoluteUrl } from "@/app/seo";

const legalDate = new Date(legalLastUpdated);

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPosts = getAllPosts();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/download"),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: blogPosts[0] ? new Date(blogPosts[0].updated ?? blogPosts[0].date) : new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/support"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/terms"),
      lastModified: legalDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: absoluteUrl("/privacy"),
      lastModified: legalDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: absoluteUrl("/guidelines"),
      lastModified: legalDate,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updated ?? post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
