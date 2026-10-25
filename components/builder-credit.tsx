// /60 (not /40) so this small text still clears WCAG AA's 4.5:1
// contrast minimum against both the light and dark background.
export default function BuilderCredit() {
  return (
    <footer className="pb-6 text-center text-xs text-foreground/60">
      Design &amp; Umsetzung:{" "}
      <a
        href="https://maretyui.com"
        target="_blank"
        rel="noopener noreferrer author"
        className="rounded-sm underline decoration-dotted underline-offset-2 hover:text-foreground/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      >
        Maik Reinhardt
        <span className="sr-only" lang="en"> (opens in a new tab)</span>
      </a>
    </footer>
  );
}
