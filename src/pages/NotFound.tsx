import { Link } from "react-router-dom"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container } from "@/components/site/Container"
import { useUi } from "@/content/ui"

export default function NotFound() {
  const ui = useUi()
  return (
    <Container>
      <main className="max-w-3xl py-40">
        <h1 className="text-4xl font-extrabold">{ui.notFound.title}</h1>
        <Link to="/" className={cn(buttonVariants(), "mt-8 rounded-full bg-brand text-white hover:bg-brand/90")}>
          {ui.notFound.back}
        </Link>
      </main>
    </Container>
  )
}
