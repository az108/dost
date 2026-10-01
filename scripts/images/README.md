# Local Gemini image workflow

Generates images for the **8 generated areas** (heart, musculoskeletal, skin,
infections, urinary, blood/immune, eyes/sensory, injuries) by driving **your**
logged-in Gemini with Playwright, and downloads them to
`public/diseases/<slug>/`. Two kinds per disease:

- **`definition.jpg`** — a bright, text-free object/still-life tied to the
  condition (e.g. compression stocking for varicose veins, lung X-ray style for
  chest conditions). One per disease (248).
- **`naturopathic.jpg`** — a still-life of the natural remedies for that
  condition (honey, ginger tea, herbs, cranberries…), shown in the naturopathic
  section. Generated for most diseases (~220); skipped for ones where it would
  be wrong (emergencies, STIs, fractures) via `naturopathic-hints.json`.

Runs locally so downloads work — unlike the in-session remote browser. The 39
migrated pages already have their real images and are left untouched.

## One-time setup

```bash
npm i -D playwright          # uses your installed Google Chrome (channel: "chrome")
```

## Build the work list

```bash
npx vite-node scripts/images/build-manifest.ts
```

Creates `scripts/images/image-manifest.json` (~468 entries). Prompts are built from:
- `object-hints.json` — the motif for each **definition** image, and
- `naturopathic-hints.json` — `exclude` list + motif overrides for **naturopathic** images (per-area defaults live in `build-manifest.ts`).

**Edit any of these** to improve a scene, then re-build; hand-edited prompts in the manifest are preserved (matched by slug + kind).

## Run it

```bash
# one area at a time (recommended) — does BOTH kinds for that area
node scripts/images/gemini-images.mjs --area infections-parasitic-diseases

# only one kind
node scripts/images/gemini-images.mjs --area skin-hair-nails-subcutaneous-tissue --kind definition
node scripts/images/gemini-images.mjs --area skin-hair-nails-subcutaneous-tissue --kind naturopathic

# knobs
node scripts/images/gemini-images.mjs --limit 20 --delay 12
node scripts/images/gemini-images.mjs --dry          # list only
node scripts/images/gemini-images.mjs --headless     # no window (after first login)
```

First run opens Chrome; if you're not signed into Gemini, log in (into the
**az108** account) — it waits up to 3 minutes, then reuses that login
(`scripts/images/.gemini-profile/`, git-ignored). Fresh chat per image (avoids
drift), resumable (skips files that already exist), and it stops cleanly after 3
failures in a row (usually a rate limit — wait and re-run).

## Wire the new images in

After a batch:

```bash
npx vite-node scripts/images/sync-generated-images.ts
npm run build
```

`sync` rewrites `src/content/diseases/generated-images.ts`. `DiseaseDetail` then
shows, with the **KI-generiert** caption: `definition.jpg` at the top of the
Definition and `naturopathic.jpg` in the naturopathic section — on any generated
page with no explicit image block of its own. Commit `public/diseases/**` +
`generated-images.ts`.

## Redo images

To regenerate an area with updated prompts, delete its files and re-run:

```bash
# delete one area's images (both kinds)
python3 -c "import json;[print(x['slug']) for x in json.load(open('scripts/images/image-manifest.json'))['images'] if x['area']=='heart-circulation-blood-vessels']" \
  | sort -u | while read s; do rm -f public/diseases/$s/definition.jpg public/diseases/$s/naturopathic.jpg; done
node scripts/images/gemini-images.mjs --area heart-circulation-blood-vessels
```

## Notes

- Prompts request **no text/letters/numbers** in the image.
- Images are ~1024px landscape JPEG. To redo one, delete its file and re-run.
- All content and images are reviewed by Dr. Dost before going live.
