/// <reference types="vitest/config" />
import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// Served from the domain root on Apache shared hosting (Namecheap / ALL-INKL).
// If this ever moves to a subdirectory, `base` and the RewriteBase in
// public/.htaccess must change together.
export default defineConfig({
  base: "/",
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
