import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "ManaCamp – Channels, chat, voice, and sessions",
  description:
    "ManaCamp is a modern community platform for channels, DMs, presence, voice, video, screen sharing, bots, and sessions. Windows available now. iOS coming soon.",
  keywords: ["ManaCamp", "community platform", "channels", "voice chat", "video chat", "Windows app", "iOS app"],
  openGraph: {
    title: "ManaCamp – Channels, chat, voice, and sessions",
    description:
      "A modern home for channels, DMs, presence, voice, video, screen sharing, bots, and sessions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ManaCamp – Channels, chat, voice, and sessions",
    description:
      "A modern home for channels, DMs, presence, voice, video, screen sharing, bots, and sessions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="relative flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
