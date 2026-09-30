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
        {t(legal[which]).map((p, i) => (
          <p key={i} className="mt-8 text-body">
            {p}
          </p>
        ))}
      </main>
    </Container>
  )
}
