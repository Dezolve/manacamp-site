import { ImageResponse } from "next/og";
import { seo } from "@/app/seo";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "ManaCamp — Find your people. Stay for the moments.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const flameBase64 = await readFile(join(process.cwd(), "assets/favicon-for-app/icon1.png"), "base64");
  const flameSrc = `data:image/png;base64,${flameBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          padding: "64px",
          background:
            "radial-gradient(circle at 82% 52%, rgba(255,138,61,0.16), transparent 35%), radial-gradient(circle at 16% 18%, rgba(87,172,255,0.2), transparent 38%), linear-gradient(125deg, #091629 0%, #0c1123 53%, #160f22 100%)",
          color: "#ffffff",
        }}
      >
        {/* Use the same blue flame artwork as the ManaCamp website. */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 410,
            height: 410,
            right: 18,
            top: 105,
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(circle, rgba(61,151,255,0.19) 0%, rgba(61,151,255,0.04) 45%, transparent 72%)",
          }}
        >
          <img src={flameSrc} width="365" height="372" alt="" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
            maxWidth: 725,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              marginBottom: 28,
              fontSize: 25,
              letterSpacing: "0.03em",
              color: "#a8d7fa",
            }}
          >
            <div
              style={{
                display: "flex",
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #69c9ff, #ff9959)",
              }}
            />
            A home for gaming communities
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.055em",
              marginBottom: 30,
            }}
          >
            {seo.siteName}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 44,
              fontWeight: 650,
              lineHeight: 1.13,
              letterSpacing: "-0.025em",
              marginBottom: 26,
            }}
          >
            <div>Find your people.</div>
            <div style={{ color: "#ffc394" }}>Stay for the moments.</div>
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 650,
              fontSize: 27,
              lineHeight: 1.35,
              color: "#bdcce0",
            }}
          >
            A place to hang out, play together, and make community feel like community again.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
