import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './DarkLuxe.css'

const ease = [0.25, 0.1, 0.25, 1]

function FadeIn({ children, className, delay = 0, as = 'div' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  const Tag = motion[as] || motion.div
  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </Tag>
  )
}

const ARCH_ITEMS = [
  { n: '01', title: 'Memory Architecture', desc: "Compounds across businesses — what Studio learns can inform Table One's feasibility models." },
  { n: '02', title: 'Evaluation Built In', desc: 'Every agent has observability. You know when one fails before it matters.' },
  { n: '03', title: 'Cross-Business Learning', desc: "No Filter's performance data sharpens the brand voice layer over time." },
  { n: '04', title: 'Documentation First', desc: 'Architecture that survives a two-week holiday and scales beyond one person.' },
]

const WHY_ITEMS = [
  { title: "I've done this before.", body: "Not prototypes. Not demos. Systems that run daily workflows for real businesses. I know where the failure modes are and how to build around them." },
  { title: 'I understand your industries.', body: "Hospitality, design, and growth marketing aren't generic contexts for me. I know what good output looks like and where AI lifts the needle versus where it creates noise." },
  { title: 'I work with founders directly.', body: "I can explain why an agent works, why one didn't, and what I'd change. No technical translator needed between us." },
  { title: 'I have opinions.', body: "On tools, architecture, sequencing, and tradeoffs. I'm willing to be wrong. But I always have a view — and I'll defend it." },
]

export default function DarkLuxe() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <div className="dl">

      {/* ── Nav ───────────────────────────── */}
      <nav className={`dl-nav${scrolled ? ' dl-nav--scrolled' : ''}`}>
        <span className="dl-nav-brand">Franco Ramos</span>
        <ul className="dl-nav-links">
          <li><a href="#studio">Studio</a></li>
          <li><a href="#tableone">Table One</a></li>
          <li><a href="#nofilter">No Filter</a></li>
          <li><a href="#contact" className="dl-nav-cta">Contact</a></li>
        </ul>
      </nav>

      {/* ── Hero ──────────────────────────── */}
      <section className="dl-hero">
        <div className="dl-hero-text">
          <motion.p className="dl-label"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}>
            AI Architect
          </motion.p>
          <motion.h1 className="dl-hero-h1"
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease }}>
            Architecture<br />first. <em>Output</em><br />second.
          </motion.h1>
          <motion.p className="dl-hero-body"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}>
            I design and ship AI and automation systems for founder-led businesses
            in hospitality, design, and growth. I own the stack, build the agents,
            and teach the team.
          </motion.p>
          <motion.a href="#studio" className="dl-btn"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}>
            See what I'd build
          </motion.a>
        </div>
        <div className="dl-hero-img">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&auto=format&q=85"
            alt="Atmospheric restaurant interior"
          />
          <div className="dl-hero-img-fade" />
        </div>
      </section>

      <div className="dl-rule" />

      {/* ── Studio ────────────────────────── */}
      <FadeIn id="studio" as="section">
        <section id="studio" className="dl-biz">
          <div className="dl-biz-img">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&q=80"
              alt="Fine dining interior"
            />
          </div>
          <div className="dl-biz-copy">
            <p className="dl-biz-num">01 — Studio</p>
            <h2 className="dl-biz-h2">Hospitality<br />&amp; Retail Design</h2>
            <p className="dl-biz-sub">All'Antico Vinaio, Racqueteer, Sea Salt Clovelly + others</p>
            <ul className="dl-systems">
              <li>Project Workspace Generation</li>
              <li>Cost Planning Agent — sketch to v0 cost plan</li>
              <li>Builder Budget Revision Loop</li>
              <li>Weekly Client Status Reporting Layer</li>
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* ── Table One ─────────────────────── */}
      <FadeIn delay={0.05}>
        <section id="tableone" className="dl-biz dl-biz--flip">
          <div className="dl-biz-img">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&q=80"
              alt="Strategic workspace"
            />
          </div>
          <div className="dl-biz-copy">
            <p className="dl-biz-num">02 — Table One</p>
            <h2 className="dl-biz-h2">Hospitality<br />Strategy &amp; Advisory</h2>
            <p className="dl-biz-sub">Site sourcing, feasibility, lease, investor decks</p>
            <ul className="dl-systems">
              <li>Feasibility Modelling Agent</li>
              <li>Fee Proposal Generator — brief in, proposal out</li>
              <li>Pipeline Rhythm in Streak</li>
              <li>Investor Deck Drafting Layer</li>
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* ── No Filter ─────────────────────── */}
      <FadeIn delay={0.05}>
        <section id="nofilter" className="dl-nf">
          <div className="dl-nf-bg">
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&auto=format&q=80"
              alt="Content creation studio"
            />
          </div>
          <div className="dl-nf-inner">
            <p className="dl-label">03 — No Filter</p>
            <h2 className="dl-nf-h2">Psychology-Led<br />Marketing Studio</h2>
            <p className="dl-nf-sub">Brand voice, content, performance, growth</p>
            <div className="dl-nf-grid">
              {[
                { h: 'Brand Voice', p: 'Interviews to voice guide to enforcement layer across all content output.' },
                { h: 'Content Pipeline', p: 'LinkedIn, Instagram, EDM, short-form — calibrated per client voice.' },
                { h: 'Performance Reporting', p: 'Meta, Google, LinkedIn Ads pulled into client-ready narrative insights.' },
                { h: 'AI-Search & SEO', p: 'GEO/AEO — keyword clustering, content briefs, schema markup.' },
              ].map(item => (
                <div key={item.h} className="dl-nf-item">
                  <h4>{item.h}</h4>
                  <p>{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Architecture ──────────────────── */}
      <FadeIn>
        <section className="dl-arch">
          <h2 className="dl-arch-h2">
            One AI layer.<br />
            Three businesses.<br />
            <em>Full ownership.</em>
          </h2>
          <p className="dl-arch-body">
            I don't build isolated tools. I build a connected operating layer — shared memory,
            consistent evaluation, common integrations — that compounds over time.
          </p>
          <div className="dl-arch-strip">
            {ARCH_ITEMS.map(item => (
              <div key={item.n} className="dl-arch-cell">
                <div className="dl-arch-n">{item.n}</div>
                <div className="dl-arch-t">{item.title}</div>
                <p className="dl-arch-d">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Why ───────────────────────────── */}
      <FadeIn>
        <section className="dl-why">
          <div className="dl-why-hd">
            <p className="dl-why-over">Why me</p>
            <h2 className="dl-why-h2">
              I think at architecture level.<br />I ship at "live by Friday."
            </h2>
          </div>
          <div className="dl-why-grid">
            {WHY_ITEMS.map(item => (
              <div key={item.title} className="dl-why-item">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── CTA ───────────────────────────── */}
      <FadeIn>
        <section id="contact" className="dl-cta">
          <h2 className="dl-cta-h2">Ready to own<br />the AI layer?</h2>
          <a href="mailto:d.franco.ramos1@gmail.com" className="dl-cta-email">
            d.franco.ramos1@gmail.com
          </a>
          <br />
          <a href="mailto:d.franco.ramos1@gmail.com" className="dl-btn-filled">
            Get in touch
          </a>
          <p className="dl-built">
            Built with Claude Code + TasteSkill v2 + Impeccable
          </p>
        </section>
      </FadeIn>

      {/* ── Footer ────────────────────────── */}
      <footer className="dl-footer">
        <p>Franco Ramos — AI Architect</p>
        <p>Hunt St Assessment — 2025</p>
      </footer>

    </div>
  )
}
