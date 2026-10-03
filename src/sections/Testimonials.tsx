import { Reveal } from "@/components/site/Reveal"
import { Container } from "@/components/site/Container"
import { Stars } from "@/components/site/Stars"
import { useUi } from "@/content/ui"

/** "What our patients say" — testimonial cards with a 5-star rating. */
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
          {ui.testimonials.items.map((t, i) => (
            <Reveal key={t.author} delay={0.08 * i}>
              <figure className="flex h-full flex-col rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm">
                <Stars />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-body">“{t.quote}”</blockquote>
                <figcaption className="mt-6">
                  <span className="block font-semibold text-ink">{t.author}</span>
                  <span className="block text-sm text-neutral-500">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
