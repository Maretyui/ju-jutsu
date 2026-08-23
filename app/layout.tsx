import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Kept as constants so the title/description can't drift out of sync
// across the base, OpenGraph and Twitter metadata blocks below.
const SITE_TITLE = "Ju-Jutsu Quickborn";
const SITE_DESCRIPTION =
  "Ju-Jutsu Quickborn — Selbstverteidigung und Kampfsport für alle Altersgruppen.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Ju-Jutsu Quickborn",
    "Ju-Jutsu",
    "Kampfsport Quickborn",
    "Selbstverteidigung Quickborn",
    "Judo",
    "Karate",
    "Ringen",
    "Kampfkunst",
  ],
  authors: [{ name: "Maik Reinhardt" }],
  creator: "Maik Reinhardt",
  robots: { index: true, follow: true },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  // Mirrors globals.css's `color-scheme: light dark` as an actual meta tag,
  // so the browser can pick native UI colors (scrollbars, form controls)
  // before the stylesheet has even loaded.
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
