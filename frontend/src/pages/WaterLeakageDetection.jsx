import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Thermometer, Wifi, Camera } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const WaterLeakageDetection = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const methods = [
    {
      title: "Thermal Imaging",
      description: "Infrared thermography to detect temperature variations caused by hidden moisture.",
      icon: Thermometer
    },
    {
      title: "Moisture Meters",
      description: "Electronic devices that measure moisture content in various building materials.",
      icon: Wifi
    },
    {
      title: "Visual Inspection",
      description: "Detailed examination of visible signs of water damage and potential entry points.",
      icon: Eye
    },
    {
      title: "Water Testing",
      description: "Controlled water application to identify leak sources in a safe manner.",
      icon: Droplets
    },
    {
      title: "Pressure Testing",
      description: "Testing plumbing systems under pressure to identify pipe leaks.",
      icon: Target
    },
    {
      title: "Video Inspection",
      description: "Using specialized cameras to inspect hard-to-reach areas like pipes and walls.",
      icon: Camera
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of the property to identify potential leak sources and affected areas.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Equipment Setup',
      description: 'Preparation and calibration of specialized detection equipment for accurate readings.',
      icon: Wrench
    },
    {
      step: '03',
      title: 'Systematic Detection',
      description: 'Application of various detection methods to locate the exact source of water intrusion.',
      icon: Target
    },
    {
      step: '04',
      title: 'Documentation & Reporting',
      description: 'Detailed reporting with findings, photographs, and recommendations for remediation.',
      icon: Clipboard
    }
  ]

  const benefits = [
    "Early detection prevents costly structural damage",
    "Identifies hidden leaks before they become major problems",
    "Minimizes disruption to your property and daily activities",
    "Provides accurate location of leak sources",
    "Saves time and money compared to guesswork repairs",
    "Prevents mold growth and related health issues",
    "Preserves the integrity and value of your property",
    "Peace of mind with professional, reliable results"
  ]

  // Simple Droplets and Clipboard icons since they're not imported
  const Droplets = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.5-2.26-1.7-3.05-.5-.27-.9-.48-1.3-.48-.4 0-.8.19-1.3.48-1.2.79-1.7 1.89-1.7 3.05 0 2.22 1.8 4.05 4 4.05z"/><path d="M16 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.5-2.26-1.7-3.05-.5-.27-.9-.48-1.3-.48-.4 0-.8.19-1.3.48-1.2.79-1.7 1.89-1.7 3.05 0 2.22 1.8 4.05 4 4.05z"/></svg>
  const Clipboard = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>

  return (
    <>
      <Helmet>
        <title>Water Leakage Detection Services in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Advanced water leakage detection using thermal imaging and specialized equipment in Bangalore. Locate hidden leaks quickly and accurately. Free inspection." />
        <meta name="keywords" content="water leakage detection bangalore, thermal imaging water leak detection bangalore, hidden water leak detection bangalore, moisture detection services bangalore, infrared thermography water leak detection bangalore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/water-leakage-detection" />
        <meta property="og:title" content="Water Leakage Detection Services in Bangalore" />
        <meta property="og:description" content="Advanced water leakage detection using thermal imaging and specialized equipment. Locate hidden leaks quickly and accurately." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/water-leakage-detection" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                  <Thermometer size={16} />
                  Advanced Leak Detection
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Precision Water Leak
                  <span className="block bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                    Detection Services
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Locate hidden water leaks quickly and accurately with our advanced thermal imaging technology 
                  and specialized detection equipment. Minimize damage and save costs with our expert services.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                  >
                    Get Free Inspection
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
                  <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Thermometer size={16} />
                    Advanced Detection Technology
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Locate Hidden Leaks
                    <span className="block text-teal-600">Without Damage</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Water leaks can cause significant damage to your property before they become visible. Our 
                    advanced detection technology allows us to locate hidden leaks without the need for destructive 
                    exploration, saving you time, money, and inconvenience.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Using state-of-the-art thermal imaging cameras and moisture detection equipment, our certified 
                    technicians can pinpoint the exact location of water intrusion, whether it's behind walls, 
                    under floors, or within ceiling structures.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Non-Invasive Detection</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Accurate Results</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Fast Service</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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

        {/* Detection Methods Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles size={16} />
                  Detection Methods
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Advanced
                  <span className="block text-teal-600">Detection Technology</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our comprehensive approach combines multiple detection methods to ensure accurate identification 
                  of water intrusion sources.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {methods.map((method, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <method.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{method.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-black mb-6">Our Process</h2>
                  <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                    We follow a systematic approach to ensure accurate detection and comprehensive reporting 
                    for every water leak investigation.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">What to Expect:</h3>
                    <ul className="space-y-3">
                      {[
                        "Thorough property assessment",
                        "Application of multiple detection methods",
                        "Precise location of leak sources",
                        "Detailed photographic documentation",
                        "Comprehensive written report",
                        "Recommendations for remediation"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target size={16} />
                    Systematic Approach
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Professional
                    <span className="block text-teal-600">Detection Process</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our certified technicians follow a meticulous process to ensure accurate detection and 
                    comprehensive reporting for every water leak investigation.
                  </p>
                  
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon size={24} className="text-white" />
                          </div>
                          <div className="text-4xl font-black text-teal-200 text-center mt-2">{step.step}</div>
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
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Suspect a Hidden Leak?
              </h2>
              <p className="text-xl text-teal-100 mb-10 leading-relaxed">
                Don't wait for visible damage. Get a professional water leak detection service to identify 
                and locate hidden leaks before they cause significant damage to your property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Schedule Inspection
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={handlePhoneClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
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

export default WaterLeakageDetection