import { Link } from "react-router-dom"
import { Reveal } from "@/components/site/Reveal"
import { Container } from "@/components/site/Container"
import { AreaIcon } from "@/components/site/AreaIcon"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLang } from "@/lib/i18n"
import { useUi } from "@/content/ui"
import { treatmentAreas, areaPath } from "@/content/treatments"

export function TreatmentsTeaser() {
  const { lang } = useLang()
  const ui = useUi()
  return (
    <section id="behandlungen" className="relative scroll-mt-20 overflow-hidden bg-white py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{ui.areas.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">{ui.areas.title}</h2>
            <p className="mt-5 max-w-md text-lg text-body">{ui.areas.intro}</p>
            <Link
              to="/behandlungen"
              className={cn(buttonVariants({ size: "lg" }), "mt-8 rounded-full bg-brand px-8 text-white hover:bg-brand/90")}
            >
              {ui.areas.button}
              <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {treatmentAreas.map((area, i) => (
              <Reveal key={area.slug} delay={0.05 * i}>
                <Link
                  to={areaPath(area.slug)}
                  className="group flex items-center gap-4 rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <AreaIcon name={area.icon} />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{area.title[lang]}</span>
                    <span className="block text-sm text-body">{area.excerpt[lang]}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
