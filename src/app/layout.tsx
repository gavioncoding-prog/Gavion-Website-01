import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { JsonLd } from "@/components/seo/json-ld";
import { RootProviders } from "@/components/theme/root-providers";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const siteUrl = getSiteUrl();

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
    "Gavion Group delivers architecture, engineering, construction, and technology for healthcare, infrastructure, hospitality, and rural programs — with precision from Delhi to North-East India.",
  keywords: [
    "Gavion Group",
    "engineering",
    "construction",
    "technology",
    "North-East India",
    "healthcare infrastructure",
    "Aerocity",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Gavion Group",
    title: "Gavion Group | Engineering, Construction & Technology",
    description:
      "Premium delivery partner for engineering, construction, and digital infrastructure across India.",
    url: siteUrl.href,
  },
  twitter: {
    card: "summary_large_image",
    title: "Gavion Group | Engineering, Construction & Technology",
    description:
      "Engineering the future. Building with precision.",
  },
  robots: { index: true, follow: true },
  category: "business",
  applicationName: "Gavion Group",
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
