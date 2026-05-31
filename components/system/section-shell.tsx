'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

// Shared smooth easing curve for buttery, non-abrupt reveals
const EASE = [0.22, 1, 0.36, 1] as const

/** Animated tag chip used above every section title. */
export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 0.6, ease: EASE }}
      className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.25em] text-primary"
    >
      <span className="size-1.5 rounded-full bg-primary animate-glow-pulse" />
      {children}
    </motion.span>
  )
}

/** Section heading block: tag + title + optional subtitle. */
export function SectionHeader({
  tag,
  title,
  subtitle,
  className,
}: {
  tag: string
  title: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={cn('mx-auto max-w-2xl text-center', className)}>
      <SectionTag>{tag}</SectionTag>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-120px' }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mt-4 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-4 text-pretty leading-relaxed text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

/** Standard section wrapper with consistent vertical rhythm + id anchor. */
export function Section({
  id,
  children,
  className,
}: {
  id: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={cn('relative scroll-mt-20 px-5 py-10 sm:px-8 sm:py-12', className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  )
}
