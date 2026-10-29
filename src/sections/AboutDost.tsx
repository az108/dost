import { useRef } from "react"
import { Link } from "react-router-dom"
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react"
import { Reveal } from "@/components/site/Reveal"
import { Container } from "@/components/site/Container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUi } from "@/content/ui"
import { arzt } from "@/content/arzt"
import klinikFoto from "@/assets/galerie/arzt-am-schreibtisch-01.jpg"

export function AboutDost({ showMore = true }: { showMore?: boolean }) {
  const ui = useUi()
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  // Parallax: slide the faded watermark word horizontally as the section scrolls.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const x = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"])

  return (
    <section ref={ref} id="about" className="relative scroll-mt-20 overflow-hidden bg-white py-24">
      {/* Faded watermark word that drifts on scroll, drdosthealth-style. */}
      <motion.span
        aria-hidden="true"
        style={reduce ? undefined : { x }}
        className="pointer-events-none absolute inset-x-0 top-16 text-center text-[13vw] font-extrabold leading-none tracking-tight text-brand/[0.07] select-none"
      >
        {ui.about.eyebrow.toUpperCase()}
      </motion.span>

      <Container>
        <div className="relative grid items-start gap-14 lg:grid-cols-[1fr_1.05fr]">
          {/* Left: heading + points + cards */}
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                <span className="h-px w-8 bg-brand" />
                {ui.about.eyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">{ui.about.title}</h2>
              <p className="mt-2 text-2xl font-semibold text-body">{ui.about.subtitle}</p>
              <p className="mt-5 max-w-xl text-lg text-body">{ui.about.body}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {ui.about.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-ink">
                    <span className="grid size-6 shrink-0 place-items-center rounded-md bg-brand-soft text-brand">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12l5 5 9-11" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="font-medium">{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.15}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div>
                    <span className="grid size-11 place-items-center rounded-full bg-brand-soft text-brand">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-ink">{ui.about.hoursTitle}</h3>
                    <p className="mt-1 text-body">{ui.about.hoursValue}</p>
                  </div>
                  <Link
                    to="/kontakt"
                    className={cn(buttonVariants(), "mt-5 w-fit rounded-full bg-brand px-5 text-white hover:bg-brand/90")}
                  >
                    {ui.about.book}
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 p-6">
                  <div>
                    <h3 className="text-xl font-bold text-ink">{arzt.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-info-ink">
                      {ui.about.founder}
                    </p>
                  </div>
                  {showMore && (
                    <Link
                      to="/ueber-uns"
                      className={cn(buttonVariants(), "mt-5 w-fit rounded-full bg-brand px-5 text-white hover:bg-brand/90")}
                    >
                      {ui.about.more} <span aria-hidden="true" className="ml-1">+</span>
                    </Link>
                  )}
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right: clinic photo */}
          <Reveal delay={0.1} className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-1/2 -rotate-90 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400 lg:block"
            >
              {ui.about.clinicLabel}
            </span>
            <img
              src={klinikFoto}
              alt={ui.about.clinicLabel}
              className="w-full rounded-[2rem] object-cover shadow-2xl"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
