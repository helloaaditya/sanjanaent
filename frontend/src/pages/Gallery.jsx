import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { ExternalLink, ZoomIn, X, Loader2, AlertCircle, RefreshCw, Grid3X3, List } from 'lucide-react'
import { useProjects, useProjectsByCategory, useCategories } from '../hooks/useProjects'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'masonry'
  
  const { projects, loading, error, refetch } = useProjectsByCategory(activeCategory)
  const { categories } = useCategories()
  const { projects: allProjects } = useProjects() // Get all projects for count calculation

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    // Smooth scroll to gallery section when category changes
    setTimeout(() => {
      const gallerySection = document.getElementById('gallery-grid')
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <Helmet>
        <title>Project Gallery | Waterproofing & Flooring Work in Bangalore</title>
        <meta name="description" content="View completed waterproofing and industrial flooring projects across Bangalore & Karnataka. Residential, commercial, and industrial case studies." />
        <meta name="keywords" content="waterproofing projects bangalore, waterproofing gallery bangalore, flooring projects bangalore, epoxy flooring projects bangalore, epoxy self leveling projects bangalore, esd flooring projects bangalore, antistatic flooring projects bangalore, pu flooring projects bangalore, polyurethane concrete projects bangalore, injection grouting projects bangalore, terrace waterproofing projects bangalore, basement waterproofing projects bangalore, roof waterproofing projects bangalore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/gallery" />
        <meta property="og:title" content="Project Gallery - Sanjana Enterprises" />
        <meta property="og:description" content="See our executed projects in waterproofing and flooring across Karnataka." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/gallery" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section id="gallery" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <ExternalLink size={16} />
            <span>Complete Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-6xl font-black text-gray-900 mb-4 sm:mb-6">
            Our Project
            <span className="block text-blue-600">Gallery</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive portfolio of waterproofing and flooring projects across Karnataka. 
            Each project represents our commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category
              const projectCount = category === 'All' 
                ? allProjects.length 
                : allProjects.filter(p => p.category === category).length
              
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  disabled={loading}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                  } ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  {category}
                  {!loading && (
                    <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {projectCount}
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 p-1 self-start lg:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Grid3X3 size={18} />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-2 rounded-lg transition-all duration-200 ${
                viewMode === 'masonry'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Results Summary */}
        {!loading && !error && (
            <div className="mb-6 sm:mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{projects.length}</span> projects
              {activeCategory !== 'All' && (
                <span> in <span className="font-semibold text-blue-600">{activeCategory}</span></span>
              )}
            </p>
          </div>
        )}

        {/* Gallery Grid */}
        <div id="gallery-grid">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
              <p className="text-gray-600 text-lg">Loading projects...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20">
              <AlertCircle className="w-16 h-16 text-red-500 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Failed to load projects</h3>
              <p className="text-gray-600 mb-6 text-center max-w-md">{error}</p>
              <button
                onClick={refetch}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
              >
                <RefreshCw size={18} />
                <span>Try Again</span>
              </button>
            </div>
          ) : projects.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                <ExternalLink className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No projects found</h3>
              <p className="text-gray-600 text-center max-w-md">
                {activeCategory === 'All' 
                  ? 'No projects have been added yet. Check back later for updates.' 
                  : `No projects found in the ${activeCategory} category. Try selecting a different category.`
                }
              </p>
            </div>
          ) : (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6'
            }>
              {projects.map((project, index) => (
                <div 
                  key={project._id || project.id} 
                  className={`group cursor-pointer ${
                    viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''
                  }`}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                          viewMode === 'grid' ? 'h-48' : 'h-auto'
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <div className="flex items-center justify-between">
                            <span className="text-xs bg-blue-600 px-2 py-1 rounded-full font-medium">
                              {project.category}
                            </span>
                            <button
                              onClick={() => setSelectedImage(project)}
                              className="p-1.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                            >
                              <ZoomIn size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-3">{project.description}</p>
                      <div className="space-y-1 text-xs text-gray-500">
                        {project.location && (
                          <div className="flex items-center">
                            <span>📍 {project.location}</span>
                          </div>
                        )}
                        {project.completedDate && (
                          <div className="flex items-center">
                            <span>📅 {new Date(project.completedDate).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Load More Button (if needed for pagination) */}
        {!loading && !error && projects.length > 0 && (
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <span>Showing all {projects.length} projects</span>
              {activeCategory !== 'All' && (
                <span>in {activeCategory}</span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Compact Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full max-h-[80vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-black/20 rounded-full p-2 backdrop-blur-sm"
            >
              <X size={24} />
            </button>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-32 sm:h-80 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {selectedImage.category}
                  </span>
                </div>
                {/* Close button inside image (visible on all sizes) */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-1.5 hover:bg-black/70 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">{selectedImage.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                  {selectedImage.location && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Location</h4>
                      <p className="text-gray-900 text-sm font-medium">{selectedImage.location}</p>
                    </div>
                  )}
                  {selectedImage.completedDate && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Completed</h4>
                      <p className="text-gray-900 text-sm font-medium">{new Date(selectedImage.completedDate).toLocaleDateString()}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      </section>
    </>
  )
}

export default Gallery