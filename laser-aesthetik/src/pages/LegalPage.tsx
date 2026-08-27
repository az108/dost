import type { LegalDocument } from "@/content/legal"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { useSeo } from "@/lib/useSeo"

export default function LegalPage({
  document: doc,
  canonicalPath,
}: {
  document: LegalDocument
  canonicalPath: string
}) {
  useSeo({ title: doc.title, description: doc.intro, canonicalPath })

  return (
    // Tinted so the white footer still reads as a separate block. These pages
    // carry no CtaBanner, so without it a white section would run straight
    // into a white footer.
    <Section tone="tint">
      <Container>
        <div className="flex max-w-3xl flex-col gap-8">
          <h1 className="text-4xl sm:text-5xl">{doc.title}</h1>
          <p className="text-lg text-brand-700">{doc.intro}</p>
          {doc.sections.map((s) => (
            <div key={s.heading} className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-extrabold">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="leading-relaxed text-brand-800">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
