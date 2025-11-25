import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Droplets, Lock } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const AntiCorrosionCoating = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const features = [
    {
      title: "Corrosion Protection",
      description: "Advanced coating systems provide superior protection against rust, oxidation, and chemical corrosion.",
      icon: Shield
    },
    {
      title: "Chemical Resistance",
      description: "Excellent resistance to acids, alkalis, solvents, and other corrosive chemicals in industrial environments.",
      icon: Droplets
    },
    {
      title: "Weather Resistant",
      description: "Protects against UV radiation, moisture, and extreme weather conditions in outdoor applications.",
      icon: Lock
    },
    {
      title: "Long Lifespan",
      description: "Extends the life of metal structures and equipment significantly, reducing replacement costs.",
      icon: Award
    },
    {
      title: "Versatile Application",
      description: "Suitable for various substrates including steel, iron, concrete, and other metal surfaces.",
      icon: Target
    },
    {
      title: "Easy Maintenance",
      description: "Low-maintenance coating systems that retain protective properties with minimal upkeep.",
      icon: Sparkles
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Surface Assessment',
      description: 'Thorough evaluation of surface condition and identification of corrosion issues.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Surface Preparation',
      description: 'Cleaning, sandblasting, and preparation to remove rust, scale, and contaminants.',
      icon: Wrench
    },
    {
      step: '03',
      title: 'Coating Application',
      description: 'Professional application of anti-corrosion primer and topcoat systems.',
      icon: Droplets
    },
    {
      step: '04',
      title: 'Quality Inspection',
      description: 'Final inspection and testing to ensure proper coating thickness and coverage.',
      icon: CheckCircle
    }
  ]

  const applications = [
    "Steel Structures and Bridges",
    "Industrial Equipment and Machinery",
    "Storage Tanks and Vessels",
    "Pipelines and Ductwork",
    "Marine and Offshore Structures",
    "Automotive Components",
    "Chemical Processing Plants",
    "Power Generation Facilities"
  ]

  return (
    <>
      <Helmet>
        <title>Anti Corrosion Coating Services in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Protect your surfaces with professional anti-corrosion coating services in Bangalore. Long-lasting protection for metals & structures." />
        <meta name="keywords" content="anti corrosion coating services in bangalore, rust protection coating, corrosion resistant coating, metal protection coating, industrial coating services" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/anti-corrosion-coating-services-in-bangalore" />
        <meta property="og:title" content="Anti Corrosion Coating Services in Bangalore" />
        <meta property="og:description" content="Professional anti-corrosion coating solutions. Protect metal structures from rust, chemicals, and weather damage." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/anti-corrosion-coating-services-in-bangalore" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-900 via-rose-900 to-pink-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                  <Shield size={16} />
                  Corrosion Protection
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Anti Corrosion Coating
                  <span className="block bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent">
                    Services in Bangalore
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Protect your metal structures and equipment from corrosion with our professional anti-corrosion 
                  coating services. Advanced protection against rust, chemicals, and environmental damage.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
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
                  <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Shield size={16} />
                    What is Anti-Corrosion Coating?
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Advanced Protection
                    <span className="block text-red-600">Against Corrosion</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Anti-corrosion coating is a protective layer applied to metal surfaces to prevent rust, 
                    oxidation, and chemical degradation. These specialized coatings create a barrier that 
                    shields metal from moisture, chemicals, and environmental factors that cause corrosion.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our anti-corrosion coating services extend the lifespan of metal structures and equipment, 
                    reducing maintenance costs and ensuring long-term protection.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Rust Prevention</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Chemical Resistant</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Long-Lasting</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 border border-red-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="space-y-4">
                    {[
                      "Prevents rust and corrosion damage",
                      "Extends lifespan of metal structures",
                      "Resistant to chemicals and harsh environments",
                      "Protects against weather and UV damage",
                      "Reduces maintenance and replacement costs",
                      "Suitable for various metal substrates",
                      "Professional application ensures optimal protection",
                      "Compliance with industry standards"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles size={16} />
                  Premium Features
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Our
                  <span className="block text-red-600">Anti-Corrosion Coating?</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our anti-corrosion coating systems provide superior protection and durability.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                <div className="bg-gradient-to-br from-red-600 to-rose-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-black mb-6">Applications</h2>
                  <p className="text-red-100 text-lg mb-8 leading-relaxed">
                    Our anti-corrosion coating services are essential for protecting metal structures and 
                    equipment in various industrial and commercial applications.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Perfect For:</h3>
                    <ul className="space-y-3">
                      {applications.map((application, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target size={16} />
                    Application Process
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Professional
                    <span className="block text-red-600">Coating Process</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our expert team follows industry best practices to ensure proper surface preparation 
                    and coating application for maximum protection.
                  </p>
                  
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon size={24} className="text-white" />
                          </div>
                          <div className="text-4xl font-black text-red-200 text-center mt-2">{step.step}</div>
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
        <section className="py-20 bg-gradient-to-r from-red-600 to-rose-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Ready to Protect Your Assets?
              </h2>
              <p className="text-xl text-red-100 mb-10 leading-relaxed">
                Get a free consultation and quote for your anti-corrosion coating project. Our experts will assess 
                your needs and recommend the best protection solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={handlePhoneClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
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
                  <span className="block text-red-600">Services</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Explore our other specialized services that complement anti-corrosion coating solutions.
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
                  <div className="text-red-600 font-semibold flex items-center">
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
                  <div className="text-red-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={300}>
                <Link to="/esd-flooring-installation-bangalore" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">ESD Flooring</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Electrostatic discharge protection flooring for electronics manufacturing.</p>
                  <div className="text-red-600 font-semibold flex items-center">
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

export default AntiCorrosionCoating

