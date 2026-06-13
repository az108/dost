import { Link } from "react-router-dom"
import { praxis } from "@/content/praxis"

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-neutral-500 md:flex-row">
        <p>© {new Date().getFullYear()} {praxis.brand} · {praxis.tagline}</p>
        <div className="flex gap-6">
          <Link
            to="/impressum"
            className="rounded-sm hover:text-neutral-900 focus-visible:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Impressum
          </Link>
          <Link
            to="/datenschutz"
            className="rounded-sm hover:text-neutral-900 focus-visible:text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  )
}
