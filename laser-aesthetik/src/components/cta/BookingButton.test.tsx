import { readFileSync } from "node:fs"
import { relative, resolve } from "node:path"
import { execSync } from "node:child_process"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { BookingButton } from "./BookingButton"

const DOCTOLIB =
  "https://www.doctolib.de/privatpraxis/landshut/dr-med-univ-dost-mohammad-city-center-landshut/booking?profile_skipped=true&source=external_referral"

describe("BookingButton", () => {
  it("links to the Doctolib booking page", () => {
    render(<BookingButton />)
    expect(screen.getByRole("link")).toHaveAttribute("href", DOCTOLIB)
  })

  it("opens in a new tab without leaking the referrer opener", () => {
    render(<BookingButton />)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("uses a default German label", () => {
    render(<BookingButton />)
    expect(screen.getByRole("link")).toHaveTextContent("Termin buchen")
  })

  it("accepts a custom label", () => {
    render(<BookingButton>Jetzt Termin sichern</BookingButton>)
    expect(screen.getByRole("link")).toHaveTextContent("Jetzt Termin sichern")
  })

  it("reads the URL from practice.ts rather than hardcoding it", () => {
    const src = readFileSync(resolve(__dirname, "./BookingButton.tsx"), "utf8")
    expect(src).not.toContain("doctolib.de")
    expect(src).toContain("practice.bookingUrl")
  })
})

describe("Doctolib URL containment", () => {
  // Changing the booking destination must be a one-line change. This asserts
  // the EXACT set of files containing the URL — an allowlist, not a denylist.
  //
  // Two things this shape deliberately avoids:
  //  - Excluding files by a `.test.ts` suffix would let a production file with
  //    that name hide a leak.
  //  - Restricting grep to --include='*.ts,*.tsx' would miss a URL hardcoded
  //    into a .json, .mdx or any other file type under src/.
  // Scanning everything and pinning the result set closes both.
  it("appears only in practice.ts and the two tests that assert it", () => {
    const srcRoot = resolve(__dirname, "../..")
    const hits = execSync(`grep -rl 'doctolib.de' ${JSON.stringify(srcRoot)} || true`, {
      encoding: "utf8",
    })
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((f) => relative(srcRoot, f))
      .sort()

    expect(hits).toEqual([
      "components/cta/BookingButton.test.tsx",
      "content/practice.test.ts",
      "content/practice.ts",
    ])
  })
})
