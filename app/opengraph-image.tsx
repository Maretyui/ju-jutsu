import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ju-Jutsu Quickborn";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Without this, links shared in group chats/Discord (the realistic way this
// club site gets passed around before it has any real traffic) unfurl with
// no image at all — layout.tsx's openGraph/twitter blocks declare title and
// description but never an `images` entry, so this file-convention route is
// the only thing that actually produces one. Matches the pattern already
// used on the sibling ebs-abiball placeholder site.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#a3a3a3",
          }}
        >
          Kampfsport Quickborn
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            color: "#ededed",
            marginTop: 16,
          }}
        >
          Ju-Jutsu Quickborn
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#a3a3a3",
            marginTop: 24,
          }}
        >
          Selbstverteidigung &amp; Kampfsport
        </div>
      </div>
    ),
    { ...size }
  );
}
