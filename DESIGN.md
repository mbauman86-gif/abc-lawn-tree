# ABC Lawn & Tree — Design System

## Atmosphere
Commanding. Established. Worth every dollar. This is a 25-year company that handles the biggest trees and the most demanding properties in the county. The visual language is rich and grounded — deep maroon conveys authority, gold signals quality, and warm neutrals keep it approachable. Every page should feel like a company that doesn't need to compete on price.

## Color Palette
| Name | Hex | Role |
|------|-----|------|
| Maroon | #6B1D2A | Primary brand, headers, nav, buttons, trust — deep, rich, authoritative |
| Maroon Dark | #4A1420 | Utility bar, dark sections, footer |
| Maroon Light | #8B2E3D | Hover states, lighter accents |
| Gold | #C8963E | Accent, CTAs, stars, highlights, action elements |
| Gold Light | #DAB060 | Hover/warm accent |
| Gold Pale | #F5E6C8 | Subtle backgrounds, badges, highlights |
| Cream | #FAF7F2 | Alternate section backgrounds |
| Warm White | #FEFCF9 | Card backgrounds, clean contrast |
| Charcoal | #2A2A2A | Body text |
| Charcoal Light | #5A5A5A | Secondary text |
| Sand | #E8E0D4 | Borders, dividers |
| Sage | #4A6741 | Nature accent (used sparingly for tree/eco elements) |
| Emergency Red | #C41E1E | Emergency services only |

## Typography
- **Display (h1):** Font-weight 900, clamp(2.5rem, 6vw, 4.25rem), tracking -0.03em, line-height 1.05
- **Section titles (h2):** Font-weight 800, clamp(2rem, 4.5vw, 3rem), tracking -0.02em
- **Card titles (h3):** Font-weight 700, 1.25rem
- **Body:** Font-weight 400, 1.0625rem (17px), line-height 1.75, color Charcoal
- **Small/labels:** Font-weight 600, 0.8125rem (13px), uppercase, tracking 0.08em
- **Stats/numbers:** Font-weight 900, clamp(2.5rem, 5vw, 4rem)

## Spacing
Section padding: 96px vertical mobile, 128px desktop. Card padding: 32-40px. Max content width: 76rem.

## Components

### Buttons
- **Primary (Gold):** bg-gold, maroon-dark text, rounded-lg, py-4 px-8, font-bold 17px, shadow-lg. Hover: brightness up, translateY(-2px), shadow-xl.
- **Secondary (Maroon):** bg-maroon, white text, same sizing. Hover: bg-maroon-light.
- **Ghost:** border-2 border-current, transparent bg. Hover: filled.
- **Phone CTA:** Gold bg, large, always includes phone icon. Min 52px height.

### Cards
- Warm white bg, border sand, rounded-2xl, p-10. Hover: border-gold/40, shadow-2xl, translateY(-4px). 300ms spring ease.
- Gold top accent line (2px) on hover.

### Hero
- Full-bleed maroon gradient bg. Left-aligned text on desktop. Large gold CTA button. Stats row below title.
- No stock photos. Rich gradient + subtle texture.

### Trust/Social Proof
- Maroon-dark bar. Gold stars prominent. White text. Tight density.

## Layout
- Max-width 76rem centered
- Section rhythm: white → cream → maroon → white
- Grid: 1 col mobile, 2 tablet, 3-4 desktop
- Generous whitespace between sections (128px desktop)
- Touch targets: 52px minimum on all CTAs
