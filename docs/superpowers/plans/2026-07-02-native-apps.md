# Native iOS & Android Apps Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add fully native iOS (SwiftUI) and Android (Kotlin + Jetpack Compose) apps to the repo that render the website's content from a shared, committed `shared/content.json`.

**Architecture:** The web app stays at the repo root untouched. A `vite-node` script exports `src/content/*.ts` to `shared/content.json` + `shared/assets/` (committed; a vitest test guards freshness). The iOS app is a hand-authored minimal `.xcodeproj` (filesystem-synchronized groups) whose model layer lives in a local Swift package `ios/DrDostKit` testable via `swift test` on macOS. The Android app is a standard single-module Gradle project that mounts `../shared` as an asset directory.

**Tech Stack:** vite-node, vitest · Swift 5 / SwiftUI / iOS 17+ / Xcode 26.5 SDK · Kotlin 2.2 / Jetpack Compose (BOM 2024.09) / Material 3 / minSdk 26, compileSdk 34 / AGP 8.13 / Gradle 8.14.3 / kotlinx-serialization

## Global Constraints

- Spec: `docs/superpowers/specs/2026-07-02-native-apps-design.md`
- Repo root: `/Users/aniruddhzaveri/IdeaProjects/dost`. Web app at root must keep working (`npm test`, `npm run build`).
- All user-facing app copy is **German** (tabs: Start, Behandlungen, Fachbereiche, Galerie, Info).
- Bundle/application id both platforms: `de.silvamed.drdost`.
- Placeholder guard: a contact value is "real" iff trimmed non-empty AND (lowercased) does not contain `"folgt"`. Placeholder values render as plain text, never as tappable actions.
- **Android SDK constraint:** only platform `android-34` + build-tools `34.0.0` are installed. compileSdk/targetSdk MUST stay 34; do NOT bump androidx deps beyond the pinned versions (newer ones require SDK 35).
- **Java constraint:** system Java is 25 (too new for Gradle 8.14). All `./gradlew` invocations MUST be prefixed with `JAVA_HOME=/opt/homebrew/opt/openjdk@21` (installed in Task 6).
- **iOS Simulator runtime is NOT installed** (SDK is). `swift test` (macOS) and `xcodebuild ... -destination 'generic/platform=iOS Simulator' CODE_SIGNING_ALLOWED=NO build` are the required checks; launching in a simulator is attempted only in Task 9.
- Commit after every task (messages given per task).

---

### Task 1: Extract legal texts into `src/content/legal.ts`

The legal placeholder texts live inline in `src/pages/Legal.tsx`; move them into content so the export script can reach them.

**Files:**
- Create: `src/content/legal.ts`
- Modify: `src/pages/Legal.tsx`
- Modify: `src/App.tsx` (the two `<Legal>` routes)
- Test: `src/pages/Legal.test.tsx`

**Interfaces:**
- Produces: `export const legal: { impressum: string[]; datenschutz: string[] }` from `src/content/legal.ts`; `Legal` component signature becomes `{ title: string; paragraphs: string[] }`.

- [ ] **Step 1: Write the failing test** — `src/pages/Legal.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import Legal from "./Legal"
import { legal } from "@/content/legal"

it("renders the impressum placeholder paragraphs from content", () => {
  render(
    <MemoryRouter>
      <Legal title="Impressum" paragraphs={legal.impressum} />
    </MemoryRouter>
  )
  expect(screen.getByRole("heading", { name: "Impressum" })).toBeInTheDocument()
  expect(screen.getByText(/Inhalt folgt/)).toBeInTheDocument()
})
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npx vitest run src/pages/Legal.test.tsx`
Expected: FAIL — cannot resolve `@/content/legal`.

- [ ] **Step 3: Implement** — create `src/content/legal.ts`:

```ts
// Platzhalter – die finalen Rechtstexte werden vom Praxisinhaber bereitgestellt.
export const legal = {
  impressum: [
    "Inhalt folgt. Dies ist ein Platzhalter – die finalen Rechtstexte werden vom Praxisinhaber bereitgestellt.",
  ],
  datenschutz: [
    "Inhalt folgt. Dies ist ein Platzhalter – die finalen Rechtstexte werden vom Praxisinhaber bereitgestellt.",
  ],
}
```

Replace `src/pages/Legal.tsx` with:

```tsx
import { useSeo } from "@/lib/useSeo"

export default function Legal({
  title,
  paragraphs,
}: {
  title: string
  paragraphs: string[]
}) {
  useSeo({ title })
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">
      <h1 className="font-display text-5xl">{title}</h1>
      {paragraphs.map((p) => (
        <p key={p} className="mt-8 text-neutral-600">
          {p}
        </p>
      ))}
    </main>
  )
}
```

In `src/App.tsx`, add `import { legal } from "@/content/legal"` next to the other content imports and change the two routes to:

```tsx
<Route path="/impressum" element={<Legal title="Impressum" paragraphs={legal.impressum} />} />
<Route path="/datenschutz" element={<Legal title="Datenschutz" paragraphs={legal.datenschutz} />} />
```

- [ ] **Step 4: Run the full web test suite and build**

Run: `npm test && npm run build`
Expected: all tests PASS, build succeeds.

- [ ] **Step 5: Commit**

```bash
git add src/content/legal.ts src/pages/Legal.tsx src/pages/Legal.test.tsx src/App.tsx
git commit -m "refactor: move legal placeholder texts into src/content/legal.ts"
```

---

### Task 2: Content export pipeline → `shared/`

Export `src/content/*.ts` to `shared/content.json` + copy referenced images to `shared/assets/`. Runs via `vite-node` so Vite resolves the `@` alias, `.jpg` imports (which become URL strings like `/src/assets/topics/x.jpg`), and `import.meta.glob` in `galerie.ts`. A vitest test keeps the committed output fresh.

**Files:**
- Create: `scripts/content-json.ts` (pure builder, shared by script + test)
- Create: `scripts/export-content.ts` (writes files)
- Test: `scripts/export.test.ts`
- Modify: `package.json` (add `export:content` script, `vite-node` devDependency)
- Create (generated, committed): `shared/content.json`, `shared/assets/**`

**Interfaces:**
- Produces: `shared/content.json` with shape `{ praxis, arzt (incl. portrait: string), legal, behandlungen: Topic[], fachbereiche: Topic[], galerie: {image, alt}[] }` where `Topic = { slug, title, excerpt, body: string[], image: string|null, imageAlt: string|null }` and every `image`/`portrait` is a path relative to `shared/assets/` (e.g. `topics/allergiebehandlung.jpg`, `galerie/sprechzimmer-01.jpg`, `arzt-portrait.jpg`). SEO `keywords` are intentionally excluded. Tasks 3 and 7 decode exactly this shape.

- [ ] **Step 1: Install vite-node**

Run: `npm install -D vite-node@^3.1.4`
Expected: success; version aligned with vitest 3.x.

- [ ] **Step 2: Write the builder** — `scripts/content-json.ts`:

```ts
/// <reference types="vite/client" />
import { arzt } from "../src/content/arzt"
import { behandlungen } from "../src/content/behandlungen"
import { fachbereiche } from "../src/content/fachbereiche"
import { galerie } from "../src/content/galerie"
import { legal } from "../src/content/legal"
import { praxis } from "../src/content/praxis"
import type { TopicEntry } from "../src/content/types"
import arztPortrait from "../src/assets/arzt-portrait.jpg"

/** Vite (vite-node SSR and vitest alike) turns asset imports into URL strings
 *  like "/src/assets/topics/x.jpg"; map them back to a path under src/assets. */
export function assetRelPath(url: string): string {
  const marker = "/src/assets/"
  const i = url.indexOf(marker)
  if (i === -1) throw new Error(`Unexpected asset URL: ${url}`)
  return url.slice(i + marker.length)
}

function topic(t: TopicEntry) {
  return {
    slug: t.slug,
    title: t.title,
    excerpt: t.excerpt,
    body: t.body,
    image: t.image ? assetRelPath(t.image) : null,
    imageAlt: t.imageAlt ?? null,
  }
}

export function buildContent() {
  return {
    praxis,
    arzt: { ...arzt, portrait: assetRelPath(arztPortrait) },
    legal,
    behandlungen: behandlungen.map(topic),
    fachbereiche: fachbereiche.map(topic),
    galerie: galerie.map((g) => ({ image: assetRelPath(g.src), alt: g.alt })),
  }
}

export function referencedAssets(content: ReturnType<typeof buildContent>): string[] {
  return [
    content.arzt.portrait,
    ...content.behandlungen.map((t) => t.image),
    ...content.fachbereiche.map((t) => t.image),
    ...content.galerie.map((g) => g.image),
  ].filter((p): p is string => p !== null)
}
```

- [ ] **Step 3: Write the export script** — `scripts/export-content.ts`:

```ts
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
```

Add to `package.json` scripts: `"export:content": "vite-node scripts/export-content.ts"`.

- [ ] **Step 4: Write the freshness test** — `scripts/export.test.ts`:

```ts
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
```

Check `vite.config.ts`: if the vitest `test.include` setting restricts test locations to `src/`, extend it to also match `scripts/*.test.ts`. If there is no `include` override, the vitest default already picks it up — leave it alone.

- [ ] **Step 5: Run test to verify it fails**

Run: `npx vitest run scripts/export.test.ts`
Expected: FAIL — `shared/content.json` does not exist yet.

- [ ] **Step 6: Generate and verify**

Run: `npm run export:content && npx vitest run scripts/export.test.ts`
Expected: script logs `Wrote shared/content.json and 28 assets` (1 portrait + 11 behandlungen + 8 fachbereiche + 8 galerie); test PASSES.
Sanity-check: `head -30 shared/content.json` shows `praxis.brand = "Dr. Dost"` and `arzt.portrait = "arzt-portrait.jpg"`; `ls shared/assets` shows `arzt-portrait.jpg  galerie  topics`.

- [ ] **Step 7: Full web suite + commit**

Run: `npm test && npm run build`
Expected: PASS.

```bash
git add scripts/ shared/ package.json package-lock.json vite.config.ts
git commit -m "feat: export src/content to shared/content.json for the native apps"
```

---

### Task 3: iOS model layer — local Swift package `ios/DrDostKit`

Pure-Foundation package holding models, JSON loading, and the placeholder guard. Tests run on macOS with `swift test` — no simulator needed.

**Files:**
- Create: `ios/DrDostKit/Package.swift`
- Create: `ios/DrDostKit/Sources/DrDostKit/Content.swift`
- Test: `ios/DrDostKit/Tests/DrDostKitTests/ContentTests.swift`

**Interfaces:**
- Consumes: `shared/content.json` (shape from Task 2).
- Produces (all `public`, used by Task 5): `SiteContent { praxis: Praxis, arzt: Arzt, legal: Legal, behandlungen: [Topic], fachbereiche: [Topic], galerie: [GalleryImage] }`; `Praxis { brand, tagline, address, phone, mobile, email, hours: String }`; `Arzt { name, qualifications: String, intro, bio: [String], portrait: String? }`; `Legal { impressum, datenschutz: [String] }`; `Topic: Identifiable, Hashable { slug, title, excerpt: String, body: [String], image: String?, imageAlt: String?, id == slug }`; `GalleryImage: Identifiable, Hashable { image, alt: String, id == image }`; `ContentLoader.load(from: URL) throws -> SiteContent`; `ContactValue.isReal(_ value: String) -> Bool`.

- [ ] **Step 1: Create the package manifest** — `ios/DrDostKit/Package.swift`:

```swift
// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "DrDostKit",
    platforms: [.iOS(.v17), .macOS(.v14)],
    products: [.library(name: "DrDostKit", targets: ["DrDostKit"])],
    targets: [
        .target(name: "DrDostKit"),
        .testTarget(name: "DrDostKitTests", dependencies: ["DrDostKit"]),
    ]
)
```

- [ ] **Step 2: Write the failing tests** — `ios/DrDostKit/Tests/DrDostKitTests/ContentTests.swift`:

```swift
import XCTest
@testable import DrDostKit

final class ContentTests: XCTestCase {
    // ios/DrDostKit/Tests/DrDostKitTests/ContentTests.swift -> repo root is 5 levels up
    private var sharedJSONURL: URL {
        URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .appendingPathComponent("shared/content.json")
    }

    func testDecodesSharedContentJSON() throws {
        let content = try ContentLoader.load(from: sharedJSONURL)
        XCTAssertEqual(content.praxis.brand, "Dr. Dost")
        XCTAssertEqual(content.behandlungen.count, 11)
        XCTAssertEqual(content.fachbereiche.count, 8)
        XCTAssertEqual(content.galerie.count, 8)
        XCTAssertEqual(content.arzt.portrait, "arzt-portrait.jpg")
        XCTAssertEqual(content.behandlungen.first?.image, "topics/allergiebehandlung.jpg")
        XCTAssertFalse(content.legal.impressum.isEmpty)
    }

    func testPlaceholderValuesAreNotReal() {
        XCTAssertFalse(ContactValue.isReal("Telefonnummer folgt"))
        XCTAssertFalse(ContactValue.isReal("Adresse folgt"))
        XCTAssertFalse(ContactValue.isReal("   "))
        XCTAssertTrue(ContactValue.isReal("dr.dost@silvamed.de"))
        XCTAssertTrue(ContactValue.isReal("+49 871 123456"))
    }
}
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `cd ios/DrDostKit && swift test`
Expected: FAIL — `ContentLoader` / types not defined (compile error).

- [ ] **Step 4: Implement** — `ios/DrDostKit/Sources/DrDostKit/Content.swift`:

```swift
import Foundation

public struct SiteContent: Decodable, Hashable, Sendable {
    public let praxis: Praxis
    public let arzt: Arzt
    public let legal: Legal
    public let behandlungen: [Topic]
    public let fachbereiche: [Topic]
    public let galerie: [GalleryImage]
}

public struct Praxis: Decodable, Hashable, Sendable {
    public let brand: String
    public let tagline: String
    public let address: String
    public let phone: String
    public let mobile: String
    public let email: String
    public let hours: String
}

public struct Arzt: Decodable, Hashable, Sendable {
    public let name: String
    public let qualifications: String
    public let intro: [String]
    public let bio: [String]
    public let portrait: String?
}

public struct Legal: Decodable, Hashable, Sendable {
    public let impressum: [String]
    public let datenschutz: [String]
}

public struct Topic: Decodable, Hashable, Identifiable, Sendable {
    public let slug: String
    public let title: String
    public let excerpt: String
    public let body: [String]
    public let image: String?
    public let imageAlt: String?
    public var id: String { slug }
}

public struct GalleryImage: Decodable, Hashable, Identifiable, Sendable {
    public let image: String
    public let alt: String
    public var id: String { image }
}

public enum ContentLoader {
    public static func load(from url: URL) throws -> SiteContent {
        try JSONDecoder().decode(SiteContent.self, from: Data(contentsOf: url))
    }
}

public enum ContactValue {
    /// Placeholder texts like "Telefonnummer folgt" must never become tappable actions.
    public static func isReal(_ value: String) -> Bool {
        let v = value.trimmingCharacters(in: .whitespacesAndNewlines)
        return !v.isEmpty && !v.lowercased().contains("folgt")
    }
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `cd ios/DrDostKit && swift test`
Expected: `Test Suite 'All tests' passed` (2 tests).

- [ ] **Step 6: Commit**

```bash
git add ios/DrDostKit
git commit -m "feat(ios): DrDostKit package with content models, loader and placeholder guard"
```

---

### Task 4: iOS app project — `ios/DrDost.xcodeproj` + app shell

Hand-authored minimal pbxproj (objectVersion 77): one filesystem-synchronized group `DrDost/` for sources (no per-file entries ever needed), a folder reference to `../shared` in Resources (preserves the `shared/` directory structure in the bundle), and a local-package dependency on `DrDostKit`. No asset catalog, generated Info.plist.

**Files:**
- Create: `ios/DrDost.xcodeproj/project.pbxproj`
- Create: `ios/DrDost/DrDostApp.swift` (app entry + content loading; minimal placeholder `MainTabView` that Task 5 replaces)
- Create: `ios/.gitignore`
- Modify: root `.gitignore` if it exists (no iOS entries needed beyond `ios/.gitignore`; skip if covered)

**Interfaces:**
- Consumes: `DrDostKit` (Task 3), bundled `shared/` folder (Task 2).
- Produces: buildable app target `DrDost`; `RootView` loads `SiteContent` from `Bundle.main.url(forResource: "content", withExtension: "json", subdirectory: "shared")` and hands it to `MainTabView(content:)`, which Task 5 fully implements (Task 4 ships a stub `MainTabView` in the same file that Task 5 deletes).

- [ ] **Step 1: Create `ios/.gitignore`:**

```gitignore
build/
DerivedData/
xcuserdata/
*.xcworkspace/xcuserdata/
.swiftpm/
.build/
```

- [ ] **Step 2: Create `ios/DrDost.xcodeproj/project.pbxproj`** (exact content):

```text
// !$*UTF8*$!
{
	archiveVersion = 1;
	classes = {
	};
	objectVersion = 77;
	objects = {

/* Begin PBXBuildFile section */
		A10000000000000000000011 /* shared in Resources */ = {isa = PBXBuildFile; fileRef = A10000000000000000000010 /* shared */; };
		A10000000000000000000014 /* DrDostKit in Frameworks */ = {isa = PBXBuildFile; productRef = A10000000000000000000013 /* DrDostKit */; };
/* End PBXBuildFile section */

/* Begin PBXFileReference section */
		A10000000000000000000004 /* DrDost.app */ = {isa = PBXFileReference; explicitFileType = wrapper.application; includeInIndex = 0; path = DrDost.app; sourceTree = BUILT_PRODUCTS_DIR; };
		A10000000000000000000010 /* shared */ = {isa = PBXFileReference; lastKnownFileType = folder; name = shared; path = ../shared; sourceTree = SOURCE_ROOT; };
/* End PBXFileReference section */

/* Begin PBXFileSystemSynchronizedRootGroup section */
		A1000000000000000000000F /* DrDost */ = {isa = PBXFileSystemSynchronizedRootGroup; explicitFileTypes = {}; explicitFolders = (); path = DrDost; sourceTree = "<group>"; };
/* End PBXFileSystemSynchronizedRootGroup section */

/* Begin PBXFrameworksBuildPhase section */
		A1000000000000000000000D /* Frameworks */ = {
			isa = PBXFrameworksBuildPhase;
			buildActionMask = 2147483647;
			files = (
				A10000000000000000000014 /* DrDostKit in Frameworks */,
			);
			runOnlyForDeploymentPostprocessing = 0;
		};
/* End PBXFrameworksBuildPhase section */

/* Begin PBXGroup section */
		A10000000000000000000002 = {
			isa = PBXGroup;
			children = (
				A1000000000000000000000F /* DrDost */,
				A10000000000000000000010 /* shared */,
				A10000000000000000000003 /* Products */,
			);
			sourceTree = "<group>";
		};
		A10000000000000000000003 /* Products */ = {
			isa = PBXGroup;
			children = (
				A10000000000000000000004 /* DrDost.app */,
			);
			name = Products;
			sourceTree = "<group>";
		};
/* End PBXGroup section */

/* Begin PBXNativeTarget section */
		A10000000000000000000005 /* DrDost */ = {
			isa = PBXNativeTarget;
			buildConfigurationList = A10000000000000000000009 /* Build configuration list for PBXNativeTarget "DrDost" */;
			buildPhases = (
				A1000000000000000000000C /* Sources */,
				A1000000000000000000000D /* Frameworks */,
				A1000000000000000000000E /* Resources */,
			);
			buildRules = (
			);
			dependencies = (
			);
			fileSystemSynchronizedGroups = (
				A1000000000000000000000F /* DrDost */,
			);
			name = DrDost;
			packageProductDependencies = (
				A10000000000000000000013 /* DrDostKit */,
			);
			productName = DrDost;
			productReference = A10000000000000000000004 /* DrDost.app */;
			productType = "com.apple.product-type.application";
		};
/* End PBXNativeTarget section */

/* Begin PBXProject section */
		A10000000000000000000001 /* Project object */ = {
			isa = PBXProject;
			attributes = {
				BuildIndependentTargetsInParallel = 1;
				LastUpgradeCheck = 2600;
				TargetAttributes = {
					A10000000000000000000005 = {
						CreatedOnToolsVersion = 26.0;
					};
				};
			};
			buildConfigurationList = A10000000000000000000006 /* Build configuration list for PBXProject "DrDost" */;
			developmentRegion = de;
			hasScannedForEncodings = 0;
			knownRegions = (
				de,
				Base,
			);
			mainGroup = A10000000000000000000002;
			minimizedProjectReferenceProxies = 1;
			packageReferences = (
				A10000000000000000000012 /* XCLocalSwiftPackageReference "DrDostKit" */,
			);
			preferredProjectObjectVersion = 77;
			productRefGroup = A10000000000000000000003 /* Products */;
			projectDirPath = "";
			projectRoot = "";
			targets = (
				A10000000000000000000005 /* DrDost */,
			);
		};
/* End PBXProject section */

/* Begin PBXResourcesBuildPhase section */
		A1000000000000000000000E /* Resources */ = {
			isa = PBXResourcesBuildPhase;
			buildActionMask = 2147483647;
			files = (
				A10000000000000000000011 /* shared in Resources */,
			);
			runOnlyForDeploymentPostprocessing = 0;
		};
/* End PBXResourcesBuildPhase section */

/* Begin PBXSourcesBuildPhase section */
		A1000000000000000000000C /* Sources */ = {
			isa = PBXSourcesBuildPhase;
			buildActionMask = 2147483647;
			files = (
			);
			runOnlyForDeploymentPostprocessing = 0;
		};
/* End PBXSourcesBuildPhase section */

/* Begin XCBuildConfiguration section */
		A10000000000000000000007 /* Debug */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				ALWAYS_SEARCH_USER_PATHS = NO;
				COPY_PHASE_STRIP = NO;
				DEBUG_INFORMATION_FORMAT = dwarf;
				ENABLE_TESTABILITY = YES;
				GCC_OPTIMIZATION_LEVEL = 0;
				IPHONEOS_DEPLOYMENT_TARGET = 17.0;
				ONLY_ACTIVE_ARCH = YES;
				SDKROOT = iphoneos;
				SWIFT_ACTIVE_COMPILATION_CONDITIONS = "DEBUG $(inherited)";
				SWIFT_OPTIMIZATION_LEVEL = "-Onone";
				SWIFT_VERSION = 5.0;
			};
			name = Debug;
		};
		A10000000000000000000008 /* Release */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				ALWAYS_SEARCH_USER_PATHS = NO;
				COPY_PHASE_STRIP = NO;
				DEBUG_INFORMATION_FORMAT = "dwarf-with-dsym";
				ENABLE_NS_ASSERTIONS = NO;
				IPHONEOS_DEPLOYMENT_TARGET = 17.0;
				SDKROOT = iphoneos;
				SWIFT_COMPILATION_MODE = wholemodule;
				SWIFT_VERSION = 5.0;
				VALIDATE_PRODUCT = YES;
			};
			name = Release;
		};
		A1000000000000000000000A /* Debug */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				CODE_SIGN_STYLE = Automatic;
				CURRENT_PROJECT_VERSION = 1;
				ENABLE_PREVIEWS = YES;
				GENERATE_INFOPLIST_FILE = YES;
				INFOPLIST_KEY_CFBundleDisplayName = "Dr. Dost";
				INFOPLIST_KEY_UILaunchScreen_Generation = YES;
				INFOPLIST_KEY_UISupportedInterfaceOrientations = UIInterfaceOrientationPortrait;
				LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";
				MARKETING_VERSION = 1.0;
				PRODUCT_BUNDLE_IDENTIFIER = de.silvamed.drdost;
				PRODUCT_NAME = "$(TARGET_NAME)";
				SWIFT_EMIT_LOC_STRINGS = YES;
				TARGETED_DEVICE_FAMILY = 1;
			};
			name = Debug;
		};
		A1000000000000000000000B /* Release */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				CODE_SIGN_STYLE = Automatic;
				CURRENT_PROJECT_VERSION = 1;
				ENABLE_PREVIEWS = YES;
				GENERATE_INFOPLIST_FILE = YES;
				INFOPLIST_KEY_CFBundleDisplayName = "Dr. Dost";
				INFOPLIST_KEY_UILaunchScreen_Generation = YES;
				INFOPLIST_KEY_UISupportedInterfaceOrientations = UIInterfaceOrientationPortrait;
				LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";
				MARKETING_VERSION = 1.0;
				PRODUCT_BUNDLE_IDENTIFIER = de.silvamed.drdost;
				PRODUCT_NAME = "$(TARGET_NAME)";
				SWIFT_EMIT_LOC_STRINGS = YES;
				TARGETED_DEVICE_FAMILY = 1;
			};
			name = Release;
		};
/* End XCBuildConfiguration section */

/* Begin XCConfigurationList section */
		A10000000000000000000006 /* Build configuration list for PBXProject "DrDost" */ = {
			isa = XCConfigurationList;
			buildConfigurations = (
				A10000000000000000000007 /* Debug */,
				A10000000000000000000008 /* Release */,
			);
			defaultConfigurationIsVisible = 0;
			defaultConfigurationName = Release;
		};
		A10000000000000000000009 /* Build configuration list for PBXNativeTarget "DrDost" */ = {
			isa = XCConfigurationList;
			buildConfigurations = (
				A1000000000000000000000A /* Debug */,
				A1000000000000000000000B /* Release */,
			);
			defaultConfigurationIsVisible = 0;
			defaultConfigurationName = Release;
		};
/* End XCConfigurationList section */

/* Begin XCLocalSwiftPackageReference section */
		A10000000000000000000012 /* XCLocalSwiftPackageReference "DrDostKit" */ = {
			isa = XCLocalSwiftPackageReference;
			relativePath = DrDostKit;
		};
/* End XCLocalSwiftPackageReference section */

/* Begin XCSwiftPackageProductDependency section */
		A10000000000000000000013 /* DrDostKit */ = {
			isa = XCSwiftPackageProductDependency;
			productName = DrDostKit;
		};
/* End XCSwiftPackageProductDependency section */
	};
	rootObject = A10000000000000000000001 /* Project object */;
}
```

Note: the file uses TAB indentation (as above) — Xcode's canonical pbxproj format.

- [ ] **Step 3: Create `ios/DrDost/DrDostApp.swift`:**

```swift
import SwiftUI
import DrDostKit

@main
struct DrDostApp: App {
    var body: some Scene {
        WindowGroup {
            RootView()
        }
    }
}

struct RootView: View {
    @State private var content: SiteContent?
    @State private var failed = false

    var body: some View {
        Group {
            if let content {
                MainTabView(content: content)
            } else if failed {
                ContentUnavailableView(
                    "Inhalte konnten nicht geladen werden",
                    systemImage: "exclamationmark.triangle"
                )
            } else {
                ProgressView()
            }
        }
        .task { load() }
    }

    private func load() {
        guard let url = Bundle.main.url(
            forResource: "content", withExtension: "json", subdirectory: "shared"
        ) else {
            assertionFailure("shared/content.json missing from app bundle")
            failed = true
            return
        }
        do {
            content = try ContentLoader.load(from: url)
        } catch {
            assertionFailure("content.json failed to decode: \(error)")
            failed = true
        }
    }
}

// Stub — replaced by the real tab UI in the next task.
struct MainTabView: View {
    let content: SiteContent
    var body: some View {
        Text(content.praxis.brand)
    }
}
```

- [ ] **Step 4: Verify the target and build for simulator**

Run: `cd ios && xcodebuild -list -project DrDost.xcodeproj`
Expected: target and (implicit) scheme `DrDost` listed.

Run: `cd ios && xcodebuild -project DrDost.xcodeproj -scheme DrDost -destination 'generic/platform=iOS Simulator' CODE_SIGNING_ALLOWED=NO build`
Expected: `** BUILD SUCCEEDED **`. If pbxproj parsing fails, diff the file against Step 2 byte-for-byte (tabs, IDs) before changing anything structural.

- [ ] **Step 5: Verify the bundle contains the shared content**

Run: `ls ~/Library/Developer/Xcode/DerivedData/DrDost-*/Build/Products/Debug-iphonesimulator/DrDost.app/shared/`
Expected: `assets  content.json`.

- [ ] **Step 6: Commit**

```bash
git add ios/.gitignore ios/DrDost.xcodeproj ios/DrDost
git commit -m "feat(ios): app target with hand-authored pbxproj, bundles shared content"
```

---

### Task 5: iOS screens — tabs, lists, detail, gallery, info, contact actions

All SwiftUI views. New files land in `ios/DrDost/` — the synchronized group picks them up automatically, no pbxproj change. Verification is the simulator build (UI behavior is verified live in Task 9).

**Files:**
- Modify: `ios/DrDost/DrDostApp.swift` (delete the stub `MainTabView`)
- Create: `ios/DrDost/MainTabView.swift`
- Create: `ios/DrDost/SharedImage.swift`
- Create: `ios/DrDost/ContactRows.swift`
- Create: `ios/DrDost/StartView.swift`
- Create: `ios/DrDost/TopicViews.swift`
- Create: `ios/DrDost/GalerieView.swift`
- Create: `ios/DrDost/InfoView.swift`

**Interfaces:**
- Consumes: all `DrDostKit` types from Task 3; bundled images at `Bundle.main.resourceURL/shared/assets/<path>`.
- Produces: `MainTabView(content: SiteContent)` (same signature the stub had — `RootView` needs no change).

- [ ] **Step 1: Remove the stub** — delete the `// Stub — replaced by…` comment and the `struct MainTabView` at the bottom of `ios/DrDost/DrDostApp.swift`.

- [ ] **Step 2: Create `ios/DrDost/MainTabView.swift`:**

```swift
import SwiftUI
import DrDostKit

struct MainTabView: View {
    let content: SiteContent

    var body: some View {
        TabView {
            StartView(content: content)
                .tabItem { Label("Start", systemImage: "house") }
            TopicListView(title: "Behandlungen", topics: content.behandlungen)
                .tabItem { Label("Behandlungen", systemImage: "cross.case") }
            TopicListView(title: "Fachbereiche", topics: content.fachbereiche)
                .tabItem { Label("Fachbereiche", systemImage: "stethoscope") }
            GalerieView(images: content.galerie)
                .tabItem { Label("Galerie", systemImage: "photo.on.rectangle") }
            InfoView(content: content)
                .tabItem { Label("Info", systemImage: "info.circle") }
        }
    }
}
```

- [ ] **Step 3: Create `ios/DrDost/SharedImage.swift`:**

```swift
import SwiftUI

/// Renders an image bundled under shared/assets/<path>.
/// Falls back to a warm gradient, matching the website's imageless topics.
struct SharedImage: View {
    let path: String?
    var contentMode: ContentMode = .fill

    var body: some View {
        if let uiImage {
            Image(uiImage: uiImage)
                .resizable()
                .aspectRatio(contentMode: contentMode)
        } else {
            LinearGradient(
                colors: [
                    Color(red: 0.93, green: 0.89, blue: 0.83),
                    Color(red: 0.82, green: 0.74, blue: 0.64),
                ],
                startPoint: .topLeading,
                endPoint: .bottomTrailing
            )
        }
    }

    private var uiImage: UIImage? {
        guard let path, let base = Bundle.main.resourceURL else { return nil }
        return UIImage(contentsOfFile: base.appendingPathComponent("shared/assets/\(path)").path)
    }
}
```

- [ ] **Step 4: Create `ios/DrDost/ContactRows.swift`:**

```swift
import SwiftUI
import DrDostKit

enum ContactActions {
    static func telURL(_ number: String) -> URL? {
        let digits = number.filter { $0.isNumber || $0 == "+" }
        return digits.isEmpty ? nil : URL(string: "tel:\(digits)")
    }

    static func mailURL(_ address: String) -> URL? {
        URL(string: "mailto:\(address)")
    }

    static func mapsURL(_ address: String) -> URL? {
        guard let q = address.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed)
        else { return nil }
        return URL(string: "maps://?q=\(q)")
    }
}

/// A labelled contact row that is tappable only for real (non-placeholder) values.
struct ContactRow: View {
    let icon: String
    let label: String
    let value: String
    let url: (String) -> URL?

    var body: some View {
        if ContactValue.isReal(value), let destination = url(value) {
            Link(destination: destination) { row }
        } else {
            row.foregroundStyle(.secondary)
        }
    }

    private var row: some View {
        Label {
            VStack(alignment: .leading, spacing: 2) {
                Text(label).font(.caption).foregroundStyle(.secondary)
                Text(value)
            }
        } icon: {
            Image(systemName: icon)
        }
    }
}
```

- [ ] **Step 5: Create `ios/DrDost/StartView.swift`:**

```swift
import SwiftUI
import DrDostKit

struct StartView: View {
    let content: SiteContent

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 24) {
                    SharedImage(path: content.arzt.portrait)
                        .frame(maxWidth: .infinity)
                        .frame(height: 320)
                        .clipShape(RoundedRectangle(cornerRadius: 16))
                        .accessibilityLabel(content.arzt.name)

                    Text(content.praxis.tagline)
                        .font(.title2.weight(.semibold))
                        .fontDesign(.serif)

                    VStack(alignment: .leading, spacing: 4) {
                        Text(content.arzt.name).font(.headline)
                        Text(content.arzt.qualifications)
                            .font(.subheadline)
                            .foregroundStyle(.secondary)
                    }

                    ForEach(content.arzt.intro + content.arzt.bio, id: \.self) { paragraph in
                        Text(paragraph)
                    }

                    KontaktCard(praxis: content.praxis)
                }
                .padding()
            }
            .navigationTitle(content.praxis.brand)
        }
    }
}

struct KontaktCard: View {
    let praxis: Praxis

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Kontakt").font(.title3.weight(.semibold)).fontDesign(.serif)
            ContactRow(icon: "mappin.and.ellipse", label: "Adresse",
                       value: praxis.address, url: ContactActions.mapsURL)
            ContactRow(icon: "phone", label: "Telefon",
                       value: praxis.phone, url: ContactActions.telURL)
            ContactRow(icon: "iphone", label: "Mobil",
                       value: praxis.mobile, url: ContactActions.telURL)
            ContactRow(icon: "envelope", label: "E-Mail",
                       value: praxis.email, url: ContactActions.mailURL)
            Label {
                VStack(alignment: .leading, spacing: 2) {
                    Text("Sprechzeiten").font(.caption).foregroundStyle(.secondary)
                    Text(praxis.hours)
                }
            } icon: {
                Image(systemName: "clock")
            }
        }
        .padding()
        .frame(maxWidth: .infinity, alignment: .leading)
        .background(RoundedRectangle(cornerRadius: 16).fill(Color(.secondarySystemBackground)))
    }
}
```

- [ ] **Step 6: Create `ios/DrDost/TopicViews.swift`:**

```swift
import SwiftUI
import DrDostKit

struct TopicListView: View {
    let title: String
    let topics: [Topic]

    var body: some View {
        NavigationStack {
            List(topics) { topic in
                NavigationLink(value: topic) {
                    VStack(alignment: .leading, spacing: 4) {
                        Text(topic.title).font(.headline)
                        Text(topic.excerpt)
                            .font(.subheadline)
                            .foregroundStyle(.secondary)
                            .lineLimit(3)
                    }
                    .padding(.vertical, 4)
                }
            }
            .navigationTitle(title)
            .navigationDestination(for: Topic.self) { topic in
                TopicDetailView(topic: topic)
            }
        }
    }
}

struct TopicDetailView: View {
    let topic: Topic

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 16) {
                SharedImage(path: topic.image)
                    .frame(maxWidth: .infinity)
                    .frame(height: 220)
                    .clipShape(RoundedRectangle(cornerRadius: 16))
                    .accessibilityLabel(topic.imageAlt ?? topic.title)

                Text(topic.title)
                    .font(.title.weight(.semibold))
                    .fontDesign(.serif)

                ForEach(topic.body, id: \.self) { paragraph in
                    Text(paragraph)
                }
            }
            .padding()
        }
        .navigationTitle(topic.title)
        .navigationBarTitleDisplayMode(.inline)
    }
}
```

- [ ] **Step 7: Create `ios/DrDost/GalerieView.swift`:**

```swift
import SwiftUI
import DrDostKit

struct GalerieView: View {
    let images: [GalleryImage]
    @State private var selected: GalleryImage?

    private let columns = [GridItem(.adaptive(minimum: 150), spacing: 8)]

    var body: some View {
        NavigationStack {
            ScrollView {
                LazyVGrid(columns: columns, spacing: 8) {
                    ForEach(images) { image in
                        Button {
                            selected = image
                        } label: {
                            SharedImage(path: image.image)
                                .frame(height: 150)
                                .clipShape(RoundedRectangle(cornerRadius: 12))
                        }
                        .accessibilityLabel(image.alt)
                    }
                }
                .padding()
            }
            .navigationTitle("Galerie")
            .fullScreenCover(item: $selected) { image in
                PhotoViewer(images: images, current: image)
            }
        }
    }
}

struct PhotoViewer: View {
    let images: [GalleryImage]
    @State var current: GalleryImage
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        NavigationStack {
            TabView(selection: $current) {
                ForEach(images) { image in
                    ZoomableImage(path: image.image)
                        .tag(image)
                        .accessibilityLabel(image.alt)
                }
            }
            .tabViewStyle(.page)
            .background(.black)
            .toolbar {
                ToolbarItem(placement: .topBarTrailing) {
                    Button("Schließen") { dismiss() }
                }
            }
        }
    }
}

struct ZoomableImage: View {
    let path: String
    @State private var scale: CGFloat = 1

    var body: some View {
        SharedImage(path: path, contentMode: .fit)
            .scaleEffect(scale)
            .gesture(
                MagnifyGesture()
                    .onChanged { value in scale = max(1, value.magnification) }
                    .onEnded { _ in withAnimation { scale = 1 } }
            )
    }
}
```

- [ ] **Step 8: Create `ios/DrDost/InfoView.swift`:**

```swift
import SwiftUI
import DrDostKit

struct InfoView: View {
    let content: SiteContent

    var body: some View {
        NavigationStack {
            List {
                Section("Praxis") {
                    LabeledContent("Sprechzeiten", value: content.praxis.hours)
                }
                Section("Rechtliches") {
                    NavigationLink("Impressum") {
                        LegalTextView(title: "Impressum", paragraphs: content.legal.impressum)
                    }
                    NavigationLink("Datenschutz") {
                        LegalTextView(title: "Datenschutz", paragraphs: content.legal.datenschutz)
                    }
                }
            }
            .navigationTitle("Info")
        }
    }
}

struct LegalTextView: View {
    let title: String
    let paragraphs: [String]

    var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 16) {
                ForEach(paragraphs, id: \.self) { paragraph in
                    Text(paragraph)
                }
            }
            .padding()
        }
        .navigationTitle(title)
        .navigationBarTitleDisplayMode(.inline)
    }
}
```

- [ ] **Step 9: Build and run package tests**

Run: `cd ios && xcodebuild -project DrDost.xcodeproj -scheme DrDost -destination 'generic/platform=iOS Simulator' CODE_SIGNING_ALLOWED=NO build`
Expected: `** BUILD SUCCEEDED **`.

Run: `cd ios/DrDostKit && swift test`
Expected: PASS.

- [ ] **Step 10: Commit**

```bash
git add ios/DrDost
git commit -m "feat(ios): tab UI with Start, Behandlungen, Fachbereiche, Galerie and Info"
```

---

### Task 6: Android project scaffold — buildable hello app

Standard single-module Gradle project. `../shared` is mounted as an asset source dir, so `content.json` lands at APK asset root and images under `assets/…` (the `shared/assets/` subfolder name becomes part of the asset path — `AssetManager.open("assets/topics/x.jpg")` — intentional, don't "fix" it).

**Files:**
- Create: `android/gradle/wrapper/gradle-wrapper.properties` (+ downloaded `gradle-wrapper.jar`, `gradlew`, `gradlew.bat`)
- Create: `android/settings.gradle.kts`, `android/build.gradle.kts`, `android/gradle.properties`, `android/.gitignore`, `android/local.properties` (gitignored)
- Create: `android/app/build.gradle.kts`, `android/app/src/main/AndroidManifest.xml`
- Create: `android/app/src/main/java/de/silvamed/drdost/MainActivity.kt` (placeholder, finished in Task 8)

**Interfaces:**
- Produces: `JAVA_HOME=/opt/homebrew/opt/openjdk@21 ./gradlew :app:assembleDebug` builds an installable debug APK with the shared content bundled; namespace/applicationId `de.silvamed.drdost`; Tasks 7–8 add code under `android/app/src/{main,test}/java/de/silvamed/drdost/`.

- [ ] **Step 1: Ensure JDK 21** (system Java 25 is too new for Gradle 8.14)

Run: `ls /opt/homebrew/opt/openjdk@21/bin/java 2>/dev/null || brew install openjdk@21`
Then: `/opt/homebrew/opt/openjdk@21/bin/java -version`
Expected: `openjdk version "21.x"`.

- [ ] **Step 2: Fetch the Gradle wrapper** (no local Gradle installation exists)

```bash
mkdir -p android/gradle/wrapper
curl -fsSL -o android/gradle/wrapper/gradle-wrapper.jar https://raw.githubusercontent.com/gradle/gradle/v8.14.3/gradle/wrapper/gradle-wrapper.jar
curl -fsSL -o android/gradlew https://raw.githubusercontent.com/gradle/gradle/v8.14.3/gradlew
curl -fsSL -o android/gradlew.bat https://raw.githubusercontent.com/gradle/gradle/v8.14.3/gradlew.bat
chmod +x android/gradlew
```

Create `android/gradle/wrapper/gradle-wrapper.properties`:

```properties
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-8.14.3-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```

- [ ] **Step 3: Root Gradle files**

`android/settings.gradle.kts`:

```kotlin
pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}
rootProject.name = "drdost"
include(":app")
```

`android/build.gradle.kts`:

```kotlin
plugins {
    id("com.android.application") version "8.13.0" apply false
    id("org.jetbrains.kotlin.android") version "2.2.20" apply false
    id("org.jetbrains.kotlin.plugin.compose") version "2.2.20" apply false
    id("org.jetbrains.kotlin.plugin.serialization") version "2.2.20" apply false
}
```

`android/gradle.properties`:

```properties
org.gradle.jvmargs=-Xmx2048m -Dfile.encoding=UTF-8
android.useAndroidX=true
```

`android/.gitignore`:

```gitignore
.gradle/
build/
local.properties
.kotlin/
```

`android/local.properties` (gitignored, machine-specific):

```properties
sdk.dir=/Users/aniruddhzaveri/Library/Android/sdk
```

- [ ] **Step 4: App module** — `android/app/build.gradle.kts`:

```kotlin
plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.compose")
    id("org.jetbrains.kotlin.plugin.serialization")
}

android {
    namespace = "de.silvamed.drdost"
    // Only android-34 is installed locally; do not bump (see plan Global Constraints).
    compileSdk = 34

    defaultConfig {
        applicationId = "de.silvamed.drdost"
        minSdk = 26
        targetSdk = 34
        versionCode = 1
        versionName = "1.0"
    }

    sourceSets {
        getByName("main") {
            // Single source of truth: shared/content.json + shared/assets/** from the repo root.
            assets.srcDir(rootProject.projectDir.resolve("../shared"))
        }
    }

    buildFeatures {
        compose = true
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}

kotlin {
    compilerOptions {
        jvmTarget.set(org.jetbrains.kotlin.gradle.dsl.JvmTarget.JVM_17)
    }
}

dependencies {
    implementation(platform("androidx.compose:compose-bom:2024.09.03"))
    implementation("androidx.compose.material3:material3")
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.material:material-icons-extended")
    implementation("androidx.activity:activity-compose:1.9.2")
    implementation("androidx.navigation:navigation-compose:2.8.0")
    implementation("androidx.core:core-ktx:1.13.1")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.7.3")
    testImplementation("junit:junit:4.13.2")
}
```

`android/app/src/main/AndroidManifest.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
    <application
        android:label="Dr. Dost"
        android:supportsRtl="true"
        android:theme="@android:style/Theme.Material.Light.NoActionBar">
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

`android/app/src/main/java/de/silvamed/drdost/MainActivity.kt` (placeholder, finished in Task 8):

```kotlin
package de.silvamed.drdost

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MaterialTheme {
                Text("Dr. Dost")
            }
        }
    }
}
```

- [ ] **Step 5: Build and verify the shared content is bundled**

Run: `cd android && JAVA_HOME=/opt/homebrew/opt/openjdk@21 ./gradlew :app:assembleDebug`
Expected: `BUILD SUCCESSFUL` (first run downloads Gradle + dependencies; allow several minutes).

Run: `unzip -l android/app/build/outputs/apk/debug/app-debug.apk | grep -E "content.json|arzt-portrait"`
Expected: `assets/content.json` and `assets/assets/arzt-portrait.jpg` are listed (APK prefixes everything with `assets/`).

- [ ] **Step 6: Commit**

```bash
git add android/
git commit -m "feat(android): Compose app scaffold bundling shared content as assets"
```

Confirm `git status` shows `android/local.properties` NOT staged (gitignored).

---

### Task 7: Android content layer — models, parser, placeholder guard

**Files:**
- Create: `android/app/src/main/java/de/silvamed/drdost/content/Content.kt`
- Test: `android/app/src/test/java/de/silvamed/drdost/content/ContentTest.kt`

**Interfaces:**
- Consumes: `shared/content.json` (Task 2 shape).
- Produces (used by Task 8): `SiteContent(praxis, arzt, legal, behandlungen: List<Topic>, fachbereiche: List<Topic>, galerie: List<GalleryImage>)`; `Praxis(brand, tagline, address, phone, mobile, email, hours: String)`; `Arzt(name, qualifications: String, intro, bio: List<String>, portrait: String?)`; `Legal(impressum, datenschutz: List<String>)`; `Topic(slug, title, excerpt: String, body: List<String>, image: String?, imageAlt: String?)`; `GalleryImage(image: String, alt: String)`; `ContentLoader.parse(text: String): SiteContent`; `ContactValue.isReal(value: String): Boolean`.

- [ ] **Step 1: Write the failing test** — `android/app/src/test/java/de/silvamed/drdost/content/ContentTest.kt`:

```kotlin
package de.silvamed.drdost.content

import java.io.File
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class ContentTest {
    // Unit tests run with workingDir = android/app, so the repo root is ../..
    private val json = File("../../shared/content.json").readText()

    @Test
    fun parsesSharedContentJson() {
        val content = ContentLoader.parse(json)
        assertEquals("Dr. Dost", content.praxis.brand)
        assertEquals(11, content.behandlungen.size)
        assertEquals(8, content.fachbereiche.size)
        assertEquals(8, content.galerie.size)
        assertEquals("arzt-portrait.jpg", content.arzt.portrait)
        assertEquals("topics/allergiebehandlung.jpg", content.behandlungen.first().image)
        assertTrue(content.legal.impressum.isNotEmpty())
    }

    @Test
    fun placeholderValuesAreNotReal() {
        assertFalse(ContactValue.isReal("Telefonnummer folgt"))
        assertFalse(ContactValue.isReal("Adresse folgt"))
        assertFalse(ContactValue.isReal("   "))
        assertTrue(ContactValue.isReal("dr.dost@silvamed.de"))
        assertTrue(ContactValue.isReal("+49 871 123456"))
    }
}
```

- [ ] **Step 2: Run to verify it fails**

Run: `cd android && JAVA_HOME=/opt/homebrew/opt/openjdk@21 ./gradlew :app:testDebugUnitTest`
Expected: FAIL — unresolved `ContentLoader` (compile error).

- [ ] **Step 3: Implement** — `android/app/src/main/java/de/silvamed/drdost/content/Content.kt`:

```kotlin
package de.silvamed.drdost.content

import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

@Serializable
data class SiteContent(
    val praxis: Praxis,
    val arzt: Arzt,
    val legal: Legal,
    val behandlungen: List<Topic>,
    val fachbereiche: List<Topic>,
    val galerie: List<GalleryImage>,
)

@Serializable
data class Praxis(
    val brand: String,
    val tagline: String,
    val address: String,
    val phone: String,
    val mobile: String,
    val email: String,
    val hours: String,
)

@Serializable
data class Arzt(
    val name: String,
    val qualifications: String,
    val intro: List<String>,
    val bio: List<String>,
    val portrait: String? = null,
)

@Serializable
data class Legal(
    val impressum: List<String>,
    val datenschutz: List<String>,
)

@Serializable
data class Topic(
    val slug: String,
    val title: String,
    val excerpt: String,
    val body: List<String>,
    val image: String? = null,
    val imageAlt: String? = null,
)

@Serializable
data class GalleryImage(
    val image: String,
    val alt: String,
)

object ContentLoader {
    private val json = Json { ignoreUnknownKeys = true }
    fun parse(text: String): SiteContent = json.decodeFromString(text)
}

object ContactValue {
    /** Placeholder texts like "Telefonnummer folgt" must never become tappable actions. */
    fun isReal(value: String): Boolean {
        val v = value.trim()
        return v.isNotEmpty() && !v.lowercase().contains("folgt")
    }
}
```

- [ ] **Step 4: Run to verify it passes**

Run: `cd android && JAVA_HOME=/opt/homebrew/opt/openjdk@21 ./gradlew :app:testDebugUnitTest`
Expected: `BUILD SUCCESSFUL`, 2 tests passed.

- [ ] **Step 5: Commit**

```bash
git add android/app/src
git commit -m "feat(android): content models, JSON parser and placeholder guard with tests"
```

---

### Task 8: Android screens — navigation, lists, detail, gallery, info, contact intents

**Files:**
- Modify: `android/app/src/main/java/de/silvamed/drdost/MainActivity.kt`
- Create in `android/app/src/main/java/de/silvamed/drdost/ui/`: `DrDostApp.kt`, `AssetImage.kt`, `Contact.kt`, `StartScreen.kt`, `TopicScreens.kt`, `GalerieScreens.kt`, `InfoScreens.kt`

**Interfaces:**
- Consumes: everything from Task 7's `content` package; APK assets at `assets/<path>` (e.g. `assets/topics/x.jpg`) and `content.json` at asset root.
- Produces: `DrDostApp(content: SiteContent)` composable — the app's whole UI.

- [ ] **Step 1: Finish `MainActivity.kt`:**

```kotlin
package de.silvamed.drdost

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import de.silvamed.drdost.content.ContentLoader
import de.silvamed.drdost.ui.DrDostApp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Bundled asset; failure to load is a programming error. Fail fast in
        // debug (runCatching keeps release at a minimal error screen instead).
        val content = runCatching {
            ContentLoader.parse(assets.open("content.json").bufferedReader().use { it.readText() })
        }.onFailure { if (BuildConfig.DEBUG) throw it }.getOrNull()
        setContent {
            MaterialTheme(colorScheme = lightColorScheme()) {
                if (content == null) ErrorScreen() else DrDostApp(content)
            }
        }
    }
}

@Composable
private fun ErrorScreen() {
    Box(Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
        Text("Inhalte konnten nicht geladen werden")
    }
}
```

Note: `BuildConfig` requires `buildFeatures { buildConfig = true }` in `android/app/build.gradle.kts` — add that line to the existing `buildFeatures` block.

- [ ] **Step 2: Create `ui/AssetImage.kt`:**

```kotlin
package de.silvamed.drdost.ui

import android.graphics.BitmapFactory
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.produceState
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.ImageBitmap
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

/** Renders an image bundled under shared/assets/<path> (APK path assets/<path>).
 *  Falls back to a warm gradient, matching the website's imageless topics. */
@Composable
fun AssetImage(
    path: String?,
    contentDescription: String?,
    modifier: Modifier = Modifier,
    contentScale: ContentScale = ContentScale.Crop,
) {
    val context = LocalContext.current
    val bitmap by produceState<ImageBitmap?>(initialValue = null, path) {
        value = if (path == null) null else withContext(Dispatchers.IO) {
            runCatching {
                context.assets.open("assets/$path").use { BitmapFactory.decodeStream(it) }
            }.getOrNull()?.asImageBitmap()
        }
    }
    val loaded = bitmap
    if (loaded != null) {
        Image(loaded, contentDescription, modifier, contentScale = contentScale)
    } else {
        Box(modifier.background(Brush.linearGradient(listOf(Color(0xFFEDE3D4), Color(0xFFD1BDA3)))))
    }
}
```

- [ ] **Step 3: Create `ui/Contact.kt`:**

```kotlin
package de.silvamed.drdost.ui

import android.content.Context
import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp
import androidx.core.net.toUri
import de.silvamed.drdost.content.ContactValue

fun Context.dial(number: String) {
    val digits = number.filter { it.isDigit() || it == '+' }
    startActivity(Intent(Intent.ACTION_DIAL, "tel:$digits".toUri()))
}

fun Context.emailTo(address: String) {
    startActivity(Intent(Intent.ACTION_SENDTO, "mailto:$address".toUri()))
}

fun Context.openMaps(query: String) {
    startActivity(Intent(Intent.ACTION_VIEW, ("geo:0,0?q=" + Uri.encode(query)).toUri()))
}

/** A labelled contact row that is tappable only for real (non-placeholder) values. */
@Composable
fun ContactRow(icon: ImageVector, label: String, value: String, action: (() -> Unit)?) {
    val enabled = action != null && ContactValue.isReal(value)
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .then(if (enabled) Modifier.clickable { action?.invoke() } else Modifier)
            .padding(vertical = 4.dp),
        horizontalArrangement = Arrangement.spacedBy(12.dp),
        verticalAlignment = Alignment.CenterVertically,
    ) {
        Icon(
            icon,
            contentDescription = null,
            tint = if (enabled) MaterialTheme.colorScheme.primary
                   else MaterialTheme.colorScheme.onSurfaceVariant,
        )
        Column {
            Text(label, style = MaterialTheme.typography.labelSmall,
                 color = MaterialTheme.colorScheme.onSurfaceVariant)
            Text(value, color = if (enabled) MaterialTheme.colorScheme.primary
                                else MaterialTheme.colorScheme.onSurface)
        }
    }
}
```

- [ ] **Step 4: Create `ui/StartScreen.kt`:**

```kotlin
package de.silvamed.drdost.ui

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Phone
import androidx.compose.material.icons.filled.Place
import androidx.compose.material.icons.filled.Schedule
import androidx.compose.material.icons.filled.Smartphone
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.unit.dp
import de.silvamed.drdost.content.Praxis
import de.silvamed.drdost.content.SiteContent

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun StartScreen(content: SiteContent) {
    Scaffold(topBar = { TopAppBar(title = { Text(content.praxis.brand) }) }) { padding ->
        LazyColumn(contentPadding = padding, modifier = Modifier.padding(horizontal = 16.dp)) {
            item {
                AssetImage(
                    path = content.arzt.portrait,
                    contentDescription = content.arzt.name,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(320.dp)
                        .clip(RoundedCornerShape(16.dp)),
                )
            }
            item {
                Text(
                    content.praxis.tagline,
                    style = MaterialTheme.typography.headlineSmall.copy(fontFamily = FontFamily.Serif),
                    modifier = Modifier.padding(top = 24.dp),
                )
            }
            item {
                Column(Modifier.padding(top = 16.dp)) {
                    Text(content.arzt.name, style = MaterialTheme.typography.titleMedium)
                    Text(
                        content.arzt.qualifications,
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                    )
                }
            }
            items((content.arzt.intro + content.arzt.bio).size) { i ->
                Text((content.arzt.intro + content.arzt.bio)[i], Modifier.padding(top = 16.dp))
            }
            item { KontaktCard(content.praxis, Modifier.padding(top = 24.dp)) }
            item { Spacer(Modifier.height(24.dp)) }
        }
    }
}

@Composable
fun KontaktCard(praxis: Praxis, modifier: Modifier = Modifier) {
    val context = LocalContext.current
    ElevatedCard(modifier.fillMaxWidth()) {
        Column(Modifier.padding(16.dp)) {
            Text(
                "Kontakt",
                style = MaterialTheme.typography.titleLarge.copy(fontFamily = FontFamily.Serif),
                modifier = Modifier.padding(bottom = 8.dp),
            )
            ContactRow(Icons.Filled.Place, "Adresse", praxis.address) { context.openMaps(praxis.address) }
            ContactRow(Icons.Filled.Phone, "Telefon", praxis.phone) { context.dial(praxis.phone) }
            ContactRow(Icons.Filled.Smartphone, "Mobil", praxis.mobile) { context.dial(praxis.mobile) }
            ContactRow(Icons.Filled.Email, "E-Mail", praxis.email) { context.emailTo(praxis.email) }
            ContactRow(Icons.Filled.Schedule, "Sprechzeiten", praxis.hours, action = null)
        }
    }
}
```

Note the `items((content.arzt.intro + content.arzt.bio).size)` form — `LazyListScope.items(List)` needs the `androidx.compose.foundation.lazy.items` extension import when used with a list; the index form above avoids the import ambiguity with the icon imports. Either form is fine as long as it compiles.

- [ ] **Step 5: Create `ui/TopicScreens.kt`:**

```kotlin
package de.silvamed.drdost.ui

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import de.silvamed.drdost.content.Topic

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopicListScreen(title: String, topics: List<Topic>, onOpen: (Topic) -> Unit) {
    Scaffold(topBar = { TopAppBar(title = { Text(title) }) }) { padding ->
        LazyColumn(contentPadding = padding) {
            items(topics, key = { it.slug }) { topic ->
                Column(
                    Modifier
                        .fillMaxWidth()
                        .clickable { onOpen(topic) }
                        .padding(horizontal = 16.dp, vertical = 12.dp)
                ) {
                    Text(topic.title, style = MaterialTheme.typography.titleMedium)
                    Text(
                        topic.excerpt,
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                        maxLines = 3,
                        overflow = TextOverflow.Ellipsis,
                        modifier = Modifier.padding(top = 4.dp),
                    )
                }
                HorizontalDivider()
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun TopicDetailScreen(topic: Topic?, onBack: () -> Unit) {
    Scaffold(topBar = {
        TopAppBar(
            title = {
                Text(topic?.title ?: "Nicht gefunden", maxLines = 1, overflow = TextOverflow.Ellipsis)
            },
            navigationIcon = {
                IconButton(onClick = onBack) {
                    Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Zurück")
                }
            },
        )
    }) { padding ->
        if (topic == null) return@Scaffold
        LazyColumn(contentPadding = padding, modifier = Modifier.padding(horizontal = 16.dp)) {
            item {
                AssetImage(
                    path = topic.image,
                    contentDescription = topic.imageAlt ?: topic.title,
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(220.dp)
                        .clip(RoundedCornerShape(16.dp)),
                )
            }
            items(topic.body) { paragraph ->
                Text(paragraph, Modifier.padding(top = 16.dp))
            }
            item { Spacer(Modifier.height(24.dp)) }
        }
    }
}
```

- [ ] **Step 6: Create `ui/GalerieScreens.kt`:**

```kotlin
package de.silvamed.drdost.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.rememberTransformableState
import androidx.compose.foundation.gestures.transformable
import androidx.compose.foundation.layout.aspectRatio
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.itemsIndexed
import androidx.compose.foundation.pager.HorizontalPager
import androidx.compose.foundation.pager.rememberPagerState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableFloatStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.unit.dp
import de.silvamed.drdost.content.GalleryImage

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun GalerieScreen(images: List<GalleryImage>, onOpen: (Int) -> Unit) {
    Scaffold(topBar = { TopAppBar(title = { Text("Galerie") }) }) { padding ->
        LazyVerticalGrid(
            columns = GridCells.Adaptive(minSize = 150.dp),
            contentPadding = padding,
            modifier = Modifier.padding(horizontal = 8.dp),
        ) {
            itemsIndexed(images, key = { _, image -> image.image }) { index, image ->
                AssetImage(
                    path = image.image,
                    contentDescription = image.alt,
                    modifier = Modifier
                        .padding(4.dp)
                        .aspectRatio(1f)
                        .clip(RoundedCornerShape(12.dp))
                        .clickable { onOpen(index) },
                )
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PhotoViewerScreen(images: List<GalleryImage>, initialIndex: Int, onClose: () -> Unit) {
    val pagerState = rememberPagerState(initialPage = initialIndex.coerceIn(0, images.lastIndex)) {
        images.size
    }
    Scaffold(topBar = {
        TopAppBar(
            title = {},
            navigationIcon = {
                IconButton(onClick = onClose) {
                    Icon(Icons.Filled.Close, contentDescription = "Schließen")
                }
            },
        )
    }) { padding ->
        HorizontalPager(
            state = pagerState,
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .background(Color.Black),
        ) { page ->
            ZoomableAssetImage(images[page].image, images[page].alt)
        }
    }
}

@Composable
private fun ZoomableAssetImage(path: String, contentDescription: String) {
    var scale by remember { mutableFloatStateOf(1f) }
    val transformState = rememberTransformableState { zoom, _, _ ->
        scale = (scale * zoom).coerceIn(1f, 4f)
    }
    AssetImage(
        path = path,
        contentDescription = contentDescription,
        contentScale = ContentScale.Fit,
        modifier = Modifier
            .fillMaxSize()
            .graphicsLayer(scaleX = scale, scaleY = scale)
            .transformable(transformState),
    )
}
```

- [ ] **Step 7: Create `ui/InfoScreens.kt`:**

```kotlin
package de.silvamed.drdost.ui

import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ListItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import de.silvamed.drdost.content.SiteContent

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun InfoScreen(content: SiteContent, onNavigate: (String) -> Unit) {
    Scaffold(topBar = { TopAppBar(title = { Text("Info") }) }) { padding ->
        LazyColumn(contentPadding = padding) {
            item {
                ListItem(
                    headlineContent = { Text("Sprechzeiten") },
                    supportingContent = { Text(content.praxis.hours) },
                )
                HorizontalDivider()
            }
            item {
                ListItem(
                    headlineContent = { Text("Impressum") },
                    modifier = Modifier.clickable { onNavigate("info/impressum") },
                )
                HorizontalDivider()
            }
            item {
                ListItem(
                    headlineContent = { Text("Datenschutz") },
                    modifier = Modifier.clickable { onNavigate("info/datenschutz") },
                )
                HorizontalDivider()
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun LegalScreen(title: String, paragraphs: List<String>, onBack: () -> Unit) {
    Scaffold(topBar = {
        TopAppBar(
            title = { Text(title) },
            navigationIcon = {
                IconButton(onClick = onBack) {
                    Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Zurück")
                }
            },
        )
    }) { padding ->
        LazyColumn(contentPadding = padding, modifier = Modifier.padding(horizontal = 16.dp)) {
            items(paragraphs) { paragraph ->
                Text(paragraph, Modifier.padding(top = 16.dp))
            }
            item { Spacer(Modifier.height(24.dp)) }
        }
    }
}
```

- [ ] **Step 8: Create `ui/DrDostApp.kt`:**

```kotlin
package de.silvamed.drdost.ui

import androidx.compose.foundation.layout.padding
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.HealthAndSafety
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.MedicalServices
import androidx.compose.material.icons.filled.PhotoLibrary
import androidx.compose.material3.Icon
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.style.TextOverflow
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import de.silvamed.drdost.content.SiteContent

private data class Dest(val route: String, val label: String, val icon: ImageVector)

private val destinations = listOf(
    Dest("start", "Start", Icons.Filled.Home),
    Dest("behandlungen", "Behandlungen", Icons.Filled.MedicalServices),
    Dest("fachbereiche", "Fachbereiche", Icons.Filled.HealthAndSafety),
    Dest("galerie", "Galerie", Icons.Filled.PhotoLibrary),
    Dest("info", "Info", Icons.Filled.Info),
)

@Composable
fun DrDostApp(content: SiteContent) {
    val navController = rememberNavController()
    Scaffold(bottomBar = {
        val backStack by navController.currentBackStackEntryAsState()
        val currentRoute = backStack?.destination?.route
        NavigationBar {
            destinations.forEach { dest ->
                NavigationBarItem(
                    selected = currentRoute?.startsWith(dest.route) == true,
                    onClick = {
                        navController.navigate(dest.route) {
                            popUpTo(navController.graph.findStartDestination().id) {
                                saveState = true
                            }
                            launchSingleTop = true
                            restoreState = true
                        }
                    },
                    icon = { Icon(dest.icon, contentDescription = dest.label) },
                    label = { Text(dest.label, maxLines = 1, overflow = TextOverflow.Ellipsis) },
                )
            }
        }
    }) { padding ->
        NavHost(
            navController,
            startDestination = "start",
            modifier = Modifier.padding(padding),
        ) {
            composable("start") { StartScreen(content) }
            composable("behandlungen") {
                TopicListScreen("Behandlungen", content.behandlungen) {
                    navController.navigate("behandlungen/${it.slug}")
                }
            }
            composable("behandlungen/{slug}") { entry ->
                val slug = entry.arguments?.getString("slug")
                TopicDetailScreen(content.behandlungen.firstOrNull { it.slug == slug }) {
                    navController.popBackStack()
                }
            }
            composable("fachbereiche") {
                TopicListScreen("Fachbereiche", content.fachbereiche) {
                    navController.navigate("fachbereiche/${it.slug}")
                }
            }
            composable("fachbereiche/{slug}") { entry ->
                val slug = entry.arguments?.getString("slug")
                TopicDetailScreen(content.fachbereiche.firstOrNull { it.slug == slug }) {
                    navController.popBackStack()
                }
            }
            composable("galerie") {
                GalerieScreen(content.galerie) { index ->
                    navController.navigate("galerie/$index")
                }
            }
            composable("galerie/{index}") { entry ->
                val index = entry.arguments?.getString("index")?.toIntOrNull() ?: 0
                PhotoViewerScreen(content.galerie, index) { navController.popBackStack() }
            }
            composable("info") { InfoScreen(content) { route -> navController.navigate(route) } }
            composable("info/impressum") {
                LegalScreen("Impressum", content.legal.impressum) { navController.popBackStack() }
            }
            composable("info/datenschutz") {
                LegalScreen("Datenschutz", content.legal.datenschutz) { navController.popBackStack() }
            }
        }
    }
}
```

- [ ] **Step 9: Build + tests**

Run: `cd android && JAVA_HOME=/opt/homebrew/opt/openjdk@21 ./gradlew :app:assembleDebug :app:testDebugUnitTest`
Expected: `BUILD SUCCESSFUL`. Fix any unresolved-import compile errors by adjusting imports only (all APIs used are in the pinned dependency set).

- [ ] **Step 10: Commit**

```bash
git add android/app
git commit -m "feat(android): Compose UI with bottom navigation mirroring the website"
```

---

### Task 9: Live verification on emulator and simulator

Run both apps for real and confirm content renders. The Android AVD `Pixel_3a_API_34_extension_level_7_arm64-v8a` already exists. The iOS simulator *runtime* is not installed — attempt the download; if it is impractical (multi-GB download fails or stalls), the build + `swift test` from Tasks 3–5 remain the iOS verification and the gap MUST be reported to the user, not glossed over.

**Files:**
- No new files (screenshots go to the session scratchpad, not the repo).

**Interfaces:**
- Consumes: everything previously built.
- Produces: verified, running apps; a final full-suite pass.

- [ ] **Step 1: Full test sweep**

```bash
npm test
(cd ios/DrDostKit && swift test)
(cd android && JAVA_HOME=/opt/homebrew/opt/openjdk@21 ./gradlew :app:testDebugUnitTest)
```

Expected: all PASS.

- [ ] **Step 2: Android — boot emulator, install, launch, screenshot**

```bash
~/Library/Android/sdk/emulator/emulator -avd Pixel_3a_API_34_extension_level_7_arm64-v8a -no-snapshot -no-audio -no-boot-anim &
~/Library/Android/sdk/platform-tools/adb wait-for-device
# wait until `adb shell getprop sys.boot_completed` prints 1 (poll, ~60s)
~/Library/Android/sdk/platform-tools/adb install -r android/app/build/outputs/apk/debug/app-debug.apk
~/Library/Android/sdk/platform-tools/adb shell am start -n de.silvamed.drdost/.MainActivity
sleep 5
~/Library/Android/sdk/platform-tools/adb exec-out screencap -p > <scratchpad>/android-start.png
```

Read the screenshot. Expected: Start screen with portrait photo, "Dr. Dost" top bar, tagline, bottom navigation with 5 German labels. Then tap through one topic + gallery via adb (`adb shell input tap …`) or at minimum screenshot each tab by `am start` + taps, and confirm the Behandlungen list shows 11 entries. Kill the emulator afterwards (`adb emu kill`).

- [ ] **Step 3: iOS — attempt simulator runtime + launch**

```bash
xcodebuild -downloadPlatform iOS   # multi-GB; give it up to ~20 min in background
```

If the runtime becomes available (`xcrun simctl list runtimes` shows iOS 26.x):

```bash
xcrun simctl create "iPhone Test" "iPhone 17" || xcrun simctl list devices  # pick any available iPhone
xcrun simctl boot "iPhone Test"
cd ios && xcodebuild -project DrDost.xcodeproj -scheme DrDost \
  -destination 'platform=iOS Simulator,name=iPhone Test' CODE_SIGNING_ALLOWED=NO build
xcrun simctl install "iPhone Test" ~/Library/Developer/Xcode/DerivedData/DrDost-*/Build/Products/Debug-iphonesimulator/DrDost.app
xcrun simctl launch "iPhone Test" de.silvamed.drdost
sleep 5
xcrun simctl io "iPhone Test" screenshot <scratchpad>/ios-start.png
```

Read the screenshot; expected: same Start screen content with 5-tab bar. Shut the simulator down afterwards.

If the download fails or stalls: skip the launch, and state plainly in the final report that iOS was verified by compile + unit tests only and how the user can run it (`open ios/DrDost.xcodeproj`, ⌘R after Xcode downloads the runtime).

- [ ] **Step 4: Final repo hygiene + commit (if anything changed)**

Run: `git status` — expect clean apart from intentional changes; `npm run build` still succeeds.

```bash
git add -A
git commit -m "chore: final verification fixes for native apps" # only if changes exist
```

---

## Self-Review Notes (already applied)

- Spec coverage: repo layout (T2/T4/T6), export pipeline + freshness test (T2), legal extraction (T1), iOS package/tests (T3), iOS app + tabs + contact guard (T4/T5), Android scaffold/models/UI (T6–T8), error handling (T4 RootView, T8 MainActivity), gradient fallback (T5 SharedImage, T8 AssetImage), live verification (T9). Out-of-scope items (signing, push, CI) correctly absent.
- Type consistency: `MainTabView(content:)` stub (T4) matches real one (T5); JSON shape (T2) matches Swift (T3) and Kotlin (T7) models, including `portrait` nullable and `image: string|null`.
- Known risk points called out inline: pbxproj byte-exactness (T4 Step 4), Compose import ambiguity (T8 Step 4 note), Android asset path double-`assets` prefix (T6 intro), Java 25 vs Gradle (global constraints).
