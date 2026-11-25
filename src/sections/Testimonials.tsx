import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/site/Reveal"
import { Container } from "@/components/site/Container"
import { ReviewCard } from "@/components/site/ReviewCard"
import { featuredReviews } from "@/content/reviews"
import { useUi } from "@/content/ui"

/** "What our patients say": three featured reviews and a link to all of them. */
export function Testimonials() {
  const ui = useUi()
  return (
    <section className="relative overflow-hidden bg-wash py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{ui.testimonials.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">{ui.testimonials.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {featuredReviews.map((r, i) => (
            <Reveal key={r.id} delay={0.08 * i}>
              <ReviewCard review={r} short />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/bewertungen"
            className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-6 py-3 text-base font-semibold text-brand shadow-sm transition-colors hover:border-brand/40 hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            {ui.testimonials.more}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}
