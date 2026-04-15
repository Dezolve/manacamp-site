import type { MetadataRoute } from "next";
import { legalLastUpdated } from "@/app/legalContent";
import { absoluteUrl } from "@/app/seo";

const legalDate = new Date(legalLastUpdated);

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];
}
