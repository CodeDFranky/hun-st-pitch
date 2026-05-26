import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import gsap from 'gsap'
import Lenis from 'lenis'
import Cursor from '../components/Cursor'
import { useTilt } from '../components/useTilt'
import { useMagnetic } from '../components/useMagnetic'
import './DarkLuxe.css'

const ease = [0.165, 0.84, 0.44, 1]

const archHdVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } }
}
const archLineVariants = {
  hidden: { opacity: 0, y: 18, x: -8 },
  visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
}
const archThreadVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.65, delay: 0.5, ease: [0.16, 1, 0.3, 1] } }
}

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
  { n: '01', title: 'Memory Architecture', desc: "Compounds across businesses, so what Studio learns can inform Table One's feasibility models.", img: '/images/arch-01.jpg' },
  { n: '02', title: 'Evaluation Built In', desc: 'Every agent has observability, so you hear about a fail before it matters.', img: '/images/arch-02.jpg' },
  { n: '03', title: 'Cross-Business Learning', desc: "No Filter's performance data sharpens the brand voice layer over time.", img: '/images/arch-03.jpg' },
  { n: '04', title: 'Documentation First', desc: 'Architecture that survives a two-week holiday and scales beyond one person.', img: '/images/arch-04.jpg' },
]

const WHY_ITEMS = [
  { title: "I've built this kind of system in production.", body: "At Simple.biz I'm leading development of a legal case management SaaS for Social Security Disability law firms, case intake through hearing. AI document intelligence on AWS, hearing transcription via Deepgram, daily use by a real practice." },
  { title: "Hospitality and design aren't generic to me.", body: "At Luxury Presence I've built 300+ client sites for U.S. real estate brokerages. It taught me what good creative output looks like, and where AI helps versus where it just makes noise. Studio, Table One, and No Filter each deserve their own thinking." },
  { title: "We can talk through the work directly.", body: "I can walk you through every architecture call: what's working, what isn't, what I'd change. Clear explanations are part of the job." },
  { title: "I'll have a view, and update it when I'm wrong.", body: "On tools, architecture, sequencing, tradeoffs. I'll back every choice up, and I'll change it when the evidence shifts." },
]

const NF_SERVICES = [
  { h: 'Brand Voice', p: 'Interviews to voice guide to enforcement layer across all content output.', long: "A repeatable pipeline that captures how a founder actually speaks, codifies it into a voice guide, and enforces it at every content surface. The brand stays consistent whether one person ships or ten do.", video: '/videos/nofilter-bg.mp4', poster: '/images/nofilter-poster.jpg' },
  { h: 'Content Pipeline', p: 'LinkedIn, Instagram, EDM, short-form, calibrated per client voice.', long: 'A multi-channel content engine where every output is calibrated against the voice layer first. Same idea, different shape per platform. Never the same post stretched four ways.', video: '/videos/tableone-proposal.mp4', poster: '/images/tableone-proposal-poster.jpg' },
  { h: 'Performance Reporting', p: 'Meta, Google, LinkedIn Ads pulled into client-ready narrative insights.', long: "Paid media data pulled, normalised, and translated into the story behind the numbers: what worked, what didn't, what to test next. Less dashboard, more decision support.", video: '/videos/tableone-pipeline.mp4', poster: '/images/tableone-pipeline-poster.jpg' },
  { h: 'AI-Search & SEO', p: 'GEO/AEO. Keyword clustering, content briefs, schema markup.', long: 'Generative engine optimisation for the new search layer: clustering, structured briefs, schema markup. Built so the brand shows up when an LLM is the one answering the question.', video: '/videos/tableone-deck.mp4', poster: '/images/tableone-deck-poster.jpg' },
]

const NF_CYCLE_MS = 5000

const STUDIO_SYSTEMS = [
  { title: 'Project Workspace Generation', gloss: 'Spin a fully-scoped Notion and Drive workspace from a single brief.' },
  { title: 'Cost Planning Agent', gloss: 'Sketch in, v0 cost plan out, sized against current builder rates.' },
  { title: 'Builder Budget Revision Loop', gloss: 'Quote diffs reconciled against the live plan in one pass.' },
  { title: 'Weekly Client Status Layer', gloss: 'Auto-drafted update with risks, decisions, and next-week asks.' },
]

const STUDIO_CLIENTS = ["All'Antico Vinaio", 'Racqueteer', 'Sea Salt Clovelly', '+ Others']

const TABLEONE_LEDGER = [
  { title: 'Feasibility Modelling Agent', gloss: 'Site to model in days. Capex, opex, breakeven, sensitivity, ready to talk through.' },
  { title: 'Fee Proposal Generator', gloss: 'Brief in, proposal out. Scope, fee structure, deliverable matrix, drafted in voice.' },
  { title: 'Pipeline Rhythm in Streak', gloss: 'Live deal flow with feasibility status, lease stage, and decision owners surfaced weekly.' },
  { title: 'Investor Deck Drafting Layer', gloss: 'One investor pack from the same model. Updated the day the assumptions move.' },
]

function ArchHeading() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })
  return (
    <div className="dl-arch-h2-wrap" ref={ref}>
      <motion.span
        className="dl-arch-thread"
        aria-hidden="true"
        variants={archThreadVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      />
      <motion.h2
        className="dl-arch-h2"
        variants={archHdVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.span className="dl-arch-line" variants={archLineVariants}>One AI layer.</motion.span>
        <motion.span className="dl-arch-line" variants={archLineVariants}>Three businesses.</motion.span>
        <motion.span className="dl-arch-line" variants={archLineVariants}><em>Shared from day one.</em></motion.span>
      </motion.h2>
    </div>
  )
}

function MagneticWrap({ children, style }) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic()
  return (
    <div ref={ref} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}
         style={{ display: 'inline-block', ...style }}>
      {children}
    </div>
  )
}

function ArchPanel({ item, i }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt()
  return (
    <motion.article
      ref={ref}
      className={`dl-arch-panel dl-arch-panel--${item.n}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.85, delay: i * 0.12, ease }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <img
        className="dl-arch-panel-img"
        src={item.img}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="dl-arch-panel-overlay" aria-hidden="true" />
      <div className="dl-arch-panel-content">
        <span className="dl-arch-panel-n">{item.n}</span>
        <h3 className="dl-arch-panel-t">{item.title}</h3>
        <p className="dl-arch-panel-d">{item.desc}</p>
      </div>
    </motion.article>
  )
}

function ArchGallery() {
  return (
    <div className="dl-arch-gallery">
      {ARCH_ITEMS.map((item, i) => (
        <ArchPanel key={item.n} item={item} i={i} />
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
                aria-expanded={isOpen}
                aria-controls={`why-panel-${i}`}
              >
                <span className="dl-why-trigger-label">{item.title}</span>
                <span className="dl-why-mark" aria-hidden>{isOpen ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    id={`why-panel-${i}`}
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
  return (
    <section id="tableone" className="dl-tableone">
      <div className="dl-tableone-inner">
        <div className="dl-tableone-vitrine">
          <div className="dl-tableone-vitrine-frame">
            <video autoPlay muted loop playsInline preload="metadata" data-parallax
              poster="/images/tableone-feasibility-poster.jpg">
              <source src="/videos/tableone-feasibility.mp4" type="video/mp4" />
            </video>
            <span className="dl-tableone-vitrine-tag">Table One · Strategy</span>
          </div>
        </div>
        <div className="dl-tableone-copy">
          <p className="dl-biz-num">02 · Table One</p>
          <h2 className="dl-biz-h2">Hospitality<br />Strategy &amp; Advisory</h2>
          <p className="dl-tableone-prose">
            Site sourcing through investor decking. Feasibility, fees, pipeline, decks,
            modelled and drafted so the founder only sees what needs his judgment.
          </p>
          <ul className="dl-tableone-ledger">
            {TABLEONE_LEDGER.map((item, i) => (
              <motion.li
                key={item.title}
                className="dl-tableone-row"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
              >
                <span className="dl-tableone-rn">0{i + 1}</span>
                <span className="dl-tableone-rcopy">
                  <span className="dl-tableone-rt">{item.title}</span>
                  <span className="dl-tableone-rg">{item.gloss}</span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function NFSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const videoRefs = useRef([])
  const current = NF_SERVICES[active]
  const pad = (n) => String(n + 1).padStart(2, '0')

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => {
      setActive((a) => (a + 1) % NF_SERVICES.length)
    }, NF_CYCLE_MS)
    return () => clearTimeout(id)
  }, [active, paused])

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

  const handlePick = (i) => {
    if (i === active) return
    setActive(i)
  }

  return (
    <section
      id="nofilter"
      className="dl-nf"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="dl-nf-bg">
        {NF_SERVICES.map((item, i) => (
          <video
            key={item.video}
            ref={(el) => { videoRefs.current[i] = el }}
            className={`dl-nf-bg-video${i === active ? ' is-active' : ''}`}
            data-parallax
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
      </div>
      <div className={`dl-nf-exhibit${paused ? ' is-paused' : ''}`}>
        <div className="dl-nf-header">
          <p className="dl-label">03 · No Filter</p>
          <h2 className="dl-nf-h2">Psychology-Led<br />Marketing Studio</h2>
          <p className="dl-nf-sub">Brand voice · Content · Performance · AI-Search</p>
        </div>
        <div
          className="dl-nf-stage"
          id="dl-nf-panel"
          role="tabpanel"
          aria-labelledby={`dl-nf-tab-${active}`}
          aria-live="polite"
        >
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
              id={`dl-nf-tab-${i}`}
              role="tab"
              aria-selected={active === i}
              aria-controls="dl-nf-panel"
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
    </section>
  )
}

const NAV_LINKS = [
  { href: '#studio', label: 'Studio' },
  { href: '#tableone', label: 'Table One' },
  { href: '#nofilter', label: 'No Filter' },
  { href: '#contact', label: 'Contact' },
]

export default function DarkLuxe() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const hamburgerRef = useRef(null)
  const drawerRef = useRef(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => {
        drawerRef.current?.querySelector('a')?.focus()
      })
    } else {
      hamburgerRef.current?.focus()
    }
  }, [menuOpen])

  useEffect(() => {
    const ids = ['studio', 'tableone', 'nofilter', 'contact']
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const o = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-35% 0px -55% 0px' }
      )
      o.observe(el)
      return o
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    window.__lenis = lenis
    const updateParallax = () => {
      document.querySelectorAll('[data-parallax]').forEach(v => {
        const container = v.closest('section') ?? v.parentElement
        const rect = container.getBoundingClientRect()
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) / (window.innerHeight + rect.height)
        v.style.transform = `translateY(${offset * 25}%)`
      })
    }
    lenis.on('scroll', updateParallax)
    let rafId
    const raf = (t) => { lenis.raf(t); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    updateParallax()
    const onResize = () => updateParallax()
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.__lenis = null
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.dl-hero-text > *, .dl-hero-scroll').forEach(el => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }
    const heroH1     = document.querySelector('.dl-hero-h1')
    const heroVideo  = document.querySelector('.dl-hero-video')
    const heroLabel  = document.querySelector('.dl-hero-text .dl-label')
    const heroBody   = document.querySelector('.dl-hero-body')
    const heroBtn    = document.querySelector('.dl-hero-text .dl-btn')
    const heroScroll = document.querySelector('.dl-hero-scroll')

    gsap.set(heroH1, { y: 32 })
    gsap.set(heroVideo, { filter: 'brightness(0) saturate(0.62)' })
    gsap.set([heroLabel, heroBody, heroBtn, heroScroll], { opacity: 0 })

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl
      .to(heroVideo,  { filter: 'brightness(0.38) saturate(0.62)', duration: 1.6, ease: 'power2.inOut' }, 0)
      .to(heroLabel,  { opacity: 1, duration: 0.8 }, 0.6)
      .to(heroH1,     { opacity: 1, y: 0, duration: 1.1 }, 0.85)
      .to(heroBody,   { opacity: 1, duration: 0.9 }, 1.65)
      .to(heroBtn,    { opacity: 1, duration: 0.7 }, 1.95)
      .to(heroScroll, { opacity: 1, duration: 0.9 }, 2.35)

    return () => { tl.kill() }
  }, [])

  return (
    <>
    <Cursor />
    <div className="dl">

      {/* ── Nav ───────────────────────────── */}
      <nav className={`dl-nav${(scrolled || menuOpen) ? ' dl-nav--scrolled' : ''}`}>
        <span className="dl-nav-brand">Franco Ramos</span>
        <ul className="dl-nav-links">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={[
                  href === '#contact' ? 'dl-nav-cta' : '',
                  '#' + activeSection === href ? 'dl-nav-link--active' : '',
                ].filter(Boolean).join(' ') || undefined}
              >{label}</a>
            </li>
          ))}
        </ul>
        <button
          ref={hamburgerRef}
          className={`dl-nav-hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="dl-mobile-nav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      {/* ── Mobile nav drawer ────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            className="dl-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            id="dl-mobile-nav"
            className="dl-nav-mobile"
            ref={drawerRef}
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ duration: 0.3, ease: [0.165, 0.84, 0.44, 1] }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <span className="dl-nav-mobile-brand">Franco Ramos</span>
            <ul>
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.28, delay: 0.08 + i * 0.05, ease }}
                >
                  <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Hero ──────────────────────────── */}
      <section className="dl-hero">
        <video
          className="dl-hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
          data-parallax
        >
          <source src="/videos/hero-loop.mp4" type="video/mp4" />
        </video>
        <div className="dl-hero-video-overlay" />
        <div className="dl-hero-text">
          <p className="dl-label" style={{ opacity: 0 }}>AI Architect</p>
          <h1 className="dl-hero-h1" style={{ opacity: 0 }}>
            Building AI<br />for work<br /><em>that moves.</em>
          </h1>
          <p className="dl-hero-body" style={{ opacity: 0 }}>
            Full-stack developer working in AI automation, building production systems
            that actually do something. I'd love to bring that to Hunt St's three
            businesses, and I've sketched out what I'd build for each.
          </p>
          <MagneticWrap style={{ alignSelf: 'flex-start' }}>
            <a href="#studio" className="dl-btn" style={{ opacity: 0 }}>
              See what I'd build
            </a>
          </MagneticWrap>
        </div>
        <div className="dl-hero-scroll" style={{ opacity: 0 }} aria-hidden="true">
          <span className="dl-hero-scroll-line" />
          <span className="dl-hero-scroll-caret" />
        </div>
      </section>

      <div className="dl-rule" />

      {/* ── Studio ────────────────────────── */}
      <FadeIn>
        <section id="studio" className="dl-studio">
          <div className="dl-studio-inner">
            <div className="dl-studio-copy">
              <p className="dl-biz-num">01 · Studio</p>
              <h2 className="dl-biz-h2">Hospitality<br />&amp; Retail Design</h2>
              <p className="dl-studio-prose">
                Design files turned into ops. Workspaces, cost plans, builder loops,
                weekly status, so the team keeps shipping even when nobody's in the room.
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
                <video autoPlay muted loop playsInline preload="metadata" data-parallax
                  poster="/images/studio-poster.jpg">
                  <source src="/videos/studio-build.mp4" type="video/mp4" />
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
        <NFSection />
      </FadeIn>

      {/* ── Architecture ──────────────────── */}
      <section className="dl-arch">
        <div className="dl-arch-inner">
          <div className="dl-arch-header">
            <ArchHeading />
            <motion.p
              className="dl-arch-body"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.85, delay: 0.3, ease }}
            >
              Isolated tools don't compound. A connected operating layer does: shared memory,
              consistent evaluation, common integrations that get sharper with use.
            </motion.p>
          </div>
          <ArchGallery />
        </div>
      </section>

      {/* ── Why ───────────────────────────── */}
      <FadeIn>
        <section className="dl-why">
          <div className="dl-why-split">
            <div className="dl-why-statement">
              <p className="dl-why-over">Why me</p>
              <h2 className="dl-why-h2">
                Architecture-level<br />thinking.<br />Live <em>by Friday.</em>
              </h2>
              <p className="dl-why-lead">I can explain every call we'd make together: architecture, implementation, what I'd change. Transparency is part of the job.</p>
            </div>
            <WhyAccordion />
          </div>
        </section>
      </FadeIn>

      {/* ── CTA ───────────────────────────── */}
      <FadeIn>
        <section id="contact" className="dl-cta">
          <video className="dl-cta-video" autoPlay muted loop playsInline data-parallax
            poster="/images/cta-poster.jpg">
            <source src="/videos/cta.mp4" type="video/mp4" />
          </video>
          <div className="dl-cta-inner">
            <h2 className="dl-cta-h2">Build the AI layer<br /><em>across all three.</em></h2>
            <p className="dl-cta-body">
              Happy to start with a conversation, a working session, or a practical assessment, in whatever order makes sense.
            </p>
            <a href="mailto:d.franco.ramos1@gmail.com" className="dl-cta-email">
              d.franco.ramos1@gmail.com
            </a>
            <MagneticWrap>
              <a href="mailto:d.franco.ramos1@gmail.com" className="dl-btn-filled">
                Get in touch
              </a>
            </MagneticWrap>
            <p className="dl-built">
              Built in under 24 hours with Claude Code · brief and content mine, design fully delegated to the AI
            </p>
          </div>
        </section>
      </FadeIn>

      {/* ── Footer ────────────────────────── */}
      <footer className="dl-footer">
        <p>Franco Ramos · AI Architect</p>
        <p>For Hunt St · 2026</p>
      </footer>

    </div>
    </>
  )
}
