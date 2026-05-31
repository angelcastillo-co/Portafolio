'use client'

import { motion } from 'framer-motion'
import { BadgeCheck, Award } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { Section, SectionHeader } from '@/components/system/section-shell'

export function Certifications() {
  const { t } = useLanguage()

  return (
    <Section id="certifications">
      <SectionHeader
        tag={t.certifications.tag}
        title={t.certifications.title}
        subtitle={t.certifications.subtitle}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.certifications.items.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group glass holo-border animate-floaty relative overflow-hidden rounded-2xl p-5"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <Award className="size-5" />
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-accent">
                <BadgeCheck className="size-3" />
                {t.certifications.verified}
              </span>
            </div>

            <h3 className="mt-4 font-display text-base font-semibold leading-tight text-balance">
              {cert.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>

            <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>{cert.year}</span>
              <span className="text-primary">ID·{1000 + i * 137}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
