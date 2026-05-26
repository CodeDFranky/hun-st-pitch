# Franco Ramos · AI Architect for Hunt St

This repo is a job application. A pitch site I built to show David and the Hunt St team what an embedded AI Architect would actually look like across Studio, Table One, and No Filter.

Live at **[hun-st-pitch.vercel.app](https://hun-st-pitch.vercel.app)**

---

## The pitch

Hunt St runs three distinct businesses under one roof. What I'm proposing isn't three separate AI tool stacks — it's a single shared intelligence layer that compounds across all three, with each business getting purpose-built workflows on top.

| Business | What I'd build |
|---|---|
| **Studio** | Workspace generation, cost planning, builder communication loops, automated weekly status — so the design team ships faster with less overhead |
| **Table One** | Feasibility modelling, fee proposals, pipeline rhythm, investor deck generation — the analytical layer that scales advisory capacity without scaling headcount |
| **No Filter** | Brand voice consistency, content pipeline automation, AI-search optimisation, performance reporting — so the marketing output stays psychologically sharp at volume |

The architecture section on the site explains how a unified data and memory layer makes each of these better, not just individually faster.

---

## How this was built

I built this site in under 24 hours using an agentic development workflow with Claude Code. The brief, content, architecture proposals, and creative direction are mine — Claude generated code under continuous direction and iteration.

The speed and quality together are the proof of concept. It's the same way I'd work inside Hunt St.

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
