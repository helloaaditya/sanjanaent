import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Video as VideoIcon, Play, Download, X } from 'lucide-react'

const VideoGallerySection = () => {
  const [brochures, setBrochures] = useState([])
  const [showBrochureModal, setShowBrochureModal] = useState(false)
  
  useEffect(() => {
    let mounted = true
    import('../services/api').then(({ default: apiService }) => {
      apiService.getBrochures().then((data) => {
        if (!mounted) return
        setBrochures(Array.isArray(data) ? data : [])
      }).catch(() => {})
    })
    return () => { mounted = false }
  }, [])

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium border border-blue-200 shadow-lg mb-6">
            <VideoIcon size={16} className="animate-pulse" />
            <span className="font-semibold">Our Work Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See Our Work in <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how we transform properties with our advanced waterproofing and flooring solutions and premium quality materials
          </p>
        </div>

        {/* Main Content Card (Video + CTAs) */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="p-4 sm:p-6">

            {/* Video Player */}
            <div className="relative mb-6 sm:mb-8 max-w-5xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/vnmHM2OzGkE?si=ZTON2IdhoKtJN7wN" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://www.youtube.com/watch?v=vnmHM2OzGkE"
                target="_blank"
                rel="noreferrer"
                className="group bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-800 text-white px-5 py-3 rounded-xl sm:rounded-2xl font-semibold shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center"
              >
                <Play size={18} className="mr-2" />
                Watch Presentation
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <button
                onClick={() => setShowBrochureModal(true)}
                className="border-2 border-gray-300 text-gray-800 hover:bg-gray-50 px-5 py-3 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center"
              >
                <Download size={18} className="mr-2" />
                {brochures.length > 0 ? 'Download Brochures' : 'Brochures Coming Soon'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Brochure Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Download Brochures</h3>
                <button
                  onClick={() => setShowBrochureModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
              
              {brochures.length > 0 ? (
                <div className="space-y-4">
                  {brochures.map((brochure) => (
                    <div key={brochure._id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Download size={20} className="text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{brochure.title}</h4>
                        </div>
                      </div>
                      <a
                        href={brochure.url}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                      >
                        <Download size={16} />
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Download size={24} className="text-gray-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">No Brochures Available</h4>
                  <p className="text-gray-600">Brochures will be available soon. Please check back later.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default VideoGallerySection