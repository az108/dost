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
