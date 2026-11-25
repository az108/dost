import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useT } from "@/lib/i18n"
import { useSeo } from "@/lib/useSeo"
import { Container } from "@/components/site/Container"
import { GradientBackdrop } from "@/components/site/GradientBackdrop"
import { Reveal } from "@/components/site/Reveal"
import { ReviewCard } from "@/components/site/ReviewCard"
import { Stars } from "@/components/site/Stars"
import { reviews, type ReviewSource } from "@/content/reviews"
import { useUi } from "@/content/ui"

type Filter = "all" | ReviewSource

// The short ones run in the moving strip under the hero.
const shortReviews = reviews.filter((r) => r.quote.de.length <= 110)

export default function Reviews() {
  const ui = useUi()
  const t = useT()
  const reduce = useReducedMotion()
  const [filter, setFilter] = useState<Filter>("all")
  // The pre-rendered HTML shows every card at full opacity; only a filter the
  // visitor picks afterwards fades the grid in.
  const interacted = useRef(false)
  useSeo({ title: ui.nav.reviews, description: ui.reviewsPage.intro })

  const shown = filter === "all" ? reviews : reviews.filter((r) => r.source === filter)
  const chips: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: ui.reviewsPage.all, count: reviews.length },
    { key: "google", label: "Google", count: reviews.filter((r) => r.source === "google").length },
    { key: "jameda", label: "Jameda", count: reviews.filter((r) => r.source === "jameda").length },
  ]

  return (
    <main className="pt-24">
      <section className="relative overflow-hidden bg-wash pt-16 pb-10">
        <GradientBackdrop />
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{ui.nav.reviews}</p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl md:text-6xl">{ui.reviewsPage.title}</h1>
            <p className="mt-5 text-lg text-body">{ui.reviewsPage.intro}</p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-md">
              <Stars size={18} />
              <span className="font-semibold text-ink">{ui.reviewsPage.count.replace("{n}", String(reviews.length))}</span>
            </div>
          </Reveal>
        </Container>

        {/* Moving strip of short quotes. Paused for reduced motion; the list is
            doubled so the loop is seamless. */}
        <div
          className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          aria-hidden="true"
        >
          <motion.div
            className="flex w-max gap-4"
            animate={reduce ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          >
            {[...shortReviews, ...shortReviews].map((r, i) => (
              <span key={`${r.id}-${i}`} className="flex shrink-0 items-center gap-3 rounded-full border border-white/60 bg-white/80 px-5 py-2.5 shadow-sm backdrop-blur">
                <Stars size={12} />
                <span className="whitespace-nowrap text-sm text-ink">“{t(r.quote)}”</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <Container>
          <div className="flex flex-wrap justify-center gap-3" role="group" aria-label={ui.nav.reviews}>
            {chips.map((c) => (
              <button
                key={c.key}
                type="button"
                aria-pressed={filter === c.key}
                onClick={() => {
                  interacted.current = true
                  setFilter(c.key)
                }}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-5 py-2 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                  filter === c.key
                    ? "border-brand bg-brand text-white"
                    : "border-neutral-200 bg-white text-ink hover:border-brand/40 hover:text-brand",
                )}
              >
                {c.label}
                <span className={cn("rounded-full px-2 text-sm", filter === c.key ? "bg-white/20" : "bg-neutral-100 text-neutral-600")}>
                  {c.count}
                </span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3"
              initial={interacted.current ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
            >
              {shown.map((r, i) => (
                <motion.div
                  key={r.id}
                  className="mb-6 break-inside-avoid"
                  initial={{ y: 28 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.21, 0.6, 0.35, 1] }}
                >
                  <ReviewCard review={r} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-neutral-500">{ui.reviewsPage.note}</p>
        </Container>
      </section>

      <section className="bg-wash py-20">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold">{ui.reviewsPage.ctaTitle}</h2>
            <p className="mt-4 text-lg text-body">{ui.reviewsPage.ctaText}</p>
            <Link
              to="/kontakt"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-14 rounded-full bg-brand px-9 text-lg font-semibold text-white shadow-lg shadow-brand/30 hover:bg-brand/90",
              )}
            >
              {ui.reviewsPage.ctaButton}
            </Link>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
