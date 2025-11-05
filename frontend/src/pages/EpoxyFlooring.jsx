import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const EpoxyFlooring = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const features = [
    {
      title: "High Durability",
      description: "Exceptional resistance to wear, impact, and heavy loads makes it ideal for industrial environments.",
      icon: Shield
    },
    {
      title: "Chemical Resistance",
      description: "Withstands exposure to oils, acids, and other harsh chemicals commonly found in industrial settings.",
      icon: CheckCircle
    },
    {
      title: "Seamless Finish",
      description: "Creates a smooth, joint-free surface that prevents dirt accumulation and is easy to clean.",
      icon: Award
    },
    {
      title: "Customizable Appearance",
      description: "Available in various colors, patterns, and finishes to match your aesthetic preferences.",
      icon: Sparkles
    },
    {
      title: "Anti-Slip Properties",
      description: "Can be textured to provide slip resistance, enhancing workplace safety.",
      icon: Target
    },
    {
      title: "Long Lifespan",
      description: "With proper maintenance, epoxy floors can last 15-20 years or more.",
      icon: Hammer
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Surface Preparation',
      description: 'Thorough cleaning, grinding, and repair of existing concrete to ensure proper adhesion.',
      icon: Wrench
    },
    {
      step: '02',
      title: 'Primer Application',
      description: 'Application of epoxy primer to enhance bonding between concrete and epoxy coating.',
      icon: Eye
    },
    {
      step: '03',
      title: 'Epoxy Application',
      description: 'Multiple layers of epoxy resin are applied with decorative flakes or quartz if desired.',
      icon: Target
    },
    {
      step: '04',
      title: 'Topcoat Sealing',
      description: 'Final protective clear coat is applied for UV protection and enhanced durability.',
      icon: Hammer
    }
  ]

  const applications = [
    "Warehouses and Distribution Centers",
    "Manufacturing Facilities",
    "Automotive Repair Shops",
    "Food Processing Plants",
    "Pharmaceutical Laboratories",
    "Retail Stores and Showrooms",
    "Garages and Parking Areas",
    "Gymnasiums and Sports Facilities"
  ]

  return (
    <>
      <Helmet>
        <title>Epoxy Flooring Solutions in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Premium epoxy flooring services in Bangalore for industrial, commercial & residential spaces. Durable, chemical-resistant, customizable floors. Free inspection." />
        <meta name="keywords" content="epoxy flooring bangalore, epoxy flooring contractors bangalore, industrial epoxy flooring bangalore, commercial epoxy flooring bangalore, decorative epoxy flooring bangalore, anti static epoxy flooring bangalore, chemical resistant epoxy flooring bangalore, self leveling epoxy flooring bangalore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/epoxy-flooring" />
        <meta property="og:title" content="Epoxy Flooring Solutions in Bangalore" />
        <meta property="og:description" content="High-performance epoxy flooring for industrial and commercial spaces. Durable, seamless, and customizable." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/epoxy-flooring" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                  <Shield size={16} />
                  Premium Epoxy Flooring
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Industrial-Strength
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Epoxy Flooring Solutions
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Transform your space with our premium epoxy flooring systems. Durable, seamless, and customizable 
                  solutions for industrial, commercial, and residential applications.
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
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Shield size={16} />
                    What is Epoxy Flooring?
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Durable & Aesthetic
                    <span className="block text-blue-600">Flooring Solution</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Epoxy flooring is a high-performance coating system made from epoxy resins and hardeners. 
                    When combined, they create a rigid plastic material that is stronger than concrete and 
                    highly resistant to damage.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our epoxy flooring solutions provide a seamless, durable surface that enhances both the 
                    functionality and appearance of your space while offering long-term value.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>15-20 Year Lifespan</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Chemical Resistant</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Easy Maintenance</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="space-y-4">
                    {[
                      "Seamless, joint-free surface",
                      "Exceptional durability and strength",
                      "Resistance to chemicals and stains",
                      "Easy to clean and maintain",
                      "Available in multiple colors and finishes",
                      "Enhanced safety with anti-slip options",
                      "Cost-effective long-term solution",
                      "Quick installation with minimal downtime"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles size={16} />
                  Premium Features
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Our
                  <span className="block text-blue-600">Epoxy Flooring?</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our epoxy flooring systems are engineered for maximum performance, durability, and aesthetics.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-black mb-6">Applications</h2>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    Our epoxy flooring solutions are versatile and suitable for a wide range of environments 
                    where durability, cleanliness, and aesthetics are important.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Perfect For:</h3>
                    <ul className="space-y-3">
                      {applications.map((application, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target size={16} />
                    Installation Process
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Professional
                    <span className="block text-blue-600">Installation Process</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our expert team follows a meticulous process to ensure your epoxy flooring installation 
                    meets the highest standards of quality and durability.
                  </p>
                  
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon size={24} className="text-white" />
                          </div>
                          <div className="text-4xl font-black text-blue-200 text-center mt-2">{step.step}</div>
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Get a free consultation and quote for your epoxy flooring project. Our experts will assess 
                your needs and provide the best solution for your space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={handlePhoneClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
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

export default EpoxyFlooring