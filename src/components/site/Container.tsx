import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Full-width inner container. Sections span the whole viewport (full-bleed
 * backgrounds); their content sits in this wide container with generous
 * responsive gutters — no narrow max-w-7xl column any more.
 */
export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-16", className)}>
      {children}
    </div>
  )
}
