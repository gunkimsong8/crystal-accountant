import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy", description: "How Crystal Accounting handles information submitted through this website." };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy policy" description="A plain-English overview of how information submitted through this website is handled." />
      <div className="narrow legalContent">
        <p><strong>Last updated:</strong> 1 September 2026</p>
        <h2>Information we collect</h2>
        <p>When you contact us, we collect the information you provide, such as your name, work email, company, service interest, and message. We may also receive basic technical information needed to protect and operate the website.</p>
        <h2>How we use information</h2>
        <p>We use enquiry information to respond, understand your needs, maintain appropriate business records, and protect the contact service from abuse. We do not sell your personal information.</p>
        <h2>Service providers</h2>
        <p>Our hosting, form-processing, email, security, and analytics providers may process limited information on our behalf. Final provider names, processing locations, and retention terms will be added before production launch.</p>
        <h2>Analytics and cookies</h2>
        <p>Analytics will only be enabled according to the consent requirements applicable to the production website. When enabled, analytics helps us understand website use and improve its effectiveness.</p>
        <h2>Retention and your choices</h2>
        <p>We retain enquiry information only as long as needed for the purposes described above and applicable obligations. You may ask about your information or request an appropriate correction or deletion.</p>
        <h2>Contact us</h2>
        <p>For privacy questions, email <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
        <aside className="articleDisclaimer">This draft must be reviewed and updated with confirmed company details, service providers, retention periods, and applicable legal requirements before launch.</aside>
      </div>
    </>
  );
}
