// src/features/chat/knowledge.ts
import type { Lang, Loc } from "@/lib/i18n"
import {
  allDiseases,
  diseasePath,
  type Block,
  type Disease,
} from "@/content/treatments"
import { aestheticTreatments } from "@/content/aesthetik"
import { praxis } from "@/content/praxis"
import { arzt } from "@/content/arzt"

export interface KnowledgeDoc {
  id: string
  url: string
  titleDe: string
  titleEn: string
  keywords: string
  textDe: string
  textEn: string
}

function blockText(blocks: Block[] | undefined, lang: Lang): string {
  if (!blocks) return ""
  const out: string[] = []
  for (const b of blocks) {
    if (b.t === "sub" || b.t === "p") out.push(b.text[lang])
    else if (b.t === "ul") out.push(b.items[lang].join(". "))
    // "img" blocks carry no useful retrieval text — skip.
  }
  return out.join(" ")
}

function listText(loc: Loc<string[]> | undefined, lang: Lang): string {
  return loc ? loc[lang].join(" ") : ""
}

function diseaseText(d: Disease, lang: Lang): string {
  const parts = [d.title[lang], d.summary[lang]]
  if (d.rich) {
    parts.push(
      blockText(d.rich.definition, lang),
      blockText(d.rich.medical, lang),
      blockText(d.rich.naturopathic, lang),
      blockText(d.rich.tcm, lang),
      blockText(d.rich.ayurvedic, lang),
      blockText(d.rich.physio, lang),
    )
  } else {
    parts.push(listText(d.definition, lang))
    if (d.treatments) {
      parts.push(
        listText(d.treatments.medical, lang),
        listText(d.treatments.naturopathic, lang),
        listText(d.treatments.tcm, lang),
        listText(d.treatments.ayurvedic, lang),
        listText(d.treatments.physio, lang),
      )
    }
  }
  return parts.filter(Boolean).join(" ").trim()
}

export function buildKnowledgeDocs(): KnowledgeDoc[] {
  const docs: KnowledgeDoc[] = []

  for (const { area, disease } of allDiseases()) {
    docs.push({
      id: `disease:${disease.slug}`,
      url: diseasePath(area.slug, disease.slug),
      titleDe: disease.title.de,
      titleEn: disease.title.en,
      keywords: `${disease.icd10} ${disease.title.de} ${disease.title.en} ${area.title.de} ${area.title.en}`,
      textDe: diseaseText(disease, "de"),
      textEn: diseaseText(disease, "en"),
    })
  }

  for (const t of aestheticTreatments) {
    const faqDe = t.faq.map((f) => `${f.q.de} ${f.a.de}`).join(" ")
    const faqEn = t.faq.map((f) => `${f.q.en} ${f.a.en}`).join(" ")
    docs.push({
      id: `aesthetic:${t.slug}`,
      url: `/aesthetik/${t.slug}`,
      titleDe: t.title.de,
      titleEn: t.title.en,
      keywords: `${t.title.de} ${t.title.en}`,
      textDe: [t.summary.de, blockText(t.definition, "de"), blockText(t.effect, "de"), blockText(t.treatment, "de"), faqDe].join(" ").trim(),
      textEn: [t.summary.en, blockText(t.definition, "en"), blockText(t.effect, "en"), blockText(t.treatment, "en"), faqEn].join(" ").trim(),
    })
  }

  const contact = [praxis.address, praxis.phone, praxis.mobile, praxis.email, praxis.hours]
    .filter((v) => v && !/folgt/i.test(v))
    .join(" · ")
  docs.push({
    id: "practice:info",
    url: "/kontakt",
    titleDe: "Praxis & Kontakt",
    titleEn: "Practice & Contact",
    keywords: `${praxis.brand} ${arzt.name} Kontakt contact Termin appointment Sprechzeiten hours`,
    textDe: [arzt.name, arzt.qualifications.de, ...arzt.intro.de, ...arzt.bio.de, `Kontakt: ${contact}`, `Sprechzeiten: ${praxis.hours}`].join(" ").trim(),
    textEn: [arzt.name, arzt.qualifications.en, ...arzt.intro.en, ...arzt.bio.en, `Contact: ${contact}`, `Hours: ${praxis.hours}`].join(" ").trim(),
  })

  return docs
}
