import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Droplets, Lock } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const AntiCorrosionCoating = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const benefits = [
    {
      title: "Prevents Rust and Corrosion",
      description: "Our coatings form a strong protective layer that prevents direct exposure to moisture, oxygen, and chemicals, effectively stopping rust formation.",
      icon: Shield
    },
    {
      title: "Enhances Durability",
      description: "Anti-corrosion coatings significantly improve the durability of metal and concrete surfaces, making them resistant to wear and tear.",
      icon: Award
    },
    {
      title: "Chemical and Moisture Resistance",
      description: "The coatings offer excellent resistance to acids, alkalis, solvents, oils, and moisture, ideal for industrial and manufacturing units.",
      icon: Droplets
    },
    {
      title: "Reduces Maintenance Costs",
      description: "With long-lasting protection, the need for frequent maintenance and repairs is minimized, resulting in cost savings.",
      icon: Lock
    },
    {
      title: "Weather and UV Protection",
      description: "Our coatings protect surfaces from harsh weather conditions, UV radiation, and temperature fluctuations.",
      icon: Sparkles
    },
    {
      title: "Improves Structural Performance",
      description: "By preventing corrosion-related damage, the overall structural integrity and performance of assets are enhanced.",
      icon: Hammer
    }
  ]

  const coatingTypes = [
    {
      name: "Epoxy Coatings",
      description: "Highly durable coatings offering excellent adhesion, chemical resistance, and mechanical strength, ideal for industrial floors and metal structures."
    },
    {
      name: "PU (Polyurethane) Coatings",
      description: "Flexible and UV-resistant coatings suitable for outdoor applications and environments with temperature variations."
    },
    {
      name: "Zinc-Rich Primers",
      description: "Provide cathodic protection by sacrificing zinc to protect the underlying metal from corrosion."
    },
    {
      name: "Metallic Coatings",
      description: "Used in high-performance industrial environments where superior corrosion resistance is required."
    },
    {
      name: "Chemical-Resistant Coatings",
      description: "Designed for industries exposed to aggressive chemicals and solvents."
    },
    {
      name: "High-Temperature Coatings",
      description: "Suitable for surfaces exposed to extreme heat, such as boilers, chimneys, and exhaust systems."
    }
  ]

  const applications = [
    "Industrial machinery and equipment",
    "Pipelines and storage tanks",
    "Steel structures and frameworks",
    "Factory floors and production areas",
    "Marine and coastal structures",
    "Warehouse shutters and storage racks",
    "Automotive parts and fabrication units",
    "Heavy-duty industrial environments"
  ]

  const whyChooseUs = [
    "Experienced and skilled professionals",
    "Use of premium industrial-grade materials",
    "Compliance with safety and quality standards",
    "Customized solutions for different industries",
    "Fast, safe, and efficient execution",
    "Competitive and transparent pricing"
  ]

  const process = [
    {
      step: '01',
      title: 'Surface Assessment',
      description: 'Our experts evaluate the surface condition, corrosion level, and environmental exposure to determine the best coating solution.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Surface Preparation',
      description: 'Proper preparation is critical. We use cleaning, sandblasting, and rust removal techniques to ensure maximum coating adhesion.',
      icon: Wrench
    },
    {
      step: '03',
      title: 'Coating Application',
      description: 'Anti-corrosion primers and topcoats are applied using professional equipment to achieve uniform thickness and coverage.',
      icon: Droplets
    },
    {
      step: '04',
      title: 'Quality Inspection',
      description: 'Final inspection ensures coating thickness, finish quality, and compliance with industry standards.',
      icon: CheckCircle
    }
  ]

  return (
    <>
      <Helmet>
        <title>Anti Corrosion Coating Services in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Professional anti corrosion coating services in Bangalore protecting metal surfaces from rust, chemicals and weather with durable, lasting industrial solutions." />
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
                <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                Sanjana Waterproofing offers professional and high-performance anti-corrosion coating services in Bangalore, designed to protect metal and concrete surfaces from rust, oxidation, chemical damage, and environmental deterioration. Corrosion is one of the leading causes of structural damage and equipment failure in industrial and commercial environments. Our advanced coating solutions provide a durable protective barrier that significantly extends the lifespan of assets while reducing maintenance and repair costs.
With years of industry experience and the use of premium-grade materials, we deliver dependable anti-corrosion solutions for factories, warehouses, pipelines, machinery, marine structures, and commercial facilities across Bangalore and surrounding areas.

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
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Anti-corrosion coating is a specialized protective layer applied to metal or concrete surfaces to prevent corrosion caused by moisture, chemicals, salt, pollution, and temperature variations.
                    These coatings act as a shield between the surface and corrosive elements, slowing down or completely stopping the corrosion process.
                    In industrial and coastal environments like Bangalore, where humidity and pollution levels are high, corrosion protection is essential to maintain structural strength, safety, and performance.
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

        {/* Importance Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Target size={16} />
                  Importance
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Importance of Anti-Corrosion Coating
                </h2>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-600 text-lg mb-8 leading-relaxed text-center">
                  Corrosion not only weakens metal structures but also increases safety risks and operational downtime. Anti-corrosion coatings help:
                </p>
                
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      "Prevent rust formation and surface degradation",
                      "Extend the service life of metal components",
                      "Improve safety and structural reliability",
                      "Reduce frequent repair and replacement costs",
                      "Maintain operational efficiency in industrial environments"
                    ].map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={16} className="text-white" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      By investing in professional anti-corrosion coating services, businesses can protect their assets and ensure long-term performance.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
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
                  Key Benefits of Our
                  <span className="block text-red-600">Anti-Corrosion Coating</span>
                </h2>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
                  <h2 className="text-3xl font-black mb-6">Applications of Anti-Corrosion Coating</h2>
                  <p className="text-red-100 text-lg mb-8 leading-relaxed">
                    Our anti-corrosion coating services in Bangalore are suitable for a wide range of applications, including:
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <ul className="space-y-3">
                      {applications.map((application, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-red-100 text-base italic">
                      Each application is assessed individually to select the most suitable coating system.
                    </p>
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

        {/* Types of Anti-Corrosion Coatings Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Types of Anti-Corrosion Coatings
                  <span className="block text-red-600">We Provide</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {coatingTypes.map((type, index) => (
                  <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                        <h3 className="text-lg font-bold text-gray-900">{type.name}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed ml-5">{type.description}</p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Award size={16} />
                  Why Choose Us
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Sanjana Waterproofing?
                </h2>
              </div>
            </ScrollAnimation>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            <div className="mt-8 text-center max-w-3xl mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed">
                We focus on delivering reliable, long-lasting protection that meets both functional and safety requirements.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-rose-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Anti-Corrosion Coating Services in Bangalore You Can Trust
              </h2>
              <p className="text-xl text-red-100 mb-10 leading-relaxed">
                Sanjana Waterproofing is committed to providing dependable anti-corrosion coating solutions that protect valuable assets and improve operational efficiency. Whether you need protection for industrial machinery, pipelines, or structural steel, our expert team delivers solutions designed to perform in demanding environments.
              </p>
              <p className="text-lg text-red-100 mb-10 leading-relaxed">
                Contact us today for a consultation and protect your assets with high-quality anti-corrosion coatings.
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

