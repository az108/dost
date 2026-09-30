import { useLang, type Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

const OPTIONS: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
]

/**
 * Compact DE/EN language toggle for the header. A native segmented control —
 * two pills; the active language is filled magenta.
 */
export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang } = useLang()
  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center rounded-full border border-neutral-200 bg-white p-0.5",
        className,
      )}
    >
      {OPTIONS.map((o) => {
        const active = o.code === lang
        return (
          <button
            key={o.code}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(o.code)}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-1",
              active ? "bg-brand text-white" : "text-neutral-500 hover:text-ink",
            )}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
