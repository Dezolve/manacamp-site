import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ManaCamp – Channels, chat, voice, and sessions",
  description:
    "ManaCamp is a modern community platform for channels, DMs, presence, voice, video, screen sharing, bots, and sessions. Available now on Windows and iOS.",
  keywords: ["ManaCamp", "community platform", "channels", "voice chat", "video chat", "Windows app", "iOS app"],
  openGraph: {
    title: "ManaCamp – Channels, chat, voice, and sessions",
    description:
      "A modern home for channels, DMs, presence, voice, video, screen sharing, bots, and sessions, available on Windows and iOS.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ManaCamp – Channels, chat, voice, and sessions",
    description:
      "A modern home for channels, DMs, presence, voice, video, screen sharing, bots, and sessions, available on Windows and iOS.",
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
      </body>
    </html>
  );
}
