// Kept as constants so the title/description can't drift out of sync
// across app/layout.tsx's metadata blocks, not-found.tsx and manifest.ts.
// Not exported from app/layout.tsx itself — Next.js's App Router only
// permits a fixed set of named exports from a layout file, and a plain
// const here fails that validation at build time.
export const SITE_TITLE = "Ju-Jutsu Quickborn";
export const SITE_DESCRIPTION =
  "Ju-Jutsu Quickborn — Selbstverteidigung und Kampfsport für alle Altersgruppen.";
// Also imported by manifest.ts's short_name — iOS Safari's "Add to Home
// Screen" pinned title ignores the web manifest and needs this dedicated
// field instead, so both read from the same constant rather than two
// hand-synced literals.
export const SITE_SHORT_NAME = "Ju-Jutsu";
