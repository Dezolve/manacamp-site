import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ManaCamp – Your Ultimate Card Game Companion",
  description:
    "ManaCamp is the ultimate companion app for card game enthusiasts. Track your collection, build decks, and dominate the battlefield. Coming soon on iOS and Windows.",
  keywords: ["ManaCamp", "card game", "deck builder", "collection tracker", "iOS app", "Windows app"],
  openGraph: {
    title: "ManaCamp – Your Ultimate Card Game Companion",
    description:
      "Track your collection, build decks, and dominate the battlefield.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ManaCamp – Your Ultimate Card Game Companion",
    description:
      "Track your collection, build decks, and dominate the battlefield.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
