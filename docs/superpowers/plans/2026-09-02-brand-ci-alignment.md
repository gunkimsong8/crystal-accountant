# Brand CI Alignment, Impeccable Setup, and Content Sync — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the Crystal Accounting site match the client's CI (violet + navy, real logo, CI fonts), align its content with the supplied company profile and fee schedule, set up Impeccable, and record progress against the project overview.

**Architecture:** The site is a Next.js 16 App Router static export with plain CSS custom properties in one stylesheet and all content as typed TypeScript data in `src/lib/`. This plan swaps the token layer, replaces the placeholder logo with extracted SVG assets, splits the content module into `services.ts`, `articles.ts`, and a new `fees.ts`, and adds a `/pricing` route. Vitest is introduced for data-integrity and contrast tests.

**Tech Stack:** Next.js 16.3.4 (App Router, `output: "export"`, `trailingSlash: true`), React 19, TypeScript 5, `next/font/google`, Vitest, poppler (`pdftocairo`, `pdftoppm`, `pdftotext`), ImageMagick (`magick`), `svgo` 4, Impeccable (`npx impeccable`).

**Spec:** `docs/superpowers/specs/2026-09-02-brand-ci-alignment-design.md`

## Global Constraints

- Palette follows the logo: violet `#5E17EB` (primary), violet fill `#6022DB` (large backgrounds), navy `#001F3D` (text, dark sections), white. No black.
- Fonts: Frank Ruhl Libre for `h1`/`h2`; Montserrat for body, `h3`, eyebrows, buttons, nav. Loaded via `next/font/google`, no external stylesheet links.
- Five services with slugs exactly: `accounting-compliance`, `audit-assurance`, `tax-advisory`, `payroll-services`, `company-setup`. `corporate-compliance` is removed. No redirects.
- All routes end with a trailing slash in links (`/pricing/`), matching `trailingSlash: true`.
- Every text/background pair must meet WCAG AA (4.5:1 for body text, 3:1 for text ≥ 24px or bold ≥ 19px).
- Fee figures, disclaimer, and "Updated 1/10/2025" are copied verbatim from `docs/00_source/service-fees.md` (produced in Task 1). Row labels may be sentence-cased ("Less than 10 transactions"); numbers never change.
- Commit format: `<type>: <description>` with types feat, fix, refactor, docs, test, chore. No Co-Authored-By trailers.
- `npm run lint` and `npm run build` must pass at the end of every task.
- Scratch/intermediate files go under the session scratchpad, never `/tmp` and never the repo.
- Client email in the deck is `info@crystalaccounting.co.th`; the site currently uses a personal address. Task 7 switches to the deck address.

---

## File Structure

| Path | Responsibility | Task |
|---|---|---|
| `docs/00_source/company-profile.md` | Deck text transcribed page by page | 1 |
| `docs/00_source/service-fees.md` | Fee tables + disclaimer, verbatim | 1 |
| `public/brand/logo-full.svg`, `logo-full-white.svg` | Stacked logo (mark + wordmark) | 2 |
| `public/brand/logo-horizontal.svg`, `logo-horizontal-white.svg` | Mark left, wordmark right (header/footer) | 2 |
| `public/brand/logo-mark.svg` | Triangle mark only | 2 |
| `src/app/icon.svg` | Favicon (Next auto-wires) | 2 |
| `src/app/opengraph-image.png` | 1200×630 social image (Next auto-wires) | 2 |
| `docs/02_brand/BRAND.md` | Palette, fonts, logo rules, contrast table | 3 |
| `PRODUCT.md`, `DESIGN.md`, Impeccable files | Design context for Impeccable | 4 |
| `vitest.config.ts`, `src/lib/contrast.ts`, `src/lib/__tests__/tokens.test.ts` | Test runner + WCAG contrast check of tokens | 5 |
| `src/app/globals.css` | Token layer + all styles | 5, 6, 8, 9 |
| `src/app/layout.tsx` | Fonts, theme color, metadata | 5, 6 |
| `src/components/Logo.tsx` | Renders SVG logo, color/white variant | 6 |
| `src/app/page.tsx` | Home hero motif | 6 |
| `src/lib/services.ts`, `src/lib/articles.ts`, `src/lib/site.ts` | Content split; `site.ts` keeps `siteConfig`, `formatDate`, re-exports | 7 |
| `src/lib/__tests__/services.test.ts` | Slug and shape tests | 7 |
| `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/components/Footer.tsx` | Deck content, real contact details | 7 |
| `src/lib/fees.ts`, `src/lib/__tests__/fees.test.ts` | Fee data + tests | 7 |
| `src/app/pricing/page.tsx`, `src/components/FeeTable.tsx` | Pricing route | 7 |
| `src/components/Header.tsx`, `src/app/sitemap.ts` | Add Pricing link and route | 7 |
| `docs/01_overview/02_PROGRESS.md` | Progress vs overview | 7 |

Task order and dependencies: 1, 2, 3 (P0, independent of each other) → 4 → 5 → 6 → 7, 8, 9 (independent, after 6) → 10 → 11.

---

### Task 1: Transcribe the two source PDFs to Markdown

**Files:**
- Create: `docs/00_source/company-profile.md`
- Create: `docs/00_source/service-fees.md`

**Interfaces:**
- Produces: two Markdown files that Tasks 3, 4, 9, 10 quote from. Fee table headings in `service-fees.md` must be exactly: `## Monthly Accounting Service Fee`, `## Annual Tax Filing`, `## Audit Service Fee`, `## Yearly Accounting Service Fee`.

- [ ] **Step 1: Dump the deck text**

Run:
```bash
cd /Users/gunkimsong/GitRepo/crystal-account
pdftotext -layout "docs/00_source/CA Logo.pdf" - | sed '/^\s*$/d'
```
Expected: nine slides of text beginning `CRYSTAL ACCOUNTING`, including "About Crystal Accounting", "VISION AND MISSION", "CORE VALUES", "OUR SERVICES", "WHY CHOOSE CRYSTAL ACCOUNTING", "COUNTRIES WE SERVE", "INDUSTRIES WE SERVE", "THANK YOU".

- [ ] **Step 2: Write `docs/00_source/company-profile.md`**

Use this exact structure, filling each section with the slide text from Step 1 word for word (fix only line-wrap breaks):

```markdown
# Crystal Accounting — Company Profile (transcribed)

Source: `CA Logo.pdf` (Canva export, 9 pages, created 2026-09-02). Text transcribed verbatim; layout notes in brackets.

## Page 1 — Logo
[Stacked logo: violet triangle mark with white inner triangle and violet base bar; "CRYSTAL" navy serif, wide tracking; "ACCOUNTING" navy sans, wide tracking, with an outlined double-square glyph.]

## Page 2 — About Crystal Accounting
Crystal Accounting is a professional accounting and auditing firm based in Bangkok, Thailand.
...

## Page 3 — Vision and Mission
### Vision
...
### Mission
...

## Page 4 — Core Values
- Global Mindset
- Transparency
- Professionalism
- Timeliness
- Accuracy

## Page 5 — Our Services
### Accounting & Compliance
- Monthly bookkeeping (Thai GAAP / TFRS)
- ...
### Audit & Assurance
...
### Tax Advisory
...
### Company Setup & Assistance service
...

## Page 6 — Why Choose Crystal Accounting
### Fluent English Communication
...
### All-in-One Service
...
### Transparency & Fixed Pricing
...
### Partners' Expertise
...

## Page 7 — Countries We Serve
US, Russia, UK, Israel, China, Philippines, Malaysia, Singapore, Hong Kong

## Page 8 — Industries We Serve
- Trading & Import/Export
- ...

## Page 9 — Thank You / Contact
Let us take care of your company, so you can focus on growing your business in Thailand.
- Email: info@crystalaccounting.co.th
- Address: 33/65 Soi Nawamin 85, Intersection 2-1, Nawamin Subdistrict, Bueng Kum District, Bangkok 10240
```

- [ ] **Step 3: Dump the fee PDF text**

Run:
```bash
pdftotext -layout "docs/00_source/Crystal Accounting Service Fee_.pdf" -
```
Expected: two pages with four fee tables, a disclaimer paragraph, and "Updated 1/10/2025" on each page.

- [ ] **Step 4: Write `docs/00_source/service-fees.md`**

```markdown
# Crystal Accounting — Service Fees 2026 (transcribed)

Source: `Crystal Accounting Service Fee_.pdf`. Letterhead: Crystal Accounting Company Limited, 33/65 Soi Nawamin 85 Yaek 2-1, Nawamin, Buengkum, Bangkok 10240. Tax ID 0105568012538 | Head Office. Updated 1/10/2025.

## Introduction
As part of our commitment to transparency and quality service, we would like to announce our accounting and audit service fees for the year 2026.

## Monthly Accounting Service Fee
Our accounting service includes
- Monthly bookkeeping and preparation of financial records
- Preparation and submission of monthly tax filings e.g. VAT, withholding tax
- Annual financial statement preparation and submission to the Department of Business Development (DBD), which is required by Thai government
- Monthly submission of Social Security Fund

The fees are structured based on the number of transactions per month, ensuring fair and accurate pricing. Please refer to the fee schedule below. However, fees may vary depending on the complexity of each company.

| Number of bills per month | Service fee (THB) |
|---|---|
| less than 10 transactions | 3,500.00 |
| 11 - 30 transactions | 5,000.00 |
| 31 - 50 transactions | 6,500.00 |
| 51 - 70 transactions | 8,000.00 |
| 71 - 100 transactions | 10,250.00 |
| 101 - 150 transactions | 14,000.00 |
| 151 - 200 transactions | 17,750.00 |
| 201 - 250 transactions | 21,500.00 |
| 251 - 300 transactions | 25,250.00 |
| More than 300 transactions | by case |

## Annual Tax Filing
- Preparation and submission of half year corporate income tax (PND51) — Service fee: THB 5,000
- Preparation and submission of full year corporate income tax (PND50) — Service fee: THB 15,000

## Audit Service Fee
Audit fees are determined based on your company's annual revenue. Please refer to the fee schedule below. The final fee will be adjusted based on the specific complexities of each company.

| Revenue (THB) | Audit fee (THB) |
|---|---|
| less than 200,000 | 8,000.00 |
| 200,001 - 1,000,000 | 10,000.00 |
| 1,000,001 - 3,000,000 | 12,000.00 |
| 3,000,001 - 5,000,000 | 13,000.00 |
| 5,000,001 - 7,000,000 | 15,000.00 |
| 7,000,001 - 10,000,000 | 16,000.00 |
| 10,000,001 - 15,000,000 | 20,000.00 |
| 15,000,001 - 20,000,000 | 25,000.00 |
| 20,000,001 - 30,000,000 | 35,000.00 |
| 30,000,001 - 40,000,000 | 40,000.00 |
| 40,000,001 - 50,000,000 | 50,000.00 |
| More than 50,000,000 | by case |

## Yearly Accounting Service Fee
This service is suitable for companies that are not VAT-registered and have no business operations during the year, with only a few transactions such as interest income, accounting service fees, and audit fees.

Our yearly accounting service includes
- Bookkeeping and preparation of financial records
- Preparation and submission of half year and full year corporate income tax (PND51, PND50)
- Annual financial statement preparation and submission to the Department of Business Development (DBD), which is required by Thai government
- Audit service

The total fee is THB 21,000, which is broken down as follows:

| Service | Service fee (THB) |
|---|---|
| Accounting and tax services | 13,000.00 |
| Audit services | 8,000.00 |

In case there are operations and the company is not VAT registered, the yearly accounting service fee will need to be discussed separately.

## Disclaimer
The rates shown in this table are preliminary estimates only. The final service fee to be charged before the commencement of service will be based on the discussion and agreement reached. Crystal Accounting will issue an invoice for the final net amount accordingly.
```

Cross-check every number against the Step 3 output before saving.

- [ ] **Step 5: Commit**

```bash
git add docs/00_source/company-profile.md docs/00_source/service-fees.md
git commit -m "docs: transcribe company profile deck and 2026 fee schedule"
```

---

### Task 2: Extract the logo as SVG assets, favicon, and social image

**Files:**
- Create: `public/brand/logo-full.svg`, `public/brand/logo-full-white.svg`, `public/brand/logo-horizontal.svg`, `public/brand/logo-horizontal-white.svg`, `public/brand/logo-mark.svg`
- Create: `src/app/icon.svg`, `src/app/opengraph-image.png`
- Delete: `public/brand-mark.svg`, `src/app/favicon.ico`

**Interfaces:**
- Produces: the five SVG paths above. All SVGs have a `viewBox`, no `width`/`height` attributes, and fills as hex (`#5E17EB`, `#001F3D`, or `#FFFFFF`). `logo-horizontal*.svg` aspect ratio is roughly 3.6:1; `logo-full*.svg` roughly 1.5:1; `logo-mark.svg` roughly 1.15:1.

Set `S` to the scratchpad directory from the session prompt for every command below.

- [ ] **Step 1: Export page 1 to SVG and a hi-res PNG**

```bash
cd /Users/gunkimsong/GitRepo/crystal-account
pdftocairo -svg -f 1 -l 1 "docs/00_source/CA Logo.pdf" "$S/page1.svg"
pdftoppm -png -r 300 -f 1 -l 1 "docs/00_source/CA Logo.pdf" "$S/page1"
magick "$S/page1-1.png" -trim -format "%@\n" info:
```
Expected: a geometry like `WxH+X+Y` in 300-dpi pixels. Divide each value by `300/72 = 4.1667` to get PDF points. These four numbers, with ~20 pt padding, are the `viewBox` of the stacked logo.

- [ ] **Step 2: Build `logo-full.svg`**

Open `$S/page1.svg`. It has `<defs>` with glyph `<symbol>`/`<g id="glyph-…">` entries, `<clipPath>` entries, and a body of `<use xlink:href="#glyph-…" x= y=>` (wordmark letters) and clipped `<path fill="rgb(36.859131%, 9.01947%, 92.158508%)">` (the mark). Create `public/brand/logo-full.svg`:

1. Copy the whole file.
2. Replace the root `<svg …>` attributes with `xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="X Y W H"` using the Step 1 numbers (no `width`/`height`).
3. Replace `fill="rgb(36.859131%, 9.01947%, 92.158508%)"` with `fill="#5E17EB"`. Replace any `fill="rgb(0%, 12.156677%, 23.921204%)"` (navy) with `fill="#001F3D"`. Confirm no other `rgb(` fills remain: `grep -c 'rgb(' public/brand/logo-full.svg` should print `0`.
4. Wrap the mark elements in `<g id="mark">…</g>` and the wordmark `<use>` elements (plus the double-square glyph paths) in `<g id="wordmark">…</g>`.
5. Run `npx --yes svgo --multipass public/brand/logo-full.svg`.

Verify:
```bash
magick -background none "public/brand/logo-full.svg" -resize 800x "$S/check-full.png"
```
Read `$S/check-full.png` and compare with `$S/page1-1.png`: same shapes, violet mark, navy text, transparent background.

- [ ] **Step 3: Build `logo-mark.svg`**

Copy `logo-full.svg`, delete the `<g id="wordmark">` block and every `<defs>` glyph it referenced, and set the `viewBox` to the mark's bounds. Get them by:
```bash
magick -background none "$S/check-full.png" -crop 100%x45%+0+0 -trim -format "%@\n" info:
```
then scale back to viewBox units (`800 / W_full`). Add 4% padding on each side. Run svgo. Verify by rendering to `$S/check-mark.png` and reading it: triangle with inner triangle and base bar, nothing else.

- [ ] **Step 4: Build `logo-horizontal.svg`**

Copy `logo-full.svg`. Add `transform="translate(TX TY)"` to `<g id="wordmark">` so the wordmark sits to the right of the mark with its vertical center aligned to the mark's vertical center and a gap equal to 25% of the mark width. Set `viewBox` to the new combined bounds plus 4% padding. Run svgo. Render to `$S/check-horizontal.png`, read it, and confirm: mark left, two-line wordmark right, aspect between 3.3:1 and 3.9:1.

- [ ] **Step 5: Build the white variants**

```bash
sed 's/#5E17EB/#FFFFFF/g; s/#001F3D/#FFFFFF/g' public/brand/logo-full.svg > public/brand/logo-full-white.svg
sed 's/#5E17EB/#FFFFFF/g; s/#001F3D/#FFFFFF/g' public/brand/logo-horizontal.svg > public/brand/logo-horizontal-white.svg
grep -c '#5E17EB\|#001F3D' public/brand/logo-full-white.svg public/brand/logo-horizontal-white.svg
```
Expected: both counts `0`. Render each on a navy background to check:
```bash
magick -background "#001F3D" public/brand/logo-horizontal-white.svg -resize 800x "$S/check-white.png"
```

- [ ] **Step 6: Favicon and social image**

```bash
cp public/brand/logo-mark.svg src/app/icon.svg
magick -size 1200x630 xc:white \( public/brand/logo-full.svg -background none -resize 640x420 \) -gravity center -composite src/app/opengraph-image.png
git rm -q public/brand-mark.svg src/app/favicon.ico
grep -rn "brand-mark\|favicon" src/ | grep -v opengraph
```
Expected: the grep prints nothing (no remaining references). If `src/app/layout.tsx` or any component references `brand-mark.svg`, remove that reference in this step.

- [ ] **Step 7: Lint, build, commit**

```bash
npm run lint && npm run build
git add public/brand src/app/icon.svg src/app/opengraph-image.png
git commit -m "feat: add extracted brand logo assets, favicon, and social image"
```
Expected: build lists `/icon.svg` and `/opengraph-image.png` routes.

---

### Task 3: Write the brand reference

**Files:**
- Create: `docs/02_brand/BRAND.md`

**Interfaces:**
- Produces: the token names and hex values that Task 5 implements verbatim, and the contrast pairs Task 5 tests.

- [ ] **Step 1: Write `docs/02_brand/BRAND.md`**

```markdown
# Crystal Accounting — Brand Reference

Derived from `docs/00_source/CA Logo.pdf` (2026-09-02). Vector fills sampled exactly; derived tones are marked.

## Palette

| Token | Hex | Role | Source |
|---|---|---|---|
| `--violet` | `#5E17EB` | Primary: buttons, links, accents, logo mark | logo mark fill |
| `--violet-strong` | `#4A11BC` | Hover/pressed state for violet | derived (darkened 20%) |
| `--violet-fill` | `#6022DB` | Large violet backgrounds (CTA band, dark panels) | deck slide backgrounds |
| `--navy` | `#001F3D` | Body text, headings, dark sections, wordmark | wordmark fill |
| `--navy-deep` | `#00152B` | Footer background | derived (darkened) |
| `--muted` | `#4A5B6E` | Secondary text on light backgrounds | derived grey-blue |
| `--on-dark-muted` | `#B9C4D1` | Secondary text on navy | derived |
| `--lavender` | `#EBE3FA` | Light tinted panels, body text on dark | deck card backgrounds |
| `--lilac` | `#C6B1F2` | Eyebrows and accents on dark, decorative | deck accents |
| `--soft` | `#F6F3FC` | Alternate light section background | derived from lavender |
| `--line` | `#DCD3EE` | Borders and dividers on light | derived |
| `--white` | `#FFFFFF` | Ground | |
| `--error` / `--error-bg` | `#852828` / `#FFF0F0` | Form error text/background | unchanged |

Black is not used anywhere. Where the brief said "black", use `--navy`.

## Contrast (WCAG 2.1 AA)

| Foreground | Background | Ratio | Use |
|---|---|---|---|
| `--navy` | `--white` | 16.6:1 | body text |
| `--muted` | `--white` | 6.9:1 | secondary text |
| `--violet` | `--white` | 7.5:1 | links, eyebrows |
| `--white` | `--violet` | 7.5:1 | button labels |
| `--white` | `--violet-fill` | 7.6:1 | CTA band text |
| `--white` | `--navy` | 16.6:1 | dark-section headings |
| `--lavender` | `--navy` | 13:1 | dark-section body |
| `--lilac` | `--navy` | 8.7:1 | dark-section eyebrows |
| `--on-dark-muted` | `--navy-deep` | 10:1 | footer copy |
| `--navy` | `--lavender` | 13:1 | text on tinted panels |

All pairs pass 4.5:1. Ratios are enforced by `src/lib/__tests__/tokens.test.ts`.

## Typography

| Role | Face | Weights | Notes |
|---|---|---|---|
| Display (`h1`, `h2`, blockquotes) | Frank Ruhl Libre | 400, 500, 700 | serif from the wordmark |
| Body, `h3`, eyebrows, buttons, nav, tables | Montserrat | 400, 500, 600, 700 | deck heading face; substitutes Glacial Indifference |

Both are self-hosted through `next/font/google`. Eyebrows: Montserrat 700, uppercase, `letter-spacing: .16em`.

## Logo

| File | Use |
|---|---|
| `public/brand/logo-horizontal.svg` | Header on light backgrounds |
| `public/brand/logo-horizontal-white.svg` | Footer and any navy/violet background |
| `public/brand/logo-full.svg` | Stacked; social image, print, large hero placements |
| `public/brand/logo-full-white.svg` | Stacked on dark |
| `public/brand/logo-mark.svg` | Favicon, decorative motif, small squares |

Rules: keep clear space of at least the mark's base-bar height on all sides; never recolor beyond the violet/navy or all-white variants; never rotate; minimum header height 40px for the horizontal lockup.

## Motif

The triangle mark (outer triangle, inner cut-out, base bar) is the only decorative shape. Rotated squares and circles from the earlier design are retired.

## Do / Don't (from the overview and deck)

- Do: spacious layouts, strong hierarchy, one clear heading per page, prominent contact actions.
- Don't: dated effects, continuous-scroll gimmicks, dense pages, side navigation, decorative gradients, glassmorphism, text over busy images.
```

- [ ] **Step 2: Commit**

```bash
git add docs/02_brand/BRAND.md
git commit -m "docs: add brand reference with palette, contrast, type, and logo rules"
```

---

### Task 4: Install Impeccable and create design context

**Files:**
- Create: `PRODUCT.md`, `DESIGN.md`, plus whatever `npx impeccable install` writes (expected under `.claude/` and `.impeccable/`)

**Interfaces:**
- Produces: `/impeccable` commands available in this repo; hooks that inspect UI edits from Task 5 onward.

- [ ] **Step 1: Install**

```bash
cd /Users/gunkimsong/GitRepo/crystal-account
node -v
npx impeccable install
git status --short
```
Expected: Node ≥ 22.12 (24.x present). Installer reports the Claude Code build installed. `git status` shows new files under `.claude/` (skills, hooks, settings) and possibly `.impeccable/`. If the installer asks which harness, choose Claude Code. If it asks to modify `.claude/settings.json` hooks, accept.

- [ ] **Step 2: Initialize design context**

In the agent chat run `/impeccable init`. Answer the interview from these facts:

- Product: English-only corporate website for Crystal Accounting, a Bangkok accounting firm serving foreign-owned Thai companies. Primary conversion: contact form. Secondary: pricing transparency.
- Users: foreign founders, English-speaking executives and finance teams, investors evaluating a long-term Thai accounting partner. Mode: evaluate/trust-building; reading on desktop and mobile.
- Brand voice: professional, plain-English, calm, dependable. Core promise "Deliver beyond expectations."
- Visual system: see `docs/02_brand/BRAND.md` (tell init to read it). Violet `#5E17EB`, navy `#001F3D`, white; Frank Ruhl Libre + Montserrat; triangle motif.
- Anti-references: generic AI purple-to-pink gradients, glassmorphism, dense dashboards, side-tab navigation, continuous-scroll gimmicks, long text over busy photos, decorative italics serif kickers.
- Platform: static Next.js site; no dark mode required.

- [ ] **Step 3: Check the generated files**

```bash
ls PRODUCT.md DESIGN.md
grep -n "5E17EB\|001F3D\|Frank Ruhl\|Montserrat" DESIGN.md
```
Expected: both files exist; DESIGN.md contains the four strings. If any is missing, edit DESIGN.md to add the palette and type tables from `BRAND.md` verbatim.

- [ ] **Step 4: Commit**

```bash
npm run lint && npm run build
git add -A .claude .impeccable PRODUCT.md DESIGN.md 2>/dev/null; git add -A
git status --short
git commit -m "chore: install impeccable and add PRODUCT.md and DESIGN.md design context"
```
Confirm `git status --short` lists only Impeccable-generated files, `PRODUCT.md`, and `DESIGN.md` before committing.

---

### Task 5: Replace design tokens, load CI fonts, add contrast tests

**Files:**
- Create: `vitest.config.ts`, `src/lib/contrast.ts`, `src/lib/__tests__/contrast.test.ts`, `src/lib/__tests__/tokens.test.ts`
- Modify: `package.json` (scripts, devDependencies), `src/app/globals.css` (`:root` block and every hardcoded hex), `src/app/layout.tsx`, `tsconfig.json` (exclude tests from Next build if needed)

**Interfaces:**
- Produces: CSS custom properties `--violet`, `--violet-strong`, `--violet-fill`, `--navy`, `--navy-deep`, `--muted`, `--on-dark-muted`, `--lavender`, `--lilac`, `--soft`, `--line`, `--white`, `--error`, `--error-bg`, `--font-display`, `--font-body`. Exported `contrastRatio(hexA: string, hexB: string): number` and `BRAND_TOKENS` record from `src/lib/contrast.ts`.
- Removes: `--purple`, `--purple-dark`, `--purple-mid`, `--ink` (replaced by `--navy`).

- [ ] **Step 1: Install Vitest and add the script**

```bash
npm install -D vitest@^3
```
Edit `package.json` scripts to:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "npx serve out",
  "lint": "eslint",
  "test": "vitest run"
}
```
Create `vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
    environment: "node",
  },
  resolve: {
    alias: { "@": new URL("./src", import.meta.url).pathname },
  },
});
```

- [ ] **Step 2: Write the failing contrast test**

`src/lib/__tests__/contrast.test.ts`:
```ts
import { describe, expect, test } from "vitest";
import { contrastRatio } from "@/lib/contrast";

describe("contrastRatio", () => {
  test("black on white is 21:1", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 0);
  });

  test("is symmetric", () => {
    expect(contrastRatio("#5E17EB", "#FFFFFF")).toBeCloseTo(contrastRatio("#FFFFFF", "#5E17EB"), 5);
  });

  test("violet on white passes AA for body text", () => {
    expect(contrastRatio("#5E17EB", "#FFFFFF")).toBeGreaterThan(4.5);
  });

  test("rejects malformed hex", () => {
    expect(() => contrastRatio("5E17EB", "#FFFFFF")).toThrow(/hex/i);
  });
});
```

- [ ] **Step 3: Run it to verify it fails**

```bash
npm test
```
Expected: FAIL, cannot resolve `@/lib/contrast`.

- [ ] **Step 4: Implement `src/lib/contrast.ts`**

```ts
const HEX_PATTERN = /^#([0-9a-f]{6})$/i;
const SRGB_THRESHOLD = 0.03928;
const LUMINANCE_OFFSET = 0.05;

export const BRAND_TOKENS = {
  violet: "#5E17EB",
  violetStrong: "#4A11BC",
  violetFill: "#6022DB",
  navy: "#001F3D",
  navyDeep: "#00152B",
  muted: "#4A5B6E",
  onDarkMuted: "#B9C4D1",
  lavender: "#EBE3FA",
  lilac: "#C6B1F2",
  soft: "#F6F3FC",
  line: "#DCD3EE",
  white: "#FFFFFF",
  error: "#852828",
  errorBg: "#FFF0F0",
} as const;

const channelToLinear = (channel: number): number => {
  const scaled = channel / 255;
  return scaled <= SRGB_THRESHOLD ? scaled / 12.92 : ((scaled + 0.055) / 1.055) ** 2.4;
};

const relativeLuminance = (hex: string): number => {
  const match = HEX_PATTERN.exec(hex);
  if (!match) throw new Error(`Expected a 6-digit hex color like #5E17EB, received "${hex}"`);
  const value = parseInt(match[1], 16);
  const red = channelToLinear((value >> 16) & 0xff);
  const green = channelToLinear((value >> 8) & 0xff);
  const blue = channelToLinear(value & 0xff);
  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
};

export const contrastRatio = (hexA: string, hexB: string): number => {
  const [lighter, darker] = [relativeLuminance(hexA), relativeLuminance(hexB)].sort((a, b) => b - a);
  return (lighter + LUMINANCE_OFFSET) / (darker + LUMINANCE_OFFSET);
};
```

- [ ] **Step 5: Run tests to verify they pass**

```bash
npm test
```
Expected: 4 passed.

- [ ] **Step 6: Write the failing token-pair test**

`src/lib/__tests__/tokens.test.ts`:
```ts
import { describe, expect, test } from "vitest";
import { readFileSync } from "node:fs";
import { BRAND_TOKENS, contrastRatio } from "@/lib/contrast";

const AA_BODY = 4.5;

const pairs: [keyof typeof BRAND_TOKENS, keyof typeof BRAND_TOKENS][] = [
  ["navy", "white"],
  ["muted", "white"],
  ["violet", "white"],
  ["white", "violet"],
  ["white", "violetFill"],
  ["white", "navy"],
  ["lavender", "navy"],
  ["lilac", "navy"],
  ["onDarkMuted", "navyDeep"],
  ["navy", "lavender"],
  ["muted", "soft"],
  ["error", "errorBg"],
];

describe("brand token contrast", () => {
  test.each(pairs)("%s on %s meets AA body text", (fg, bg) => {
    expect(contrastRatio(BRAND_TOKENS[fg], BRAND_TOKENS[bg])).toBeGreaterThanOrEqual(AA_BODY);
  });
});

describe("globals.css uses tokens", () => {
  const css = readFileSync(new URL("../../app/globals.css", import.meta.url), "utf8");
  const rootBlock = css.slice(css.indexOf(":root"), css.indexOf("}", css.indexOf(":root")));
  const body = css.replace(rootBlock, "");

  test("root defines every brand token", () => {
    for (const [name, hex] of Object.entries(BRAND_TOKENS)) {
      const cssName = `--${name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`;
      expect(rootBlock.toLowerCase()).toContain(`${cssName}: ${hex.toLowerCase()}`);
    }
  });

  test("no hardcoded hex colors outside :root", () => {
    expect(body.match(/#[0-9a-f]{3,6}\b/gi) ?? []).toEqual([]);
  });

  test("retired tokens are gone", () => {
    expect(css).not.toMatch(/--purple|--ink\b/);
  });
});
```

- [ ] **Step 7: Run it to verify it fails**

```bash
npm test
```
Expected: `root defines every brand token`, `no hardcoded hex colors outside :root`, and `retired tokens are gone` FAIL; the contrast pairs pass.

- [ ] **Step 8: Rewrite the `:root` block in `src/app/globals.css`**

Replace lines 1–14 with:
```css
:root {
  --violet: #5e17eb;
  --violet-strong: #4a11bc;
  --violet-fill: #6022db;
  --navy: #001f3d;
  --navy-deep: #00152b;
  --muted: #4a5b6e;
  --on-dark-muted: #b9c4d1;
  --lavender: #ebe3fa;
  --lilac: #c6b1f2;
  --soft: #f6f3fc;
  --line: #dcd3ee;
  --white: #ffffff;
  --error: #852828;
  --error-bg: #fff0f0;
}
```
`--font-body` and `--font-display` are no longer declared here; `next/font` sets them on `<html>` in Step 10.

- [ ] **Step 9: Replace every color reference in the rest of `globals.css`**

Apply this mapping with `sed` and then hand-check the remaining ones:

```bash
cd /Users/gunkimsong/GitRepo/crystal-account
f=src/app/globals.css
sed -E -i '' \
  -e 's/var\(--purple-dark\)/var(--navy)/g' \
  -e 's/var\(--purple-mid\)/var(--violet-strong)/g' \
  -e 's/var\(--purple\)/var(--violet)/g' \
  -e 's/var\(--ink\)/var(--navy)/g' \
  -e 's/#18121d/var(--navy-deep)/g' \
  -e 's/#(d9cee4|d2c6db|d2c6dd|d0c3da|cfc4d7|cfc4d9|cbbbdc)/var(--lavender)/g' \
  -e 's/#(c9b5e4|cebce4|bca5d6|bbaaca|b99bd9|b18be1)/var(--lilac)/g' \
  -e 's/#(57505c|514a57|4f4954|4e4853|403a44)/var(--muted)/g' \
  -e 's/#(aaa0ae|a99ead|d5ced9|8e8492)/var(--on-dark-muted)/g' \
  -e 's/#(403747|372f3c)/rgba(255,255,255,.14)/g' \
  -e 's/#(c9bcd7|cfc9d3|ded9e2)/var(--line)/g' \
  -e 's/#fff0f0/var(--error-bg)/g' \
  -e 's/#852828/var(--error)/g' \
  -e 's/linear-gradient\(135deg, #e9e1f1, #c8b2de\)/linear-gradient(135deg, var(--lavender), var(--lilac))/' \
  -e 's/rgba\(77,42,110,\.24\)/rgba(0,31,61,.24)/g' \
  -e 's/rgba\(40,20,60,\.08\)/rgba(0,31,61,.08)/g' \
  -e 's/rgba\(28,16,36,\.17\)/rgba(0,31,61,.17)/g' \
  -e 's/rgba\(134,92,180,\.17\)/rgba(255,255,255,.08)/' \
  -e 's/rgba\(150,111,193,\.45\), rgba\(70,36,102,\.6\)/rgba(94,23,235,.55), rgba(0,31,61,.6)/' \
  "$f"
grep -nE '#[0-9a-fA-F]{3,6}\b' "$f" | grep -v '^[0-9]*:  --'
```
Expected: the final grep prints nothing. Any survivor gets mapped by hand to the nearest token from the table in `BRAND.md`.

Then make these targeted edits:
- `.ctaBand { background: var(--violet); … }` → `background: var(--violet-fill);`
- `.button:hover { background: var(--navy); border-color: var(--navy); … }` → `background: var(--violet-strong); border-color: var(--violet-strong);`
- `.buttonLight { … color: var(--navy); }` stays navy (on white). `.buttonLight:hover { background: var(--lavender); border-color: var(--lavender); }` unchanged.
- Focus ring: `outline: 3px solid var(--lilac)` → `outline: 3px solid var(--violet)`. Add after it:
  `.homeHero :focus-visible, .differenceSection :focus-visible, .ctaBand :focus-visible, .serviceHero :focus-visible, .contactPage :focus-visible, .statementPanel :focus-visible, .siteFooter :focus-visible { outline-color: var(--white); }`
- `.siteFooter .logoMark` and `.siteFooter .logoText small` rules: delete (component removed in Task 6).
- `.eyebrow.light { color: var(--lilac); }` (should already be that after sed; confirm).

- [ ] **Step 10: Load fonts in `src/app/layout.tsx`**

Replace the file with:
```tsx
import type { Metadata, Viewport } from "next";
import { Frank_Ruhl_Libre, Montserrat } from "next/font/google";
import { AnalyticsConsent } from "@/components/AnalyticsConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const displayFont = Frank_Ruhl_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Crystal Accounting | Accounting Firm in Thailand",
    template: "%s | Crystal Accounting",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_TH",
    siteName: siteConfig.name,
    title: "Crystal Accounting | Clarity for your business in Thailand",
    description: siteConfig.description,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#001F3D",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <a className="skipLink" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
```

- [ ] **Step 11: Apply the type roles in `globals.css`**

- `body { … font-family: var(--font-body); … }` unchanged (now resolves to Montserrat).
- `h1, h2, h3 { font-family: var(--font-display); font-weight: 600; letter-spacing: -.045em; … }` → split:
  `h1, h2 { font-family: var(--font-display); font-weight: 500; letter-spacing: -.015em; line-height: 1.08; }`
  `h3 { font-family: var(--font-body); font-weight: 600; letter-spacing: -.01em; line-height: 1.2; }`
- `.heroCopy h1 em { color: var(--lilac); font-family: var(--font-display); font-style: italic; font-weight: 400; }` (replace the `Georgia, serif` fallback).
- `.outcomeGrid strong`, `.faqList summary`, `.logoText strong` (the last is deleted in Task 6): change `font-family: var(--font-display)` → `var(--font-body)`; `.statementPanel blockquote` keeps `var(--font-display)`.
- `.footerGrid > div > h2 { … font-family: var(--font-body); … }` unchanged.

- [ ] **Step 12: Run tests, lint, build**

```bash
npm test && npm run lint && npm run build
```
Expected: all tests pass (including `no hardcoded hex colors outside :root`); build succeeds and the `.next` output includes downloaded font files (grep `out/_next/static/media` for `.woff2`).

If `next build` type-checks `vitest.config.ts` or test files and fails, add `"exclude": ["node_modules", "src/**/*.test.ts", "vitest.config.ts"]` to `tsconfig.json`.

- [ ] **Step 13: Screenshot check**

Run `npm run dev` in the background, open `http://localhost:3000/` in Chrome via the browser tools, take a screenshot of the hero and the services section, and confirm: violet buttons, navy hero background, serif `h1`, Montserrat body. Stop the dev server.

- [ ] **Step 14: Commit**

```bash
git add package.json package-lock.json vitest.config.ts tsconfig.json src/lib/contrast.ts src/lib/__tests__ src/app/globals.css src/app/layout.tsx
git commit -m "feat: adopt CI palette tokens and Frank Ruhl Libre + Montserrat fonts with contrast tests"
```

---

### Task 6: Real logo component and triangle motif

**Files:**
- Modify: `src/components/Logo.tsx`, `src/components/Footer.tsx:10`, `src/app/page.tsx` (hero graphic block), `src/app/globals.css` (`.logo*`, `.crystal*`, `.differenceSection::after`, `.articleVisual::before/::after`, `.checkList li::before`, `.resultIcon`)

**Interfaces:**
- Consumes: `public/brand/logo-horizontal.svg`, `logo-horizontal-white.svg`, `logo-mark.svg` from Task 2.
- Produces: `Logo({ variant?: "color" | "white" })` component.

- [ ] **Step 1: Rewrite `src/components/Logo.tsx`**

```tsx
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "color" | "white";
};

const LOGO_WIDTH = 160;
const LOGO_HEIGHT = 44;

export function Logo({ variant = "color" }: LogoProps) {
  const src = variant === "white" ? "/brand/logo-horizontal-white.svg" : "/brand/logo-horizontal.svg";
  return (
    <Link href="/" className="logo" aria-label="Crystal Accounting home">
      <Image src={src} alt="" width={LOGO_WIDTH} height={LOGO_HEIGHT} priority />
    </Link>
  );
}
```
Adjust `LOGO_WIDTH` so that `width/height` matches the SVG's `viewBox` aspect ratio (read it from the file; e.g. a `viewBox="0 0 720 200"` gives 3.6:1 → width 158 at height 44). A mismatch stretches the logo.

- [ ] **Step 2: Footer uses the white variant**

In `src/components/Footer.tsx` change `<Logo />` to `<Logo variant="white" />`.

- [ ] **Step 3: Replace logo CSS**

In `globals.css` delete the rules `.logoMark`, `.logoMark span`, `.logoText`, `.logoText strong`, `.logoText small`, and the 620px-breakpoint rules for `.logoMark`, `.logoMark span`, `.logoText strong`. Replace `.logo { … }` with:
```css
.logo { align-items: center; display: inline-flex; }
.logo img { display: block; height: 44px; width: auto; }
```
and in the `max-width: 620px` block add `.logo img { height: 38px; }`.

- [ ] **Step 4: Triangle motif in the home hero**

In `src/app/page.tsx` replace the `heroGraphic` block with:
```tsx
<div className="heroGraphic" aria-hidden="true">
  <div className="triangle triangleBack" />
  <div className="triangle triangleFront">
    <span>BEYOND</span>
    <strong>EXPECTED</strong>
  </div>
  <div className="heroNote">Based in Thailand<br />Working in English</div>
</div>
```
In `globals.css` delete `.crystal`, `.crystalBack`, `.crystalFront`, `.crystalFront::before/::after`, `.crystalFront span, .crystalFront strong`, `.crystalFront span`, `.crystalFront strong`. Add:
```css
.triangle { clip-path: polygon(50% 0, 100% 100%, 0 100%); height: 300px; position: absolute; width: 340px; }
.triangleBack { background: rgba(255,255,255,.08); right: -40px; top: 10px; }
.triangleFront { align-items: center; background: linear-gradient(160deg, rgba(94,23,235,.85), rgba(96,34,219,.55)); display: flex; flex-direction: column; justify-content: flex-end; padding-bottom: 46px; right: 70px; top: 90px; }
.triangleFront span, .triangleFront strong { letter-spacing: .16em; }
.triangleFront span { font-size: .67rem; margin-bottom: 8px; }
.triangleFront strong { font-size: 1.15rem; font-weight: 600; }
```

- [ ] **Step 5: Retire remaining rotated-square decorations**

- `.differenceSection::after`: replace `transform: rotate(45deg); border: 1px solid rgba(255,255,255,.08);` with `background: rgba(255,255,255,.05); clip-path: polygon(50% 0, 100% 100%, 0 100%);` and remove the `border` declaration.
- `.articleVisual::before, .articleVisual::after`: replace `border: 1px solid rgba(0,31,61,.24); … transform: rotate(45deg);` with `background: rgba(94,23,235,.12); clip-path: polygon(50% 0, 100% 100%, 0 100%);`, drop `transform`.
- `.checkList li::before`: replace `transform: rotate(45deg);` with `border-radius: 50%;`.
- `.resultIcon`: remove `transform: rotate(45deg);`, add `border-radius: 50%;`.
- `.heroOrb`, `.orbOne`, `.orbTwo` rules and the two `<div className="heroOrb …" />` elements in `page.tsx`: delete.

- [ ] **Step 6: Test, lint, build, screenshot**

```bash
npm test && npm run lint && npm run build
```
Then `npm run dev`, screenshot `/` (header, hero) and scroll to the footer; confirm the real logo renders at 44px in the header, white in the footer, and the hero shows two triangles. Stop the dev server.

- [ ] **Step 7: Commit**

```bash
git add src/components/Logo.tsx src/components/Footer.tsx src/app/page.tsx src/app/globals.css
git commit -m "feat: render extracted logo and replace diamond decorations with the triangle motif"
```

---

### Task 7: Realign services to the deck (five services) and split the content module

**Files:**
- Create: `src/lib/services.ts`, `src/lib/articles.ts`, `src/lib/__tests__/services.test.ts`
- Modify: `src/lib/site.ts` (keep `siteConfig`, `formatDate`; re-export), `src/app/services/page.tsx:8-9`, `src/app/contact/page.tsx:7`, `src/components/Footer.tsx:24`

**Interfaces:**
- Consumes: `docs/00_source/company-profile.md` (Page 5 bullets).
- Produces: `services: Service[]` with exactly the slugs `accounting-compliance`, `audit-assurance`, `tax-advisory`, `payroll-services`, `company-setup`, in that order. `Service` type unchanged. `import { services } from "@/lib/site"` keeps working via re-export.

- [ ] **Step 1: Write the failing test**

`src/lib/__tests__/services.test.ts`:
```ts
import { describe, expect, test } from "vitest";
import { services } from "@/lib/services";

const EXPECTED_SLUGS = ["accounting-compliance", "audit-assurance", "tax-advisory", "payroll-services", "company-setup"];

describe("services", () => {
  test("has exactly the five approved slugs in order", () => {
    expect(services.map((s) => s.slug)).toEqual(EXPECTED_SLUGS);
  });

  test("every service has complete content", () => {
    for (const service of services) {
      expect(service.title.length).toBeGreaterThan(10);
      expect(service.shortTitle.length).toBeGreaterThan(3);
      expect(service.description.length).toBeGreaterThan(40);
      expect(service.intro.length).toBeGreaterThan(40);
      expect(service.outcomes).toHaveLength(3);
      expect(service.includes.length).toBeGreaterThanOrEqual(4);
      expect(service.process).toHaveLength(3);
      expect(service.faqs.length).toBeGreaterThanOrEqual(2);
    }
  });

  test("uses the deck's filing references", () => {
    const text = JSON.stringify(services);
    for (const term of ["PP30", "PND 1, 3, 53", "PND 50", "PND 51", "DBD", "BOI", "FBL", "SSO"]) {
      expect(text).toContain(term);
    }
  });
});
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test
```
Expected: FAIL, cannot resolve `@/lib/services`.

- [ ] **Step 3: Create `src/lib/services.ts`**

```ts
export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  intro: string;
  outcomes: string[];
  includes: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "accounting-compliance",
    title: "Accounting & Compliance Services in Thailand",
    shortTitle: "Accounting & Compliance",
    eyebrow: "Accurate records. Filed on time.",
    description:
      "Monthly bookkeeping under Thai GAAP / TFRS, VAT and withholding tax filings, social security submissions, and annual financial statements for foreign-owned companies in Thailand.",
    intro:
      "One English-speaking team keeps your books current, files every monthly return, and prepares the annual financial statements the Department of Business Development requires.",
    outcomes: ["Reliable monthly close", "Every filing on schedule", "Clear financial visibility"],
    includes: [
      "Monthly bookkeeping (Thai GAAP / TFRS)",
      "Monthly VAT filing (PP30)",
      "Withholding tax filing (PND 1, 3, 53)",
      "Payroll & Social Security (SSO) submission",
      "Financial statement preparation and DBD submission",
      "Monthly management reports explained in English",
    ],
    process: [
      { title: "Understand", description: "We review your operations, transaction volume, systems, and reporting priorities." },
      { title: "Organize", description: "We agree a document flow, a monthly closing date, and who approves each filing." },
      { title: "Deliver", description: "We keep the books, submit each return, flag issues early, and explain the reports." },
    ],
    faqs: [
      { question: "How are monthly fees set?", answer: "Fees follow the number of transactions per month. See the published fee schedule on our Pricing page; the final fee is confirmed before service starts." },
      { question: "Can you work with a foreign-owned Thai company?", answer: "Yes. The service is designed for international owners who need local compliance handled with clear English communication." },
    ],
  },
  {
    slug: "audit-assurance",
    title: "Audit & Assurance Services in Thailand",
    shortTitle: "Audit & Assurance",
    eyebrow: "Statutory audit, coordinated end to end.",
    description:
      "Statutory annual audit by a licensed CPA, interim audit support, and coordination of submissions to the DBD and Revenue Department for Thailand-registered companies.",
    intro:
      "We prepare your records, conduct or coordinate the statutory audit with a licensed CPA, and see the audited statements through to submission.",
    outcomes: ["Audit completed on time", "Audit-ready records", "Filings submitted to DBD & RD"],
    includes: [
      "Statutory annual audit (by licensed CPA)",
      "Interim audit support",
      "Audit coordination and submission to DBD & RD",
      "Audit readiness review and lead schedules",
      "Resolution tracking for audit questions",
      "Post-audit recommendations",
    ],
    process: [
      { title: "Review", description: "We assess your records and identify missing or unusual items before fieldwork." },
      { title: "Audit", description: "The licensed CPA performs the audit while we resolve questions with your team." },
      { title: "Submit", description: "We coordinate the audited statements and filings with the DBD and Revenue Department." },
    ],
    faqs: [
      { question: "Does every Thai company need an annual audit?", answer: "Thailand-registered companies must file audited financial statements annually. We confirm the exact requirement for your entity." },
      { question: "How is the audit fee determined?", answer: "Audit fees are based on annual revenue bands. The current schedule is published on our Pricing page." },
    ],
  },
  {
    slug: "tax-advisory",
    title: "Tax Advisory & Corporate Tax Filing in Thailand",
    shortTitle: "Tax Advisory",
    eyebrow: "Plan ahead. File with confidence.",
    description:
      "Corporate income tax filing (PND 50, 51), tax planning and optimization, VAT registration, and BOI compliance advice for international businesses in Thailand.",
    intro:
      "Tax decisions should happen before a deadline. We file your half-year and annual corporate income tax returns and help you plan responsibly around them.",
    outcomes: ["PND 50 and PND 51 filed on time", "Earlier tax visibility", "Practical planning options"],
    includes: [
      "Corporate income tax filing (PND 50, 51)",
      "Tax planning and optimization",
      "VAT registration & deregistration",
      "BOI compliance and tax incentives advisory",
      "Transaction and contract tax review",
      "Support with Revenue Department questions",
    ],
    process: [
      { title: "Assess", description: "We understand the transaction, facts, goals, and current tax position." },
      { title: "Advise", description: "We explain the relevant considerations and practical options in plain English." },
      { title: "File", description: "We prepare and submit the returns and keep the supporting analysis on record." },
    ],
    faqs: [
      { question: "What do PND 50 and PND 51 cost?", answer: "The half-year return (PND 51) and full-year return (PND 50) are fixed fees listed on our Pricing page." },
      { question: "Can you advise before we sign a contract?", answer: "Yes. Early review gives more room to identify tax implications and options." },
    ],
  },
  {
    slug: "payroll-services",
    title: "Payroll Services in Thailand",
    shortTitle: "Payroll Services",
    eyebrow: "On time, accurate, confidential.",
    description:
      "Monthly payroll calculation, payslips, withholding tax (PND 1), and Social Security (SSO) submissions for companies employing staff in Thailand.",
    intro:
      "A dependable monthly payroll cycle that keeps management informed, meets Thai withholding and social security deadlines, and handles employee information carefully.",
    outcomes: ["Consistent payroll cycles", "PND 1 and SSO submitted monthly", "Less administration"],
    includes: [
      "Monthly payroll calculations and payslips",
      "Withholding tax on salaries (PND 1)",
      "Social Security (SSO) registration and monthly submission",
      "Joiner and leaver updates",
      "Annual withholding certificates (50 Tawi)",
      "Payroll reports for management review",
    ],
    process: [
      { title: "Set up", description: "We confirm employee data, policies, deadlines, and approval roles." },
      { title: "Process", description: "We calculate the payroll and send reports for authorized review." },
      { title: "Submit", description: "We file PND 1 and SSO and maintain an organized monthly record." },
    ],
    faqs: [
      { question: "Can you support a small international team?", answer: "Yes. We tailor the process to your headcount and reporting needs." },
      { question: "How is payroll information protected?", answer: "Access and delivery are agreed with authorized contacts to limit exposure of confidential employee data." },
    ],
  },
  {
    slug: "company-setup",
    title: "Company Setup & Assistance Services in Thailand",
    shortTitle: "Company Setup & Assistance",
    eyebrow: "From registration to first invoice.",
    description:
      "Company registration with the DBD, e-Tax invoice and e-Receipt registration, POS setup for retail, and Foreign Business License (FBL) advisory for foreign investors in Thailand.",
    intro:
      "Start operating with the right structure, registrations, and systems in place, guided in English by a team that stays on as your accountant.",
    outcomes: ["Company registered with the DBD", "Tax and e-invoicing registrations complete", "Ready to trade"],
    includes: [
      "Company registration with DBD",
      "e-Tax invoice & e-Receipt registration",
      "POS system setup for retail businesses",
      "FBL (Foreign Business License) advisory",
      "VAT and tax ID registration",
      "Bank account and initial compliance calendar setup",
    ],
    process: [
      { title: "Plan", description: "We confirm shareholders, capital, licences, and the registrations your business model needs." },
      { title: "Register", description: "We prepare and file the DBD registration and follow-on tax registrations." },
      { title: "Launch", description: "We set up invoicing and POS where needed and hand over to monthly accounting." },
    ],
    faqs: [
      { question: "Do foreign owners need a Foreign Business License?", answer: "It depends on ownership structure and business activity. We assess whether an FBL or an alternative route applies." },
      { question: "Can you continue as our accountant after setup?", answer: "Yes. Most clients move straight into our monthly Accounting & Compliance service." },
    ],
  },
];
```

- [ ] **Step 4: Create `src/lib/articles.ts` and slim `src/lib/site.ts`**

Move the `Article` type and `articles` array from `site.ts` lines 166–216 into `src/lib/articles.ts` unchanged (add `export` to both). Then replace `site.ts` with:
```ts
export const siteConfig = {
  name: "Crystal Accounting",
  legalName: "Crystal Accounting Company Limited",
  description:
    "English-speaking accounting, tax, audit, payroll, and company setup services for international businesses in Thailand.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://crystalaccounting.co.th",
  email: "info@crystalaccounting.co.th",
  phone: "+66 91 626 6241",
  phoneHref: "tel:+66916266241",
  address: ["33/65 Soi Nawamin 85, Intersection 2-1", "Nawamin Subdistrict, Bueng Kum District", "Bangkok 10240"],
  taxId: "0105568012538",
};

export { services, type Service } from "./services";
export { articles, type Article } from "./articles";

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00Z`));
```

- [ ] **Step 5: Update page copy that names the old services**

- `src/app/services/page.tsx` metadata description → `"Accounting and compliance, audit and assurance, tax advisory, payroll, and company setup services for international businesses in Thailand."`
- `src/app/contact/page.tsx` metadata description → `"Talk to Crystal Accounting about accounting, audit, tax, payroll, or company setup support in Thailand."`
- `src/components/Footer.tsx` line 24: `services.slice(0, 4)` → `services` (all five fit).
- Search for any other reference: `grep -rn "corporate-compliance\|Corporate Compliance\|accounting-bookkeeping\|audit-services\|tax-consulting" src/` must return nothing after edits.

- [ ] **Step 6: Run tests, lint, build**

```bash
npm test && npm run lint && npm run build
```
Expected: services tests pass; build lists `/services/accounting-compliance`, `/services/audit-assurance`, `/services/tax-advisory`, `/services/payroll-services`, `/services/company-setup` and no `/services/corporate-compliance`.

- [ ] **Step 7: Commit**

```bash
git add src/lib src/app/services/page.tsx src/app/contact/page.tsx src/components/Footer.tsx
git commit -m "feat: align services with company profile and split content modules"
```

---

### Task 7: About, Contact, and Footer content from the deck

**Files:**
- Modify: `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/components/Footer.tsx`, `src/app/globals.css` (add `.factList`, `.tagList` rules)

**Interfaces:**
- Consumes: `siteConfig.email`, `siteConfig.phone`, `siteConfig.phoneHref`, `siteConfig.address`, `siteConfig.taxId`, `siteConfig.legalName` from Task 7; deck text from `docs/00_source/company-profile.md`.

- [ ] **Step 1: Rewrite `src/app/about/page.tsx`**

```tsx
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
```

- [ ] **Step 2: Add the supporting CSS**

Append to `globals.css` before the first `@media` block:
```css
.valueGridFive { grid-template-columns: repeat(5, 1fr); }
.valueGridFive h3 { font-size: 1.35rem; margin-top: 55px; }
.tagList { display: flex; flex-wrap: wrap; gap: 10px; list-style: none; margin-top: 28px; }
.tagList li { border: 1px solid var(--line); color: var(--navy); font-size: .82rem; font-weight: 600; padding: 9px 14px; }
.factList { list-style: none; padding-top: 44px; }
.factList li { border-bottom: 1px solid var(--line); color: var(--muted); font-size: 1rem; padding: 16px 0; }
```
In the `max-width: 900px` block add `.valueGridFive { grid-template-columns: 1fr 1fr; }` and in the `max-width: 620px` block add `.valueGridFive { grid-template-columns: 1fr; }`.

- [ ] **Step 3: Update `src/app/contact/page.tsx` direct-contact block**

Replace the `contactDirect` div with:
```tsx
<div className="contactDirect">
  <span>Email</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
  <span>Phone</span><a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
  <span>Office</span>
  <address>{siteConfig.address.map((line) => <span key={line}>{line}<br /></span>)}</address>
</div>
```
Add to `globals.css`: `.contactDirect address { font-style: normal; line-height: 1.6; }`.

- [ ] **Step 4: Update `src/components/Footer.tsx` intro block**

```tsx
<div className="footerIntro">
  <Logo variant="white" />
  <p>Let us take care of your company, so you can focus on growing your business in Thailand.</p>
  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
  <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
  <address>{siteConfig.address.join(", ")}</address>
</div>
```
and in `footerBottom`:
```tsx
<p>© {new Date().getFullYear()} {siteConfig.legalName}. Tax ID {siteConfig.taxId}. All rights reserved.</p>
```
Add `.footerIntro address { color: var(--on-dark-muted); font-size: .8rem; font-style: normal; line-height: 1.6; margin-top: 12px; }` to `globals.css`.

- [ ] **Step 5: Test, lint, build, screenshot**

```bash
npm test && npm run lint && npm run build
```
Dev server → screenshot `/about/` desktop and at 390px width; confirm the five value cards, tag list, and industries list render without overflow. Stop the dev server.

- [ ] **Step 6: Commit**

```bash
git add src/app/about/page.tsx src/app/contact/page.tsx src/components/Footer.tsx src/app/globals.css
git commit -m "feat: add vision, values, countries, industries, and official contact details from the company profile"
```

---

### Task 7: Pricing page with the fee schedule

**Files:**
- Create: `src/lib/fees.ts`, `src/lib/__tests__/fees.test.ts`, `src/components/FeeTable.tsx`, `src/app/pricing/page.tsx`
- Modify: `src/components/Header.tsx:8-13`, `src/app/sitemap.ts:7`, `src/components/Footer.tsx` (Explore links), `src/app/globals.css` (table rules)

**Interfaces:**
- Consumes: `docs/00_source/service-fees.md`.
- Produces: `FeeRow = { label: string; amount: number | null }`, `FeeTable = { id: string; title: string; description: string; columns: [string, string]; rows: FeeRow[]; notes: string[] }`, `feeTables: FeeTable[]`, `feeDisclaimer: string`, `feesUpdated: string`, `formatThb(amount: number | null): string`.

- [ ] **Step 1: Write the failing test**

`src/lib/__tests__/fees.test.ts`:
```ts
import { describe, expect, test } from "vitest";
import { feeDisclaimer, feesUpdated, feeTables, formatThb } from "@/lib/fees";

describe("formatThb", () => {
  test("formats thousands with separators and two decimals", () => {
    expect(formatThb(3500)).toBe("3,500.00");
    expect(formatThb(10250)).toBe("10,250.00");
  });
  test("renders null as by case", () => {
    expect(formatThb(null)).toBe("By case");
  });
});

describe("feeTables", () => {
  test("has the four published tables in order", () => {
    expect(feeTables.map((t) => t.id)).toEqual(["monthly-accounting", "annual-tax-filing", "audit", "yearly-accounting"]);
  });

  test("monthly accounting has 10 rows from 3,500 to by case", () => {
    const monthly = feeTables[0];
    expect(monthly.rows).toHaveLength(10);
    expect(monthly.rows[0]).toEqual({ label: "Less than 10 transactions", amount: 3500 });
    expect(monthly.rows[9]).toEqual({ label: "More than 300 transactions", amount: null });
  });

  test("audit has 12 rows from 8,000 to by case", () => {
    const audit = feeTables[2];
    expect(audit.rows).toHaveLength(12);
    expect(audit.rows[0].amount).toBe(8000);
    expect(audit.rows[10].amount).toBe(50000);
    expect(audit.rows[11].amount).toBeNull();
  });

  test("priced rows never decrease within a banded table", () => {
    for (const table of feeTables.filter((t) => t.id !== "yearly-accounting")) {
      const amounts = table.rows.map((r) => r.amount).filter((a): a is number => a !== null);
      const sorted = [...amounts].sort((a, b) => a - b);
      expect(amounts).toEqual(sorted);
    }
  });

  test("yearly package sums to 21,000", () => {
    const yearly = feeTables[3];
    expect(yearly.rows.reduce((sum, r) => sum + (r.amount ?? 0), 0)).toBe(21000);
  });

  test("disclaimer and update date are present", () => {
    expect(feeDisclaimer).toMatch(/preliminary estimates only/);
    expect(feesUpdated).toBe("1/10/2025");
  });
});
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test
```
Expected: FAIL, cannot resolve `@/lib/fees`.

- [ ] **Step 3: Create `src/lib/fees.ts`**

```ts
export type FeeRow = { label: string; amount: number | null };

export type FeeTable = {
  id: string;
  title: string;
  description: string;
  columns: [string, string];
  rows: FeeRow[];
  notes: string[];
};

const BY_CASE_LABEL = "By case";

const thbFormatter = new Intl.NumberFormat("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const formatThb = (amount: number | null): string =>
  amount === null ? BY_CASE_LABEL : thbFormatter.format(amount);

export const feesUpdated = "1/10/2025";

export const feeDisclaimer =
  "The rates shown in this table are preliminary estimates only. The final service fee to be charged before the commencement of service will be based on the discussion and agreement reached. Crystal Accounting will issue an invoice for the final net amount accordingly.";

export const feeTables: FeeTable[] = [
  {
    id: "monthly-accounting",
    title: "Monthly Accounting Service Fee",
    description:
      "Our accounting service includes monthly bookkeeping and preparation of financial records, preparation and submission of monthly tax filings (e.g. VAT, withholding tax), annual financial statement preparation and submission to the Department of Business Development (DBD), and monthly submission of Social Security Fund. Fees are structured based on the number of transactions per month. Fees may vary depending on the complexity of each company.",
    columns: ["Number of bills per month", "Service fee (THB)"],
    rows: [
      { label: "Less than 10 transactions", amount: 3500 },
      { label: "11 - 30 transactions", amount: 5000 },
      { label: "31 - 50 transactions", amount: 6500 },
      { label: "51 - 70 transactions", amount: 8000 },
      { label: "71 - 100 transactions", amount: 10250 },
      { label: "101 - 150 transactions", amount: 14000 },
      { label: "151 - 200 transactions", amount: 17750 },
      { label: "201 - 250 transactions", amount: 21500 },
      { label: "251 - 300 transactions", amount: 25250 },
      { label: "More than 300 transactions", amount: null },
    ],
    notes: [],
  },
  {
    id: "annual-tax-filing",
    title: "Annual Tax Filing",
    description: "Preparation and submission of corporate income tax returns.",
    columns: ["Return", "Service fee (THB)"],
    rows: [
      { label: "Half year corporate income tax (PND51)", amount: 5000 },
      { label: "Full year corporate income tax (PND50)", amount: 15000 },
    ],
    notes: [],
  },
  {
    id: "audit",
    title: "Audit Service Fee",
    description:
      "Audit fees are determined based on your company's annual revenue. The final fee will be adjusted based on the specific complexities of each company.",
    columns: ["Revenue (THB)", "Audit fee (THB)"],
    rows: [
      { label: "Less than 200,000", amount: 8000 },
      { label: "200,001 - 1,000,000", amount: 10000 },
      { label: "1,000,001 - 3,000,000", amount: 12000 },
      { label: "3,000,001 - 5,000,000", amount: 13000 },
      { label: "5,000,001 - 7,000,000", amount: 15000 },
      { label: "7,000,001 - 10,000,000", amount: 16000 },
      { label: "10,000,001 - 15,000,000", amount: 20000 },
      { label: "15,000,001 - 20,000,000", amount: 25000 },
      { label: "20,000,001 - 30,000,000", amount: 35000 },
      { label: "30,000,001 - 40,000,000", amount: 40000 },
      { label: "40,000,001 - 50,000,000", amount: 50000 },
      { label: "More than 50,000,000", amount: null },
    ],
    notes: [],
  },
  {
    id: "yearly-accounting",
    title: "Yearly Accounting Service Fee",
    description:
      "This service is suitable for companies that are not VAT-registered and have no business operations during the year, with only a few transactions such as interest income, accounting service fees, and audit fees. It includes bookkeeping and preparation of financial records, preparation and submission of half year and full year corporate income tax (PND51, PND50), annual financial statement preparation and submission to the DBD, and audit service. The total fee is THB 21,000.",
    columns: ["Service", "Service fee (THB)"],
    rows: [
      { label: "Accounting and tax services", amount: 13000 },
      { label: "Audit services", amount: 8000 },
    ],
    notes: [
      "In case there are operations and the company is not VAT registered, the yearly accounting service fee will need to be discussed separately.",
    ],
  },
];
```

- [ ] **Step 4: Run tests to verify they pass**

```bash
npm test
```
Expected: all fees tests pass.

- [ ] **Step 5: Create `src/components/FeeTable.tsx`**

```tsx
import { formatThb, type FeeTable as FeeTableData } from "@/lib/fees";

type FeeTableProps = { table: FeeTableData };

export function FeeTable({ table }: FeeTableProps) {
  return (
    <section className="feeSection" id={table.id} aria-labelledby={`${table.id}-title`}>
      <div className="shell split">
        <div>
          <h2 id={`${table.id}-title`}>{table.title}</h2>
          <p className="feeDescription">{table.description}</p>
          {table.notes.map((note) => <p className="feeNote" key={note}>{note}</p>)}
        </div>
        <div className="tableScroll">
          <table className="feeTable">
            <thead>
              <tr><th scope="col">{table.columns[0]}</th><th scope="col">{table.columns[1]}</th></tr>
            </thead>
            <tbody>
              {table.rows.map((row) => (
                <tr key={row.label}><th scope="row">{row.label}</th><td>{formatThb(row.amount)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Create `src/app/pricing/page.tsx`**

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FeeTable } from "@/components/FeeTable";
import { PageHero } from "@/components/PageHero";
import { feeDisclaimer, feesUpdated, feeTables } from "@/lib/fees";

export const metadata: Metadata = {
  title: "Pricing | Accounting and Audit Service Fees",
  description: "Published 2026 accounting, tax filing, and audit service fees for companies in Thailand. Clear, predictable monthly fees with no hidden charges.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Service fees 2026"
        title="Transparent, fixed pricing."
        description="As part of our commitment to transparency and quality service, we publish our accounting and audit service fees for the year 2026."
      />
      <nav className="shell feeIndex" aria-label="Fee tables">
        {feeTables.map((table) => <Link href={`#${table.id}`} key={table.id}>{table.title}</Link>)}
      </nav>
      {feeTables.map((table) => <FeeTable table={table} key={table.id} />)}
      <section className="section softSection">
        <div className="narrow">
          <p className="eyebrow">Disclaimer</p>
          <p className="feeDisclaimer">{feeDisclaimer}</p>
          <p className="feeUpdated">Updated {feesUpdated}</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
```

- [ ] **Step 7: Table CSS**

Append to `globals.css` before the first `@media` block:
```css
.feeIndex { display: flex; flex-wrap: wrap; gap: 12px 28px; padding: 36px 0 0; }
.feeIndex a { border-bottom: 1px solid var(--violet); color: var(--violet); font-size: .84rem; font-weight: 600; padding-bottom: 3px; }
.feeSection { padding: 80px 0; }
.feeSection + .feeSection { border-top: 1px solid var(--line); }
.feeSection h2 { font-size: clamp(1.9rem, 3vw, 2.6rem); }
.feeDescription { color: var(--muted); margin-top: 22px; }
.feeNote { color: var(--muted); font-size: .9rem; margin-top: 16px; }
.tableScroll { overflow-x: auto; }
.feeTable { border-collapse: collapse; min-width: 420px; width: 100%; }
.feeTable th, .feeTable td { border-bottom: 1px solid var(--line); padding: 14px 12px; text-align: left; }
.feeTable thead th { color: var(--violet); font-size: .74rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; }
.feeTable tbody th { color: var(--navy); font-weight: 500; }
.feeTable td { color: var(--navy); font-variant-numeric: tabular-nums; text-align: right; white-space: nowrap; }
.feeTable thead th:last-child { text-align: right; }
.feeDisclaimer { color: var(--muted); font-size: .95rem; margin-top: 10px; }
.feeUpdated { color: var(--muted); font-size: .78rem; letter-spacing: .06em; margin-top: 18px; text-transform: uppercase; }
```
In the `max-width: 620px` block add `.feeSection { padding: 56px 0; }`.

- [ ] **Step 8: Navigation, footer, sitemap**

- `src/components/Header.tsx` links array:
```ts
const links = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/insights/", label: "Insights" },
  { href: "/contact/", label: "Contact" },
];
```
- `src/components/Footer.tsx` Explore column: add `<Link href="/pricing/">Pricing</Link>` after Services.
- `src/app/sitemap.ts` line 7: `const routes = ["", "/about", "/services", "/pricing", "/insights", "/contact", "/privacy"];`

- [ ] **Step 9: Test, lint, build, screenshot**

```bash
npm test && npm run lint && npm run build && grep -c "/pricing/" out/sitemap.xml
```
Expected: tests pass; build lists `/pricing`; grep prints `1`. Dev server → screenshot `/pricing/` at desktop and 390px; tables scroll inside their container, the page body does not scroll horizontally. Stop the dev server.

- [ ] **Step 10: Commit**

```bash
git add src/lib/fees.ts src/lib/__tests__/fees.test.ts src/components/FeeTable.tsx src/app/pricing src/components/Header.tsx src/components/Footer.tsx src/app/sitemap.ts src/app/globals.css
git commit -m "feat: add pricing page with the published 2026 fee schedule"
```

---

### Task 7: Impeccable audit and polish

**Files:**
- Modify: whatever the audit and polish passes touch (expected: `src/app/globals.css`, components). No content or token changes: tokens stay exactly as in `BRAND.md`; copy stays as in Tasks 8–10.

**Interfaces:**
- Consumes: `DESIGN.md`, `PRODUCT.md` from Task 4.

- [ ] **Step 1: Baseline detector run**

```bash
npx impeccable detect src/ 2>&1 | tail -40
```
Record the finding count.

- [ ] **Step 2: Audit**

In the agent chat run `/impeccable audit`. For every finding: fix accessibility, responsiveness, and anti-pattern items; skip any that would change tokens, fonts, or copy and note why in the commit body.

- [ ] **Step 3: Polish**

Run `/impeccable polish`. Review the diff with `git diff --stat` and `git diff src/app/globals.css`. Reject any hunk that introduces a hardcoded hex color (the tokens test will fail), a new font, or removes content.

- [ ] **Step 4: Verify**

```bash
npm test && npm run lint && npm run build
npx impeccable detect src/ 2>&1 | tail -20
```
Expected: tests pass; detector reports 0 findings. Dev server → screenshots of `/`, `/services/accounting-compliance/`, `/pricing/`, `/about/` at desktop and 390px. Stop the dev server.

- [ ] **Step 5: Commit**

```bash
git add -A src
git commit -m "refactor: apply impeccable audit and polish fixes"
```

---

### Task 7: Progress tracker against the project overview

**Files:**
- Create: `docs/01_overview/02_PROGRESS.md`

**Interfaces:**
- Consumes: `docs/01_overview/01_PROJECT_OVERVIEW.md` sections 6, 8, 10, 12, 14; the state of the repo after Task 7.

- [ ] **Step 1: Verify the facts you will record**

```bash
npm run build 2>&1 | grep -E "^[├└┌]" 
grep -n "NEXT_PUBLIC\|formspree\|endpoint\|action=" -r src/components/ContactForm.tsx | head
grep -n "G-\|gtag\|GA4\|NEXT_PUBLIC_GA" -r src/components/AnalyticsConsent.tsx | head
```
Use the output to mark routes, form endpoint, and analytics status truthfully.

- [ ] **Step 2: Write `docs/01_overview/02_PROGRESS.md`**

```markdown
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
| Markdown/MDX articles | Open | articles are TypeScript data today |
| Hosting, domain, HTTPS | Open | §14.4 |
| Contact form endpoint, spam, consent | Partial | see Step 1 output |
| GA4 after consent, conversion event | Partial | consent gate built; measurement ID pending |
| Sitemap, robots, canonical, OG | Done | OG image from logo |
| Structured data | Open | |

## §10 Quality

| Item | Status | Note |
|---|---|---|
| Responsive | Done | checked at desktop and 390px |
| Accessibility basics (semantics, focus, labels, alt, contrast) | Done | contrast enforced by test; Impeccable audit clean |
| Optimized images, self-hosted fonts, minimal JS | Done | |
| Lighthouse / Core Web Vitals | Open | run before launch |
| Unique metadata per page | Done | |

## §12 Acceptance criteria

| Criterion | Status |
|---|---|
| All pages deployed in English | Open (not deployed) |
| Approved visual system | Partial (built to CI; client sign-off pending) |
| Service → contact path clear | Done |
| Form delivery works | Open |
| GA4 consent-gated | Partial |
| Sitemap + metadata | Done |
| Static export builds | Done |
| Stakeholder approvals | Open |
| Handover docs | Open |

## §14 Decisions required before build

| # | Decision | Status |
|---|---|---|
| 1 | Five services and public fees | Done (2026-09-02) |
| 2 | Copy, logo, CI, fees, credentials | Partial: logo, CI, fees received; final copy and credentials open |
| 3 | Address, phone, email, registration, form fields | Partial: address, email, tax ID from documents; phone unverified; form fields unconfirmed |
| 4 | Domain, DNS, hosting | Open |
| 5 | Form service, mailbox, spam, retention | Open |
| 6 | Privacy/cookie requirements | Open |
| 7 | GA4, Search Console, Ads access | Open |
| 7 | Article publishing owner | Open |
| 7 | Launch approver | Open |

## Next actions

1. Client review of the CI-aligned build (screenshots or preview URL).
2. Decide form provider and hosting (§14.4–5) to unblock deployment.
3. Collect team credentials and final copy for About and Services.
```
Adjust any row where Step 1 output shows a different reality.

- [ ] **Step 3: Commit**

```bash
git add docs/01_overview/02_PROGRESS.md
git commit -m "docs: add progress tracker against the project overview"
```

---

## Self-review notes

- Spec §4A → Tasks 1–3 (horizontal lockup added because the stacked logo does not fit an 84px header; recorded in `BRAND.md`).
- Spec §4B → Task 4. Spec §4C → Tasks 5–6. Spec §4D1 → Tasks 8–9. Spec §4D2 → Task 7. Spec §4E → Task 7. Spec §4F → Task 7.
- Spec §5 verification → build/lint/test per task, screenshots in Tasks 5, 6, 9, 10, 11, detector in Task 7.
- Names used consistently: `services` (Task 7) consumed by Footer/sitemap; `siteConfig.phoneHref`, `address`, `taxId`, `legalName` (Task 7) consumed in Task 7; `feeTables`, `formatThb`, `feeDisclaimer`, `feesUpdated` (Task 7) consumed by `FeeTable` and the pricing page; `Logo` `variant` prop (Task 6) consumed in Task 7.
