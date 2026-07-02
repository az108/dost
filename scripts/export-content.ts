import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { buildContent, referencedAssets } from "./content-json"

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const sharedDir = join(root, "shared")

const content = buildContent()
const assets = referencedAssets(content)

rmSync(join(sharedDir, "assets"), { recursive: true, force: true })
mkdirSync(sharedDir, { recursive: true })
for (const rel of assets) {
  const dest = join(sharedDir, "assets", rel)
  mkdirSync(dirname(dest), { recursive: true })
  cpSync(join(root, "src/assets", rel), dest)
}
writeFileSync(join(sharedDir, "content.json"), JSON.stringify(content, null, 2) + "\n")
console.log(`Wrote shared/content.json and ${assets.length} assets`)
