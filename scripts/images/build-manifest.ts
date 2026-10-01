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

/** Per-area subject nudges, so images vary and aren't all doctor/patient scenes. */
const AREA_HINTS: Record<string, string> = {
  "heart-circulation-blood-vessels":
    "Herz-Kreislauf-Gesundheit, Bewegung an der frischen Luft, herzgesunde Ernährung, eine ruhige Alltagsszene oder passende Gegenstände",
  "musculoskeletal-system-orthopedics-pain-medicine":
    "Bewegung, Dehnübungen, Physiotherapie, aktive Menschen in der Natur oder eine entspannte Alltagsszene",
  "skin-hair-nails-subcutaneous-tissue":
    "gesunde Haut und Hautpflege, Naturkosmetik, sanfte Nahaufnahmen oder beruhigende Naturmotive",
  "infections-parasitic-diseases":
    "Vorbeugung und Hygiene, Erholung mit Tee und Ruhe, frische Luft oder eine gesunde Alltagsszene",
  "urinary-tract-kidneys":
    "ausreichend Wasser trinken, Bewegung, gesunde Ernährung oder eine ruhige, frische Szene",
  "blood-immune-system-oncological-follow-up-care":
    "Vitalität und Wohlbefinden, gesunde, nährstoffreiche Ernährung, frische Natur oder eine ruhige Erholungsszene",
  "eyes-sensory-organs":
    "Augen- und Ohrengesundheit, klares Sehen, eine Brille, Natur oder eine ruhige Alltagsszene",
  "injuries-poisoning-consequences-of-accidents":
    "Erste Hilfe und Erholung, Physiotherapie, Sicherheit im Alltag oder aktive, gesunde Erholung",
}

/** Default prompt — varied, topic-appropriate, bright, text-free, landscape. */
function defaultPrompt(de: string, area: string): string {
  const hints = AREA_HINTS[area] ?? "ein passendes, ansprechendes Motiv"
  return (
    `Erstelle ein ansprechendes Bild für die Website einer Arztpraxis zum Thema „${de}". ` +
    `Wähle ein passendes Motiv – das muss NICHT eine Ärztin oder ein Patient sein; ` +
    `je nach Thema eignen sich z. B. ${hints}. Hell, warm, natürliches Sonnenlicht, ` +
    `fotorealistisch, beruhigend und professionell; keine ängstlichen, klinisch-kalten ` +
    `oder blutigen Darstellungen. Ganz wichtig: KEIN Text, keine Buchstaben, keine Zahlen, ` +
    `keine Wörter und keine Logos im Bild. Querformat (16:9).`
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
      prompt: previous[d.slug] ?? defaultPrompt(d.title.de, area.slug),
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
