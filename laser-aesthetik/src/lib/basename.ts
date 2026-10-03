/**
 * react-router's `basename`, derived from Vite's `base` build option via
 * import.meta.env.BASE_URL — the mechanism Vite provides for exactly this
 * (see https://vite.dev/guide/env-and-mode.html#env-variables). Vite
 * guarantees BASE_URL always ends in "/" (e.g. "/" by default, or
 * "/laser-aesthetik-preview/" when PREVIEW_BASE is set — see
 * vite.config.ts and the build:preview npm script); react-router's
 * `basename` must NOT have a trailing slash, and "" rather than "/" for the
 * default root case. Both src/App.tsx (BrowserRouter) and
 * src/entry-server.tsx (StaticRouter) read this same value, so the client
 * and the prerendered markup it hydrates always agree.
 */
export const basename = import.meta.env.BASE_URL.replace(/\/$/, "")
