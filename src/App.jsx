import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import OfertyPage from './pages/OfertyPage'
import OfertaPage from './pages/OfertaPage'
import AgenciPage from './pages/AgenciPage'
import ONasPage from './pages/ONasPage'
import KontaktPage from './pages/KontaktPage'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/oferty" element={<OfertyPage />} />
          <Route path="/oferty/:id" element={<OfertaPage />} />
          <Route path="/agenci" element={<AgenciPage />} />
          <Route path="/o-nas" element={<ONasPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
