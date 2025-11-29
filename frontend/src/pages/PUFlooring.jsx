import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import { Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Palette, Thermometer, Factory, UtensilsCrossed, Building2, Car, GraduationCap, Droplet, Layers } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const PUFlooring = () => {
  const location = useLocation()
  const isConcretePage = location.pathname === '/pu-concrete-flooring-in-bangalore'
  
  // SEO configuration based on route
  const seoConfig = {
    '/pu-concrete-flooring-in-bangalore': {
      title: 'Best PU Concrete Flooring Services in Bangalore | Sanjana Enterprises',
      description: 'Professional PU concrete flooring services in Bangalore. Perfect for factories, warehouses & parking areas. Thermal-shock resistant & long-lasting.',
      h1: 'Best PU Concrete Flooring Services in Bangalore',
      canonical: 'https://sanjanawaterproofing.com/pu-concrete-flooring-in-bangalore'
    },
    default: {
      title: 'Best PU Flooring Services in Bangalore | Sanjana Enterprises',
      description: 'Expert PU flooring services in Bangalore for industrial & commercial spaces. Long-lasting, durable, and chemical resistant.',
      h1: 'Best PU Flooring Services in Bangalore',
      canonical: 'https://sanjanawaterproofing.com/best-pu-flooring-services-in-bangalore'
    }
  }
  
  const currentConfig = seoConfig[location.pathname] || seoConfig.default

  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  // Why Choose PU Flooring features
  const whyChooseFeatures = [
    {
      title: "Highly Durable & Flexible",
      description: "PU floors are built to handle constant movement, heavy machinery, and thermal stress without breaking a sweat.",
      icon: Shield
    },
    {
      title: "Excellent Chemical Resistance",
      description: "They can take on acids, alkalis, oils, and all sorts of industrial chemicals without flinching.",
      icon: CheckCircle
    },
    {
      title: "Hygienic & Seamless Finish",
      description: "These floors are perfect for environments like food processing, pharmaceuticals, and cleanrooms.",
      icon: Award
    },
    {
      title: "Impact & Scratch Resistant",
      description: "They stand up to surface damage, even in high-traffic areas.",
      icon: Target
    },
    {
      title: "Thermal Shock Resistant",
      description: "Ideal for industries that deal with temperature swings, like cold storage, kitchens, and production zones.",
      icon: Thermometer
    },
    {
      title: "Long Lifespan",
      description: "With just a bit of maintenance, these floors can last a solid 10 to 15 years or more!",
      icon: Sparkles
    }
  ]

  // Where PU Flooring is Used
  const applications = [
    { name: "Food & Beverage Industries", icon: UtensilsCrossed },
    { name: "Pharmaceutical & Cleanrooms", icon: Building2 },
    { name: "Warehouses & Logistics Spaces", icon: Factory },
    { name: "Commercial Kitchens", icon: UtensilsCrossed },
    { name: "Automotive & Engineering Units", icon: Car },
    { name: "Hospitals & Laboratories", icon: Building2 },
    { name: "Schools & Tech Parks", icon: GraduationCap },
    { name: "Garages & Parking Areas", icon: Car }
  ]

  // Why Choose Sanjana Waterproofing
  const whyChooseUs = [
    "Over 30 years of experience in PU and epoxy flooring",
    "A certified installation team you can trust",
    "Only the best premium-grade PU materials",
    "Fast, efficient, and professional service",
    "Free site inspection and consultation",
    "Affordable and transparent pricing"
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

  return (
    <>
      <Helmet>
        <title>{currentConfig.title}</title>
        <meta name="description" content={currentConfig.description} />
        <meta name="keywords" content="pu flooring bangalore, polyurethane flooring, industrial pu flooring, commercial pu flooring, flexible flooring, impact resistant flooring, chemical resistant pu flooring" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentConfig.canonical} />
        <meta property="og:title" content={currentConfig.title} />
        <meta property="og:description" content={currentConfig.description} />
        <meta property="og:url" content={currentConfig.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
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
                  {isConcretePage ? (
                    <>
                      Best PU Concrete Flooring Services
                      <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        in Bangalore
                      </span>
                    </>
                  ) : (
                    <>
                      Best PU Flooring Services
                      <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        in Bangalore
                      </span>
                    </>
                  )}
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                {isConcretePage ? (
                  <div className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed space-y-4">
                    <p>
                      Sanjana Waterproofing is your go-to for top-notch PU flooring and PU concrete flooring services right here in Bangalore. 
                      We specialize in providing flooring solutions that are not just durable but also seamless and hygienic, perfect for industrial, 
                      commercial, and high-traffic areas.
                    </p>
                    <p>
                      Our polyurethane flooring systems are designed with flexibility, impact resistance, and chemical protection in mind, making 
                      them a great fit for food industries, pharmaceutical units, warehouses, production areas, commercial kitchens, and heavy-duty 
                      industrial floors. PU concrete flooring offers incredible strength, thermal-shock resistance, and long-lasting performance, 
                      making it suitable for both hot and cold environments like dairies, meat processing units, breweries, and cold storage facilities.
                    </p>
                    <p>
                      We take pride in our professional installation process, using only high-quality materials to ensure strong adhesion, a smooth 
                      finish, and durability that lasts. With our skilled technicians, advanced tools, and years of experience, Sanjana Waterproofing 
                      promises reliable and cost-effective flooring solutions that meet all industrial standards. When it comes to high-performance 
                      PU flooring in Bangalore, you can count on us to provide flooring that withstands chemicals, heavy loads, temperature changes, 
                      and everyday wear — all while ensuring safety, hygiene, and lasting value for your facility.
                    </p>
                  </div>
                ) : (
                  <div className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed space-y-4">
                    <p>
                      Are you on the hunt for durable, hygienic, and high-performance PU flooring solutions in Bangalore? Look no further! 
                      At Sanjana Waterproofing, we take pride in our expertise in installing top-notch polyurethane (PU) flooring systems, 
                      perfect for industrial, commercial, and high-traffic areas.
                    </p>
                    <p>
                      PU flooring stands out for its flexibility, impact resistance, chemical stability, and impressive longevity, making it 
                      an ideal choice for industries that require robust and sanitary flooring options.
                    </p>
                  </div>
                )}
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

        {/* About PU Concrete Flooring Section - For Concrete Page */}
        {isConcretePage && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 md:p-12 border border-purple-100 shadow-sm">
                  <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                      <Building2 size={16} />
                      About PU Concrete Flooring
                    </div>
                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Sanjana Waterproofing is your go-to for top-notch PU flooring and PU concrete flooring services right here in Bangalore. 
                        We specialize in providing flooring solutions that are not just durable but also seamless and hygienic, perfect for industrial, 
                        commercial, and high-traffic areas.
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Our polyurethane flooring systems are designed with flexibility, impact resistance, and chemical protection in mind, making 
                        them a great fit for food industries, pharmaceutical units, warehouses, production areas, commercial kitchens, and heavy-duty 
                        industrial floors. PU concrete flooring offers incredible strength, thermal-shock resistance, and long-lasting performance, 
                        making it suitable for both hot and cold environments like dairies, meat processing units, breweries, and cold storage facilities.
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        We take pride in our professional installation process, using only high-quality materials to ensure strong adhesion, a smooth 
                        finish, and durability that lasts. With our skilled technicians, advanced tools, and years of experience, Sanjana Waterproofing 
                        promises reliable and cost-effective flooring solutions that meet all industrial standards. When it comes to high-performance 
                        PU flooring in Bangalore, you can count on us to provide flooring that withstands chemicals, heavy loads, temperature changes, 
                        and everyday wear — all while ensuring safety, hygiene, and lasting value for your facility.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        )}

        {/* Why Choose PU Flooring Section */}
        {!isConcretePage && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Shield size={16} />
                    Why Choose PU Flooring?
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                    Why Choose PU Flooring?
                  </h2>
                </div>
              </ScrollAnimation>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseFeatures.map((feature, index) => (
                  <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-sm border border-purple-100 hover:shadow-lg transition-all duration-300 group">
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
        )}

        {/* Where PU Flooring Is Used Section */}
        {!isConcretePage && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Factory size={16} />
                    Applications
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                    Where PU Flooring
                    <span className="block text-purple-600">Is Used</span>
                  </h2>
                </div>
              </ScrollAnimation>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map((application, index) => (
                  <ScrollAnimation key={index} animation="fade-in-up" delay={index * 50}>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <application.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{application.name}</h3>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Sanjana Waterproofing Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Award size={16} />
                    Why Choose Us
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Why Sanjana
                    <span className="block text-purple-600">Waterproofing?</span>
                  </h2>
                  <div className="space-y-4">
                    {whyChooseUs.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={16} className="text-white" />
                        </div>
                        <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-black mb-6">Installation Process</h2>
                  <p className="text-purple-100 text-lg mb-8 leading-relaxed">
                    Our certified technicians follow a precise installation process to ensure your polyurethane 
                    flooring delivers optimal performance and longevity.
                  </p>
                  
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                            <step.icon size={20} className="text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                          <p className="text-purple-100 text-sm leading-relaxed">{step.description}</p>
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

        {/* Related Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Related
                  <span className="block text-purple-600">Services</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Explore our other specialized services that complement PU flooring solutions.
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
                  <div className="text-purple-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <Link to="/water-leakage-detection" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Thermometer size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Water Leakage Detection</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Advanced thermal imaging to locate hidden water leaks without damage.</p>
                  <div className="text-purple-600 font-semibold flex items-center">
                    Learn more
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={300}>
                <Link to="/repair-section" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wrench size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Repair Services</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Expert repair and restoration services for all types of flooring systems.</p>
                  <div className="text-purple-600 font-semibold flex items-center">
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

export default PUFlooring