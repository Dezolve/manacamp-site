import { ImageResponse } from "next/og";
import { seo } from "@/app/seo";

export const alt = "ManaCamp — Find your people. Stay for the moments.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
        {/* The gathering motif: connected lights around one warm campfire. */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 370,
            height: 370,
            top: 132,
            right: 55,
            borderRadius: "50%",
            border: "1px solid rgba(163,196,232,0.2)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 260,
            height: 260,
            top: 187,
            right: 110,
            borderRadius: "50%",
            border: "1px solid rgba(163,196,232,0.18)",
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: 142,
            height: 142,
            top: 246,
            right: 169,
            borderRadius: "50%",
            background: "radial-gradient(circle at 38% 32%, #ffd198 0%, #ff9855 42%, #d25e7d 75%, #864caa 100%)",
            boxShadow: "0 0 85px rgba(255,137,73,0.35), 0 0 155px rgba(105,108,216,0.2)",
          }}
        />
        {[
          { top: 148, right: 190, color: "#8bcfff", size: 24 },
          { top: 312, right: 45, color: "#ffb977", size: 20 },
          { top: 454, right: 252, color: "#bcb0ff", size: 23 },
          { top: 268, right: 391, color: "#8bcfff", size: 18 },
        ].map((light, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              position: "absolute",
              top: light.top,
              right: light.right,
              width: light.size,
              height: light.size,
              borderRadius: "50%",
              background: light.color,
              boxShadow: `0 0 24px ${light.color}`,
            }}
          />
        ))}

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
