# Hunt St — AI Architecture Pitch

A job application pitch site built for [Hunt St](https://huntst.com.au/). Proposes a practical AI operating layer across their three businesses — Studio, Table One, and No Filter.

Live at **[hun-st-pitch.vercel.app](https://hun-st-pitch.vercel.app)** *(once deployed)*

---

## What it is

A single-page dark luxury site that walks through what I'd build as an AI Architect embedded across Hunt St's portfolio:

| Business | Proposal |
|---|---|
| **Studio** | Hospitality & retail design ops — workspace generation, cost planning, builder loops, weekly status |
| **Table One** | Hospitality strategy & advisory — feasibility modelling, fee proposals, pipeline rhythm, investor decks |
| **No Filter** | Psychology-led marketing studio — brand voice, content pipeline, performance reporting, AI-search |

The architecture section explains how a single shared AI layer compounds across all three rather than running isolated tools per business.

---

## Stack

- **React + Vite** — build tooling
- **Framer Motion** — scroll-driven reveals, accordion, section transitions
- **GSAP + SplitText** — hero character-by-character entrance
- **Lenis** — smooth scroll with parallax
- **Vanilla CSS** — custom design system (Dark Luxe tokens, no UI library)

---

## Design system

Tokens, typography scale, spacing rules, motion conventions, and decoration patterns are documented in [`DESIGN.md`](./DESIGN.md).

---

## Local development

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Deploy (Vercel)

Import from GitHub. In the Vercel project settings:

- **Root directory:** `site`
- **Framework:** Vite (auto-detected)
- **Build command:** `npm run build`
- **Output directory:** `dist`

---

## About

Built by **Franco Ramos** — full-stack developer working in AI automation.

Brief and content: mine. Design execution: Claude Code.
