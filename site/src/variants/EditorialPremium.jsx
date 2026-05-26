import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import './EditorialPremium.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* MOTION_INTENSITY: 3 — word-level hero stagger, viewport list animations, arch/why entry stagger. */

function SlideIn({ children, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-6% 0px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

function WordReveal({ children, delay = 0 }) {
  const words = children.split(' ')
  return (
    <>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: delay + i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {word}
        </motion.span>
      ))}
    </>
  )
}

const BIZ_DATA = [
  {
    num: '01', tag: 'Studio',
    title: <>Hospitality<br />&amp; Retail Design</>,
    sub: "All'Antico Vinaio, Racqueteer, Sea Salt Clovelly",
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&auto=format&q=80',
    alt: 'Fine dining interior',
    systems: ['Project Workspace Generation', 'Cost Planning Agent', 'Builder Budget Revision Loop', 'Weekly Client Status Layer'],
  },
  {
    num: '02', tag: 'Table One',
    title: <>Hospitality<br />Strategy &amp; Advisory</>,
    sub: 'Site sourcing, feasibility, lease, investor decks',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&auto=format&q=80',
    alt: 'Strategy workspace',
    systems: ['Feasibility Modelling Agent', 'Fee Proposal Generator', 'Pipeline Rhythm in Streak', 'Investor Deck Drafting Layer'],
  },
]

const NF_SERVICES = [
  { h: 'Brand Voice Infrastructure', p: 'Founder interviews to voice guide to enforcement layer.' },
  { h: 'Content Production Pipeline', p: 'LinkedIn, Instagram, EDM, short-form — calibrated per client.' },
  { h: 'Performance Reporting', p: 'Meta, Google, LinkedIn Ads into client-ready narrative insights.' },
  { h: 'AI-Search & SEO', p: 'GEO/AEO — keyword clustering, content briefs, schema markup.' },
]

const WHY_DATA = [
  { h: "Production systems, not demos.", p: "Real systems running daily workflows for real businesses. I know where the failure modes are because I've already hit most of them." },
  { h: "Hospitality is a specific context.", p: "I know what good creative output looks like, where AI lifts the needle, and where it creates noise. That specificity matters when you're building for Studio, Table One, and No Filter." },
  { h: "Every decision has a clear reason.", p: "I can walk through any architecture call — why the agent works, why one didn't, what I'd change. No translator needed." },
  { h: "I'll always have a view.", p: "On tools, architecture, sequencing, tradeoffs. I'll back every decision up, and change it when the evidence shifts." },
]

const ARCH_DATA = [
  { h: 'Memory Architecture', p: "Compounds across businesses. What Studio learns informs Table One's models." },
  { h: 'Evaluation Built In', p: 'Every agent has observability. You know when one fails before it matters.' },
  { h: 'Cross-Business Learning', p: "No Filter's performance data sharpens the brand voice layer over time." },
  { h: 'Documentation First', p: 'Architecture that survives a two-week holiday and scales beyond one person.' },
]

export default function EditorialPremium() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.ep-arch-entry', {
        x: 80,
        opacity: 0,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.ep-arch-rest',
          start: 'top 72%',
          end: 'bottom 38%',
          scrub: 0.9,
        },
      })
      gsap.utils.toArray('.ep-biz-h2, .ep-nf-h2').forEach((el) => {
        gsap.from(el, {
          clipPath: 'inset(0 0 100% 0)',
          ease: 'power4.inOut',
          duration: 1.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="ep">

      {/* ── Nav ───────────────────────────── */}
      <nav className="ep-nav">
        <span className="ep-nav-brand">Franco Ramos</span>
        <div className="ep-nav-right">
          <span className="ep-nav-issue">Issue 01 / Hunt St Assessment</span>
          <ul className="ep-nav-links">
            <li><a href="#biz">Systems</a></li>
            <li><a href="#arch">Architecture</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────── */}
      <section className="ep-hero">
        <div className="ep-hero-left">
          <motion.p
            className="ep-issue-tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI Architect for Hunt St
          </motion.p>
          <h1 className="ep-hero-h1">
            <WordReveal delay={0.4}>The systems that compound</WordReveal>
            <br />
            <WordReveal delay={0.7}>while you sleep.</WordReveal>
          </h1>
          <motion.p
            className="ep-hero-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            I design and ship AI and automation systems for founder-led businesses.
            I own the architecture, build the agents, teach the team, and keep
            extending the stack as we learn what works together.
          </motion.p>
          <motion.a
            href="#biz"
            className="ep-link-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Read on ›
          </motion.a>
        </div>
        <div className="ep-hero-right">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&q=80"
            alt="Premium hospitality interior"
          />
        </div>
      </section>

      {/* ── Chapter Intro ─────────────────── */}
      <div className="ep-chapter" id="biz">
        <span className="ep-chapter-label">Three businesses. One connected AI layer.</span>
        <div className="ep-chapter-line" />
      </div>

      {/* ── Studio + Table One ─────────────── */}
      {BIZ_DATA.map((biz) => (
        <SlideIn key={biz.num}>
          <section className="ep-biz">
            <div className="ep-biz-sidebar">
              <div className="ep-biz-num">{biz.num}</div>
              <span className="ep-biz-tag">{biz.tag}</span>
            </div>
            <div className="ep-biz-main">
              <div>
                <h2 className="ep-biz-h2">{biz.title}</h2>
                <p className="ep-biz-sub">{biz.sub}</p>
                <ul className="ep-systems">
                  {biz.systems.map((s, idx) => (
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
              <div className="ep-biz-img">
                <img src={biz.img} alt={biz.alt} />
              </div>
            </div>
          </section>
        </SlideIn>
      ))}

      {/* ── No Filter ─────────────────────── */}
      <SlideIn>
        <section className="ep-nf">
          <div className="ep-nf-sidebar">
            <div className="ep-biz-num">03</div>
            <span className="ep-biz-tag">No Filter</span>
          </div>
          <div className="ep-nf-main">
            <h2 className="ep-nf-h2">Psychology-Led<br />Marketing Studio</h2>
            <p className="ep-nf-sub">Brand voice, content, performance, growth</p>
            <div className="ep-nf-list">
              {NF_SERVICES.map((item, i) => (
                <div key={item.h} className="ep-nf-entry">
                  <span className="ep-nf-entry-n">0{i + 1}</span>
                  <h4>{item.h}</h4>
                  <p>{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SlideIn>

      {/* ── Architecture ──────────────────── */}
      <SlideIn>
        <section className="ep-arch" id="arch">
          <div className="ep-arch-split">
            <div className="ep-arch-lead">
              <h2 className="ep-arch-h2">
                One AI layer.<br />Three businesses.<br /><em>Full ownership.</em>
              </h2>
              <motion.div
                className="ep-arch-first"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0 }}
              >
                <span className="ep-arch-label">{ARCH_DATA[0].h}</span>
                <p>{ARCH_DATA[0].p}</p>
              </motion.div>
            </div>
            <div className="ep-arch-rest">
              {ARCH_DATA.slice(1).map((item) => (
                <div key={item.h} className="ep-arch-entry">
                  <h4>{item.h}</h4>
                  <p>{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </SlideIn>

      {/* ── Why ───────────────────────────── */}
      <SlideIn>
        <section className="ep-why">
          <div className="ep-why-intro">
            <h2 className="ep-why-h2">
              I think at<br />architecture level.<br />
              I ship at<br /><em>"live by Friday."</em>
            </h2>
            <div className="ep-why-body">
              <p>
                I'm not a consultant who writes decks. I design the systems, build them,
                teach the rest of the business how to use them, and keep extending them
                as we learn what works. Full ownership from day one.
              </p>
            </div>
          </div>
          <div className="ep-why-entries">
            {WHY_DATA.map((item, i) => (
              <motion.div
                key={item.h}
                className="ep-why-entry"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <div className="ep-why-entry-head">
                  <span className="ep-why-entry-n">0{i + 1}</span>
                  <h3>{item.h}</h3>
                </div>
                <p>{item.p}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </SlideIn>

      {/* ── CTA ───────────────────────────── */}
      <SlideIn>
        <section id="contact" className="ep-cta">
          <h2 className="ep-cta-h2">
            Ready to own<br />the AI <em>layer?</em>
          </h2>
          <div className="ep-cta-right">
            <p className="ep-cta-body">
              Available for a conversation, a working session, or a practical assessment — in whatever order makes sense.
            </p>
            <a href="mailto:d.franco.ramos1@gmail.com" className="ep-cta-email">
              d.franco.ramos1@gmail.com
            </a>
            <a href="mailto:d.franco.ramos1@gmail.com" className="ep-cta-btn">
              Get in touch ›
            </a>
            <p className="ep-built">Built with Claude Code + TasteSkill v2 + Impeccable</p>
          </div>
        </section>
      </SlideIn>

      {/* ── Footer ────────────────────────── */}
      <footer className="ep-footer">
        <p>Franco Ramos — AI Architect</p>
        <p>Hunt St Assessment — 2025</p>
      </footer>

    </div>
  )
}
