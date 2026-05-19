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
        <title>Heavy Duty Epoxy Flooring in Bangalore | Factory Floor Coating</title>
        <meta name="description" content="Heavy duty epoxy flooring services in Bangalore for factories, warehouses, manufacturing units, and industrial facilities with high-strength, abrasion-resistant, and chemical-resistant floor coating systems." />
        <meta name="keywords" content="heavy duty epoxy flooring in bangalore, industrial epoxy flooring, factory floor coating, abrasion resistant flooring" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sanjanawaterproofing.com/heavy-duty-epoxy-flooring-in-bangalore" />
        <meta property="og:title" content="Heavy Duty Epoxy Flooring in Bangalore | Factory Floor Coating" />
        <meta property="og:description" content="Heavy duty epoxy flooring services in Bangalore for factories, warehouses and industrial facilities — high-strength, abrasion and chemical resistant coatings." />
        <meta property="og:url" content="https://www.sanjanawaterproofing.com/heavy-duty-epoxy-flooring-in-bangalore" />
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
                  Heavy-Duty Epoxy Flooring
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Heavy Duty Industrial Epoxy Flooring in Bangalore
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

        {/* Updated Heavy Duty Epoxy Content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="prose max-w-none mb-6">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Heavy Duty Epoxy Flooring Services in Bangalore</h2>
              <p className="text-gray-700 text-lg">Sanjana Enterprises is a trusted provider of heavy duty epoxy flooring services in Bangalore, delivering durable and high-performance industrial flooring solutions for factories, warehouses, manufacturing plants, automobile industries, pharmaceutical units, and commercial facilities. With over 30 years of experience in flooring and waterproofing solutions, we specialize in industrial-grade epoxy floor coatings designed to withstand heavy operational traffic, machinery movement, abrasion, chemical exposure, and industrial wear.</p>
              <p className="text-gray-700 text-lg mt-4">As an <strong>ISO 9001:2015 Certified</strong> company, Sanjana Enterprises focuses on delivering quality workmanship, durable floor protection, and long-term customer satisfaction. Whether you require flooring for factories, warehouses, industrial units, parking areas, or heavy traffic commercial spaces, we provide cost-effective and reliable heavy duty epoxy flooring solutions tailored to your project requirements.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">What is Heavy Duty Epoxy Flooring?</h3>
                  <p className="text-gray-600 mb-4">Heavy duty epoxy flooring is a high-performance floor coating system designed for industrial and commercial environments exposed to heavy machinery, forklift movement, operational traffic, chemicals, abrasion, and impact loads. The flooring system is created by applying industrial-grade epoxy resin and hardener over concrete surfaces to form a strong, seamless, and durable protective layer.</p>
                  <p className="text-gray-600 mb-4">Unlike ordinary floor coatings, heavy duty epoxy flooring offers enhanced durability and superior resistance against industrial damage, making it suitable for demanding work environments. These flooring systems improve floor lifespan while maintaining a clean, safe, and professional appearance.</p>
                  <h4 className="font-semibold mt-4">Common Use Cases</h4>
                  <ul className="list-disc pl-5 text-gray-700 mt-2">
                    <li>Manufacturing industries</li>
                    <li>Engineering units</li>
                    <li>Warehouses</li>
                    <li>Automobile industries</li>
                    <li>Pharmaceutical industries</li>
                    <li>Food processing units</li>
                    <li>Logistics centers</li>
                    <li>Commercial parking structures</li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Sanjana Enterprises?</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li><strong>30+ Years Experience:</strong> Proven track record in flooring and waterproofing across Bangalore and Karnataka.</li>
                    <li><strong>ISO 9001:2015 Certified:</strong> Quality-driven processes and documented standards.</li>
                    <li><strong>Experienced Technical Team:</strong> Skilled professionals for surface preparation and installation.</li>
                    <li><strong>Premium Materials:</strong> Industrial-grade epoxy resins and advanced systems for superior performance.</li>
                    <li><strong>Customized Solutions:</strong> Flooring systems tailored to operational requirements and traffic conditions.</li>
                    <li><strong>On-time Delivery:</strong> Efficient project execution with minimal operational disruption.</li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Industrial Epoxy Floor Coating</h4>
                <p className="text-gray-600 mb-3">We provide industrial heavy duty epoxy flooring solutions for factories and manufacturing plants where floors are exposed to constant operational stress and machinery movement.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>High impact resistance</li>
                  <li>Abrasion resistance</li>
                  <li>Seamless finish</li>
                  <li>Chemical protection</li>
                  <li>Long-lasting durability</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Warehouse Heavy Duty Flooring</h4>
                <p className="text-gray-600 mb-3">Warehouse floors require strong and durable coatings capable of handling forklifts, pallets, trolleys, and heavy storage loads.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>High load-bearing strength</li>
                  <li>Dust-free finish</li>
                  <li>Easy cleaning</li>
                  <li>Improved floor durability</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Factory Epoxy Flooring</h4>
                <p className="text-gray-600 mb-3">Customized factory flooring for heavy equipment, vibration, chemical exposure and continuous operations.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Tailored to industry type and traffic</li>
                  <li>Professional surface preparation</li>
                  <li>Robust, impact-resistant systems</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Heavy Duty Parking Epoxy Flooring</h4>
                <p className="text-gray-600 mb-3">Heavy duty epoxy flooring for basement parking, ramps and industrial parking zones designed to withstand vehicle movement and tire friction.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Anti-skid finish</li>
                  <li>Tire mark and oil resistance</li>
                  <li>High durability and dust-free surface</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm md:col-span-2">
                <h4 className="text-xl font-bold mb-3">Chemical Resistant Heavy Duty Flooring</h4>
                <p className="text-gray-600 mb-3">Specialist chemical-resistant systems for pharmaceutical industries, laboratories, food processing units and chemical plants.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Resistance to acids, solvents, oils and greases</li>
                  <li>Corrosion and stain protection</li>
                  <li>Compliance for hygienic and critical environments</li>
                </ul>
              </div>
            </div>

            <div className="py-12">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Benefits of Heavy Duty Epoxy Flooring</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  'Superior durability',
                  'Seamless and smooth finish',
                  'Chemical resistance',
                  'Impact and abrasion resistance',
                  'Easy maintenance',
                  'Moisture protection',
                  'Anti-skid safety',
                  'Cost-effective solution'
                ].map((b, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">{b}</h4>
                    <p className="text-gray-600">{b === 'Superior durability' ? 'Withstands continuous industrial operations and heavy machinery.' : ''}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mt-12">
              <div>
                <h3 className="text-xl font-bold mb-3">Industries We Serve</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {['Manufacturing industries','Warehouses and logistics centers','Automobile industries','Pharmaceutical industries','Food processing industries','Engineering units','Industrial factories','Commercial parking structures','Chemical processing plants'].map((it, idx) => (
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
              <div className="grid md:grid-cols-3 gap-6">
                <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-800">"Professional service with excellent technical knowledge and timely project completion."</p>
                  <footer className="text-sm text-gray-600 mt-2">— Suresh C.H</footer>
                </blockquote>
                <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-800">"Good quality epoxy flooring work with reasonable pricing and reliable support."</p>
                  <footer className="text-sm text-gray-600 mt-2">— Ashwin Virupaksha</footer>
                </blockquote>
                <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-800">"The team completed the basement flooring work professionally and efficiently. Highly recommended."</p>
                  <footer className="text-sm text-gray-600 mt-2">— Udas Kundu</footer>
                </blockquote>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">What is heavy duty epoxy flooring?</summary>
                  <p className="text-gray-700 mt-2">Heavy duty epoxy flooring is a high-strength industrial floor coating system designed for factories, warehouses, and industrial environments exposed to heavy traffic and machinery.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">How long does heavy duty epoxy flooring last?</summary>
                  <p className="text-gray-700 mt-2">With proper installation and maintenance, heavy duty epoxy flooring can last between 8 to 15 years.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is heavy duty epoxy flooring suitable for factories?</summary>
                  <p className="text-gray-700 mt-2">Yes, it is ideal for factories because it offers durability, abrasion resistance, and chemical protection.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Can epoxy flooring handle forklift movement?</summary>
                  <p className="text-gray-700 mt-2">Yes, industrial epoxy flooring is designed to withstand forklift traffic and heavy operational movement.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is heavy duty epoxy flooring chemical resistant?</summary>
                  <p className="text-gray-700 mt-2">Yes, chemical-resistant epoxy flooring systems are available for industries exposed to chemicals and solvents.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Do you provide heavy duty epoxy flooring services across Bangalore?</summary>
                  <p className="text-gray-700 mt-2">Yes, Sanjana Enterprises provides industrial epoxy flooring services across Bangalore and nearby industrial areas. Contact us for a site visit and quote.</p>
                </details>
              </div>
            </div>
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
                  Explore our other specialized services that complement heavy duty epoxy flooring solutions.
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

