import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ScrollManager } from "@/components/site/ScrollManager"
import Home from "@/pages/Home"
import TopicDetail from "@/pages/TopicDetail"
import Legal from "@/pages/Legal"
import { behandlungen } from "@/content/behandlungen"
import { fachbereiche } from "@/content/fachbereiche"
import { praxis } from "@/content/praxis"

export function AppRoutes() {
  return (
    <>
      <ScrollManager />
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
        <Route path="*" element={<TopicDetail entries={[]} sectionLabel={praxis.brand} />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
