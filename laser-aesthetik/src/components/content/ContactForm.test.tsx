import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { ContactForm } from "./ContactForm"
import { practice } from "@/content/practice"

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

  it("renders the error state with a mailto fallback after a rejection", async () => {
    fetchMock.mockRejectedValue(new Error("network error"))
    const user = userEvent.setup()
    renderForm()

    await fillValidFields(user)
    await user.click(screen.getByRole("button", { name: "Nachricht senden" }))

    expect(await screen.findByText(/konnte leider nicht gesendet werden/)).toBeInTheDocument()
    const mailLink = screen.getByRole("link", { name: practice.email })
    expect(mailLink).toHaveAttribute("href", `mailto:${practice.email}`)
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
