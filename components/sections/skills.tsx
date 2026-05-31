'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Atom,
  Boxes,
  Wind,
  Code2,
  Coffee,
  Database,
  PenTool,
  Clapperboard,
  Bot,
  BarChart3,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { Section, SectionHeader } from '@/components/system/section-shell'
import { cn } from '@/lib/utils'

type Skill = {
  id: string
  label: string
  icon: LucideIcon
  level: number
}

// EDIT: skill nodes — order defines their position around the core
const SKILLS: Skill[] = [
  { id: 'react', label: 'React', icon: Atom, level: 92 },
  { id: 'next', label: 'Next.js', icon: Boxes, level: 90 },
  { id: 'tailwind', label: 'Tailwind', icon: Wind, level: 94 },
  { id: 'python', label: 'Python', icon: Code2, level: 80 },
  { id: 'java', label: 'Java', icon: Coffee, level: 72 },
  { id: 'db', label: 'Databases', icon: Database, level: 78 },
  { id: 'ui', label: 'UI Design', icon: PenTool, level: 88 },
  { id: 'motion', label: 'Motion Design', icon: Clapperboard, level: 84 },
  { id: 'ai', label: 'AI Tools', icon: Bot, level: 76 },
  { id: 'analytics', label: 'Analytics', icon: BarChart3, level: 82 },
]

// Geometry for the radar/star chart. All values live in a 0–100 viewBox.
const CENTER = 50
const MAX_R = 38 // radius that represents 100% proficiency

/** Angle (radians) for a given axis, starting at the top and going clockwise. */
function axisAngle(index: number, total: number) {
  return (index / total) * Math.PI * 2 - Math.PI / 2
}

/** A point along an axis at a given radius fraction (0–1). */
function pointAt(index: number, total: number, fraction: number) {
  const angle = axisAngle(index, total)
  return {
    x: CENTER + Math.cos(angle) * MAX_R * fraction,
    y: CENTER + Math.sin(angle) * MAX_R * fraction,
  }
}

export function Skills() {
  const { t } = useLanguage()
  const [active, setActive] = useState<string | null>(null)

  return (
    <Section id="skills">
      <SectionHeader
        tag={t.skills.tag}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
        {/* Interactive skill graph */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          {/* Radar / star graph */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            {/* Concentric guide rings at 25 / 50 / 75 / 100% */}
            {[0.25, 0.5, 0.75, 1].map((fraction) => (
              <polygon
                key={fraction}
                points={SKILLS.map((_, i) => {
                  const p = pointAt(i, SKILLS.length, fraction)
                  return `${p.x},${p.y}`
                }).join(' ')}
                fill="none"
                stroke="var(--border)"
                strokeWidth={0.18}
                opacity={fraction === 1 ? 0.7 : 0.4}
              />
            ))}

            {/* Axes from core to the outer ring */}
            {SKILLS.map((skill, i) => {
              const outer = pointAt(i, SKILLS.length, 1)
              const isActive = active === skill.id
              return (
                <line
                  key={`axis-${skill.id}`}
                  x1={CENTER}
                  y1={CENTER}
                  x2={outer.x}
                  y2={outer.y}
                  stroke={isActive ? 'var(--primary)' : 'var(--border)'}
                  strokeWidth={isActive ? 0.5 : 0.16}
                  className="transition-all duration-300"
                  opacity={isActive ? 1 : 0.5}
                />
              )
            })}

            {/* DATA polygon — each vertex sits at a radius equal to its % */}
            <motion.polygon
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              points={SKILLS.map((skill, i) => {
                const p = pointAt(i, SKILLS.length, skill.level / 100)
                return `${p.x},${p.y}`
              }).join(' ')}
              fill="color-mix(in oklch, var(--primary) 18%, transparent)"
              stroke="var(--primary)"
              strokeWidth={0.5}
              strokeLinejoin="round"
              style={{
                filter:
                  'drop-shadow(0 0 4px color-mix(in oklch, var(--glow-purple) 60%, transparent))',
                transformOrigin: '50% 50%',
              }}
            />

            {/* DATA vertices — the actual skill "points" on the radar */}
            {SKILLS.map((skill, i) => {
              const p = pointAt(i, SKILLS.length, skill.level / 100)
              const isActive = active === skill.id
              return (
                <motion.circle
                  key={`vertex-${skill.id}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                  cx={p.x}
                  cy={p.y}
                  r={isActive ? 1.7 : 1.1}
                  fill="var(--primary)"
                  className="transition-all duration-300"
                  style={{
                    filter: isActive
                      ? 'drop-shadow(0 0 3px var(--primary))'
                      : 'none',
                  }}
                />
              )
            })}
          </svg>

          {/* Core node */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative grid size-20 place-items-center rounded-full border border-primary/50 bg-primary/10 backdrop-blur sm:size-24">
              <div className="absolute inset-0 animate-glow-pulse rounded-full bg-primary/20 blur-md" />
              <span className="relative z-10 text-center font-display text-xs font-bold leading-tight">
                ANGEL
                <span className="block font-mono text-[9px] font-normal text-primary">
                  CORE
                </span>
              </span>
            </div>
          </div>

          {/* Skill nodes — anchored at the outer ring of each axis */}
          {SKILLS.map((skill, i) => {
            const pos = pointAt(i, SKILLS.length, 1)
            const isActive = active === skill.id
            return (
              <motion.button
                key={skill.id}
                type="button"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={() => setActive(skill.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(skill.id)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(isActive ? null : skill.id)}
                aria-label={`${skill.label} — ${skill.level}%`}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <span
                  className={cn(
                    'relative grid size-10 place-items-center rounded-xl border backdrop-blur transition-all duration-300 sm:size-12',
                    isActive
                      ? 'scale-110 border-primary bg-primary/20 text-primary shadow-[0_0_20px_color-mix(in_oklch,var(--glow-purple)_50%,transparent)]'
                      : 'border-border bg-card/70 text-muted-foreground hover:text-foreground',
                  )}
                >
                  <skill.icon className="size-5" />
                  {isActive && (
                    <motion.span
                      layoutId="skill-pulse"
                      className="absolute inset-0 rounded-xl border border-primary/60"
                      animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                    />
                  )}
                </span>
                {/* Tooltip */}
                <motion.span
                  animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 4 }}
                  className="glass pointer-events-none absolute left-1/2 top-full mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-lg px-2 py-1 font-mono text-[10px]"
                >
                  {skill.label} · {skill.level}%
                </motion.span>
              </motion.button>
            )
          })}
        </div>

        {/* Mini tech stack cards */}
        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {t.skills.stackTitle}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onMouseEnter={() => setActive(skill.id)}
                onMouseLeave={() => setActive(null)}
                className={cn(
                  'glass flex items-center gap-3 rounded-xl p-3 transition-colors',
                  active === skill.id && 'border-primary/50',
                )}
              >
                <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <skill.icon className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="truncate text-sm font-medium">
                      {skill.label}
                    </span>
                    <span className="font-mono text-[10px] text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="mt-1 h-1 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.04 }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
