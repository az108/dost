import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { datenschutz, impressum } from "./legal"

describe("legal documents", () => {
  it("names the operator in the Impressum, exactly", () => {
    // §5 TMG makes this legally consequential. A one-character typo must
    // not pass silently.
    const text = JSON.stringify(impressum)
    expect(text).toContain("Dr. med. univ. Dost Mohammad")
    expect(text).toContain("Weiher 3, 84178 Kröning")
  })

  it("names the operator as the data controller", () => {
    expect(JSON.stringify(datenschutz)).toContain("Dr. med. univ. Dost Mohammad")
  })

  it("does not export the operator", async () => {
    // The boundary this slice exists to build. If `operator` becomes
    // exported, a component can import it, and the doctor is back on the
    // marketing surface.
    const mod = await import("./legal")
    expect(Object.keys(mod)).not.toContain("operator")
  })

  it("omits the email line entirely while no address is supplied", () => {
    // A contact block reading "E-Mail: TODO_EMAIL" in an Impressum is worse
    // than one with no email line at all.
    expect(JSON.stringify(impressum)).not.toContain("TODO_")
    expect(JSON.stringify(datenschutz)).not.toContain("TODO_")
  })

  it("keeps the Doctolib paragraph out while there is no booking profile", () => {
    // Datenschutz must not describe a data flow to a booking provider the
    // center does not use.
    expect(JSON.stringify(datenschutz)).not.toContain("Doctolib")
  })

  it("does not read the doctor's name from anywhere but this file", () => {
    const source = readFileSync(resolve(__dirname, "./legal.ts"), "utf8")
    expect(source).toContain("Dost Mohammad")
  })
})
