import type { MetadataRoute } from "next";

// Backs up layout.tsx's `applicationName` metadata ("Add to Home Screen"
// display name) with an actual web manifest, so mobile browsers have real
// icon/theme-color data to use instead of falling back to a generic one.
// Next.js auto-serves this at /manifest.webmanifest and links it in <head>
// via this file-convention route, no changes needed elsewhere.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ju-Jutsu Quickborn",
    short_name: "Ju-Jutsu Quickborn",
    description:
      "Ju-Jutsu Quickborn — Selbstverteidigung und Kampfsport für alle Altersgruppen.",
    // Matches the de-DE language already declared on <html> in layout.tsx —
    // spelled out here too since the manifest is fetched independently of
    // the page and has no other way to know the language.
    lang: "de",
    dir: "ltr",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    // Lets app stores/PWA installers categorize the site correctly.
    categories: ["sports", "health"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
