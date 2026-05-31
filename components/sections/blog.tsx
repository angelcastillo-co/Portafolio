'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { Section, SectionHeader } from '@/components/system/section-shell'

export function Blog() {
  const { t } = useLanguage()

  return (
    <Section id="blog">
      <SectionHeader
        tag={t.blog.tag}
        title={t.blog.title}
        subtitle={t.blog.subtitle}
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {t.blog.items.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass holo-border relative flex flex-col overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-1.5"
          >
            {/* Scanner sweep on hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div
                className="scan-line absolute inset-x-0 h-1/2"
                style={{ animation: 'scan 2.5s ease-in-out infinite' }}
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
                {post.category}
              </span>
              <span className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                {t.blog.soon}
              </span>
            </div>

            <h3 className="mt-4 font-display text-lg font-semibold leading-snug text-balance">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>

            <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3">
              <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <Clock className="size-3" />
                {post.readTime} · {post.date}
              </span>
              <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-primary">
                {t.blog.readMore}
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
