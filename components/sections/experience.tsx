'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Award, Lock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { Section, SectionHeader } from '@/components/system/section-shell'
import { cn } from '@/lib/utils'

const ICONS: LucideIcon[] = [Briefcase, GraduationCap, Award, Lock]

export function Experience() {
  const { t } = useLanguage()
  const items = t.experience.items

  return (
    <Section id="experience">
      <SectionHeader
        tag={t.experience.tag}
        title={t.experience.title}
        subtitle={t.experience.subtitle}
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="flex flex-col gap-10">
          {items.map((item, i) => {
            const Icon = ICONS[i] ?? Briefcase
            const locked = i === items.length - 1
            const sideLeft = i % 2 === 0
            return (
              <motion.div
                key={item.role + i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5 }}
                className={cn(
                  'relative pl-14 sm:w-1/2 sm:pl-0',
                  sideLeft
                    ? 'sm:self-start sm:pr-10 sm:text-right'
                    : 'sm:self-end sm:pl-10',
                )}
              >
                {/* Node */}
                <span
                  className={cn(
                    'absolute left-0 top-1 grid size-10 place-items-center rounded-xl border backdrop-blur sm:top-2',
                    sideLeft ? 'sm:-right-5 sm:left-auto' : 'sm:-left-5',
                    locked
                      ? 'border-border bg-card/70 text-muted-foreground'
                      : 'border-primary/50 bg-primary/15 text-primary',
                  )}
                >
                  <Icon className="size-4" />
                  {!locked && (
                    <span className="absolute inset-0 animate-glow-pulse rounded-xl bg-primary/20 blur-sm" />
                  )}
                </span>

                <div
                  className={cn(
                    'glass holo-border rounded-2xl p-5',
                    locked && 'opacity-70',
                  )}
                >
                  <div
                    className={cn(
                      'flex items-center gap-2',
                      sideLeft && 'sm:justify-end',
                    )}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                      {item.period}
                    </span>
                    <span
                      className={cn(
                        'rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider',
                        locked
                          ? 'border-border text-muted-foreground'
                          : 'border-accent/40 bg-accent/10 text-accent',
                      )}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold">
                    {item.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.org}</p>
                  <ul
                    className={cn(
                      'mt-3 flex flex-col gap-1.5 text-sm text-muted-foreground',
                      sideLeft && 'sm:items-end',
                    )}
                  >
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2 sm:[&]:flex-row"
                      >
                        <span className="size-1 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
