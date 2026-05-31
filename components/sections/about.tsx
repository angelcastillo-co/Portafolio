'use client'

import { motion } from 'framer-motion'
import { Cpu, Compass, Sparkles, Eye } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { Section, SectionHeader } from '@/components/system/section-shell'
import { CountUp } from '@/components/system/count-up'

// EDIT: metric values
const METRICS = [
  { key: 'years', to: 4, suffix: '+' },
  { key: 'tech', to: 18, suffix: '+' },
  { key: 'systems', to: 12, suffix: '' },
  { key: 'ai', to: 100, suffix: '%' },
] as const

export function About() {
  const { t } = useLanguage()

  const cards = [
    { icon: Cpu, title: t.about.summaryTitle, body: t.about.summary },
    { icon: Compass, title: t.about.philosophyTitle, body: t.about.philosophy },
    { icon: Sparkles, title: t.about.interestsTitle, body: t.about.interests },
    { icon: Eye, title: t.about.visionTitle, body: t.about.vision },
  ]

  return (
    <Section id="about">
      <SectionHeader tag={t.about.tag} title={t.about.title} />

      <div className="mt-14 grid gap-5 lg:grid-cols-12">
        {/* Terminal-style profile panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="glass holo-border rounded-2xl p-1 lg:col-span-5"
        >
          <div className="flex items-center gap-2 border-b border-border/60 px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-destructive/70" />
            <span className="size-2.5 rounded-full bg-chart-3/70" />
            <span className="size-2.5 rounded-full bg-accent/70" />
            <span className="ml-2 font-mono text-[11px] text-muted-foreground">
              angel@system: ~/profile
            </span>
          </div>
          <div className="space-y-2 p-5 font-mono text-sm leading-relaxed">
            <p className="text-muted-foreground">
              <span className="text-accent">$</span> whoami
            </p>
            <p className="text-foreground">Angel Castillo</p>
            <p className="text-muted-foreground">
              <span className="text-accent">$</span> cat summary.txt
            </p>
            <p className="text-pretty text-foreground/90">{t.about.summary}</p>
            <p className="text-muted-foreground">
              <span className="text-accent">$</span>{' '}
              <span className="animate-pulse">_</span>
            </p>
          </div>
        </motion.div>

        {/* Holographic info cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {cards.slice(1).map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass holo-border group rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <span className="grid size-10 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <card.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated metrics */}
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.key}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass rounded-2xl p-5 text-center"
          >
            <p className="font-display text-3xl font-bold text-primary text-glow sm:text-4xl">
              <CountUp to={m.to} suffix={m.suffix} />
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {t.about.metrics[m.key]}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
