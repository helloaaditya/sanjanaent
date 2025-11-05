import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const RedirectHandler = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
  const redirectMap = {
    '/epoxy-flooring.html': '/epoxy-flooring',
    '/pu-flooring.html': '/pu-flooring',
    '/water-leakage-detection-by-thermal-imaging.html': '/water-leakage-detection',
    '/terrace-waterproofing.html': '/terrace-waterproofing',
    '/basement-waterproofing.html': '/basement-waterproofing',
    '/water-tanks-waterproofing.html': '/water-tanks-waterproofing',
    '/repair-section.html': '/repair-section',
    '/about.html': '/about'
  }

  const newPath = redirectMap[location.pathname]

  if (newPath) {
    window.location.replace(newPath) // <-- SEO Safe Client Redirect
  }
}, [location])


  // Show a simple loading message while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting...</p>
      </div>
    </div>
  )
}

export default RedirectHandler