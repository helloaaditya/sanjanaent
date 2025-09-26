import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Shield, Award, Users, CheckCircle, Star, Phone, MapPin, Play, Sparkles, Zap, Calculator, ChevronLeft, Globe, ChevronRight } from 'lucide-react'
import QuoteRequestModal from './QuoteRequestModal'

// Waterproofing ImageSlider component  
const WaterproofingSlider = ({ onNavigate, compact = false, imageSet = 1 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Different image sets for different columns
  const imageSet1 = [
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Expansion%20Joints.jpg?updatedAt=1758533570312",
      title: "Injection Grouting",
      description: "Precision waterproofing solutions"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Basement%20Water%20Proofing.jpg?updatedAt=1758533565611",
      title: "Basement Waterproofing",
      description: "Complete moisture protection"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/roof%20water%20proofing.jpg?updatedAt=1758533574476",
      title: "Roof Waterproofing",
      description: "Weather-resistant solutions"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/APP%20%20EPDM%20%20SBS%20-%20Waterproofing.jpg?updatedAt=1758533564880",
      title: "Terrace Waterproofing",
      description: "Advanced sealing technology"
    }
  ]

  const imageSet2 = [
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Swimming%20Pools.jpg?updatedAt=1758533574626",
      title: "Foundation Waterproofing",
      description: "Structural protection"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Re%20Painting.jpg?updatedAt=1758533571571",
      title: "Wall Waterproofing",
      description: "Exterior protection"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Over%20head%20water%20tanks.jpg?updatedAt=1758533570962",
      title: "Bathroom Waterproofing",
      description: "Wet area solutions"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Retaining%20Walls.jpg?updatedAt=1758533572084",
      title: "Leak Repair",
      description: "Emergency solutions"
    }
  ]

  const images = imageSet === 1 ? imageSet1 : imageSet2

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={`relative w-full ${compact ? 'h-full' : 'h-80 md:h-96'} rounded-2xl overflow-hidden shadow-2xl group cursor-pointer`}
      onClick={() => onNavigate?.()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { onNavigate?.() } }}
    >
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={images[currentSlide].src}
          alt={images[currentSlide].title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Content Overlay - Only show in non-compact mode */}
        {!compact && (
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{images[currentSlide].title}</h3>
            <p className="text-sm text-gray-200">{images[currentSlide].description}</p>
          </div>
        )}
      </div>

      {/* Navigation Arrows - Only show in non-compact mode */}
      {!compact && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </>
      )}

      {/* Thumbnail Strip - Only show in non-compact mode */}
      {!compact && (
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {images.slice(0, 4).map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-8 rounded border-2 overflow-hidden transition-all duration-300 ${currentSlide === index ? 'border-white scale-110' : 'border-white/50 hover:border-white/80'
                }`}
            >
              <img
                src={img.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

// Flooring ImageSlider component
const FlooringSlider = ({ onNavigate, compact = false, imageSet = 1 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Different image sets for different columns
  const imageSet1 = [
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Industrial%20Epoxy%20Flooring.jpg?updatedAt=1758533571267",
      title: "Epoxy Flooring",
      description: "Durable and seamless finish"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/PU%20Flooring.jpg?updatedAt=1758533571054",
      title: "Polished Concrete",
      description: "Modern industrial flooring"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/ESD%20Flooring.jpg?updatedAt=1758533565482",
      title: "Vinyl Flooring",
      description: "Waterproof and stylish"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Chemical%20Resistance%20Flooring.jpg?updatedAt=1758533565212",
      title: "Tiles Installation",
      description: "Premium ceramic solutions"
    }
  ]

  const imageSet2 = [
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Anti%20-%20Corrosion%20Painting.jpg?updatedAt=1758533564728",
      title: "Wood Flooring",
      description: "Natural and elegant"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Car%20Parking.jpg?updatedAt=1758533565574",
      title: "Marble Flooring",
      description: "Luxury stone finish"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Bay%20Markings.jpg?updatedAt=1758533565165",
      title: "Granite Flooring",
      description: "Durable stone surface"
    },
    {
      src: "https://ik.imagekit.io/hw07pfjb1/Acrylic%20Sports%20Flooring.jpg?updatedAt=1758533564970",
      title: "Laminate Flooring",
      description: "Cost-effective solution"
    }
  ]

  const images = imageSet === 1 ? imageSet1 : imageSet2

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className={`relative w-full ${compact ? 'h-full' : 'h-80 md:h-96'} rounded-2xl overflow-hidden shadow-2xl group cursor-pointer`}
      onClick={() => onNavigate?.()}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { onNavigate?.() } }}
    >
      {/* Main Image */}
      <div className="relative w-full h-full">
        <img
          src={images[currentSlide].src}
          alt={images[currentSlide].title}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Content Overlay - Only show in non-compact mode */}
        {!compact && (
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-2">{images[currentSlide].title}</h3>
            <p className="text-sm text-gray-200">{images[currentSlide].description}</p>
          </div>
        )}
      </div>

      {/* Navigation Arrows - Only show in non-compact mode */}
      {!compact && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={20} className="text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={20} className="text-gray-700" />
          </button>
        </>
      )}

      {/* Thumbnail Strip - Only show in non-compact mode */}
      {!compact && (
        <div className="absolute bottom-4 right-4 flex space-x-2">
          {images.slice(0, 4).map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-12 h-8 rounded border-2 overflow-hidden transition-all duration-300 ${currentSlide === index ? 'border-white scale-110' : 'border-white/50 hover:border-white/80'
                }`}
            >
              <img
                src={img.src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>
    </div>
  )
}

const Hero = () => {
  const navigate = useNavigate()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [activeSegment, setActiveSegment] = useState('waterproofing') // 'waterproofing' or 'flooring'

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Auto-open quote modal every 5s unless already submitted
  useEffect(() => {
    const submitted = localStorage.getItem('quote_submitted') === 'true'
    if (submitted) return
    const intervalId = setInterval(() => {
      setShowQuoteModal(true)
    }, 90000)
    return () => clearInterval(intervalId)
  }, [])

  const features = [
    { icon: Shield, text: '30+ Years Experience', color: 'text-blue-500' },
    { icon: Award, text: 'Quality Guaranteed', color: 'text-yellow-500' },
    { icon: Globe, text: 'ISO 9001:2015 Certified', color: 'text-green-500' }
  ]



  return (
    <div className="relative p">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl transition-all duration-1000"
          style={{
              left: `${mousePosition.x * 0.015}px`,
              top: `${mousePosition.y * 0.015}px`,
          }}
        ></div>
        <div 
            className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-3xl transition-all duration-1000"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
          }}
        ></div>
      </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto py-4 px-4 mb-4 sm:px-6 lg:px-4">
          <div className="py-4 pb-0">

            {/* Content Section */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>

              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium border border-yellow-200">
                <CheckCircle size={16} className="text-green-500" />
                <span>#1 Waterproofing & Flooring Company in Bangalore</span>
              </div>

              {/* Service Tabs */}
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    setActiveSegment('waterproofing')
                    navigate('/services?category=waterproofing')
                  }}
                  className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeSegment === 'waterproofing'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  Advanced Water Proofing
                </button>
                <button
                  onClick={() => {
                    setActiveSegment('flooring')
                    navigate('/services?category=flooring')
                  }}
                  className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${activeSegment === 'flooring'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  Premium Flooring Solutions
                </button>
              </div>

              {/* Image Grid - Different Images in Each Column */}
              <div className="grid grid-cols-2 gap-4">
                {activeSegment === 'waterproofing' ? (
                  <>
                    <div className="h-64">
                      <WaterproofingSlider
                        compact={true}
                        imageSet={1}
                        onNavigate={() => navigate('/services?category=waterproofing')}
                      />
                    </div>
                    <div className="h-64">
                      <WaterproofingSlider
                        compact={true}
                        imageSet={2}
                        onNavigate={() => navigate('/services?category=waterproofing')}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-64">
                      <FlooringSlider
                        compact={true}
                        imageSet={1}
                        onNavigate={() => navigate('/services?category=flooring')}
                      />
                    </div>
                    <div className="h-64">
                      <FlooringSlider
                        compact={true}
                        imageSet={2}
                        onNavigate={() => navigate('/services?category=flooring')}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight">
                  <span className="block text-gray-900">Premium</span>
                  <span className="block text-blue-600">
                    Waterproofing & Flooring
                  </span>
                  <span className="block text-gray-900">Solutions</span>
              </h1>
              
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  With 30+ years of expertise, Sanjana Enterprises is a trusted name in Waterproofing and Flooring solutions across Karnataka. Based in Bangalore, we deliver reliable, durable, and customized services for residential, commercial, and industrial projects — ensuring quality, innovation, and long-lasting protection.
              </p>
            </div>

              {/* Key Features - Full Width */}
              {/* Key Features - Mobile Friendly */}
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                      className="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                    >
                      <feature.icon size={18} className={`${feature.color} flex-shrink-0`} />
                      <span className="text-xs sm:text-sm font-medium text-gray-700 leading-tight">
                        {feature.text}
                      </span>
                </div>
              ))}
                </div>
            </div>

              {/* CTA Buttons - Mobile Friendly */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => setShowQuoteModal(true)}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-h-[48px] text-sm sm:text-base"
              >
                Get Free Quote
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300 sm:inline hidden" />
              </button>
              <a 
                href="tel:+919916290799" 
                  className="group bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-blue-300 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-h-[48px] text-sm sm:text-base"
              >
                Call Now
              </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Modal */}
      <QuoteRequestModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)} 
        onSubmitted={() => {
          try { localStorage.setItem('quote_submitted', 'true') } catch { }
          setShowQuoteModal(false)
        }}
      />
    </div>
  )
}

export default Hero