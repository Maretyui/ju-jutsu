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

export const metadata: Metadata = {
  title: "Ju-Jutsu Quickborn",
  description:
    "Ju-Jutsu Quickborn — Selbstverteidigung und Kampfsport für alle Altersgruppen.",
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
  openGraph: {
    title: "Ju-Jutsu Quickborn",
    description:
      "Ju-Jutsu Quickborn — Selbstverteidigung und Kampfsport für alle Altersgruppen.",
    siteName: "Ju-Jutsu Quickborn",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary",
    title: "Ju-Jutsu Quickborn",
    description:
      "Ju-Jutsu Quickborn — Selbstverteidigung und Kampfsport für alle Altersgruppen.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
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
