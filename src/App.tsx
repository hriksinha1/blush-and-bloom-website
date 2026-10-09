import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import { Services, ServiceDetail } from './pages/Services'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
export default function App() {
  return <Routes><Route element={<Layout />}>
    <Route index element={<Home />} /><Route path="services" element={<Services />} /><Route path="services/:slug" element={<ServiceDetail />} />
    <Route path="about" element={<About />} /><Route path="gallery" element={<Gallery />} /><Route path="contact" element={<Contact />} />
    <Route path="faq" element={<Faq />} /><Route path="privacy" element={<Privacy />} /><Route path="*" element={<NotFound />} />
  </Route></Routes>
}
