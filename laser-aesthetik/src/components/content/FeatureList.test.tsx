import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { FeatureList } from "./FeatureList"
import { FaqAccordion } from "./FaqAccordion"
import { SpecRow } from "./SpecRow"

describe("FeatureList", () => {
  it("renders one list item per feature", () => {
    render(<FeatureList items={["Eins", "Zwei", "Drei"]} />)
    expect(screen.getAllByRole("listitem")).toHaveLength(3)
  })

  it("hides the decorative checkmarks from assistive tech", () => {
    const { container } = render(<FeatureList items={["Eins"]} />)
    expect(container.querySelector("svg")).toHaveAttribute("aria-hidden", "true")
  })
})

describe("SpecRow", () => {
  it("renders each spec as a term and description pair", () => {
    render(<SpecRow items={[{ label: "Dauer", value: "10 Min." }]} />)
    expect(screen.getByText("Dauer").tagName).toBe("DT")
    expect(screen.getByText("10 Min.").tagName).toBe("DD")
  })
})

describe("FaqAccordion", () => {
  it("renders each question as a button that starts collapsed", () => {
    render(
      <FaqAccordion
        items={[{ question: "Tut das weh?", answer: "Die meisten empfinden es als warm." }]}
      />,
    )
    expect(screen.getByRole("button", { name: "Tut das weh?" })).toHaveAttribute(
      "aria-expanded",
      "false",
    )
  })

  it("renders nothing when given no items", () => {
    const { container } = render(<FaqAccordion items={[]} />)
    expect(container).toBeEmptyDOMElement()
  })
})
