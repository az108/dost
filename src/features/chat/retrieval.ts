// src/features/chat/retrieval.ts
import MiniSearch from "minisearch"
import type { Lang } from "@/lib/i18n"
import { buildKnowledgeDocs } from "./knowledge"
import type { RetrievedDoc } from "./types"

const EXCERPT_CHARS = 4800 // ~1200 tokens per doc
const MIN_SCORE = 1 // drop weak partial matches; nonsense queries match nothing
const DEFAULT_K = 4

let index: MiniSearch | null = null

function getIndex(): MiniSearch {
  if (index) return index
  const ms = new MiniSearch({
    fields: ["titleDe", "titleEn", "keywords", "textDe", "textEn"],
    storeFields: ["url", "titleDe", "titleEn", "textDe", "textEn"],
    searchOptions: {
      fuzzy: 0.2,
      prefix: true,
      combineWith: "OR",
      boost: { titleDe: 3, titleEn: 3, keywords: 3 },
    },
  })
  ms.addAll(buildKnowledgeDocs())
  index = ms
  return ms
}

export function retrieve(query: string, lang: Lang, k: number = DEFAULT_K): RetrievedDoc[] {
  const q = query.trim()
  if (!q) return []
  const results = getIndex()
    .search(q)
    .filter((r) => r.score >= MIN_SCORE)
    .slice(0, k)
  return results.map((r) => ({
    title: (lang === "de" ? r.titleDe : r.titleEn) as string,
    url: r.url as string,
    text: ((lang === "de" ? r.textDe : r.textEn) as string).slice(0, EXCERPT_CHARS),
  }))
}

/** Test hook: drop the cached index. Content is static, so production never needs this. */
export function __resetIndex(): void {
  index = null
}
