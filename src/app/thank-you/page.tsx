import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Thank You", robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return (
    <section className="resultPage">
      <div className="narrow">
        <span className="resultIcon" aria-hidden="true">✓</span>
        <p className="eyebrow">Enquiry received</p>
        <h1>Thank you for getting in touch.</h1>
        <p>We have received your message and will follow up to learn more about your business and how we can help.</p>
        <Link href="/" className="button">Return home <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
