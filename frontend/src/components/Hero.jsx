import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Shield, Award, Users, CheckCircle, Star, Phone, MapPin, Play, Sparkles, Zap, Calculator, ChevronLeft, ChevronRight } from 'lucide-react'
import QuoteRequestModal from './QuoteRequestModal'

// Waterproofing ImageSlider component
const WaterproofingSlider = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
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
      className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
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
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{images[currentSlide].title}</h3>
          <p className="text-sm text-gray-200">{images[currentSlide].description}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
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

      {/* Thumbnail Strip */}
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
const FlooringSlider = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
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
      className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
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
        
        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-bold mb-2">{images[currentSlide].title}</h3>
          <p className="text-sm text-gray-200">{images[currentSlide].description}</p>
        </div>
      </div>

      {/* Navigation Arrows */}
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

      {/* Thumbnail Strip */}
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
    }, 10000)
    return () => clearInterval(intervalId)
  }, [])

  const features = [
    { icon: Shield, text: '30+ Years Experience', color: 'text-blue-500' },
    { icon: Award, text: 'Quality Guaranteed', color: 'text-yellow-500' }
  ]

  

  return (
    <div className="relative">
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
         <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-4">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh] py-12">
            {/* Left Content */}
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              {/* Badge */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold border border-blue-200/50 shadow-lg backdrop-blur-sm">
                <Sparkles size={18} className="text-yellow-500" />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  #1 Waterproofing & Flooring Company in Bangalore
                </span>
                <Zap size={18} className="text-yellow-500" />
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="block text-gray-900">Premium</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent py-2">
                    Waterproofing & Flooring
                  </span>
                  <span className="block text-gray-900">Solutions</span>
              </h1>
              
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                With 30+ years of expertise, Sanjana Enterprises is a trusted name in Waterproofing and Flooring solutions across Karnataka. Based in Bangalore, <span className="text-blue-600 font-semibold"> we deliver reliable, durable, and customized services </span> for residential, commercial, and industrial projects — ensuring quality, innovation, and long-lasting protection.
              </p>
            </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                    className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                    <feature.icon size={20} className={`${feature.color} flex-shrink-0`} />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowQuoteModal(true)}
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                  <Calculator size={20} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                Get Free Quote
                  <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <a 
                href="tel:+919916290799" 
                  className="group bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300 hover:border-blue-300 px-8 py-4 rounded-xl font-semibold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                  <Phone size={20} className="mr-3 text-green-500 group-hover:animate-pulse" />
                Call Now
              </a>
              </div>
            </div>

             {/* Right Content - Segment Tabs and Image Slider */}
             <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
               {/* Segment Tabs */}
               <div className="mb-6">
                 <div className="flex bg-white/80 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-gray-200/50">
                   <button
                     onClick={() => setActiveSegment('waterproofing')}
                     className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                       activeSegment === 'waterproofing'
                         ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                         : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                     }`}
                   >
                     Advanced Water Proofing
                   </button>
                   <button
                     onClick={() => setActiveSegment('flooring')}
                     className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                       activeSegment === 'flooring'
                         ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                         : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                     }`}
                   >
                     Premium Flooring Solutions
                   </button>
          </div>
            </div>
            
               {/* Image Slider based on active segment */}
               <div className="relative">
                {activeSegment === 'waterproofing'
                  ? (
                    <WaterproofingSlider onNavigate={() => navigate('/services?category=waterproofing')} />
                  ) : (
                    <FlooringSlider onNavigate={() => navigate('/services?category=flooring')} />
                  )}
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