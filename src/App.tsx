import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ScrollManager } from "@/components/site/ScrollManager"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import Home from "@/pages/Home"
import TopicDetail from "@/pages/TopicDetail"
import Legal from "@/pages/Legal"
import NotFound from "@/pages/NotFound"
import { behandlungen } from "@/content/behandlungen"
import { fachbereiche } from "@/content/fachbereiche"

export function AppRoutes() {
  return (
    <div className="relative min-h-screen">
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/behandlungen/:slug"
          element={
            <TopicDetail
              entries={behandlungen}
              sectionLabel="Behandlungen"
              basePath="/behandlungen"
            />
          }
        />
        <Route
          path="/fachbereiche/:slug"
          element={
            <TopicDetail
              entries={fachbereiche}
              sectionLabel="Fachbereiche"
              basePath="/fachbereiche"
            />
          }
        />
        <Route path="/impressum" element={<Legal title="Impressum" />} />
        <Route path="/datenschutz" element={<Legal title="Datenschutz" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

// import.meta.env.BASE_URL is "/dost/" in the GitHub Pages build, "/" in dev.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/"

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <AppRoutes />
    </BrowserRouter>
  )
}
