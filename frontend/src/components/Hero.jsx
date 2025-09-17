import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Award, Users, CheckCircle, Star, Phone, MapPin, Play, Sparkles, Zap, Calculator } from 'lucide-react'
import AnimatedCounter from './AnimatedCounter'
import CircularInfographic from './CircularInfographic'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import VideoGallerySection from './VideoGallerySection'
import QuoteRequestModal from './QuoteRequestModal'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showQuoteModal, setShowQuoteModal] = useState(false)

  // Scroll animations
  const { ref: heroRef, hasAnimated: heroAnimated } = useScrollAnimation({
    threshold: 0.1,
    animationClass: 'animate-fade-in-up'
  })

  const { ref: statsRef, hasAnimated: statsAnimated } = useScrollAnimation({
    threshold: 0.2,
    animationClass: 'animate-fade-in-up'
  })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const features = [
    { icon: CheckCircle, text: 'Licensed & Insured' },
    { icon: CheckCircle, text: '10 Year Warranty' },
    { icon: CheckCircle, text: '24/7 Support' },
    { icon: CheckCircle, text: 'Free Inspection' }
  ]

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            animationDelay: '2s'
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Content */}
          <div className="space-y-8 animate-slide-left">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Sparkles size={16} className="fill-current animate-pulse" />
                <span className="gradient-text font-semibold">#1 Waterproofing Company in Bangalore</span>
                <Zap size={16} className="text-yellow-500 animate-bounce" />
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-gray-900 animate-fade-scale">Premium</span>
                <span className="block gradient-text animate-slide-up">Waterproofing</span>
                <span className="block text-gray-900 animate-fade-scale" style={{animationDelay: '0.2s'}}>Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl animate-slide-up" style={{animationDelay: '0.4s'}}>
                Transform your property with our cutting-edge waterproofing technology. 
                <span className="text-blue-600 font-semibold gradient-text">30+ years of excellence</span> delivering 
                bulletproof protection for homes and businesses across Bangalore.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{animationDelay: '0.6s'}}>
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 interactive-hover"
                  style={{animationDelay: `${0.8 + index * 0.1}s`}}
                >
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 animate-pulse" />
                  <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{animationDelay: '1s'}}>
              <button
                onClick={() => setShowQuoteModal(true)}
                className="group btn-primary flex items-center justify-center animate-pulse-glow"
              >
                <Calculator size={20} className="mr-2 group-hover:animate-spin" />
                Get Free Quote
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <a 
                href="tel:+919916290799" 
                className="group btn-secondary flex items-center justify-center"
              >
                <Phone size={20} className="mr-2 group-hover:animate-wiggle" />
                Call Now
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4 animate-slide-up" style={{animationDelay: '1.2s'}}>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map((i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className="text-yellow-400 fill-current animate-bounce-slow" 
                      style={{animationDelay: `${i * 0.1}s`}}
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={16} className="animate-pulse" />
                <span className="text-sm">Serving All Bangalore</span>
              </div>
            </div>
          </div>

          {/* Hero Visual - Circular Infographic */}
          <div className="relative animate-slide-right" ref={heroRef}>
            <div className="p-8 pt-0">
              <CircularInfographic />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center shadow-lg animate-bounce-slow floating-element">
              <Award size={24} className="text-yellow-600 animate-wiggle" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center shadow-lg animate-bounce-slow floating-element">
              <CheckCircle size={20} className="text-green-600 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="pt-0">
          <AnimatedCounter />
        </div>

        {/* Video Section with Images */}
        <div className="pt-0">
          <VideoGallerySection />
        </div>
      </div>

      {/* Quote Request Modal */}
      <QuoteRequestModal 
        isOpen={showQuoteModal} 
        onClose={() => setShowQuoteModal(false)} 
      />
    </section>
  )
}

export default Hero
