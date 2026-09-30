import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { AppRoutes } from "./App"
import { fachbereiche } from "./content/fachbereiche"
import { treatmentAreas } from "./content/treatments"

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

describe("routes", () => {
  it("renders home with brand", () => {
    renderAt("/")
    expect(screen.getAllByText(/Dr\. Dost/i).length).toBeGreaterThan(0)
  })

  it("renders the treatments landing with the treatment areas", () => {
    renderAt("/behandlungen")
    // German is the default language; each area title should appear.
    for (const area of treatmentAreas) {
      expect(screen.getAllByText(new RegExp(area.title.de, "i")).length).toBeGreaterThan(0)
    }
  })

  it("renders a treatment-area page with its conditions", () => {
    const area = treatmentAreas.find((a) => a.diseases.length > 0)!
    renderAt(`/behandlungen/${area.slug}`)
    expect(
      screen.getAllByRole("heading", { name: new RegExp(area.title.de, "i") }).length,
    ).toBeGreaterThan(0)
    // and the first disease is listed
    expect(screen.getAllByText(new RegExp(area.diseases[0].title.de, "i")).length).toBeGreaterThan(0)
  })

  it("renders a disease page with its ICD-10 code", () => {
    const area = treatmentAreas.find((a) => a.diseases.length > 0)!
    const disease = area.diseases[0]
    renderAt(`/behandlungen/${area.slug}/${disease.slug}`)
    expect(
      screen.getAllByRole("heading", { name: new RegExp(disease.title.de, "i") }).length,
    ).toBeGreaterThan(0)
    expect(screen.getAllByText(new RegExp(disease.icd10, "i")).length).toBeGreaterThan(0)
  })

  it("renders a detail page for every Fachbereich", () => {
    for (const e of fachbereiche) {
      const { unmount } = renderAt(`/fachbereiche/${e.slug}`)
      expect(
        screen.getAllByRole("heading", { name: new RegExp(e.title, "i") }).length,
      ).toBeGreaterThan(0)
      unmount()
    }
  })

  it("renders Impressum and Datenschutz", () => {
    const { unmount } = renderAt("/impressum")
    expect(screen.getByRole("heading", { name: /Impressum/i })).toBeInTheDocument()
    unmount()
    renderAt("/datenschutz")
    expect(screen.getByRole("heading", { name: /Datenschutz/i })).toBeInTheDocument()
  })

  it("renders a 404 page for unknown paths and unknown areas/diseases", () => {
    for (const path of ["/gibt-es-nicht", "/behandlungen/unbekanntes-gebiet", "/behandlungen/atemwege-hno/unbekannt"]) {
      const { unmount } = renderAt(path)
      expect(screen.getByRole("heading", { name: /Seite nicht gefunden/i })).toBeInTheDocument()
      unmount()
    }
  })
})
