import { ImageResponse } from "next/og";
import { seo } from "@/app/seo";

export const alt = `${seo.siteName} social preview`;
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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "radial-gradient(circle at 18% 22%, rgba(90,178,255,0.34), transparent 30%), radial-gradient(circle at 82% 18%, rgba(255,138,61,0.28), transparent 24%), linear-gradient(135deg, #081224 0%, #0b1020 45%, #120d1d 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 32,
            color: "rgba(182,224,255,0.95)",
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 999,
              background: "linear-gradient(135deg, #63c2ff 0%, #ff8a3d 100%)",
              boxShadow: "0 0 30px rgba(99, 194, 255, 0.4)",
            }}
          />
          Modern community platform
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "900px" }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.06em",
            }}
          >
            ManaCamp
          </div>
          <div
            style={{
              fontSize: 40,
              lineHeight: 1.18,
              color: "rgba(236, 244, 255, 0.92)",
              maxWidth: "860px",
            }}
          >
            Channels, chat, voice, video, screen sharing, bots, and sessions on
            Windows and iOS.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            fontSize: 26,
            color: "rgba(255,255,255,0.82)",
          }}
        >
          <div>Windows</div>
          <div style={{ color: "rgba(99,194,255,0.8)" }}>•</div>
          <div>iOS</div>
          <div style={{ color: "rgba(255,138,61,0.8)" }}>•</div>
          <div>manacamp.app</div>
        </div>
      </div>
    ),
    size,
  );
}
