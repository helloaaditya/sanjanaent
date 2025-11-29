import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Palette, Thermometer, Factory, Layers, Droplet, Car, UtensilsCrossed, Building2, AlertTriangle } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const AntiskidEpoxyFlooring = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const keyFeatures = [
    "Slip-Resistant Surface to minimize accidents",
    "Superior Durability for large weights and machines",
    "Resistance to Chemical, Oil & Abrasion",
    "Joinless & Bacterial Free Surface",
    "Simple to Clean & Take Care of",
    "Tailored Texture & Thickness"
  ]

  const applications = [
    "Industrial factories and warehouses",
    "Food-processing units",
    "Pharmaceutical industries",
    "Big restaurants",
    "Parking spaces and slopes",
    "Places for working and car repairing",
    "Medical centers and research facilities",
    "Wet and humid areas"
  ]

  const whyChooseUs = [
    "Expert site inspection and guidance",
    "Use of premium-grade epoxy materials",
    "Skilled and professional installation",
    "Fast project completion",
    "Long-lasting performance",
    "Competitive & transparent pricing"
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
      title: 'Antiskid Epoxy Application',
      description: 'Special antiskid epoxy with textured finish is applied to provide slip resistance.',
      icon: Target
    },
    {
      step: '04',
      title: 'Topcoat Sealing',
      description: 'Final protective topcoat is applied while maintaining the antiskid properties.',
      icon: Hammer
    }
  ]

  return (
    <>
      <Helmet>
        <title>Antiskid Epoxy Flooring in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Reduce slip hazards with antiskid epoxy flooring in Bangalore. Durable, safe, and industrial-grade solutions. Expert installation. Free quote!" />
        <meta name="keywords" content="Antiskid epoxy flooring in bangalore, anti-slip epoxy flooring, slip resistant flooring bangalore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/antiskid-epoxy-flooring-in-bangalore" />
        <meta property="og:title" content="Antiskid Epoxy Flooring in Bangalore" />
        <meta property="og:description" content="Durable, safe, and high-performance antiskid epoxy flooring solutions for industrial, commercial, and residential spaces in Bangalore." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/antiskid-epoxy-flooring-in-bangalore" />
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
                  <Target size={16} />
                  Antiskid Epoxy Flooring
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Antiskid Epoxy Flooring
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    in Bangalore
                  </span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                  Sanjana Waterproofing is the Antiskid Epoxy Flooring service provider in Bangalore with a trustworthy reputation. 
                  The company provides durable, safe, and high-performance flooring solutions for all types of spaces, such as industrial, 
                  commercial, and residential. The anti-slip epoxy coatings applied by the company are accident prevention measures, 
                  able to resist heavy traffic, and last for a long time.
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

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Shield size={16} />
                    About Our Antiskid Epoxy Flooring
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Safe & Durable
                    <span className="block text-blue-600">Flooring Solution</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Antiskid epoxy flooring is instrumental in producing a smooth, safe, and non-slip coating in places where 
                    moisture, chemicals, or high foot traffic are the usual conditions. The epoxy being of the best quality, 
                    the material bonding to the surface is very strong and the resulting strength and durability are excellent.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <p className="text-gray-700 font-semibold mb-2">Customized Texture Options:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Light Duty</span>
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Medium Duty</span>
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">Heavy Duty</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                  <div className="space-y-4">
                    {keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-cyan-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={16} className="text-blue-600" />
                        </div>
                        <span className="text-blue-50 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Building2 size={16} />
                  Applications
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Applications of Antiskid
                  <span className="block text-blue-600">Epoxy Flooring</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our flooring is ideal for:
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 50}>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-800 font-medium text-sm leading-relaxed">{application}</span>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                  <h2 className="text-3xl font-black text-gray-900 mb-6">Installation Process</h2>
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                            <step.icon size={20} className="text-white" />
                          </div>
                          <div className="text-2xl font-black text-blue-200 text-center mt-2">{step.step}</div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Award size={16} />
                    Why Choose Us
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Why Choose Sanjana Waterproofing?
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    At Sanjana Waterproofing, we ensure:
                  </p>
                  <div className="space-y-4">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={16} className="text-white" />
                        </div>
                        <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 bg-blue-600 rounded-xl p-6 text-white">
                    <p className="font-semibold mb-2">Customized Texture:</p>
                    <p className="text-blue-100">
                      We customise the antiskid texture based on your usage requirements—light, medium, or heavy-duty.
                    </p>
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
                Contact Us for Antiskid Epoxy Flooring in Bangalore
              </h2>
              <p className="text-xl text-blue-100 mb-4 leading-relaxed">
                Upgrade your space with safe, durable, and reliable antiskid epoxy flooring.
              </p>
              <p className="text-lg text-blue-200 mb-10">
                For inquiries, quotations, or site visits:
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
                <Link to="/industrial-epoxy-screed-flooring-in-bangalore" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Factory size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Epoxy Screed Flooring</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Tough epoxy screed flooring for harsh industrial conditions.</p>
                  <div className="text-blue-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <Link to="/epoxy-flooring-for-warehouses-in-bangalore" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

export default AntiskidEpoxyFlooring

