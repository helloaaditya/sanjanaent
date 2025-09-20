import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Shield, Award, Users, CheckCircle, Star, Phone, MapPin, Play, Sparkles, Zap, Calculator, ChevronLeft, ChevronRight } from 'lucide-react'
import QuoteRequestModal from './QuoteRequestModal'

// Waterproofing ImageSlider component
const WaterproofingSlider = ({ onNavigate, compact = false, imageSet = 1 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Different image sets for different columns
  const imageSet1 = [
    {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Injection Grouting",
      description: "Precision waterproofing solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      title: "Basement Waterproofing",
      description: "Complete moisture protection"
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Roof Waterproofing",
      description: "Weather-resistant solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Terrace Waterproofing",
      description: "Advanced sealing technology"
    }
  ]

  const imageSet2 = [
    {
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Foundation Waterproofing",
      description: "Structural protection"
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
      title: "Wall Waterproofing",
      description: "Exterior protection"
    },
    {
      src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Bathroom Waterproofing",
      description: "Wet area solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1520975922172-c2b4277f9c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
              className={`w-12 h-8 rounded border-2 overflow-hidden transition-all duration-300 ${
                currentSlide === index ? 'border-white scale-110' : 'border-white/50 hover:border-white/80'
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
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
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
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80",
      title: "Epoxy Flooring",
      description: "Durable and seamless finish"
    },
    {
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Polished Concrete",
      description: "Modern industrial flooring"
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Vinyl Flooring",
      description: "Waterproof and stylish"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Tiles Installation",
      description: "Premium ceramic solutions"
    }
  ]

  const imageSet2 = [
    {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Wood Flooring",
      description: "Natural and elegant"
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
      title: "Marble Flooring",
      description: "Luxury stone finish"
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Granite Flooring",
      description: "Durable stone surface"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
              className={`w-12 h-8 rounded border-2 overflow-hidden transition-all duration-300 ${
                currentSlide === index ? 'border-white scale-110' : 'border-white/50 hover:border-white/80'
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
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
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
    }, 500000)
    return () => clearInterval(intervalId)
  }, [])

  const features = [
    { icon: Shield, text: '30+ Years Experience', color: 'text-blue-500' },
    { icon: Award, text: 'Quality Guaranteed', color: 'text-yellow-500' }
  ]

  

  return (
    <div className="relative p">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 mb-16 sm:px-6 lg:px-4">
          <div className="py-16 pb-0">
            
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
                  onClick={() => setActiveSegment('waterproofing')}
                  className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    activeSegment === 'waterproofing'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Advanced Water Proofing
                </button>
                <button
                  onClick={() => setActiveSegment('flooring')}
                  className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                    activeSegment === 'flooring'
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
              <div className="w-1/3">
                <div className="flex flex-wrap gap-4 justify-center">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-2 bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-200 flex-1 min-w-0"
                    >
                      <feature.icon size={20} className={`${feature.color} flex-shrink-0`} />
                      <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowQuoteModal(true)}
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Free Quote
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <a 
                  href="tel:+919916290799" 
                  className="group bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-blue-300 px-8 py-4 rounded-xl font-bold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
          try { localStorage.setItem('quote_submitted', 'true') } catch {}
          setShowQuoteModal(false)
        }}
      />
    </div>
  )
}

export default Hero