import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Palette } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const PUFlooring = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const features = [
    {
      title: "Flexibility",
      description: "Polyurethane's flexible nature allows it to withstand minor substrate movements without cracking.",
      icon: Shield
    },
    {
      title: "Chemical Resistance",
      description: "Excellent resistance to oils, greases, and a wide range of chemicals commonly found in industrial environments.",
      icon: CheckCircle
    },
    {
      title: "Impact Resistance",
      description: "Superior ability to absorb impacts and resist damage from heavy objects or equipment.",
      icon: Award
    },
    {
      title: "Temperature Stability",
      description: "Maintains performance across a wide temperature range, from freezing to high heat conditions.",
      icon: Sparkles
    },
    {
      title: "Seamless Finish",
      description: "Creates a smooth, joint-free surface that prevents dirt accumulation and is easy to clean.",
      icon: Target
    },
    {
      title: "Aesthetic Appeal",
      description: "Available in various colors, textures, and finishes to enhance the visual appeal of your space.",
      icon: Palette
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Surface Assessment',
      description: 'Thorough evaluation of existing floor condition to determine preparation requirements.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Preparation',
      description: 'Cleaning, grinding, and repairing the substrate to ensure optimal adhesion.',
      icon: Wrench
    },
    {
      step: '03',
      title: 'Primer Application',
      description: 'Application of specialized primer to enhance bonding between substrate and PU system.',
      icon: Target
    },
    {
      step: '04',
      title: 'PU System Installation',
      description: 'Application of polyurethane base coats, decorative elements, and topcoats as specified.',
      icon: Hammer
    }
  ]

  const applications = [
    "Food Processing Facilities",
    "Pharmaceutical Laboratories",
    "Healthcare Facilities",
    "Aircraft Hangars",
    "Automotive Showrooms",
    "Cold Storage Facilities",
    "Chemical Plants",
    "Warehouse Floors"
  ]

  return (
    <>
      <Helmet>
        <title>PU Flooring Solutions in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Premium polyurethane flooring services in Bangalore for industrial & commercial spaces. Flexible, impact-resistant, chemical-resistant floors. Free inspection." />
        <meta name="keywords" content="pu flooring bangalore, polyurethane flooring contractors bangalore, industrial pu flooring bangalore, commercial pu flooring bangalore, flexible flooring bangalore, impact resistant flooring bangalore, chemical resistant pu flooring bangalore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/pu-flooring" />
        <meta property="og:title" content="PU Flooring Solutions in Bangalore" />
        <meta property="og:description" content="High-performance polyurethane flooring for industrial and commercial spaces. Flexible, impact-resistant, and chemical-resistant." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/pu-flooring" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                  <Palette size={16} />
                  Premium PU Flooring
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Flexible & Durable
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Polyurethane Flooring
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Experience the perfect combination of flexibility, durability, and aesthetics with our premium 
                  polyurethane flooring systems designed for demanding industrial and commercial environments.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
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
                  <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Palette size={16} />
                    What is PU Flooring?
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Advanced Polyurethane
                    <span className="block text-purple-600">Flooring Solutions</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Polyurethane (PU) flooring is a high-performance coating system that combines the strength 
                    of epoxy with the flexibility of polyurethane. This unique combination creates a flooring 
                    solution that can withstand heavy traffic, chemical exposure, and temperature variations.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our PU flooring systems offer superior impact resistance, flexibility, and chemical resistance, 
                    making them ideal for environments where substrate movement or thermal cycling occurs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Impact Resistant</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Flexible & Durable</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Chemical Resistant</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="space-y-4">
                    {[
                      "Superior flexibility to handle substrate movement",
                      "Excellent impact and abrasion resistance",
                      "Outstanding chemical and stain resistance",
                      "Seamless, easy-to-clean surface",
                      "Wide range of color and texture options",
                      "Comfortable underfoot reducing fatigue",
                      "Suitable for temperature-sensitive environments",
                      "Long-lasting performance with minimal maintenance"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles size={16} />
                  Premium Features
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Our
                  <span className="block text-purple-600">PU Flooring?</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our polyurethane flooring systems are engineered for maximum performance in demanding environments.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-black mb-6">Applications</h2>
                  <p className="text-purple-100 text-lg mb-8 leading-relaxed">
                    Our polyurethane flooring solutions are specifically designed for environments that demand 
                    both durability and flexibility, making them ideal for a wide range of industrial and 
                    commercial applications.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Perfect For:</h3>
                    <ul className="space-y-3">
                      {applications.map((application, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target size={16} />
                    Installation Process
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Professional
                    <span className="block text-purple-600">Installation Process</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our certified technicians follow a precise installation process to ensure your polyurethane 
                    flooring delivers optimal performance and longevity.
                  </p>
                  
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon size={24} className="text-white" />
                          </div>
                          <div className="text-4xl font-black text-purple-200 text-center mt-2">{step.step}</div>
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Ready for Premium PU Flooring?
              </h2>
              <p className="text-xl text-purple-100 mb-10 leading-relaxed">
                Get a free consultation and quote for your polyurethane flooring project. Our experts will 
                assess your specific needs and recommend the best solution for your environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={handlePhoneClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
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

export default PUFlooring