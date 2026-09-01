import Link from "next/link";

export default function NotFound() {
  return (
    <section className="resultPage">
      <div className="narrow">
        <p className="eyebrow">404 · Page not found</p>
        <h1>This page seems to have moved.</h1>
        <p>Let&apos;s get you back to clear ground.</p>
        <Link href="/" className="button">Return home <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
