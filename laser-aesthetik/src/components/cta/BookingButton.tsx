import type { ReactNode } from "react"
import { CalendarCheck } from "lucide-react"
import { practice } from "@/content/practice"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * The single entry point to booking. Every CTA on the site renders through
 * this component, and the Doctolib URL lives only in practice.ts — so
 * changing the booking destination is a one-line change.
 * BookingButton.test.tsx enforces both properties.
 */
export function BookingButton({
  variant = "action",
  size = "lg",
  className,
  children = "Termin buchen",
  showIcon = true,
}: {
  variant?: "action" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  className?: string
  children?: ReactNode
  showIcon?: boolean
}) {
  return (
    <a
      href={practice.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), "gap-2 font-semibold", className)}
    >
      {showIcon ? <CalendarCheck className="size-5 shrink-0" aria-hidden="true" /> : null}
      {children}
    </a>
  )
}
