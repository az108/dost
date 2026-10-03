import type { ReactElement } from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { describe, expect, it } from "vitest"
import TerminErfolg from "./TerminErfolg"
import TerminAbbruch from "./TerminAbbruch"
import { ui } from "@/content/ui"
import { terminPath } from "@/lib/routes"

/**
 * Die beiden Seiten, auf denen Stripe einen Besucher wieder absetzt.
 *
 * Die Erfolgsseite trägt eine der drei Stellen, an denen widersprochen wird,
 * dass ein Termin bestätigt sei — und sie ist die einzige der drei, die der
 * Kunde liest, nachdem das Geld weg ist. Bis hierher hing dieser Satz an
 * nichts: keine Zeile hätte gemerkt, wenn jemand ihn zu "Termin gebucht"
 * gemildert hätte.
 */
function renderAt(path: string, element: ReactElement, routePath: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path={routePath} element={element} />
      </Routes>
    </MemoryRouter>,
  )
}

const renderErfolg = (search = "") =>
  renderAt(`${terminPath("erfolg")}${search}`, <TerminErfolg />, terminPath("erfolg"))

const renderAbbruch = () =>
  renderAt(terminPath("abbruch"), <TerminAbbruch />, terminPath("abbruch"))

describe("TerminErfolg", () => {
  it("bestätigt die Zahlung und ausdrücklich nicht den Termin", () => {
    renderErfolg()
    expect(screen.getByText(ui.bookingSuccessBody.de)).toBeInTheDocument()
    expect(screen.getByText(ui.bookingSuccessBody.de).textContent).toMatch(
      /Ein bestätigter Termin liegt erst vor/,
    )
  })

  it("behauptet nirgends, ein Termin sei gebucht oder bestätigt", () => {
    // Der Kunde hat ein Datum angeklickt und glaubt deshalb, es gelte. Eine
    // Überschrift wie "Termin gebucht" wäre der teuerste Satz der Seite.
    renderErfolg()
    const text = document.body.textContent ?? ""
    expect(text).not.toMatch(/Termin (ist )?gebucht/i)
    expect(text).not.toMatch(/Termin bestätigt/i)
    expect(text).not.toMatch(/Ihr Termin steht/i)
  })

  it("nennt die Seite in einer h1, nicht erst in einer h2", () => {
    renderErfolg()
    const h1 = screen.getByRole("heading", { level: 1 })
    expect(h1).toHaveTextContent(
      `${ui.bookingSuccessTitle.de} ${ui.bookingSuccessAccent.de}`,
    )
  })

  it("zeigt die Stripe-Referenz nur, wenn eine mitkommt", () => {
    const { unmount } = renderErfolg("?session_id=cs_test_123")
    expect(screen.getByText("cs_test_123")).toBeInTheDocument()
    expect(screen.getByText(new RegExp(ui.bookingReference.de))).toBeInTheDocument()
    unmount()

    renderErfolg()
    expect(screen.queryByText(new RegExp(ui.bookingReference.de))).not.toBeInTheDocument()
  })
})

describe("TerminAbbruch", () => {
  it("sagt im ersten Satz, dass nichts belastet wurde", () => {
    // Das ist das Einzige, was ein Besucher wissen will, der gerade bei
    // Stripe abgebrochen hat.
    renderAbbruch()
    expect(screen.getByText(ui.bookingCancelledBodyEmphasis.de)).toBeInTheDocument()
    expect(document.body.textContent).toMatch(/Es wurde nichts belastet und keine Buchung angelegt/)
  })

  it("nennt die Seite in einer h1", () => {
    renderAbbruch()
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      `${ui.bookingCancelledTitle.de} ${ui.bookingCancelledAccent.de}`,
    )
  })

  it("führt zurück in die Kaufstrecke, nicht in eine Sackgasse", () => {
    renderAbbruch()
    expect(screen.getByRole("link", { name: ui.bookingRestart.de })).toHaveAttribute(
      "href",
      terminPath("index"),
    )
  })
})
