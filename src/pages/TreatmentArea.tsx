import { Link, useParams } from "react-router-dom"
import { Container } from "@/components/site/Container"
import { Reveal } from "@/components/site/Reveal"
import { Breadcrumbs } from "@/components/site/Breadcrumbs"
import { AreaIcon } from "@/components/site/AreaIcon"
import { IcdBadge } from "@/components/site/IcdBadge"
import NotFound from "@/pages/NotFound"
import { useLang } from "@/lib/i18n"
import { useUi } from "@/content/ui"
import { useSeo } from "@/lib/useSeo"
import { areaBySlug, diseasePath } from "@/content/treatments"

export default function TreatmentArea() {
  const { area: areaSlug } = useParams()
  const { lang } = useLang()
  const ui = useUi()
  const area = areaBySlug(areaSlug)
  useSeo({ title: area ? area.title[lang] : undefined })

  if (!area) return <NotFound />

  return (
    <main className="pt-24">
      <section className="bg-wash py-10">
        <Container>
          <Breadcrumbs
            backTo="/behandlungen"
            crumbs={[
              { label: ui.common.home, to: "/" },
              { label: ui.treatments.title, to: "/behandlungen" },
              { label: area.title[lang] },
            ]}
          />
          <div className="mt-8 flex items-start gap-5">
            <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20">
              <AreaIcon name={area.icon} className="size-8" />
            </span>
            <div>
              <h1 className="text-4xl font-extrabold md:text-5xl">{area.title[lang]}</h1>
              <p className="mt-2 max-w-2xl text-lg text-body">{area.excerpt[lang]}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <h2 className="text-2xl font-bold text-ink">{ui.area.diseasesTitle}</h2>
          {area.diseases.length === 0 ? (
            <p className="mt-4 rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-6 py-10 text-center text-body">
              {ui.area.soon}
            </p>
          ) : (
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {area.diseases.map((d, i) => (
                <Reveal key={d.slug} delay={0.05 * i}>
                  <Link
                    to={diseasePath(area.slug, d.slug)}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg"
                  >
                    <span>
                      <span className="block text-lg font-semibold text-ink group-hover:text-brand">
                        {d.title[lang]}
                      </span>
                      <span className="mt-1 block text-sm text-body">{d.summary[lang]}</span>
                    </span>
                    <IcdBadge code={d.icd10} />

                  </Link>
                </Reveal>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </main>
  )
}
