import { motion } from "motion/react"

const blob =
  "pointer-events-none absolute rounded-full blur-3xl opacity-40 will-change-transform"

export function GradientBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className={`${blob} -top-40 -right-40 h-[34rem] w-[34rem] bg-brand/60`}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${blob} top-1/3 -left-48 h-[30rem] w-[30rem] bg-brand-green/50`}
        animate={{ x: [0, 50, 10, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
