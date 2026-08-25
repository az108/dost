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
import { homePath, legalPath, pagePath, pillarPath, treatmentPath } from "@/lib/routes"

export function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path={homePath("de")} element={<Home />} />
        <Route path={homePath("en")} element={<Home />} />

        <Route path={pillarPath("laser", "de")} element={<CategoryPage pillar="laser" />} />
        <Route path={pillarPath("laser", "en")} element={<CategoryPage pillar="laser" />} />
        <Route path={pillarPath("physio", "de")} element={<CategoryPage pillar="physio" />} />
        <Route path={pillarPath("physio", "en")} element={<CategoryPage pillar="physio" />} />
        <Route path={pillarPath("aesthetik", "de")} element={<CategoryPage pillar="aesthetik" />} />
        <Route path={pillarPath("aesthetik", "en")} element={<CategoryPage pillar="aesthetik" />} />

        <Route path={treatmentPath(":slug", "de")} element={<TreatmentDetail />} />
        <Route path={treatmentPath(":slug", "en")} element={<TreatmentDetail />} />

        <Route path={pagePath("prices", "de")} element={<Preise />} />
        <Route path={pagePath("prices", "en")} element={<Preise />} />
        <Route path={pagePath("practice", "de")} element={<Praxis />} />
        <Route path={pagePath("practice", "en")} element={<Praxis />} />
        <Route path={pagePath("contact", "de")} element={<Kontakt />} />
        <Route path={pagePath("contact", "en")} element={<Kontakt />} />

        <Route
          path={legalPath("impressum")}
          element={<LegalPage document={impressum} canonicalPath={legalPath("impressum")} />}
        />
        <Route
          path={legalPath("datenschutz")}
          element={<LegalPage document={datenschutz} canonicalPath={legalPath("datenschutz")} />}
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
