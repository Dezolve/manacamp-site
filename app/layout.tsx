import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { absoluteUrl, seo } from "@/app/seo";

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: `${seo.siteName} | ${seo.defaultTitle}`,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.defaultDescription,
  applicationName: seo.siteName,
  keywords: seo.defaultKeywords,
  category: "technology",
  authors: [{ name: seo.siteName, url: seo.siteUrl }],
  creator: seo.siteName,
  publisher: seo.siteName,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  appleWebApp: {
    capable: true,
    title: seo.siteName,
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  other: {
    "apple-itunes-app": `app-id=${seo.iosAppId}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: `${seo.siteName} | ${seo.defaultTitle}`,
    description: seo.defaultDescription,
    type: "website",
    url: absoluteUrl("/"),
    siteName: seo.siteName,
    locale: "en_US",
    images: [
      {
        url: absoluteUrl(seo.ogImagePath),
        width: 1200,
        height: 630,
        alt: `${seo.siteName} social preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${seo.siteName} | ${seo.defaultTitle}`,
    description: seo.defaultDescription,
    site: seo.xHandle,
    creator: seo.xHandle,
    images: [absoluteUrl(seo.ogImagePath)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": absoluteUrl("/#organization"),
        name: seo.siteName,
        url: seo.siteUrl,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl(seo.logoPath),
        },
        email: seo.organization.email,
        sameAs: seo.organization.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: seo.siteUrl,
        name: seo.siteName,
        description: seo.defaultDescription,
        publisher: {
          "@id": absoluteUrl("/#organization"),
        },
      },
    ],
  };

  return (
    <html lang="en" className="antialiased" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="relative flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
