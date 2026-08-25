import { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { pillars } from "@/content/pillars"
import { practice } from "@/content/practice"
import { useT } from "@/content/ui"
import { useLocale } from "@/lib/locale"
import { homePath, pagePath, pillarPath } from "@/lib/routes"
import { BookingButton } from "@/components/cta/BookingButton"
import { Container } from "./Container"
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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {t("skipToContent")}
      </a>
      <Container>
        <nav className="flex items-center justify-between gap-4 py-3" aria-label="Hauptnavigation">
          <Link to={homePath(locale)} aria-label={t("homeAriaLabel")} className="flex items-center gap-3">
            <img
              src="/logo-80.webp"
              alt=""
              width={80}
              height={80}
              className="size-10 shrink-0"
            />
            <span className="flex flex-col leading-tight">
              <span className="font-display text-base font-extrabold text-brand">
                {practice.shortBrand}
              </span>
              <span className="text-xs font-medium text-brand-600">
                Laser · Physio · Ästhetik
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

          <div className="hidden lg:block">
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
            <BookingButton className="mt-2 w-full" />
          </div>
        ) : null}
      </Container>
    </header>
  )
}
