import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// iOS Safari ignores favicon.ico for "Add to Home Screen" and falls back to
// a screenshot of the page if no dedicated apple-touch-icon exists — this
// file-convention route is what layout.tsx's `appleWebApp.title` metadata
// actually needs to produce a real pinned icon instead of that fallback.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171717",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#ededed",
          }}
        >
          JJ
        </div>
      </div>
    ),
    { ...size }
  );
}
