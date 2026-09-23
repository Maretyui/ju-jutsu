# Ju-Jutsu Quickborn

Website for a Ju-Jutsu martial arts club in Quickborn — built with [Next.js](https://nextjs.org).

**Status:** placeholder landing page — training times, location and contact details are still pending (see on-page copy).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS

## Content

The placeholder homepage copy lives in `app/page.tsx`; page title/description/keywords/OG/Twitter metadata lives in `app/layout.tsx`. Update both once training times, location and contact details are confirmed. `app/page.tsx` also renders a small "Design & Umsetzung" builder-credit footer linking to maretyui.com — keep it when the real page content replaces the placeholder copy.

## Project Structure

```
app/
├── layout.tsx    # <html> shell, fonts, metadata/OG/Twitter/viewport config
├── manifest.ts   # Web app manifest (name/icons/theme-color), served at /manifest.webmanifest
├── page.tsx      # Homepage content (currently the placeholder copy above)
├── globals.css   # Tailwind import, color-scheme vars, focus-visible + reduced-motion baseline
└── favicon.ico
```

`app/manifest.ts` backs up `layout.tsx`'s `applicationName` metadata with a real web manifest (Next.js auto-serves it at `/manifest.webmanifest` and links it in `<head>`) — update its `name`/`short_name`/`description` alongside the other metadata fields if the club's copy changes. Its `categories` field (`["sports", "health"]`) lets app stores/PWA installers categorize the site correctly. Its `id` field gives the manifest an explicit PWA identity independent of `start_url`, so an install isn't tied to whatever URL happens to be current and treated as a different app if that URL later changes.

`app/layout.tsx`'s `appleWebApp.title` covers iOS Safari specifically, which ignores the web manifest's `name`/`short_name` for the "Add to Home Screen" pinned title — keep it in sync with `manifest.ts`'s `short_name` if either changes.

`app/layout.tsx` also emits a small `SportsOrganization` JSON-LD block (a schema.org subtype of the generic `Organization` type, plus a `sport` field) so search engines have structured data to work with even before the real page content ships. It deliberately omits a `url` field until a confirmed live domain exists — add one alongside `metadataBase` at that point.

## Accessibility

`app/globals.css` restores a visible `:focus-visible` outline (Tailwind v4 removes the browser default) so keyboard navigation stays visible without adding a ring on mouse clicks, declares `color-scheme: light dark` (mirrored as an actual meta tag via `app/layout.tsx`'s `viewport` export) so native UI follows the page's light/dark switch, and includes a `prefers-reduced-motion: reduce` baseline that zeroes out animation/transition durations for any future animated content. It also restyles `::selection` to use the page's own foreground/background colors instead of the browser's default blue, so highlighted text stays legible and on-brand in both light and dark mode. The footer credit link uses `text-foreground/60` rather than a lighter opacity specifically to clear WCAG AA's 4.5:1 contrast minimum against both the light and dark background — re-check contrast rather than assuming a different opacity value is safe if that text is ever restyled.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts: `npm run build` (production build), `npm run start` (serve the build), `npm run lint` (ESLint).

