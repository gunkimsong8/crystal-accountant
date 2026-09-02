import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FeeTable } from "@/components/FeeTable";
import { PageHero } from "@/components/PageHero";
import { feeDisclaimer, feesUpdated, feeTables } from "@/lib/fees";

export const metadata: Metadata = {
  title: "Pricing and Service Fees",
  description: "Published 2026 accounting, tax filing, and audit service fees for companies in Thailand. Clear, predictable monthly fees with no hidden charges.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Service fees 2026"
        title="Transparent, fixed pricing."
        description="As part of our commitment to transparency and quality service, we publish our accounting and audit service fees for the year 2026."
      />
      <nav className="shell feeIndex" aria-label="Fee tables">
        {feeTables.map((table) => <Link href={`#${table.id}`} key={table.id}>{table.title}</Link>)}
      </nav>
      {feeTables.map((table) => <FeeTable table={table} key={table.id} />)}
      <section className="section softSection">
        <div className="narrow">
          <p className="eyebrow">Disclaimer</p>
          <p className="feeDisclaimer">{feeDisclaimer}</p>
          <p className="feeUpdated">Updated {feesUpdated}</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
