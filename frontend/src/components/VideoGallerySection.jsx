import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight, Camera, Video, Star, CheckCircle, Award } from 'lucide-react'

const VideoGallerySection = () => {
  const [activeImage, setActiveImage] = useState(0)
  const [paused, setPaused] = useState(false)

  const projectImages = [
    {
      url: "https://www.sanjanawaterproofing.com/images/topwaterproofingcontractorinbangalore.jpg",
      title: "Roof Waterproofing Project",
      location: "Bangalore Commercial Complex"
    },
    {
      url: "https://www.sanjanawaterproofing.com/img/cheapwaterproofingservices.jpeg",
      title: "Industrial Flooring",
      location: "Manufacturing Unit, Whitefield"
    },
    {
      url: "https://www.sanjanawaterproofing.com/images/waterproofinginBangalore.jpg",
      title: "Basement Waterproofing",
      location: "Residential Complex, Koramangala"
    },
    {
      url: "https://www.sanjanawaterproofing.com/images/waterproofingsolutionsinBangalore.jpg",
      title: "Swimming Pool Protection",
      location: "Premium Resort, Electronic City"
    }
  ]

  // Auto-rotate gallery every 4 seconds; pause on hover
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % projectImages.length)
    }, 2000)
    return () => clearInterval(id)
  }, [paused, projectImages.length])


  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium border border-blue-200 shadow-lg mb-6">
            <Video size={16} className="animate-pulse" />
            <span className="font-semibold">Our Work Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See Our Work in <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how we transform properties with our advanced waterproofing solutions and premium quality materials
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-50">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Content & Video Player */}
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-blue-50/30">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Watch Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Process</span>
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  See our expert team in action as we deliver premium waterproofing solutions using cutting-edge technology and proven techniques.
                </p>
                
               
              </div>

              {/* Video Player */}
              <div className="relative mb-6">
                <div className="relative w-full max-w-lg mx-auto">
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
                  
                  {/* Video overlay effects */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">See our waterproofing process in action</p>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <Link to="/gallery" className="group bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-3">
                  <span>View All Projects</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Right Side - Image Gallery */}
            <div
              className="relative h-50 lg:h-50 overflow-hidden bg-gray-900"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* Main Image */}
              <div className="relative h-full">
                <img
                  src={projectImages[activeImage].url}
                  alt={projectImages[activeImage].title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce-slow border border-white/20">
                  <Sparkles size={24} className="text-white" />
                </div>
                
                <div className="absolute top-6 left-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <CheckCircle size={14} />
                  <span>Completed</span>
                </div>
                
                {/* Project Info */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-xl font-bold mb-1">{projectImages[activeImage].title}</h4>
                  <p className="text-white/80 text-sm">{projectImages[activeImage].location}</p>
                </div>
                
                {/* Camera Icon */}
                
              </div>

              {/* Image Thumbnails */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex space-x-2 justify-center">
                  {projectImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-14 h-10 rounded-md overflow-hidden border transition-all duration-300 ${
                        activeImage === index 
                          ? 'border-white shadow-lg scale-110 ring-2 ring-white/70' 
                          : 'border-white/30 hover:border-white/60 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default VideoGallerySection