import { useEffect, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

// useLayoutEffect warns when it runs during server rendering (there is no
// paint to run "before"). The standard isomorphic shim: use the real thing
// in the browser, fall back to useEffect (a silent no-op on the server,
// since window.scrollTo below never executes there) everywhere else.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

/**
 * Resets scroll on navigation.
 *
 * useLayoutEffect, not useEffect, on purpose: useEffect runs after paint, so
 * the new page renders at the previous scroll offset for one frame and then
 * visibly jerks to the top. useLayoutEffect runs before paint, so the jump
 * never becomes visible.
 *
 * Navigation that sets `state.preserveScroll` is skipped entirely — the
 * treatment sidebar swaps the content pane while the sidebar itself stays
 * put, so moving the viewport would be wrong.
 */
export function ScrollToTop() {
  const { pathname, state } = useLocation()

  useIsomorphicLayoutEffect(() => {
    if ((state as { preserveScroll?: boolean } | null)?.preserveScroll) return
    window.scrollTo(0, 0)
  }, [pathname, state])

  return null
}
