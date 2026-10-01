/**
 * Builds scripts/images/image-manifest.json — the work list the local Gemini
 * runner consumes. One entry per disease in the 8 GENERATED areas (the areas
 * that are empty on drdosthealth and were filled with generated content).
 *
 * Each entry: { area, slug, de, en, prompt }. `prompt` is a sensible default
 * built from the German title; edit any prompt in the JSON before running the
 * runner to get a better scene for that condition. Re-running this script
 * regenerates the file but PRESERVES any prompt you edited (matched by slug).
 *
 * Run:  npx vite-node scripts/images/build-manifest.ts
 */
import { writeFileSync, readFileSync, existsSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { treatmentAreas } from "@/content/treatments"

const HERE = dirname(fileURLToPath(import.meta.url))
const OUT = join(HERE, "image-manifest.json")

// Per-disease object hints (the preferred motif for each condition).
const objectHints: Record<string, string> = (() => {
  try {
    return JSON.parse(readFileSync(join(HERE, "object-hints.json"), "utf8")).hints ?? {}
  } catch {
    return {}
  }
})()

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

/** Per-area OBJECT ideas — concrete things tied to the conditions, so Gemini
 *  shows a relevant object/still-life rather than defaulting to (elderly) people. */
const AREA_HINTS: Record<string, string> = {
  "heart-circulation-blood-vessels":
    "ein anatomisches Herzmodell, ein Stethoskop, ein Blutdruckmessgerät, herzgesunde Lebensmittel oder Laufschuhe",
  "musculoskeletal-system-orthopedics-pain-medicine":
    "ein Gelenk- oder Wirbelsäulenmodell, Hanteln, ein Gymnastikband, eine Faszienrolle oder Wanderschuhe in der Natur",
  "skin-hair-nails-subcutaneous-tissue":
    "Hautpflegeprodukte, Naturkosmetik-Zutaten wie Aloe vera oder Hafer, eine sanfte Nahaufnahme gesunder Haut oder beruhigende Naturmotive",
  "infections-parasitic-diseases":
    "Taschentücher, eine Tasse Tee mit Ingwer und Zitrone, Honig, frische Kräuter oder eine Impfspritze",
  "urinary-tract-kidneys":
    "ein Glas Wasser, ein anatomisches Nierenmodell, Cranberrys, Kräutertee oder eine Trinkflasche",
  "blood-immune-system-oncological-follow-up-care":
    "Blutprobenröhrchen ohne Beschriftung, eisenreiche Lebensmittel, frisches Obst und Gemüse, Vitaminpräparate oder grüne Pflanzen",
  "eyes-sensory-organs":
    "eine Brille, Augentropfen, ein anatomisches Augen- oder Ohrmodell, eine Lupe oder ein ruhiges Naturmotiv",
  "injuries-poisoning-consequences-of-accidents":
    "ein Verbandskasten, Pflaster, eine elastische Bandage, ein Kühlpack oder Erste-Hilfe-Material",
}

/** Default prompt — leads with a condition-specific object, usually NO people. */
function defaultPrompt(de: string, slug: string, area: string): string {
  const hint =
    objectHints[slug] ??
    AREA_HINTS[area] ??
    "ein typischer, gut erkennbarer Gegenstand zur Erkrankung"
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

type Entry = { area: string; slug: string; de: string; en: string; prompt: string }

// Preserve hand-edited prompts across regenerations (keyed by slug).
const previous: Record<string, string> = {}
if (existsSync(OUT)) {
  try {
    const old = JSON.parse(readFileSync(OUT, "utf8")) as { images?: Entry[] }
    for (const e of old.images ?? []) previous[e.slug] = e.prompt
  } catch {
    /* ignore malformed previous file */
  }
}

const images: Entry[] = []
for (const area of treatmentAreas) {
  if (!GENERATED_AREAS.has(area.slug)) continue
  for (const d of area.diseases) {
    images.push({
      area: area.slug,
      slug: d.slug,
      de: d.title.de,
      en: d.title.en,
      prompt: previous[d.slug] ?? defaultPrompt(d.title.de, d.slug, area.slug),
    })
  }
}

writeFileSync(
  OUT,
  JSON.stringify(
    {
      _note:
        "Work list for scripts/images/gemini-images.mjs. Edit any `prompt` to improve a scene. " +
        "The runner skips diseases whose public/diseases/<slug>/definition.jpg already exists, so it is resumable.",
      count: images.length,
      images,
    },
    null,
    2,
  ) + "\n",
)
console.log(`Wrote ${OUT} with ${images.length} entries.`)
