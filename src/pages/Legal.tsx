import { Container } from "@/components/site/Container"
import { useT } from "@/lib/i18n"
import { useUi } from "@/content/ui"
import { useSeo } from "@/lib/useSeo"
import { legal } from "@/content/legal"

export default function Legal({ which }: { which: "impressum" | "datenschutz" }) {
  const t = useT()
  const ui = useUi()
  const title = ui.legal[which]
  useSeo({ title })
  return (
    <Container>
      <main className="max-w-3xl py-32">
        <h1 className="text-5xl font-extrabold">{title}</h1>
        {t(legal[which]).map((block, i) => (
          <section key={i} className="mt-10">
            {block.heading && <h2 className="text-xl font-bold text-ink">{block.heading}</h2>}
            {block.body.map((p, j) => (
              <p key={j} className="mt-3 whitespace-pre-line text-body">
                {p}
              </p>
            ))}
          </section>
        ))}
      </main>
    </Container>
  )
}
