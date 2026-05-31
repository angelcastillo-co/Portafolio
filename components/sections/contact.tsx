'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send, Check } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { Section, SectionHeader } from '@/components/system/section-shell'

// EDIT: social + contact links
const SOCIALS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@angelcastillo.dev' },
]

export function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // EDIT: wire up to an API route / email service for production
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <Section id="contact">
      <SectionHeader
        tag={t.contact.tag}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        {/* Channels */}
        <div className="lg:col-span-2">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {t.contact.connect}
          </p>
          <div className="flex flex-col gap-3">
            {SOCIALS.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group glass holo-border flex items-center gap-3 rounded-xl p-4 transition-transform hover:translate-x-1"
              >
                <span className="grid size-10 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <social.icon className="size-5" />
                </span>
                <span className="font-display font-semibold">{social.label}</span>
                <Send className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass holo-border flex flex-col gap-4 rounded-2xl p-6 lg:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label={t.contact.name}>
              <input
                required
                name="name"
                placeholder={t.contact.namePlaceholder}
                className="w-full rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:ring-1 focus:ring-primary/40"
              />
            </FormField>
            <FormField label={t.contact.email}>
              <input
                required
                type="email"
                name="email"
                placeholder={t.contact.emailPlaceholder}
                className="w-full rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:ring-1 focus:ring-primary/40"
              />
            </FormField>
          </div>
          <FormField label={t.contact.message}>
            <textarea
              required
              name="message"
              rows={5}
              placeholder={t.contact.messagePlaceholder}
              className="w-full resize-none rounded-xl border border-border bg-secondary/40 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary/60 focus:ring-1 focus:ring-primary/40"
            />
          </FormField>

          <button
            type="submit"
            disabled={sent}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_28px_color-mix(in_oklch,var(--glow-purple)_55%,transparent)] disabled:opacity-80"
          >
            {sent ? (
              <>
                <Check className="size-4" />
                {t.contact.sent}
              </>
            ) : (
              <>
                <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                {t.contact.send}
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  )
}

function FormField({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
