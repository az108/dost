/// <reference types="vitest/config" />
import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// Served from the domain root on Apache shared hosting (Namecheap / ALL-INKL).
// If this ever moves to a subdirectory, `base` and the RewriteBase in
// public/.htaccess must change together.
//
// PREVIEW_BASE overrides `base` for the client's GitHub Pages preview,
// which lives on a subpath instead of a domain root — set via `npm run
// build:preview` (see package.json), never by hand. Unset, `base` is still
// "/" and this build is byte-for-byte what it was before PREVIEW_BASE
// existed; .htaccess/RewriteBase is Apache-only and irrelevant on Pages, so
// it does not need a preview counterpart.
export default defineConfig({
  base: process.env.PREVIEW_BASE ?? "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  build: {
    target: "es2022",
  },
  test: {
    environment: "jsdom",
    // Absolute path: vitest's relative-setupFiles resolver builds a `file://`
    // URL from `root` without a trailing slash, so `new URL("./", root)` drops
    // the last path segment. Because laser-aesthetik/ is nested inside a repo
    // whose own src/test/setup.ts happens to exist one level up, the dropped
    // segment silently resolves to that unrelated file instead of failing.
    // An absolute path sidesteps the buggy relative resolution entirely.
    setupFiles: path.resolve(__dirname, "./src/test/setup.ts"),
    globals: true,
  },
})
