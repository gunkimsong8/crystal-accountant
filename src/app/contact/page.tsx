import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Crystal Accounting about accounting, tax, audit, payroll, or corporate compliance support in Thailand.",
};

export default function ContactPage() {
  return (
    <section className="contactPage">
      <div className="shell contactGrid">
        <div className="contactIntro">
          <p className="eyebrow light">Start a conversation</p>
          <h1>Tell us what your business needs next.</h1>
          <p>Share a little about your company and the support you are looking for. We will follow up in English to understand the details.</p>
          <div className="contactDirect">
            <span>Email us</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>Call us</span><a href="tel:+66916266241">{siteConfig.phone}</a>
          </div>
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
