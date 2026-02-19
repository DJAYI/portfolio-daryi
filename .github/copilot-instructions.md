# Copilot Instructions — portfolio-daryi

## Project Overview

Personal portfolio for Danilo Arenas Yi (DJAYI), a fullstack developer. Single-page site deployed to **Vercel** with heavy use of scroll-driven animations and 3D effects.

## Tech Stack & Build

- **Framework:** Astro 5 (SSR via `@astrojs/vercel` adapter), React integration enabled but currently unused in components
- **Styling:** Tailwind CSS v4 (loaded as a Vite plugin, NOT as an Astro integration — see `astro.config.mjs`)
- **Animations:** GSAP (ScrollTrigger, SplitText, PixiPlugin) — the primary interaction layer
- **3D Background:** Three.js smoke particle system (`SmokeParticles.astro`)
- **Carousel:** Glide.js with custom infinite-scroll override in `Carousel.astro`
- **Smooth Scroll:** Lenis (configured in `Layout.astro` script)
- **Commands:** `npm run dev` (port 4321), `npm run build`, `npm run preview`

## Architecture

```
src/pages/index.astro          → Minimal: only imports Layout
src/layouts/Layout.astro       → THE core file: full HTML shell, all sections composed here,
                                  contains the ~200-line GSAP scroll animation script
src/components/
  Header.astro                 → Hero section with GSAP SplitText char animation
  Carousel.astro               → Tech skills carousel (Glide.js + custom RAF scroll)
  Experience.astro             → Work experience cards (static data in frontmatter)
  SmokeParticles.astro         → Three.js particle background (fixed, full-viewport)
  Footer.astro                 → Stub (empty, has GSAP/ScrollTrigger imports ready)
src/styles/global.css          → Tailwind import + custom `@theme` tokens (fonts only)
```

## Critical Patterns

### Animation Architecture
- All GSAP plugins are registered per-component in `<script>` tags (not centralized). Each component manages its own `ScrollTrigger` instances.
- `Layout.astro` contains the master scroll timeline that orchestrates: canvas frame animation (desktop), blob SVG morphing, and canvas-h1 overlap detection.
- **Desktop vs mobile split:** A `window.matchMedia("(min-width: 768px)")` guard controls whether the 160-frame canvas animation loads. Mobile gets a simplified blob-only animation. This pattern repeats in `Header.astro`.

### Canvas Frame Animation (Desktop Only)
- 160 sequential images at `/images/danilo-360-turn/ezgif-frame-XXX.jpg` are loaded and drawn to a `<canvas>` scrubbed by GSAP ScrollTrigger.
- The canvas has CSS `mix-blend-mode: multiply` and dynamic `invert-filter` class toggling when overlapping the `<h1>`.

### Styling Conventions
- Tailwind utility classes directly in markup; almost no custom CSS beyond `global.css` theme tokens.
- Two custom fonts defined as Tailwind theme tokens: `--font-header` (Major Mono Display) and `--font-michroma` (Michroma), used via `font-header` / `font-michroma` classes.
- Dark content over light background (`bg-neutral-100`), with `mix-blend-difference` used extensively for text visibility over animated backgrounds.
- Mobile-first responsive with `md:` breakpoint utilities.

### Data Pattern
- No external data sources, CMS, or API calls. All content (experiences, technologies) is hardcoded in component frontmatter arrays.

## Key Conventions

- **Language:** Component code comments are in Spanish; keep this convention.
- **TypeScript:** Strict mode (`astro/tsconfigs/strict`). JSX configured for React (`react-jsx`).
- **No test suite** exists — there are no testing frameworks or test files.
- **No linting/formatting config** files present — follow existing code style (2-space indent, double quotes in Astro/HTML, template literals in scripts).
- Astro components use `<script>` tags (not `<script is:inline>`) for bundled client-side JS with full import support.

## When Modifying

- Adding a new section: create an `.astro` component in `src/components/`, import it in `Layout.astro`, and place it in the page flow.
- GSAP animations: register plugins at the top of each component's `<script>`, use `ScrollTrigger.refresh()` after dynamic layout changes.
- Be cautious editing `Layout.astro`'s main script — it coordinates canvas loading, Lenis, GSAP timelines, and resize handlers in a single block.
- The Glide.js CSS is loaded from `node_modules/` paths in `<head>` — these won't resolve in all build environments. Consider migrating to proper imports.
