'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'

/**
 * Layered futuristic background:
 * - soft animated grid
 * - ambient glow orbs
 * - floating holographic particles (reduced on mobile)
 * Rendered once at the root, fixed behind all content.
 */
export function AmbientBackground() {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const particleCount = isMobile ? 10 : 26

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* Animated grid */}
      <div className="grid-bg absolute inset-0" />

      {/* Ambient glow orbs */}
      <div className="animate-glow-pulse absolute -left-32 top-10 size-[34rem] rounded-full bg-glow-purple/20 blur-[120px]" />
      <div
        className="animate-glow-pulse absolute -right-40 top-1/3 size-[30rem] rounded-full bg-glow-blue/15 blur-[130px]"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="animate-glow-pulse absolute bottom-0 left-1/3 size-[28rem] rounded-full bg-glow-purple/10 blur-[120px]"
        style={{ animationDelay: '1s' }}
      />

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0">
          {Array.from({ length: particleCount }).map((_, i) => {
            const left = (i * 37) % 100
            const top = (i * 53) % 100
            const duration = 8 + (i % 6) * 2
            const size = 1 + (i % 3)
            return (
              <motion.span
                key={i}
                className="absolute rounded-full bg-primary/40"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: size,
                  height: size,
                }}
                animate={{ y: [0, -30, 0], opacity: [0.1, 0.6, 0.1] }}
                transition={{
                  duration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            )
          })}
        </div>
      )}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_100%)]" />
    </div>
  )
}
