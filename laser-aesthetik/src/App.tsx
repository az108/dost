import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "@/components/layout/Layout"
import Home from "@/pages/Home"
import CategoryPage from "@/pages/CategoryPage"
import TreatmentDetail from "@/pages/TreatmentDetail"
import Preise from "@/pages/Preise"
import Praxis from "@/pages/Praxis"
import Kontakt from "@/pages/Kontakt"
import LegalPage from "@/pages/LegalPage"
import Termin from "@/pages/Termin"
import TerminErfolg from "@/pages/TerminErfolg"
import TerminAbbruch from "@/pages/TerminAbbruch"
import NotFound from "@/pages/NotFound"
import { agb, datenschutz, impressum, widerruf } from "@/content/legal"
import {
  homePath,
  legalPath,
  pagePath,
  pillarPath,
  terminPath,
  treatmentPath,
} from "@/lib/routes"

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
        <Route
          path={legalPath("agb")}
          element={<LegalPage document={agb} canonicalPath={legalPath("agb")} />}
        />
        <Route
          path={legalPath("widerruf")}
          element={<LegalPage document={widerruf} canonicalPath={legalPath("widerruf")} />}
        />
        {/* Deutsch-only, wie die Rechtstexte — und bewusst NICHT in der
            Navigation: /termin verkauft im Voraus, und das darf es erst,
            wenn AGB und Widerrufsbelehrung anwaltlich fertig sind (siehe
            den Rechts-Guard in src/deploy.test.ts). Die Route existiert
            trotzdem, damit der Flow gebaut, getestet und angesehen werden
            kann; verlinkt wird sie, wenn der Guard grün ist. */}
        <Route path={terminPath("index")} element={<Termin />} />
        <Route path={terminPath("erfolg")} element={<TerminErfolg />} />
        <Route path={terminPath("abbruch")} element={<TerminAbbruch />} />

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
