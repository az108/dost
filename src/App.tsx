import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LanguageProvider } from "@/lib/i18n"
import { ScrollManager } from "@/components/site/ScrollManager"
import { Navbar } from "@/components/site/Navbar"
import { Footer } from "@/components/site/Footer"
import Home from "@/pages/Home"
import Treatments from "@/pages/Treatments"
import TreatmentArea from "@/pages/TreatmentArea"
import DiseaseDetail from "@/pages/DiseaseDetail"
import Aesthetik from "@/pages/Aesthetik"
import AesthetikDetail from "@/pages/AesthetikDetail"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import TopicDetail from "@/pages/TopicDetail"
import Legal from "@/pages/Legal"
import Galerie from "@/pages/Galerie"
import NotFound from "@/pages/NotFound"
import { fachbereiche } from "@/content/fachbereiche"

export function AppRoutes() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <ScrollManager />
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Treatments: areas → diseases */}
        <Route path="/behandlungen" element={<Treatments />} />
        <Route path="/behandlungen/:area" element={<TreatmentArea />} />
        <Route path="/behandlungen/:area/:disease" element={<DiseaseDetail />} />

        <Route path="/aesthetik" element={<Aesthetik />} />
        <Route path="/aesthetik/:slug" element={<AesthetikDetail />} />
        <Route path="/ueber-uns" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />

        <Route
          path="/fachbereiche/:slug"
          element={
            <TopicDetail entries={fachbereiche} sectionLabel="Fachbereiche" basePath="/fachbereiche" />
          }
        />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/impressum" element={<Legal which="impressum" />} />
        <Route path="/datenschutz" element={<Legal which="datenschutz" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        <Footer />
      </div>
    </LanguageProvider>
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
