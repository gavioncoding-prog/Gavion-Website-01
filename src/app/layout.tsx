import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { JsonLd } from "@/components/seo/json-ld";
import { RootProviders } from "@/components/theme/root-providers";
import { getSiteUrl, toAbsoluteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();
const defaultOgImage = toAbsoluteUrl("/opengraph-image");

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const verification: import("next").Metadata["verification"] =
  googleVerification ? { google: googleVerification } : undefined;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Gavion Group | Engineering, Construction & Technology",
    template: "%s | Gavion Group",
  },
  description:
    "Gavion Group delivers architecture, engineering, construction, and technology for healthcare, infrastructure, hospitality, education, and rural programmes — Delhi NCR and North-East India.",
  keywords: [
    "Gavion Group",
    "Gavion Group Private Limited",
    "engineering company India",
    "construction company",
    "architecture and engineering",
    "healthcare infrastructure India",
    "hospital design build",
    "North-East India infrastructure",
    "Assam construction",
    "Manipur development",
    "Aerocity New Delhi",
    "digital twins construction",
    "industrial design India",
  ],
  authors: [{ name: "Gavion Group", url: siteUrl.href }],
  creator: "Gavion Group",
  publisher: "Gavion Group Private Limited",
  alternates: {
    types: {
      "application/rss+xml": new URL("/blog/feed.xml", siteUrl).href,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Gavion Group",
    title: "Gavion Group | Engineering, Construction & Technology",
    description:
      "Engineering, construction, and technology for healthcare, infrastructure, and growth across India — especially the North-East.",
    url: siteUrl.href,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: "Gavion Group — Engineering, Construction & Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gavion Group | Engineering, Construction & Technology",
    description: "Engineering the future. Building with precision.",
    images: [defaultOgImage],
  },
  robots: { index: true, follow: true },
  category: "business",
  applicationName: "Gavion Group",
  ...(verification ? { verification } : {}),
  appleWebApp: {
    capable: true,
    title: "Gavion Group",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <RootProviders>
          <JsonLd />
          {children}
          <Analytics />
          <SpeedInsights />
        </RootProviders>
      </body>
    </html>
  );
}
