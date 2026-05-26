import { useRef, useCallback } from 'react'

const MAX_ROTATE = 6
const LERP_IN = 0.18
const LERP_OUT = 0.12

export function useTilt() {
  const elRef = useRef(null)
  const rafRef = useRef(null)
  const target = useRef({ rx: 0, ry: 0, tz: 0 })
  const current = useRef({ rx: 0, ry: 0, tz: 0 })
  const hovering = useRef(false)

  const applyTransform = (el) => {
    const { rx, ry, tz } = current.current
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${tz}px)`
  }

  const tick = useCallback(() => {
    const el = elRef.current
    if (!el) { rafRef.current = null; return }
    const c = current.current
    const t = target.current
    const lerp = hovering.current ? LERP_IN : LERP_OUT
    c.rx += (t.rx - c.rx) * lerp
    c.ry += (t.ry - c.ry) * lerp
    c.tz += (t.tz - c.tz) * lerp
    applyTransform(el)
    const done = !hovering.current &&
      Math.abs(c.rx) < 0.02 && Math.abs(c.ry) < 0.02 && Math.abs(c.tz) < 0.02
    if (done) {
      el.style.transform = ''
      rafRef.current = null
    } else {
      rafRef.current = requestAnimationFrame(tick)
    }
  }, [])

  const onMouseMove = useCallback((e) => {
    const el = elRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    hovering.current = true
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    target.current = { rx: -dy * MAX_ROTATE, ry: dx * MAX_ROTATE, tz: 8 }
    if (!rafRef.current) rafRef.current = requestAnimationFrame(tick)
  }, [tick])

  const onMouseLeave = useCallback(() => {
    hovering.current = false
    target.current = { rx: 0, ry: 0, tz: 0 }
    if (!rafRef.current) {
      const el = elRef.current
      if (el) rafRef.current = requestAnimationFrame(tick)
    }
  }, [tick])

  return { ref: elRef, onMouseMove, onMouseLeave }
}
