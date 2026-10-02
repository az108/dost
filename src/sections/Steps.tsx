import { Reveal } from "@/components/site/Reveal"
import { Container } from "@/components/site/Container"
import { useUi } from "@/content/ui"

/** "How it works" — three steps to a treatment. */
export function Steps() {
  const ui = useUi()
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{ui.steps.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">{ui.steps.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ui.steps.items.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * i}>
              <div className="relative h-full rounded-3xl border border-neutral-100 bg-wash p-8 shadow-sm">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand text-lg font-bold text-white shadow-lg shadow-brand/20">
                  {i + 1}
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-3 text-body">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
