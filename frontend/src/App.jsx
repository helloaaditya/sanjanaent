import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { initGtag } from './gtag'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import AdminLogin from './pages/AdminLogin'
import AdminSetup from './pages/AdminSetup'
import AdminDashboard from './pages/AdminDashboard'
// Import new service pages
import EpoxyFlooring from './pages/EpoxyFlooring'
import PUFlooring from './pages/PUFlooring'
import WaterLeakageDetection from './pages/WaterLeakageDetection'
import TerraceWaterproofing from './pages/TerraceWaterproofing'
import BasementWaterproofing from './pages/BasementWaterproofing'
import WaterTanksWaterproofing from './pages/WaterTanksWaterproofing'
import RepairSection from './pages/RepairSection'
// Import redirect handler
import RedirectHandler from './pages/RedirectHandler'

function App() {
  useEffect(() => {
    // Initialize Google Ads tracking
    initGtag()
    
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 100,
      delay: 100,
      anchorPlacement: 'top-bottom'
    })
  }, [])

  // Scroll to top on route change
  const RouteScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }, [pathname])
    return null
  }

  return (
    <Router>
      <RouteScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        {/* New service page routes without .html extension */}
        <Route path="/epoxy-flooring" element={<Layout><EpoxyFlooring /></Layout>} />
        <Route path="/pu-flooring" element={<Layout><PUFlooring /></Layout>} />
        <Route path="/water-leakage-detection" element={<Layout><WaterLeakageDetection /></Layout>} />
        <Route path="/terrace-waterproofing" element={<Layout><TerraceWaterproofing /></Layout>} />
        <Route path="/basement-waterproofing" element={<Layout><BasementWaterproofing /></Layout>} />
        <Route path="/water-tanks-waterproofing" element={<Layout><WaterTanksWaterproofing /></Layout>} />
        <Route path="/repair-section" element={<Layout><RepairSection /></Layout>} />
        {/* Redirect handler for old .html URLs */}
        <Route path="/epoxy-flooring.html" element={<RedirectHandler />} />
        <Route path="/pu-flooring.html" element={<RedirectHandler />} />
        <Route path="/water-leakage-detection-by-thermal-imaging.html" element={<RedirectHandler />} />
        <Route path="/terrace-waterproofing.html" element={<RedirectHandler />} />
        <Route path="/basement-waterproofing.html" element={<RedirectHandler />} />
        <Route path="/water-tanks-waterproofing.html" element={<RedirectHandler />} />
        <Route path="/repair-section.html" element={<RedirectHandler />} />
        <Route path="/about.html" element={<RedirectHandler />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/setup" element={<AdminSetup />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  )
}

export default App