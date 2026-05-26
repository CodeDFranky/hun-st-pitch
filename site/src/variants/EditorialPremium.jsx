import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './EditorialPremium.css'

/* MOTION_INTENSITY: 2 — almost static. Only hero entry + clean hover states. */

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

export default function EditorialPremium() {
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
          <motion.h1
            className="ep-hero-h1"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            The systems that compound<br />while <em>you sleep.</em>
          </motion.h1>
          <motion.p
            className="ep-hero-body"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            I design and ship AI and automation systems for founder-led businesses.
            I own the architecture, build the agents, teach the team, and keep
            extending the stack as we learn what works.
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
      {BIZ_DATA.map((biz, i) => (
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
                  {biz.systems.map(s => <li key={s}>{s}</li>)}
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
            <div className="ep-nf-grid">
              {[
                { h: 'Brand Voice Infrastructure', p: 'Founder interviews to voice guide to enforcement layer.' },
                { h: 'Content Production Pipeline', p: 'LinkedIn, Instagram, EDM, short-form — calibrated per client.' },
                { h: 'Performance Reporting', p: 'Meta, Google, LinkedIn Ads into client-ready narrative insights.' },
                { h: 'AI-Search & SEO', p: 'GEO/AEO — keyword clustering, content briefs, schema markup.' },
              ].map(item => (
                <div key={item.h} className="ep-nf-item">
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
          <h2 className="ep-arch-h2">
            One AI layer.<br />Three businesses.<br /><em>Full ownership.</em>
          </h2>
          <div className="ep-arch-strip">
            {[
              { h: 'Memory Architecture', p: "Compounds across businesses. What Studio learns informs Table One's models." },
              { h: 'Evaluation Built In', p: 'Every agent has observability. You know when one fails before it matters.' },
              { h: 'Cross-Business Learning', p: "No Filter's performance data sharpens the brand voice layer over time." },
              { h: 'Documentation First', p: 'Architecture that survives a two-week holiday and scales beyond one person.' },
            ].map(item => (
              <div key={item.h} className="ep-arch-item">
                <h4>{item.h}</h4>
                <p>{item.p}</p>
              </div>
            ))}
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
          <div className="ep-why-items">
            {[
              { h: "I've done this before.", p: "Systems that run daily workflows for real businesses — not prototypes." },
              { h: "I understand your industries.", p: "Hospitality, design, and growth marketing aren't generic contexts." },
              { h: "I work with founders.", p: "I can explain why an agent works, why one didn't, and what to change." },
              { h: "I have opinions.", p: "On tools, architecture, tradeoffs. Willing to be wrong. Always have a view." },
            ].map(item => (
              <div key={item.h} className="ep-why-item">
                <h3>{item.h}</h3>
                <p>{item.p}</p>
              </div>
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
