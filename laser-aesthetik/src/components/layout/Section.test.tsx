import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { Container } from "./Container"
import { Section } from "./Section"
import { SectionHeader } from "./SectionHeader"

describe("Container", () => {
  it("constrains width in rem and centres itself", () => {
    render(<Container data-testid="c">Inhalt</Container>)
    expect(screen.getByTestId("c").className).toContain("max-w-6xl")
  })
})

describe("Section", () => {
  it("renders a section landmark with its id", () => {
    render(<Section id="behandlungen">Inhalt</Section>)
    const el = document.getElementById("behandlungen")
    expect(el?.tagName).toBe("SECTION")
  })

  it("offers exactly two tones", () => {
    const { container: white } = render(<Section>x</Section>)
    expect(white.firstChild).toHaveClass("bg-white")
    const { container: dark } = render(<Section tone="brand">x</Section>)
    expect(dark.firstChild).toHaveClass("bg-brand-900")
  })
})

describe("SectionHeader", () => {
  it("renders the title and its accent as one level-2 heading", () => {
    render(<SectionHeader title="Unsere" accent="Behandlungen" />)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading).toHaveTextContent("Unsere Behandlungen")
  })

  it("does not set the accent apart typographically", () => {
    // Italic used to mark the accent, but a section heading repeats four to
    // six times a page and that made italic the loudest thing on the page.
    // It now survives only in the two headings there is one of — the hero and
    // the closing CTA. With nothing left to distinguish it, an <em> here would
    // announce emphasis that nobody can see, so the heading is one phrase.
    const { container } = render(<SectionHeader title="Unsere" accent="Behandlungen" />)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading.querySelector("em")).toBeNull()
    expect(container.querySelector(".italic")).toBeNull()
  })

  it("renders the eyebrow and lead when given", () => {
    render(<SectionHeader eyebrow="Laser" title="Zonen" lead="Alle Zonen im Überblick." />)
    expect(screen.getByText("Laser")).toBeInTheDocument()
    expect(screen.getByText("Alle Zonen im Überblick.")).toBeInTheDocument()
  })

  it("omits the eyebrow element entirely when not given", () => {
    const { container } = render(<SectionHeader title="Zonen" />)
    expect(container.querySelector("[data-eyebrow]")).toBeNull()
  })
})
