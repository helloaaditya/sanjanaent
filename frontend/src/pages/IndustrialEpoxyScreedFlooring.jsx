import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Palette, Thermometer, Factory, Layers, Droplet, Building2 } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const IndustrialEpoxyScreedFlooring = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const features = [
    {
      title: "Heavy-Duty Performance",
      description: "Designed to last against forklifts, pallet trucks, machine vibrations, and overall industrial movement.",
      icon: Shield
    },
    {
      title: "Superior Chemical Resistance",
      description: "Able to resist acids, oils, grease, solvents, and all types of industrial chemicals.",
      icon: CheckCircle
    },
    {
      title: "Slip-Resistant & Safe",
      description: "Available textured, anti-skid surfaces for the highest risk areas.",
      icon: Target
    },
    {
      title: "Hygienic & Seamless",
      description: "A no-joint surface that makes it impossible for dust and bacteria to thrive and prevents cracks—perfect for the clean sectors.",
      icon: Award
    },
    {
      title: "Long-Lasting Durability",
      description: "10-20 years life span for epoxy screed floors under heavy usage with proper maintenance.",
      icon: Hammer
    },
    {
      title: "Custom Thickness & Finish",
      description: "Solutions that are custom-made according to the load, the environment, and industry requirements are provided by us.",
      icon: Layers
    }
  ]

  const applications = [
    "Heavy manufacturing units",
    "Warehouses and logistics centers",
    "Automotive workshops",
    "Food and beverage sectors",
    "Pharmaceutical plants and cleanrooms",
    "Chemical industries",
    "Cold storage and freezer rooms",
    "Engineering and fabrication units"
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
      title: 'Epoxy Base Layer',
      description: 'Application of epoxy base layer to prepare the surface for screed installation.',
      icon: Eye
    },
    {
      step: '03',
      title: 'Screed Application',
      description: 'Epoxy screed mixed with graded aggregates is troweled to achieve desired thickness (3mm-6mm).',
      icon: Layers
    },
    {
      step: '04',
      title: 'Topcoat & Sealing',
      description: 'Final protective topcoat is applied for enhanced durability and chemical resistance.',
      icon: Hammer
    }
  ]

  return (
    <>
      <Helmet>
        <title>Industrial Epoxy Screed Flooring in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Professional industrial epoxy screed flooring in Bangalore. Ideal for factories, warehouses & production areas. 10-20 year lifespan. Free quote!" />
        <meta name="keywords" content="Industrial epoxy screed flooring bangalore, epoxy screed flooring, industrial flooring bangalore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/industrial-epoxy-screed-flooring-in-bangalore" />
        <meta property="og:title" content="Industrial Epoxy Screed Flooring in Bangalore" />
        <meta property="og:description" content="Tough epoxy screed flooring that withstands harsh industrial conditions. Excellent strength, chemical resistance, and long-lasting use." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/industrial-epoxy-screed-flooring-in-bangalore" />
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
                  <Factory size={16} />
                  Industrial Epoxy Screed Flooring
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Industrial Epoxy Screed Flooring
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    in Bangalore
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                  At Sanjana Waterproofing, the Industrial Epoxy Screed Flooring we offer is tough enough to withstand the harshest 
                  industrial conditions thanks to its high performance. The floors we provide have excellent strength, resistance to 
                  chemicals, and long-lasting use—thus, they are perfect for factories, warehouses, and production units, etc., 
                  areas with heavy loads in Bangalore.
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

        {/* What is Epoxy Screed Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Layers size={16} />
                    What is Epoxy Screed Flooring?
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Durable Industrial
                    <span className="block text-blue-600">Flooring Solution</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    The epoxy screed is a flooring system that is applied with a trowel and is made up of epoxy resins combined 
                    with graded aggregates. It creates a thick and extremely durable surface that has excellent performance under:
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      "Heavy Machinery",
                      "Constant Traffic",
                      "Chemical Exposure",
                      "High Impact Loads"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <CheckCircle size={16} className="text-white" />
                        </div>
                        <span className="text-gray-700 text-lg font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Epoxy screed is often installed with a thickness of 3mm to 6mm, and it is among the strongest flooring 
                    options available for industrial use.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Installation Process</h3>
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <step.icon size={20} className="text-white" />
                          </div>
                          <div className="text-2xl font-black text-blue-200 text-center mt-2">{step.step}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                          <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award size={16} />
                  Why Choose Us
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Epoxy Screed Flooring
                  <span className="block text-blue-600">from Sanjana Waterproofing?</span>
                </h2>
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
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                  <h2 className="text-3xl font-black text-gray-900 mb-6">Where Is Industrial Epoxy Screed Flooring Used?</h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Sanjana Waterproofing specializes in installing epoxy screed flooring for a variety of industries, such as:
                  </p>
                  <div className="space-y-3">
                    {applications.map((application, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-lg">{application}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Building2 size={16} />
                    Perfect For
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Industrial & Commercial
                    <span className="block text-blue-600">Applications</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our industrial epoxy screed flooring is specifically designed for environments that demand the highest 
                    levels of durability, chemical resistance, and performance under extreme conditions.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <div className="text-3xl font-black text-blue-600 mb-2">3-6mm</div>
                      <div className="text-gray-700 font-medium">Thickness Range</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <div className="text-3xl font-black text-blue-600 mb-2">10-20</div>
                      <div className="text-gray-700 font-medium">Years Lifespan</div>
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
                Ready to Install Industrial Epoxy Screed Flooring?
              </h2>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                Get a free consultation and quote for your industrial epoxy screed flooring project. Our experts will assess 
                your needs and provide the best solution for your facility.
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
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation animation="fade-in-up" delay={100}>
                <Link to="/epoxy-flooring-for-warehouses-in-bangalore" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Factory size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Warehouse Epoxy Flooring</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Durable epoxy flooring solutions for warehouses with heavy loads.</p>
                  <div className="text-blue-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <Link to="/antiskid-epoxy-flooring-in-bangalore" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Antiskid Epoxy Flooring</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Safe, slip-resistant epoxy flooring for high-traffic areas.</p>
                  <div className="text-blue-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={300}>
                <Link to="/heavy-duty-epoxy-flooring-in-bangalore" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Heavy Duty Epoxy Flooring</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Premium heavy-duty epoxy flooring for industrial environments.</p>
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

export default IndustrialEpoxyScreedFlooring

