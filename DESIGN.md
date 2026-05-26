# Design System — Dark Luxe

Franco Ramos · Hunt St pitch site. Single variant. Production.

---

## Tokens

```css
--bg:            #0C0A08
--surface:       #181513
--surface2:      #1F1A16
--text:          #EDE7DE
--muted:         #928879
--accent:        #C4A96B
--border:        rgba(196, 169, 107, 0.12)

/* Shadow tokens — computed from the above, named for intent */
--text-dim:      rgba(237, 231, 222, 0.72)   /* body copy over dark */
--accent-border: rgba(196, 169, 107, 0.28)   /* vitrine frame borders */
--accent-light:  #d4b97d                      /* button hover gradient lighter stop */
--muted-dim:     rgba(146, 136, 121, 0.65)   /* ultra-quiet metadata */
```

Never use raw `rgba()` for these values inline. Always reference a token. New opacity variants get a name in this block before use.

---

## Typography

**Families:** Cormorant Garamond (display, italic) + DM Sans (body, UI)

**Heading scale:**

| Role | Class | Size | Weight |
|---|---|---|---|
| Hero h1 | `.dl-hero-h1` | `clamp(3.5rem, 5.5vw, 6rem)` | 300 |
| Arch h2 | `.dl-arch-h2` | `clamp(3rem, 5vw, 5.5rem)` | 300 |
| CTA h2 | `.dl-cta-h2` | `clamp(3rem, 5vw, 5rem)` | **400** |
| Section h2 (Studio, Table One, No Filter) | `.dl-biz-h2` / `.dl-nf-h2` | `clamp(2rem, 3.5vw, 3.5rem)` | 300 |
| Why h2 | `.dl-why-h2` | `clamp(2rem, 3.5vw, 3.5rem)` | **400** |

Weight escalates toward the end of the page: content sections are 300 (descriptive), Why and CTA are 400 (assertive). Do not change weights back to 300 — the progression is intentional.

**Body text — two sizes only:**

| Role | Size |
|---|---|
| Primary body (hero, section prose) | `1rem` |
| Secondary body (arch, why, CTA, accordion) | `0.92rem` |

No values between these. If adding body copy, pick one of the two.

**Labels / eyebrow text:**

One style: `0.68rem / weight 400 / letter-spacing 0.18em / uppercase / var(--accent)`.

Three classes exist (`.dl-label`, `.dl-biz-num`, `.dl-why-over`) — all must use `letter-spacing: 0.18em`. If adding a new label anywhere, use `.dl-label` or match this spec exactly.

---

## Spacing

**Section horizontal padding:** `5rem` desktop, `1.5rem` at 900px, `1.25rem` at 480px. Nav, footer, and the `dl-rule` hairline all use `5rem` — they align with section content. No exceptions.

**Section vertical padding:** `6rem` top/bottom for business sections, `8rem` for Arch and Why, `10rem` for CTA.

---

## Accent lines

**Horizontal dividers within components** (e.g. `.dl-why-rule`): may use `linear-gradient(to right, var(--accent), transparent)` — fades out rather than stripes.

**Animated UI indicators** (e.g. `.dl-hero-scroll-line`): may use directional gradients.

**No left-side stripe lines.** The arch heading thread and why-statement left line have been removed. A 1px `position: absolute` stripe next to a heading is the same slop pattern as `border-left` on a card — it reads as AI scaffolding. Do not reintroduce these on any new section.

---

## Decoration patterns

**Vitrine frames** (`.dl-studio-vitrine-frame`, `.dl-tableone-vitrine-frame`): defined in grouped selectors. Adding a third business section means adding its vitrine frame to the same group, not duplicating the CSS block.

**Corner brackets:** `::before` (top-left) and `::after` (bottom-right), `1.4rem × 1.4rem`, solid `var(--accent)`, `1px` border on two sides each. Both vitrines share this treatment identically.

**Buttons:**

All three share the same visual grammar: ghost outline at rest, fill on hover. Differentiated by size and weight only.

- `.dl-btn` — outline, slide-fill `::before` on hover, `color: var(--accent)` at rest, `color: var(--bg)` on hover (hero)
- `.dl-btn-filled` — same outline + slide-fill mechanic, `font-weight: 500`, more generous padding `1.1rem 3.5rem` (CTA)
- `.dl-nav-cta` — compact outline, direct background fill on hover (no `::before`), `transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)` (nav)

Never use a solid/opaque background for a button at rest. The slide-fill IS the hover moment.

---

## Motion rules

- All scroll/resize listeners use `{ passive: true }`
- Ease out: `[0.165, 0.84, 0.44, 1]` or `[0.16, 1, 0.3, 1]` (expo-out family)
- No bounce, no elastic, no spring
- `prefers-reduced-motion: reduce` block covers: parallax, grain, sheen, marquee, scroll indicator, scroll-driven reveals, panel descriptions, arch animation, why mark rotation
- Hero h1 sheen: `::after` overlay with `mix-blend-mode: screen` — NOT `background-clip: text` (absolute ban)

---

## What not to do

- No decorative gradient text — `background-clip: text` is banned as a *styling* technique (rainbow or colour-wash gradients that substitute for typography). **Exception:** the hero h1 uses `background-clip: text` inside `@supports` for a monochromatic metallic sheen animation (`#EDE7DE` base, `#fff9ee` / `#c0a97a` sweep peak/flanks). This is an animation effect, not a style — the text reads as solid cream at rest. If you try to replace it with a `::after` overlay, you cannot limit the shimmer to text pixels only; the CSS Compositing spec means the overlay shows on transparent areas too. Do not "fix" the `background-clip` on the h1.
- No glassmorphism as default decoration — nav backdrop blur is functional (readability on scroll), vitrine tag blur is functional (legibility over video)
- No identical card grids — Arch gallery uses intentional size variation
- No side-stripe borders (`border-left` > 1px as decorative accent)
- Do not add body text sizes between `1rem` and `0.92rem`
- Do not create a new label class — extend `.dl-label` or match the spec
