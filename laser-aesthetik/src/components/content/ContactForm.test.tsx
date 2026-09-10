import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { ContactForm } from "./ContactForm"

function renderForm() {
  return render(
    <MemoryRouter>
      <ContactForm />
    </MemoryRouter>,
  )
}

async function fillValidFields(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Name"), "Maria Muster")
  await user.type(screen.getByLabelText("E-Mail"), "maria@example.com")
  await user.type(screen.getByLabelText("Nachricht"), "Ich hätte gerne einen Rückruf.")
  await user.click(screen.getByLabelText(/Ich bin damit einverstanden/))
}

let fetchMock: ReturnType<typeof vi.fn>

describe("ContactForm", () => {
  beforeEach(() => {
    fetchMock = vi.fn()
    vi.stubGlobal("fetch", fetchMock)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    // In afterEach, not trailing the assertions inside the test that sets
    // it up: a failing assertion throws before the cleanup line is reached
    // and every later test in this file then runs against the mocked
    // module, failing for a reason that has nothing to do with itself.
    vi.doUnmock("@/content/center")
    vi.resetModules()
  })

  it("blocks submission and shows per-field errors when required fields are empty", async () => {
    const user = userEvent.setup()
    renderForm()

    await user.click(screen.getByRole("button", { name: "Nachricht senden" }))

    expect(screen.getByText("Bitte geben Sie Ihren Namen an.")).toBeInTheDocument()
    expect(screen.getByText("Bitte geben Sie Ihre E-Mail-Adresse an.")).toBeInTheDocument()
    expect(screen.getByText("Bitte geben Sie eine Nachricht ein.")).toBeInTheDocument()
    expect(screen.getByText("Bitte stimmen Sie der Datenverarbeitung zu.")).toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()

    const nameInput = screen.getByLabelText("Name")
    expect(nameInput).toHaveAttribute("aria-invalid", "true")
    expect(nameInput.getAttribute("aria-describedby")).toMatch(/-error$/)
  })

  it("POSTs to /contact.php as FormData on a valid submission", async () => {
    fetchMock.mockResolvedValue({ ok: true, json: async () => ({ ok: true }) })
    const user = userEvent.setup()
    renderForm()

    await fillValidFields(user)
    await user.click(screen.getByRole("button", { name: "Nachricht senden" }))

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [url, options] = fetchMock.mock.calls[0]
    expect(url).toBe("/contact.php")
    expect(options.method).toBe("POST")
    expect(options.body).toBeInstanceOf(FormData)
  })

  it("renders the success state after a resolved {ok:true} response", async () => {
    fetchMock.mockResolvedValue({ ok: true, json: async () => ({ ok: true }) })
    const user = userEvent.setup()
    renderForm()

    await fillValidFields(user)
    await user.click(screen.getByRole("button", { name: "Nachricht senden" }))

    expect(await screen.findByText(/Vielen Dank für Ihre Nachricht/)).toBeInTheDocument()
  })

  it("renders the error state after a rejection", async () => {
    fetchMock.mockRejectedValue(new Error("network error"))
    const user = userEvent.setup()
    renderForm()

    await fillValidFields(user)
    await user.click(screen.getByRole("button", { name: "Nachricht senden" }))

    expect(await screen.findByText(/konnte leider nicht gesendet werden/)).toBeInTheDocument()
    expect(screen.getByText("Bitte versuchen Sie es erneut.")).toBeInTheDocument()
  })

  it("offers no mailto fallback while the center's email sentinel is unfilled", async () => {
    // The address that used to be hard-wired here was the practice's own,
    // info@drdosthealth.com, interpolated from practice.ts — invisible to a
    // grep over src/ and shown to a visitor whose message had just failed.
    // Until the center has a mailbox on its own domain there is nothing
    // honest to offer, and a mailto to EMAIL_TODO would simply fail again in
    // the visitor's mail client.
    fetchMock.mockRejectedValue(new Error("network error"))
    const user = userEvent.setup()
    const { container } = renderForm()

    await fillValidFields(user)
    await user.click(screen.getByRole("button", { name: "Nachricht senden" }))

    expect(await screen.findByText(/konnte leider nicht gesendet werden/)).toBeInTheDocument()
    expect(container.querySelector('a[href^="mailto:"]')).toBeNull()
    expect(screen.queryByText(/schreiben Sie uns direkt an/)).not.toBeInTheDocument()
    expect(container.innerHTML).not.toContain("TODO_EMAIL")
  })

  it("offers the mailto fallback once the center has an address", async () => {
    // The other half of the guard: the sentence and the link come back the
    // moment center.email is real, so the branch above is a placeholder for
    // a missing fact, not a removed feature.
    vi.resetModules()
    vi.doMock("@/content/center", async () => {
      const actual = await vi.importActual<typeof import("@/content/center")>("@/content/center")
      // hasEmail() defaults its argument to the module-local `center`, so
      // swapping only the export would leave the guard reading the real
      // sentinel. Both have to move together.
      return {
        ...actual,
        center: { ...actual.center, email: "hallo@example.test" },
        hasEmail: () => true,
      }
    })
    const { ContactForm: Fresh } = await import("./ContactForm")
    fetchMock.mockRejectedValue(new Error("network error"))
    const user = userEvent.setup()
    render(
      <MemoryRouter>
        <Fresh />
      </MemoryRouter>,
    )

    await fillValidFields(user)
    await user.click(screen.getByRole("button", { name: "Nachricht senden" }))

    expect(await screen.findByText(/konnte leider nicht gesendet werden/)).toBeInTheDocument()
    const mailLink = screen.getByRole("link", { name: "hallo@example.test" })
    expect(mailLink).toHaveAttribute("href", "mailto:hallo@example.test")
  })

  it("requires the consent checkbox: submitting unchecked shows an error and does not POST", async () => {
    const user = userEvent.setup()
    renderForm()

    await user.type(screen.getByLabelText("Name"), "Maria Muster")
    await user.type(screen.getByLabelText("E-Mail"), "maria@example.com")
    await user.type(screen.getByLabelText("Nachricht"), "Ich hätte gerne einen Rückruf.")
    await user.click(screen.getByRole("button", { name: "Nachricht senden" }))

    expect(screen.getByText("Bitte stimmen Sie der Datenverarbeitung zu.")).toBeInTheDocument()
    expect(fetchMock).not.toHaveBeenCalled()
  })
})
