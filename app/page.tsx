// Placeholder copy — replace once Training, Standort and Ansprechpartner
// details are confirmed (keep app/layout.tsx's metadata/OG/twitter text in sync).
export default function Home() {
  return (
    <div className="grid min-h-screen items-center justify-items-center p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center gap-6 text-center max-w-2xl">
        <header>
          <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">
            Kampfsport Quickborn
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-balance">
            Ju-Jutsu Quickborn
          </h1>
        </header>
        <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
          Ju-Jutsu verbindet Techniken aus Judo, Karate, Ringen und weiteren
          Kampfkünsten zu einem effektiven System für Selbstverteidigung und
          Sport.
        </p>
        <p className="text-sm text-foreground/60 text-pretty">
          Weitere Infos zu Training, Standort und Ansprechpartnern folgen in
          Kürze.
        </p>
      </main>
    </div>
  );
}
