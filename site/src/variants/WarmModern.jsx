import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import './WarmModern.css'

/* MOTION_INTENSITY: 5 — fluid reveals, scroll-driven scale, staggered entries */

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

const WHY_ITEMS = [
  { h: "I've shipped this — not just planned it.", p: "Real systems running daily workflows for real businesses. I know where the failure modes are because I've already hit most of them." },
  { h: "Hospitality and growth aren't abstract to me.", p: "I know what good creative output looks like, where AI lifts the needle, and where it creates noise. Studio, Table One, and No Filter each need specific thinking." },
  { h: "You won't need to translate anything.", p: "I can walk through every call we make together — why an agent works, why one didn't, what I'd change next." },
  { h: "I'll always bring a view — and back it up.", p: "On tools, architecture, sequencing, tradeoffs. And I'll change my mind when the evidence is good enough." },
]

const NF_SERVICES = [
  { h: 'Brand Voice', p: 'Interviews to voice guide to enforcement layer across all content output.' },
  { h: 'Content Pipeline', p: 'LinkedIn, Instagram, EDM, short-form — calibrated per client voice.' },
  { h: 'Performance Reporting', p: 'Meta, Google, LinkedIn Ads into client-ready narrative insights.' },
  { h: 'AI-Search & SEO', p: 'GEO/AEO — keyword clustering, content briefs, schema markup.' },
]

function MagneticButton({ children, className, href }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15 })
  const springY = useSpring(y, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    if (Math.sqrt(dx * dx + dy * dy) < 80) {
      x.set(dx * 0.4)
      y.set(dy * 0.4)
    }
  }

  const handleMouseLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.a>
  )
}

export default function WarmModern() {
  const heroRef = useRef(null)
  const { scrollY } = useScroll()
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.05])

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
      <section className="wm-hero" ref={heroRef}>
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
            and No Filter — designed, built, and extended as we learn what works together.
            Full ownership from day one.
          </motion.p>
          <motion.div
            className="wm-hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <motion.a
              href="#systems"
              className="wm-btn-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 18 }}
            >
              See what I'd build
            </motion.a>
            <a href="#contact" className="wm-btn-secondary">Get in touch ›</a>
          </motion.div>
        </div>
        <motion.div className="wm-hero-right" style={{ scale: heroScale }}>
          <div className="wm-hero-right-overlay" />
          <video
            className="wm-hero-video"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=900&auto=format&q=80"
          >
            <source src="https://videos.pexels.com/video-files/4761286/4761286-hd_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </section>

      {/* ── Marquee ───────────────────────── */}
      <div className="wm-marquee" id="systems">
        <div className="wm-marquee-track">
          {[...Array(2)].map((_, outer) => (
            <span key={outer} className="wm-marquee-group">
              <span className="wm-marquee-item">Studio</span>
              <span className="wm-marquee-dot">·</span>
              <span className="wm-marquee-item">Table One</span>
              <span className="wm-marquee-dot">·</span>
              <span className="wm-marquee-item">No Filter</span>
              <span className="wm-marquee-dot">·</span>
              <span className="wm-marquee-item">Three businesses</span>
              <span className="wm-marquee-dot">·</span>
              <span className="wm-marquee-item">One AI layer</span>
              <span className="wm-marquee-dot">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Studio ────────────────────────── */}
      <Reveal>
        <section className="wm-biz wm-biz--wide">
          <div className="wm-biz-img-wrap">
            <video autoPlay muted loop playsInline
              poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1000&auto=format&q=80">
              <source src="https://videos.pexels.com/video-files/4109049/4109049-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="wm-biz-copy">
            <span className="wm-biz-tag">Studio</span>
            <h2 className="wm-biz-h2">Hospitality &amp; Retail Design</h2>
            <p className="wm-biz-sub">All'Antico Vinaio, Racqueteer, Sea Salt Clovelly + others</p>
            <ul className="wm-systems">
              {[
                'Project Workspace Generation',
                'Cost Planning Agent — sketch to v0 cost plan',
                'Builder Budget Revision Loop',
                'Weekly Client Status Reporting Layer',
              ].map((s, idx) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -10 }}
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
      </Reveal>

      {/* ── Table One ─────────────────────── */}
      <Reveal delay={0.05}>
        <section className="wm-biz wm-biz--alt">
          <div className="wm-biz-img-wrap">
            <video autoPlay muted loop playsInline
              poster="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&q=80">
              <source src="https://videos.pexels.com/video-files/6985285/6985285-hd_1920_1080_25fps.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="wm-biz-copy">
            <span className="wm-biz-tag">Table One</span>
            <h2 className="wm-biz-h2">Hospitality Strategy &amp; Advisory</h2>
            <p className="wm-biz-sub">Site sourcing, feasibility, lease, investor decks</p>
            <ul className="wm-systems">
              {[
                'Feasibility Modelling Agent',
                'Fee Proposal Generator — brief in, proposal out',
                'Pipeline Rhythm in Streak',
                'Investor Deck Drafting Layer',
              ].map((s, idx) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -10 }}
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
          <div className="wm-nf-list">
            {NF_SERVICES.map((item, i) => (
              <motion.div
                key={item.h}
                className="wm-nf-entry"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <span className="wm-nf-entry-n">0{i + 1}</span>
                <div className="wm-nf-entry-body">
                  <h4>{item.h}</h4>
                  <p>{item.p}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── Video Strip ──────────────────── */}
      <div className="wm-video-strip">
        <video autoPlay muted loop playsInline
          poster="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&q=80">
          <source src="https://videos.pexels.com/video-files/3843536/3843536-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="wm-video-strip-copy">
          <span>One AI layer. Three businesses. Full ownership.</span>
        </div>
      </div>

      {/* ── Architecture ──────────────────── */}
      <Reveal>
        <section className="wm-arch" id="arch">
          <div className="wm-arch-header">
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
          <div className="wm-arch-rail">
            {[
              { n: '01', h: 'Memory Architecture', p: "Compounds across businesses — what Studio learns informs Table One's models." },
              { n: '02', h: 'Evaluation Built In', p: 'Every agent has observability. You know when one fails before it matters.' },
              { n: '03', h: 'Cross-Business Learning', p: "No Filter's performance data sharpens the brand voice layer over time." },
              { n: '04', h: 'Documentation First', p: 'Architecture that survives change and scales beyond one person.' },
            ].map((item, i) => (
              <motion.div
                key={item.n}
                className="wm-arch-step"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <span className="wm-arch-step-n">{item.n}</span>
                <h4>{item.h}</h4>
                <p>{item.p}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ── Why ───────────────────────────── */}
      <section className="wm-why">
        <div className="wm-why-inner">
          <Reveal>
            <h2 className="wm-why-h2">
              I think at architecture level.<br />
              I ship at <em>"live by Friday."</em>
            </h2>
          </Reveal>
          <div className="wm-why-list">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item.h}
                className="wm-why-entry"
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.7, delay: Math.floor(i / 2) * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
              >
                <span className="wm-why-ghost-n" aria-hidden="true">0{i + 1}</span>
                <div className="wm-why-entry-content">
                  <h3>{item.h}</h3>
                  <p>{item.p}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────── */}
      <Reveal>
        <section id="contact" className="wm-cta">
          <span className="wm-cta-tag">Ready when you are</span>
          <h2 className="wm-cta-h2">
            Ready to own<br />the <span>AI layer?</span>
          </h2>
          <p className="wm-cta-body">
            Available for a conversation, a working session, or a practical assessment — in whatever order makes sense for you.
          </p>
          <a href="mailto:d.franco.ramos1@gmail.com" className="wm-cta-email">
            d.franco.ramos1@gmail.com
          </a>
          <br />
          <MagneticButton href="mailto:d.franco.ramos1@gmail.com" className="wm-btn-cta">
            Get in touch
          </MagneticButton>
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
