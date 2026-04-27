# Design Brief

## Direction
Refined minimalism with structural depth. Premium industrial B2B trust through elevational hierarchy and disciplined color use, not decoration. Sourced from leading packaging manufacturer websites and ISO-certified corporate brands. Portfolio page introduces filtered grid showcase with staggered animations and gold-accent client cards.

## Tone & Differentiation
Corporate authority + Professional trustworthiness. Gold accents positioned as premium highlights (not base color). Clean cards with subtle borders replace floating elements. Navy primary establishes manufacturing credibility. Smooth reveal animations on scroll (fade-in + 60px slide-up) when sections enter viewport — no bounce, no distracting effects. Enhanced engagement through deeper card hover effects (gold glow), staggered grid animations, and stronger CTA glow.

## Color Palette (Light Mode — OKLCH)

| Token | L | C | H | Hex | Usage |
|-------|---|---|---|----|-------|
| background | 0.98 | 0 | 0 | #fafafa | Page base, off-white |
| foreground | 0.22 | 0.07 | 258 | #1e3a5f | Navy deep; headlines, body text |
| primary | 0.32 | 0.1 | 258 | #2c4a7a | Navy; buttons, CTAs, headers |
| accent | 0.75 | 0.13 | 86 | #d4af37 | Gold; CTAs, portfolio badges, hover states |
| secondary | 0.42 | 0.08 | 258 | #4a6b96 | Mid-navy; secondary actions |
| muted | 0.94 | 0.01 | 258 | #f0f2f5 | Soft section backgrounds |
| card | 1 | 0 | 0 | #ffffff | White; elevated surfaces |
| border | 0.88 | 0.01 | 258 | #dcdfe5 | Subtle 1px dividers |
| destructive | 0.55 | 0.22 | 25 | #d84040 | Error states |

## Typography
- **Display:** Poppins 600/700 — geometric, corporate authority, headlines and feature text
- **Body:** Inter 400/500 — refined legibility, 16px base, 1.5 line-height
- **Mono:** Geist Mono 400 — capacity specs, technical details, code blocks

## Elevation & Depth
- **Cards:** `shadow-card` (0 2px 8px rgba(0,0,0,0.06)), 1px border-border, bg-card
- **Hover States:** Deep lift via `shadow-gold-glow` (0 4px 20px rgba(212,175,55,0.3)) on portfolio cards, shadow-md on product cards
- **Sticky Header:** Primary bg with border-b-2 border-accent (gold underline); higher z-index
- **Sections:** Alternate `bg-background` and `bg-muted/40` for rhythm

## Structural Zones
- **Header/Nav:** bg-primary, text-primary-foreground, border-b-2 border-accent (gold underline)
- **Hero:** bg-background, left-aligned content with gold accent underlines
- **Portfolio Page:** bg-background, filter/search controls at top, grid with staggered fade-in-up animations, sector badges in gold
- **Content Sections:** Alternating bg-background / bg-muted/40 with grid-staggered animations on load
- **Product Cards:** bg-card with 1px border, grid 3-col on desktop, 1-col mobile, card-hover-gold on hover
- **Footer:** bg-primary matching header, text-primary-foreground, border-t border-accent

## Spacing & Rhythm
Base 8px grid: 8, 16, 24, 32, 48, 64 px. Padding consistent within sections. Margin between sections 64–80px. Mobile: 16px side margins, 24px section spacing. Portfolio grid: 1-col mobile, 2-col tablet, 4-col desktop with 24px gap.

## Component Patterns
- **Buttons:** Primary (bg-primary), Gold CTAs (bg-accent with hover:brightness-125 + shadow-gold-glow), Outline (border-accent, hover:bg-accent)
- **Portfolio Cards:** bg-card, border-border, flex col with client name, sector badge (gold bg-accent text-accent-foreground), hover:shadow-gold-glow hover:-translate-y-2
- **Testimonials:** bg-card, border-l-4 border-accent, italic body, grey author name
- **Feature Cards:** 6-card grid with grid-staggered class, icon + heading + description, bg-muted/40, hover: shadow-md
- **Form Inputs:** border-input, bg-background, focus: border-accent ring-accent
- **Trust Badges:** 24px icons (ISO, Quality, Made in India) positioned in hero section + footer

## Motion
- **Scroll Reveal:** `fadeInUp` (600ms ease-out, 40px translate-y) on section cards entering viewport; grid-staggered for cascading effect
- **Grid Staggering:** `.grid-staggered` class applies staggered delays (50ms increments) to direct children, max 8 elements
- **CTA Hover:** 300ms smooth transition, shadow-gold-glow lift, brightness-125 on gold buttons, scale-95 on active
- **Card Hover:** 300ms transition, -translate-y-2 (8px lift), shadow-gold-glow on portfolio, shadow-elevated on products
- **Transitions:** All interactive elements use cubic-bezier(0.4, 0, 0.2, 1), 300ms default
- **Constraint:** No bouncy effects, no slide-in sidebars, no animation loops

## Dark Mode (Optional Future)
OKLCH tokens tuned for dark backgrounds: primary becomes gold accent (0.75 L), backgrounds darken to 0.14 L, borders desaturate further. Accent strengthens on dark surfaces.

## Constraints
- No playful elements (gradients, bounce, skew)
- Max 5 colors in active palette
- 120ms minimum transition time (perceptible, not instant)
- Responsive: 320px, 768px, 1024px breakpoints
- Accessibility: WCAG AA contrast minimum, semantic HTML, focus states visible

## Signature Detail
Thin gold underline (3px height) beneath primary headings (::after pseudo-element), 48px width, positioned 8px below text. Portfolio sector badges use gold accent as bg, navy as text. Enhanced glow on hover (shadow-gold-glow) for premium feel without excess decoration.
