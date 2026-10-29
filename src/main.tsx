import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import "./index.css"
import App from "./App"

// hydrateRoot, not createRoot: the prerenderer already wrote real markup into
// #root. createRoot would throw it away and rebuild from scratch — a flash of
// an empty page before React takes over, and the SEO/no-JS content lost on the
// first paint.
hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <App />
  </StrictMode>,
)
