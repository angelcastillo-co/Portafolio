'use client'

import { motion } from 'framer-motion'

/** Animated RPG-style attribute bar. */
export function StatBar({
  label,
  value,
  delay = 0,
}: {
  label: string
  value: number
  delay?: number
}) {
  return (
    <div className="group/stat">
      <div className="mb-1.5 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
        <span className="text-muted-foreground transition-colors group-hover/stat:text-foreground">
          {label}
        </span>
        <span className="text-primary">{value}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          style={{
            boxShadow: '0 0 12px color-mix(in oklch, var(--glow-purple) 60%, transparent)',
          }}
        />
      </div>
    </div>
  )
}
