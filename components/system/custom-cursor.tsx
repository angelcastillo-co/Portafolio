'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Elegant custom cursor with a soft trailing glow.
 * - Disabled on touch / coarse-pointer devices.
 * - Grows + intensifies when hovering interactive elements.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [hidden, setHidden] = useState(true)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  // Trailing ring lags slightly behind the dot
  const ringX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.5 })
  const ringY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.5 })

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) return
    setEnabled(true)
    document.documentElement.classList.add('custom-cursor-active')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHidden(false)
      const target = e.target as HTMLElement
      const interactive = target.closest(
        'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]',
      )
      setHovering(Boolean(interactive))
    }
    const leave = () => setHidden(true)

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      document.documentElement.classList.remove('custom-cursor-active')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ opacity: hidden ? 0 : 1, transition: 'opacity 0.3s' }}
    >
      {/* Core dot */}
      <motion.div
        className="absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{ x, y }}
        animate={{ scale: hovering ? 0.5 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      {/* Trailing ring + glow */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/60"
        style={{
          x: ringX,
          y: ringY,
          boxShadow: '0 0 24px 2px color-mix(in oklch, var(--glow-purple) 45%, transparent)',
        }}
        animate={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          opacity: hovering ? 1 : 0.6,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      />
    </div>
  )
}
