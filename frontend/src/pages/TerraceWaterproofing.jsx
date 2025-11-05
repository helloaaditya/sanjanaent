import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Thermometer, Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Home, Sun } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const TerraceWaterproofing = () => {
  // Simple Droplets icon since it's not imported
  const Droplets = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.5-2.26-1.7-3.05-.5-.27-.9-.48-1.3-.48-.4 0-.8.19-1.3.48-1.2.79-1.7 1.89-1.7 3.05 0 2.22 1.8 4.05 4 4.05z"/><path d="M16 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.5-2.26-1.7-3.05-.5-.27-.9-.48-1.3-.48-.4 0-.8.19-1.3.48-1.2.79-1.7 1.89-1.7 3.05 0 2.22 1.8 4.05 4 4.05z"/></svg>

  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const benefits = [
    {
      title: "Prevents Water Damage",
      description: "Protects the structural integrity of your building by preventing water infiltration.",
      icon: Shield
    },
    {
      title: "Extends Terrace Life",
      description: "Significantly increases the lifespan of your terrace by protecting it from weather elements.",
      icon: Award
    },
    {
      title: "Energy Efficient",
      description: "Reduces heat transfer, helping to keep your home cooler and reducing energy costs.",
      icon: Sun
    },
    {
      title: "Prevents Mold Growth",
      description: "Eliminates moisture that can lead to mold and mildew growth, improving indoor air quality.",
      icon: Droplets
    },
    {
      title: "Increases Property Value",
      description: "Well-maintained, waterproofed terraces enhance the overall value of your property.",
      icon: Home
    },
    {
      title: "Low Maintenance",
      description: "Reduces the need for frequent repairs and maintenance of your terrace surface.",
      icon: Wrench
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Surface Inspection',
      description: 'Thorough examination of the terrace to identify existing cracks, damages, and problem areas.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Surface Preparation',
      description: 'Cleaning, repairing cracks, and preparing the surface for waterproofing application.',
      icon: Wrench
    },
    {
      step: '03',
      title: 'Primer Application',
      description: 'Application of specialized primer to enhance adhesion of waterproofing materials.',
      icon: Target
    },
    {
      step: '04',
      title: 'Waterproofing System',
      description: 'Application of high-quality waterproofing membranes and coatings as per requirements.',
      icon: Shield
    },
    {
      step: '05',
      title: 'Finishing & Curing',
      description: 'Final finishing touches and proper curing to ensure maximum effectiveness.',
      icon: Hammer
    },
    {
      step: '06',
      title: 'Quality Check',
      description: 'Comprehensive inspection to ensure complete waterproofing coverage and effectiveness.',
      icon: CheckCircle
    }
  ]

  const materials = [
    "Bituminous Membranes",
    "Liquid Applied Membranes",
    "Polyurethane Coatings",
    "Cementitious Waterproofing",
    "Epoxy Coatings",
    "APP/SBS Modified Bitumen"
  ]

  return (
    <>
      <Helmet>
        <title>Terrace Waterproofing in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Professional terrace waterproofing services in Bangalore. Protect your home from water damage with advanced solutions. 10-15 year warranty. Free inspection." />
        <meta name="keywords" content="terrace waterproofing bangalore, rooftop waterproofing, terrace leakage repair, waterproofing contractors, terrace coating services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/terrace-waterproofing" />
        <meta property="og:title" content="Terrace Waterproofing Services in Bangalore" />
        <meta property="og:description" content="Professional terrace waterproofing services to protect your home from water damage. Advanced solutions with 10-15 year warranty." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/terrace-waterproofing" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-amber-900 to-yellow-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                  <Home size={16} />
                  Terrace Waterproofing
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Protect Your
                  <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Terrace Investment
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Safeguard your home or building from water damage with our professional terrace waterproofing 
                  solutions. Advanced materials and expert application for long-lasting protection.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                  >
                    Get Free Quote
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button 
                    onClick={handlePhoneClick}
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone size={20} className="mr-2" />
                    Call: +91 9916290799
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Shield size={16} />
                    Why Terrace Waterproofing?
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Essential Protection
                    <span className="block text-orange-600">For Your Terrace</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Terrace waterproofing is a critical investment in protecting your property from water damage. 
                    Exposed to constant weather elements, terraces are particularly vulnerable to water infiltration 
                    that can lead to structural damage, mold growth, and costly repairs.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our professional terrace waterproofing solutions create a protective barrier that prevents 
                    water from seeping into your building, ensuring the longevity of your structure and maintaining 
                    a healthy living environment.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>10-15 Year Warranty</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Advanced Materials</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Expert Application</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="space-y-4">
                    {[
                      "Prevents costly water damage to ceilings and walls",
                      "Extends the lifespan of your terrace surface",
                      "Improves energy efficiency by reducing heat transfer",
                      "Prevents mold and mildew growth for healthier indoor air",
                      "Increases property value and curb appeal",
                      "Reduces maintenance costs and frequency",
                      "Protects against monsoon season water damage",
                      "Enhances the usability and comfort of your terrace"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={16} className="text-white" />
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles size={16} />
                  Comprehensive Benefits
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Our
                  <span className="block text-orange-600">Terrace Waterproofing?</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our terrace waterproofing solutions offer comprehensive protection with long-lasting results.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Materials & Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target size={16} />
                    Materials Used
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Premium
                    <span className="block text-orange-600">Waterproofing Materials</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    We use only the highest quality waterproofing materials that are specifically designed for 
                    terrace applications. Our material selection is based on the specific requirements of your 
                    terrace and environmental conditions.
                  </p>
                  
                  <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-black mb-6">Materials We Use:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {materials.map((material, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                          <span>{material}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Hammer size={16} />
                    Installation Process
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Professional
                    <span className="block text-orange-600">Installation Process</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our expert team follows a meticulous process to ensure your terrace waterproofing delivers 
                    optimal performance and long-lasting protection.
                  </p>
                  
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon size={24} className="text-white" />
                          </div>
                          <div className="text-4xl font-black text-orange-200 text-center mt-2">{step.step}</div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Protect Your Terrace Today
              </h2>
              <p className="text-xl text-orange-100 mb-10 leading-relaxed">
                Don't let the next monsoon reveal terrace leaks. Get a free consultation and quote 
                for professional terrace waterproofing to safeguard your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={handlePhoneClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Call: +91 9916290799
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Related
                  <span className="block text-orange-600">Services</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Explore our other specialized services that complement terrace waterproofing.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation animation="fade-in-up" delay={100}>
                <Link to="/basement-waterproofing" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Home size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Basement Waterproofing</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Prevent water damage and create dry, usable basement spaces.</p>
                  <div className="text-orange-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <Link to="/water-leakage-detection" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Thermometer size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Water Leakage Detection</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Advanced thermal imaging to locate hidden water leaks without damage.</p>
                  <div className="text-orange-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={300}>
                <Link to="/repair-section" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wrench size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Repair Services</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Expert repair and restoration services for all types of water damage.</p>
                  <div className="text-orange-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default TerraceWaterproofing