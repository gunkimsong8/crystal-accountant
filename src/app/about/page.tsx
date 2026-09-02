import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us",
  description: "Crystal Accounting is a Bangkok accounting and auditing firm providing one-stop accounting, tax, and compliance services for foreign-owned companies in Thailand.",
};

const coreValues = [
  { title: "Global Mindset", description: "We work the way international owners expect: in English, with clear scope and predictable timing." },
  { title: "Transparency", description: "Fixed, published fees and plain explanations of what is filed, when, and why." },
  { title: "Professionalism", description: "Licensed CPA audit, Thai GAAP / TFRS bookkeeping, and partners with Big Four backgrounds." },
  { title: "Timeliness", description: "Monthly, half-year, and annual deadlines are tracked and met without reminders from you." },
  { title: "Accuracy", description: "Records you can rely on for decisions, audits, and Revenue Department questions." },
];

const countries = ["US", "Russia", "UK", "Israel", "China", "Philippines", "Malaysia", "Singapore", "Hong Kong"];

const industries = [
  "Trading & Import/Export",
  "Consulting & Professional Services",
  "E-commerce & Online Retail",
  "Manufacturing & Production",
  "Hospitality (Hotels, Restaurants, Hostels)",
  "Real Estate & Construction",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Crystal Accounting"
        title="A professional accounting and auditing firm based in Bangkok, Thailand."
        description="We specialize in providing one-stop accounting, tax, and compliance services for foreign-owned companies doing business in Thailand."
      />
      <section className="section">
        <div className="shell split">
          <div><p className="eyebrow">Who we are</p><h2>More than bookkeeping.</h2></div>
          <div className="largeCopy">
            <p>Our team understands that foreign investors need more than just bookkeeping. They need a reliable partner who can bridge language, culture, and Thai regulations with clear communication and transparent service.</p>
            <p>Our partners bring over 15 years of experience in accounting, auditing, and financial advisory services, previously with Big Four international accounting firms, serving both local and multinational clients across a wide range of industries.</p>
          </div>
        </div>
      </section>
      <section className="section softSection">
        <div className="shell split">
          <div><p className="eyebrow">Vision</p><h2>To be the most trusted accounting partner for international businesses operating in Thailand.</h2></div>
          <div className="largeCopy">
            <p className="eyebrow">Mission</p>
            <p>We simplify complex Thai accounting and tax regulations for foreign companies, providing clarity, compliance, and confidence to help you grow your business in Thailand.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="sectionHeading"><div><p className="eyebrow">Core values</p><h2>Five commitments behind every engagement.</h2></div></div>
          <div className="valueGrid valueGridFive">
            {coreValues.map((value, index) => (
              <article key={value.title}><span>0{index + 1}</span><h3>{value.title}</h3><p>{value.description}</p></article>
            ))}
          </div>
        </div>
      </section>
      <section className="section softSection">
        <div className="shell split">
          <div>
            <p className="eyebrow">Countries we serve</p>
            <h2>Owners from nine countries and counting.</h2>
            <ul className="tagList">{countries.map((country) => <li key={country}>{country}</li>)}</ul>
          </div>
          <div>
            <p className="eyebrow">Industries we serve</p>
            <ul className="factList">{industries.map((industry) => <li key={industry}>{industry}</li>)}</ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell statementPanel">
          <p className="eyebrow light">Our promise</p>
          <blockquote>“Let us take care of your company, so you can focus on growing your business in Thailand.”</blockquote>
          <Link href="/contact/" className="textLink light">Meet your accounting partner <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
