'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport, type UIMessage } from 'ai'
import { Send, X, Sparkles, RotateCcw } from 'lucide-react'
import { useLanguage } from '@/components/providers/language-provider'
import { cn } from '@/lib/utils'

const EASE = [0.22, 1, 0.36, 1] as const

function messageText(msg: UIMessage): string {
  if (!msg.parts || !Array.isArray(msg.parts)) return ''
  return msg.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map((p) => p.text)
    .join('')
}

export function AngelChat() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, setMessages, error } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const busy = status === 'submitted' || status === 'streaming'

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages, open, busy])

  // Allow other components (e.g. the AI section CTA) to open the chat
  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-angel-chat', handler)
    return () => window.removeEventListener('open-angel-chat', handler)
  }, [])

  function submit(text: string) {
    const value = text.trim()
    if (!value || busy) return
    sendMessage({ text: value })
    setInput('')
  }

  return (
    <>
      {/* Floating launcher — visible from the start */}
      <motion.button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? t.chat.close : t.chat.open}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 220, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-[60] grid size-14 place-items-center rounded-full sm:bottom-6 sm:right-6"
      >
        {/* pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-primary/40 blur-md animate-glow-pulse" />
        <span className="absolute inset-0 rounded-full border border-primary/50" />
        <span className="relative grid size-14 place-items-center overflow-hidden rounded-full border border-primary/60 bg-primary/15 backdrop-blur">
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-primary"
              >
                <X className="size-6" />
              </motion.span>
            ) : (
              <motion.span
                key="avatar"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.6, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative size-14"
              >
                <Image
                  src="/angel-ai-avatar.png"
                  alt="Angel AI"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
        {/* online dot */}
        {!open && (
          <span className="absolute right-0 top-0 size-3.5 rounded-full border-2 border-background bg-accent" />
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.35, ease: EASE }}
            style={{ position: 'fixed' }}
            className="glass holo-border bottom-24 right-4 z-[60] flex h-[min(560px,75vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl sm:right-6"
            role="dialog"
            aria-label={t.chat.title}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border/60 bg-primary/5 px-4 py-3">
              <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl border border-primary/40">
                <Image
                  src="/angel-ai-avatar.png"
                  alt="Angel AI avatar"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-semibold leading-tight">
                  {t.chat.title}
                </p>
                <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                  <span className="size-1.5 animate-glow-pulse rounded-full bg-accent" />
                  {t.chat.role} · {t.chat.online}
                </p>
              </div>
              {messages.length > 0 && (
                <button
                  type="button"
                  onClick={() => setMessages([])}
                  aria-label={t.chat.reset}
                  className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
                >
                  <RotateCcw className="size-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t.chat.close}
                className="grid size-8 place-items-center rounded-lg text-muted-foreground transition-colors hover:text-primary"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex flex-1 flex-col gap-3 overflow-y-auto p-4"
            >
              {/* Intro bubble */}
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-[85%] self-start rounded-2xl rounded-bl-sm border border-border bg-secondary/60 px-3.5 py-2.5 text-sm leading-relaxed"
                >
                  {t.chat.intro}
                </motion.div>
              )}

              {messages.map((m) => {
                const text = messageText(m)
                if (!text) return null
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: EASE }}
                    className={cn(
                      'max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed',
                      m.role === 'assistant'
                        ? 'self-start rounded-bl-sm border border-border bg-secondary/60'
                        : 'self-end rounded-br-sm bg-primary text-primary-foreground',
                    )}
                  >
                    {text}
                  </motion.div>
                )
              })}

              {/* Typing indicator */}
              {busy && (
                <div className="flex items-center gap-1 self-start rounded-2xl rounded-bl-sm border border-border bg-secondary/60 px-3.5 py-3">
                  {[0, 1, 2].map((d) => (
                    <motion.span
                      key={d}
                      className="size-1.5 rounded-full bg-primary"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: d * 0.2,
                      }}
                    />
                  ))}
                </div>
              )}

              {error && (
                <p className="self-start font-mono text-[11px] text-destructive">
                  {t.chat.error}
                </p>
              )}
            </div>

            {/* Suggestions (only before first message) */}
            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {t.chat.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => submit(s)}
                    className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-left text-xs text-primary transition-colors hover:bg-primary/10"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                submit(input)
              }}
              className="border-t border-border/60 p-3"
            >
              <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-3 py-2 transition-colors focus-within:border-primary/50">
                <Sparkles className="size-4 shrink-0 text-primary" />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t.chat.placeholder}
                  aria-label={t.chat.placeholder}
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || busy}
                  aria-label={t.chat.send}
                  className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground transition-all hover:shadow-[0_0_18px_color-mix(in_oklch,var(--glow-purple)_55%,transparent)] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send className="size-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
