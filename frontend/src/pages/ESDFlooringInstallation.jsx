import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Zap, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Shield, Lock } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const ESDFlooringInstallation = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const features = [
    {
      title: "Anti-Static & Static-Control Properties",
      description: "Prevents static electricity buildup and safely channels charges to ground.",
      icon: Zap
    },
    {
      title: "Prevents Electronic Parts from Getting Damaged",
      description: "Protects delicate electronic components from static discharge damage.",
      icon: Shield
    },
    {
      title: "Seamless & Tough Surface Finish",
      description: "Joint-free, durable surface that maintains ESD properties under heavy use.",
      icon: Target
    },
    {
      title: "Won't be Affected by Chemicals, Oil & Wear",
      description: "Resistant to chemicals, oils, and wear while maintaining performance.",
      icon: Award
    },
    {
      title: "Quickly Cleaned & Costs Little for Upkeep",
      description: "Easy maintenance with minimal upkeep costs.",
      icon: Sparkles
    },
    {
      title: "Extended Life Cycle",
      description: "Long-lasting performance with extended service life.",
      icon: Lock
    },
    {
      title: "Variety of Colors & Thicknesses Offered",
      description: "Multiple color options and thickness configurations available.",
      icon: Hammer
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Site Assessment',
      description: 'Evaluation of facility requirements and ESD protection needs for optimal system design.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Surface Preparation',
      description: 'Thorough cleaning, grinding, and preparation of substrate to ensure proper adhesion.',
      icon: Wrench
    },
    {
      step: '03',
      title: 'ESD System Installation',
      description: 'Application of conductive primer and ESD epoxy layers with proper grounding connections.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Testing & Verification',
      description: 'Comprehensive testing of electrical resistance and ESD compliance before final approval.',
      icon: CheckCircle
    }
  ]

  const applications = [
    "Electronic manufacturing units",
    "PCB assembly plants",
    "Semiconductor industries",
    "Data centers",
    "Laboratories & R&D centers",
    "Server rooms",
    "Telecommunications units",
    "Aerospace & defense manufacturing",
    "Hospitals & diagnostic labs"
  ]

  const whyChooseUs = [
    "Skilled team with expertise in static-control flooring technology",
    "Top-notch ESD epoxy & conductive flooring materials",
    "Accurate and expert installation",
    "Flooring solutions customized for your industry's requirements",
    "Timely delivery with durability to last",
    "Cost-effective and clear pricing"
  ]

  return (
    <>
      <Helmet>
        <title>ESD Flooring Installation in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Professional ESD flooring installation in Bangalore for electronics manufacturing units & sensitive areas." />
        <meta name="keywords" content="ESD flooring installation in Bangalore, electrostatic discharge flooring, conductive flooring, ESD compliant flooring, electronics manufacturing flooring" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/esd-flooring-installation-in-bangalore" />
        <meta property="og:title" content="ESD Flooring Installation in Bangalore" />
        <meta property="og:description" content="Professional ESD flooring solutions for electronics manufacturing and data centers. Static dissipation, compliance, and durability." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/esd-flooring-installation-in-bangalore" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                  <Zap size={16} />
                  ESD Flooring Solutions
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  ESD Flooring Installation
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    in Bangalore
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                  Sanjana Waterproofing offers high-performance anti-static flooring systems designed to safeguard delicate electronic components, 
                  machinery, and equipment. We specialise in ESD (Electrostatic Discharge) flooring installation in Bangalore. For industries 
                  where static electricity can cause damage or disruptions, our ESD floors guarantee a secure, controlled environment.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
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
                  <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Zap size={16} />
                    What is ESD Flooring?
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Electrostatic Discharge
                    <span className="block text-yellow-600">Protection Flooring</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    ESD flooring is an engineered floor system that is specifically designed to inhibit the accumulation of static electricity 
                    and to channel electric charges to the ground in a safe manner. It is applied in places where electronic parts, chemicals, 
                    or top-notch machines are used and assures safety, solidity, and protection.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>ESD Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Static Dissipation</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Durable & Long-lasting</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="space-y-4">
                    {[
                      "Protects sensitive electronic equipment from static damage",
                      "Meets industry ESD compliance standards",
                      "Controlled electrical conductivity for safe grounding",
                      "Seamless installation prevents charge accumulation",
                      "Resistant to chemicals and heavy traffic",
                      "Easy maintenance without compromising ESD properties",
                      "Long-lasting performance with proper care",
                      "Professional installation and testing included"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles size={16} />
                  Premium Features
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Our
                  <span className="block text-yellow-600">ESD Flooring?</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our ESD flooring systems are engineered for maximum static control and compliance.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div className="bg-gradient-to-br from-yellow-600 to-orange-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-black mb-6">Best Applications of ESD Flooring</h2>
                  <p className="text-yellow-100 text-lg mb-8 leading-relaxed">
                    Our ESD flooring solutions are ideal for:
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Perfect For:</h3>
                    <ul className="space-y-3">
                      {applications.map((application, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-orange-300 rounded-full"></div>
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target size={16} />
                    Installation Process
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Professional
                    <span className="block text-yellow-600">Installation Process</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our certified technicians follow strict protocols to ensure your ESD flooring meets 
                    all compliance requirements and performs optimally.
                  </p>
                  
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon size={24} className="text-white" />
                          </div>
                          <div className="text-4xl font-black text-yellow-200 text-center mt-2">{step.step}</div>
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

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award size={16} />
                  Why Choose Us
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Sanjana Waterproofing
                  <span className="block text-yellow-600">for ESD Flooring in Bangalore?</span>
                </h2>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Contact Us for ESD Flooring Installation in Bangalore
              </h2>
              <p className="text-xl text-yellow-100 mb-10 leading-relaxed">
                Ensure complete protection for your equipment and workspace with our high-quality ESD flooring solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-yellow-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={handlePhoneClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
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
                  <span className="block text-yellow-600">Services</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Explore our other specialized services that complement ESD flooring solutions.
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
                  <div className="text-yellow-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <Link to="/warehouse-bay-marking-bangalore" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Warehouse Bay Marking</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Professional floor marking solutions for organized warehouse operations.</p>
                  <div className="text-yellow-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={300}>
                <Link to="/car-parking-flooring-solutions-bangalore" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Car Parking Flooring</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Durable and aesthetic flooring solutions for parking areas and garages.</p>
                  <div className="text-yellow-600 font-semibold flex items-center">
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

export default ESDFlooringInstallation

