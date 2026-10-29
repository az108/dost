import { motion } from "motion/react"
import type { ReactNode } from "react"

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      // Slide only, never fade from invisible: the pre-rendered HTML ships the
      // content visible (opacity 1), so a visitor sees it on first paint
      // instead of waiting for the JS bundle to hydrate and un-hide it. The
      // gentle rise is a progressive enhancement that plays once in view.
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  )
}
