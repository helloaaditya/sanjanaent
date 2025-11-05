import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Droplets, Container } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const WaterTanksWaterproofing = () => {
  // Simple Sun and Home icons since they're not imported
  const Sun = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
  const Home = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>

  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const benefits = [
    {
      title: "Prevents Water Loss",
      description: "Eliminates seepage and leakage that leads to valuable water loss and waste.",
      icon: Droplets
    },
    {
      title: "Maintains Water Quality",
      description: "Prevents contamination from external sources, ensuring clean and safe water storage.",
      icon: Container
    },
    {
      title: "Extends Tank Life",
      description: "Protects tank structure from deterioration caused by water exposure and chemical reactions.",
      icon: Shield
    },
    {
      title: "Prevents Structural Damage",
      description: "Protects surrounding areas from water damage caused by tank leaks.",
      icon: Home
    },
    {
      title: "Reduces Maintenance Costs",
      description: "Minimizes the need for frequent repairs and maintenance of water storage systems.",
      icon: Wrench
    },
    {
      title: "Ensures Compliance",
      description: "Meets health and safety standards for water storage facilities.",
      icon: CheckCircle
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Tank Inspection',
      description: 'Comprehensive evaluation of tank condition to identify cracks, damages, and problem areas.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Surface Preparation',
      description: 'Cleaning and preparation of tank surfaces for optimal waterproofing material adhesion.',
      icon: Wrench
    },
    {
      step: '03',
      title: "Crack Repair",
      description: 'Repairing any existing cracks or damages in the tank structure before waterproofing.',
      icon: Target
    },
    {
      step: '04',
      title: 'Waterproofing Application',
      description: 'Application of specialized waterproofing materials suitable for potable water storage.',
      icon: Droplets
    },
    {
      step: '05',
      title: 'Curing & Drying',
      description: 'Proper curing time to ensure maximum effectiveness and durability of the waterproofing.',
      icon: Sun
    },
    {
      step: '06',
      title: 'Quality Testing',
      description: 'Comprehensive testing to ensure complete waterproofing and water quality compliance.',
      icon: CheckCircle
    }
  ]

  const materials = [
    "Cementitious Waterproofing",
    "Epoxy Coatings",
    "Polyurethane Membranes",
    "Bituminous Coatings",
    "Crystalline Waterproofing",
    "Liquid Applied Membranes"
  ]

  return (
    <>
      <Helmet>
        <title>Water Tanks Waterproofing Services in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Professional water tanks waterproofing services in Bangalore. Prevent water loss and contamination with our advanced waterproofing solutions for concrete and metal tanks. Free inspection." />
        <meta name="keywords" content="water tank waterproofing bangalore, concrete water tank waterproofing bangalore, metal water tank coating bangalore, water tank leakage repair bangalore, potable water tank waterproofing bangalore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/water-tanks-waterproofing" />
        <meta property="og:title" content="Water Tanks Waterproofing Services in Bangalore" />
        <meta property="og:description" content="Professional water tanks waterproofing services to prevent water loss and contamination. Advanced solutions for concrete and metal water storage tanks." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/water-tanks-waterproofing" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                  <Container size={16} />
                  Water Tank Waterproofing
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Protect Your
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Water Investment
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Safeguard your water storage systems with our professional waterproofing solutions. 
                  Prevent water loss, contamination, and structural damage with advanced materials and techniques.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
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
                  <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Droplets size={16} />
                    Why Water Tank Waterproofing?
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Essential Protection
                    <span className="block text-cyan-600">For Water Storage</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Water tank waterproofing is critical for maintaining the integrity of your water storage systems. 
                    Without proper waterproofing, tanks are susceptible to seepage, leakage, and contamination that 
                    can lead to water loss, structural damage, and health risks.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our professional water tank waterproofing solutions create a protective barrier that prevents 
                    water loss and contamination while extending the lifespan of your storage systems. We specialize 
                    in both concrete and metal tank waterproofing with materials safe for potable water storage.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Potable Water Safe</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>10-15 Year Warranty</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Advanced Materials</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="space-y-4">
                    {[
                      "Prevents valuable water loss through seepage and leakage",
                      "Maintains water quality by preventing contamination",
                      "Extends the lifespan of water storage tanks",
                      "Protects surrounding structures from water damage",
                      "Reduces maintenance costs and frequency",
                      "Ensures compliance with health and safety standards",
                      "Improves efficiency of water distribution systems",
                      "Provides long-term protection with minimal maintenance"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles size={16} />
                  Comprehensive Benefits
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Our
                  <span className="block text-cyan-600">Water Tank Waterproofing?</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our water tank waterproofing solutions offer comprehensive protection with long-lasting results.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                  <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target size={16} />
                    Materials Used
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Premium
                    <span className="block text-cyan-600">Waterproofing Materials</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    We use only the highest quality waterproofing materials that are specifically designed and 
                    certified for water storage applications. All our materials are safe for potable water and 
                    provide long-lasting protection.
                  </p>
                  
                  <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-black mb-6">Materials We Use:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {materials.map((material, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                          <span>{material}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Hammer size={16} />
                    Installation Process
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Professional
                    <span className="block text-cyan-600">Installation Process</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our certified technicians follow a meticulous process to ensure your water tank waterproofing 
                    delivers optimal performance and long-lasting protection while maintaining water quality standards.
                  </p>
                  
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon size={24} className="text-white" />
                          </div>
                          <div className="text-4xl font-black text-cyan-200 text-center mt-2">{step.step}</div>
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
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Protect Your Water Storage
              </h2>
              <p className="text-xl text-cyan-100 mb-10 leading-relaxed">
                Don't let water loss and contamination compromise your water storage systems. Get a free 
                consultation and quote for professional water tank waterproofing to ensure long-term protection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={handlePhoneClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Call: +91 9916290799
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </>
  )
}

export default WaterTanksWaterproofing