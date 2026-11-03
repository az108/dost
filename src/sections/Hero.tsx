import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container } from "@/components/site/Container"
import { GradientBackdrop } from "@/components/site/GradientBackdrop"
import { SearchBox } from "@/components/site/SearchBox"
import { Stars } from "@/components/site/Stars"
import { useUi } from "@/content/ui"
import heroFoto from "@/assets/praxis-empfang.jpg"

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
            <div className="mt-9 flex flex-wrap items-center gap-5 sm:gap-8">
              {/* Booking keeps the brand (primary) magenta, on the left, calm. */}
              <Link
                to="/kontakt"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-14 rounded-full bg-brand px-9 text-lg font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand/90",
                )}
              >
                {ui.hero.book}
              </Link>
              {/* "Discover treatments" — the button we want pressed — in the
                  mint/green secondary colour with a calm, slow breathing halo (also
                  green) to draw the eye, set apart to the right by the larger gap. */}
              <span className="relative inline-flex">
                {!reduce && (
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full bg-mint"
                    animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                <Link
                  to="/behandlungen"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "relative h-14 rounded-full bg-mint px-9 text-lg font-semibold text-emerald-950 shadow-lg shadow-mint/30 hover:bg-mint/90",
                  )}
                >
                  {ui.hero.explore}
                </Link>
              </span>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-72 md:w-80 lg:w-96"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src={heroFoto}
              alt="Empfangsbereich der Praxis"
              className="aspect-[4/5] w-full rotate-2 rounded-[2rem] object-cover shadow-2xl"
            />
            <motion.div
              className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-white/95 px-5 py-3 shadow-xl backdrop-blur"
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Stars size={16} />
              <span className="whitespace-nowrap text-sm font-bold text-ink">{ui.hero.ratingValue}</span>
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
          <div className="mt-4 text-center">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("dost:open-chat"))}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-5 py-2.5 text-base font-medium text-brand shadow-sm transition-colors hover:border-brand/40 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              {ui.search.chatHint}
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
