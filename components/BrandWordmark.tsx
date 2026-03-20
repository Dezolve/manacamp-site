import type { CSSProperties } from "react";

type BrandWordmarkProps = {
  className?: string;
  glow?: boolean;
};

const baseManaWordStyle: CSSProperties = {
  display: "inline-block",
  backgroundImage: "linear-gradient(135deg, #a7e6ff 0%, #79c7ff 42%, #4e98ff 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

const baseCampWordStyle: CSSProperties = {
  display: "inline-block",
  backgroundImage: "linear-gradient(135deg, #ffd08d 0%, #ffad4f 44%, #ff7a1a 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
};

export default function BrandWordmark({ className = "", glow = true }: BrandWordmarkProps) {
  const manaWordStyle: CSSProperties = glow
    ? { ...baseManaWordStyle, textShadow: "0 0 22px rgba(90, 178, 255, 0.18)" }
    : baseManaWordStyle;

  const campWordStyle: CSSProperties = glow
    ? { ...baseCampWordStyle, textShadow: "0 0 22px rgba(255, 138, 61, 0.14)" }
    : baseCampWordStyle;

  return (
    <span className={className}>
      <span style={manaWordStyle}>Mana</span>
      <span style={campWordStyle}>Camp</span>
    </span>
  );
}