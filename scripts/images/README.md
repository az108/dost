# Local Gemini image workflow

Generates one bright, text-free hero image per disease for the **8 generated
areas** (heart, musculoskeletal, skin, infections, urinary, blood/immune,
eyes/sensory, injuries) by driving **your** logged-in Gemini with Playwright,
and downloads each at full resolution to `public/diseases/<slug>/definition.jpg`.

Runs locally on your machine so downloads actually work — unlike the in-session
remote browser, which can only screenshot. The 39 migrated pages already have
their real images and are left untouched.

## One-time setup

```bash
npm i -D playwright          # uses your installed Google Chrome (channel: "chrome")
```

## Generate the work list

```bash
npx vite-node scripts/images/build-manifest.ts
```

Creates `scripts/images/image-manifest.json` — 248 entries, each with a default
German prompt. **Edit any `prompt`** to get a better scene for that condition;
re-running the builder keeps your edits (matched by slug).

## Run it

```bash
# all remaining (skips slugs that already have an image → resumable)
node scripts/images/gemini-images.mjs

# one area at a time (recommended, kinder to rate limits)
node scripts/images/gemini-images.mjs --area musculoskeletal-system-orthopedics-pain-medicine

# knobs
node scripts/images/gemini-images.mjs --limit 25 --delay 12   # 25 images, 12s between
node scripts/images/gemini-images.mjs --dry                    # list only, generate nothing
node scripts/images/gemini-images.mjs --headless               # no visible window (after login is saved)
```

On the **first** run a Chrome window opens; if you are not already signed into
Gemini, log in — the script waits up to 3 minutes for the composer, then reuses
the login (saved in `scripts/images/.gemini-profile/`, git-ignored) next time.

It uses a **fresh chat per image** (avoids the drift a long thread causes),
waits for the image, and saves it. If it hits 3 failures in a row (usually a
rate limit) it stops cleanly — wait a while and re-run; it resumes.

## Wire the new images in

After a batch, register the downloaded images so the site renders them:

```bash
npx vite-node scripts/images/sync-generated-images.ts
```

This rewrites `src/content/diseases/generated-images.ts`. `DiseaseDetail` then
shows the image (with the **KI-generiert** caption) on any generated page that
has no explicit image block of its own. Then `npm run build` and commit
`public/diseases/**` + `generated-images.ts`.

## Notes

- Prompts request **no text/letters/numbers** in the image (the migrated
  infographics' baked-in English text was the problem we're avoiding here).
- Images are ~1024px landscape JPEG. To re-do one, delete its
  `public/diseases/<slug>/definition.jpg` and re-run.
- All content and images are reviewed by Dr. Dost before going live.
