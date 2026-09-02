import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "color" | "white";
};

// next/image does not prepend basePath to src, so it is added here explicitly.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const LOGO_WIDTH = 168;
const LOGO_HEIGHT = 44;

export function Logo({ variant = "color" }: LogoProps) {
  const file = variant === "white" ? "logo-horizontal-white.svg" : "logo-horizontal.svg";
  const src = `${BASE_PATH}/brand/${file}`;
  return (
    <Link href="/" className="logo" aria-label="Crystal Accounting home">
      <Image src={src} alt="" width={LOGO_WIDTH} height={LOGO_HEIGHT} priority={variant === "color"} />
    </Link>
  );
}
