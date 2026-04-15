import type { Metadata } from "next";
import DownloadClient from "./DownloadClient";
import { createMetadata, seo } from "@/app/seo";

export const metadata: Metadata = createMetadata({
  title: "Download ManaCamp for Windows",
  description:
    "Download the latest ManaCamp Windows installer from the public desktop update feed and get started with channels, chat, voice, video, and sessions.",
  path: "/download",
  keywords: [
    ...seo.defaultKeywords,
    "download ManaCamp",
    "Windows installer",
    "desktop download",
  ],
});

export default function DownloadPage() {
  return <DownloadClient />;
}
