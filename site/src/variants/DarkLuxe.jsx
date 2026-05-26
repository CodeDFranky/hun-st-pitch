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
  { title: "I've shipped this — not prototypes, not demos.", body: "Real systems running daily workflows for real businesses. I know where the failure modes are because I've already hit most of them." },
  { title: "Hospitality isn't a generic context to me.", body: "I know what good creative output looks like, where AI lifts the needle, and where it creates noise. Studio, Table One, and No Filter each deserve specific thinking." },
  { title: "You won't need a translator.", body: "I can walk through every architecture call — why an agent works, why one didn't, what I'd change. Clear explanations are part of the job." },
  { title: "I'll always have a view — and change it if you're right.", body: "On tools, architecture, sequencing, tradeoffs. I'll back every decision up and update it when the evidence shifts." },
]

const NF_SERVICES = [
  { h: 'Brand Voice', p: 'Interviews to voice guide to enforcement layer across all content output.' },
  { h: 'Content Pipeline', p: 'LinkedIn, Instagram, EDM, short-form — calibrated per client voice.' },
  { h: 'Performance Reporting', p: 'Meta, Google, LinkedIn Ads pulled into client-ready narrative insights.' },
  { h: 'AI-Search & SEO', p: 'GEO/AEO — keyword clustering, content briefs, schema markup.' },
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
        <video
          className="dl-hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&auto=format&q=85"
        >
          <source src="https://videos.pexels.com/video-files/856894/856894-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="dl-hero-video-overlay" />
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
              {['Project Workspace Generation', 'Cost Planning Agent — sketch to v0 cost plan', 'Builder Budget Revision Loop', 'Weekly Client Status Reporting Layer'].map((s, idx) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      </FadeIn>

      {/* ── Table One ─────────────────────── */}
      <FadeIn delay={0.05}>
        <section id="tableone" className="dl-biz dl-biz--portrait">
          <div className="dl-biz-copy">
            <p className="dl-biz-num">02 — Table One</p>
            <h2 className="dl-biz-h2">Hospitality<br />Strategy &amp; Advisory</h2>
            <p className="dl-biz-sub">Site sourcing, feasibility, lease, investor decks</p>
            <ul className="dl-systems">
              {['Feasibility Modelling Agent', 'Fee Proposal Generator — brief in, proposal out', 'Pipeline Rhythm in Streak', 'Investor Deck Drafting Layer'].map((s, idx) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                >
                  {s}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="dl-biz-img">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&q=80"
              alt="Strategic workspace"
            />
          </div>
        </section>
      </FadeIn>

      {/* ── No Filter ─────────────────────── */}
      <FadeIn delay={0.05}>
        <section id="nofilter" className="dl-nf">
          <div className="dl-nf-bg">
            <video autoPlay muted loop playsInline
              poster="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&auto=format&q=80">
              <source src="https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="dl-nf-inner">
            <div className="dl-nf-left">
              <p className="dl-label">03 — No Filter</p>
              <h2 className="dl-nf-h2">Psychology-Led<br />Marketing Studio</h2>
              <p className="dl-nf-sub">Brand voice, content, performance, growth</p>
              <p className="dl-nf-desc">Content production and performance systems calibrated per client voice — built to scale without losing the creative quality that makes the work worth sharing.</p>
            </div>
            <div className="dl-nf-right">
              {NF_SERVICES.map((item, i) => (
                <div key={item.h} className="dl-nf-service">
                  <span className="dl-nf-n">0{i + 1}</span>
                  <div>
                    <h4>{item.h}</h4>
                    <p>{item.p}</p>
                  </div>
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
            {ARCH_ITEMS.map((item, i) => (
              <motion.div
                key={item.n}
                className="dl-arch-cell"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="dl-arch-n">{item.n}</div>
                <div className="dl-arch-t">{item.title}</div>
                <p className="dl-arch-d">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* ── Why ───────────────────────────── */}
      <FadeIn>
        <section className="dl-why">
          <div className="dl-why-split">
            <div className="dl-why-statement">
              <p className="dl-why-over">Why me</p>
              <h2 className="dl-why-h2">
                I think at<br />architecture level.<br />I ship at <em>"live by Friday."</em>
              </h2>
              <p className="dl-why-lead">I can explain every call we make together — from architecture to implementation to what I'd change. That transparency is part of the job.</p>
            </div>
            <div className="dl-why-items">
              {WHY_ITEMS.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="dl-why-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-5% 0px' }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <span className="dl-why-n">0{i + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── CTA ───────────────────────────── */}
      <FadeIn>
        <section id="contact" className="dl-cta">
          <h2 className="dl-cta-h2">Ready to own<br />the AI layer?</h2>
          <p className="dl-cta-body">
            Available for a conversation, a working session, or a practical assessment — in whatever order makes sense for you.
          </p>
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
