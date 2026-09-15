import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import Termin from "./Termin"

const renderFlow = () =>
  render(
    <MemoryRouter initialEntries={["/termin"]}>
      <Termin />
    </MemoryRouter>,
  )

/**
 * Den Button genau einer Zone greifen.
 *
 * "Achseln" ist Präfix dreier Kombipakete ("Achseln + Intim komplett" und
 * zwei weitere), und der zugängliche Name eines Zonen-Buttons ist der Titel
 * plus die Preiszeile darunter — /Achseln/ allein trifft also vier Buttons
 * und wirft, statt zu klicken. Der Anker auf den Titelanfang plus das "ab"
 * der Preiszeile trennt die Zone von den Paketen, die mit ihr beginnen.
 */
const zoneButton = (title: string) =>
  screen.getByRole("button", { name: new RegExp(`^${title} ab `) })

describe("Termin-Flow", () => {
  beforeEach(() => vi.stubGlobal("fetch", vi.fn()))
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it("zeigt nur Behandlungen mit Festpreis", async () => {
    // Die 17 onRequest-Behandlungen haben keinen Preis. Sie hier zu zeigen
    // hieße, eine Kaufstrecke anzubieten, die nicht abschließbar ist.
    renderFlow()
    expect(screen.getByText("Achseln")).toBeInTheDocument()
    expect(screen.queryByText(/Schmerztherapie/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Microneedling/)).not.toBeInTheDocument()
  })

  it("schickt SKU, Datum und Tageszeit — und niemals einen Betrag", async () => {
    // Die Client-Seite derselben Regel, die der Endpunkt erzwingt. Taucht
    // hier je ein Preis im Body auf, hat jemand den Betrag dorthin verlegt,
    // wo ein Besucher ihn ändern kann.
    const fetchMock = vi.mocked(fetch)
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true, url: "https://checkout.stripe.test/s" }),
    } as Response)
    // Der Erfolgspfad setzt window.location.href. jsdom kann nicht
    // navigieren und schriebe stattdessen "Not implemented: navigation" in
    // die Testausgabe — hier steht ein Platzhalter, der die Zuweisung
    // festhält, statt sie zu versuchen. Nebenbei ist das der Nachweis, dass
    // der Besucher wirklich auf die Stripe-URL geschickt wird.
    vi.stubGlobal("location", { href: "" })

    renderFlow()
    await userEvent.click(zoneButton("Achseln"))
    await userEvent.click(screen.getByRole("button", { name: /Einzelsitzung/ }))
    const datum = screen.getByLabelText(/Wunschtermin/)
    await userEvent.type(datum, "2026-12-01")
    await userEvent.click(screen.getByRole("button", { name: /vormittags/i }))
    await userEvent.click(screen.getByRole("button", { name: /kostenpflichtig buchen/i }))

    await waitFor(() => expect(fetchMock).toHaveBeenCalled())
    const body = fetchMock.mock.calls[0][1]?.body as URLSearchParams
    expect(body.get("sku")).toBe("achseln-single")
    expect(body.get("datum")).toBe("2026-12-01")
    expect(body.get("tageszeit")).toBe("vormittags")
    expect(body.get("amount")).toBeNull()
    expect(body.get("betrag")).toBeNull()

    await waitFor(() => expect(window.location.href).toBe("https://checkout.stripe.test/s"))
  })

  it("sagt vor dem Bezahlen, dass der Termin noch nicht bestätigt ist", async () => {
    // Eine der drei Stellen, und die einzige, die der Kunde sieht, bevor
    // das Geld weg ist.
    renderFlow()
    await userEvent.click(zoneButton("Achseln"))
    await userEvent.click(screen.getByRole("button", { name: /Einzelsitzung/ }))
    await userEvent.type(screen.getByLabelText(/Wunschtermin/), "2026-12-01")
    await userEvent.click(screen.getByRole("button", { name: /vormittags/i }))
    const hinweis = screen.getByText(/noch kein bestätigter Termin/i)
    expect(hinweis).toBeInTheDocument()

    // Und zwar ÜBER dem Kaufbutton. Darunter wäre er ein Kleingedrucktes,
    // das erst gelesen wird, wenn das Geld schon weg ist.
    const button = screen.getByRole("button", { name: /kostenpflichtig buchen/i })
    expect(hinweis.compareDocumentPosition(button)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })

  it("zeigt einen Fehler statt einer leeren Seite, wenn der Endpunkt ablehnt", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      json: async () => ({ ok: false, error: "closed_that_day" }),
    } as Response)

    renderFlow()
    await userEvent.click(zoneButton("Achseln"))
    await userEvent.click(screen.getByRole("button", { name: /Einzelsitzung/ }))
    await userEvent.type(screen.getByLabelText(/Wunschtermin/), "2026-12-06")
    await userEvent.click(screen.getByRole("button", { name: /vormittags/i }))
    await userEvent.click(screen.getByRole("button", { name: /kostenpflichtig buchen/i }))

    expect(await screen.findByRole("alert")).toBeInTheDocument()
  })

  it("übersteht einen Netzwerkfehler", async () => {
    // Ein abgelehntes fetch ist ein anderer Pfad als eine ok:false-Antwort.
    // Ohne Behandlung dreht sich der Button ewig.
    vi.mocked(fetch).mockRejectedValue(new Error("offline"))

    renderFlow()
    await userEvent.click(zoneButton("Achseln"))
    await userEvent.click(screen.getByRole("button", { name: /Einzelsitzung/ }))
    await userEvent.type(screen.getByLabelText(/Wunschtermin/), "2026-12-01")
    await userEvent.click(screen.getByRole("button", { name: /vormittags/i }))
    await userEvent.click(screen.getByRole("button", { name: /kostenpflichtig buchen/i }))

    expect(await screen.findByRole("alert")).toBeInTheDocument()
  })
})
