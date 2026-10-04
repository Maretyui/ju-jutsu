"use client";

import { useEffect } from "react";

// Next.js falls back to its own generic error UI without this file — this
// keeps a runtime error at least visually consistent with the homepage and
// the not-found.tsx page instead of a blank default.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid min-h-screen items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-6 text-center max-w-2xl">
        <header>
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
            Fehler
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
            Etwas ist schiefgelaufen
          </h1>
        </header>
        <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
          Bitte versuche es erneut oder kehre zur Startseite zurück.
        </p>
        <button
          onClick={() => reset()}
          className="text-sm underline decoration-dotted underline-offset-2 hover:text-foreground text-foreground/80"
        >
          Erneut versuchen
        </button>
      </main>
      {/* /60 (not /40) so this small text still clears WCAG AA's 4.5:1
          contrast minimum against both the light and dark background. */}
      <footer className="pb-6 text-center text-xs text-foreground/60">
        Design &amp; Umsetzung:{" "}
        <a
          href="https://maretyui.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-2 hover:text-foreground/70"
        >
          Maik Reinhardt
          <span className="sr-only" lang="en"> (opens in a new tab)</span>
        </a>
      </footer>
    </div>
  );
}
