/**
 * Builds scripts/images/image-manifest.json — the work list the local Gemini
 * runner consumes. For each disease in the 8 GENERATED areas it emits:
 *   - a "definition" image (object tied to the condition), and
 *   - a "naturopathic" image (still-life of the natural remedies), UNLESS the
 *     slug is excluded in naturopathic-hints.json.
 *
 * Each entry: { area, slug, kind, file, de, en, prompt }. Prompts are built
 * from object-hints.json (definition) and naturopathic-hints.json + per-area
 * defaults (naturopathic). Edit any prompt in the JSON; re-running preserves
 * hand-edited prompts (matched by slug+kind).
 *
 * Run:  npx vite-node scripts/images/build-manifest.ts
 */
import { writeFileSync, readFileSync, existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { treatmentAreas } from "@/content/treatments"

const HERE = dirname(fileURLToPath(import.meta.url))
const OUT = join(HERE, "image-manifest.json")

const readJson = (f: string): any => {
  try {
    return JSON.parse(readFileSync(join(HERE, f), "utf8"))
  } catch {
    return {}
  }
}
const objectHints: Record<string, string> = readJson("object-hints.json").hints ?? {}
const naturoFile = readJson("naturopathic-hints.json")
const naturoHints: Record<string, string> = naturoFile.hints ?? {}
const naturoExclude = new Set<string>(naturoFile.exclude ?? [])

/** The 8 areas that carry generated content and need images. */
const GENERATED_AREAS = new Set([
  "heart-circulation-blood-vessels",
  "musculoskeletal-system-orthopedics-pain-medicine",
  "skin-hair-nails-subcutaneous-tissue",
  "infections-parasitic-diseases",
  "urinary-tract-kidneys",
  "blood-immune-system-oncological-follow-up-care",
  "eyes-sensory-organs",
  "injuries-poisoning-consequences-of-accidents",
])

/** Per-area OBJECT ideas for the DEFINITION image (fallback when a slug has no
 *  specific object hint). */
const AREA_HINTS: Record<string, string> = {
  "heart-circulation-blood-vessels":
    "ein anatomisches Herzmodell, ein Stethoskop, ein Blutdruckmessgerät oder herzgesunde Lebensmittel",
  "musculoskeletal-system-orthopedics-pain-medicine":
    "ein Gelenk- oder Wirbelsäulenmodell, Hanteln, ein Gymnastikband oder eine Faszienrolle",
  "skin-hair-nails-subcutaneous-tissue":
    "Hautpflegeprodukte, Naturkosmetik-Zutaten oder eine sanfte Nahaufnahme gesunder Haut",
  "infections-parasitic-diseases":
    "Taschentücher, eine Tasse Tee mit Ingwer und Zitrone, Honig oder eine Impfspritze",
  "urinary-tract-kidneys":
    "ein Glas Wasser, ein anatomisches Nierenmodell, Cranberrys oder Kräutertee",
  "blood-immune-system-oncological-follow-up-care":
    "Blutprobenröhrchen ohne Beschriftung, nährstoffreiche Lebensmittel oder Vitaminpräparate",
  "eyes-sensory-organs":
    "eine Brille, Augentropfen, ein anatomisches Augen- oder Ohrmodell oder eine Lupe",
  "injuries-poisoning-consequences-of-accidents":
    "ein Verbandskasten, Pflaster, eine elastische Bandage oder ein Kühlpack",
}

/** Per-area default remedies for the NATUROPATHIC image. */
const AREA_NATURO_HINTS: Record<string, string> = {
  "heart-circulation-blood-vessels":
    "herzgesunde Zutaten wie Haferflocken, Beeren, Nüsse, Olivenöl und eine Tasse Kräutertee",
  "musculoskeletal-system-orthopedics-pain-medicine":
    "entzündungshemmende Naturmittel wie Kurkuma, Ingwer, Arnikagel, eine Wärmflasche und Kräutertee",
  "skin-hair-nails-subcutaneous-tissue":
    "sanfte Naturpflege wie Aloe vera, Ringelblume, Hafer, Kamille und Pflegeöl",
  "infections-parasitic-diseases":
    "Hausmittel bei Infekten wie Honig, Ingwer, Zitrone, frische Kräuter und eine dampfende Tasse Kräutertee",
  "urinary-tract-kidneys":
    "nieren- und blasenfreundliche Mittel wie Cranberrys, ein Glas Wasser und Brennnessel- oder Kräutertee",
  "blood-immune-system-oncological-follow-up-care":
    "immunstärkende, nährstoffreiche Zutaten wie Zitrusfrüchte, Beeren, grünes Gemüse, Nüsse und Kräutertee",
  "eyes-sensory-organs":
    "augenfreundliche Naturmittel wie Heidelbeeren, Karotten, grünes Gemüse und ein warmer Kräuterkompress",
  "injuries-poisoning-consequences-of-accidents":
    "beruhigende Naturmittel wie Arnikagel, Aloe vera, eine Wärmflasche und Kräutertee",
}

/** DEFINITION prompt — leads with a condition-specific object, usually no people. */
function definitionPrompt(de: string, slug: string, area: string): string {
  const hint =
    objectHints[slug] ?? AREA_HINTS[area] ?? "ein typischer, gut erkennbarer Gegenstand zur Erkrankung"
  return (
    `Erstelle ein ansprechendes, fotorealistisches Bild für die Website einer Arztpraxis ` +
    `zum Thema „${de}". Bevorzugtes Motiv: ${hint}. Zeige es als klares Stillleben oder ` +
    `Nahaufnahme, möglichst OHNE Menschen – nur wenn es wirklich zur Erkrankung passt, ` +
    `darf eine natürliche Szene mit einer Person vorkommen (keine gestellten Porträts, ` +
    `nicht standardmäßig ältere Menschen). Heller, sauberer Hintergrund, warmes ` +
    `natürliches Licht, modern und ansprechend; nichts Ängstliches oder Blutiges. ` +
    `Ganz wichtig: KEIN Text, keine Buchstaben, keine Zahlen, keine Wörter und keine ` +
    `Logos im Bild. Querformat (16:9).`
  )
}

/** NATUROPATHIC prompt — a still-life of the natural remedies, no people, no text. */
function naturopathicPrompt(de: string, slug: string, area: string): string {
  const hint =
    naturoHints[slug] ?? AREA_NATURO_HINTS[area] ?? "natürliche Hausmittel wie Kräutertee, Honig und frische Kräuter"
  return (
    `Erstelle ein einladendes, fotorealistisches Stillleben naturheilkundlicher Hausmittel ` +
    `für die Website einer Arztpraxis, passend zum Thema „${de}". Motiv: ${hint}. Warm und ` +
    `hell arrangiert auf einem Holztisch, natürliches Licht, appetitlich und beruhigend, ` +
    `OHNE Menschen. Ganz wichtig: KEIN Text, keine Buchstaben, keine Zahlen, keine Wörter, ` +
    `keine Logos und keine beschrifteten Etiketten im Bild. Querformat (16:9).`
  )
}

type Entry = { area: string; slug: string; kind: string; file: string; de: string; en: string; prompt: string }

// Preserve hand-edited prompts across regenerations (keyed by slug + kind).
const previous: Record<string, string> = {}
if (existsSync(OUT)) {
  try {
    const old = JSON.parse(readFileSync(OUT, "utf8")) as { images?: Entry[] }
    for (const e of old.images ?? []) previous[`${e.slug}:${e.kind}`] = e.prompt
  } catch {
    /* ignore malformed previous file */
  }
}

const images: Entry[] = []
let defs = 0
let naturo = 0
for (const area of treatmentAreas) {
  if (!GENERATED_AREAS.has(area.slug)) continue
  for (const d of area.diseases) {
    images.push({
      area: area.slug,
      slug: d.slug,
      kind: "definition",
      file: "definition.jpg",
      de: d.title.de,
      en: d.title.en,
      prompt: previous[`${d.slug}:definition`] ?? definitionPrompt(d.title.de, d.slug, area.slug),
    })
    defs++
    if (!naturoExclude.has(d.slug)) {
      images.push({
        area: area.slug,
        slug: d.slug,
        kind: "naturopathic",
        file: "naturopathic.jpg",
        de: d.title.de,
        en: d.title.en,
        prompt: previous[`${d.slug}:naturopathic`] ?? naturopathicPrompt(d.title.de, d.slug, area.slug),
      })
      naturo++
    }
  }
}

writeFileSync(
  OUT,
  JSON.stringify(
    {
      _note:
        "Work list for scripts/images/gemini-images.mjs. `kind` is 'definition' or 'naturopathic'. " +
        "The runner saves to public/diseases/<slug>/<file> and skips files that already exist (resumable). " +
        "Edit any `prompt` to improve a scene.",
      count: images.length,
      definitions: defs,
      naturopathic: naturo,
      images,
    },
    null,
    2,
  ) + "\n",
)
console.log(`Wrote ${OUT}: ${images.length} entries (${defs} definition + ${naturo} naturopathic).`)
