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
        <title>Industrial Epoxy Screed Flooring in Bangalore | Durable Flooring</title>
        <meta name="description" content="Sanjana Enterprises provides industrial epoxy screed flooring in Bangalore for factories, warehouses and manufacturing units — heavy-duty, impact resistant, chemical resistant and long-lasting screed systems." />
        <meta name="keywords" content="industrial epoxy screed flooring in bangalore, epoxy screed flooring, heavy duty epoxy screed, factory flooring bangalore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sanjanawaterproofing.com/industrial-epoxy-screed-flooring-in-bangalore" />
        <meta property="og:title" content="Industrial Epoxy Screed Flooring in Bangalore | Durable Flooring" />
        <meta property="og:description" content="Sanjana Enterprises offers industrial epoxy screed flooring in Bangalore — seamless, chemical resistant and built for heavy industrial use in factories and warehouses." />
        <meta property="og:url" content="https://www.sanjanawaterproofing.com/industrial-epoxy-screed-flooring-in-bangalore" />
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
                  Industrial Epoxy Screed Flooring in Bangalore
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                  Sanjana Enterprises is a trusted provider of industrial epoxy screed flooring in Bangalore, offering durable and high-performance systems for factories, warehouses, manufacturing plants and industrial facilities. Our epoxy screed systems are designed to withstand heavy operational traffic, machine movement, impact loads, abrasion and chemical exposure.
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

        {/* Industrial Epoxy Screed Content (user-supplied) */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="prose max-w-none mb-6">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Professional Industrial Epoxy Screed Flooring in Bangalore</h2>
              <p className="text-gray-700 text-lg">Sanjana Enterprises is a trusted provider of industrial epoxy screed flooring in Bangalore, offering durable and high-performance flooring solutions for factories, warehouses, manufacturing plants, engineering units, pharmaceutical industries, and commercial facilities. With over 30 years of experience in industrial flooring and waterproofing solutions, we specialize in heavy-duty epoxy screed flooring systems designed to withstand heavy operational traffic, machinery movement, impact loads, abrasion, and industrial chemical exposure.</p>
              <p className="text-gray-700 text-lg mt-4">Industrial floors are constantly exposed to harsh working conditions including forklift movement, machinery vibration, chemical spills, and continuous operational stress. Ordinary concrete flooring often develops cracks, surface damage, dust formation, and uneven finishes over time. Our industrial epoxy screed flooring systems provide a strong, seamless, and long-lasting protective layer that improves floor durability, workplace safety, and operational efficiency.</p>
              <p className="text-gray-700 text-lg mt-4">At Sanjana Enterprises, we use premium-quality epoxy resins, industrial-grade screed materials, and advanced installation methods to deliver customized flooring solutions suitable for demanding industrial environments. As an ISO 9001:2015 Certified company, we focus on quality workmanship, reliable service, and long-term customer satisfaction.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">What is Industrial Epoxy Screed Flooring?</h3>
                <p className="text-gray-600 mb-4">Industrial epoxy screed flooring is a heavy-duty flooring system created by combining epoxy resin with graded aggregates to form a thick and durable screed layer over concrete surfaces. This flooring system is designed for industrial environments requiring superior strength, abrasion resistance, impact resistance, and chemical protection.</p>
                <p className="text-gray-600 mb-4">Unlike standard epoxy coatings, epoxy screed flooring provides enhanced thickness and structural durability, making it suitable for areas exposed to extreme operational conditions and heavy industrial traffic.</p>
                <h4 className="font-semibold mt-4">Common Uses</h4>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  <li>Manufacturing industries</li>
                  <li>Warehouses and logistics centers</li>
                  <li>Engineering industries</li>
                  <li>Automobile industries</li>
                  <li>Pharmaceutical industries</li>
                  <li>Food processing units</li>
                  <li>Chemical plants</li>
                  <li>Industrial workshops</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Industrial Epoxy Screed Flooring Services in Bangalore</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold">Heavy Duty Industrial Flooring</h4>
                    <p className="mt-2">Our heavy-duty epoxy screed flooring systems are specially designed for factories and industrial facilities exposed to high operational loads and continuous machinery movement. Benefits include high load-bearing capacity, impact resistance, abrasion protection, seamless finish, long-lasting durability and chemical resistance.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Warehouse Screed Flooring</h4>
                    <p className="mt-2">Warehouse floors require strong and durable flooring systems capable of handling forklifts, pallets, trolleys, and heavy storage loads. Our solutions offer smooth and seamless finish, dust-free surface, high durability, easy maintenance and long-term protection.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Factory Epoxy Screed Flooring</h4>
                    <p className="mt-2">Factories and manufacturing units require flooring systems capable of resisting machine vibration, industrial traffic, and heavy operational activities. We provide customized epoxy screed flooring systems based on industry type, floor condition, operational requirements, traffic levels and chemical exposure.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Chemical Resistant Screed Flooring</h4>
                    <p className="mt-2">Chemical-resistant epoxy screed flooring is suitable for pharmaceutical industries, laboratories, food processing units and chemical manufacturing plants where floors are exposed to chemicals, acids, solvents, and industrial spills. These systems provide protection against acid spills, industrial chemicals, corrosion, oil and grease.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Features of Industrial Epoxy Screed Flooring</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>High Strength Flooring — exceptional compressive strength for heavy industrial traffic</li>
                  <li>Seamless Surface — prevents dust accumulation and improves hygiene</li>
                  <li>Impact Resistance — resists heavy impact loads</li>
                  <li>Abrasion Resistance — excellent protection against surface wear</li>
                  <li>Chemical Protection — resists chemicals, oils, acids and solvents</li>
                  <li>Long Service Life — years of dependable performance with minimal maintenance</li>
                  <li>Easy Maintenance — smooth, dust-free surface for simple cleaning</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Why Choose Sanjana Enterprises?</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>30+ Years of Experience — extensive industrial flooring expertise across Bangalore and Karnataka</li>
                  <li>ISO 9001:2015 Certified — industry-standard quality practices</li>
                  <li>Experienced Technical Team — professional surface preparation and installation</li>
                  <li>Premium Quality Materials — industrial-grade epoxy resins and screed materials</li>
                  <li>Customized Flooring Solutions — tailored based on floor condition and operational needs</li>
                  <li>Timely Project Completion — efficient works with minimal downtime</li>
                </ul>
              </div>
            </div>

            <div className="py-12">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Industrial Epoxy Screed Flooring Installation Process</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Surface Preparation</h4>
                  <p className="text-gray-700 mt-2">The concrete surface is cleaned, repaired, and mechanically prepared to improve coating adhesion.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Primer Application</h4>
                  <p className="text-gray-700 mt-2">An epoxy primer is applied to strengthen the bond between the screed flooring and concrete substrate.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Screed Layer Installation</h4>
                  <p className="text-gray-700 mt-2">Industrial-grade epoxy screed material is applied evenly to create a thick and durable flooring surface.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Surface Finishing</h4>
                  <p className="text-gray-700 mt-2">The flooring is finished smoothly or with anti-skid texture depending on project requirements.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Final Protective Coating</h4>
                  <p className="text-gray-700 mt-2">A protective topcoat is applied to improve durability, gloss, and chemical resistance.</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-bold mb-3">Industries We Serve</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {['Manufacturing industries','Warehouses and logistics centers','Automobile industries','Pharmaceutical industries','Food processing units','Engineering workshops','Chemical processing plants','Industrial factories','Commercial facilities'].map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Service Areas in Bangalore</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {['Whitefield','Electronic City','Peenya','KR Puram','Hebbal','Yelahanka','Bommasandra','Hosur Road','HSR Layout','Marathahalli','JP Nagar','Rajajinagar'].map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-black text-gray-900 mb-6">What Our Clients Say</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-800">“Excellent industrial flooring work with professional service and timely completion.”</p>
                  <footer className="text-sm text-gray-600 mt-2">— Suresh C.H</footer>
                </blockquote>
                <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-800">“Good technical knowledge and durable epoxy flooring solutions for industrial applications.”</p>
                  <footer className="text-sm text-gray-600 mt-2">— Ashwin Virupaksha</footer>
                </blockquote>
                <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-800">“The industrial flooring project was completed professionally with quality workmanship and excellent support.”</p>
                  <footer className="text-sm text-gray-600 mt-2">— Udas Kundu</footer>
                </blockquote>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">What is industrial epoxy screed flooring?</summary>
                  <p className="text-gray-700 mt-2">Industrial epoxy screed flooring is a heavy-duty flooring system made using epoxy resin and aggregates to provide durable and seamless industrial floor protection.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is epoxy screed flooring suitable for factories?</summary>
                  <p className="text-gray-700 mt-2">Yes, epoxy screed flooring is ideal for factories because it offers impact resistance, abrasion protection, and high durability.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Can epoxy screed flooring handle forklift movement?</summary>
                  <p className="text-gray-700 mt-2">Yes, industrial screed flooring is designed to withstand forklift traffic and heavy operational movement.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is epoxy screed flooring chemical resistant?</summary>
                  <p className="text-gray-700 mt-2">Yes, chemical-resistant screed flooring systems are available for industries exposed to chemicals and solvents.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">How long does epoxy screed flooring last?</summary>
                  <p className="text-gray-700 mt-2">Properly installed industrial epoxy screed flooring can last between 8 to 15 years depending on operational usage.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is industrial screed flooring easy to maintain?</summary>
                  <p className="text-gray-700 mt-2">Yes, the seamless surface is easy to clean and requires minimal maintenance.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Do you provide services across Bangalore?</summary>
                  <p className="text-gray-700 mt-2">Yes, Sanjana Enterprises provides industrial epoxy screed flooring services across Bangalore and nearby industrial areas.</p>
                </details>
              </div>
            </div>
          </div>
        </section>
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

