import type { MetadataRoute } from "next";
import { seo } from "@/app/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.siteName,
    short_name: seo.siteName,
    description: seo.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#081224",
    theme_color: "#081224",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
