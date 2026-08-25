import type { ReactNode } from "react"
import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { LOCALES, useLocale } from "./locale"

function at(path: string) {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <MemoryRouter initialEntries={[path]}>{children}</MemoryRouter>
  )
  return renderHook(() => useLocale(), { wrapper }).result.current
}

describe("useLocale", () => {
  it("treats every path outside /en as German — today's whole site", () => {
    for (const path of [
      "/",
      "/laser",
      "/physio",
      "/aesthetik",
      "/behandlungen/achseln",
      "/preise",
      "/praxis",
      "/kontakt",
      "/impressum",
      "/datenschutz",
      "/gibt-es-nicht",
      "/english-sounding-but-not-en",
    ]) {
      expect(at(path), `expected "${path}" to be German`).toBe("de")
    }
  })

  it("treats /en itself as English", () => {
    expect(at("/en")).toBe("en")
  })

  it("treats any /en/... path as English", () => {
    expect(at("/en/laser")).toBe("en")
    expect(at("/en/treatments/achseln")).toBe("en")
  })

  it("lists exactly the two supported locales", () => {
    expect(LOCALES).toEqual(["de", "en"])
  })
})
