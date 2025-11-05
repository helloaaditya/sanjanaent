import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Thermometer ,Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Home, Droplets } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const BasementWaterproofing = () => {
  // Simple Wind icon since it's not imported
  const Wind = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>

  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const benefits = [
    {
      title: "Prevents Structural Damage",
      description: "Protects the foundation and structural integrity of your building from water infiltration.",
      icon: Shield
    },
    {
      title: "Eliminates Mold Growth",
      description: "Prevents moisture that leads to mold and mildew, ensuring a healthy living environment.",
      icon: Droplets
    },
    {
      title: "Increases Usable Space",
      description: "Transforms your basement into a dry, usable space for storage, recreation, or living areas.",
      icon: Home
    },
    {
      title: "Improves Air Quality",
      description: "Reduces humidity and prevents musty odors, creating a more comfortable indoor environment.",
      icon: Wind
    },
    {
      title: "Boosts Property Value",
      description: "Dry, well-maintained basements significantly increase the overall value of your property.",
      icon: Award
    },
    {
      title: "Reduces Maintenance Costs",
      description: "Prevents costly repairs caused by water damage to walls, floors, and stored items.",
      icon: Wrench
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Inspection & Assessment',
      description: 'Thorough evaluation of basement conditions to identify water entry points and damage.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Drainage System',
      description: 'Installation or improvement of drainage systems to redirect water away from the foundation.',
      icon: Droplets
    },
    {
      step: '03',
      title: 'Surface Preparation',
      description: 'Cleaning and preparing walls and floors for waterproofing application.',
      icon: Wrench
    },
    {
      step: '04',
      title: 'Waterproofing Application',
      description: 'Application of high-quality waterproofing membranes and coatings to all surfaces.',
      icon: Shield
    },
    {
      step: '05',
      title: 'Sealing & Finishing',
      description: 'Sealing all joints, cracks, and penetrations to ensure complete waterproofing coverage.',
      icon: Target
    },
    {
      step: '06',
      title: 'Quality Assurance',
      description: 'Comprehensive inspection and testing to ensure effective waterproofing performance.',
      icon: CheckCircle
    }
  ]

  const solutions = [
    "Interior Waterproofing Systems",
    "Exterior Waterproofing Membranes",
    "Cementitious Waterproofing",
    "Liquid Applied Membranes",
    "Bituminous Coatings",
    "Crystalline Waterproofing"
  ]

  return (
    <>
      <Helmet>
        <title>Basement Waterproofing in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Professional basement waterproofing services in Bangalore. Prevent water damage & mold growth with advanced solutions. 15-20 year warranty. Free inspection." />
        <meta name="keywords" content="basement waterproofing bangalore, underground waterproofing, basement leakage repair, waterproofing contractors, foundation waterproofing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/basement-waterproofing" />
        <meta property="og:title" content="Basement Waterproofing Services in Bangalore" />
        <meta property="og:description" content="Professional basement waterproofing services to prevent water damage and create dry, usable basement spaces with 15-20 year warranty." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/basement-waterproofing" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                  <Home size={16} />
                  Basement Waterproofing
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Transform Your
                  <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Basement Space
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Create a dry, usable basement with our professional waterproofing solutions. Prevent water damage, 
                  mold growth, and structural issues with advanced techniques and premium materials.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
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
                  <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Shield size={16} />
                    Why Basement Waterproofing?
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Essential Protection
                    <span className="block text-indigo-600">For Your Basement</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Basement waterproofing is crucial for maintaining a dry, healthy, and usable basement space. 
                    Without proper waterproofing, basements are susceptible to water infiltration from groundwater, 
                    surface water, and humidity, leading to structural damage, mold growth, and unusable space.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our professional basement waterproofing solutions create a comprehensive barrier against water 
                    intrusion, ensuring your basement remains dry and functional for years to come.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>15-20 Year Warranty</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Advanced Techniques</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Expert Installation</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="space-y-4">
                    {[
                      "Prevents costly structural damage to foundation walls",
                      "Eliminates mold and mildew growth for healthier air quality",
                      "Creates usable living or storage space in your basement",
                      "Increases property value and marketability",
                      "Reduces energy costs by preventing moisture-related issues",
                      "Prevents musty odors and water damage to stored items",
                      "Protects against flooding and groundwater infiltration",
                      "Enhances overall comfort and livability of your home"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles size={16} />
                  Comprehensive Benefits
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Our
                  <span className="block text-indigo-600">Basement Waterproofing?</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our basement waterproofing solutions offer comprehensive protection with long-lasting results.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

        {/* Solutions & Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target size={16} />
                    Waterproofing Solutions
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Advanced
                    <span className="block text-indigo-600">Waterproofing Solutions</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    We offer a range of basement waterproofing solutions tailored to your specific needs and 
                    conditions. Our approach combines interior and exterior techniques for comprehensive protection.
                  </p>
                  
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-black mb-6">Solutions We Provide:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {solutions.map((solution, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-indigo-300 rounded-full"></div>
                          <span>{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Hammer size={16} />
                    Installation Process
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Professional
                    <span className="block text-indigo-600">Installation Process</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our certified technicians follow a comprehensive process to ensure your basement waterproofing 
                    delivers optimal performance and long-lasting protection.
                  </p>
                  
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon size={24} className="text-white" />
                          </div>
                          <div className="text-4xl font-black text-indigo-200 text-center mt-2">{step.step}</div>
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
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Ready to Transform Your Basement?
              </h2>
              <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
                Get a free consultation and quote for professional basement waterproofing to create a dry, 
                usable space that adds value to your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={handlePhoneClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
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
                  <span className="block text-indigo-600">Services</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Explore our other specialized services that complement basement waterproofing.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation animation="fade-in-up" delay={100}>
                <Link to="/terrace-waterproofing" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Home size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Terrace Waterproofing</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Professional terrace waterproofing to prevent water damage and extend terrace life.</p>
                  <div className="text-indigo-600 font-semibold flex items-center">
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
                  <div className="text-indigo-600 font-semibold flex items-center">
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
                  <div className="text-indigo-600 font-semibold flex items-center">
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

export default BasementWaterproofing