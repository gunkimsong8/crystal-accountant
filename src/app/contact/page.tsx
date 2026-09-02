import type { Metadata } from "next";
import { Fragment } from "react";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Crystal Accounting about accounting, audit, tax, payroll, or company setup support in Thailand.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <section className="contactPage">
      <div className="shell contactGrid">
        <div className="contactIntro">
          <p className="eyebrow light">Start a conversation</p>
          <h1>Tell us what your business needs next.</h1>
          <p>Share a little about your company and the support you are looking for. We will follow up in English to understand the details.</p>
          <dl className="contactDirect">
            <dt>Email</dt>
            <dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd>
            <dt>Phone</dt>
            <dd><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></dd>
            <dt>Office</dt>
            <dd>
              <address>{siteConfig.address.map((line, index) => (
                <Fragment key={line}>{line}{index < siteConfig.address.length - 1 && <br />}</Fragment>
              ))}</address>
            </dd>
          </dl>
        </div>
        <div className="formPanel">
          <h2>How can we help?</h2>
          <p>Fields marked * are required.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
