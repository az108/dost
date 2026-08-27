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

  it("sits flush against the band above it by default", () => {
    // Layering is opt-in. Every page that has not asked for it — treatment
    // details, categories, Preise, Praxis — keeps butt-jointed bands.
    render(<Section data-testid="s">Inhalt</Section>)
    const className = screen.getByTestId("s").className
    expect(className).not.toContain("sheet")
    expect(className).not.toMatch(/-mt-/)
  })

  it("layers itself over the band above when asked to overlap", () => {
    // The negative margin and the compensating padding have to travel
    // together, and the padding has to be symmetric: the top so the pull does
    // not drop content onto the rounded edge, the bottom so the NEXT sheet
    // has something to pull off. `py`, never `pt`.
    render(<Section overlap data-testid="s">Inhalt</Section>)
    const className = screen.getByTestId("s").className
    expect(className).toContain("sheet")
    expect(className).toContain("-mt-8")
    expect(className).toContain("py-20")
    expect(className).not.toMatch(/\bpt-/)
  })

  it("renders no flank unless one is asked for", () => {
    const { container } = render(<Section data-testid="s">Inhalt</Section>)
    expect(container.querySelector("[data-flank]")).toBeNull()
  })

  it("anchors the flank to the side it was given", () => {
    const { container } = render(<Section flank="right" data-testid="s">Inhalt</Section>)
    const flank = container.querySelector("[data-flank]")
    expect(flank).not.toBeNull()
    expect(flank).toHaveAttribute("data-flank", "right")
  })

  it("keeps the flank out of the accessibility tree", () => {
    // It is a block of colour. Announcing it to a screen reader would put a
    // meaningless node between the heading and the content it introduces.
    const { container } = render(<Section flank="left">Inhalt</Section>)
    expect(container.querySelector("[data-flank]")).toHaveAttribute("aria-hidden", "true")
  })

  it("isolates a flanked section so the flank cannot fall behind its own background", () => {
    // The flank paints at -z-10. Without a stacking context on the section,
    // negative z puts it behind the section's background colour and it simply
    // never appears.
    render(<Section flank="left" tone="tint" data-testid="s">Inhalt</Section>)
    expect(screen.getByTestId("s").className).toContain("isolate")
  })

  it("never clips a flanked section", () => {
    // overflow-hidden would make the section a scroll container, which breaks
    // `position: sticky` for anything inside it — the treatment sidebar and
    // the pinned Ablauf photo both depend on that. The flank is inset far
    // enough that it has nothing to escape from, so clipping buys nothing.
    render(<Section flank="left" data-testid="s">Inhalt</Section>)
    expect(screen.getByTestId("s").className).not.toContain("overflow-hidden")
  })

  it("replaces the base vertical padding rather than layering on top of it", () => {
    // Both the base and the overlap padding are `py`, so tailwind-merge drops
    // the base outright. If the overlap ever went back to `pt`, both would
    // survive on the element and which one won would come down to the order
    // Tailwind happened to emit them in.
    render(<Section overlap data-testid="s">Inhalt</Section>)
    expect(screen.getByTestId("s").className).not.toContain("py-12")
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
