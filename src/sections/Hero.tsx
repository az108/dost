import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { GradientBackdrop } from "@/components/site/GradientBackdrop"
import { praxis } from "@/content/praxis"
import { arzt } from "@/content/arzt"
import arztFoto from "@/assets/arzt-portrait.jpg"

export function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <GradientBackdrop />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            {praxis.tagline}
          </p>
          <h2 className="font-display mt-4 text-5xl leading-[1.05] font-semibold md:text-7xl">
            Medizin, die <em className="text-brand italic">zuhört</em>.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-neutral-600">
            Schulmedizin und Naturheilverfahren Hand in Hand – {arzt.name},{" "}
            {arzt.qualifications}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/#kontakt"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full bg-brand px-8 text-white hover:bg-brand/90",
              )}
            >
              Termin buchen
            </Link>
            <Link
              to="/#behandlungen"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8")}
            >
              Behandlungen entdecken
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-72 md:w-80"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={arztFoto}
            alt={arzt.name}
            className="rotate-2 rounded-3xl shadow-2xl"
          />
          <motion.div
            className="absolute -left-10 top-8 rounded-2xl bg-white/85 px-4 py-3 text-sm shadow-xl backdrop-blur"
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            🌿 Naturheilverfahren &amp; Akupunktur
          </motion.div>
          <motion.div
            className="absolute -right-6 bottom-10 rounded-2xl bg-brand-green/80 px-4 py-3 text-sm font-medium text-emerald-950 shadow-xl"
            animate={reduce ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            ⚕️ Notfallmedizin
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
