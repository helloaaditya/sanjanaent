import React, { useState } from 'react'
import { ExternalLink, ZoomIn, X, Loader2, AlertCircle, RefreshCw, ArrowRight } from 'lucide-react'
import { useProjects } from '../hooks/useProjects'
import { useNavigate } from 'react-router-dom'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const navigate = useNavigate()
  
  // Fetch projects and limit to 4 for homepage preview
  const { projects: allProjects, loading, error, refetch } = useProjects()
  const projects = allProjects.slice(0, 4) // Explicitly limit to first 4 projects

  const handleViewAll = () => {
    navigate('/gallery')
    // Smooth scroll to top of gallery page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ExternalLink size={16} />
            <span>Our Recent Works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Portfolio of
            <span className="block text-blue-600">Successful Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our gallery of completed waterproofing and flooring projects across Karnataka. 
            Each project showcases our commitment to quality and customer satisfaction.
          </p>
        </div>

        {/* Gallery Grid - Featured Projects */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-4" />
            <p className="text-gray-600">Loading featured projects...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-16">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Failed to load projects</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={refetch}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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
              Featured projects will appear here once they are added through the admin panel.
            </p>
          </div>
        ) : (
          <>
            {/* Featured Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {projects.map((project, index) => (
                <div 
                  key={project._id || project.id} 
                  className={`group cursor-pointer ${index < 2 ? 'lg:col-span-1' : 'lg:col-span-1'}`}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                          index < 2 ? 'h-80' : 'h-64'
                        }`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <div className="flex items-center justify-between">
                            <span className="text-sm bg-blue-600 px-3 py-1 rounded-full font-medium">
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-3">{project.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        {project.location && (
                          <span className="text-gray-500 flex items-center">
                            📍 {project.location}
                          </span>
                        )}
                        {project.completedDate && (
                          <span className="text-gray-500 flex items-center">
                            📅 {new Date(project.completedDate).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Discover More Projects</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Explore our complete portfolio of waterproofing and flooring solutions. 
                  From residential buildings to industrial complexes, see how we've helped protect structures across Karnataka.
                </p>
                <button 
                  onClick={handleViewAll}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto group"
                >
                  View Complete Portfolio
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <span className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {selectedImage.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-200">{selectedImage.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  {selectedImage.location && (
                    <span className="flex items-center">
                      📍 <strong className="ml-1">Location:</strong> {selectedImage.location}
                    </span>
                  )}
                  {selectedImage.completedDate && (
                    <span className="flex items-center">
                      📅 <strong className="ml-1">Completed:</strong> {new Date(selectedImage.completedDate).toLocaleDateString()}
                    </span>
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
      `}</style>
    </section>
  )
}

export default Gallery