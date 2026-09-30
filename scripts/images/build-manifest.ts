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

/** Default prompt for a condition — bright, friendly, text-free, landscape. */
function defaultPrompt(de: string): string {
  return (
    `Erstelle ein Bild: eine helle, freundliche, moderne und fotorealistische Szene ` +
    `für die Website einer Arztpraxis zum Thema „${de}". Warmes, natürliches Sonnenlicht, ` +
    `beruhigende Farben, professionell und einladend. Ganz wichtig: KEIN Text, keine ` +
    `Buchstaben, keine Zahlen, keine Wörter und keine Logos im Bild. Querformat (16:9).`
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
      prompt: previous[d.slug] ?? defaultPrompt(d.title.de),
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
