import { describe, expect, it } from "vitest"
import { pillars, pillarById } from "./pillars"
import { treatments, treatmentsByPillar, treatmentBySlug } from "./treatments"
import type { Pillar } from "./types"

const PILLAR_IDS: Pillar[] = ["laser", "physio", "aesthetik"]

describe("pillars", () => {
  it("defines exactly the three pillars", () => {
    expect(pillars.map((p) => p.id).sort()).toEqual([...PILLAR_IDS].sort())
  })

  it("gives every pillar a route path, label and intro", () => {
    for (const p of pillars) {
      expect(p.path).toMatch(/^\/[a-z]+$/)
      expect(p.label.length).toBeGreaterThan(2)
      expect(p.intro.length).toBeGreaterThan(0)
      expect(p.intro.every((s) => s.trim().length > 0)).toBe(true)
    }
  })

  it("looks a pillar up by id", () => {
    expect(pillarById("laser").path).toBe("/laser")
  })

  it("gives every pillar a non-empty FAQ", () => {
    // The FAQ components were fully built and tested against synthetic data
    // while no pillar or treatment defined `faq`, so the section rendered on
    // none of the 32 pages and nothing noticed.
    for (const p of pillars) {
      expect(p.faq?.length, `${p.id} has no FAQ`).toBeGreaterThan(0)
    }
  })
})

describe("treatments", () => {
  it("has treatments for every pillar", () => {
    for (const id of PILLAR_IDS) {
      expect(treatmentsByPillar(id).length).toBeGreaterThan(0)
    }
  })

  it("gives every treatment a kebab-case slug, title, excerpt and body", () => {
    for (const t of treatments) {
      expect(t.slug).toMatch(/^[a-z0-9-]+$/)
      expect(t.title.length).toBeGreaterThan(2)
      expect(t.excerpt.length).toBeGreaterThan(10)
      expect(t.body.length).toBeGreaterThan(0)
      expect(t.body.every((p) => p.trim().length > 0)).toBe(true)
    }
  })

  it("gives every treatment a headline with a lead and an accent word", () => {
    for (const t of treatments) {
      expect(t.headline.lead.trim().length).toBeGreaterThan(0)
      expect(t.headline.accent.trim().length).toBeGreaterThan(0)
    }
  })

  it("gives every treatment at least two benefits", () => {
    for (const t of treatments) {
      expect(t.benefits.length).toBeGreaterThanOrEqual(2)
    }
  })

  it("has unique slugs", () => {
    expect(new Set(treatments.map((t) => t.slug)).size).toBe(treatments.length)
  })

  it("looks a treatment up by slug and returns undefined for unknown slugs", () => {
    expect(treatmentBySlug("achseln")?.title).toBe("Achseln")
    expect(treatmentBySlug("gibt-es-nicht")).toBeUndefined()
  })

  it("prices every fixed-price treatment above zero", () => {
    for (const t of treatments) {
      if (t.pricing.kind === "fixed") {
        expect(t.pricing.single).toBeGreaterThan(0)
      }
    }
  })

  it("gives every laser zone a price-table group", () => {
    for (const t of treatmentsByPillar("laser")) {
      if (t.pricing.kind === "fixed") expect(t.group).toBeTruthy()
    }
  })

  // ── Go-live guard ────────────────────────────────────────────────────
  // Catches leftover scaffolding copy reaching patients.
  it("ships no placeholder copy", () => {
    const text = JSON.stringify(treatments).toLowerCase()
    for (const marker of ["todo", "tbd", "lorem ipsum", "platzhalter", "folgt noch"]) {
      expect(text).not.toContain(marker)
    }
  })

  // The clinic has no consented patient photography and German
  // Heilmittelwerbegesetz restricts before/after imagery for aesthetic
  // procedures. No content may promise or depict one.
  it("makes no before/after claims", () => {
    const text = JSON.stringify([treatments, pillars]).toLowerCase()
    for (const marker of ["vorher", "nachher", "before/after"]) {
      expect(text, `before/after language found: "${marker}"`).not.toContain(marker)
    }
  })

  it("names the doctor consistently with practice.ts", () => {
    // A previous fix normalised .tsx components but stopped at the file
    // extension; the ported copy lives in .ts content files and drifted.
    const text = JSON.stringify([treatments, pillars])
    const wrong = text.match(/Dr\. med\. (?!univ\.)/g) ?? []
    expect(wrong, "found 'Dr. med.' without 'univ.'").toHaveLength(0)
  })

  it("never repeats a treatment's excerpt inside its own body", () => {
    // A ported excerpt that is also body[0] renders the same paragraph twice
    // on the detail page. Catch the pattern, not one instance of it.
    const norm = (s: string) => s.replace(/\s+/g, " ").trim()
    for (const t of treatments) {
      const excerpt = norm(t.excerpt)
      for (const [i, para] of t.body.entries()) {
        expect(
          norm(para).includes(excerpt),
          `${t.slug}: body[${i}] contains the excerpt verbatim`,
        ).toBe(false)
      }
    }
  })

  it("gives every treatment a reachable FAQ, its own or its pillar's", () => {
    // The accordion was fully built and tested against synthetic data while
    // nothing populated `faq`, so it rendered on none of the 32 pages and no
    // test noticed. This asserts the rendered result, not the raw field.
    for (const t of treatments) {
      const faq = t.faq ?? pillarById(t.pillar).faq
      expect(faq?.length, `${t.slug} would render an empty FAQ`).toBeGreaterThan(0)
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
  // To fix: have a lawyer approve or reword each, then delete this test.
  it("FAILS UNTIL a lawyer has cleared the inherited medical claims", () => {
    const text = JSON.stringify(treatments)
    for (const phrase of ["zu heilen", "heilsam", "wissenschaftlich nachgewiesener Wirksamkeit"]) {
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
    const t = treatmentBySlug(slug)
    expect(t, `no treatment with slug ${slug}`).toBeDefined()
    expect(t!.pricing.kind).toBe("fixed")
    expect(t!.pricing.kind === "fixed" && t!.pricing.single).toBe(single)
  })

  // Kombi-Pakete use shallower, non-derivable discounts supplied as overrides.
  const OVERRIDES: Record<string, [number, number, number]> = {
    "achseln-intim": [129, 119, 109],
    "achseln-intim-unterschenkel": [239, 219, 199],
    "achseln-intim-beine": [269, 249, 229],
    ganzkoerper: [599, 549, 509],
  }

  it.each(Object.entries(OVERRIDES))("%s has the agreed 3er/5er/10er package prices", (slug, expected) => {
    const p = treatmentBySlug(slug)!.pricing
    expect(p.kind).toBe("fixed")
    if (p.kind !== "fixed") return
    expect(p.overrides?.map((o) => o.perSession)).toEqual(expected)
  })
})

describe("treatment imagery", () => {
  it("gives every treatment an image and non-empty alt text", () => {
    for (const t of treatments) {
      expect(t.image, `${t.slug} has no image`).toBeTruthy()
      expect(t.imageAlt?.trim().length, `${t.slug} has no alt text`).toBeGreaterThan(5)
    }
  })

  it("writes alt text that does not claim a treatment result", () => {
    const banned = ["ergebnis", "vorher", "nachher", "erfolg", "garantiert"]
    for (const t of treatments) {
      const alt = (t.imageAlt ?? "").toLowerCase()
      for (const word of banned) {
        expect(alt, `${t.slug} alt text claims a result`).not.toContain(word)
      }
    }
  })

  it("writes alt text that does not repeat the treatment title verbatim", () => {
    // The heading already announces the title. Repeating it in the alt text
    // makes a screen reader say the same word twice in a row.
    for (const t of treatments) {
      const alt = (t.imageAlt ?? "").toLowerCase()
      expect(
        alt.includes(t.title.toLowerCase()),
        `${t.slug}: alt text repeats the title "${t.title}"`,
      ).toBe(false)
    }
  })
})
