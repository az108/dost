import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-32">
      <h1 className="font-display text-4xl">Seite nicht gefunden</h1>
      <Link to="/" className={cn(buttonVariants(), "mt-8")}>
        Zurück zur Startseite
      </Link>
    </main>
  )
}
