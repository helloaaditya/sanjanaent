import React, { useState } from 'react'
import { ExternalLink, ZoomIn, X, Loader2, AlertCircle, RefreshCw } from 'lucide-react'
import { useProjects, useProjectsByCategory, useCategories } from '../hooks/useProjects'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')
  const navigate = useNavigate()
  
  const { projects, loading, error, refetch } = useProjectsByCategory(activeCategory)
  const { categories } = useCategories()
  const { projects: allProjects } = useProjects() // Get all projects for count calculation

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    // Smooth scroll to gallery section when category changes
    setTimeout(() => {
      const gallerySection = document.getElementById('gallery')
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handleViewAll = () => {
    navigate('/gallery')
    // Smooth scroll to top of gallery page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ExternalLink size={16} />
            <span>Our Recent Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Portfolio of
            <span className="block text-primary-600">Successful Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our gallery of completed waterproofing projects across Bangalore. 
            Each project showcases our commitment to quality and customer satisfaction.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                } ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {category}
                {!loading && (
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    isActive 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {projectCount}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-primary-600 mb-4" />
            <p className="text-gray-600">Loading projects...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-16">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Failed to load projects</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={refetch}
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <RefreshCw size={16} />
              <span>Try Again</span>
            </button>
          </div>
        ) : projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ExternalLink className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects yet</h3>
            <p className="text-gray-600 text-center max-w-md">
              {activeCategory === 'All' 
                ? 'Projects will appear here once they are added through the admin panel.' 
                : `No projects found in the ${activeCategory} category.`
              }
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <div key={project._id || project.id} className="card overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-sm bg-primary-600 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                        <button
                          onClick={() => setSelectedImage(project)}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <ZoomIn size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                  {project.location && (
                    <p className="text-gray-500 text-xs mt-2">📍 {project.location}</p>
                  )}
                  {project.completedDate && (
                    <p className="text-gray-500 text-xs mt-1">📅 {new Date(project.completedDate).toLocaleDateString()}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button 
            onClick={handleViewAll}
            className="btn-primary"
          >
            View All Projects
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            <div className="bg-white rounded-2xl overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
