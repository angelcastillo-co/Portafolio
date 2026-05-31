'use client'

/**
 * AI ASSISTANT PREVIEW — VISUAL ONLY.
 * No backend. Structure is prepared for a future AI SDK integration:
 * replace the static `messages` render + input handler with a real chat hook.
 */

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Send, Sparkles, Activity, Cpu } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { Section, SectionHeader } from '@/components/system/section-shell'
import { cn } from '@/lib/utils'

export function AIAssistant() {
  const { t } = useLanguage()

  return (
    <Section id="ai">
      <SectionHeader tag={t.ai.tag} title={t.ai.title} />

      <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
        {/* Holographic avatar panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="holo-border glass relative overflow-hidden rounded-3xl p-6">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
              <span className="inline-flex items-center gap-2 text-accent">
                <span className="size-2 animate-glow-pulse rounded-full bg-accent" />
                {t.ai.online}
              </span>
              <Activity className="size-4 text-primary" />
            </div>

            <div className="relative mx-auto mt-5 aspect-square w-44 overflow-hidden rounded-2xl">
              <Image
                src="/angel-ai-avatar.png"
                alt="Angel AI holographic assistant avatar"
                fill
                sizes="176px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                  className="scan-line absolute inset-x-0 h-1/3"
                  style={{ animation: 'scan 4s ease-in-out infinite' }}
                />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/30" />
            </div>

            <p className="mt-5 text-center font-display text-xl font-bold">
              {t.ai.subtitle}
            </p>
            <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">
              {t.ai.description}
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {[
                { icon: Cpu, label: 'Core' },
                { icon: Sparkles, label: 'LLM' },
                { icon: Activity, label: 'Live' },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary/50 py-2"
                >
                  <chip.icon className="size-3 text-primary" />
                  {chip.label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fake chat preview */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass holo-border flex h-[380px] flex-col overflow-hidden rounded-3xl"
        >
          <div className="flex items-center gap-2 border-b border-border/60 bg-primary/5 px-4 py-3">
            <span className="grid size-7 place-items-center rounded-lg bg-primary/15 text-primary">
              <Sparkles className="size-4" />
            </span>
            <span className="font-display text-sm font-semibold">Angel AI</span>
            <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-accent">
              {t.ai.online}
            </span>
          </div>

          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
            {t.ai.messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.25 }}
                className={cn(
                  'max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
                  msg.from === 'ai'
                    ? 'self-start rounded-bl-sm border border-border bg-secondary/60'
                    : 'self-end rounded-br-sm bg-primary text-primary-foreground',
                )}
              >
                {msg.text}
              </motion.div>
            ))}
            {/* Typing indicator */}
            <div className="flex items-center gap-1 self-start rounded-2xl rounded-bl-sm border border-border bg-secondary/60 px-3.5 py-3">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="size-1.5 rounded-full bg-primary"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                />
              ))}
            </div>
          </div>

          {/* Live CTA — opens the floating Angel chat */}
          <div className="border-t border-border/60 p-3">
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent('open-angel-chat'))
              }
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_24px_color-mix(in_oklch,var(--glow-purple)_55%,transparent)]"
            >
              <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
              {t.ai.tryNow}
            </button>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
