# Franco Ramos · Hunt St Assessment

Hunt St sent me a reference video about building professional websites with Claude Code, and a brief: show your most creative and visually polished work.

This is my response. Live at **[hun-st-pitch.vercel.app](https://hun-st-pitch.vercel.app)**

---

## What I built

Rather than a generic demo, I built something specific to Hunt St's world — a single-page dark luxury site that walks through what an embedded AI Architect would actually deliver across Studio, Table One, and No Filter.

The design and the content are both part of the answer. One shows I can build beyond AI slop. The other shows I've done the thinking about their business.

| Business | What I'd build |
|---|---|
| **Studio** | Workspace generation, cost planning, builder communication loops, automated weekly status |
| **Table One** | Feasibility modelling, fee proposals, pipeline rhythm, investor deck generation |
| **No Filter** | Brand voice consistency, content pipeline automation, AI-search optimisation, performance reporting |

---

## How it was built

Completed in under 24 hours using an agentic workflow with Claude Code. Brief, content, architecture proposals, and creative direction are mine — Claude generated code under continuous direction and iteration.

The reference video used Google Stitch for design. I went a different route: [Impeccable](https://impeccable.style/) for UI craft and [TasteSkill](https://www.tasteskill.dev/) for design direction. Both are Claude Code skills built specifically to avoid the AI slop problem the video calls out — Impeccable enforces design laws, TasteSkill shapes aesthetic decisions before a line of code is written.

That workflow is the capability I'm applying to bring inside Hunt St.

---

## Stack

- **React + Vite** — build tooling
- **Framer Motion** — scroll-driven reveals, section transitions, accordion
- **GSAP + SplitText** — hero character-by-character entrance animation
- **Lenis** — smooth scroll with parallax
- **Vanilla CSS** — custom Dark Luxe design system (no UI library)

---

## Design system

Full token set, typography scale, spacing rules, motion conventions, and decoration patterns in [`DESIGN.md`](./DESIGN.md).

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

Root directory: `site` · Framework: Vite (auto-detected) · Build command: `npm run build` · Output: `dist`
