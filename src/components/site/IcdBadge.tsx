import { useUi } from "@/content/ui"
import { cn } from "@/lib/utils"

/** The "ICD-10 · <code>" pill — shared by the disease detail hero and the
 *  area overview cards so the badge looks identical everywhere. */
export function IcdBadge({ code, className }: { code: string; className?: string }) {
  const ui = useUi()
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand shadow-sm",
        className,
      )}
    >
      {ui.disease.icd} · {code}
    </span>
  )
}
