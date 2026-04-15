import Image from "next/image";
import brandMarkImage from "@/assets/favicon-for-app/icon1.png";

type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <Image
      src={brandMarkImage}
      alt=""
      aria-hidden="true"
      className={className}
    />
  );
}
