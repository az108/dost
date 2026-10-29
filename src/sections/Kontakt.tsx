import { Reveal } from "@/components/site/Reveal"
import { Container } from "@/components/site/Container"
import { Card, CardContent } from "@/components/ui/card"
import { praxis } from "@/content/praxis"
import { useUi } from "@/content/ui"

export function Kontakt() {
  const ui = useUi()
  const rows = [
    { label: ui.contact.address, value: praxis.address },
    { label: ui.contact.phone, value: praxis.phone },
    { label: ui.contact.mobile, value: praxis.mobile },
    { label: ui.contact.hours, value: praxis.hours },
    // Only show fields that are actually filled in (hide "… folgt" placeholders).
  ].filter((r) => r.value && !/folgt/i.test(r.value))
  return (
    <section id="kontakt" className="relative scroll-mt-20 overflow-hidden bg-white py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-mint/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-40 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-brand/20 blur-3xl"
      />
      <Container className="relative">
        <Reveal>
          <h2 className="text-4xl font-extrabold md:text-5xl">{ui.contact.title}</h2>
          <p className="mt-4 max-w-2xl text-lg text-body">{ui.contact.intro}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <Card className="mt-12 bg-white shadow-md">
            <CardContent className="grid gap-x-12 gap-y-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
              {rows.map((r) => (
                <div key={r.label}>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">{r.label}</p>
                  <p className="mt-2 whitespace-pre-line text-lg text-ink">{r.value}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </Container>
    </section>
  )
}
