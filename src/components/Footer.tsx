import Link from "next/link";
import { Logo } from "./Logo";
import { services, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div className="footerIntro">
          <Logo variant="white" />
          <p>Let us take care of your company, so you can focus on growing your business in Thailand.</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <address>{siteConfig.address.join(", ")}</address>
        </div>
        <div>
          <h2>Explore</h2>
          <Link href="/about/">About us</Link>
          <Link href="/services/">Services</Link>
          <Link href="/pricing/">Pricing</Link>
          <Link href="/insights/">Insights</Link>
          <Link href="/contact/">Contact</Link>
        </div>
        <div>
          <h2>Services</h2>
          {services.map((service) => (
            <Link href={`/services/${service.slug}/`} key={service.slug}>
              {service.shortTitle}
            </Link>
          ))}
        </div>
        <div className="footerCta">
          <p className="eyebrow light">Ready for more clarity?</p>
          <h2>Let&apos;s make your accounting one less thing to worry about.</h2>
          <Link href="/contact/" className="textLink light">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="shell footerBottom">
        <p>© {new Date().getFullYear()} {siteConfig.legalName}. Tax ID {siteConfig.taxId}. All rights reserved.</p>
        <Link href="/privacy/">Privacy policy</Link>
      </div>
    </footer>
  );
}
