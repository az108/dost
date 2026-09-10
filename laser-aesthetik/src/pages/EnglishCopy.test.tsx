import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { AppRoutes } from "@/App"
import { center } from "@/content/center"
import { pillars } from "@/content/pillars"
import { treatments } from "@/content/treatments"
import { homePath, pagePath, pillarPath, treatmentPath } from "@/lib/routes"

/**
 * Words that unmistakably mean a page — or part of a page — is showing
 * German where an English visitor expects English. Deliberately generic
 * (page chrome, not per-treatment vocabulary): the point of this guard is to
 * catch the *next* page the extraction misses, not just NotFound.tsx,
 * Praxis.tsx and TreatmentDetail.tsx, which is all a narrower, one-instance
 * guard would have covered.
 */
const GERMAN_MARKERS = [
  "Seite nicht gefunden",
  "Startseite",
  "Behandlung",
  "Termin buchen",
  "Preis auf Anfrage",
  "Weitere Behandlungen",
  "Sitzung",
  "Zurück",
]

// ── Deliberate exceptions ────────────────────────────────────────────────
// 1. The brand lockup is a proper noun and stays the same on every page, in
//    both languages: center.brand ("Aurea Center", rendered in the footer)
//    and the header's tagline (not exported from anywhere — it is
//    hardcoded in Navbar.tsx by the same deliberate choice documented in
//    ui.ts's file header). Both strings are stripped before matching,
//    rather than excluding the header/footer landmarks wholesale, so a
//    real German leak elsewhere in the nav or footer is still caught.
const BRAND_TAGLINE = "Laser · Physio · Ästhetik"

function englishPageText(): string {
  return (document.body.textContent ?? "")
    .replaceAll(center.brand, "")
    .replaceAll(BRAND_TAGLINE, "")
}

// 2. The English footer honestly labels the German-only legal pages, e.g.
//    "Imprint (auf Deutsch)". None of the GERMAN_MARKERS above match that
//    phrase, so no stripping is needed for it to pass — this test instead
//    asserts the labelling is actually present, so the exception is proven
//    rather than merely unflagged.

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

const englishRoutes: string[] = [
  homePath("en"),
  ...pillars("en").map((p) => pillarPath(p.id, "en")),
  ...treatments("en").map((t) => treatmentPath(t.slug, "en")),
  pagePath("prices", "en"),
  pagePath("practice", "en"),
  pagePath("contact", "en"),
  "/en/gibt-es-nicht", // unknown English path — must 404 in English
  "/en/treatments/achseln", // German slug on the English treatment route
]

describe("every English route renders English, not German", () => {
  it.each(englishRoutes)("no German marker appears on %s", (path) => {
    renderAt(path)
    const text = englishPageText()
    for (const marker of GERMAN_MARKERS) {
      expect(text, `found German marker "${marker}" on ${path}`).not.toContain(marker)
    }
  })

  it("still honestly labels the German-only legal pages as German", () => {
    renderAt(pagePath("contact", "en"))
    expect(document.body.textContent).toContain("Imprint (auf Deutsch)")
    expect(document.body.textContent).toContain("Privacy policy (auf Deutsch)")
  })
})
