import type { ReactNode } from "react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { ScrollToTop } from "./ScrollToTop"
import { StickyMobileCta } from "@/components/cta/StickyMobileCta"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      {/* pb-24 clears the sticky mobile CTA so it never covers content. */}
      <main id="hauptinhalt" className="flex-1 pb-24 sm:pb-0">
        {children}
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  )
}
