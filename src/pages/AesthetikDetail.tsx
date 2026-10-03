import { Link, useParams } from "react-router-dom"
import { Container } from "@/components/site/Container"
import { Reveal } from "@/components/site/Reveal"
import { Breadcrumbs } from "@/components/site/Breadcrumbs"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import NotFound from "@/pages/NotFound"
import { useLang, useT } from "@/lib/i18n"
import { useUi } from "@/content/ui"
import { useSeo } from "@/lib/useSeo"
import { aestheticBySlug } from "@/content/aesthetik"
import type { Block } from "@/content/treatments"

function BlockView({ block }: { block: Block }) {
  const t = useT()
  switch (block.t) {
    case "sub":
      return <h3 className="mt-6 text-lg font-semibold text-ink">{t(block.text)}</h3>
    case "p":
      return <p className="mt-3 text-body">{t(block.text)}</p>
    case "ul":
      return (
        <ul className="mt-3 space-y-2 pl-1">
          {t(block.items).map((it, i) => (
            <li key={i} className="flex gap-3 text-body">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mint" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )
    case "img":
      return (
        <figure className="mt-6 overflow-hidden rounded-2xl border border-neutral-100 shadow-sm">
          <img
            src={import.meta.env.BASE_URL + block.src}
            alt={t(block.alt)}
            loading="lazy"
            className="w-full object-cover"
          />
        </figure>
      )
  }
}

export default function AesthetikDetail() {
  const { slug } = useParams()
  const { lang } = useLang()
  const ui = useUi()
  const t = useT()
  const treatment = aestheticBySlug(slug)
  useSeo({ title: treatment ? treatment.title[lang] : undefined })

  if (!treatment) return <NotFound />

  const sections: [string, Block[]][] = [
    [ui.aesthetic.definition, treatment.definition],
    [ui.aesthetic.effect, treatment.effect],
    [ui.aesthetic.treatment, treatment.treatment],
  ]

  return (
    <main className="pt-24">
      <section className="bg-wash py-10">
        <Container>
          <Breadcrumbs
            backTo="/aesthetik"
            crumbs={[
              { label: ui.common.home, to: "/" },
              { label: ui.aesthetic.eyebrow, to: "/aesthetik" },
              { label: treatment.title[lang] },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-extrabold md:text-5xl">{treatment.title[lang]}</h1>
            <p className="mt-4 text-lg text-body">{treatment.summary[lang]}</p>
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-[1000px]">
          {sections.map(([title, blocks], i) => (
            <Reveal key={title} delay={0.04 * i}>
              <div className={i > 0 ? "mt-12" : ""}>
                <h2 className="text-2xl font-bold text-ink">{title}</h2>
                {blocks.map((b, j) => (
                  <BlockView key={j} block={b} />
                ))}
              </div>
            </Reveal>
          ))}

          {treatment.faq.length > 0 && (
            <Reveal delay={0.08}>
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-ink">{ui.aesthetic.faq}</h2>
                <div className="mt-4 space-y-4">
                  {treatment.faq.map((f, i) => (
                    <div key={i} className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
                      <h3 className="font-semibold text-ink">{t(f.q)}</h3>
                      <p className="mt-2 text-body">{t(f.a)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.08}>
            <div className="mt-14 rounded-3xl bg-brand p-8 text-white shadow-xl shadow-brand/20 sm:p-10">
              <h2 className="text-2xl font-bold text-white">{ui.aesthetic.detailCtaTitle}</h2>
              <p className="mt-2 max-w-xl text-white/85">{ui.aesthetic.detailCtaText}</p>
              <Link
                to="/kontakt"
                className={cn(buttonVariants({ size: "lg" }), "mt-6 rounded-full bg-mint px-8 text-emerald-950 hover:bg-mint/90")}
              >
                {ui.aesthetic.cta}
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
