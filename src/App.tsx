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
          element={<TopicDetail entries={behandlungen} sectionLabel="Behandlungen" />}
        />
        <Route
          path="/fachbereiche/:slug"
          element={<TopicDetail entries={fachbereiche} sectionLabel="Fachbereiche" />}
        />
        <Route path="/impressum" element={<Legal title="Impressum" />} />
        <Route path="/datenschutz" element={<Legal title="Datenschutz" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
