---
name: Crystal Accounting
description: A cut-glass editorial system — zero radius, hairline rules, and a serif voice reserved for headlines only.
colors:
  violet: "#5E17EB"
  violet-strong: "#4A11BC"
  violet-fill: "#6022DB"
  navy: "#001F3D"
  navy-deep: "#00152B"
  muted: "#4A5B6E"
  on-dark-muted: "#B9C4D1"
  lavender: "#EBE3FA"
  lilac: "#C6B1F2"
  soft: "#F6F3FC"
  line: "#DCD3EE"
  white: "#FFFFFF"
  error: "#852828"
  error-bg: "#FFF0F0"
typography:
  scale:
    micro: "0.7rem"
    label: "0.76rem"
    action: "0.84rem"
    body-sm: "0.9rem"
    body: "1rem"
    lead: "1.15rem"
    title-xs: "1.25rem"
    title-sm: "1.4rem"
    title: "1.6rem"
    title-lg: "1.8rem"
    title-xl: "2rem"
    display-xs: "2.5rem"
    display-sm: "3rem"
    display-md: "3.4rem"
    display-lg: "3.9rem"
    display-xl: "4.35rem"
  display:
    fontFamily: "Frank Ruhl Libre, Georgia, serif"
    fontSize: "clamp(3rem, 5.2vw, 4.35rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Frank Ruhl Libre, Georgia, serif"
    fontSize: "clamp(2rem, 3.9vw, 3.4rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  quote:
    fontFamily: "Frank Ruhl Libre, Georgia, serif"
    fontSize: "clamp(2rem, 3.5vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  body:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "0.16em"
  action:
    fontFamily: "Montserrat, system-ui, sans-serif"
    fontSize: "0.84rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.03em"
rounded:
  none: "0"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "20px"
  lg: "34px"
  xl: "55px"
  2xl: "70px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "16px 25px"
    height: "54px"
  button-primary-hover:
    backgroundColor: "{colors.violet-strong}"
    textColor: "{colors.white}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "16px 25px"
    height: "54px"
  button-light-hover:
    backgroundColor: "{colors.lavender}"
    textColor: "{colors.navy}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "16px 25px"
    height: "54px"
  button-small:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "12px 18px"
    height: "43px"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.violet}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 0 4px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
    padding: "32px 0 29px"
  input-field:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.navy}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "12px"
    height: "50px"
  input-field-focus:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
  service-row:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "42px 20px 42px 0"
  service-row-hover:
    backgroundColor: "{colors.white}"
    textColor: "{colors.navy}"
  article-card:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    padding: "27px"
  eyebrow-label:
    backgroundColor: "transparent"
    textColor: "{colors.violet}"
    typography: "{typography.label}"
---

# Design System: Crystal Accounting

## Overview

**Creative North Star: "The Cut-Glass Ledger"**

Two objects gave this system its character: a crystal — faceted, hard-edged, colourless until light hits it — and a ruled accounting ledger. Everything the interface draws comes from one of the two. From the crystal: zero corner radius, a single triangular silhouette lifted straight out of the logo mark, and violet appearing only where light should catch. From the ledger: hairline rules instead of boxes, tabular figures, wide-tracked uppercase labels, and a page that breathes in large, regular intervals rather than in cards.

The result is quiet on purpose. This firm sells predictability to owners who cannot read Thai statute, so the surface never performs. There is exactly one shadow in the entire system, no rounded anything, no icon library, and no ornament other than the triangle. Confidence is carried by the size of the serif headlines, the flatness of the grounds behind them, and the amount of empty space the layout is willing to spend. Where a competitor would add a card, this system draws a 1px line and moves on.

The client rejected, in writing, purple-to-pink gradients, glassmorphism, dense dashboard layouts, side-tab navigation, continuous-scroll gimmicks, long text over busy photography, and decorative italic serif kickers. Those are binding, not stylistic preferences.

**Key Characteristics:**

- Zero border radius everywhere; native inputs are explicitly reset to `0`
- 1px hairlines are the primary separator — cards are the exception, not the structure
- Four grounds only (Page White, Paper Tint, Ledger Navy, Broadcast Violet), alternating down the page
- Sixteen enumerated type steps from 0.7rem to 4.35rem; large serif headlines against 0.76rem wide-tracked uppercase labels, with nothing in between
- One decorative shape: the logo mark's triangle, as a `clip-path`
- Flat by default — a single shadow exists, on the one element that genuinely floats
- No icon set: direction and completion are set as typographic marks in the body face

## Colors

A colourless page with one violet that behaves like a struck match — rare, deliberate, and always the thing you are meant to act on.

### Primary

- **Crystal Violet** (`{colors.violet}`): the firm's mark colour, and the only colour a visitor is ever asked to act on. Buttons, text links, eyebrow labels, list bullets, table column heads, the nav underline, the focus ring. Never used as a large flat ground.
- **Pressed Violet** (`{colors.violet-strong}`): the hover and pressed state of a violet button. It exists for one job and appears nowhere else.
- **Broadcast Violet** (`{colors.violet-fill}`): the one place violet becomes a whole ground — the full-bleed CTA band that closes almost every page. Slightly lighter and warmer than Crystal Violet so white type clears 7.6:1 across a large field.

### Neutral

- **Ledger Navy** (`{colors.navy}`): all body ink, and the dark ground for the home hero, the difference section, the service heroes, the contact page, and the statement panel. This is the darkest value in the system.
- **Closing Navy** (`{colors.navy-deep}`): the footer, and only the footer. One step deeper than Ledger Navy so the page reads as finished rather than continued.
- **Slate Grey-Blue** (`{colors.muted}`): secondary text on light grounds — deck copy, card body, captions, table labels, form labels — and the resting underline of a form field.
- **Moonlit Slate** (`{colors.on-dark-muted}`): secondary text on Closing Navy. Footer links, footer address, the legal line.
- **Frosted Lavender** (`{colors.lavender}`): body copy on navy grounds, the outcome strip behind service pages, and the hover ground of a light button.
- **Faceted Lilac** (`{colors.lilac}`): eyebrow labels and small accents on navy, plus the light end of the article-card tint band — the system's one gradient. The on-dark counterpart to Crystal Violet.
- **Paper Tint** (`{colors.soft}`): the alternate light section ground, the page hero, the article card, and the resting fill of every form field.
- **Hairline Lilac** (`{colors.line}`): every 1px divider, table rule, and tag border on a light ground.
- **Page White** (`{colors.white}`): the default ground, and the type colour on every dark or violet surface.

### Named Rules

**The No-Black Rule.** Ledger Navy is the darkest ink in the system. `#000`, and any grey mixed from it, never appears — not in text, not in a border, not inside a shadow's hue.

**The Alternating Ground Rule.** A section stands on exactly one of the four grounds, and no two consecutive sections share one. Tint is rhythm, not decoration; if two sections in a row would both be tinted, one of them is wrong.

**The Alpha-Overlay Rule.** Depth on a dark ground comes from Page White at 5–35% alpha and from Ledger Navy at 8–17% alpha on light grounds — never from a new hue, never from a shadow. These alphas are derivations of two palette tokens, not additional colours.

**The Struck-Match Rule.** Crystal Violet is never a background for more than a label-sized area. When violet has to fill a region, it becomes Broadcast Violet and the region becomes a full-bleed band.

## Typography

**Display Font:** Frank Ruhl Libre (with Georgia, serif)
**Body Font:** Montserrat (with system-ui, sans-serif)

**Character:** A high-contrast Hebrew-Latin serif carrying only the largest type on the page, against a geometric sans that does everything else. The pairing is deliberately lopsided: the serif never appears below 2rem and the sans never appears above 1.8rem, so the two voices cannot be confused for one another at a glance.

Every size in the product comes off one enumerated 16-step ramp (`typography.scale`), from 0.7rem to 4.35rem. There are no in-between values: a size that is not a step does not ship.

### Hierarchy

- **Display** (Frank Ruhl Libre 500, `clamp(3rem, 5.2vw, 4.35rem)`, 1.08): the home hero and service-page `h1`. Capped at 4.35rem (69.6px) so that even a full-sentence headline — every headline on this site is one — stays under a third of the first viewport instead of swallowing it.
- **Display, inner pages** (`clamp(2.5rem, 4.5vw, 3.9rem)`): the `h1` on page heroes, article heroes, the contact page, and result pages. One step down, because those headings run longer.
- **Headline** (Frank Ruhl Libre 500, `clamp(2rem, 3.9vw, 3.4rem)`, 1.08): every `h2`. Section openers, the CTA band, fee-table titles.
- **Quote** (Frank Ruhl Libre 400, `clamp(2rem, 3.5vw, 3rem)`, 1.2): the statement panel's pull quote — the only place the serif appears at book weight.
- **Title** (Montserrat 600, 1.4rem, 1.2): every `h3`. Service rows and process cards step up to 1.6rem, value cards to 1.8rem, and card titles down to 1.25rem. The serif is never used at this size.
- **Lead** (Montserrat 400, 1.15rem, 1.7): every deck under a heading, capped at 590–670px so it never runs the full container.
- **Body** (Montserrat 400, 1rem, 1.7): running copy, including long-form article and legal text. Card and secondary copy drops one step to 0.9rem.
- **Label** (Montserrat 700, 0.76rem, `.16em`, uppercase): eyebrows, table column heads, the fee-updated line. Sits 26px above the heading it introduces. Micro-labels (card numbers, category chips, the proof strip) sit one step below at 0.7rem — the floor.
- **Action** (Montserrat 700, 0.84rem, `.03em`): button, text-link, nav, and footer-link labels, with a 22–28px gap between a label and its trailing mark.

### Named Rules

**The Two-Voice Rule.** Frank Ruhl Libre is permitted at `h1`, `h2`, and `blockquote`. Nowhere else — `h3` is Montserrat 600, and so is every heading inside the footer and the fee tables, which override the family explicitly. A serif `h3` is a bug.

**The Wide-Label Rule.** Any type set below 0.84rem is a label: Montserrat 700, uppercase, wide-tracked, and no more than a few words. Reading copy never goes below 0.84rem — not in the consent notice, not in a form hint, not in the footer legal line. If a paragraph wants to be 0.7rem, the paragraph is wrong, not the scale.

**The Eleven-Pixel Rule.** 0.7rem (11.2px) is the absolute floor for any text a visitor is meant to read or click, label or not. Nothing renders below it.

**The Capped Measure Rule.** Running copy carries an explicit maximum — 38em (about 72 characters) for long-form body and the fee disclaimer, 32em for an article lead, and a px cap for decks. Nothing is allowed to run the full 1180px container or the full 760px reading column as a paragraph. Cap in `em`, never in `ch`: Montserrat's zero advance is 0.66em, so a `ch` cap over-counts a line of prose in this face by about a third.

**The Tracking Floor Rule.** Negative tracking is `-0.015em` for the serif and `-0.01em` for sans titles. Tighter than that reads as a logo, not a headline.

## Layout

Two containers and nothing else. `.shell` is `min(1180px, 100% - 48px)`; `.narrow` is `min(760px, 100% - 48px)` and carries every long-form reading surface (articles, legal pages, the fee disclaimer, result pages). Gutters drop from 48px to 32px below 620px. Everything is centred with `margin-inline: auto`; there is no asymmetric or offset grid.

Vertical rhythm is a single section step: 112px of padding above and below, dropping to 85px below 900px and 68px below 620px. Heroes are the only exception and set their own asymmetric padding (the home hero opens at 100px with no bottom padding so the proof strip closes it).

Horizontal structure is built from three repeated grids: a 50/50 `split` for heading-plus-copy sections, a 1.35fr/0.65fr `sectionHeading` for a heading with a supporting deck, and a 1.15fr/0.85fr hero. Both splits separate with a **10% gap** rather than a fixed pixel gap, so the trench between columns scales with the container instead of collapsing at intermediate widths.

Two breakpoints: **900px** (two-column grids collapse to one, the nav becomes a disclosure panel, the hero graphic is dropped, four-up card grids go two-up, the footer goes three-up) and **620px** (everything goes single-column, section padding tightens, the header shortens to 74px).

### Named Rules

**The Percent-Gutter Rule.** Two-column splits use a percentage gap (10%), never a fixed one. The trench is a proportion of the page, not a constant.

**The Reading-Width Rule.** Long-form text moves into `.narrow` (760px). It is never set in `.shell`.

## Elevation & Depth

This system is flat, and aggressively so. Depth is built from four devices, in this order of preference: a change of ground colour, a 1px hairline, a translucent white or navy overlay, and the triangle `clip-path`. Nothing is lifted off the page.

### Shadow Vocabulary

- **Floating notice** (`box-shadow: 0 12px 45px rgba(0,31,61,.17)`): used exactly once, on the fixed analytics-consent banner. It is the only element in the product that genuinely floats above the document, so it is the only element permitted a shadow. The shadow carries a 12px offset and a 45px blur and is tinted from Ledger Navy, never from black.

### Named Rules

**The One-Shadow Rule.** There is one shadow in the system and it belongs to the consent banner. A card, a panel, a table, a hero, or a hover state that wants a shadow gets a ground change or a hairline instead.

**The Hairline Rule.** 1px is the only border weight on a light ground. A divider is `1px solid` Hairline Lilac; a divider on navy is `1px solid` Page White at 14–22% alpha. There is no 2px, 3px, or accent border anywhere in the system — including on the left edge of a callout. A gutter can stand in for a border: the value grid sets a 1px `gap` over a Hairline Lilac ground, so the dividers between its Page White cards are the ground showing through. A card grid that uses a 1px gutter must give the container that ground, or the dividers do not exist.

## Shapes

Nothing in this system is rounded. Buttons, cards, inputs, tags, tables, and panels all have square corners, and form controls carry an explicit `border-radius: 0` so no browser reintroduces one. The only curves are two circular badges (`50%`): the check bullet on service inclusion lists and the confirmation mark on the thank-you page.

The one decorative shape is the logo mark's silhouette: `clip-path: polygon(50% 0, 100% 100%, 0 100%)`. It appears at three scales — a 570px ghost bleeding off the left edge of the difference section, a 340px pair in the home hero (Page White at 8% behind, Crystal Violet at 80% in front), and 150px pairs inside the article-card visual. Every one is a flat alpha fill; none is a gradient. Rotated squares, circles, blobs, and organic cutouts are retired from this brand and must not return.

### Named Rules

**The Zero-Radius Rule.** Radius is `0`. The two circular badges are the whole exception list, and both are glyph containers, not surfaces.

**The One-Shape Rule.** The triangle is the only decorative geometry. If a page needs a mark, it uses the triangle at a new scale or opacity — it does not introduce a second shape.

## Components

### Buttons

- **Shape:** square (`0` radius), 54px tall, 16px vertical and 25px horizontal padding, with a 28px gap between the label and its trailing mark. `min-height` governs the height; the padding is there so the label is never flush to a coloured edge.
- **Primary:** Crystal Violet ground, Page White label, 1px border in the same violet so it can invert without shifting size.
- **Hover / Focus:** ground moves to Pressed Violet and the button rises 2px (`translateY(-2px)`) over 0.2s. Focus is a 3px Crystal Violet outline at 3px offset — switched to Page White on navy and violet grounds so it is always visible.
- **Light:** Page White ground, Ledger Navy label, hovering to Frosted Lavender. The primary action on any dark ground.
- **Ghost:** transparent with a Page White 40% border, filling to 10% white on hover. The secondary action on a dark ground only.
- **Small:** 43px tall, 12px/18px padding, 13px label gap. Used in the header and the consent banner. The banner's plain-text decline carries the same 43px height so both consent choices are the same target.
- **Disabled:** 65% opacity and a `wait` cursor; the label changes to name the in-flight action ("Sending…").

### Text link

- **Style:** Crystal Violet on the Action step (0.84rem Montserrat 700), with a 1px `currentColor` underline sitting 4px below the label and a 22px gap before the trailing mark.
- **Hover:** the mark travels 3px right and 3px up (`translate(3px, -3px)`) — the only motion; the underline does not change.
- **Light variant:** Page White on dark grounds, underline included.

### Navigation

- **Style:** Slate Grey-Blue, 0.84rem Montserrat 600, in an 84px header on Page White with a 1px navy-8% bottom rule.
- **Active / Hover:** a 2px Crystal Violet rule wipes in under the label from the left (`transform: scaleX(0 → 1)`), 23px below the baseline. Colour does not change; the rule does the work.
- **Mobile (≤900px):** the links become an absolutely positioned Page White panel below the header, opened by a 44×44px three-bar button that carries `aria-expanded` and `aria-controls`. The panel's active rule shortens to 40px.

### Cards / containers

- **Corner style:** square.
- **Article card:** Paper Tint ground, 450px minimum height, 27px padding, with a 180px lavender-to-lilac visual band carrying two clipped triangles and a Page White category chip.
- **Value / process cards:** Page White on a tinted or hairline ground, 250–290px minimum height, 34px (process) or 35×27px (value) padding, opening with a `01`-style label and closing with 0.92rem body copy.
- **Shadow strategy:** none. See Elevation & Depth.
- **Border:** none on cards; separation comes from the ground behind them or from a 1px gutter.

### Service row

The signature component. Services are not cards — they are ledger rows. A 1px Hairline Lilac rule above the first row and below every row, a 50px column carrying a `01` label in Crystal Violet, then a three-part inner grid (title / description / link). On hover the row's ground lifts from Paper Tint to Page White over 0.2s and nothing moves. Below 620px the inner grid unwraps to a single stacked column and the number column narrows to 34px.

### Inputs / fields

- **Style:** Paper Tint fill, transparent 1px border with only the bottom edge coloured, `0` radius, 50px minimum height, 12px padding. The field reads as a ruled line on tinted paper rather than a box.
- **Focus:** ground flips to Page White and all four borders become Crystal Violet; the native outline is suppressed in favour of the system focus ring.
- **Label:** 0.79rem Montserrat 600 Slate Grey-Blue, stacked 8px above the field, with the required asterisk marked `aria-hidden` and the requirement carried by the `required` attribute.
- **Error:** a `role="alert"` panel in Correction Red on Correction Wash at 0.82rem, naming the failure and offering the firm's email as the recovery path.

### Fee table

Collapsed borders, no vertical rules, a 1px Hairline Lilac rule under every row. Column heads are Label type in Crystal Violet; row heads are Ledger Navy at Montserrat 500; amounts are right-aligned, `font-variant-numeric: tabular-nums`, and never wrap. The table sits in an `overflow-x: auto` scroller with a 420px minimum width so it survives a narrow phone without breaking the page.

### Disclosure (FAQ)

A `<details>` stack with a 1px rule above each item and below the last. The summary is 1.15rem Montserrat 600 with the native marker removed and a Crystal Violet `+` pushed to the far right, which rotates 45° into a `×` over 0.2s when open. The marker is Montserrat 400 — the lightest weight this project loads. Answers are Slate Grey-Blue with 40px of right padding so they never run under the marker.

### Consent banner

The only floating element: a fixed, centred `min(760px, 100% - 32px)` Page White panel 20px off the bottom edge, with a 1px Hairline Lilac border and the system's single shadow. Copy on the left, a small violet accept button and an underlined plain-text decline on the right. Below 620px it becomes a stacked column with the two actions spread across the full width.

## Do's and Don'ts

### Do

- **Do** separate with a 1px rule before reaching for a card. The service list, the FAQ, the fee tables, the difference items, and the inclusion lists are all hairline-ruled rows, and a new list should be too.
- **Do** alternate grounds down the page: Page White → Paper Tint → Ledger Navy → Page White. Every page closes on the Broadcast Violet CTA band.
- **Do** keep the serif at `h1`, `h2`, and pull quotes only, and set `h3` in Montserrat 600.
- **Do** set eyebrow labels in Montserrat 700 uppercase at `.16em` / 0.76rem above the display heading. `docs/02_brand/BRAND.md` commits this device for this brand; the general craft default against kickers does not override a written brand commitment.
- **Do** cap the measure of running copy explicitly — `ch` for long-form, px for decks — and move long-form text into `.narrow`.
- **Do** derive translucency from Page White or Ledger Navy alpha, and keep the resulting overlay between 5% and 35%.
- **Do** reach the triangle `clip-path` for any decorative mark, at a new scale or opacity.
- **Do** theme the browser's own surfaces from the palette: text selection (Frosted Lavender ground, Ledger Navy ink), the caret and the native control accent (Crystal Violet), a 3px underline offset on every link, and the focus ring. The scrollbar is deliberately left native — every token light enough to sit on Paper Tint gives a thumb too faint to grab.
- **Do** use `--muted` (6.35:1 on Paper Tint) for a control's resting edge; `--line` is a divider weight, not an affordance weight.

### Don't

- **Don't** add a border radius. Not on buttons, not on cards, not on inputs, not "just 4px".
- **Don't** put a coloured border on one side of a callout, card, or list item. That side-tab is on the client's written reject list and the detector fails the build for it.
- **Don't** animate `padding`, `margin`, `width`, or `height`. Hover states change ground colour or `transform`, and nothing else.
- **Don't** add a shadow. The consent banner owns the only one.
- **Don't** introduce a gradient. Exactly one survives in the system — the article card's lavender→lilac tint band — and it carries no text. Everything else that reads as depth is a flat alpha fill.
- **Don't** introduce glassmorphism, backdrop blur, side navigation, scroll-jacking, or text set over busy photography — all four are on the client's written reject list.
- **Don't** set reading copy below 0.84rem, don't set any text below 0.7rem, and don't invent a size between two ramp steps — extend `typography.scale` or use the nearest step.
- **Don't** introduce a second decorative shape, a rotated square, or an organic blob.
- **Don't** use `#000` or a black-mixed grey anywhere, including inside `rgba()`.
- **Don't** add an icon library. This system has no icons; direction and completion are typographic marks in the body face, and a new mark should be one too.
