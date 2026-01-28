# Lucimondo — Luxury Travel Carry-On Brand

One-page, display-only brand website for a high-end travel carry-on bag brand. Precision travel, effortless movement, quiet luxury.

**Product focus:** Small carry-on bags for passports, credit cards, IDs, and multiple currencies.  
**Goal:** Create desire and authority. All purchase CTAs link to Shopify (no checkout, cart, or pricing on-site).

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## One-Page Structure (anchor sections)

| Section | Description |
|--------|-------------|
| **Hero** | Full-bleed hero, one carry-on, ≤7-word headline, supporting line, “Enter the Collection” → Shopify |
| **The Concept** | Control / chaos, movement with intention, elegance through organization. Short sections, strong statements. |
| **The Carry-On** | Passport, card/ID, currency features. One concise line each. Single “Acquire” CTA → Shopify. |
| **Designed for Movement** | Airports, lounges, border crossings. Efficiency, ease, confidence. |
| **Craft & Materials** | Materials, build precision, longevity. No specs or comparisons. |
| **Exclusivity** | Limited production, controlled distribution, not for everyone. Selective tone. |
| **Journal** | Campaign imagery, travel culture, movement/design/elegance. Visual, not a blog. |
| **Press** | Editorial logos, select imagery. No quotes, testimonials, or explanations. |
| **Footer** | Invite-only newsletter, Instagram, legal, region/currency selector. |

Additional routes: `/legal/privacy`, `/legal/terms`.

## Configuration

- **`lib/config.ts`** — `SHOPIFY_BASE_URL`, `NAV`, `LEGAL`, `REGIONS` (label + currency).
- **Footer** — Update `INSTAGRAM_URL` in `components/Footer.tsx`.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design

- One-page scroll with anchor navigation. Warmer palette (cream, warm gray, soft charcoal, brand warm).
- Cormorant Garamond (serif) + Inter (sans). Soft rounded corners, generous spacing, subtle scroll fade-ins (Framer Motion).
- Nav: light over dark hero; solid light background when scrolled. Tone: minimal, confident, refined.

## License

All rights reserved — Lucimondo
