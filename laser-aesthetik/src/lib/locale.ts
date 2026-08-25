import { useLocation } from "react-router-dom"
import type { Locale } from "@/content/types"

export const LOCALES: readonly Locale[] = ["de", "en"] as const

/**
 * Reads the current locale from the route, not from the browser. A path
 * starting "/en" or equal to "/en" is English; everything else is German.
 * Uses useLocation() rather than window.location so it re-renders on
 * client-side navigation and stays testable with MemoryRouter.
 */
export function useLocale(): Locale {
  const { pathname } = useLocation()
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de"
}
