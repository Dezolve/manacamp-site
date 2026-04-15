import type { MetadataRoute } from "next";
import { absoluteUrl, seo } from "@/app/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: seo.siteUrl,
  };
}
