import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/** Router navigation preserves scroll by default; reset it on path change. */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}
