'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

/**
 * Typing-style rotating role title with a holographic scanner reveal.
 * Cycles through the provided list of roles.
 */
export function RotatingTitle({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length)
    }, 2800)
    return () => clearInterval(id)
  }, [roles.length])

  return (
    <div className="relative flex h-8 items-center sm:h-10">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="font-mono text-base font-medium text-primary sm:text-xl"
        >
          {'> '}
          {roles[index]}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-primary sm:h-5"
          />
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
