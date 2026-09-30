import { Link } from "react-router-dom"
import { Container } from "@/components/site/Container"
import { praxis } from "@/content/praxis"
import { useUi } from "@/content/ui"

export function Footer() {
  const ui = useUi()
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 py-10 text-sm text-neutral-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} {praxis.brand} · {ui.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link
              to="/impressum"
              className="rounded-sm hover:text-ink focus-visible:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              {ui.footer.impressum}
            </Link>
            <Link
              to="/datenschutz"
              className="rounded-sm hover:text-ink focus-visible:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
            >
              {ui.footer.datenschutz}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
