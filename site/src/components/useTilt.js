import { useRef, useCallback } from 'react'

const MAX_ROTATE = 6
const LERP_IN = 0.18
const LERP_OUT = 0.12

export function useTilt() {
  const elRef = useRef(null)
  const rafRef = useRef(null)
  const target = useRef({ rx: 0, ry: 0, tz: 0 })
  const current = useRef({ rx: 0, ry: 0, tz: 0 })

  const applyTransform = (el) => {
    const { rx, ry, tz } = current.current
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${tz}px)`
  }

  const onMouseMove = useCallback((e) => {
    const el = elRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    target.current = { rx: -dy * MAX_ROTATE, ry: dx * MAX_ROTATE, tz: 8 }

    if (rafRef.current) return

    const tick = () => {
      const c = current.current
      const t = target.current
      c.rx += (t.rx - c.rx) * LERP_IN
      c.ry += (t.ry - c.ry) * LERP_IN
      c.tz += (t.tz - c.tz) * LERP_IN
      applyTransform(el)
      const done = Math.abs(t.rx - c.rx) < 0.02 && Math.abs(t.ry - c.ry) < 0.02 && Math.abs(t.tz - c.tz) < 0.02
      rafRef.current = done ? null : requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  const onMouseLeave = useCallback(() => {
    target.current = { rx: 0, ry: 0, tz: 0 }
    if (rafRef.current) return

    const el = elRef.current
    if (!el) return

    const tick = () => {
      const c = current.current
      c.rx += (0 - c.rx) * LERP_OUT
      c.ry += (0 - c.ry) * LERP_OUT
      c.tz += (0 - c.tz) * LERP_OUT
      applyTransform(el)
      const settled = Math.abs(c.rx) < 0.01 && Math.abs(c.ry) < 0.01 && Math.abs(c.tz) < 0.01
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
