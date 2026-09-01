import Link from "next/link";

export function CtaBand() {
  return (
    <section className="ctaBand">
      <div className="shell ctaBandInner">
        <div>
          <p className="eyebrow light">A clearer way forward</p>
          <h2>Looking for an accounting partner who follows through?</h2>
        </div>
        <Link href="/contact/" className="button buttonLight">
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
