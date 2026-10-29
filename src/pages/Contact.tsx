import { Container } from "@/components/site/Container"
import { Reveal } from "@/components/site/Reveal"
import { GradientBackdrop } from "@/components/site/GradientBackdrop"
import { ContactForm } from "@/components/site/ContactForm"
import { Card, CardContent } from "@/components/ui/card"
import { praxis } from "@/content/praxis"
import { useUi } from "@/content/ui"
import { useSeo } from "@/lib/useSeo"

export default function Contact() {
  const ui = useUi()
  useSeo({ title: ui.contact.title, description: ui.contact.intro })
  const rows = [
    { label: ui.contact.address, value: praxis.address },
    { label: ui.contact.phone, value: praxis.phone },
    { label: ui.contact.mobile, value: praxis.mobile },
    { label: ui.contact.email, value: praxis.email, isEmail: true },
    { label: ui.contact.hours, value: praxis.hours },
    // Only show fields that are actually filled in (hide "… folgt" placeholders).
  ].filter((r) => r.value && !/folgt/i.test(r.value))
  return (
    <main className="pt-24">
      <section className="relative overflow-hidden bg-wash py-16">
        <GradientBackdrop />
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{ui.nav.contact}</p>
            <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">{ui.contact.title}</h1>
            <p className="mt-5 text-lg text-body">{ui.contact.intro}</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <h2 className="text-2xl font-bold text-ink">{ui.contact.form.title}</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="bg-white shadow-md">
                <CardContent className="grid gap-y-6 p-8">
                  {rows.map((r) => (
                    <div key={r.label}>
                      <p className="text-xs uppercase tracking-widest text-neutral-500">{r.label}</p>
                      <p className="mt-1 whitespace-pre-line text-lg text-ink">
                        {r.isEmail ? (
                          <a
                            href={`mailto:${r.value}`}
                            className="rounded-sm text-info-ink underline decoration-brand underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
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
        </Container>
      </section>
    </main>
  )
}
