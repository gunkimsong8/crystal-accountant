"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/insights/", label: "Insights" },
  { href: "/contact/", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Logo />
        <button
          className="menuButton"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="srOnly">Toggle navigation</span>
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={open ? "nav open" : "nav"} aria-label="Primary navigation">
          {links.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                href={link.href}
                key={link.href}
                className={isActive ? "active" : undefined}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact/" className="button buttonSmall" onClick={() => setOpen(false)}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
