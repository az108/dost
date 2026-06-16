import { Reveal } from "@/components/site/Reveal"
import { arzt } from "@/content/arzt"
import arztFoto from "@/assets/arzt-portrait.jpg"

export function Arzt() {
  return (
    <section id="arzt" className="relative scroll-mt-20 overflow-hidden py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-[1fr_1.2fr]">
        <Reveal className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/25 to-brand-green/25 blur-2xl" />
          <img
            src={arztFoto}
            alt={arzt.name}
            className="-rotate-1 rounded-3xl shadow-2xl"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Unser Arzt in Magersdorf
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold md:text-5xl">
              {arzt.name}
            </h2>
            <p className="mt-2 text-lg text-brand-ink">{arzt.qualifications}</p>
          </Reveal>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-600">
            {[...arzt.intro, ...arzt.bio].map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
