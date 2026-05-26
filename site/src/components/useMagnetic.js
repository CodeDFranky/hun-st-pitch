import { useRef, useCallback } from 'react'

const MAX_X = 10
const MAX_Y = 6
const LERP_IN = 0.20
const LERP_OUT = 0.10

export function useMagnetic() {
  const elRef = useRef(null)
  const rafRef = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const hovering = useRef(false)

  const tick = useCallback(() => {
    const el = elRef.current
    if (!el) { rafRef.current = null; return }
    const c = current.current
    const t = target.current
    const lerp = hovering.current ? LERP_IN : LERP_OUT
    c.x += (t.x - c.x) * lerp
    c.y += (t.y - c.y) * lerp
    el.style.transform = `translate(${c.x}px, ${c.y}px)`
    const done = !hovering.current && Math.abs(c.x) < 0.05 && Math.abs(c.y) < 0.05
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
    target.current = { x: dx * MAX_X, y: dy * MAX_Y }
    if (!rafRef.current) rafRef.current = requestAnimationFrame(tick)
  }, [tick])

  const onMouseLeave = useCallback(() => {
    hovering.current = false
    target.current = { x: 0, y: 0 }
    if (!rafRef.current) {
      const el = elRef.current
      if (el) rafRef.current = requestAnimationFrame(tick)
    }
  }, [tick])

  return { ref: elRef, onMouseMove, onMouseLeave }
}
