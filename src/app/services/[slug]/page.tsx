import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.shortTitle,
    description: service.description,
    alternates: { canonical: `/services/${slug}/` },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="serviceHero">
        <div className="shell">
          <Link href="/services/" className="backLink">← All services</Link>
          <p className="eyebrow light">{service.eyebrow}</p>
          <h1>{service.title}</h1>
          <p>{service.intro}</p>
          <Link href="/contact/" className="button buttonLight">Discuss your needs <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
      <section className="outcomeStrip">
        <div className="shell outcomeGrid">
          {service.outcomes.map((outcome, index) => <div key={outcome}><span>0{index + 1}</span><strong>{outcome}</strong></div>)}
        </div>
      </section>
      <section className="section">
        <div className="shell split">
          <div><p className="eyebrow">What&apos;s included</p><h2>Practical support, shaped around your operations.</h2></div>
          <ul className="checkList">{service.includes.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <section className="section softSection">
        <div className="shell">
          <div className="sectionHeading"><div><p className="eyebrow">Our approach</p><h2>A straightforward way of working.</h2></div></div>
          <div className="processGrid">
            {service.process.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section faqSection">
        <div className="shell split">
          <div><p className="eyebrow">Common questions</p><h2>The details, made clearer.</h2></div>
          <div className="faqList">{service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
