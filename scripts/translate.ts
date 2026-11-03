/**
 * scripts/translate.ts — Machine-translate every German source string into the
 * site's extra languages and write one overlay per language to
 * public/i18n/<lang>.json. The app lazily fetches the overlay for whichever
 * language a visitor selects (see src/lib/i18n.tsx); German needs none.
 *
 * Run it with the practice's own Gemini key (the key is never committed):
 *
 *   # See what WOULD be translated and roughly how much, without calling the API
 *   TRANSLATE_DRYRUN=1 npm run translate
 *
 *   # Translate everything that is missing, into every language
 *   GEMINI_API_KEY=xxxxx npm run translate
 *
 *   # Only a subset of languages, or force a full re-translation
 *   GEMINI_API_KEY=xxxxx TRANSLATE_LANGS=es,fr npm run translate
 *   GEMINI_API_KEY=xxxxx TRANSLATE_FORCE=1    npm run translate
 *
 * It is incremental: strings already present in an existing overlay are reused,
 * so re-runs only translate new or changed source strings, and strings no longer
 * used are pruned. A batch that keeps failing is skipped (those strings fall
 * back to German in the UI) so one bad batch never aborts the whole run.
 *
 * Env knobs: GEMINI_API_KEY (required unless DRYRUN), GEMINI_MODEL
 * (default gemini-2.5-flash), TRANSLATE_LANGS (comma list), TRANSLATE_FORCE=1,
 * TRANSLATE_DRYRUN=1, TRANSLATE_CONCURRENCY (default 5).
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

import { LANGS, type Lang } from "../src/lib/i18n"
import { treatmentAreas } from "../src/content/treatments"
import { aestheticTreatments } from "../src/content/aesthetik"
import { arzt } from "../src/content/arzt"
import { praxis } from "../src/content/praxis"
import { galerie } from "../src/content/galerie"
import { generatedImages } from "../src/content/diseases/generated-images"
import { legal } from "../src/content/legal"
import { fachbereiche } from "../src/content/fachbereiche"

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, "..")
const OUT_DIR = resolve(ROOT, "public/i18n")

const LANG_NAMES: Record<Lang, string> = {
  de: "German",
  en: "English",
  es: "Spanish",
  fr: "French",
  it: "Italian",
  tr: "Turkish",
  ru: "Russian",
  ar: "Arabic",
}

const MODEL = process.env.GEMINI_MODEL ?? "gemini-2.5-flash"
const API_KEY = process.env.GEMINI_API_KEY ?? ""
const FORCE = process.env.TRANSLATE_FORCE === "1"
const DRYRUN = process.env.TRANSLATE_DRYRUN === "1"
const CONCURRENCY = Number(process.env.TRANSLATE_CONCURRENCY ?? "5")
const MAX_ITEMS = 40 // strings per request
const MAX_CHARS = 5000 // source chars per request
const CHECKPOINT_EVERY = 20 // flush the overlay to disk every N batches

/* ── 1. Enumerate the German source strings ──────────────────────────────────
 * Two sets, because they need different target languages:
 *  - locLeaves: content wrapped in `Loc` (diseases, aesthetik, arzt, areas,
 *    gallery, generated-image titles, legal). English is already inline, so
 *    these only need the machine-translated languages (es…ar).
 *  - plainLeaves: plain German that is rendered via `tx` (the Fachbereiche topic
 *    pages and a few hardcoded UI phrases). These have no inline English, so
 *    they also need English. */
const locLeaves = new Set<string>()
const plainLeaves = new Set<string>()

/** Recursively collect every `Loc` leaf's German value from a data structure. */
function walkLoc(node: unknown): void {
  if (node == null || typeof node !== "object") return
  if (Array.isArray(node)) {
    node.forEach(walkLoc)
    return
  }
  const o = node as Record<string, unknown>
  if (typeof o.de === "string" && typeof o.en === "string") {
    if (o.de.trim()) locLeaves.add(o.de)
    return
  }
  if (
    Array.isArray(o.de) &&
    Array.isArray(o.en) &&
    (o.de as unknown[]).every((x) => typeof x === "string")
  ) {
    for (const s of o.de as string[]) if (s.trim()) locLeaves.add(s)
    return
  }
  Object.values(o).forEach(walkLoc)
}

walkLoc(treatmentAreas)
walkLoc(aestheticTreatments)
walkLoc(arzt)
walkLoc(praxis)
walkLoc(galerie)
walkLoc(generatedImages)

// Legal pages are rendered from their German structure for es…ar (German and
// English keep their reviewed inline wording — see src/pages/Legal.tsx).
for (const which of ["impressum", "datenschutz"] as const) {
  for (const block of legal[which].de) {
    if (block.heading?.trim()) locLeaves.add(block.heading)
    for (const p of block.body) if (p.trim()) locLeaves.add(p)
  }
}

// Plain-German topic pages (Fachbereiche) + hardcoded UI phrases.
for (const e of fachbereiche) {
  plainLeaves.add(e.title)
  plainLeaves.add(e.excerpt)
  for (const p of e.body) if (p.trim()) plainLeaves.add(p)
  if (e.imageAlt?.trim()) plainLeaves.add(e.imageAlt)
}
for (const phrase of ["Mehr erfahren", "Fachbereiche", "Weitere Fachbereiche"]) {
  plainLeaves.add(phrase)
}

/** Strings a given language's overlay must contain. */
function neededFor(lang: Lang): string[] {
  if (lang === "en") return [...plainLeaves]
  return [...new Set([...locLeaves, ...plainLeaves])]
}

/* ── 2. Figure out which languages to process ────────────────────────────── */
const allTargets = LANGS.filter((l) => l !== "de")
const requested = process.env.TRANSLATE_LANGS?.split(",")
  .map((s) => s.trim())
  .filter(Boolean) as Lang[] | undefined
const targets = requested?.length
  ? requested.filter((l): l is Lang => (allTargets as string[]).includes(l))
  : allTargets

/* ── 3. Gemini translation ───────────────────────────────────────────────── */
function chunk(items: string[]): string[][] {
  const out: string[][] = []
  let cur: string[] = []
  let chars = 0
  for (const s of items) {
    if (cur.length && (chars + s.length > MAX_CHARS || cur.length >= MAX_ITEMS)) {
      out.push(cur)
      cur = []
      chars = 0
    }
    cur.push(s)
    chars += s.length
  }
  if (cur.length) out.push(cur)
  return out
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

async function translateBatchOnce(strings: string[], lang: Lang): Promise<string[]> {
  const sys = `You are a professional medical translator for the website of a German doctor's practice (Dr. med. univ. Dost Mohammad). Translate each element of the given JSON array of German texts into ${LANG_NAMES[lang]}.
Rules:
- Return ONLY a JSON array of translations with EXACTLY the same number of elements, in the same order as the input.
- Use natural, patient-friendly wording while preserving the medical meaning precisely.
- Keep unchanged: the doctor's name, proper nouns, place names, drug/substance names, Latin binomials, TCM and Ayurvedic remedy/term names, ICD-10 codes, phone numbers, e-mail addresses, URLs and postal addresses.
- Preserve any newline characters (\\n) in the same positions.
- Do not add notes, comments, quotes around the array, or any text outside the JSON array.`
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: sys }] },
      contents: [{ role: "user", parts: [{ text: JSON.stringify(strings) }] }],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: "application/json",
        responseSchema: { type: "ARRAY", items: { type: "STRING" } },
      },
    }),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`)
  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[]
  }
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text) throw new Error("empty response")
  const arr = JSON.parse(text) as unknown
  if (!Array.isArray(arr) || arr.length !== strings.length) {
    throw new Error(`length mismatch: got ${Array.isArray(arr) ? arr.length : "?"}, want ${strings.length}`)
  }
  return arr.map((x) => String(x))
}

async function translateBatch(strings: string[], lang: Lang): Promise<string[] | null> {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      return await translateBatchOnce(strings, lang)
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      if (attempt === 3) {
        console.warn(`  ! batch failed (${strings.length} strings): ${msg}`)
        return null
      }
      await sleep(attempt * 2000)
    }
  }
  return null
}

async function runPool<T>(items: T[], worker: (item: T, i: number) => Promise<void>): Promise<void> {
  let idx = 0
  async function next(): Promise<void> {
    const i = idx++
    if (i >= items.length) return
    await worker(items[i], i)
    return next()
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, items.length) }, () => next()))
}

/* ── 4. Main ─────────────────────────────────────────────────────────────── */
function overlayPath(lang: Lang): string {
  return resolve(OUT_DIR, `${lang}.json`)
}

function loadExisting(lang: Lang): Record<string, string> {
  const p = overlayPath(lang)
  if (!existsSync(p)) return {}
  try {
    return JSON.parse(readFileSync(p, "utf8")) as Record<string, string>
  } catch {
    return {}
  }
}

function writeOverlay(lang: Lang, map: Record<string, string>): void {
  mkdirSync(OUT_DIR, { recursive: true })
  // Sort keys so diffs stay small and reviewable.
  const sorted: Record<string, string> = {}
  for (const k of Object.keys(map).sort()) sorted[k] = map[k]
  writeFileSync(overlayPath(lang), JSON.stringify(sorted, null, 0) + "\n")
}

async function main(): Promise<void> {
  console.log(
    `Source strings — Loc leaves: ${locLeaves.size}, plain leaves: ${plainLeaves.size}`,
  )

  if (DRYRUN) {
    console.log(`\nDry run (no API calls). Model would be: ${MODEL}\n`)
    let grandChars = 0
    let grandCount = 0
    for (const lang of targets) {
      const existing = FORCE ? {} : loadExisting(lang)
      const needed = neededFor(lang)
      const missing = needed.filter((s) => FORCE || !existing[s])
      const chars = missing.reduce((n, s) => n + s.length, 0)
      grandChars += chars
      grandCount += missing.length
      console.log(
        `  ${lang} (${LANG_NAMES[lang]}): ${missing.length} strings to translate, ${chars.toLocaleString()} source chars`,
      )
    }
    console.log(
      `\nTotal: ${grandCount} strings, ${grandChars.toLocaleString()} source characters across ${targets.length} languages.`,
    )
    console.log("Re-run without TRANSLATE_DRYRUN (and with GEMINI_API_KEY) to translate.")
    return
  }

  if (!API_KEY) {
    console.error("GEMINI_API_KEY is not set. Export it, or run with TRANSLATE_DRYRUN=1 to preview.")
    process.exit(1)
  }

  for (const lang of targets) {
    const existing = FORCE ? {} : loadExisting(lang)
    const needed = neededFor(lang)
    const result: Record<string, string> = {}
    const todo: string[] = []
    for (const s of needed) {
      if (!FORCE && existing[s]) result[s] = existing[s]
      else todo.push(s)
    }

    const batches = chunk(todo)
    console.log(
      `\n${lang} (${LANG_NAMES[lang]}): ${result ? Object.keys(result).length : 0} reused, ${todo.length} to translate in ${batches.length} batches`,
    )
    if (batches.length === 0) {
      writeOverlay(lang, result)
      continue
    }

    let done = 0
    await runPool(batches, async (batch) => {
      const out = await translateBatch(batch, lang)
      if (out) {
        batch.forEach((src, i) => {
          if (out[i]?.trim()) result[src] = out[i]
        })
      }
      done++
      if (done % CHECKPOINT_EVERY === 0) {
        writeOverlay(lang, result)
        console.log(`  … ${done}/${batches.length} batches (${Object.keys(result).length} entries)`)
      }
    })

    writeOverlay(lang, result)
    const translated = Object.keys(result).length
    const missing = needed.length - translated
    console.log(
      `  ✓ ${lang}: wrote ${translated}/${needed.length} entries${missing ? ` (${missing} still untranslated — will fall back to German)` : ""}`,
    )
  }

  console.log("\nDone. Overlays written to public/i18n/. Commit them and deploy.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
