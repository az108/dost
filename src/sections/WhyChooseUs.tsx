import { Reveal } from "@/components/site/Reveal"
import { Container } from "@/components/site/Container"
import { useUi } from "@/content/ui"

const ICONS = [
  // Qualified doctor — badge
  <svg key="0" width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3l7 3v5c0 4.2-2.8 7.6-7 9-4.2-1.4-7-4.8-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Trusted treatment — hand holding heart
  <svg key="1" width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 9.5s-3-2.5-4.2-1a2 2 0 0 0 .2 2.8L12 15l4-3.7a2 2 0 0 0 .2-2.8C15 7 12 9.5 12 9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M4 20c1.5-2 4-3 8-3s6.5 1 8 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
  // Convenient care — calendar
  <svg key="2" width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="4" y="5" width="16" height="15" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 9h16M8 3v4M16 3v4M9 14l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
]

export function WhyChooseUs() {
  const ui = useUi()
  return (
    <section className="relative overflow-hidden bg-wash py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{ui.why.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">{ui.why.title}</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ui.why.cards.map((c, i) => (
            <Reveal key={c.title} delay={0.08 * i}>
              <div className="group h-full rounded-3xl border border-neutral-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <span className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  {ICONS[i]}
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{c.title}</h3>
                <p className="mt-3 text-body">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
