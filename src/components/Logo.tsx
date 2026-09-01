import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Crystal Accounting home">
      <span className="logoMark" aria-hidden="true">
        <span />
      </span>
      <span className="logoText">
        <strong>CRYSTAL</strong>
        <small>ACCOUNTING</small>
      </span>
    </Link>
  );
}
