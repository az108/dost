import { BrowserRouter, Route, Routes } from "react-router-dom"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<h1>Dr. Dost — Laser, Physio &amp; Ästhetik</h1>} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
