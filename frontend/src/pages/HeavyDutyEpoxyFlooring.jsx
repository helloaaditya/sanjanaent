import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Palette, Thermometer, Factory, Layers, SlidersHorizontal, Star } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const HeavyDutyEpoxyFlooring = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const features = [
    {
      title: "Durable Heavy-Duty Construction",
      description: "Designed for heavy-duty work environments, including factory robotics, chemical spills, high foot traffic and heavy industrial use.",
      icon: Shield
    },
    {
      title: "Joint-Free (Seamless) Finish",
      description: "Easy-to-clean surface resembles a large sheet of material, which prevents dust and dirt from collecting on joints.",
      icon: Award
    },
    {
      title: "Resistant to Chemicals and Damage",
      description: "Factory floors (chemical plants, production facilities, laboratories, automotive plants, etc.) use this type of flooring.",
      icon: CheckCircle
    },
    {
      title: "Anti-Slip & Safe",
      description: "Added anti-slip texture offers improved slip resistance in problem areas, especially when wet or busy.",
      icon: Target
    },
    {
      title: "Beautiful & Customizable",
      description: "Available in various colours, textures, sprinkle designs, different metallic finishes and a wide range of thicknesses.",
      icon: Sparkles
    }
  ]

  const epoxyTypes = [
    {
      title: "Industrial Epoxy Flooring",
      description: "Heavy-duty construction for heavy loads, machinery, forklifts and continuous movement.",
      icon: Factory
    },
    {
      title: "Premium Epoxy Coating",
      description: "High-end finish. Good for residential/commercial applications requiring a finish that looks good and feels good.",
      icon: Award
    },
    {
      title: "Self-Levelling Epoxy Flooring",
      description: "Produces an extremely level, glossy, and seamless surface.",
      icon: Layers
    },
    {
      title: "Metallic Epoxy Flooring",
      description: "Modern, beautiful and eye-catching. Ideal for showrooms and a luxury style.",
      icon: Star
    },
    {
      title: "Anti-Slip Epoxy Flooring",
      description: "Designed for wet or oily surfaces that have heavy foot traffic and require an extra level of grip.",
      icon: Target
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
    "Warehouses",
    "Factories",
    "Showrooms",
    "Offices",
    "Garages",
    "Retail Spaces"
  ]

  return (
    <>
      <Helmet>
        <title>Premium Epoxy Flooring & Heavy-Duty Epoxy Flooring in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Transform your space with state-of-the-art, durable heavy-duty epoxy flooring systems in Bangalore. Perfect for warehouses, factories, showrooms, offices & more." />
        <meta name="keywords" content="Heavy duty epoxy flooring bangalore, premium epoxy flooring, industrial epoxy flooring, epoxy flooring contractors bangalore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/heavy-duty-epoxy-flooring-in-bangalore" />
        <meta property="og:title" content="Premium Epoxy Flooring & Heavy-Duty Epoxy Flooring in Bangalore" />
        <meta property="og:description" content="State-of-the-art, durable, and attractive epoxy flooring systems for commercial, industrial, and residential spaces in Bangalore." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/heavy-duty-epoxy-flooring-in-bangalore" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
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
                  Premium & Heavy-Duty Epoxy Flooring
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Premium Epoxy Flooring &
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Heavy-Duty Epoxy Flooring in Bangalore
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                  With our state-of-the-art, durable, and attractive epoxy flooring systems, you can transform your commercial, 
                  industrial, or residential space into an environment that is both functional and aesthetically pleasing. Our 
                  epoxy flooring systems create a continuous, highly protective surface, provide exceptional durability, and are 
                  suitable for applications that experience extreme wear and tear. We specialise in custom epoxy flooring systems 
                  for warehouses, factories, showrooms, offices, garages, and retail spaces, tailored to each customer's specific needs.
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

        {/* Why Choose Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award size={16} />
                  Why Choose Us
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Our Epoxy Flooring
                  <span className="block text-blue-600">in Bangalore?</span>
                </h2>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-sm border border-blue-100 hover:shadow-lg transition-all duration-300 group">
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

        {/* Types of Epoxy Flooring Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <SlidersHorizontal size={16} />
                  Our Services
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Types of Epoxy Flooring
                  <span className="block text-blue-600">We Provide</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  We offer a comprehensive range of epoxy flooring solutions tailored to meet diverse needs and requirements.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {epoxyTypes.map((type, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <type.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{type.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-black mb-6">Our Applications</h2>
                  <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                    We specialise in custom epoxy flooring systems tailored to each customer's specific needs.
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
                    Our expert team follows a meticulous process to ensure your epoxy flooring installation meets the highest 
                    standards of quality and durability.
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

        {/* Why We Are The Best Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Award size={16} />
                    Best Contractors
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                    Why We Are the Best Epoxy Flooring
                    <span className="block text-blue-600">Contractors in Bangalore</span>
                  </h2>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl text-gray-700 leading-relaxed text-center">
                    Years of experience with commercial and Industrial flooring materials have enabled us to offer quality 
                    flooring systems with a high level of workmanship and the latest technological advances.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <div className="flex items-center gap-2 text-gray-700 bg-blue-50 px-6 py-3 rounded-lg">
                      <CheckCircle size={20} className="text-green-600" />
                      <span className="font-semibold">Years of Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 bg-blue-50 px-6 py-3 rounded-lg">
                      <CheckCircle size={20} className="text-green-600" />
                      <span className="font-semibold">High Quality Workmanship</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 bg-blue-50 px-6 py-3 rounded-lg">
                      <CheckCircle size={20} className="text-green-600" />
                      <span className="font-semibold">Latest Technology</span>
                    </div>
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
                Get a free consultation and quote for your premium epoxy flooring project. Our experts will assess 
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

        {/* Related Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Related
                  <span className="block text-blue-600">Services</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Explore our other specialized services that complement epoxy flooring solutions.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation animation="fade-in-up" delay={100}>
                <Link to="/pu-flooring" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Palette size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">PU Flooring</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Flexible polyurethane flooring systems with superior impact resistance.</p>
                  <div className="text-blue-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <Link to="/epoxy-flooring-services-in-bangalore" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Epoxy Flooring Services</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Premium epoxy flooring solutions for all types of spaces.</p>
                  <div className="text-blue-600 font-semibold flex items-center">
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
                  <div className="text-blue-600 font-semibold flex items-center">
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

export default HeavyDutyEpoxyFlooring

