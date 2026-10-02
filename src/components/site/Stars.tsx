import { cn } from "@/lib/utils"

/** A row of five filled stars (decorative rating). */
export function Stars({ className, size = 18 }: { className?: string; size?: number }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5 text-amber-400", className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
        </svg>
      ))}
    </span>
  )
}
