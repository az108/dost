import { useState } from "react"
import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container } from "@/components/site/Container"
import { LanguageSwitch } from "@/components/site/LanguageSwitch"
import { praxis } from "@/content/praxis"
import { useUi } from "@/content/ui"

export function Navbar() {
  const ui = useUi()
  const [open, setOpen] = useState(false)
  const links = [
    { to: "/behandlungen", label: ui.nav.treatments },
    { to: "/aesthetik", label: ui.nav.aesthetic },
    { to: "/ueber-uns", label: ui.nav.about },
    { to: "/galerie", label: ui.nav.gallery },
    { to: "/kontakt", label: ui.nav.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav aria-label="Hauptnavigation" className="flex h-16 items-center justify-between gap-4">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="font-display text-xl font-extrabold tracking-tight text-ink"
          >
            {praxis.brand}
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-body md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-sm transition-colors hover:text-brand focus-visible:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitch />
            <Link
              to="/kontakt"
              className={cn(buttonVariants(), "hidden rounded-full bg-brand text-white hover:bg-brand/90 md:inline-flex")}
            >
              {ui.nav.book}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={ui.nav.treatments}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-lg text-ink hover:bg-brand-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand md:hidden"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </Container>

      {open && (
        <div className="border-t border-neutral-200/60 bg-white md:hidden">
          <Container>
            <div className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-body hover:bg-brand-soft hover:text-brand"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/kontakt"
                onClick={() => setOpen(false)}
                className={cn(buttonVariants(), "mt-2 w-fit rounded-full bg-brand px-6 text-white hover:bg-brand/90")}
              >
                {ui.nav.book}
              </Link>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
