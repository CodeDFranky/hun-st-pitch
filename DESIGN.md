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

| Role | Class | Size |
|---|---|---|
| Hero h1 | `.dl-hero-h1` | `clamp(3.5rem, 5.5vw, 6rem)` |
| Arch h2 | `.dl-arch-h2` | `clamp(3rem, 5vw, 5.5rem)` |
| CTA h2 | `.dl-cta-h2` | `clamp(3rem, 5vw, 5rem)` |
| Section h2 (all three businesses + Why) | `.dl-biz-h2` / `.dl-nf-h2` / `.dl-why-h2` | `clamp(2rem, 3.5vw, 3.5rem)` |

All three business sections (Studio, Table One, No Filter) and the Why section are the same tier. They use the same heading scale. Do not differentiate them by size.

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

**Structural vertical lines** (left-side thread decorations beside headings):

```css
position: absolute;
left: 0;
top: 0.06em;
width: 1px;
background: var(--accent);   /* SOLID — never a gradient */
```

Used in: `.dl-arch-thread` (animated scaleY via Framer Motion), `.dl-why-statement::before`.

**Rule:** These lines are always solid `var(--accent)`. The animation provides dynamism on the arch thread — gradient on top of animation is redundant. A static pseudo-element does not need a gradient as a substitute for dynamism; solid is more honest and more consistent with every other 1px accent in the design (vitrine corner brackets, section borders, nav border).

**Horizontal dividers within components** (e.g. `.dl-why-rule`): may use `linear-gradient(to right, var(--accent), transparent)` — different category, different purpose.

**Animated UI indicators** (e.g. `.dl-hero-scroll-line`): may use directional gradients — different category.

---

## Decoration patterns

**Vitrine frames** (`.dl-studio-vitrine-frame`, `.dl-tableone-vitrine-frame`): defined in grouped selectors. Adding a third business section means adding its vitrine frame to the same group, not duplicating the CSS block.

**Corner brackets:** `::before` (top-left) and `::after` (bottom-right), `1.4rem × 1.4rem`, solid `var(--accent)`, `1px` border on two sides each. Both vitrines share this treatment identically.

**Buttons:**
- `.dl-btn` — outline with slide-fill on hover (hero)
- `.dl-btn-filled` — solid fill with accent-light gradient shift on hover (CTA)
- `.dl-nav-cta` — compact outline in nav

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
