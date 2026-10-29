import { Link } from "react-router-dom"
import { Container } from "@/components/site/Container"
import { Reveal } from "@/components/site/Reveal"
import { AreaIcon } from "@/components/site/AreaIcon"
import { GradientBackdrop } from "@/components/site/GradientBackdrop"
import { SearchBox } from "@/components/site/SearchBox"
import { useLang } from "@/lib/i18n"
import { useUi } from "@/content/ui"
import { useSeo } from "@/lib/useSeo"
import { treatmentAreas, areaPath } from "@/content/treatments"

export default function Treatments() {
  const { lang } = useLang()
  const ui = useUi()
  useSeo({ title: ui.treatments.title, description: ui.treatments.intro })

  return (
    <main className="pt-24">
      <section className="relative z-20 bg-wash py-16">
        <GradientBackdrop />
        <Container>
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{ui.treatments.eyebrow}</p>
            <h1 className="mt-3 text-5xl font-extrabold md:text-6xl">{ui.treatments.title}</h1>
            <p className="mt-5 text-lg text-body">{ui.treatments.intro}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-2xl">
              <SearchBox />
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {treatmentAreas.map((area, i) => {
              const count = area.diseases.length
              return (
                <Reveal key={area.slug} delay={0.05 * i}>
                  <Link
                    to={areaPath(area.slug)}
                    className="group flex h-full flex-col rounded-3xl border border-neutral-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl"
                  >
                    <span className="grid size-14 place-items-center rounded-2xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <AreaIcon name={area.icon} />
                    </span>
                    <h2 className="mt-6 text-2xl font-bold text-ink">{area.title[lang]}</h2>
                    <p className="mt-2 flex-1 text-body">{area.excerpt[lang]}</p>
                    <p className="mt-5 text-sm font-semibold text-brand">
                      {count > 0 ? `${count} ${ui.common.diseases}` : ui.treatments.soon}
                      <span aria-hidden="true" className="ml-1">→</span>
                    </p>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </section>
    </main>
  )
}
