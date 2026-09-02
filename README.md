# Crystal Accounting

English-language corporate website for Crystal Accounting, built as a statically exported Next.js application.

## Requirements

- Node.js 20.9 or newer
- npm

## Local development

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

## Configuration

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL used in search metadata |
| `NEXT_PUBLIC_FORM_ENDPOINT` | HTTPS endpoint supplied by the selected static form provider |
| `NEXT_PUBLIC_GA_ID` | Optional GA4 measurement ID; analytics loads only after consent |

The contact form shows the company email as a fallback until a form endpoint is configured. Test delivery, spam filtering, retention, and the privacy notice with the selected provider before launch.

## Content

Service copy lives in `src/lib/services.ts`, article copy in `src/lib/articles.ts`, and fee-table copy in `src/lib/fees.ts`. `src/lib/site.ts` holds `siteConfig` and re-exports `services` and `articles` for the rest of the app. Add an article to the `articles` collection with a unique slug, date, summary, category, reading time, and content sections. Next.js generates the article page and sitemap entry during the build.

## Validation and static export

```bash
npm test
npm run lint
npm run build
npx impeccable detect src/
```

`npm test` runs the Vitest suite. `npx impeccable detect src/` checks for design-system drift (for example hardcoded hex colors outside `:root`). The production-ready static site is generated in `out/`. Deploy that directory to any static host with HTTPS and custom-domain support.

## Launch checklist

- Confirm the five service scopes and replace draft copy with approved content.
- Confirm the canonical domain and hosting.
- Configure and test the contact-form endpoint and recipient.
- Have the privacy policy reviewed with confirmed provider and retention details.
- Add consent-aware analytics and Search Console verification when account details are available.
