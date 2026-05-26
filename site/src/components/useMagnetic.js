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

  const onMouseMove = useCallback((e) => {
    const el = elRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    target.current = { x: dx * MAX_X, y: dy * MAX_Y }

    if (rafRef.current) return

    const tick = () => {
      const c = current.current
      const t = target.current
      c.x += (t.x - c.x) * LERP_IN
      c.y += (t.y - c.y) * LERP_IN
      el.style.transform = `translate(${c.x}px, ${c.y}px)`
      const done = Math.abs(t.x - c.x) < 0.05 && Math.abs(t.y - c.y) < 0.05
      rafRef.current = done ? null : requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  const onMouseLeave = useCallback(() => {
    target.current = { x: 0, y: 0 }
    const el = elRef.current
    if (!el || rafRef.current) return

    const tick = () => {
      const c = current.current
      c.x += (0 - c.x) * LERP_OUT
      c.y += (0 - c.y) * LERP_OUT
      el.style.transform = `translate(${c.x}px, ${c.y}px)`
      const settled = Math.abs(c.x) < 0.05 && Math.abs(c.y) < 0.05
      if (settled) {
        el.style.transform = ''
        rafRef.current = null
      } else {
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  return { ref: elRef, onMouseMove, onMouseLeave }
}
