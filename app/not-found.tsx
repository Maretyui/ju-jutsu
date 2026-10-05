import type { Metadata } from "next";
import Link from "next/link";

// Without this, the 404 page silently inherited the homepage's title
// ("Ju-Jutsu Quickborn") from the root layout — indistinguishable from the
// real homepage in a browser tab or search result snippet — and stayed
// indexable, matching the fix already applied on sibling placeholder sites
// (ebs-abiball, darkinvaderr).
export const metadata: Metadata = {
  title: "Seite nicht gefunden | Ju-Jutsu Quickborn",
  robots: { index: false, follow: true },
  openGraph: { title: "Seite nicht gefunden | Ju-Jutsu Quickborn" },
  twitter: { title: "Seite nicht gefunden | Ju-Jutsu Quickborn" },
};

// Next.js falls back to its own generic 404 UI without this file — this
// keeps a mismatched/old link at least visually consistent with the
// homepage instead of a blank default.
export default function NotFound() {
  return (
    <div className="grid min-h-screen items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-6 text-center max-w-2xl">
        <header>
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
            Fehler 404
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
            Seite nicht gefunden
          </h1>
        </header>
        <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
          Diese Seite gibt es nicht (mehr). Training, Standort und
          Ansprechpartner findest du auf der Startseite, sobald sie feststehen.
        </p>
        <Link
          href="/"
          className="rounded-sm text-sm underline decoration-dotted underline-offset-2 hover:text-foreground text-foreground/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          Zurück zur Startseite
        </Link>
      </main>
      {/* /60 (not /40) so this small text still clears WCAG AA's 4.5:1
          contrast minimum against both the light and dark background. */}
      <footer className="pb-6 text-center text-xs text-foreground/60">
        Design &amp; Umsetzung:{" "}
        <a
          href="https://maretyui.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm underline decoration-dotted underline-offset-2 hover:text-foreground/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          Maik Reinhardt
          <span className="sr-only" lang="en"> (opens in a new tab)</span>
        </a>
      </footer>
    </div>
  );
}
