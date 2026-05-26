# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development commands

All commands run from the `site/` directory.

```bash
cd site
npm install       # first time
npm run dev       # dev server → http://localhost:5173
npm run build     # production build → site/dist/
npm run preview   # preview the production build locally
npm run lint      # ESLint
```

Deploy target: Vercel. Root directory: `site`, framework: Vite (auto-detected), output: `dist`.

## Architecture

Single-page React/Vite app. There is one active variant: **DarkLuxe**.

```
site/src/
  variants/DarkLuxe.jsx   ← entire page component
  variants/DarkLuxe.css   ← entire design system (tokens, all section styles, responsive)
  components/
    Cursor.jsx            ← custom cursor (desktop only, LERP ring + dot)
    useTilt.js            ← 3D card tilt on hover (arch panels)
    useMagnetic.js        ← magnetic pull on buttons
  index.css               ← global resets only (box-sizing, a, button, img)
  App.jsx                 ← renders <DarkLuxe />
```

`App.jsx` just renders `<DarkLuxe />`. All real logic, sections, state, and CSS live in the variant files.

### Animation ownership

Three animation systems, each with a distinct role — don't swap them:

- **GSAP** — hero entrance only (`DarkLuxe.jsx` GSAP `useEffect`). Orchestrates the timed reveal sequence of video, label, h1, body, button, scroll indicator.
- **Framer Motion** — `FadeIn` wrapper, section list reveals, accordion expand/collapse, drawer slide, NF feature crossfade.
- **Lenis** — smooth scroll + parallax. Lenis ticks in a `requestAnimationFrame` loop and calls `updateParallax()` on each scroll event. The instance is stored at `window.__lenis` so the mobile drawer can `stop()`/`start()` it.

Parallax works by setting `data-parallax` on videos; JS queries `[data-parallax]`, reads each element's container rect, and writes `translateY` directly to `style.transform`.

### CSS conventions

- All styles use a `dl-` prefix (no UI library, no Tailwind in components).
- The token block lives at the top of `DarkLuxe.css` on `.dl {}`. **Never write raw `rgba()` inline** — every opacity variant must be a named token. If a color value doesn't have a token, add one to the token block first.
- Body text: two sizes only — `1rem` (hero, section prose) and `0.92rem` (arch, why, accordion). Never introduce a value between them.
- Section horizontal padding: `5rem` desktop → `1.5rem` at 900px → `1.25rem` at 480px. Nav, footer, and `dl-rule` all align to this same value.

### Known intentional patterns — do not "fix"

- **Hero h1 `background-clip: text`** inside `@supports` — this is a monochromatic metallic sheen animation, not decorative gradient text. DESIGN.md documents why the `::after` overlay alternative fails. Leave it.
- **`* { cursor: none !important }`** in `index.css` at `(hover: hover) and (pointer: fine)` — the custom cursor replaces the native one. Touch devices are unaffected.
- **Marquee negative margins** (`margin: 5rem -5rem 0`) — extends the strip to full bleed. The element has `overflow: hidden` which clips it correctly.
- **Vitrine video `height: 140%; top: -20%`** — overflows the frame intentionally for parallax headroom; clipped by `overflow: hidden` on the frame.

### `prefers-reduced-motion`

Both JS and CSS handle it. JS checks the media query before running GSAP, Lenis, and tilt/magnetic hooks. The CSS block at the bottom of `DarkLuxe.css` overrides every animation and transition. When adding new animated elements, cover both paths.

## Design context

- **PRODUCT.md** lives at `site/PRODUCT.md` — brand personality, users, anti-references, design principles.
- **DESIGN.md** lives at the repo root — full token set, type scale, spacing rules, motion conventions, decoration patterns.

When using the `/impeccable` skill, set `IMPECCABLE_CONTEXT_DIR=site` so the loader finds PRODUCT.md.

```bash
$env:IMPECCABLE_CONTEXT_DIR = "site"   # PowerShell
```
