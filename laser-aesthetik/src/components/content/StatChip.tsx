import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function StatChip({
  icon,
  className,
  children,
}: {
  icon?: ReactNode
  className?: string
  children: ReactNode
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-pill bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800",
        className,
      )}
    >
      {icon}
      {children}
    </span>
  )
}
