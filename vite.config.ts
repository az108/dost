/// <reference types="vitest/config" />
import path from "node:path"
import { defineConfig } from "vite"
import { configDefaults } from "vitest/config"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// Served from the custom domain https://drdosthealth.com at the root, so the
// base is "/" in every build and in dev.
export default defineConfig(() => ({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globals: true,
    passWithNoTests: true,
    // laser-aesthetik and chat-worker are separate apps with their own test
    // runners (and, for chat-worker, a node environment); excluded here so
    // the root runner only covers the root app.
    exclude: [...configDefaults.exclude, "laser-aesthetik/**", "chat-worker/**"],
  },
}))
