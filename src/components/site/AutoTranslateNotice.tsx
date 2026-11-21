import { useEffect, useState } from "react"
import { Languages, X } from "lucide-react"
import { useAutoTranslate, useTx } from "@/lib/i18n"

/**
 * A thin banner shown for the long-tail languages, noting that the page was
 * machine-translated (on the visitor's device, or via the practice's translation
 * service). Nothing renders for German or the reviewed languages. Dismissible,
 * and reappears when the language changes.
 */
export function AutoTranslateNotice() {
  const { status, target } = useAutoTranslate()
  const tx = useTx()
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    setDismissed(false)
  }, [target?.code])

  if (!target || status === "off" || dismissed) return null

  return (
    <div className="flex items-center justify-center gap-2 bg-mint/15 px-4 py-1.5 text-center text-xs text-emerald-950">
      <Languages className="size-3.5 shrink-0" aria-hidden="true" />
      <span>{tx("Automatisch übersetzt – bei Unklarheiten fragen Sie uns gerne.")}</span>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        aria-label="OK"
        className="ms-1 rounded p-0.5 hover:bg-emerald-950/10"
      >
        <X className="size-3.5" aria-hidden="true" />
      </button>
    </div>
  )
}
