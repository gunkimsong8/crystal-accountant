# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary:** foreign founders and business owners of companies registered in Thailand, plus the
English-speaking executives, finance teams, and investors around them.

**Situation:** they are evaluating a long-term Thai accounting and audit partner, usually without
first-hand knowledge of Thai regulation, filings, or deadlines. They read on desktop and mobile,
often before any conversation has happened, and they are looking for trust signals, plain-English
explanations of what is required of their company, and an unambiguous next step.

**Job:** decide whether Crystal Accounting is a firm they can hand their compliance to — then ask a
question or request a quotation.

Existing clients are served through direct contact, not this site. Countries of origin seen in the
client base to date: US, Russia, UK, Israel, China, Philippines, Malaysia, Singapore, Hong Kong.
Industries: trading and import/export, consulting and professional services, e-commerce and online
retail, manufacturing, hospitality, real estate and construction.

## Product Purpose

An English-only corporate website for **Crystal Accounting**, a professional accounting and auditing
firm based in Bangkok, Thailand, specializing in one-stop accounting, tax, and compliance services
for foreign-owned companies doing business in Thailand.

The site exists to establish credibility, explain the firm's services in plain English, and convert
qualified visitors.

- **Primary conversion:** the contact form.
- **Secondary purpose:** pricing transparency — a public fee schedule page (`/pricing`) carrying the
  2026 fee tables and their disclaimer.
- **Supporting purpose:** durable organic search presence and landing pages for paid campaigns, plus
  a low-friction path for publishing one article per month from the repository.

Success (from the project overview): 20 contact-form submissions per month within six months of
launch, and a stakeholder-approved release covering all core, service, article, legal, and utility
pages in English.

## Positioning

Core promise: **Deliver beyond expectations.**

The firm's claim is not the service list — competitors publish the same one. It is that a foreign
owner gets a partner who bridges language, culture, and Thai regulation in one place:

- **Fluent English communication** — the client's business needs are understood without a language
  barrier, and Thai requirements are explained back in plain English.
- **All-in-one service** — company registration through bookkeeping, audit, and tax submission, from
  a single firm.
- **Transparency and fixed pricing** — clear, predictable monthly fees with no hidden charges, and
  the fee schedule published rather than quoted on request.
- **Partners' expertise** — partners with over 15 years in accounting, auditing, and financial
  advisory, previously with Big Four international firms, serving local and multinational clients.
- **Follow-through** — the firm takes ownership of open items and raises issues early rather than
  abandoning work.

Vision: to be the most trusted accounting partner for international businesses operating in
Thailand. Mission: simplify complex Thai accounting and tax regulations for foreign companies —
providing clarity, compliance, and confidence. Core values: global mindset, transparency,
professionalism, timeliness, accuracy.

## Operating Context

Visitors arrive cold — from organic search on Thailand/Bangkok accounting queries, from paid
campaigns, or from a referral — and read to evaluate. There is no login, no account, and no
in-product task; every session ends either in a contact-form submission or in leaving.

The subject matter is Thai statutory work, and the site's vocabulary must survive contact with it:
Thai GAAP / TFRS, monthly VAT (PP30), withholding tax (PND 1, 3, 53), corporate income tax
(PND 50, 51), Social Security Fund (SSO), the Department of Business Development (DBD), the Revenue
Department (RD), BOI incentives, Foreign Business License (FBL), e-Tax invoice and e-Receipt
registration, statutory annual audit by a licensed CPA.

Site structure in place: Home, About, Services (index plus one page per service), Pricing, Insights
(index plus article pages), Contact, Thank You, Privacy Policy, 404. Service pages follow a fixed
shape: problem, scope, ideal client, process, outcomes, FAQs, contact CTA.

Editorial workflow: articles live as typed data in the repository and ship through the normal deploy,
so publishing is a commit rather than a CMS session. Roughly one article per month is planned.

## Capabilities and Constraints

**Confirmed**

- Next.js 16 App Router with TypeScript, `output: "export"` — a fully static build with no runtime
  server. Every page is pre-rendered; `trailingSlash: true`.
- Content is typed TypeScript data under `src/lib/`, not a CMS.
- Contact submissions post to an external form endpoint (`NEXT_PUBLIC_FORM_ENDPOINT`) because there
  is no server. The form collects first name, last name, email, company (optional), service of
  interest, message, and an explicit consent checkbox, with a honeypot field for spam. It needs
  required-field and email validation, user-friendly success and error states, delivery to the
  company inbox, and a thank-you destination for conversion tracking.
- Google Analytics 4 loads only after the consent decision (`NEXT_PUBLIC_GA_ID`); a contact-form
  conversion event fires on the thank-you page.
- SEO surface: sitemap, `robots.txt`, canonical URLs, per-page metadata, Open Graph, and Organization
  plus service/article structured data. One clear page heading per indexable page.
- **Decided.** Five services, in this order and under these names: Accounting & Compliance, Audit &
  Assurance, Tax Advisory, Payroll Services, and Company Setup & Assistance — one page each under
  `/services/<slug>/`, plus a public `/pricing/` page carrying the 2026 fee tables and their
  disclaimer. The separate Corporate Compliance page is retired (its scope folds into Accounting &
  Compliance) and Payroll stays standalone for SEO. `src/lib/services.ts` carries the decided set.
- **Decided.** The public contact email is `info@crystalaccounting.co.th`, the address given in
  `docs/00_source/company-profile.md`. It is what ships on the contact page, in the footer, in the
  privacy policy, and in the contact form's error-recovery message; the individual address
  `podjanan.k@crystalaccounting.co.th` is not published. `src/lib/site.ts` carries it.
- Fees are public. Figures, the disclaimer, and "Updated 1/10/2025" are quoted verbatim from
  `docs/00_source/service-fees.md`; numbers are never edited.
- No secrets, private keys, or service credentials in client-side code.
- English only. No dark mode required.
- Budget below THB 20,000 and a 30 September 2026 launch target — both argue for a focused first
  release, reusable layouts, and few custom integrations.

**Undecided — do not invent**

- Production domain, DNS ownership, and hosting provider.
- Form-processing service, recipient mailbox, spam-control method, and data-retention policy.
- Office phone as a published contact channel, business hours, and whether the registered address is
  shown as a visitable office.
- Named team members or individual credentials beyond the aggregate partner statement.
- GA4, Search Console, and advertising account ownership.
- Who approves and publishes monthly articles.

## Brand Commitments

- Name: **Crystal Accounting** (legal entity: Crystal Accounting Company Limited).
- Voice: professional, plain-English, calm, dependable. Explain Thai obligations without jargon
  inflation and without hype. No "boost your business" copy.
- Core promise line: "Deliver beyond expectations."
- Visual system: violet `#5E17EB`, navy `#001F3D`, and white; Frank Ruhl Libre for display and
  Montserrat for body; the triangle logo motif. **`docs/02_brand/BRAND.md` is the authority** for the
  full palette, contrast pairs, type roles, logo variants, clear-space rules, and motif — read it
  rather than restating it. Black is not part of the palette.
- Binding anti-references volunteered by the client: generic AI purple-to-pink gradients,
  glassmorphism, dense dashboard layouts, side-tab navigation, continuous-scroll gimmicks, long text
  set over busy photography, decorative italic serif kickers.
- Imagery: approved, commercially licensed stock only, used selectively and optimized. All copy and
  design original.

## Evidence on Hand

- `docs/00_source/company-profile.md` — the client's 9-page company deck transcribed: About, vision
  and mission, core values, service inventory, why-choose-us claims, countries served, industries
  served, contact block.
- `docs/00_source/service-fees.md` — the 2026 fee announcement transcribed verbatim: monthly
  accounting fee bands by transaction volume, annual tax filing, audit fees by revenue band, yearly
  accounting fee, plus the complexity disclaimer.
- `docs/00_source/CA Logo.pdf`, `docs/00_source/Crystal Accounting Service Fee_.pdf` — client
  originals.
- `docs/02_brand/BRAND.md` — brand reference derived from the logo PDF.
- `docs/01_overview/01_PROJECT_OVERVIEW.md` — goals, audience, sitemap, technical approach, SEO
  targets, acceptance criteria, open decisions.
- `public/brand/*.svg` — logo lockups extracted from the client PDF (horizontal, stacked, mark, and
  white variants).
- `src/lib/site.ts` — real service and article copy already written and reviewed.

**Absences future work must not fabricate:** there are no testimonials, no named client logos, no
case studies, no press coverage, no awards, no headcount figure, no founding year, no photographs of
the team or office, and no review scores. Trust must be carried by the confirmed credentials, the
published fees, and the clarity of the explanations.

## Product Principles

1. **Answer the foreign owner's actual question.** Every page should tell someone unfamiliar with
   Thai regulation what is required of their company, what the firm does about it, and what happens
   next. Plain English beats completeness.
2. **Publish, don't withhold.** Fees, scope, process, and what is *not* included are stated openly;
   transparency is the differentiator, so nothing that can be published waits for a sales call.
3. **Trust comes from specifics, not adjectives.** Thai filing names, fee bands, process steps, and
   the partners' verifiable background do the persuading. No invented proof, no hype.
4. **One obvious next step per page.** The contact form is the conversion; every surface routes to it
   without ambiguity and without burying it.
5. **Stay cheap to run and cheap to change.** Static export, typed content in the repo, minimal
   client JavaScript, few third-party dependencies — a monthly article must be a commit, not a
   project.

## Accessibility & Inclusion

- The audience reads English as a working language, frequently as a second language, and often on
  mobile: short sentences, defined Thai terms, and generous type sizes are a product requirement, not
  a preference.
- Required baseline from the project overview: semantic structure, full keyboard operation, visible
  focus states, labelled form fields, alt text, and sufficient color contrast, with no major
  Lighthouse accessibility errors. `docs/02_brand/BRAND.md` records contrast ratios for every
  approved color pair; all pass 4.5:1.
- Consent must precede analytics — no data collection before the visitor decides.
