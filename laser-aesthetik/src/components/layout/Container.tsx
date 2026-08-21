import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function Container({
  className,
  children,
  ...rest
}: { className?: string; children: ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10", className)} {...rest}>
      {children}
    </div>
  )
}
