import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

const tones = {
  light: "bg-white text-brand-950",
  tint: "bg-brand-50 text-brand-950",
  brand: "bg-brand text-white",
} as const

export function Section({
  id,
  tone = "light",
  className,
  children,
  ...rest
}: {
  id?: string
  tone?: keyof typeof tones
  className?: string
  children: ReactNode
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      id={id}
      className={cn("py-12 sm:py-14 lg:py-16", tones[tone], className)}
      {...rest}
    >
      {children}
    </section>
  )
}
