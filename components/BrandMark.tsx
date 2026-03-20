import { Flame } from "lucide-react";

type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className = "" }: BrandMarkProps) {
  return <Flame className={className} strokeWidth={2.1} />;
}