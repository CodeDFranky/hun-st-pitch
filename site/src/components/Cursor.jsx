import { useEffect, useRef } from 'react'

const LERP = 0.07

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const lerped = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    }

    const onOver = (e) => {
      const t = e.target
      if (t.closest('h1, h2')) {
        ring.dataset.state = 'line'
      } else if (t.closest('a, button, [data-cursor="expand"]')) {
        ring.dataset.state = 'expand'
      } else {
        ring.dataset.state = 'default'
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)

    const tick = () => {
      lerped.current.x += (pos.current.x - lerped.current.x) * LERP
      lerped.current.y += (pos.current.y - lerped.current.y) * LERP
      ring.style.transform = `translate(${lerped.current.x}px, ${lerped.current.y}px)`
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <div className="dl-cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="dl-cursor-ring" ref={ringRef} data-state="default" aria-hidden="true" />
    </>
  )
}
