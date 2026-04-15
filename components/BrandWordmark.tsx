import type { CSSProperties } from "react";

type BrandWordmarkProps = {
  className?: string;
  glow?: boolean;
};

const baseWordmarkStyle: CSSProperties = {
  fontFamily:
    '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif',
  letterSpacing: "-0.01em",
};

const manaStyle: CSSProperties = {
  display: "inline-block",
  backgroundImage: "linear-gradient(90deg, #63c2ff 0%, #4d86e8 62%, #8a7fc6 90%, #b78395 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

const campStyle: CSSProperties = {
  display: "inline-block",
  backgroundImage: "linear-gradient(90deg, #7a8ed8 0%, #c68583 24%, #ff9560 60%, #ff7a4a 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

export default function BrandWordmark({ className = "", glow = true }: BrandWordmarkProps) {
  const finalWordmarkStyle: CSSProperties = glow
    ? {
        ...baseWordmarkStyle,
        textShadow:
          "0 0 18px rgba(99, 194, 255, 0.14), 0 0 20px rgba(255, 122, 74, 0.1)",
      }
    : baseWordmarkStyle;

  return (
    <span className={className} style={finalWordmarkStyle}>
      <span style={manaStyle}>Mana</span>
      <span style={campStyle}>Camp</span>
    </span>
  );
}
