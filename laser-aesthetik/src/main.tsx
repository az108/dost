import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import { medicalClinicJsonLd } from "./lib/structuredData"

const ld = document.createElement("script")
ld.type = "application/ld+json"
ld.textContent = medicalClinicJsonLd()
document.head.appendChild(ld)

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
