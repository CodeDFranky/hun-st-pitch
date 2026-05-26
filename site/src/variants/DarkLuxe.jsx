import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
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
  { h: 'Brand Voice', p: 'Interviews to voice guide to enforcement layer across all content output.', long: 'A repeatable pipeline that captures how a founder actually speaks, codifies it into a voice guide, and enforces it at every content surface — so the brand stays consistent whether one person ships or ten do.' },
  { h: 'Content Pipeline', p: 'LinkedIn, Instagram, EDM, short-form — calibrated per client voice.', long: 'A multi-channel content engine where every output is calibrated against the voice layer first. Same idea, different shape, per platform — never the same post stretched four ways.' },
  { h: 'Performance Reporting', p: 'Meta, Google, LinkedIn Ads pulled into client-ready narrative insights.', long: 'Paid media data pulled, normalised, and translated into the story behind the numbers — what worked, what didn\'t, what to test next. Less dashboard, more decision support.' },
  { h: 'AI-Search & SEO', p: 'GEO/AEO — keyword clustering, content briefs, schema markup.', long: 'Generative engine optimisation for the new search layer: clustering, structured briefs, schema markup. Built so the brand shows up when an LLM is the one answering the question.' },
]

const NF_CYCLE_MS = 5000

const STUDIO_SYSTEMS = [
  { title: 'Project Workspace Generation', gloss: 'Spin a fully-scoped Notion + Drive workspace from a single brief.' },
  { title: 'Cost Planning Agent', gloss: 'Sketch in, v0 cost plan out — sized against current builder rates.' },
  { title: 'Builder Budget Revision Loop', gloss: 'Quote diffs reconciled against the live plan in one pass.' },
  { title: 'Weekly Client Status Layer', gloss: 'Auto-drafted update with risks, decisions, and next-week asks.' },
]

const STUDIO_CLIENTS = ["All'Antico Vinaio", 'Racqueteer', 'Sea Salt Clovelly', '+ Others']

const TABLEONE_LEDGER = [
  {
    title: 'Feasibility Modelling Agent',
    gloss: 'Site to model in days. Capex, opex, breakeven, sensitivity — defensible at the table.',
    video: 'https://videos.pexels.com/video-files/5264261/5264261-hd_1920_1080_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&q=80',
    place: 'Feasibility · Live Model',
  },
  {
    title: 'Fee Proposal Generator',
    gloss: 'Brief in, proposal out. Scope, fee structure, deliverable matrix — drafted in voice.',
    video: 'https://videos.pexels.com/video-files/4109049/4109049-hd_1920_1080_30fps.mp4',
    poster: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&auto=format&q=80',
    place: 'Proposal · In Draft',
  },
  {
    title: 'Pipeline Rhythm in Streak',
    gloss: 'Live deal flow with feasibility status, lease stage, and decision owners surfaced weekly.',
    video: 'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600&auto=format&q=80',
    place: 'Pipeline · This Week',
  },
  {
    title: 'Investor Deck Drafting Layer',
    gloss: 'One investor pack from the same model. Updated the day the assumptions move.',
    video: 'https://videos.pexels.com/video-files/856894/856894-hd_1920_1080_25fps.mp4',
    poster: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&auto=format&q=80',
    place: 'Deck · Investor Pack',
  },
]

function ArchStrip() {
  const ref = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x}%`)
        el.style.setProperty('--my', `${y}%`)
      })
    }
    const handleEnter = () => el.classList.add('is-lit')
    const handleLeave = () => {
      el.classList.remove('is-lit')
      cancelAnimationFrame(rafRef.current)
    }

    el.addEventListener('pointermove', handleMove)
    el.addEventListener('pointerenter', handleEnter)
    el.addEventListener('pointerleave', handleLeave)
    return () => {
      el.removeEventListener('pointermove', handleMove)
      el.removeEventListener('pointerenter', handleEnter)
      el.removeEventListener('pointerleave', handleLeave)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={ref} className="dl-arch-strip">
      <div className="dl-arch-spot" aria-hidden />
      {ARCH_ITEMS.map((item, i) => (
        <motion.div
          key={item.n}
          className="dl-arch-cell"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.7, delay: i * 0.1, ease }}
        >
          <div className="dl-arch-n">{item.n}</div>
          <div className="dl-arch-t">{item.title}</div>
          <p className="dl-arch-d">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

function WhyAccordion() {
  const [open, setOpen] = useState(0)
  return (
    <div className="dl-why-items">
      {WHY_ITEMS.map((item, i) => {
        const isOpen = open === i
        return (
          <motion.div
            key={item.title}
            className={`dl-why-item${isOpen ? ' is-open' : ''}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-5% 0px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease }}
          >
            <span className="dl-why-n">0{i + 1}</span>
            <div className="dl-why-body">
              <button
                type="button"
                className="dl-why-trigger"
                onClick={() => setOpen(isOpen ? -1 : i)}
                onMouseEnter={() => setOpen(i)}
                onFocus={() => setOpen(i)}
                aria-expanded={isOpen}
              >
                <h3>{item.title}</h3>
                <span className="dl-why-mark" aria-hidden>{isOpen ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    className="dl-why-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <div className="dl-why-rule" />
                    <p>{item.body}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

function TableOneSection() {
  const [active, setActive] = useState(0)
  const videoRefs = useRef([])

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      if (i === active) {
        const p = v.play()
        if (p && typeof p.catch === 'function') p.catch(() => {})
      } else {
        v.pause()
      }
    })
  }, [active])

  const current = TABLEONE_LEDGER[active]

  return (
    <section id="tableone" className="dl-tableone">
      <div className="dl-tableone-plate">
        {TABLEONE_LEDGER.map((item, i) => (
          <video
            key={item.video}
            ref={(el) => { videoRefs.current[i] = el }}
            className={`dl-tableone-plate-video${i === active ? ' is-active' : ''}`}
            autoPlay={i === active}
            muted
            loop
            playsInline
            preload="metadata"
            poster={item.poster}
          >
            <source src={item.video} type="video/mp4" />
          </video>
        ))}
        <div className="dl-tableone-plate-overlay" />
        <div className="dl-tableone-plate-meta">
          <span className="dl-tableone-eyebrow">02 — Table One</span>
          <span className="dl-tableone-eyebrow-rule" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              className="dl-tableone-place"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.4, ease }}
            >
              {current.place}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
      <div className="dl-tableone-body">
        <div className="dl-tableone-header">
          <h2 className="dl-biz-h2">Hospitality<br />Strategy &amp; Advisory</h2>
          <p className="dl-tableone-prose">
            Site sourcing through investor decking — feasibility, fees, pipeline, decks.
            Modelled, drafted, defensible at the table.
          </p>
        </div>
        <ol className="dl-tableone-ledger" role="tablist" aria-label="Table One systems">
          {TABLEONE_LEDGER.map((item, i) => {
            const isActive = i === active
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`dl-tableone-row${isActive ? ' is-active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="dl-tableone-rn">0{i + 1}</span>
                  <span className="dl-tableone-rt">{item.title}</span>
                  <span className="dl-tableone-rg">{item.gloss}</span>
                  <span className="dl-tableone-row-rule" aria-hidden />
                </button>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function NFExhibit() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const current = NF_SERVICES[active]
  const pad = (n) => String(n + 1).padStart(2, '0')

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => {
      setActive((a) => (a + 1) % NF_SERVICES.length)
    }, NF_CYCLE_MS)
    return () => clearTimeout(id)
  }, [active, paused])

  const handlePick = (i) => {
    if (i === active) return
    setActive(i)
  }

  return (
    <div
      className={`dl-nf-exhibit${paused ? ' is-paused' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="dl-nf-header">
        <p className="dl-label">03 — No Filter</p>
        <h2 className="dl-nf-h2">Psychology-Led<br />Marketing Studio</h2>
        <p className="dl-nf-sub">Brand voice · Content · Performance · AI-Search</p>
      </div>
      <div className="dl-nf-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="dl-nf-feature"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.55, ease }}
          >
            <div className="dl-nf-feature-num">
              <span>{pad(active)}</span>
              <span className="dl-nf-feature-sep" aria-hidden>/</span>
              <span className="dl-nf-feature-total">{pad(NF_SERVICES.length - 1)}</span>
            </div>
            <h3 className="dl-nf-feature-h">{current.h}</h3>
            <p className="dl-nf-feature-p">{current.long}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div
        className="dl-nf-ticker"
        role="tablist"
        aria-label="No Filter services"
      >
        {NF_SERVICES.map((item, i) => (
          <button
            type="button"
            key={item.h}
            role="tab"
            aria-selected={active === i}
            aria-label={`Show ${item.h}`}
            className={[
              'dl-nf-seg',
              i === active ? 'is-active' : '',
              i < active ? 'is-done' : '',
            ].filter(Boolean).join(' ')}
            onClick={() => handlePick(i)}
          >
            <span className="dl-nf-seg-fill" aria-hidden />
            <span className="dl-nf-seg-label">{item.h}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

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
      <FadeIn>
        <section id="studio" className="dl-studio">
          <div className="dl-studio-inner">
            <div className="dl-studio-copy">
              <p className="dl-biz-num">01 — Studio</p>
              <h2 className="dl-biz-h2">Hospitality<br />&amp; Retail Design</h2>
              <p className="dl-studio-prose">
                Design files turned into ops. Workspaces, cost plans, builder loops,
                weekly status — running so the team ships without me in the room.
              </p>
              <ul className="dl-studio-ledger">
                {STUDIO_SYSTEMS.map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                  >
                    <span className="dl-studio-rn">0{i + 1}</span>
                    <span className="dl-studio-rcopy">
                      <span className="dl-studio-rt">{item.title}</span>
                      <span className="dl-studio-rg">{item.gloss}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="dl-studio-vitrine">
              <div className="dl-studio-vitrine-frame">
                <video autoPlay muted loop playsInline
                  poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&q=80">
                  <source src="https://videos.pexels.com/video-files/4109049/4109049-hd_1920_1080_30fps.mp4" type="video/mp4" />
                </video>
                <span className="dl-studio-vitrine-tag">Studio · Live Build</span>
              </div>
            </div>
          </div>
          <div className="dl-studio-marquee" aria-hidden>
            <div className="dl-studio-marquee-track">
              {[...STUDIO_CLIENTS, ...STUDIO_CLIENTS, ...STUDIO_CLIENTS].map((name, i) => (
                <span key={i} className="dl-studio-marquee-item">
                  <span className="dl-studio-marquee-text">{name}</span>
                  <span className="dl-studio-marquee-dot">●</span>
                </span>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* ── Table One ─────────────────────── */}
      <FadeIn delay={0.05}>
        <TableOneSection />
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
          <NFExhibit />
        </section>
      </FadeIn>

      {/* ── Architecture ──────────────────── */}
      <FadeIn>
        <section className="dl-arch">
          <video className="dl-arch-video" autoPlay muted loop playsInline
            poster="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&auto=format&q=80">
            <source src="https://videos.pexels.com/video-files/2882090/2882090-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="dl-arch-overlay" />
          <div className="dl-arch-inner">
            <h2 className="dl-arch-h2">
              One AI layer.<br />
              Three businesses.<br />
              <em>Full ownership.</em>
            </h2>
            <p className="dl-arch-body">
              I don't build isolated tools. I build a connected operating layer — shared memory,
              consistent evaluation, common integrations — that compounds over time.
            </p>
            <ArchStrip />
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
            <WhyAccordion />
          </div>
        </section>
      </FadeIn>

      {/* ── CTA ───────────────────────────── */}
      <FadeIn>
        <section id="contact" className="dl-cta">
          <video className="dl-cta-video" autoPlay muted loop playsInline
            poster="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1400&auto=format&q=80">
            <source src="https://videos.pexels.com/video-files/856894/856894-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="dl-cta-inner">
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
          </div>
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
