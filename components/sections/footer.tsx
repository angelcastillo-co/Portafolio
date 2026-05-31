'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'

const SOCIALS = [
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@angelcastillo.dev' },
]

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const links = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <footer className="relative px-5 pb-10 pt-4 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Animated divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px w-full origin-left bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />

        <div className="mt-8 flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
              <Terminal className="size-4" />
            </span>
            <div>
              <p className="font-display text-sm font-bold tracking-tight">
                ANGEL<span className="text-primary">.</span>SYS
              </p>
              <p className="font-mono text-[10px] text-muted-foreground">
                {t.footer.tagline}
              </p>
            </div>
          </div>

          {/* Nav shortcuts */}
          <nav className="flex flex-wrap items-center justify-center gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="rounded-lg px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="grid size-9 place-items-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border/50 pt-6 font-mono text-[11px] text-muted-foreground sm:flex-row">
          <p>
            © {year} Angel Castillo · {t.footer.rights}
          </p>
          <p>{t.footer.built}</p>
        </div>
      </div>
    </footer>
  )
}
