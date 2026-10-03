import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container } from "@/components/site/Container"
import { GradientBackdrop } from "@/components/site/GradientBackdrop"
import { SearchBox } from "@/components/site/SearchBox"
import { Stars } from "@/components/site/Stars"
import { useUi } from "@/content/ui"
import arztFoto from "@/assets/arzt-portrait.jpg"

export function Hero() {
  const reduce = useReducedMotion()
  const ui = useUi()

  return (
    <section className="relative z-20 bg-wash pt-28 pb-16">
      <GradientBackdrop />
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-info-ink">
              {ui.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-5xl leading-[1.05] font-extrabold md:text-6xl lg:text-7xl">
              {ui.hero.headlineLead}{" "}
              <span className="text-brand">{ui.hero.headlineAccent}</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-body">{ui.hero.sub}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-brand px-8 text-white hover:bg-brand/90")}
              >
                {ui.hero.book}
              </Link>
              <Link
                to="/behandlungen"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full border-brand/30 bg-white px-8 text-ink hover:bg-brand-soft",
                )}
              >
                {ui.hero.explore}
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-72 md:w-80 lg:w-96"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img src={arztFoto} alt="Dr. med. univ. Dost Mohammad" className="rotate-2 rounded-[2rem] shadow-2xl" />
            <motion.div
              className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Stars size={16} />
              <span className="whitespace-nowrap text-sm">
                <span className="font-bold text-ink">{ui.hero.ratingValue}</span>{" "}
                <span className="text-body">· {ui.hero.ratingLabel}</span>
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Search band — the "Feeling unwell?" entry point, under the hero. */}
        <motion.div
          className="mt-14 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <p className="mb-4 text-center text-lg font-medium text-ink md:text-xl">{ui.search.title}</p>
          <SearchBox />
        </motion.div>
      </Container>
    </section>
  )
}
