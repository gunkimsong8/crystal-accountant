import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "color" | "white";
};

const LOGO_WIDTH = 168;
const LOGO_HEIGHT = 44;

export function Logo({ variant = "color" }: LogoProps) {
  const src = variant === "white" ? "/brand/logo-horizontal-white.svg" : "/brand/logo-horizontal.svg";
  return (
    <Link href="/" className="logo" aria-label="Crystal Accounting home">
      <Image src={src} alt="" width={LOGO_WIDTH} height={LOGO_HEIGHT} priority />
    </Link>
  );
}
