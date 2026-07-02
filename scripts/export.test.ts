import { existsSync, readFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"
import { buildContent, referencedAssets } from "./content-json"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")

describe("shared content export", () => {
  it("shared/content.json is up to date (fix: npm run export:content)", () => {
    const expected = JSON.stringify(buildContent(), null, 2) + "\n"
    expect(readFileSync(join(root, "shared/content.json"), "utf8")).toBe(expected)
  })

  it("every referenced asset exists under shared/assets", () => {
    for (const rel of referencedAssets(buildContent())) {
      expect(existsSync(join(root, "shared/assets", rel)), rel).toBe(true)
    }
  })
})
