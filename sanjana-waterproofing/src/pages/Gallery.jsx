import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Gallery from '../components/Gallery'

const GalleryPage = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <>
      <Helmet>
        <title>Gallery - Sanjana Waterproofing | Our Projects Portfolio</title>
        <meta 
          name="description" 
          content="Explore our gallery of completed waterproofing projects across Bangalore. View our portfolio of successful residential, commercial, and industrial projects." 
        />
        <meta 
          name="keywords" 
          content="waterproofing gallery, completed projects, portfolio, Bangalore waterproofing, residential projects, commercial projects" 
        />
      </Helmet>
      
      <div className="min-h-screen py-16 bg-gray-50">
        {/* Gallery Component */}
        <Gallery />
      </div>
    </>
  )
}

export default GalleryPage
