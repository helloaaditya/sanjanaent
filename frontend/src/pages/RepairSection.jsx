import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Thermometer ,Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Zap, Palette } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const RepairSection = () => {
  // Simple icons since they're not imported
  const Droplets = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.5-2.26-1.7-3.05-.5-.27-.9-.48-1.3-.48-.4 0-.8.19-1.3.48-1.2.79-1.7 1.89-1.7 3.05 0 2.22 1.8 4.05 4 4.05z"/><path d="M16 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.5-2.26-1.7-3.05-.5-.27-.9-.48-1.3-.48-.4 0-.8.19-1.3.48-1.2.79-1.7 1.89-1.7 3.05 0 2.22 1.8 4.05 4 4.05z"/></svg>
  const Square = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
  const Brush = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></svg>

  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const services = [
    {
      title: "Waterproofing Repairs",
      description: "Expert repair of existing waterproofing systems including membranes, coatings, and sealants.",
      icon: Droplets
    },
    {
      title: "Structural Repairs",
      description: "Restoration of damaged concrete, masonry, and structural elements to restore integrity.",
      icon: Hammer
    },
    {
      title: "Flooring Repairs",
      description: "Repair and restoration of epoxy, PU, and other industrial flooring systems.",
      icon: Square
    },
    {
      title: "Leak Repairs",
      description: "Identification and repair of water leaks in roofs, walls, basements, and water tanks.",
      icon: Wrench
    },
    {
      title: "Crack Injection",
      description: "Specialized injection techniques to seal structural and non-structural cracks.",
      icon: Zap
    },
    {
      title: "Surface Restoration",
      description: "Complete restoration of deteriorated surfaces to like-new condition.",
      icon: Brush
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Inspection & Diagnosis',
      description: 'Thorough evaluation to identify the root cause of damage and determine repair requirements.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Repair Plan',
      description: 'Development of a comprehensive repair plan with timeline and material specifications.',
      icon: Target
    },
    {
      step: '03',
      title: 'Surface Preparation',
      description: 'Cleaning, removal of damaged materials, and preparation of surfaces for repair.',
      icon: Wrench
    },
    {
      step: '04',
      title: 'Repair Execution',
      description: 'Application of appropriate repair materials and techniques to restore functionality.',
      icon: Hammer
    },
    {
      step: '05',
      title: 'Quality Assurance',
      description: 'Comprehensive inspection to ensure repairs meet quality standards and performance requirements.',
      icon: CheckCircle
    },
    {
      step: '06',
      title: 'Protection & Finishing',
      description: 'Application of protective coatings and finishing touches for long-term durability.',
      icon: Shield
    }
  ]

  const benefits = [
    "Restores structural integrity and safety",
    "Extends the lifespan of existing systems",
    "More cost-effective than complete replacement",
    "Minimizes disruption to your operations",
    "Preserves the value of your property",
    "Addresses issues before they become major problems",
    "Uses advanced materials and techniques",
    "Backed by expert craftsmanship and warranty"
  ]

  return (
    <>
      <Helmet>
        <title>Repair Services in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Professional repair services for waterproofing, flooring & structural issues in Bangalore. Expert restoration solutions with 1-year warranty. Same-day emergency service. Quick inspection." />
        <meta name="keywords" content="waterproofing repair bangalore, flooring repair services, structural repair contractors, crack injection services, building maintenance services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/repair-section" />
        <meta property="og:title" content="Repair Services in Bangalore" />
        <meta property="og:description" content="Professional repair services for waterproofing, flooring, and structural issues. Expert restoration and maintenance solutions with 1-year warranty." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/repair-section" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                  <Wrench size={16} />
                  Professional Repairs
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Expert Repair &
                  <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                    Restoration Services
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Restore the integrity and functionality of your property with our professional repair services. 
                  From waterproofing to structural repairs, we bring expertise and quality to every project.
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
                  <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Wrench size={16} />
                    Professional Repair Services
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Quality Repairs &
                    <span className="block text-amber-600">Restoration Solutions</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    When your property requires repairs, whether it's waterproofing failures, flooring damage, 
                    or structural issues, our expert team provides comprehensive solutions to restore functionality 
                    and protect your investment.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    We understand that repairs are often urgent and disruptive. That's why we offer fast response 
                    times, minimal disruption to your operations, and long-lasting solutions that address the root 
                    cause of problems rather than just surface symptoms.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Same-Day Emergency Service</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Expert Craftsmanship</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>1-Year Warranty</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles size={16} />
                  Repair Services
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Comprehensive
                  <span className="block text-amber-600">Repair Solutions</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our repair services cover all aspects of property maintenance and restoration, from minor fixes 
                  to major structural repairs.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-black mb-6">Our Approach</h2>
                  <p className="text-amber-100 text-lg mb-8 leading-relaxed">
                    We follow a systematic approach to ensure every repair project is completed to the highest 
                    standards of quality and durability.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">What Sets Us Apart:</h3>
                    <ul className="space-y-3">
                      {[
                        "Thorough diagnostic process to identify root causes",
                        "Use of premium materials and advanced techniques",
                        "Attention to detail in every aspect of the work",
                        "Clean and organized work practices",
                        "Respect for your property and schedule",
                        "Comprehensive warranty on all repair work"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Hammer size={16} />
                    Repair Process
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Professional
                    <span className="block text-amber-600">Repair Process</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our certified technicians follow a meticulous process to ensure your repair project delivers 
                    optimal results and long-lasting protection.
                  </p>
                  
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon size={24} className="text-white" />
                          </div>
                          <div className="text-4xl font-black text-amber-200 text-center mt-2">{step.step}</div>
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
        <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Need Professional Repairs?
              </h2>
              <p className="text-xl text-amber-100 mb-10 leading-relaxed">
                Don't let minor issues become major problems. Get a free consultation and quote for professional 
                repair services to restore your property to optimal condition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-amber-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={handlePhoneClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
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
                  <span className="block text-amber-600">Services</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Explore our other specialized services that complement our repair solutions.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation animation="fade-in-up" delay={100}>
                <Link to="/epoxy-flooring" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Epoxy Flooring</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Durable, chemical-resistant epoxy flooring systems for industrial environments.</p>
                  <div className="text-amber-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <Link to="/pu-flooring" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Palette size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">PU Flooring</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Flexible polyurethane flooring systems with superior impact resistance.</p>
                  <div className="text-amber-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={300}>
                <Link to="/water-leakage-detection" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Thermometer size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Water Leakage Detection</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Advanced thermal imaging to locate hidden water leaks without damage.</p>
                  <div className="text-amber-600 font-semibold flex items-center">
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

export default RepairSection