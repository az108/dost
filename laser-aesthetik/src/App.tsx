import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import Home from "@/pages/Home"
import CategoryPage from "@/pages/CategoryPage"
import TreatmentDetail from "@/pages/TreatmentDetail"
import Preise from "@/pages/Preise"
import Praxis from "@/pages/Praxis"
import Kontakt from "@/pages/Kontakt"
import LegalPage from "@/pages/LegalPage"
import NotFound from "@/pages/NotFound"
import { datenschutz, impressum } from "@/content/legal"

export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laser" element={<CategoryPage pillar="laser" />} />
        <Route path="/physio" element={<CategoryPage pillar="physio" />} />
        <Route path="/aesthetik" element={<CategoryPage pillar="aesthetik" />} />
        <Route path="/behandlungen/:slug" element={<TreatmentDetail />} />
        <Route path="/preise" element={<Preise />} />
        <Route path="/praxis" element={<Praxis />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route
          path="/impressum"
          element={<LegalPage document={impressum} canonicalPath="/impressum" />}
        />
        <Route
          path="/datenschutz"
          element={<LegalPage document={datenschutz} canonicalPath="/datenschutz" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
