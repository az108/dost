/**
 * On-device machine translation for the "long tail" languages, using Chrome's
 * built-in Translator API (stable since Chrome 138). It runs entirely on the
 * visitor's device — no server, no API key, no cost — and is absent on Safari,
 * Firefox, most mobile browsers and for unsupported language pairs, so every
 * entry point here degrades to "unavailable" rather than throwing. Callers fall
 * back to the browser's own "translate this page" feature (a toast nudge) when
 * that happens.
 *
 * The source language is always German (the site's canonical content). Results
 * are keyed by the German source string, matching the overlay format in
 * `i18n.tsx`, and cached in IndexedDB so a returning visitor pays nothing again.
 */

import { CHAT_ENDPOINT } from "@/features/chat/config"

export type Availability = "available" | "unavailable"

const SOURCE = "de"
/** Server fallback (same Cloudflare Worker as the chat), for languages/browsers
 *  the on-device engine can't handle. */
const TRANSLATE_URL = `${CHAT_ENDPOINT}/translate`
const ONLINE_CHUNK = 100

/* ── Minimal typings for the experimental global (not in lib.dom) ──────────── */
interface TranslatorInstance {
  translate(input: string): Promise<string>
  destroy?(): void
}
interface TranslatorStatic {
  availability(opts: { sourceLanguage: string; targetLanguage: string }): Promise<string>
  create(opts: {
    sourceLanguage: string
    targetLanguage: string
    monitor?: (m: unknown) => void
  }): Promise<TranslatorInstance>
}

function translatorApi(): TranslatorStatic | null {
  if (typeof self === "undefined") return null
  const api = (self as unknown as { Translator?: TranslatorStatic }).Translator
  return api && typeof api.availability === "function" ? api : null
}

/** Cache of resolved availabilities so the switcher can show it synchronously. */
const availCache = new Map<string, Availability>()

/** Last known availability for `target`, or undefined if not yet checked. */
export function peekAvailability(target: string): Availability | undefined {
  return availCache.get(target)
}

/** Whether the browser can auto-translate German → `target` on this device. */
export async function availability(target: string): Promise<Availability> {
  const cached = availCache.get(target)
  if (cached) return cached
  const api = translatorApi()
  if (!api) {
    availCache.set(target, "unavailable")
    return "unavailable"
  }
  try {
    const status = await api.availability({ sourceLanguage: SOURCE, targetLanguage: target })
    // "downloadable"/"downloading" mean the model can be fetched on first use;
    // only "unavailable" is a hard no.
    const result: Availability = status && status !== "unavailable" ? "available" : "unavailable"
    availCache.set(target, result)
    return result
  } catch {
    availCache.set(target, "unavailable")
    return "unavailable"
  }
}

/* ── Translator instances, created lazily and reused per target ────────────── */
const instances = new Map<string, Promise<TranslatorInstance | null>>()

/**
 * Start creating (and, if needed, downloading) the translator for `target` now.
 * Called right after the visitor picks the language so the model download begins
 * while their click still counts as a user activation — Chrome can require that
 * for the first download of a language pack.
 */
export function warmUp(target: string): void {
  void getInstance(target)
}

function getInstance(target: string): Promise<TranslatorInstance | null> {
  let inst = instances.get(target)
  if (!inst) {
    const api = translatorApi()
    inst = api
      ? api.create({ sourceLanguage: SOURCE, targetLanguage: target }).catch(() => null)
      : Promise.resolve(null)
    instances.set(target, inst)
  }
  return inst
}

/** Run up to `limit` promise-returning tasks at a time. */
async function pool<T>(items: T[], limit: number, work: (item: T) => Promise<void>): Promise<void> {
  let i = 0
  const run = async (): Promise<void> => {
    const idx = i++
    if (idx >= items.length) return
    await work(items[idx])
    return run()
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run))
}

/**
 * Translate the given German source strings into `target`, returning a map from
 * source → translation (failed strings are omitted; the caller keeps German).
 * Prefers the free on-device engine where available, and otherwise falls back to
 * the Cloudflare Worker so every language translates on every browser. Never
 * throws.
 */
export async function translateStrings(
  target: string,
  sources: string[],
): Promise<Record<string, string>> {
  if (sources.length === 0) return {}
  const avail = peekAvailability(target) ?? (await availability(target))
  return avail === "available"
    ? translateOnDevice(target, sources)
    : translateOnline(target, sources)
}

/** On-device translation via the browser's built-in Translator API. */
async function translateOnDevice(
  target: string,
  sources: string[],
): Promise<Record<string, string>> {
  const out: Record<string, string> = {}
  const inst = await getInstance(target)
  if (!inst) return out
  await pool(sources, 8, async (src) => {
    try {
      const t = await inst.translate(src)
      if (t && t.trim()) out[src] = t
    } catch {
      /* leave this string untranslated — it falls back to German */
    }
  })
  return out
}

/** Server translation via the Worker's /translate route (Gemini + KV cache). */
async function translateOnline(
  target: string,
  sources: string[],
): Promise<Record<string, string>> {
  if (typeof fetch !== "function") return {}
  const out: Record<string, string> = {}
  const chunks: string[][] = []
  for (let i = 0; i < sources.length; i += ONLINE_CHUNK) {
    chunks.push(sources.slice(i, i + ONLINE_CHUNK))
  }
  await pool(chunks, 3, async (batch) => {
    try {
      const res = await fetch(TRANSLATE_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ target, q: batch }),
      })
      if (!res.ok) return
      const data = (await res.json()) as { translations?: Record<string, string> }
      if (data.translations) Object.assign(out, data.translations)
    } catch {
      /* network/worker error — those strings stay in German for now */
    }
  })
  return out
}

/* ── IndexedDB cache (one record per language: { lang, map }) ──────────────── */
const DB_NAME = "dost-i18n"
const STORE = "overlays"

function openDb(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    if (typeof indexedDB === "undefined") return resolve(null)
    try {
      const req = indexedDB.open(DB_NAME, 1)
      req.onupgradeneeded = () => {
        const db = req.result
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "lang" })
      }
      req.onsuccess = () => resolve(req.result)
      req.onerror = () => resolve(null)
    } catch {
      resolve(null)
    }
  })
}

export async function getCachedMap(target: string): Promise<Record<string, string>> {
  const db = await openDb()
  if (!db) return {}
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, "readonly")
      const req = tx.objectStore(STORE).get(target)
      req.onsuccess = () => {
        const rec = req.result as { lang: string; map: Record<string, string> } | undefined
        resolve(rec?.map ?? {})
      }
      req.onerror = () => resolve({})
    } catch {
      resolve({})
    }
  })
}

export async function putCachedMap(target: string, map: Record<string, string>): Promise<void> {
  const db = await openDb()
  if (!db) return
  return new Promise((resolve) => {
    try {
      const tx = db.transaction(STORE, "readwrite")
      tx.objectStore(STORE).put({ lang: target, map })
      tx.oncomplete = () => resolve()
      tx.onerror = () => resolve()
    } catch {
      resolve()
    }
  })
}

/* ── Lazy work queue: components register the German strings they render, the
 *    provider drains the queue and translates them in batches ──────────────── */
const queue = new Set<string>()
let notify: (() => void) | null = null
let scheduled = false

/** Record a German source string that needs translating (deduped). */
export function enqueue(source: string): void {
  if (!source || queue.has(source)) return
  queue.add(source)
  if (notify && !scheduled) {
    scheduled = true
    // Batch everything collected during this render pass into one flush.
    setTimeout(() => {
      scheduled = false
      notify?.()
    }, 60)
  }
}

/** Remove and return everything queued so far. */
export function drainQueue(): string[] {
  const all = [...queue]
  queue.clear()
  return all
}

/** The provider subscribes so it knows when new strings were queued. */
export function onEnqueue(cb: () => void): () => void {
  notify = cb
  return () => {
    if (notify === cb) notify = null
  }
}

/** Drop everything pending (e.g. when the target language changes). */
export function clearQueue(): void {
  queue.clear()
}
