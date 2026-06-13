import { Reveal } from "@/components/site/Reveal"
import { Card, CardContent } from "@/components/ui/card"
import { praxis } from "@/content/praxis"

const rows = [
  { label: "Adresse", value: praxis.address },
  { label: "Telefon", value: praxis.phone },
  { label: "Handy", value: praxis.mobile },
  { label: "Fax", value: praxis.fax },
  { label: "E-Mail", value: praxis.email },
  { label: "Sprechzeiten", value: praxis.hours },
]

export function Kontakt() {
  return (
    <section id="kontakt" className="relative scroll-mt-20 overflow-hidden bg-neutral-950 py-24 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Termin vereinbaren
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-300">
            Rufen Sie uns an oder schreiben Sie uns – wir nehmen uns Zeit für Ihr Anliegen.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Card className="mt-12 bg-white/5 ring-white/10 backdrop-blur">
            <CardContent className="grid gap-x-12 gap-y-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
              {rows.map((r) => (
                <div key={r.label}>
                  <p className="text-xs uppercase tracking-widest text-neutral-400">
                    {r.label}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-lg text-white">
                    {r.label === "E-Mail" ? (
                      <a
                        href={`mailto:${r.value}`}
                        className="rounded-sm underline decoration-brand underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
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
