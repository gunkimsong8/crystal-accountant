# Brand CI Alignment, Impeccable Setup, and Content Sync — Design

Date: 2026-09-02
Status: approved in conversation, pending implementation plan

## 1. Goal

Bring the Crystal Accounting website into line with the client's corporate identity (CI) and supplied
documents, install the Impeccable design tooling, and record project progress against
`docs/01_overview/01_PROJECT_OVERVIEW.md`.

Sources added on 2026-09-02:

- `docs/00_source/CA Logo.pdf` — a 9-page Canva company profile. Page 1 is the vector logo. Pages 2–9
  carry About, Vision/Mission, Core Values, Services, Why Choose Us, Countries, Industries, and Contact.
- `docs/00_source/Crystal Accounting Service Fee_.pdf` — 2026 fee announcement (updated 1/10/2025).

## 2. Decisions taken (2026-09-02)

| Topic | Decision |
|---|---|
| Palette | Follow the logo: violet primary, deep navy for text and dark sections, white. No black. |
| Services | Five pages: the deck's four (Accounting & Compliance, Audit & Assurance, Tax Advisory, Company Setup & Assistance) plus Payroll kept standalone for SEO. Corporate Compliance page removed. |
| Fees | Public. New `/pricing` page with all four fee tables and the disclaimer. |
| Fonts | Frank Ruhl Libre (display, from the wordmark) + Montserrat (body and UI). Self-hosted via `next/font/google`. |
| Impeccable depth | Install, `init`, then `audit` and `polish` on the existing layout. No full redesign pass. |
| Slugs | Renamed freely; the site is not live, so no redirects are needed. |

## 3. Brand facts extracted from the deck

Colors sampled from the vector render of the PDF (exact fills):

| Token role | Hex | Source |
|---|---|---|
| Violet (primary, logo mark) | `#5E17EB` | logo triangle |
| Violet (backgrounds, section fills) | `#6022DB` | Countries / Industries slide backgrounds |
| Navy (wordmark, headings) | `#001F3D` | "CRYSTAL ACCOUNTING" wordmark |
| Lavender tint | `#EBE3FA` | light card backgrounds |
| Lilac | `#C6B1F2` | accents |
| White | `#FFFFFF` | ground |

Fonts embedded in the deck: Frank Ruhl Libre Regular (wordmark), Glacial Indifference Regular/Bold
(body), Montserrat Bold (slide headings), Canva Sans. Glacial Indifference is not on Google Fonts, so
Montserrat is the chosen body face.

Logo anatomy: a filled violet triangle with a white inner cut-out triangle and a violet base bar, above
"CRYSTAL" in wide-tracked serif and "ACCOUNTING" in wide-tracked sans with a small outlined double-square
glyph. All vector on page 1.

## 4. Workstreams

Dependencies: A has none. B and C depend on A. D depends on A. E depends on C and D. F is last.

### A. Brand assets (P0)

Outputs:

- `public/brand/logo-full.svg` — mark + wordmark, brand colors, text converted to paths, optimized.
- `public/brand/logo-mark.svg` — triangle mark only.
- `public/brand/logo-full-white.svg` — single-color white variant for dark sections and footer.
- `src/app/favicon.ico` regenerated from the mark; `public/brand/og-image.png` (1200×630) with the logo
  on white.
- `docs/02_brand/BRAND.md` — palette table with roles and contrast notes, font roles, logo variants and
  clear-space rules, do/don't list derived from the deck.
- `docs/00_source/company-profile.md` — deck text transcribed page by page.
- `docs/00_source/service-fees.md` — the four fee tables and disclaimer, transcribed verbatim.

Method: `pdftocairo -svg` on page 1, crop to the logo group, clean with `svgo`. Verify by rendering the
SVGs to PNG and comparing against the PDF render.

### B. Impeccable setup (P1)

- `npx impeccable install` at the repo root (Node 24 present). Commit the generated skill/hook files.
- `/impeccable init` to produce `PRODUCT.md` and `DESIGN.md`. Seed them from the overview (audience,
  goals, tone) and from `BRAND.md` (tokens, fonts, logo rules). Anti-references: generic AI gradients,
  glassmorphism, dense pages, decorative side navigation (mirrors the overview's "Avoid" list).

### C. Design tokens and logo in code (P1)

- Rewrite the `:root` block in `src/app/globals.css`: `--violet`, `--violet-deep`, `--navy`,
  `--lavender`, `--lilac`, `--ink` (= navy), `--muted` (a solid grey-blue derived from navy, target `#4A5B6E`, no opacity),
  `--line`, `--soft`, `--white`. Every hardcoded plum hex elsewhere in the stylesheet is replaced by a
  token. Dark sections (`.homeHero`, `.differenceSection`, CTA band, footer) move from `#2d1748` to navy
  or deep violet.
- Fonts: `next/font/google` for Frank Ruhl Libre (display) and Montserrat (body), exposed as CSS
  variables `--font-display` and `--font-body`. `h1` and `h2` use the display serif; `h3`, eyebrows, buttons, and nav use Montserrat, as recorded in
  `DESIGN.md`.
- `src/components/Logo.tsx` renders the SVG asset (inline or `next/image` with fixed size) and a white
  variant prop for dark backgrounds. The CSS diamond and `public/brand-mark.svg` are removed.
- Hero and section decorations (`.crystal*`, `.differenceSection::after`) switch from rotated squares
  to the triangle motif.
- Contrast: every text/background pair in the stylesheet checked for WCAG AA. Violet `#5E17EB` on white
  passes for body text; white on violet passes; navy on lavender passes. Any failure gets a darker or
  lighter token, not an opacity tweak.

### D. Content alignment (P2)

Two independent tasks.

D1 — Services, About, Contact (`src/lib/site.ts` and the pages that read it):

| Slug | Title | Notes |
|---|---|---|
| `accounting-compliance` | Accounting & Compliance | absorbs bookkeeping; lists VAT (PP30), WHT (PND 1/3/53), SSO, financial statements per the deck |
| `audit-assurance` | Audit & Assurance | statutory audit by licensed CPA, interim audit, DBD & RD submission |
| `tax-advisory` | Tax Advisory | PND 50/51, planning, VAT registration, BOI incentives |
| `payroll-services` | Payroll Services | kept; links to accounting-compliance |
| `company-setup` | Company Setup & Assistance | DBD registration, e-Tax invoice, POS setup, FBL advisory |

`corporate-compliance` is deleted. About gains Vision, Mission, the five Core Values, the partner
background line, and Countries and Industries served. Contact and footer show
`info@crystalaccounting.co.th`, the Nawamin address, and Tax ID `0105568012538`. Sitemap and nav follow.

D2 — Pricing page (`src/app/pricing/page.tsx`, data in `src/lib/fees.ts`):

- Four tables: Monthly Accounting (by transactions), Annual Tax Filing (PND51 THB 5,000 / PND50
  THB 15,000), Audit (by revenue), Yearly Accounting for dormant companies (THB 21,000 split).
- The disclaimer paragraph and "Updated 1/10/2025" line verbatim.
- Contact call to action, added to header nav, footer, and sitemap. Tables scroll horizontally on
  narrow screens.

### E. Impeccable audit and polish (P3)

- `/impeccable audit`, fix findings. `/impeccable polish`, review the diff. `npx impeccable detect src/`
  must report zero findings.

### F. Progress tracking (P3)

- `docs/01_overview/02_PROGRESS.md`: one row per overview item in sections 6 (sitemap), 8 (technical),
  10 (quality), 12 (acceptance), and 14 (decisions), each marked Done / Partial / Open with a short note.
  A dated decisions log records the 2026-09-02 choices above. The overview file is not edited.

## 5. Verification

- `npm run lint` and `npm run build` pass after every workstream.
- Rendered SVG logos compared visually to the PDF.
- Browser screenshots of Home, one service page, Pricing, and About on desktop and a 390px viewport.
- Contrast pairs recorded in `BRAND.md`.
- Detector reports zero findings at the end of E.

## 6. Out of scope

- Form provider, hosting, domain, GA4 IDs (still open decisions in the overview).
- New article content.
- A full visual redesign beyond what audit and polish require.
