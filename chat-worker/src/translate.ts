// chat-worker/src/translate.ts — POST /translate
// Machine-translates German source strings into any language via Gemini, so the
// site's long-tail languages auto-load even on browsers without an on-device
// translator (Safari, Firefox, most phones) and for languages Chrome's built-in
// Translator API doesn't cover. Results are cached per language in Workers KV,
// so each string is translated once and then served from cache to every later
// visitor — keeping cost essentially one-off per language, not per page view.

/** Minimal KV shape (avoids a hard dependency on @cloudflare/workers-types). */
export interface KV {
  get(key: string): Promise<string | null>
  put(key: string, value: string): Promise<void>
}

export interface TranslateEnv {
  GEMINI_API_KEY: string
  /** Optional: when bound, caches translations across visitors. */
  TRANSLATIONS?: KV
}

const MODEL = "gemini-3.5-flash-lite"
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`
const MAX_STRINGS = 300 // per request
const MAX_TOTAL_CHARS = 40000 // per request
const CHUNK_ITEMS = 60 // strings per Gemini call
const CHUNK_CHARS = 6000 // source chars per Gemini call

/** English names so the prompt reads naturally; unknown codes pass through. */
const LANG_NAMES: Record<string, string> = {
  en: "English", es: "Spanish", fr: "French", it: "Italian", ar: "Arabic",
  tr: "Turkish", ru: "Russian", uk: "Ukrainian", pl: "Polish", nl: "Dutch",
  pt: "Portuguese", ro: "Romanian", el: "Greek", cs: "Czech", sk: "Slovak",
  hu: "Hungarian", sv: "Swedish", da: "Danish", fi: "Finnish", no: "Norwegian",
  bg: "Bulgarian", hr: "Croatian", sr: "Serbian", sl: "Slovenian", lt: "Lithuanian",
  lv: "Latvian", et: "Estonian", sq: "Albanian", bs: "Bosnian", mk: "Macedonian",
  ca: "Catalan", is: "Icelandic", ga: "Irish", mt: "Maltese", zh: "Chinese (Simplified)",
  "zh-Hant": "Chinese (Traditional)", ja: "Japanese", ko: "Korean", hi: "Hindi",
  bn: "Bengali", pa: "Punjabi", ta: "Tamil", te: "Telugu", mr: "Marathi",
  gu: "Gujarati", kn: "Kannada", ml: "Malayalam", ur: "Urdu", fa: "Persian",
  he: "Hebrew", th: "Thai", vi: "Vietnamese", id: "Indonesian", ms: "Malay",
  tl: "Filipino", km: "Khmer", my: "Burmese", ne: "Nepali", si: "Sinhala",
  ka: "Georgian", hy: "Armenian", az: "Azerbaijani", kk: "Kazakh", uz: "Uzbek",
  mn: "Mongolian", sw: "Swahili", am: "Amharic", af: "Afrikaans", zu: "Zulu",
  ha: "Hausa", yo: "Yoruba",
}

function jr(body: unknown, status: number, cors: Record<string, string>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "content-type": "application/json" },
  })
}

export async function handleTranslate(
  raw: unknown,
  env: TranslateEnv,
  cors: Record<string, string>,
): Promise<Response> {
  const body = raw as { target?: unknown; q?: unknown }
  const target = typeof body.target === "string" ? body.target.trim() : ""
  if (!/^[a-zA-Z]{2,3}(-[a-zA-Z]{2,4})?$/.test(target)) return jr({ error: "bad_request" }, 400, cors)
  if (!Array.isArray(body.q)) return jr({ error: "bad_request" }, 400, cors)

  const q = (body.q.filter((s) => typeof s === "string" && s.trim()) as string[]).slice(0, MAX_STRINGS)
  if (q.length === 0) return jr({ translations: {} }, 200, cors)
  if (q.reduce((n, s) => n + s.length, 0) > MAX_TOTAL_CHARS) return jr({ error: "too_large" }, 413, cors)

  const name = LANG_NAMES[target] ?? target

  // 1. Serve what we can from the per-language KV cache.
  const kv = env.TRANSLATIONS
  let cache: Record<string, string> = {}
  if (kv) {
    try {
      const v = await kv.get(`overlay:${target}`)
      if (v) cache = JSON.parse(v) as Record<string, string>
    } catch {
      /* cache read failed — treat as empty */
    }
  }

  const out: Record<string, string> = {}
  const misses: string[] = []
  for (const s of q) {
    if (cache[s]) out[s] = cache[s]
    else misses.push(s)
  }

  // 2. Translate the misses via Gemini, then persist them for next time.
  if (misses.length) {
    const fresh = await translateViaGemini(misses, name, env.GEMINI_API_KEY)
    let changed = false
    for (const [s, t] of Object.entries(fresh)) {
      out[s] = t
      cache[s] = t
      changed = true
    }
    if (kv && changed) {
      try {
        await kv.put(`overlay:${target}`, JSON.stringify(cache))
      } catch {
        /* cache write failed — not fatal, we still return the translations */
      }
    }
  }

  return jr({ translations: out }, 200, cors)
}

function chunk(items: string[]): string[][] {
  const out: string[][] = []
  let cur: string[] = []
  let chars = 0
  for (const s of items) {
    if (cur.length && (chars + s.length > CHUNK_CHARS || cur.length >= CHUNK_ITEMS)) {
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

async function translateViaGemini(
  strings: string[],
  name: string,
  apiKey: string,
): Promise<Record<string, string>> {
  const result: Record<string, string> = {}
  for (const batch of chunk(strings)) {
    try {
      const translated = await translateBatch(batch, name, apiKey)
      if (translated) batch.forEach((src, i) => translated[i]?.trim() && (result[src] = translated[i]))
    } catch {
      /* skip this batch — those strings fall back to the source on the client */
    }
  }
  return result
}

async function translateBatch(
  strings: string[],
  name: string,
  apiKey: string,
): Promise<string[] | null> {
  const sys = `You are a professional medical translator for the website of a German doctor's private practice (Dr. med. univ. Dost Mohammad). Translate each element of the given JSON array of German texts into ${name}.
Rules:
- Return ONLY a JSON array of translations with EXACTLY the same number of elements, in the same order as the input.
- Natural, patient-friendly wording that preserves the medical meaning precisely.
- Keep unchanged: the doctor's name, proper nouns, place names, drug/substance names, Latin binomials, ICD-10 codes, phone numbers, e-mail addresses and URLs.
- Preserve any newline characters in the same positions. Output only the JSON array.`
  const res = await fetch(GEMINI_URL, {
    method: "POST",
    headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
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
  if (!res.ok) return null
  const data = (await res.json()) as { candidates?: { content?: { parts?: { text?: string }[] } }[] }
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text) return null
  const arr = JSON.parse(text) as unknown
  if (!Array.isArray(arr) || arr.length !== strings.length) return null
  return arr.map((x) => String(x))
}
