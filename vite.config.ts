/// <reference types="vitest/config" />
import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// Served from https://az108.github.io/dost/ on GitHub Pages, so the production
// build needs the "/dost/" base. Dev keeps "/" for a clean localhost.
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/dost/" : "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globals: true,
    passWithNoTests: true,
  },
}))
