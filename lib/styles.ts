// Shared by not-found.tsx and error.tsx, whose "back to homepage"/"retry"
// link and button had the exact same className repeated three times —
// kept in one place so the two pages' focus/hover treatment can't drift.
export const textLinkClassName =
  "rounded-sm text-sm underline decoration-dotted underline-offset-2 hover:text-foreground text-foreground/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";
