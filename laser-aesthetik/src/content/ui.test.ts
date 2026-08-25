import { describe, expect, it } from "vitest"
import { ui } from "./ui"

describe("ui dictionary", () => {
  it("gives every entry a non-empty German and English value", () => {
    for (const [key, value] of Object.entries(ui)) {
      expect(value.de.trim().length, `${key}.de is empty`).toBeGreaterThan(0)
      expect(value.en.trim().length, `${key}.en is empty`).toBeGreaterThan(0)
    }
  })

  it("never leaves an entry untranslated (en identical to de)", () => {
    // Identical de/en is the signature of a string that was copy-pasted
    // instead of actually translated. No legitimate exception exists in
    // this dictionary today — every entry differs by wording, not just
    // punctuation, so this test intentionally has no allowlist.
    for (const [key, value] of Object.entries(ui)) {
      expect(value.en, `${key}: en is identical to de — not translated`).not.toBe(value.de)
    }
  })
})
