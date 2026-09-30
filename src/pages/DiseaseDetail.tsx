import { useParams } from "react-router-dom"
import { Container } from "@/components/site/Container"
import { Reveal } from "@/components/site/Reveal"
import { Breadcrumbs } from "@/components/site/Breadcrumbs"
import { DiseaseIllustration } from "@/components/site/DiseaseIllustration"
import NotFound from "@/pages/NotFound"
import { useLang, useT, type Loc } from "@/lib/i18n"
import { useUi } from "@/content/ui"
import { useSeo } from "@/lib/useSeo"
import { diseaseBySlug, areaPath, type Block } from "@/content/treatments"
import { generatedImages } from "@/content/diseases/generated-images"

/** Renders one migrated content block (sub-heading / paragraph / list / image). */
function BlockView({ block }: { block: Block }) {
  const t = useT()
  const aiCaption = useUi().disease.aiCaption
  switch (block.t) {
    case "sub":
      return <h4 className="mt-5 font-semibold text-ink">{t(block.text)}</h4>
    case "p":
      return <p className="mt-3 text-body">{t(block.text)}</p>
    case "ul":
      return (
        <ul className="mt-3 space-y-2 pl-1">
          {t(block.items).map((item, i) => (
            <li key={i} className="flex gap-3 text-body">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )
    case "img":
      return (
        <figure className="relative mt-6 overflow-hidden rounded-2xl border border-neutral-100 shadow-sm">
          <img
            src={import.meta.env.BASE_URL + block.src}
            alt={t(block.alt)}
            loading="lazy"
            className="w-full object-cover"
          />
          {block.ai && (
            <figcaption className="absolute bottom-2 right-3 rounded-full bg-black/45 px-2 py-0.5 text-[11px] font-medium text-white/90">
              {aiCaption}
            </figcaption>
          )}
        </figure>
      )
  }
}

export default function DiseaseDetail() {
  const { area: areaSlug, disease: diseaseSlug } = useParams()
  const { lang } = useLang()
  const ui = useUi()
  const found = diseaseBySlug(areaSlug, diseaseSlug)
  useSeo({ title: found ? found.disease.title[lang] : undefined })

  if (!found) return <NotFound />
  const { area, disease } = found
  const rich = disease.rich

  // Auto-render a generated hero image on generated pages that have no explicit
  // image block of their own (see scripts/images/sync-generated-images.ts).
  const defHasImg = !!rich && rich.definition.some((b) => b.t === "img")
  const genImg = rich && !defHasImg ? generatedImages[disease.slug] : undefined

  const richSections = rich
    ? ([
        ["medical", rich.medical],
        ["naturopathic", rich.naturopathic],
        ["tcm", rich.tcm],
        ["ayurvedic", rich.ayurvedic],
        ["physio", rich.physio],
      ] as const).filter(
        (s): s is ["medical" | "naturopathic" | "tcm" | "ayurvedic" | "physio", Block[]] =>
          Array.isArray(s[1]) && s[1].length > 0,
      )
    : []

  // Fallback (condensed) sections for diseases not yet migrated to rich content.
  type SecKey = "medical" | "naturopathic" | "tcm" | "ayurvedic" | "physio"
  const tr = disease.treatments
  const fallback: { key: SecKey; value?: Loc<string[]> }[] = tr
    ? [
        { key: "medical", value: tr.medical },
        { key: "naturopathic", value: tr.naturopathic },
        { key: "tcm", value: tr.tcm },
        { key: "ayurvedic", value: tr.ayurvedic },
        { key: "physio", value: tr.physio },
      ]
    : []
  const fallbackSections = fallback.filter((s): s is { key: SecKey; value: Loc<string[]> } => !!s.value)

  return (
    <main className="pt-24">
      <section className="bg-wash py-10">
        <Container>
          <Breadcrumbs
            backTo={areaPath(area.slug)}
            crumbs={[
              { label: ui.common.home, to: "/" },
              { label: ui.treatments.title, to: "/behandlungen" },
              { label: area.title[lang], to: areaPath(area.slug) },
              { label: disease.title[lang] },
            ]}
          />

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand shadow-sm">
                {ui.disease.icd} · {disease.icd10}
              </span>
              <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">{disease.title[lang]}</h1>
              <p className="mt-4 max-w-xl text-lg text-body">{disease.summary[lang]}</p>
            </div>
            <figure className="relative">
              <DiseaseIllustration kind={disease.illustration} />
            </figure>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-[1000px]">
          {/* Definition */}
          <Reveal>
            <h2 className="text-2xl font-bold text-ink">{ui.disease.definition}</h2>
            {rich ? (
              <div>
                {genImg && (
                  <figure className="relative mt-6 overflow-hidden rounded-2xl border border-neutral-100 shadow-sm">
                    <img
                      src={import.meta.env.BASE_URL + `diseases/${disease.slug}/definition.jpg`}
                      alt={genImg[lang]}
                      loading="lazy"
                      className="w-full object-cover"
                    />
                    <figcaption className="absolute bottom-2 right-3 rounded-full bg-black/45 px-2 py-0.5 text-[11px] font-medium text-white/90">
                      {ui.disease.aiCaption}
                    </figcaption>
                  </figure>
                )}
                {rich.definition.map((b, i) => (
                  <BlockView key={i} block={b} />
                ))}
              </div>
            ) : (
              <div className="mt-4 space-y-4 text-lg text-body">
                {(disease.definition?.[lang] ?? []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}
          </Reveal>

          {/* Treatments */}
          <Reveal delay={0.05}>
            <h2 className="mt-14 text-2xl font-bold text-ink">{ui.disease.treatmentsTitle}</h2>
          </Reveal>
          <div className="mt-6 space-y-5">
            {rich
              ? richSections.map(([key, blocks], i) => (
                  <Reveal key={key} delay={0.04 * i}>
                    <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
                      <h3 className="flex items-center gap-3 text-lg font-bold text-ink">
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand text-sm font-bold text-white">
                          {i + 1}
                        </span>
                        {ui.disease.sections[key]}
                      </h3>
                      {blocks.map((b, j) => (
                        <BlockView key={j} block={b} />
                      ))}
                    </div>
                  </Reveal>
                ))
              : fallbackSections.map(({ key, value }, i) => (
                  <Reveal key={key} delay={0.05 * i}>
                    <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
                      <h3 className="flex items-center gap-3 text-lg font-bold text-ink">
                        <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand text-sm font-bold text-white">
                          {i + 1}
                        </span>
                        {ui.disease.sections[key]}
                      </h3>
                      <ul className="mt-4 space-y-2.5 pl-1">
                        {value[lang].map((item, j) => (
                          <li key={j} className="flex gap-3 text-body">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
          </div>

          <p className="mt-10 rounded-xl bg-neutral-50 px-5 py-4 text-sm text-neutral-500">
            {ui.disease.disclaimer}
          </p>
        </Container>
      </section>
    </main>
  )
}
