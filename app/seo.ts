import type { Metadata } from "next";

const siteUrl = "https://manacamp.app";
const siteName = "ManaCamp";
const defaultTitle = "Channels, chat, voice, video, and sessions";
const defaultDescription =
  "ManaCamp is a modern community platform for channels, DMs, presence, voice, video, screen sharing, bots, and sessions on Windows and iOS.";
const defaultKeywords = [
  "ManaCamp",
  "community platform",
  "chat app",
  "channels",
  "direct messages",
  "voice chat",
  "video chat",
  "screen sharing",
  "community app",
  "Windows app",
  "iOS app",
];
const ogImagePath = "/opengraph-image";
const logoPath = "/icon.png";

export const seo = {
  siteName,
  defaultTitle,
  defaultDescription,
  defaultKeywords,
  siteUrl,
  ogImagePath,
  logoPath,
  xHandle: "@manacamp",
  iosAppId: "6761014896",
  organization: {
    name: siteName,
    email: "hello@manacamp.app",
    supportEmail: "support@manacamp.app",
    legalEmail: "legal@manacamp.app",
    privacyEmail: "privacy@manacamp.app",
    sameAs: [
      "https://twitter.com/manacamp",
      "https://github.com/Dezolve",
      "https://apps.apple.com/us/app/manacamp/id6761014896",
    ],
  },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
  keywords = defaultKeywords,
  type = "website",
  noIndex = false,
}: MetadataInput = {}): Metadata {
  const resolvedTitle = title ? `${title} | ${siteName}` : `${siteName} | ${defaultTitle}`;
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        }
      : {
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
      type,
      url: canonical,
      siteName,
      title: resolvedTitle,
      description,
      locale: "en_US",
      images: [
        {
          url: absoluteUrl(ogImagePath),
          width: 1200,
          height: 630,
          alt: `${siteName} social preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: seo.xHandle,
      creator: seo.xHandle,
      title: resolvedTitle,
      description,
      images: [absoluteUrl(ogImagePath)],
    },
  };
}
