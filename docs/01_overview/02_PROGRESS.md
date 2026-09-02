# Crystal Accounting Website — Progress vs. Project Overview

Tracks `01_PROJECT_OVERVIEW.md`. Status: **Done** / **Partial** / **Open**. Updated 2026-09-02.

## Decisions log

| Date | Decision |
|---|---|
| 2026-09-02 | Palette follows the logo: violet `#5E17EB`, navy `#001F3D`, white. No black. |
| 2026-09-02 | Five services: Accounting & Compliance, Audit & Assurance, Tax Advisory, Payroll, Company Setup & Assistance. |
| 2026-09-02 | Fee schedule is public on `/pricing/`. |
| 2026-09-02 | Fonts: Frank Ruhl Libre + Montserrat. |
| 2026-09-02 | Impeccable installed; audit + polish applied. |

## §6 Sitemap

| Page | Status | Note |
|---|---|---|
| Home | Done | hero, services, differentiators, insights, CTA |
| About Us | Done | vision, mission, values, countries, industries; team credentials pending client photos/names |
| Services (overview + 5 pages) | Done | slugs per decisions log |
| Pricing | Done | added beyond original sitemap |
| Insights (list + 3 articles) | Done | placeholder articles; client copy pending |
| Contact | Partial | form UI done; endpoint provider open (§14.5) |
| Privacy Policy | Partial | draft text; client approval open (§14.6) |
| Thank You | Done | |
| 404 | Done | |

## §8 Technical approach

| Item | Status | Note |
|---|---|---|
| Next.js App Router, TypeScript, static export | Done | |
| Design tokens from CI | Done | `docs/02_brand/BRAND.md`, tokens tested |
| Markdown/MDX articles | Open | articles are TypeScript data (`src/lib/articles.ts`) today |
| Hosting, domain, HTTPS | Open | §14.4 |
| Contact form endpoint, spam, consent | Partial | `ContactForm.tsx` posts to `NEXT_PUBLIC_FORM_ENDPOINT`; unset shows an error state. Honeypot field present; no CAPTCHA or server-side filtering yet. Provider not chosen, no endpoint configured |
| GA4 after consent, conversion event | Partial | `AnalyticsConsent.tsx` gates gtag on consent and on `NEXT_PUBLIC_GA_ID` (`anonymize_ip: true`); measurement ID not configured. `ConversionEvent.tsx` wired on the thank-you page |
| Sitemap, robots, canonical, OG | Done | OG image from logo; canonical URL set on every route |
| Structured data | Partial | Article JSON-LD implemented on `/insights/[slug]`; no Organization or Service schema yet |

## §10 Quality

| Item | Status | Note |
|---|---|---|
| Responsive | Done | checked at desktop and 390px |
| Accessibility basics (semantics, focus, labels, alt, contrast) | Done | contrast enforced by test; Impeccable audit clean |
| Optimized images, self-hosted fonts, minimal JS | Done | |
| Lighthouse / Core Web Vitals | Open | not yet run; run before launch |
| Unique metadata per page | Done | |

## §12 Acceptance criteria

| Criterion | Status |
|---|---|
| All pages deployed in English | Open (not deployed; hosting/domain undecided) |
| Approved visual system | Partial (built to CI; client sign-off pending) |
| Service → contact path clear | Done |
| Form delivery works | Open (no provider/endpoint configured) |
| GA4 consent-gated | Partial (consent gate built; no measurement ID configured) |
| Sitemap + metadata | Done |
| Static export builds | Done |
| Stakeholder approvals | Open |
| Handover docs | Open |

## §14 Decisions required before build

| # | Decision | Status |
|---|---|---|
| 1 | Five services and public fees | Done (2026-09-02) |
| 2 | Copy, logo, CI, fees, credentials | Partial: logo, CI, fees received; final copy and credentials open |
| 3 | Address, phone, email, registration, form fields | Partial: address, email (`info@crystalaccounting.co.th`), Tax ID (`0105568012538`) from client documents; phone (`+66 91 626 6241`) published but unverified by the client; form fields unconfirmed |
| 4 | Domain, DNS, hosting | Open |
| 5 | Form service, mailbox, spam, retention | Open |
| 6 | Privacy/cookie requirements | Open |
| 7 | GA4, Search Console, Ads access | Open |
| 8 | Article publishing owner | Open |
| 9 | Launch approver | Open |

## Next actions

1. Client review of the CI-aligned build (screenshots or preview URL).
2. Decide form provider and hosting (§14.4–5) to unblock deployment.
3. Collect team credentials and final copy for About and Services.
