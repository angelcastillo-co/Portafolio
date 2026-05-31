'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, Terminal } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'

export function TopNav() {
  const { t, locale, toggleLocale } = useLanguage()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links: { id: string; label: string }[] = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'blog', label: t.nav.blog },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'py-2' : 'py-4',
      )}
    >
      <nav
        className={cn(
          'mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5',
          scrolled ? 'glass holo-border mx-3 shadow-lg shadow-primary/5' : 'mx-3',
        )}
      >
        {/* Brand */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary">
            <Terminal className="size-4" />
          </span>
          <span className="font-display text-sm font-bold tracking-tight">
            ANGEL<span className="text-primary">.</span>SYS
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="rounded-lg px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Switch language"
            className="relative flex h-8 w-[68px] items-center rounded-full border border-border bg-secondary/60 p-0.5 font-mono text-[11px] font-semibold uppercase"
          >
            <motion.span
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 32 }}
              className={cn(
                'absolute h-7 w-8 rounded-full bg-primary',
                locale === 'es' ? 'left-0.5' : 'left-[34px]',
              )}
            />
            <span
              className={cn(
                'z-10 grid w-8 place-items-center transition-colors',
                locale === 'es' ? 'text-primary-foreground' : 'text-muted-foreground',
              )}
            >
              ES
            </span>
            <span
              className={cn(
                'z-10 grid w-8 place-items-center transition-colors',
                locale === 'en' ? 'text-primary-foreground' : 'text-muted-foreground',
              )}
            >
              EN
            </span>
          </button>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            aria-label={t.theme.toggle}
            className="grid size-8 place-items-center rounded-full border border-border bg-secondary/60 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            {mounted && resolvedTheme === 'dark' ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="grid size-8 place-items-center rounded-full border border-border bg-secondary/60 text-foreground lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-3 mt-2 overflow-hidden rounded-2xl border border-panel-border p-2 lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 font-mono text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
