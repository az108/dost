import { StrictMode } from "react"
import { hydrateRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import { medicalClinicJsonLd } from "./lib/structuredData"

const ld = document.createElement("script")
ld.type = "application/ld+json"
ld.textContent = medicalClinicJsonLd()
document.head.appendChild(ld)

// hydrateRoot, not createRoot: the prerenderer already wrote real markup
// into #root. createRoot would throw it away and rebuild from scratch —
// the SEO benefit would survive but every visitor would see a flash of an
// empty page before React took over.
hydrateRoot(
  document.getElementById("root")!,
  <StrictMode>
    <App />
  </StrictMode>,
)
