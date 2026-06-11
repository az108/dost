# Dr. Dost Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, German-language, client-side-only website for Dr. med. univ. Dost Mohammad ("Dr. Dost", Landshut) with Behandlungen, Fachbereiche and Arzt content copied verbatim from silvamed.de.

**Architecture:** Vite SPA at repo root. A long-scroll landing page composed of section components, plus React Router detail pages for each Behandlung/Fachbereich. All text lives in typed content files under `src/content/` — components only render data. Visual style: white editorial base, serif display type, soft drifting orange/green gradient blobs, layered cards, scroll reveals via Motion.

**Tech Stack:** Vite, React 19, TypeScript, Tailwind CSS v4 (`@tailwindcss/vite`), shadcn/ui, Motion (`motion/react`), React Router (`react-router-dom`), Vitest + Testing Library, Fontsource (Fraunces Variable + Inter Variable).

**Spec:** `docs/superpowers/specs/2026-06-11-dr-dost-website-design.md`

**Brand tokens:** orange `#FFB266`, green `#99FF99`, brand name "Dr. Dost". Contact: Am Alten Viehmarkt 5, 84028 Landshut · Tel. 0871 . 430 747 – 0 · Handy 0176 / 747 322 89 · Fax 0871 . 430 747 – 20 · dr.dost@silvamed.de · Sprechzeiten: Nach Vereinbarung.

---

### Task 1: Scaffold Vite app at repo root

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tsconfig.app.json`, `index.html`, `src/main.tsx`, `src/index.css`, `.gitignore` (via scaffold + edits)

- [ ] **Step 1: Scaffold into temp dir and move to root**

```bash
cd /Users/aniruddhzaveri/IdeaProjects/dost
npm create vite@latest tmp-scaffold -- --template react-ts
cp -R tmp-scaffold/. .
rm -rf tmp-scaffold
```

Expected: repo root now contains `package.json`, `src/`, `index.html`, `vite.config.ts`, tsconfigs, `.gitignore`.

- [ ] **Step 2: Add `.superpowers/` and `.idea/` to `.gitignore`**

Append to `.gitignore`:

```
.idea/
.superpowers/
```

- [ ] **Step 3: Install dependencies**

```bash
npm install
npm install react-router-dom motion @fontsource-variable/fraunces @fontsource-variable/inter
npm install -D tailwindcss @tailwindcss/vite vitest @testing-library/react @testing-library/jest-dom jsdom @types/node
```

Expected: exit 0, `node_modules/` present.

- [ ] **Step 4: Configure Vite (Tailwind plugin, `@` alias, Vitest)**

Replace `vite.config.ts` with:

```ts
/// <reference types="vitest/config" />
import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    globals: true,
  },
})
```

Create `src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest"
```

- [ ] **Step 5: Add `@` path alias to TypeScript configs**

In `tsconfig.json`, add at the top level:

```json
"compilerOptions": {
  "baseUrl": ".",
  "paths": { "@/*": ["./src/*"] }
}
```

In `tsconfig.app.json`, inside the existing `compilerOptions`, add:

```json
"baseUrl": ".",
"paths": { "@/*": ["./src/*"] }
```

Also add `"types": ["vitest/globals", "@testing-library/jest-dom"]` to `tsconfig.app.json` compilerOptions.

- [ ] **Step 6: Add test script to `package.json`**

In `package.json` scripts, add:

```json
"test": "vitest run"
```

- [ ] **Step 7: Replace scaffold styles with Tailwind + theme tokens**

Delete `src/App.css`. Replace `src/index.css` with:

```css
@import "tailwindcss";

@theme {
  --color-brand: #ffb266;
  --color-brand-green: #99ff99;
  --font-display: "Fraunces Variable", Georgia, serif;
  --font-sans: "Inter Variable", system-ui, sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-white text-neutral-900 font-sans antialiased;
}
```

Replace `src/main.tsx` with:

```tsx
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "@fontsource-variable/fraunces"
import "@fontsource-variable/inter"
import "./index.css"
import App from "./App"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

Replace `src/App.tsx` with a minimal placeholder (router comes in Task 4):

```tsx
export default function App() {
  return <h1 className="font-display text-4xl p-8">Dr. Dost</h1>
}
```

Update `index.html` `<title>` to `Dr. Dost – Hausarzt in Landshut` and set `<html lang="de">`. Delete `src/assets/react.svg` and `public/vite.svg` references (remove favicon line or keep generic).

- [ ] **Step 8: Verify dev server and build**

```bash
npm run build
```

Expected: build succeeds. Then `npm run dev` briefly and check `http://localhost:5173` renders "Dr. Dost" in a serif font.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: scaffold Vite + React + Tailwind v4 app with brand theme"
```

---

### Task 2: shadcn/ui init

**Files:**
- Create: `components.json`, `src/lib/utils.ts`, `src/components/ui/button.tsx`, `src/components/ui/card.tsx`
- Modify: `src/index.css` (shadcn rewrites it — re-add theme tokens)

- [ ] **Step 1: Initialize shadcn non-interactively**

```bash
npx shadcn@latest init -d
npx shadcn@latest add button card
```

Expected: `components.json`, `src/lib/utils.ts`, `src/components/ui/{button,card}.tsx` created.

- [ ] **Step 2: Re-add brand tokens if shadcn rewrote `src/index.css`**

Ensure the `@theme` block, `html`/`body` rules and font imports from Task 1 Step 7 still exist in `src/index.css` (append again if missing, after shadcn's blocks).

- [ ] **Step 3: Verify build still passes**

```bash
npm run build
```

Expected: success.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add shadcn/ui with button and card components"
```

---

### Task 3: Content layer (scrape silvamed.de, typed data files)

**Files:**
- Create: `src/content/types.ts`, `src/content/behandlungen.ts`, `src/content/fachbereiche.ts`, `src/content/arzt.ts`, `src/content/praxis.ts`
- Test: `src/content/content.test.ts`

- [ ] **Step 1: Define content types**

Create `src/content/types.ts`:

```ts
export interface TopicEntry {
  slug: string
  title: string
  /** Short teaser shown on the landing-page card */
  excerpt: string
  /** Verbatim German paragraphs from the source page */
  body: string[]
  /** Optional image under src/assets/topics/<slug>.jpg; gradient fallback if absent */
  image?: string
  imageAlt?: string
}
```

- [ ] **Step 2: Write failing content-integrity test**

Create `src/content/content.test.ts`:

```ts
import { describe, expect, it } from "vitest"
import { behandlungen } from "./behandlungen"
import { fachbereiche } from "./fachbereiche"
import { arzt } from "./arzt"
import { praxis } from "./praxis"

const all = [...behandlungen, ...fachbereiche]

describe("content integrity", () => {
  it("has at least one entry per section", () => {
    expect(behandlungen.length).toBeGreaterThan(0)
    expect(fachbereiche.length).toBeGreaterThan(0)
  })

  it("every entry has slug, title, excerpt and non-empty body", () => {
    for (const e of all) {
      expect(e.slug).toMatch(/^[a-z0-9-]+$/)
      expect(e.title.length).toBeGreaterThan(2)
      expect(e.excerpt.length).toBeGreaterThan(10)
      expect(e.body.length).toBeGreaterThan(0)
      expect(e.body.every((p) => p.trim().length > 0)).toBe(true)
    }
  })

  it("slugs are unique within each section", () => {
    const slugs = (xs: { slug: string }[]) => xs.map((x) => x.slug)
    expect(new Set(slugs(behandlungen)).size).toBe(behandlungen.length)
    expect(new Set(slugs(fachbereiche)).size).toBe(fachbereiche.length)
  })

  it("no Silvamed branding leaks into content", () => {
    const text = JSON.stringify({ all, arzt, praxis }).toLowerCase()
    expect(text.includes("silvamed gmbh")).toBe(false)
    expect(text.includes("mvz vilsbiburg")).toBe(false)
  })

  it("praxis has the agreed contact data", () => {
    expect(praxis.email).toBe("dr.dost@silvamed.de")
    expect(praxis.address).toContain("Landshut")
  })
})
```

- [ ] **Step 3: Run test — expect FAIL (modules missing)**

```bash
npm test
```

Expected: FAIL, cannot resolve `./behandlungen` etc.

- [ ] **Step 4: Scrape the source site**

```bash
mkdir -p /tmp/silvamed
curl -sL "https://www.silvamed.de/standorte/hausarztpraxis-landshut/" -o /tmp/silvamed/landshut.html
grep -oE 'href="[^"]*"' /tmp/silvamed/landshut.html | sort -u
```

From the link list, identify every subpage under "Behandlungen" and "Fachbereiche" (URL patterns typically contain `/behandlungen/` and `/fachbereiche/` or are linked from those menus). `curl -sL` each one into `/tmp/silvamed/<name>.html`, then Read each file and extract the German text **verbatim** (headings + paragraphs; strip nav/footer boilerplate).

**Fallback if silvamed.de is unreachable:** build the content from the user-supplied description only —
- Fachbereiche: Praktischer Arzt / Allgemeinmedizin, Notfallmedizin, Naturheilverfahren, Akupunktur
- Behandlungen: TCM, Homöopathie, Akupunktur, Ästhetische Medizin (Botox, Hyaluron, PRP, Fädentechnologie)
- Write factual 2–3 sentence German bodies strictly derived from the user-provided doctor description (no invented medical claims), and note in the commit message that content is provisional pending the scrape.

- [ ] **Step 5: Create the data files**

Create `src/content/behandlungen.ts` and `src/content/fachbereiche.ts`, one `TopicEntry` per scraped subpage:

```ts
import type { TopicEntry } from "./types"

export const behandlungen: TopicEntry[] = [
  {
    slug: "akupunktur",
    title: "Akupunktur",
    excerpt: "<first sentence of the scraped page>",
    body: [
      "<verbatim paragraph 1>",
      "<verbatim paragraph 2>",
    ],
    imageAlt: "Akupunkturnadeln auf hellem Hintergrund",
  },
  // ...one entry per scraped Behandlung
]
```

(`fachbereiche.ts` identical shape with `export const fachbereiche`.)
Replace any occurrence of "Silvamed", "MVZ Vilsbiburg Silvamed GmbH" inside copied text with "Dr. Dost" / "unserer Praxis" as grammatically appropriate.

Create `src/content/arzt.ts` (verbatim from user-provided description / Über-Uns page):

```ts
export const arzt = {
  name: "Dr. med. univ. Dost Mohammad",
  qualifications:
    "Praktischer Arzt, Notfallmedizin, Naturheilverfahren und Akupunktur",
  intro: [
    "Hand in Hand für Ihre Gesundheit ist die Devise unseres Arztes in Landshut. Durch die verschiedensten Spezialisierungen in jeweiligen Fachbereichen kann er Ihnen medizinische Versorgung auf höchstem Niveau anbieten.",
    "Durch die langjährigen und vielfältigen Erfahrungen, die unser Arzt vorweisen kann, sind Sie in unserer Praxis in Landshut in besten interdisziplinären Händen.",
  ],
  bio: [
    "Dr. Mohammad ist bekannt für sein vernetztes Denken. Ob klassische Schulmedizin oder Naturheilverfahren, für ihn steht der Patient mit seinen individuellen Anliegen im Vordergrund.",
    "TCM, Homöopathie und Akupunktur sind seine Spezialgebiete in der Naturheilkunde. Aber auch Verfahren der ästhetischen Medizin, wie Hautverjüngungsmaßnahmen mit Botox, Hyaluron, PRP oder Fädentechnologie weiß er zu beherrschen.",
  ],
}
```

Create `src/content/praxis.ts`:

```ts
export const praxis = {
  brand: "Dr. Dost",
  tagline: "Ihr Hausarzt in Landshut",
  address: "Am Alten Viehmarkt 5\n84028 Landshut",
  phone: "0871 . 430 747 – 0",
  mobile: "0176 / 747 322 89",
  fax: "0871 . 430 747 – 20",
  email: "dr.dost@silvamed.de",
  hours: "Nach Vereinbarung",
}
```

- [ ] **Step 6: Run tests — expect PASS**

```bash
npm test
```

Expected: all content tests PASS.

- [ ] **Step 7: Commit**

```bash
git add src/content
git commit -m "feat: add typed German content for Behandlungen, Fachbereiche, Arzt und Praxis"
```

---

### Task 4: Router, page shells and hash-scroll

**Files:**
- Create: `src/pages/Home.tsx`, `src/pages/TopicDetail.tsx`, `src/pages/Legal.tsx`, `src/components/site/ScrollManager.tsx`
- Modify: `src/App.tsx`
- Test: `src/App.test.tsx`

- [ ] **Step 1: Write failing routing test**

Create `src/App.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router-dom"
import { AppRoutes } from "./App"
import { behandlungen } from "./content/behandlungen"
import { fachbereiche } from "./content/fachbereiche"

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>,
  )
}

describe("routes", () => {
  it("renders home with brand", () => {
    renderAt("/")
    expect(screen.getAllByText(/Dr\. Dost/i).length).toBeGreaterThan(0)
  })

  it("renders a detail page for every Behandlung", () => {
    for (const e of behandlungen) {
      const { unmount } = renderAt(`/behandlungen/${e.slug}`)
      expect(
        screen.getAllByRole("heading", { name: new RegExp(e.title, "i") }).length,
      ).toBeGreaterThan(0)
      unmount()
    }
  })

  it("renders a detail page for every Fachbereich", () => {
    for (const e of fachbereiche) {
      const { unmount } = renderAt(`/fachbereiche/${e.slug}`)
      expect(
        screen.getAllByRole("heading", { name: new RegExp(e.title, "i") }).length,
      ).toBeGreaterThan(0)
      unmount()
    }
  })

  it("renders Impressum and Datenschutz", () => {
    renderAt("/impressum")
    expect(screen.getByRole("heading", { name: /Impressum/i })).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run test — expect FAIL (`AppRoutes` missing)**

```bash
npm test
```

- [ ] **Step 3: Implement routes and page shells**

Create `src/components/site/ScrollManager.tsx` (scrolls to top on route change, to anchor on hash):

```tsx
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [pathname, hash])
  return null
}
```

Create `src/pages/Home.tsx` (sections filled in Tasks 6–9):

```tsx
export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Dr. Dost – Ihr Hausarzt in Landshut</h1>
      {/* Hero, Behandlungen, Fachbereiche, Arzt, Kontakt sections */}
    </main>
  )
}
```

Create `src/pages/TopicDetail.tsx`:

```tsx
import { Link, useParams } from "react-router-dom"
import type { TopicEntry } from "@/content/types"
import { Button } from "@/components/ui/button"

export default function TopicDetail({
  entries,
  sectionLabel,
}: {
  entries: TopicEntry[]
  sectionLabel: string
}) {
  const { slug } = useParams()
  const entry = entries.find((e) => e.slug === slug)
  if (!entry) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-32">
        <h1 className="font-display text-4xl">Seite nicht gefunden</h1>
        <Button asChild className="mt-8"><Link to="/">Zurück zur Startseite</Link></Button>
      </main>
    )
  }
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">
      <p className="text-sm uppercase tracking-widest text-neutral-500">{sectionLabel}</p>
      <h1 className="font-display mt-2 text-5xl">{entry.title}</h1>
      {entry.image && (
        <img
          src={entry.image}
          alt={entry.imageAlt ?? entry.title}
          className="mt-10 aspect-[16/9] w-full rounded-2xl object-cover shadow-xl"
        />
      )}
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-neutral-700">
        {entry.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      <Button asChild size="lg" className="mt-12 rounded-full bg-brand text-neutral-900 hover:bg-brand/80">
        <Link to="/#kontakt">Termin buchen</Link>
      </Button>
    </main>
  )
}
```

Create `src/pages/Legal.tsx`:

```tsx
export default function Legal({ title }: { title: string }) {
  return (
    <main className="mx-auto max-w-3xl px-6 py-28">
      <h1 className="font-display text-5xl">{title}</h1>
      <p className="mt-8 text-neutral-600">
        Inhalt folgt. Dies ist ein Platzhalter – die finalen Rechtstexte werden vom
        Praxisinhaber bereitgestellt.
      </p>
    </main>
  )
}
```

Replace `src/App.tsx`:

```tsx
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ScrollManager } from "@/components/site/ScrollManager"
import Home from "@/pages/Home"
import TopicDetail from "@/pages/TopicDetail"
import Legal from "@/pages/Legal"
import { behandlungen } from "@/content/behandlungen"
import { fachbereiche } from "@/content/fachbereiche"
import { praxis } from "@/content/praxis"

export function AppRoutes() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/behandlungen/:slug"
          element={<TopicDetail entries={behandlungen} sectionLabel="Behandlungen" />}
        />
        <Route
          path="/fachbereiche/:slug"
          element={<TopicDetail entries={fachbereiche} sectionLabel="Fachbereiche" />}
        />
        <Route path="/impressum" element={<Legal title="Impressum" />} />
        <Route path="/datenschutz" element={<Legal title="Datenschutz" />} />
        <Route path="*" element={<TopicDetail entries={[]} sectionLabel={praxis.brand} />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
```

- [ ] **Step 4: Run tests — expect PASS**

```bash
npm test
```

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "feat: add router with topic detail and legal pages"
```

---

### Task 5: Site chrome — Navbar, Footer, gradient backdrop, Reveal helper

**Files:**
- Create: `src/components/site/Navbar.tsx`, `src/components/site/Footer.tsx`, `src/components/site/GradientBackdrop.tsx`, `src/components/site/Reveal.tsx`
- Modify: `src/App.tsx` (wrap routes with chrome)

- [ ] **Step 1: Create `GradientBackdrop` (soft drifting brand blobs)**

Create `src/components/site/GradientBackdrop.tsx`:

```tsx
import { motion } from "motion/react"

const blob =
  "pointer-events-none absolute rounded-full blur-3xl opacity-40 will-change-transform"

export function GradientBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className={`${blob} -top-40 -right-40 h-[34rem] w-[34rem] bg-brand/60`}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, 60, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`${blob} top-1/3 -left-48 h-[30rem] w-[30rem] bg-brand-green/50`}
        animate={{ x: [0, 50, 10, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 32, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  )
}
```

- [ ] **Step 2: Create `Reveal` scroll-reveal wrapper**

Create `src/components/site/Reveal.tsx`:

```tsx
import { motion } from "motion/react"
import type { ReactNode } from "react"

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 3: Create `Navbar` (sticky, glass blur)**

Create `src/components/site/Navbar.tsx`:

```tsx
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { praxis } from "@/content/praxis"

const links = [
  { to: "/#behandlungen", label: "Behandlungen" },
  { to: "/#fachbereiche", label: "Fachbereiche" },
  { to: "/#arzt", label: "Arzt" },
  { to: "/#kontakt", label: "Kontakt" },
]

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/60 bg-white/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          {praxis.brand}
        </Link>
        <div className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="transition-colors hover:text-neutral-900">
              {l.label}
            </Link>
          ))}
        </div>
        <Button asChild className="rounded-full bg-brand text-neutral-900 hover:bg-brand/80">
          <Link to="/#kontakt">Termin buchen</Link>
        </Button>
      </nav>
    </header>
  )
}
```

- [ ] **Step 4: Create `Footer`**

Create `src/components/site/Footer.tsx`:

```tsx
import { Link } from "react-router-dom"
import { praxis } from "@/content/praxis"

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-neutral-500 md:flex-row">
        <p>© 2026 {praxis.brand} · {praxis.tagline}</p>
        <div className="flex gap-6">
          <Link to="/impressum" className="hover:text-neutral-900">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-neutral-900">Datenschutz</Link>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 5: Wrap routes with chrome in `src/App.tsx`**

Inside `AppRoutes`, wrap the returned fragment:

```tsx
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"

export function AppRoutes() {
  return (
    <div className="relative min-h-screen">
      <ScrollManager />
      <Navbar />
      <Routes>{/* unchanged routes */}</Routes>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 6: Run tests and build**

```bash
npm test && npm run build
```

Expected: PASS (existing route tests still pass — Navbar/Footer render on every page).

- [ ] **Step 7: Commit**

```bash
git add src
git commit -m "feat: add navbar, footer, gradient backdrop and reveal animation helpers"
```

---

### Task 6: Hero section (layered editorial hero)

**Files:**
- Create: `src/sections/Hero.tsx`, `src/assets/arzt.png` (copied)
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Copy the doctor photo into assets**

```bash
mkdir -p src/assets
cp figures/img.png src/assets/arzt.png
```

- [ ] **Step 2: Implement `Hero`**

Create `src/sections/Hero.tsx`:

```tsx
import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { GradientBackdrop } from "@/components/site/GradientBackdrop"
import { praxis } from "@/content/praxis"
import { arzt } from "@/content/arzt"
import arztFoto from "@/assets/arzt.png"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <GradientBackdrop />
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            {praxis.tagline}
          </p>
          <h2 className="font-display mt-4 text-5xl leading-[1.05] font-semibold md:text-7xl">
            Medizin, die <em className="text-amber-600 italic">zuhört</em>.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-neutral-600">
            Schulmedizin und Naturheilverfahren Hand in Hand – {arzt.name},{" "}
            {arzt.qualifications}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-brand px-8 text-neutral-900 hover:bg-brand/80">
              <Link to="/#kontakt">Termin buchen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
              <Link to="/#behandlungen">Behandlungen entdecken</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-72 md:w-80"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={arztFoto}
            alt={arzt.name}
            className="rotate-2 rounded-3xl shadow-2xl"
          />
          <motion.div
            className="absolute -left-10 top-8 rounded-2xl bg-white/85 px-4 py-3 text-sm shadow-xl backdrop-blur"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            🌿 Naturheilverfahren &amp; Akupunktur
          </motion.div>
          <motion.div
            className="absolute -right-6 bottom-10 rounded-2xl bg-brand-green/80 px-4 py-3 text-sm font-medium text-emerald-950 shadow-xl"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            ⚕️ Notfallmedizin
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Mount in `Home.tsx`**

```tsx
import { Hero } from "@/sections/Hero"

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Dr. Dost – Ihr Hausarzt in Landshut</h1>
      <Hero />
    </main>
  )
}
```

- [ ] **Step 4: Verify visually**

`npm run dev`, open `http://localhost:5173` — hero shows headline, drifting gradients, tilted photo with floating badges.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "feat: add layered editorial hero with doctor photo and floating badges"
```

---

### Task 7: Behandlungen and Fachbereiche sections

**Files:**
- Create: `src/components/site/TopicCard.tsx`, `src/sections/TopicGrid.tsx`
- Modify: `src/pages/Home.tsx`
- Test: `src/sections/TopicGrid.test.tsx`

- [ ] **Step 1: Write failing section test**

Create `src/sections/TopicGrid.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import { TopicGrid } from "./TopicGrid"
import { behandlungen } from "@/content/behandlungen"

describe("TopicGrid", () => {
  it("renders one linked card per entry", () => {
    render(
      <MemoryRouter>
        <TopicGrid
          id="behandlungen"
          title="Behandlungen"
          intro="Unsere Leistungen"
          entries={behandlungen}
          basePath="/behandlungen"
        />
      </MemoryRouter>,
    )
    for (const e of behandlungen) {
      const link = screen.getByRole("link", { name: new RegExp(e.title, "i") })
      expect(link).toHaveAttribute("href", `/behandlungen/${e.slug}`)
    }
  })
})
```

- [ ] **Step 2: Run — expect FAIL**

```bash
npm test
```

- [ ] **Step 3: Implement `TopicCard` and `TopicGrid`**

Create `src/components/site/TopicCard.tsx`:

```tsx
import { Link } from "react-router-dom"
import type { TopicEntry } from "@/content/types"

const gradients = [
  "from-brand/30 to-brand-green/30",
  "from-brand-green/30 to-brand/20",
  "from-amber-100 to-brand/30",
]

export function TopicCard({
  entry,
  basePath,
  index,
}: {
  entry: TopicEntry
  basePath: string
  index: number
}) {
  return (
    <Link
      to={`${basePath}/${entry.slug}`}
      className="group block overflow-hidden rounded-3xl border border-neutral-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
    >
      <div className="aspect-[16/10] overflow-hidden">
        {entry.image ? (
          <img
            src={entry.image}
            alt={entry.imageAlt ?? entry.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`flex h-full w-full items-end bg-gradient-to-br p-5 ${gradients[index % gradients.length]}`}
          >
            <span className="font-display text-5xl text-neutral-900/20">
              {entry.title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold">{entry.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
          {entry.excerpt}
        </p>
        <span className="mt-4 inline-block text-sm font-medium text-amber-700">
          Mehr erfahren →
        </span>
      </div>
    </Link>
  )
}
```

Create `src/sections/TopicGrid.tsx`:

```tsx
import type { TopicEntry } from "@/content/types"
import { TopicCard } from "@/components/site/TopicCard"
import { Reveal } from "@/components/site/Reveal"

export function TopicGrid({
  id,
  title,
  intro,
  entries,
  basePath,
  tinted = false,
}: {
  id: string
  title: string
  intro: string
  entries: TopicEntry[]
  basePath: string
  tinted?: boolean
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-24 ${tinted ? "bg-orange-50/40" : ""}`}>
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">{intro}</p>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {entries.map((e, i) => (
            <Reveal key={e.slug} delay={i * 0.08}>
              <TopicCard entry={e} basePath={basePath} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Mount both sections in `Home.tsx`**

```tsx
import { Hero } from "@/sections/Hero"
import { TopicGrid } from "@/sections/TopicGrid"
import { behandlungen } from "@/content/behandlungen"
import { fachbereiche } from "@/content/fachbereiche"

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Dr. Dost – Ihr Hausarzt in Landshut</h1>
      <Hero />
      <TopicGrid
        id="behandlungen"
        title="Behandlungen"
        intro="Von Akupunktur bis ästhetische Medizin – unsere Behandlungen verbinden Schulmedizin und Naturheilkunde."
        entries={behandlungen}
        basePath="/behandlungen"
      />
      <TopicGrid
        id="fachbereiche"
        title="Fachbereiche"
        intro="Medizinische Versorgung auf höchstem Niveau durch vielfältige Spezialisierungen."
        entries={fachbereiche}
        basePath="/fachbereiche"
        tinted
      />
    </main>
  )
}
```

- [ ] **Step 5: Run tests — expect PASS**

```bash
npm test
```

- [ ] **Step 6: Commit**

```bash
git add src
git commit -m "feat: add Behandlungen and Fachbereiche card grids with scroll reveals"
```

---

### Task 8: Arzt section

**Files:**
- Create: `src/sections/Arzt.tsx`
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Implement `Arzt`**

Create `src/sections/Arzt.tsx`:

```tsx
import { Reveal } from "@/components/site/Reveal"
import { arzt } from "@/content/arzt"
import arztFoto from "@/assets/arzt.png"

export function Arzt() {
  return (
    <section id="arzt" className="relative scroll-mt-20 overflow-hidden py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1fr_1.2fr]">
        <Reveal className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand/25 to-brand-green/25 blur-2xl" />
          <img
            src={arztFoto}
            alt={arzt.name}
            className="-rotate-1 rounded-3xl shadow-2xl"
          />
        </Reveal>
        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Unser Arzt in Landshut
            </p>
            <h2 className="font-display mt-3 text-4xl font-semibold md:text-5xl">
              {arzt.name}
            </h2>
            <p className="mt-2 text-lg text-amber-700">{arzt.qualifications}</p>
          </Reveal>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-600">
            {[...arzt.intro, ...arzt.bio].map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Mount in `Home.tsx` after the Fachbereiche grid**

```tsx
import { Arzt } from "@/sections/Arzt"
// ...
<Arzt />
```

- [ ] **Step 3: Verify visually, run tests**

```bash
npm test
```

- [ ] **Step 4: Commit**

```bash
git add src
git commit -m "feat: add Arzt section with bio and layered photo"
```

---

### Task 9: Kontakt section

**Files:**
- Create: `src/sections/Kontakt.tsx`
- Modify: `src/pages/Home.tsx`

- [ ] **Step 1: Implement `Kontakt`**

Create `src/sections/Kontakt.tsx`:

```tsx
import { Reveal } from "@/components/site/Reveal"
import { Card, CardContent } from "@/components/ui/card"
import { praxis } from "@/content/praxis"

const rows = [
  { label: "Adresse", value: praxis.address },
  { label: "Telefon", value: praxis.phone },
  { label: "Handy", value: praxis.mobile },
  { label: "Fax", value: praxis.fax },
  { label: "E-Mail", value: praxis.email },
  { label: "Sprechzeiten", value: praxis.hours },
]

export function Kontakt() {
  return (
    <section id="kontakt" className="relative scroll-mt-20 overflow-hidden bg-neutral-950 py-24 text-white">
      <div
        aria-hidden
        className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-brand-green/15 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-4xl font-semibold md:text-5xl">
            Termin vereinbaren
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-300">
            Rufen Sie uns an oder schreiben Sie uns – wir nehmen uns Zeit für Ihr Anliegen.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Card className="mt-12 border-white/10 bg-white/5 backdrop-blur">
            <CardContent className="grid gap-x-12 gap-y-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
              {rows.map((r) => (
                <div key={r.label}>
                  <p className="text-xs uppercase tracking-widest text-neutral-400">
                    {r.label}
                  </p>
                  <p className="mt-2 whitespace-pre-line text-lg text-white">
                    {r.label === "E-Mail" ? (
                      <a href={`mailto:${r.value}`} className="underline decoration-brand underline-offset-4">
                        {r.value}
                      </a>
                    ) : (
                      r.value
                    )}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Mount as last section in `Home.tsx`**

```tsx
import { Kontakt } from "@/sections/Kontakt"
// ...
<Kontakt />
```

- [ ] **Step 3: Verify "Termin buchen" scrolls to it**

`npm run dev` → click "Termin buchen" in navbar and hero → page scrolls smoothly to the dark contact section.

- [ ] **Step 4: Commit**

```bash
git add src
git commit -m "feat: add dark Kontakt section with contact details and CTA target"
```

---

### Task 10: Topic images (Unsplash)

**Files:**
- Create: `src/assets/topics/<slug>.jpg` per topic
- Modify: `src/content/behandlungen.ts`, `src/content/fachbereiche.ts`

- [ ] **Step 1: Find and download a fitting photo per topic**

For each topic slug, query Unsplash's public search API and pick a warm-toned, professional photo:

```bash
mkdir -p src/assets/topics
curl -s "https://unsplash.com/napi/search/photos?query=acupuncture&per_page=5" \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print('\n'.join(r['urls']['regular'] for r in d['results']))"
curl -sL "<chosen-url>" -o src/assets/topics/akupunktur.jpg
file src/assets/topics/akupunktur.jpg   # must report JPEG/PNG image data
```

Suggested queries: acupuncture, traditional chinese medicine herbs, homeopathy globules, aesthetic medicine skincare, doctor stethoscope, emergency medicine, naturopathy herbs. If the napi endpoint is blocked, skip the image (gradient fallback renders) and note it.

- [ ] **Step 2: Wire images into content files**

In each content file, import and assign:

```ts
import akupunkturImg from "@/assets/topics/akupunktur.jpg"
// in the entry:
image: akupunkturImg,
imageAlt: "Akupunkturnadeln bei einer Behandlung",
```

Add a Vite asset type declaration if missing — `src/vite-env.d.ts` already covers this via `/// <reference types="vite/client" />`.

- [ ] **Step 3: Run tests and build**

```bash
npm test && npm run build
```

Expected: PASS; build inlines/copies images.

- [ ] **Step 4: Verify visually** — cards and detail pages show photos, object-cover, hover zoom.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "feat: add topic photos for treatment and specialty cards"
```

---

### Task 11: Final verification

- [ ] **Step 1: Full test suite + production build**

```bash
npm test && npm run build && npm run preview &
```

Expected: all tests PASS, build succeeds, preview serves the site.

- [ ] **Step 2: Manual browser pass (golden path)**

- Landing: hero loads, gradients drift subtly, badges float
- Scroll: sections reveal once, cards lift on hover
- Click a Behandlung card → detail page with verbatim text → "Termin buchen" → back home scrolled to Kontakt
- Same for a Fachbereich
- Navbar anchors work from a detail page (e.g. `/#arzt`)
- Footer → Impressum / Datenschutz placeholders render
- Mobile width (375px): nav collapses to brand + CTA, grids stack, hero stacks

- [ ] **Step 3: Fix anything found, re-run tests, commit**

```bash
git add -A
git commit -m "chore: final polish after manual verification"
```

- [ ] **Step 4: Verify no Silvamed branding in UI**

```bash
grep -ri "silvamed" src --include='*.tsx' --include='*.ts' | grep -v "dr.dost@silvamed.de"
```

Expected: no output (the email is the only allowed occurrence).
