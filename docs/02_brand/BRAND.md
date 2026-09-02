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
| Display (`h1`, `h2`, blockquotes) | Frank Ruhl Libre | 400, 500 | serif from the wordmark |
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
