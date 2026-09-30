import { Reveal } from "@/components/site/Reveal"
import { Container } from "@/components/site/Container"
import { useT } from "@/lib/i18n"
import { useUi } from "@/content/ui"
import { arzt } from "@/content/arzt"
import arztFoto from "@/assets/arzt-portrait.jpg"

export function Arzt() {
  const t = useT()
  const ui = useUi()
  return (
    <section id="arzt" className="relative scroll-mt-20 overflow-hidden bg-wash py-24">
      <Container>
        <div className="grid items-center gap-14 md:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/25 to-mint/25 blur-2xl" />
            <img src={arztFoto} alt={arzt.name} className="-rotate-1 rounded-3xl shadow-2xl" />
          </Reveal>
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                {ui.arzt.eyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">{arzt.name}</h2>
              <p className="mt-2 text-lg text-info-ink">{t(arzt.qualifications)}</p>
            </Reveal>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-body">
              {[...t(arzt.intro), ...t(arzt.bio)].map((p, i) => (
                <Reveal key={i} delay={0.1 + i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
