import { Link } from "react-router-dom"
import { Container } from "@/components/site/Container"
import { Reveal } from "@/components/site/Reveal"
import { GradientBackdrop } from "@/components/site/GradientBackdrop"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useUi } from "@/content/ui"
import { useSeo } from "@/lib/useSeo"

const Sparkle = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3l1.8 4.9L19 9.7l-5.2 1.8L12 16l-1.8-4.5L5 9.7l5.2-1.8L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M18.5 14.5l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9Z" fill="currentColor" />
  </svg>
)

export default function Aesthetik() {
  const ui = useUi()
  useSeo({ title: ui.aesthetic.title })
  return (
    <main className="pt-24">
      <section className="relative overflow-hidden bg-wash py-16">
        <GradientBackdrop />
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{ui.aesthetic.eyebrow}</p>
            <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">{ui.aesthetic.title}</h1>
            <p className="mt-5 text-lg text-body">{ui.aesthetic.intro}</p>
            <Link
              to="/kontakt"
              className={cn(buttonVariants({ size: "lg" }), "mt-8 rounded-full bg-brand px-8 text-white hover:bg-brand/90")}
            >
              {ui.aesthetic.cta}
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ui.aesthetic.treatments.map((t, i) => (
              <Reveal key={t.title} delay={0.05 * i}>
                <div className="group h-full rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    {Sparkle}
                  </span>
                  <h2 className="mt-6 text-xl font-bold text-ink">{t.title}</h2>
                  <p className="mt-3 text-body">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
