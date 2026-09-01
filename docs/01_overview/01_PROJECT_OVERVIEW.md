# Crystal Accounting Website — Project Overview

## 1. Project Summary

Create an English-only corporate website for **Crystal Accounting**, an accounting firm serving Thailand-registered companies whose owners are foreigners. The website should establish trust, explain the firm's services clearly, attract qualified organic and paid traffic, and convert visitors through a contact form.

The site will use **Next.js with static export** to provide a fast, secure, SEO-friendly, and low-maintenance website that fits the available budget.

## 2. Business Goals

1. Build credibility and present Crystal Accounting as a professional, dependable firm.
2. Generate qualified leads, with the contact form as the primary conversion action.
3. Reach a target of **20 contact-form submissions per month within six months**.
4. Support long-term SEO and landing pages for Google Ads and social campaigns.
5. Make monthly article publishing straightforward without requiring a complex CMS.

## 3. Target Audience

### Primary audience

- Foreign founders and business owners operating companies registered in Thailand
- English-speaking executives, finance teams, and investors
- Businesses seeking a long-term local accounting and tax partner

### Audience needs

- Clear explanations of Thai accounting, audit, tax, bookkeeping, and compliance services
- Confidence that communication will be available in English
- Evidence that the firm follows up, meets obligations, and does not abandon work
- A simple way to request advice or a quotation

## 4. Positioning and Key Messages

**Core promise:** Deliver beyond expectations.

Supporting strengths:

- Professional English-speaking service
- Proactive tax planning
- Reliable follow-up and ownership of work
- Clear, accessible guidance for foreign-owned businesses in Thailand
- Practical support across accounting, audit, tax, and related compliance

## 5. Design Direction

- **Brand attributes:** trustworthy, professional, simple, modern, and easy to read
- **Primary palette:** purple, black, and white, finalized from the supplied CI guideline
- **Content style:** spacious layouts, strong hierarchy, readable typography, and clear service navigation
- **Imagery:** approved stock photography used selectively; avoid placing long white text over busy images
- **Avoid:** dated effects, continuous scroll gimmicks, dense pages, awkward side navigation, and decorative elements that reduce readability
- **Responsive behavior:** mobile-first, with clear navigation and prominent contact actions on every device

## 6. Proposed Sitemap

### Core pages

1. **Home**
   - Value proposition
   - Trust and differentiator highlights
   - Service overview
   - Reasons to choose Crystal Accounting
   - Selected insights
   - Contact call to action
2. **About Us**
   - Company profile
   - Approach and values
   - Team or professional credentials, when supplied
   - Commitment to foreign-owned businesses
3. **Services**
   - Overview of the five services
   - A dedicated SEO page for each service
4. **Insights**
   - Article listing
   - Individual article pages
5. **Contact**
   - Lead form
   - Company email and other approved contact details
   - Office location and business hours, when supplied
6. **Privacy Policy**
   - Privacy notice and form-data handling disclosure
7. **Thank You**
   - Submission confirmation and conversion tracking
8. **404**
   - Helpful recovery links

### Initial service-page placeholders

The final five services must be confirmed from the supplied content and fee schedule. Based on the requirement, the initial structure is:

1. Accounting and bookkeeping
2. Audit services
3. Tax consulting and planning
4. Payroll services
5. Accounting outsourcing or corporate compliance

## 7. Content Plan

- Crystal Accounting will provide the final English copy, logo, CI guideline, and fee schedule.
- Content should answer common questions from foreign business owners and explain Thailand-specific obligations in plain English.
- Every service page should include the problem addressed, scope, ideal client, process, expected outcomes, frequently asked questions, and a contact call to action.
- Articles will be maintained as repository-based Markdown or MDX files and published through the normal deployment workflow.
- Stock images must have appropriate commercial licenses and should be optimized before use.
- Competitor and inspiration sites may guide structure and coverage, but all copy and design must be original.

## 8. Technical Approach

### Application

- Current stable **Next.js** release using the App Router
- **TypeScript**
- Static generation and `output: "export"`
- Pre-rendered HTML for all pages, services, and articles
- Reusable components and design tokens based on the supplied CI guideline
- Repository-managed Markdown or MDX articles

### Hosting

Deploy the generated static files to a static hosting provider with:

- Custom-domain and HTTPS support
- Global CDN
- Preview deployments
- Automatic deployment from the main branch
- Redirect and custom-header support where available

The domain registrar, DNS ownership, and hosting provider must be selected before launch. A company Gmail account is not itself a domain or website host, although an existing Google Workspace domain may be usable once ownership and DNS access are confirmed.

### Contact form

Because a static export has no application server, form submissions must use a selected external form endpoint or serverless form service. The solution must provide:

- Required-field and email validation
- Spam protection
- Consent acknowledgement
- Delivery to the company email
- User-friendly success and error states
- A thank-you destination for conversion tracking
- Minimal data collection and documented retention

No private keys or service credentials may be exposed in client-side code.

### Analytics and search

- Google Analytics 4, loaded only after the required consent decision
- Google Search Console verification
- Contact-form conversion event
- Optional Google Ads conversion tag when campaign details are available
- XML sitemap, `robots.txt`, canonical URLs, and page metadata
- Open Graph and social sharing metadata
- Organization and relevant service/article structured data

## 9. SEO Strategy

Priority topics supplied in the requirement:

- accounting firm Thailand
- accounting services Thailand
- accountant Thailand / accountant Bangkok
- bookkeeping services Thailand / bookkeeping Bangkok
- tax consultant Thailand
- tax services Thailand / corporate tax Thailand
- payroll services Thailand
- accounting outsourcing Thailand

Each keyword should map to a page according to search intent rather than being repeated unnaturally. Service pages should target commercial queries, while articles should address informational questions and link to the relevant service and contact pages. Initial copy should establish a Thailand and Bangkok focus only where factually accurate.

## 10. Quality Requirements

- Responsive support for current mobile, tablet, and desktop browsers
- Accessible semantic structure, keyboard operation, visible focus states, labels, alt text, and sufficient color contrast
- Optimized images, local or efficiently loaded fonts, and minimal client-side JavaScript
- Strong Core Web Vitals targets and no major Lighthouse accessibility or SEO errors
- Unique metadata and one clear page heading per indexable page
- Working contact delivery, validation, spam protection, analytics, and conversion tracking
- No exposed credentials, copied third-party content, or unlicensed media

## 11. Delivery Plan

### Phase 1 — Discovery and content confirmation

- Confirm the five services and final navigation.
- Collect the logo, CI guideline, English copy, fee schedule, legal details, credentials, contact details, and approved calls to action.
- Confirm domain ownership, hosting, form provider, analytics account, and privacy requirements.
- Create the keyword-to-page map and content inventory.

### Phase 2 — Structure and visual direction

- Define page hierarchy and conversion paths.
- Produce mobile and desktop layouts for the key page types.
- Establish typography, colors, spacing, imagery, components, and states from the brand guideline.
- Obtain approval before implementation.

### Phase 3 — Static-site implementation

- Set up the Next.js static-export project.
- Build the shared layout, navigation, footer, service templates, article system, contact flow, legal page, and error page.
- Add responsive behavior, accessibility, metadata, structured data, sitemap, and analytics hooks.

### Phase 4 — Content, integration, and validation

- Add and proofread approved English content.
- Configure and test contact-form delivery and spam protection.
- Verify responsive layouts, browser behavior, accessibility, links, metadata, performance, and analytics events.
- Complete stakeholder review and resolve launch-blocking feedback.

### Phase 5 — Launch and handover

- Connect the approved domain and HTTPS.
- Deploy the production static build.
- Submit the sitemap and verify analytics and Search Console.
- Provide instructions for publishing the planned monthly article and reviewing leads and conversions.
- Monitor form delivery, errors, and indexing immediately after launch.

## 12. Acceptance Criteria

The first release is complete when:

- All approved core, service, article, legal, and utility pages are deployed in English.
- The website follows the approved purple, black, and white visual system and works across supported screen sizes.
- Visitors can find a service and reach the contact form without ambiguity.
- Valid contact submissions reach the approved company inbox, spam controls operate, and failures provide a recovery path.
- GA4 records agreed page and conversion events without collecting data before required consent.
- Search engines can crawl a production sitemap and each indexable page has correct metadata and canonical URLs.
- The production build is a successful Next.js static export with no runtime server dependency.
- The stakeholder has approved content, design, privacy text, and the production domain.
- Handover documentation covers deployment, article publishing, form management, and analytics access.

## 13. Risks and Constraints

- The **30 September 2026** target requires quick approval of content, design, domain, and third-party services.
- The budget below **THB 20,000** favors a focused first release, static content, reusable layouts, and limited custom integrations.
- Domain and hosting are undecided and can block launch if ownership or DNS access is delayed.
- A static contact form depends on a third-party or serverless service and may carry usage, privacy, or regional-processing considerations.
- Final service definitions and supplied assets are not yet available in the repository.
- SEO growth depends on original, useful content and continued monthly publication; launch alone does not guarantee rankings or 20 leads per month.

## 14. Decisions Required Before Build

1. Confirm the exact five services and whether fees will be public.
2. Supply and approve all English copy, logo files, CI guideline, fee schedule, and professional credentials.
3. Confirm the company address, phone, public email, registration details, and preferred form fields.
4. Choose and secure the production domain, DNS access, and hosting provider.
5. Choose the form-processing service, recipient mailbox, spam-control method, and data-retention policy.
6. Confirm privacy/cookie requirements and approve the privacy notice.
7. Provide access or ownership details for GA4, Search Console, and advertising accounts.
8. Confirm who will publish and approve monthly articles.
9. Define the launch approval process and responsible final approver.
