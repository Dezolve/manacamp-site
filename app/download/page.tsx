import type { Metadata } from "next";
import DownloadClient from "./DownloadClient";

export const metadata: Metadata = {
  title: "Download ManaCamp for Windows",
  description:
    "Get the latest ManaCamp Windows installer from the public desktop update feed.",
};

export default function DownloadPage() {
  return <DownloadClient />;
}