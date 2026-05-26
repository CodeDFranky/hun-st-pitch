import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './WarmModern.css'

/* MOTION_INTENSITY: 4 — fluid reveals, tasteful transitions, tactile hover states */

const ease = [0.25, 0.1, 0.25, 1]

function Reveal({ children, className, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export default function WarmModern() {
  return (
    <div className="wm">

      {/* ── Nav ───────────────────────────── */}
      <nav className="wm-nav">
        <span className="wm-nav-brand">Franco Ramos</span>
        <ul className="wm-nav-links">
          <li><a href="#systems">Systems</a></li>
          <li><a href="#arch">Architecture</a></li>
          <li><a href="#contact" className="wm-nav-cta-link">Get in touch</a></li>
        </ul>
      </nav>

      {/* ── Hero ──────────────────────────── */}
      <section className="wm-hero">
        <div className="wm-hero-left">
          <motion.span
            className="wm-hero-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI Architect — Hunt St Assessment
          </motion.span>
          <motion.h1
            className="wm-hero-h1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease }}
          >
            I build the systems that let ten people do<br />
            <span>the work of thirty.</span>
          </motion.h1>
          <motion.p
            className="wm-hero-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            For Hunt St, that means AI and automation across Studio, Table One,
            and No Filter — designed, built, and extended as you learn what works.
            Full ownership from day one.
          </motion.p>
          <motion.div
            className="wm-hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <a href="#systems" className="wm-btn-primary">See what I'd build</a>
            <a href="#contact" className="wm-btn-secondary">Get in touch ›</a>
          </motion.div>
        </div>
        <div className="wm-hero-right">
          <img
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=900&auto=format&q=80"
            alt="Modern hospitality interior"
          />
        </div>
      </section>

      {/* ── Strip ─────────────────────────── */}
      <div className="wm-strip" id="systems">
        {[
          { h: 'Studio', p: 'Hospitality & retail design' },
          { h: 'Table One', p: 'Strategy & advisory' },
          { h: 'No Filter', p: 'Marketing & growth' },
          { h: 'Three businesses', p: 'One connected AI layer' },
        ].map(item => (
          <div key={item.h} className="wm-strip-item">
            <h4>{item.h}</h4>
            <p>{item.p}</p>
          </div>
        ))}
      </div>

      {/* ── Studio ────────────────────────── */}
      <Reveal>
        <section className="wm-biz">
          <div className="wm-biz-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&auto=format&q=80"
              alt="Fine dining interior"
            />
          </div>
          <div className="wm-biz-copy">
            <span className="wm-biz-tag">Studio</span>
            <h2 className="wm-biz-h2">Hospitality &amp; Retail Design</h2>
            <p className="wm-biz-sub">All'Antico Vinaio, Racqueteer, Sea Salt Clovelly + others</p>
            <ul className="wm-systems">
              <li>Project Workspace Generation</li>
              <li>Cost Planning Agent — sketch to v0 cost plan</li>
              <li>Builder Budget Revision Loop</li>
              <li>Weekly Client Status Reporting Layer</li>
            </ul>
          </div>
        </section>
      </Reveal>

      {/* ── Table One ─────────────────────── */}
      <Reveal delay={0.05}>
        <section className="wm-biz wm-biz--alt">
          <div className="wm-biz-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&q=80"
              alt="Strategic workspace"
            />
          </div>
          <div className="wm-biz-copy">
            <span className="wm-biz-tag">Table One</span>
            <h2 className="wm-biz-h2">Hospitality Strategy &amp; Advisory</h2>
            <p className="wm-biz-sub">Site sourcing, feasibility, lease, investor decks</p>
            <ul className="wm-systems">
              <li>Feasibility Modelling Agent</li>
              <li>Fee Proposal Generator — brief in, proposal out</li>
              <li>Pipeline Rhythm in Streak</li>
              <li>Investor Deck Drafting Layer</li>
            </ul>
          </div>
        </section>
      </Reveal>

      {/* ── No Filter ─────────────────────── */}
      <Reveal delay={0.05}>
        <section className="wm-nf">
          <div className="wm-nf-header">
            <h2 className="wm-nf-h2">
              No Filter —<br />
              <span>Psychology-led</span><br />
              marketing studio
            </h2>
            <div className="wm-nf-intro">
              <p>
                Brand voice, content production, performance reporting, and AI-search
                systems — calibrated per client voice, built to scale without
                proportional headcount growth.
              </p>
            </div>
          </div>
          <div className="wm-nf-grid">
            {[
              { h: 'Brand Voice', p: 'Interviews to voice guide to enforcement layer across all content output.' },
              { h: 'Content Pipeline', p: 'LinkedIn, Instagram, EDM, short-form — calibrated per client voice.' },
              { h: 'Performance Reporting', p: 'Meta, Google, LinkedIn Ads into client-ready narrative insights.' },
              { h: 'AI-Search & SEO', p: 'GEO/AEO — keyword clustering, content briefs, schema markup.' },
            ].map(item => (
              <div key={item.h} className="wm-nf-card">
                <h4>{item.h}</h4>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── Architecture ──────────────────── */}
      <Reveal>
        <section className="wm-arch" id="arch">
          <div className="wm-arch-left">
            <h2>
              One AI layer across<br />
              three businesses.<br />
              <span>Full ownership.</span>
            </h2>
            <p>
              I don't build isolated tools. I build a connected operating layer —
              shared memory, consistent evaluation, common integrations — that
              compounds over time and survives a two-week holiday.
            </p>
          </div>
          <div className="wm-arch-right">
            {[
              { n: '01', h: 'Memory Architecture', p: "Compounds across businesses — what Studio learns informs Table One's models." },
              { n: '02', h: 'Evaluation Built In', p: 'Every agent has observability. You know when one fails before it matters.' },
              { n: '03', h: 'Cross-Business Learning', p: "No Filter's performance data sharpens the brand voice layer over time." },
              { n: '04', h: 'Documentation First', p: 'Architecture that survives change and scales beyond one person.' },
            ].map(item => (
              <div key={item.n} className="wm-arch-item">
                <span className="wm-arch-n">{item.n}</span>
                <div className="wm-arch-text">
                  <h4>{item.h}</h4>
                  <p>{item.p}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── Why ───────────────────────────── */}
      <Reveal>
        <section className="wm-why">
          <h2 className="wm-why-h2">
            I think at architecture level.<br />
            I ship at <em>"live by Friday."</em>
          </h2>
          <div className="wm-why-grid">
            {[
              { h: "I've done this before.", p: "Not prototypes. Systems that run daily workflows for real businesses. I know where the failure modes are." },
              { h: "I understand your industries.", p: "Hospitality, design, and growth aren't generic contexts. I know what good output looks like." },
              { h: "I work with founders directly.", p: "I can explain why an agent works, why one didn't, and what I'd change. No translator needed." },
              { h: "I have opinions.", p: "On tools, architecture, sequencing, and tradeoffs. Willing to be wrong. Always have a view." },
            ].map(item => (
              <div key={item.h} className="wm-why-item">
                <h3>{item.h}</h3>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── CTA ───────────────────────────── */}
      <Reveal>
        <section id="contact" className="wm-cta">
          <span className="wm-cta-tag">Ready when you are</span>
          <h2 className="wm-cta-h2">
            Ready to own<br />the <span>AI layer?</span>
          </h2>
          <a href="mailto:d.franco.ramos1@gmail.com" className="wm-cta-email">
            d.franco.ramos1@gmail.com
          </a>
          <br />
          <a href="mailto:d.franco.ramos1@gmail.com" className="wm-btn-cta">
            Get in touch
          </a>
          <p className="wm-built">Built with Claude Code + TasteSkill v2 + Impeccable</p>
        </section>
      </Reveal>

      {/* ── Footer ────────────────────────── */}
      <footer className="wm-footer">
        <p>Franco Ramos — AI Architect</p>
        <p>Hunt St Assessment — 2025</p>
      </footer>

    </div>
  )
}
