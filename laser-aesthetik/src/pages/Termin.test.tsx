import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import Termin from "./Termin"
import { ui } from "@/content/ui"
import { terminPath } from "@/lib/routes"

const renderFlow = () =>
  render(
    <MemoryRouter initialEntries={[terminPath("index")]}>
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

/** Bis Schritt 4, an dem der Kaufbutton steht. */
async function fillFlow(datum = "2026-12-01") {
  await userEvent.click(zoneButton("Achseln"))
  await userEvent.click(screen.getByRole("button", { name: /Einzelsitzung/ }))
  await userEvent.type(screen.getByLabelText(/Wunschtermin/), datum)
  await userEvent.click(screen.getByRole("radio", { name: /vormittags/i }))
}

describe("Termin-Flow", () => {
  beforeEach(() => vi.stubGlobal("fetch", vi.fn()))
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it("zeigt nur Behandlungen mit Festpreis", async () => {
    // Die Behandlungen, die hier wirklich durchrutschen könnten, sind die
    // drei LASER-Behandlungen ohne Festpreis: sie kommen aus derselben
    // Säule und werden allein vom kind-Filter ferngehalten. Ohne ihn böte
    // die Seite eine Kaufstrecke an, die nicht abschließbar ist — und
    // zeigte "ab 0 €", weil priceFrom() für sie null liefert.
    renderFlow()
    expect(screen.getByText("Achseln")).toBeInTheDocument()
    expect(screen.queryByText("Gefäßbehandlung & Couperose")).not.toBeInTheDocument()
    expect(screen.queryByText("Pigmentflecken")).not.toBeInTheDocument()
    expect(screen.queryByText("Aknenarben")).not.toBeInTheDocument()
    // Genau die 16 Zonen mit Festpreis, nicht die 19 Laser-Behandlungen.
    expect(screen.getAllByRole("button", { name: / ab / })).toHaveLength(16)
  })

  it("zeigt keine Behandlung aus einer anderen Säule", async () => {
    renderFlow()
    expect(screen.queryByText(/Schmerztherapie/)).not.toBeInTheDocument()
    expect(screen.queryByText(/Microneedling/)).not.toBeInTheDocument()
  })

  it("bietet im Hero keinen Weg aus der Kaufstrecke heraus", async () => {
    // Der Hero rendert sonst BookingButton: ein großer Knopf "Termin
    // buchen", der zum Kontaktformular führt — auf der Seite, die die
    // Buchung selbst ist. Sobald center.locations[0].bookingUrl gesetzt
    // ist, würde daraus ein externer target="_blank"-Link aus einer
    // bezahlten Kaufstrecke heraus.
    renderFlow()
    expect(screen.queryByText(ui.bookAppointment.de)).not.toBeInTheDocument()
    expect(
      screen.queryByRole("link", { name: new RegExp(ui.bookAppointment.de) }),
    ).not.toBeInTheDocument()
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
    await fillFlow()
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
    await fillFlow()
    const hinweis = screen.getByText(/noch kein bestätigter Termin/i)
    expect(hinweis).toBeInTheDocument()

    // Und zwar ÜBER dem Kaufbutton. Darunter wäre er ein Kleingedrucktes,
    // das erst gelesen wird, wenn das Geld schon weg ist.
    const button = screen.getByRole("button", { name: /kostenpflichtig buchen/i })
    expect(hinweis.compareDocumentPosition(button)).toBe(Node.DOCUMENT_POSITION_FOLLOWING)
  })

  it("zeigt das Wunschdatum deutsch, nicht als ISO-String", async () => {
    // Letzte Zeile, die ein deutscher Kunde vor der Zahlung liest.
    renderFlow()
    await fillFlow()
    expect(screen.getByText(/01\.12\.2026, Vormittags/)).toBeInTheDocument()
  })

  it("macht die Auswahl auch ohne Farbwahrnehmung erkennbar", async () => {
    // Zone, Umfang und Tageszeit sind zusammen der belastete Betrag. Wer
    // die Auswahl nur am Rahmen erkennt, kann vor dem Bezahlen nicht
    // prüfen, was er kauft.
    renderFlow()
    expect(zoneButton("Achseln")).toHaveAttribute("aria-pressed", "false")
    await userEvent.click(zoneButton("Achseln"))
    expect(zoneButton("Achseln")).toHaveAttribute("aria-pressed", "true")

    const einzel = screen.getByRole("button", { name: /Einzelsitzung/ })
    expect(einzel).toHaveAttribute("aria-pressed", "false")
    await userEvent.click(einzel)
    expect(screen.getByRole("button", { name: /Einzelsitzung/ })).toHaveAttribute(
      "aria-pressed",
      "true",
    )

    // Genau eine Tageszeit gilt — deshalb radiogroup statt drei Umschalter.
    expect(screen.getByRole("radiogroup", { name: ui.timeOfDay.de })).toBeInTheDocument()
    const vormittags = screen.getByRole("radio", { name: /vormittags/i })
    expect(vormittags).toHaveAttribute("aria-checked", "false")
    await userEvent.click(vormittags)
    expect(screen.getByRole("radio", { name: /vormittags/i })).toHaveAttribute(
      "aria-checked",
      "true",
    )
    expect(screen.getByRole("radio", { name: /abends/i })).toHaveAttribute("aria-checked", "false")
  })

  it("zeigt einen Fehler statt einer leeren Seite, wenn der Endpunkt ablehnt", async () => {
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      json: async () => ({ ok: false, error: "closed_that_day" }),
    } as Response)

    renderFlow()
    await fillFlow("2026-12-06")
    await userEvent.click(screen.getByRole("button", { name: /kostenpflichtig buchen/i }))

    expect(await screen.findByRole("alert")).toHaveTextContent(ui.bookingErrorClosedThatDay.de)
  })

  it("übersteht einen Netzwerkfehler", async () => {
    // Ein abgelehntes fetch ist ein anderer Pfad als eine ok:false-Antwort.
    // Ohne Behandlung dreht sich der Button ewig.
    vi.mocked(fetch).mockRejectedValue(new Error("offline"))

    renderFlow()
    await fillFlow()
    await userEvent.click(screen.getByRole("button", { name: /kostenpflichtig buchen/i }))

    expect(await screen.findByRole("alert")).toHaveTextContent(ui.bookingErrorNetwork.de)
  })

  it("schiebt einen Stripe-Ausfall nicht der Leitung des Besuchers zu", async () => {
    // stripe_error heißt: gesperrtes Konto, falscher Key, Stripe-Störung.
    // "Bitte versuchen Sie es erneut" kann dann nie gelingen, und der
    // Besucher, dessen Karte NICHT belastet wurde, drückt einen Knopf ohne
    // Ausweg. Die Meldung muss den Zahlungsdienstleister nennen und den Weg
    // zum Center anbieten.
    vi.mocked(fetch).mockResolvedValue({
      ok: false,
      json: async () => ({ ok: false, error: "stripe_error" }),
    } as Response)

    renderFlow()
    await fillFlow()
    await userEvent.click(screen.getByRole("button", { name: /kostenpflichtig buchen/i }))

    const alert = await screen.findByRole("alert")
    expect(alert).toHaveTextContent(ui.bookingErrorPaymentProvider.de)
    expect(alert).not.toHaveTextContent(ui.bookingErrorNetwork.de)
  })
})
