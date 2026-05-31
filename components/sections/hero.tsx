'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import { ArrowDown, Mail, Sparkles } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { RotatingTitle } from '@/components/system/rotating-title'
import { StatBar } from '@/components/system/stat-bar'

// EDIT: attribute values (0-100) powering the RPG panel + radar chart
const STAT_VALUES = {
  frontend: 92,
  backend: 78,
  uiux: 88,
  data: 80,
  ai: 74,
  creativity: 95,
}

const XP = 82 // EDIT: XP progress percentage

export function Hero() {
  const { t } = useLanguage()

  const statEntries = [
    { key: 'frontend', label: t.hero.stats.frontend, value: STAT_VALUES.frontend },
    { key: 'backend', label: t.hero.stats.backend, value: STAT_VALUES.backend },
    { key: 'uiux', label: t.hero.stats.uiux, value: STAT_VALUES.uiux },
    { key: 'data', label: t.hero.stats.data, value: STAT_VALUES.data },
    { key: 'ai', label: t.hero.stats.ai, value: STAT_VALUES.ai },
    { key: 'creativity', label: t.hero.stats.creativity, value: STAT_VALUES.creativity },
  ]

  const radarData = statEntries.map((s) => ({ subject: s.label, A: s.value }))

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-12">
        {/* LEFT — futuristic portrait frame */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1 lg:col-span-3"
        >
          <div className="holo-border animate-floaty relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-2xl glass">
            <Image
              src="/angel-portrait.png"
              alt="Portrait of Angel Castillo"
              fill
              priority
              sizes="(max-width: 1024px) 260px, 240px"
              className="object-cover"
            />
            {/* Scanner sweep */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="scan-line absolute inset-x-0 h-1/3"
                style={{ animation: 'scan 5s ease-in-out infinite' }}
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                {t.hero.status}
              </p>
              <p className="font-display text-sm font-semibold">Angel Castillo</p>
            </div>
          </div>
        </motion.div>

        {/* CENTER — identity */}
        <div className="order-1 text-center lg:order-2 lg:col-span-6 lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.25em] text-primary lg:mx-0"
          >
            <span className="size-1.5 rounded-full bg-primary animate-glow-pulse" />
            {t.hero.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-[2.1rem] font-bold leading-[1.08] tracking-tight text-balance sm:text-6xl"
          >
            <span className="block text-muted-foreground/70 text-base font-medium tracking-normal sm:text-lg">
              {t.hero.greeting}
            </span>
            <span className="holo-text text-glow">{t.hero.fullName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-primary sm:text-sm"
          >
            {t.hero.alias}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 flex justify-center lg:justify-start"
          >
            <RotatingTitle roles={t.hero.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground lg:mx-0"
          >
            {t.hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_28px_color-mix(in_oklch,var(--glow-purple)_55%,transparent)]"
            >
              <Sparkles className="size-4" />
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              className="holo-border inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider transition-colors hover:text-primary"
            >
              <Mail className="size-4" />
              {t.hero.contact}
            </a>
          </motion.div>
        </div>

        {/* RIGHT — RPG stats panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-3 lg:col-span-3"
        >
          <div className="glass holo-border rounded-2xl p-4">
            {/* Level header */}
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  {t.hero.level}
                </p>
                <p className="font-display text-sm font-semibold">
                  {t.hero.levelTitle}
                </p>
              </div>
              <div className="grid size-10 place-items-center rounded-full border border-primary/40 bg-primary/10 font-display text-lg font-bold text-primary">
                12
              </div>
            </div>

            {/* XP */}
            <div className="py-3">
              <div className="mb-1 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <span>{t.hero.xp}</span>
                <span className="text-primary">{XP}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${XP}%` }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
                />
              </div>
            </div>

            {/* Radar */}
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} outerRadius="72%">
                  <PolarGrid stroke="var(--border)" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{
                      fill: 'var(--muted-foreground)',
                      fontSize: 8,
                      fontFamily: 'var(--font-mono)',
                    }}
                  />
                  <Radar
                    dataKey="A"
                    stroke="var(--primary)"
                    fill="var(--primary)"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Bars */}
            <div className="mt-1 flex flex-col gap-2.5">
              {statEntries.map((s, i) => (
                <StatBar
                  key={s.key}
                  label={s.label}
                  value={s.value}
                  delay={0.4 + i * 0.08}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="block"
        >
          <ArrowDown className="size-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
