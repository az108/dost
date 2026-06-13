import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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
      <nav aria-label="Hauptnavigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-display text-xl font-semibold tracking-tight">
          {praxis.brand}
        </Link>
        <div className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-sm transition-colors hover:text-neutral-900 focus-visible:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/#kontakt"
          className={cn(buttonVariants(), "rounded-full bg-brand text-neutral-900 hover:bg-brand/80")}
        >
          Termin buchen
        </Link>
      </nav>
    </header>
  )
}
