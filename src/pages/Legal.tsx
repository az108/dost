import { Container } from "@/components/site/Container"
import { useLang, useTx } from "@/lib/i18n"
import { useUi } from "@/content/ui"
import { useSeo } from "@/lib/useSeo"
import { legal } from "@/content/legal"

export default function Legal({ which }: { which: "impressum" | "datenschutz" }) {
  const { lang } = useLang()
  const tx = useTx()
  const ui = useUi()
  const title = ui.legal[which]
  useSeo({ title })

  // Legal pages are nested structures (heading + paragraphs), so rather than a
  // single overlay key we render the German structure and translate each leaf
  // via the overlay. German and English keep their reviewed inline wording.
  const blocks = lang === "en" ? legal[which].en : legal[which].de
  const localize = (s: string) => (lang === "de" || lang === "en" ? s : tx(s))

  return (
    <Container>
      <main className="max-w-3xl py-32">
        <h1 className="text-5xl font-extrabold">{title}</h1>
        {blocks.map((block, i) => (
          <section key={i} className="mt-10">
            {block.heading && (
              <h2 className="text-xl font-bold text-ink">{localize(block.heading)}</h2>
            )}
            {block.body.map((p, j) => (
              <p key={j} className="mt-3 whitespace-pre-line text-body">
                {localize(p)}
              </p>
            ))}
          </section>
        ))}
      </main>
    </Container>
  )
}
