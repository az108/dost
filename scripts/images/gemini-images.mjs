#!/usr/bin/env node
/**
 * Local Gemini image generator for the drdosthealth rebuild.
 *
 * Drives YOUR logged-in Gemini (via Playwright + your installed Chrome) to
 * generate one bright, text-free image per disease and download it at full
 * resolution to public/diseases/<slug>/definition.jpg. Fresh chat per image
 * (avoids the "drift" seen in a long thread); resumable (skips slugs that
 * already have a file); polite delays to stay under Gemini's rate limits.
 *
 * SETUP (once):
 *   npm i -D playwright
 *   # (uses your installed Google Chrome via channel:"chrome" — no extra download)
 *
 * RUN:
 *   node scripts/images/build-manifest.ts   # or: npx vite-node scripts/images/build-manifest.ts
 *   node scripts/images/gemini-images.mjs                 # all remaining
 *   node scripts/images/gemini-images.mjs --area heart-circulation-blood-vessels
 *   node scripts/images/gemini-images.mjs --limit 20 --delay 12
 *   node scripts/images/gemini-images.mjs --dry          # just list what it would do
 *
 * On first run a Chrome window opens; if you are not logged into Gemini, log in
 * — the script waits up to 3 minutes for the composer, then proceeds and reuses
 * that login (stored in scripts/images/.gemini-profile, git-ignored) next time.
 *
 * AFTER a run, wire the new images so the site shows them:
 *   npx vite-node scripts/images/sync-generated-images.ts
 */
import { chromium } from "playwright"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const HERE = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(HERE, "..", "..")
const PROFILE = path.join(HERE, ".gemini-profile")
const MANIFEST = path.join(HERE, "image-manifest.json")
const OUTDIR = path.join(ROOT, "public", "diseases")
const GEMINI_URL = "https://gemini.google.com/app"

// ── args ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2)
const getArg = (name, def) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : def
}
const AREA = getArg("area", null)
const LIMIT = parseInt(getArg("limit", "0"), 10) || Infinity
const DELAY = (parseFloat(getArg("delay", "10")) || 10) * 1000
const HEADLESS = args.includes("--headless")
const DRY = args.includes("--dry")

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const jitter = (ms) => ms + Math.floor(ms * 0.4 * Math.random())

// ── work list ─────────────────────────────────────────────────────────────
if (!fs.existsSync(MANIFEST)) {
  console.error(`Missing ${MANIFEST}. Run: npx vite-node scripts/images/build-manifest.ts`)
  process.exit(1)
}
const manifest = JSON.parse(fs.readFileSync(MANIFEST, "utf8"))
let todo = manifest.images.filter((e) => {
  if (AREA && e.area !== AREA) return false
  return !fs.existsSync(path.join(OUTDIR, e.slug, "definition.jpg"))
})
const totalRemaining = todo.length
todo = todo.slice(0, LIMIT)

console.log(
  `Manifest: ${manifest.images.length} total · ${totalRemaining} without an image` +
    (AREA ? ` in ${AREA}` : "") +
    ` · will do ${todo.length} now (delay ${DELAY / 1000}s).`,
)
if (DRY) {
  for (const e of todo) console.log(`  · ${e.slug}`)
  process.exit(0)
}
if (todo.length === 0) {
  console.log("Nothing to do.")
  process.exit(0)
}

// ── in-page helpers (run inside Gemini) ─────────────────────────────────────
const SEND_RE = "(nachricht senden|send message|senden|send)"

async function findComposer(page, timeout = 20000) {
  const sel = '.ql-editor[contenteditable="true"], div[contenteditable="true"], textarea'
  await page.waitForSelector(sel, { timeout })
  return page.locator(sel).last()
}

async function clickSend(page) {
  const ok = await page.evaluate((re) => {
    const rx = new RegExp(re, "i")
    const bs = Array.from(document.querySelectorAll("button")).filter(
      (b) => rx.test(b.getAttribute("aria-label") || "") && !b.disabled,
    )
    const b = bs[bs.length - 1]
    if (b) {
      b.click()
      return true
    }
    return false
  }, SEND_RE)
  if (!ok) await page.keyboard.press("Enter") // fallback
  return ok
}

async function waitForImage(page, timeoutMs = 120000) {
  const start = Date.now()
  let stable = 0
  while (Date.now() - start < timeoutMs) {
    const w = await page.evaluate(() => {
      const a = Array.from(document.querySelectorAll("img")).filter(
        (i) => i.complete && i.naturalWidth >= 1000,
      )
      return a.length ? a[a.length - 1].naturalWidth : 0
    })
    if (w >= 1000) {
      stable++
      if (stable >= 2) return true // seen large+complete twice → settled
    } else {
      stable = 0
    }
    await sleep(1500)
  }
  return false
}

/** Extract the newest large image as JPEG bytes. Canvas first (reliable,
 *  same-origin blob), then a direct fetch fallback. Returns a Buffer or null. */
async function extractImage(page) {
  const canvas = await page.evaluate(() => {
    const a = Array.from(document.querySelectorAll("img")).filter(
      (i) => i.complete && i.naturalWidth >= 1000,
    )
    const img = a[a.length - 1]
    if (!img) return null
    try {
      const c = document.createElement("canvas")
      c.width = img.naturalWidth
      c.height = img.naturalHeight
      c.getContext("2d").drawImage(img, 0, 0)
      return c.toDataURL("image/jpeg", 0.92)
    } catch {
      return null
    }
  })
  if (canvas && canvas.startsWith("data:")) {
    return Buffer.from(canvas.split(",")[1], "base64")
  }
  // fallback: fetch the blob/URL directly in-page
  const fetched = await page.evaluate(async () => {
    const a = Array.from(document.querySelectorAll("img")).filter(
      (i) => i.complete && i.naturalWidth >= 1000,
    )
    const img = a[a.length - 1]
    if (!img) return null
    try {
      const r = await fetch(img.currentSrc || img.src)
      const b = await r.blob()
      const buf = new Uint8Array(await b.arrayBuffer())
      let bin = ""
      for (let i = 0; i < buf.length; i++) bin += String.fromCharCode(buf[i])
      return btoa(bin)
    } catch {
      return null
    }
  })
  return fetched ? Buffer.from(fetched, "base64") : null
}

// ── main ────────────────────────────────────────────────────────────────────
const context = await chromium.launchPersistentContext(PROFILE, {
  headless: HEADLESS,
  channel: "chrome",
  viewport: { width: 1400, height: 900 },
  args: ["--disable-blink-features=AutomationControlled"],
})
const page = context.pages()[0] || (await context.newPage())

await page.goto(GEMINI_URL, { waitUntil: "domcontentloaded" })
try {
  await findComposer(page, 20000)
} catch {
  console.log("Not logged in yet — please sign into Gemini in the open window. Waiting up to 3 min…")
  await findComposer(page, 180000)
}
console.log("Gemini ready.\n")

let done = 0
let fails = 0
let consecutiveFails = 0

for (const [idx, e] of todo.entries()) {
  const out = path.join(OUTDIR, e.slug, "definition.jpg")
  process.stdout.write(`[${idx + 1}/${todo.length}] ${e.slug} … `)
  try {
    await page.goto(GEMINI_URL, { waitUntil: "domcontentloaded" }) // fresh chat
    const composer = await findComposer(page)
    await composer.click()
    await page.keyboard.insertText(e.prompt)
    await sleep(300)
    await clickSend(page)

    const ready = await waitForImage(page, 120000)
    if (!ready) throw new Error("timed out waiting for image")
    await sleep(1500)

    const buf = await extractImage(page)
    if (!buf || buf.length < 5000) throw new Error("extraction failed")

    fs.mkdirSync(path.dirname(out), { recursive: true })
    fs.writeFileSync(out, buf)
    console.log(`ok (${Math.round(buf.length / 1024)} KB)`)
    done++
    consecutiveFails = 0
  } catch (err) {
    console.log(`FAILED: ${err.message}`)
    fails++
    consecutiveFails++
    if (consecutiveFails >= 3) {
      console.error(
        "\n3 failures in a row — likely rate-limited or the page changed. Stopping.\n" +
          "Wait a while and re-run (it resumes automatically).",
      )
      break
    }
  }
  if (idx < todo.length - 1) await sleep(jitter(DELAY))
}

console.log(`\nDone: ${done} saved, ${fails} failed.`)
console.log("Next: npx vite-node scripts/images/sync-generated-images.ts  (wires the new images in)")
await context.close()
process.exit(0)
