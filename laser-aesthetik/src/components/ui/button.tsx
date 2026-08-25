import type { ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * `action` renders in `action-ink`, the accessible derived shade of the
 * reserved `action` brand colour. It is reserved for the primary affordance
 * of a given surface — BookingButton site-wide, and ContactForm's submit
 * button on the contact form. Everything else picks `outline` or `ghost`.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        action: "bg-action-ink text-white shadow-sm hover:bg-action-ink/90 active:bg-action-ink/95",
        outline: "border border-brand-200 bg-white text-brand-900 hover:bg-brand-50",
        ghost: "text-brand-900 hover:bg-brand-50",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 text-base",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
