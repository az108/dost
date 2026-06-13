import { Reveal } from "@/components/site/Reveal"
import { Card, CardContent } from "@/components/ui/card"
import { praxis } from "@/content/praxis"

const rows = [
  { label: "Adresse", value: praxis.address },
  { label: "Telefon", value: praxis.phone },
  { label: "Handy", value: praxis.mobile },
  { label: "E-Mail", value: praxis.email },
  { label: "Sprechzeiten", value: praxis.hours },
]

export function Kontakt() {
  return (
    <section id="kontakt" className="relative scroll-mt-20 overflow-hidden bg-white py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-brand-green/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-40 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-brand/25 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Kontakt
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Rufen Sie uns an oder schreiben Sie uns – wir nehmen uns Zeit für Ihr Anliegen.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Card className="mt-12 bg-white shadow-md">
            <CardContent className="grid gap-x-12 gap-y-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
              {rows.map((r) => (
                <div key={r.label}>
                  <p className="text-xs uppercase tracking-widest text-neutral-500">
                    {r.label}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-lg text-neutral-900">
                    {r.label === "E-Mail" ? (
                      <a
                        href={`mailto:${r.value}`}
                        className="rounded-sm text-brand-ink underline decoration-brand underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                      >
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
