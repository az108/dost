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

  it("applies the brand tone", () => {
    render(<Section tone="brand" data-testid="s">Inhalt</Section>)
    expect(screen.getByTestId("s").className).toContain("bg-brand")
  })
})

describe("SectionHeader", () => {
  it("renders the title as a level-2 heading with the accent word inside it", () => {
    render(<SectionHeader title="Unsere" accent="Behandlungen" />)
    const heading = screen.getByRole("heading", { level: 2 })
    expect(heading).toHaveTextContent("Unsere Behandlungen")
    expect(heading.querySelector("em")).toHaveTextContent("Behandlungen")
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
