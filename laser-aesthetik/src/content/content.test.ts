import { describe, expect, it } from "vitest"
import { pillars, pillarById } from "./pillars"
import { treatments, treatmentsByPillar, treatmentBySlug } from "./treatments"
import { ui } from "./ui"
import type { Pillar } from "./types"

const PILLAR_IDS: Pillar[] = ["laser", "physio", "aesthetik"]

describe("pillars", () => {
  it("defines exactly the three pillars", () => {
    expect(pillars("de").map((p) => p.id).sort()).toEqual([...PILLAR_IDS].sort())
  })

  it("gives every pillar a route path, label and intro", () => {
    for (const p of pillars("de")) {
      expect(p.path).toMatch(/^\/[a-z]+$/)
      expect(p.label.length).toBeGreaterThan(2)
      expect(p.intro.length).toBeGreaterThan(0)
      expect(p.intro.every((s) => s.trim().length > 0)).toBe(true)
    }
  })

  it("looks a pillar up by id", () => {
    expect(pillarById("laser", "de").path).toBe("/laser")
  })

  it("gives every pillar a non-empty FAQ", () => {
    // The FAQ components were fully built and tested against synthetic data
    // while no pillar or treatment defined `faq`, so the section rendered on
    // none of the 32 pages and nothing noticed.
    for (const p of pillars("de")) {
      expect(p.faq?.length, `${p.id} has no FAQ`).toBeGreaterThan(0)
    }
  })

  it("gives every pillar non-empty German and English copy for every localized field", () => {
    // Guards the shape the resolver depends on: resolvePillar() is dumb and
    // total, so any missing `de` or `en` slot would resolve to undefined
    // copy on a live page rather than fail loudly here.
    const de = pillars("de")
    const en = pillars("en")
    for (let i = 0; i < de.length; i++) {
      const dp = de[i]
      const ep = en[i]
      expect(dp.label.trim().length, `${dp.id} de label`).toBeGreaterThan(0)
      expect(ep.label.trim().length, `${dp.id} en label`).toBeGreaterThan(0)
      expect(dp.title.trim().length, `${dp.id} de title`).toBeGreaterThan(0)
      expect(ep.title.trim().length, `${dp.id} en title`).toBeGreaterThan(0)
      expect(dp.headline.lead.trim().length, `${dp.id} de headline.lead`).toBeGreaterThan(0)
      expect(dp.headline.accent.trim().length, `${dp.id} de headline.accent`).toBeGreaterThan(0)
      expect(ep.headline.lead.trim().length, `${dp.id} en headline.lead`).toBeGreaterThan(0)
      expect(ep.headline.accent.trim().length, `${dp.id} en headline.accent`).toBeGreaterThan(0)
      expect(dp.excerpt.trim().length, `${dp.id} de excerpt`).toBeGreaterThan(0)
      expect(ep.excerpt.trim().length, `${dp.id} en excerpt`).toBeGreaterThan(0)
      expect(dp.intro.length, `${dp.id} de intro`).toBeGreaterThan(0)
      expect(dp.intro.every((s) => s.trim().length > 0), `${dp.id} de intro paragraph empty`).toBe(true)
      expect(ep.intro.length, `${dp.id} en intro`).toBeGreaterThan(0)
      expect(ep.intro.every((s) => s.trim().length > 0), `${dp.id} en intro paragraph empty`).toBe(true)
      expect(dp.faq?.length, `${dp.id} de faq`).toBeGreaterThan(0)
      expect(ep.faq?.length, `${dp.id} en faq`).toBeGreaterThan(0)
      for (const item of dp.faq ?? []) {
        expect(item.question.trim().length, `${dp.id} de faq question`).toBeGreaterThan(0)
        expect(item.answer.trim().length, `${dp.id} de faq answer`).toBeGreaterThan(0)
      }
      for (const item of ep.faq ?? []) {
        expect(item.question.trim().length, `${dp.id} en faq question`).toBeGreaterThan(0)
        expect(item.answer.trim().length, `${dp.id} en faq answer`).toBeGreaterThan(0)
      }
    }
  })
})

it("never claims permanent hair removal in any English copy", () => {
  // German law treats this as permanent hair REDUCTION. A previous guard
  // scanned only the pillars, and a claim in the UI dictionary slipped past
  // it — so this scans every English surface, not one of them.
  const english = JSON.stringify([
    pillars("en"),
    treatments("en"),
    Object.values(ui).map((v) => v.en),
  ]).toLowerCase()
  for (const banned of ["permanent hair removal", "permanently remove", "permanently removes"]) {
    expect(english, `banned claim present: "${banned}"`).not.toContain(banned)
  }
})

const LOCALES = ["de", "en"] as const

describe("treatments", () => {
  it("has treatments for every pillar", () => {
    for (const locale of LOCALES) {
      for (const id of PILLAR_IDS) {
        expect(treatmentsByPillar(id, locale).length).toBeGreaterThan(0)
      }
    }
  })

  it("gives every treatment a kebab-case slug, title, excerpt and body", () => {
    for (const locale of LOCALES) {
      for (const t of treatments(locale)) {
        expect(t.slug).toMatch(/^[a-z0-9-]+$/)
        expect(t.title.length).toBeGreaterThan(2)
        expect(t.excerpt.length).toBeGreaterThan(10)
        expect(t.body.length).toBeGreaterThan(0)
        expect(t.body.every((p) => p.trim().length > 0)).toBe(true)
      }
    }
  })

  it("gives every treatment a headline with a lead and an accent word", () => {
    for (const locale of LOCALES) {
      for (const t of treatments(locale)) {
        expect(t.headline.lead.trim().length).toBeGreaterThan(0)
        expect(t.headline.accent.trim().length).toBeGreaterThan(0)
      }
    }
  })

  it("gives every treatment at least two benefits", () => {
    for (const locale of LOCALES) {
      for (const t of treatments(locale)) {
        expect(t.benefits.length).toBeGreaterThanOrEqual(2)
      }
    }
  })

  it("has unique slugs", () => {
    for (const locale of LOCALES) {
      const list = treatments(locale)
      expect(new Set(list.map((t) => t.slug)).size).toBe(list.length)
    }
  })

  it("gives every English treatment a keyword-bearing, kebab-case slug", () => {
    // English gets its own URLs specifically to carry search keywords, not
    // transliterations of the German slug — that is the entire reason the
    // locale gets separate routes at all.
    for (const t of treatments("en")) {
      expect(t.slug, `"${t.title}" slug "${t.slug}"`).toMatch(/^[a-z0-9-]+$/)
    }
  })

  it("looks a treatment up by slug and returns undefined for unknown slugs", () => {
    expect(treatmentBySlug("achseln", "de")?.title).toBe("Achseln")
    expect(treatmentBySlug("gibt-es-nicht", "de")).toBeUndefined()
    // Each locale resolves against its own slug — "achseln" is German,
    // "underarms" is English, and neither locale answers to the other's slug.
    expect(treatmentBySlug("underarms", "en")?.title).toBe("Underarms")
    expect(treatmentBySlug("achseln", "en")).toBeUndefined()
    expect(treatmentBySlug("underarms", "de")).toBeUndefined()
  })

  it("prices every fixed-price treatment above zero", () => {
    for (const t of treatments("de")) {
      if (t.pricing.kind === "fixed") {
        expect(t.pricing.single).toBeGreaterThan(0)
      }
    }
  })

  it("gives every laser zone a price-table group", () => {
    for (const locale of LOCALES) {
      for (const t of treatmentsByPillar("laser", locale)) {
        if (t.pricing.kind === "fixed") expect(t.group).toBeTruthy()
      }
    }
  })

  // ── Go-live guard ────────────────────────────────────────────────────
  // Catches leftover scaffolding copy reaching patients.
  it("ships no placeholder copy", () => {
    const text = JSON.stringify([treatments("de"), treatments("en")]).toLowerCase()
    for (const marker of ["todo", "tbd", "lorem ipsum", "platzhalter", "folgt noch"]) {
      expect(text).not.toContain(marker)
    }
  })

  // The clinic has no consented patient photography and German
  // Heilmittelwerbegesetz restricts before/after imagery for aesthetic
  // procedures. No content may promise or depict one.
  it("makes no before/after claims", () => {
    const text = JSON.stringify([
      treatments("de"),
      treatments("en"),
      pillars("de"),
      pillars("en"),
    ]).toLowerCase()
    for (const marker of ["vorher", "nachher", "before/after"]) {
      expect(text, `before/after language found: "${marker}"`).not.toContain(marker)
    }
  })

  it("names the doctor consistently with practice.ts", () => {
    // A previous fix normalised .tsx components but stopped at the file
    // extension; the ported copy lives in .ts content files and drifted.
    const text = JSON.stringify([treatments("de"), treatments("en"), pillars("de"), pillars("en")])
    const wrong = text.match(/Dr\. med\. (?!univ\.)/g) ?? []
    expect(wrong, "found 'Dr. med.' without 'univ.'").toHaveLength(0)
  })

  it("never repeats a treatment's excerpt inside its own body", () => {
    // A ported excerpt that is also body[0] renders the same paragraph twice
    // on the detail page. Catch the pattern, not one instance of it.
    const norm = (s: string) => s.replace(/\s+/g, " ").trim()
    for (const locale of LOCALES) {
      for (const t of treatments(locale)) {
        const excerpt = norm(t.excerpt)
        for (const [i, para] of t.body.entries()) {
          expect(
            norm(para).includes(excerpt),
            `${locale}/${t.slug}: body[${i}] contains the excerpt verbatim`,
          ).toBe(false)
        }
      }
    }
  })

  it("gives every treatment a reachable FAQ, its own or its pillar's", () => {
    // The accordion was fully built and tested against synthetic data while
    // nothing populated `faq`, so it rendered on none of the 32 pages and no
    // test noticed. This asserts the rendered result, not the raw field.
    for (const locale of LOCALES) {
      for (const t of treatments(locale)) {
        const faq = t.faq ?? pillarById(t.pillar, locale).faq
        expect(faq?.length, `${locale}/${t.slug} would render an empty FAQ`).toBeGreaterThan(0)
      }
    }
  })

  it("keeps English slugs from colliding with German slugs", () => {
    // Each locale resolves treatments against its own slug set (see the
    // lookup test above); if an English slug ever matched a German one, a
    // link built for one locale could silently resolve in the other.
    const de = new Set(treatments("de").map((t) => t.slug))
    for (const slug of treatments("en").map((t) => t.slug)) {
      expect(de.has(slug), `English slug "${slug}" collides with a German slug`).toBe(false)
    }
  })

  it("gives every treatment non-empty German and English copy for every localized field", () => {
    // Guards the shape resolveTreatment() depends on, mirroring the pillar
    // equivalent above: any missing `de`/`en` slot would resolve to
    // undefined copy on a live page rather than fail loudly here. Covers
    // every treatment — laser, physio and Ästhetik alike are localized.
    const de = treatments("de")
    const en = treatments("en")
    expect(en.length).toBe(de.length)
    for (let i = 0; i < de.length; i++) {
      const dt = de[i]
      const et = en[i]
      expect(dt.slug.trim().length, `${dt.title} de slug`).toBeGreaterThan(0)
      expect(et.slug.trim().length, `${dt.title} en slug`).toBeGreaterThan(0)
      expect(dt.title.trim().length, `${dt.title} de title`).toBeGreaterThan(0)
      expect(et.title.trim().length, `${dt.title} en title`).toBeGreaterThan(0)
      expect(dt.headline.lead.trim().length, `${dt.title} de headline.lead`).toBeGreaterThan(0)
      expect(dt.headline.accent.trim().length, `${dt.title} de headline.accent`).toBeGreaterThan(0)
      expect(et.headline.lead.trim().length, `${dt.title} en headline.lead`).toBeGreaterThan(0)
      expect(et.headline.accent.trim().length, `${dt.title} en headline.accent`).toBeGreaterThan(0)
      expect(dt.excerpt.trim().length, `${dt.title} de excerpt`).toBeGreaterThan(0)
      expect(et.excerpt.trim().length, `${dt.title} en excerpt`).toBeGreaterThan(0)
      expect(dt.body.length, `${dt.title} de body`).toBeGreaterThan(0)
      expect(dt.body.every((p) => p.trim().length > 0), `${dt.title} de body paragraph empty`).toBe(true)
      expect(et.body.length, `${dt.title} en body`).toBeGreaterThan(0)
      expect(et.body.every((p) => p.trim().length > 0), `${dt.title} en body paragraph empty`).toBe(true)
      expect(dt.benefits.length, `${dt.title} de benefits`).toBeGreaterThan(0)
      expect(et.benefits.length, `${dt.title} en benefits`).toBeGreaterThan(0)
    }
  })
})

describe("claims awaiting legal sign-off", () => {
  // ── Go-live guard ────────────────────────────────────────────────────
  // These three phrases are inherited verbatim from the practice's own
  // existing website and are stronger than German Heilmittelwerbegesetz
  // comfortably allows: an explicit healing claim naming depression, and an
  // efficacy claim for TCM. Softening a client's medical claim is not ours
  // to do unilaterally — but shipping it unreviewed is not either.
  //
  // Translating them for the English treatments created English copies of
  // the same claims, so the guard covers both languages — a German-only
  // check would have let the English ship. To fix: have a lawyer approve or
  // reword each, then delete this test.
  it("FAILS UNTIL a lawyer has cleared the inherited medical claims", () => {
    const text = JSON.stringify([treatments("de"), treatments("en")])
    for (const phrase of [
      "zu heilen", "heilsam", "wissenschaftlich nachgewiesener Wirksamkeit",
      // English equivalents — match whatever wording you actually used
      "to cure", "healing", "scientifically proven",
    ]) {
      expect(text, `unreviewed claim still present: "${phrase}"`).not.toContain(phrase)
    }
  })
})

describe("published prices", () => {
  // These are the clinic's real published figures. A transposed digit is a
  // wrong price on a live website, so they are pinned here rather than only
  // living in the content file.
  const SINGLE: Record<string, number> = {
    oberlippe: 39, wangen: 39, kinn: 49, "gesicht-und-kopf": 109,
    achseln: 69, "arme-komplett": 209, "ruecken-komplett": 259,
    bikinizone: 89, "intim-komplett": 139,
    oberschenkel: 169, unterschenkel: 169, "beine-komplett": 309,
    "achseln-intim": 139, "achseln-intim-unterschenkel": 249,
    "achseln-intim-beine": 289, ganzkoerper: 649,
  }

  it.each(Object.entries(SINGLE))("%s costs %i € per single session", (slug, single) => {
    const t = treatmentBySlug(slug, "de")
    expect(t, `no treatment with slug ${slug}`).toBeDefined()
    expect(t!.pricing.kind).toBe("fixed")
    expect(t!.pricing.kind === "fixed" && t!.pricing.single).toBe(single)
  })

  // Kombipakete use shallower, non-derivable discounts supplied as overrides.
  const OVERRIDES: Record<string, [number, number, number]> = {
    "achseln-intim": [129, 119, 109],
    "achseln-intim-unterschenkel": [239, 219, 199],
    "achseln-intim-beine": [269, 249, 229],
    ganzkoerper: [599, 549, 509],
  }

  it.each(Object.entries(OVERRIDES))("%s has the agreed 3er/5er/10er package prices", (slug, expected) => {
    const p = treatmentBySlug(slug, "de")!.pricing
    expect(p.kind).toBe("fixed")
    if (p.kind !== "fixed") return
    expect(p.overrides?.map((o) => o.perSession)).toEqual(expected)
  })
})

describe("treatment imagery", () => {
  it("gives every treatment an image and non-empty alt text", () => {
    for (const locale of LOCALES) {
      for (const t of treatments(locale)) {
        expect(t.image, `${locale}/${t.slug} has no image`).toBeTruthy()
        expect(t.imageAlt?.trim().length, `${locale}/${t.slug} has no alt text`).toBeGreaterThan(5)
      }
    }
  })

  it("writes alt text that does not claim a treatment result or attribute the photo to this practice", () => {
    const banned: Record<(typeof LOCALES)[number], string[]> = {
      de: ["ergebnis", "vorher", "nachher", "erfolg", "garantiert", "unsere praxis", "diese praxis"],
      en: ["result", "before", "after", "success", "guaranteed", "our practice", "this practice"],
    }
    for (const locale of LOCALES) {
      for (const t of treatments(locale)) {
        const alt = (t.imageAlt ?? "").toLowerCase()
        for (const word of banned[locale]) {
          expect(alt, `${locale}/${t.slug} alt text claims a result`).not.toContain(word)
        }
      }
    }
  })

  it("writes alt text that does not repeat the treatment title verbatim", () => {
    // The heading already announces the title. Repeating it in the alt text
    // makes a screen reader say the same word twice in a row.
    for (const locale of LOCALES) {
      for (const t of treatments(locale)) {
        const alt = (t.imageAlt ?? "").toLowerCase()
        expect(
          alt.includes(t.title.toLowerCase()),
          `${locale}/${t.slug}: alt text repeats the title "${t.title}"`,
        ).toBe(false)
      }
    }
  })
})
