import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container } from "@/components/site/Container"
import { LanguageSwitch } from "@/components/site/LanguageSwitch"
import { praxis } from "@/content/praxis"
import { useUi } from "@/content/ui"

export function Navbar() {
  const ui = useUi()
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
          <Link to="/" className="font-display text-xl font-extrabold tracking-tight text-ink">
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
              className={cn(buttonVariants(), "rounded-full bg-brand text-white hover:bg-brand/90")}
            >
              {ui.nav.book}
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}
