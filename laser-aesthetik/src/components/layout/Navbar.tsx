import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { pillars } from "@/content/pillars"
import { center } from "@/content/center"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { homePath, pagePath, pillarPath } from "@/lib/routes"
import { BookingButton } from "@/components/cta/BookingButton"
import { Container } from "./Container"
import { LanguageSwitch } from "./LanguageSwitch"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const t = useT()
  const locale = useLocale()

  const links = [
    ...pillars(locale).map((p) => ({ to: pillarPath(p.id, locale), label: p.label })),
    { to: pagePath("prices", locale), label: t("prices") },
    { to: pagePath("practice", locale), label: t("practice") },
    { to: pagePath("contact", locale), label: t("contact") },
  ]

  // Close the menu on navigation, so a link tap does not leave it open.
  useEffect(() => setOpen(false), [pathname])

  // Escape closes the menu — expected of any disclosure that covers content.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "rounded-md px-3 py-2 text-sm font-semibold transition-colors",
      isActive ? "text-brand" : "text-brand-800 hover:text-brand",
    )

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
      <a
        href="#hauptinhalt"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-white"
      >
        {t("skipToContent")}
      </a>
      <Container>
        <nav className="flex items-center justify-between gap-4 py-3" aria-label="Hauptnavigation">
          {/*
           * A text wordmark, not an image. What stood here was the separated
           * practice's crest (public/logo-80.webp), under rights that sit
           * with that practice — so a center denying any connection to it
           * wore its heraldry on every page and in every browser tab. Slice 2
           * and the client own the real mark; until it exists the brand
           * renders as its own name, read from center.ts like every other
           * surface. See CREDITS.md.
           *
           * center.brand, not shortBrand: with no glyph beside it the
           * wordmark is the whole lockup, and the short form alone reads as a
           * truncation rather than a name.
           */}
          <Link to={homePath(locale)} aria-label={t("homeAriaLabel")} className="flex items-center gap-3">
            <span className="flex flex-col leading-tight">
              {/* brand-900, not brand: 18px bold sits under the large-text
                  threshold, so the display blue would be below AA here. */}
              <span className="font-display text-lg font-extrabold tracking-tight text-brand-900">
                {center.brand}
              </span>
              <span className="text-xs font-medium text-brand-600">
                {t("brandStrapline")}
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitch />
            <BookingButton size="default" showIcon={false} />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("menuClose") : t("menuOpen")}
            className="rounded-md p-2 text-brand lg:hidden"
          >
            {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </nav>

        {open ? (
          <div id="mobile-menu" className="flex flex-col gap-1 pb-4 lg:hidden">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
            <LanguageSwitch className="mt-2" />
            <BookingButton className="mt-2 w-full" />
          </div>
        ) : null}
      </Container>
    </header>
  )
}
