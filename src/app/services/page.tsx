import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accounting Services in Thailand",
  description: "Accounting, audit, tax, payroll, and corporate compliance services for international businesses in Thailand.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our services" title="The support your business needs to move forward with confidence." description="Practical accounting and compliance services, connected by one responsive English-speaking team." />
      <section className="section">
        <div className="shell serviceList serviceListPage">
          {services.map((service, index) => <ServiceCard service={service} index={index} key={service.slug} />)}
        </div>
      </section>
      <section className="section softSection">
        <div className="shell split">
          <div><p className="eyebrow">Not sure where to begin?</p><h2>Start with the business problem, not the service label.</h2></div>
          <div className="largeCopy"><p>Tell us what you are working through—whether it is a recurring deadline, unclear reporting, a new transaction, or the need for a more dependable accounting process.</p><p>We will help define the right scope and explain how the pieces fit together.</p></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
