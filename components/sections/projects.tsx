'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronRight, ScanLine, Shield } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { Section, SectionHeader } from '@/components/system/section-shell'

function rankColor(rank: string) {
  if (rank.startsWith('S')) return 'text-accent border-accent/50 bg-accent/10'
  if (rank.startsWith('A')) return 'text-primary border-primary/50 bg-primary/10'
  return 'text-muted-foreground border-border bg-secondary'
}

export function Projects() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const items = t.projects.items
  const active = openIndex !== null ? items[openIndex] : null

  // Lock scroll when modal is open
  useEffect(() => {
    if (openIndex !== null) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [openIndex])

  return (
    <Section id="projects">
      <SectionHeader
        tag={t.projects.tag}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {items.map((project, i) => (
          <motion.button
            key={project.code}
            type="button"
            onClick={() => setOpenIndex(i)}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass holo-border relative overflow-hidden rounded-2xl p-5 text-left transition-transform hover:-translate-y-1.5"
          >
            {/* Scanner sweep on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div
                className="scan-line absolute inset-x-0 h-1/2"
                style={{ animation: 'scan 2.5s ease-in-out infinite' }}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                {project.code}
              </span>
              <span
                className={`grid size-9 place-items-center rounded-lg border font-display text-sm font-bold ${rankColor(project.rank)}`}
              >
                {project.rank}
              </span>
            </div>

            <h3 className="mt-4 font-display text-xl font-semibold">
              {project.name}
            </h3>

            <div className="mt-3 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider">
              <span className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 text-muted-foreground">
                {project.type}
              </span>
              <span className="rounded-md border border-accent/40 bg-accent/10 px-2 py-0.5 text-accent">
                {project.status}
              </span>
            </div>

            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <span className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
              {t.projects.open}
              <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </motion.button>
        ))}
      </div>

      {/* Classified file modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center p-4"
            onClick={() => setOpenIndex(null)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={active.name}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="glass holo-border relative z-10 w-full max-w-lg overflow-hidden rounded-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border/60 bg-primary/5 px-5 py-3">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                  <ScanLine className="size-4" />
                  {active.code}
                </div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  aria-label={t.projects.close}
                  className="grid size-7 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold">
                    {active.name}
                  </h3>
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-xl border font-display text-lg font-bold ${rankColor(active.rank)}`}
                  >
                    {active.rank}
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Field label={t.projects.labels.status} value={active.status} />
                  <Field label={t.projects.labels.type} value={active.type} />
                </div>

                <div className="mt-5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    {t.projects.labels.description}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {active.description}
                  </p>
                </div>

                <div className="mt-5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    {t.projects.labels.stack}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {active.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 font-mono text-[11px] text-muted-foreground">
                  <Shield className="size-4 text-primary" />
                  CLEARANCE GRANTED · {active.code}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-secondary/40 p-3">
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  )
}
