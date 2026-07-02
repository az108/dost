# Native iOS & Android Apps — Design

**Date:** 2026-07-02
**Status:** Approved

## Goal

Add fully native iOS (SwiftUI) and Android (Kotlin + Jetpack Compose) apps to the
repo, mirroring the Dr. Dost website's content with mobile-native touches. The
repo becomes a monorepo: web app at the root (unchanged), `ios/` and `android/`
folders alongside it, and a `shared/` folder as the single source of truth for
app content.

## Repo layout

```
dost/
├── src/, index.html, vite.config.ts   # existing web app (unchanged)
├── shared/                            # single source of truth for the apps
│   ├── content.json                   # exported from src/content/*.ts
│   └── assets/                        # practice photos + topic images
├── ios/                               # SwiftUI app
└── android/                           # Jetpack Compose app
```

The web app stays at the repo root so the existing GitHub Pages workflow and
paths keep working.

## Content pipeline

- The legal placeholder texts currently live inline in `src/pages/Legal.tsx`;
  they move into a new `src/content/legal.ts` (the page keeps rendering them)
  so all app-visible content lives under `src/content`.
- A script, run via `npm run export:content`, imports `src/content/*.ts`
  (praxis, arzt, behandlungen, fachbereiche, galerie, legal) and writes
  `shared/content.json`. It also copies the referenced images (topic images,
  gallery photos, portrait) into `shared/assets/`.
- Generated files are **committed**. The iOS and Android builds never need
  Node — they bundle `shared/` directly (Xcode folder reference; Gradle copy
  task into app assets).
- A vitest check fails when `content.json` is out of sync with the TS content
  sources, preventing silent drift.

## iOS app (`ios/`)

- SwiftUI, minimum iOS 17. Minimal hand-authored `.xcodeproj` using Xcode 16+
  filesystem-synchronized groups, so source files sync automatically and the
  pbxproj never lists individual files (XcodeGen is not installed and isn't
  needed). Model/loading logic lives in a local Swift package `ios/DrDostKit`
  so unit tests run on macOS via `swift test` without a simulator.
- Tab bar with five destinations:
  1. **Start** — hero, doctor intro (arzt), contact card (praxis)
  2. **Behandlungen** — list → detail
  3. **Fachbereiche** — list → detail
  4. **Galerie** — photo grid → native zoomable viewer
  5. **Info** — hours, Impressum, Datenschutz
- Native touches: tap-to-call (`tel:`), tap-to-email (`mailto:`), "In Karten
  öffnen" (Maps) for the address. Contact actions render only when the JSON
  holds real values (current praxis data is placeholder text like
  "Telefonnummer folgt" — the app must not offer tap-to-call on placeholders).
- `content.json` decoded into Swift structs at launch (Codable).
- Typography/colors echo the site's warm Fraunces/Inter look using
  system-native equivalents (serif design for headings, default sans body).

## Android app (`android/`)

- Kotlin + Jetpack Compose, Material 3, minSdk 26, targetSdk latest stable.
  Gradle wrapper committed; standard single-module app.
- Same five destinations with bottom navigation; Compose Navigation for
  detail screens.
- Native touches via Intents (`ACTION_DIAL`, `ACTION_SENDTO`, geo/maps),
  with the same placeholder guard as iOS.
- `content.json` parsed with kotlinx.serialization from bundled assets.

## Error handling

- Content JSON is bundled, so load failure is a programming error: fail fast
  in debug, show a minimal error screen (not a crash) in release.
- Missing images fall back to a gradient placeholder, matching the website's
  behavior for topics without images.

## Testing & verification

- Vitest: content export freshness check (web side).
- iOS: XCTest unit tests for JSON decoding and placeholder-guard logic.
- Android: JUnit tests for JSON parsing and placeholder-guard logic.
- Manual verification: build and launch both apps (iOS Simulator, Android
  emulator) and confirm real content renders on every tab.

## Out of scope

- App-store signing, provisioning, publishing
- Push notifications, appointment booking, any features the website lacks
- CI builds for the native apps (can be added later)
