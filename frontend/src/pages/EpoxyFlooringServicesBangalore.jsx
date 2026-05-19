import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Palette, Thermometer } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const EpoxyFlooringServicesBangalore = () => {
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
        <title>Epoxy Flooring Services in Bangalore | Industrial Experts</title>
        <meta name="description" content="Get professional epoxy flooring services in Bangalore for industrial, commercial, warehouse, and parking floors with durable, seamless, chemical-resistant epoxy coating solutions for long-lasting floor protection." />
        <meta name="keywords" content="Epoxy flooring services in Bangalore, industrial epoxy flooring, commercial epoxy flooring, warehouse epoxy, parking epoxy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sanjanawaterproofing.com/epoxy-flooring-services-in-bangalore" />
        <meta property="og:title" content="Epoxy Flooring Services in Bangalore | Industrial Experts" />
        <meta property="og:description" content="High-performance epoxy flooring for industrial and commercial spaces. Durable, seamless, and customizable with 15-20 year lifespan." />
        <meta property="og:url" content="https://www.sanjanawaterproofing.com/epoxy-flooring-services-in-bangalore" />
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
                  Professional Epoxy Flooring
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Professional Epoxy Flooring Services in Bangalore
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                  Sanjana Enterprises offers premium epoxy flooring solutions for residential, industrial and commercial use. 
                  We provide a lasting, high-performance product of the highest quality. Our team provides a high level of 
                  quality service that results in an installation that far exceeds your expectations and is performed with great care.
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

        {/* Industries, Service Areas, Testimonials & FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Industries We Serve</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mt-4">Our epoxy flooring systems are trusted across a wide range of sectors.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                'Manufacturing industries',
                'Warehouses and logistics centers',
                'Automobile industries',
                'Pharmaceutical industries',
                'Hospitals and laboratories',
                'Food processing industries',
                'Commercial buildings',
                'Parking structures',
                'Retail showrooms',
                'Educational institutions'
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="font-semibold text-gray-900">{item}</h4>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12 items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Service Areas in Bangalore</h3>
                <p className="text-gray-600 mb-3">We provide epoxy flooring services across Bangalore including:</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {['Whitefield','Electronic City','Peenya','KR Puram','Hebbal','Yelahanka','Bommasandra','Hosur Road','HSR Layout','Marathahalli','JP Nagar','Rajajinagar'].map((area, i) => (
                    <li key={i}>{area}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">What Our Clients Say</h3>
                <div className="space-y-4">
                  <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-gray-800">"Recently, we did PU flooring, and the work was completed smoothly with an excellent finish. Thank you, Sanjana Enterprises, for the quality service."</p>
                    <footer className="text-sm text-gray-600 mt-2">— Lavanya R</footer>
                  </blockquote>
                  <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-gray-800">"Extremely professional service with good technical knowledge and timely project completion."</p>
                    <footer className="text-sm text-gray-600 mt-2">— Suresh C.H</footer>
                  </blockquote>
                  <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-gray-800">"Professional team with reasonable pricing and excellent waterproofing and epoxy flooring solutions."</p>
                    <footer className="text-sm text-gray-600 mt-2">— Ashwin Virupaksha</footer>
                  </blockquote>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">What is epoxy flooring?</summary>
                  <p className="text-gray-700 mt-2">Epoxy flooring is a durable floor coating system made using epoxy resin and hardener to create a strong and seamless protective surface.</p>
                </details>

                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">How long does epoxy flooring last?</summary>
                  <p className="text-gray-700 mt-2">High-quality epoxy flooring can last between 5 and 15 years, depending on industrial usage and maintenance.</p>
                </details>

                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is epoxy flooring waterproof?</summary>
                  <p className="text-gray-700 mt-2">Yes, epoxy flooring provides excellent resistance against moisture and water damage.</p>
                </details>

                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is epoxy flooring suitable for factories?</summary>
                  <p className="text-gray-700 mt-2">Yes, industrial epoxy flooring is ideal for factories because of its durability and chemical resistance.</p>
                </details>

                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Can epoxy flooring resist chemicals?</summary>
                  <p className="text-gray-700 mt-2">Chemically-resistant epoxy flooring is specially designed to resist acids, chemicals, oils, and industrial solvents.</p>
                </details>

                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Do you provide services across Bangalore?</summary>
                  <p className="text-gray-700 mt-2">Yes, we provide epoxy flooring services across Bangalore and nearby industrial areas. Contact us for a site visit and quote.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Rest of the page content - expanded */}
        {/* Company Intro & What is Epoxy Flooring */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="prose max-w-none mb-10">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Professional Epoxy Flooring Services in Bangalore</h2>
              <p className="text-gray-700 text-lg">Sanjana Enterprises is a leading provider of epoxy flooring services in Bangalore, offering high-quality industrial, commercial, and residential flooring solutions with over 30 years of industry experience. We specialize in durable epoxy floor coatings designed to provide long-lasting protection, superior strength, seamless finish, and excellent resistance against chemicals, abrasion, moisture, and heavy traffic.</p>
              <p className="text-gray-700 text-lg mt-4">As an <strong>ISO 9001:2015 Certified</strong> company, we are committed to delivering reliable and customized flooring solutions for factories, warehouses, parking areas, hospitals, laboratories, manufacturing units, showrooms, and commercial buildings across Bangalore and Karnataka. Our experienced team uses premium-quality epoxy materials and advanced installation techniques to ensure durable and cost-effective flooring systems for every project.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Shield size={16} />
                    What is Epoxy Flooring?
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">What is Epoxy Flooring?</h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">Epoxy flooring is a seamless floor coating system created by applying epoxy resin and hardener over concrete surfaces. Once cured, the epoxy forms a highly durable protective layer capable of resisting heavy traffic, industrial wear, moisture, stains, chemicals, oils, and abrasion.</p>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">Epoxy flooring is widely preferred for industrial and commercial environments because it improves floor durability, workplace safety, cleanliness, and overall appearance. The seamless finish also prevents dust accumulation and makes cleaning easier compared to traditional concrete flooring systems.</p>
                  <h4 className="text-lg font-semibold mt-4">Available Systems</h4>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-2">
                    <li>Industrial epoxy flooring</li>
                    <li>Heavy-duty epoxy coatings</li>
                    <li>Self-leveling epoxy flooring</li>
                    <li>Anti-skid epoxy flooring</li>
                    <li>Chemical-resistant flooring</li>
                    <li>Decorative epoxy coatings</li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Sanjana Enterprises?</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li><strong>30+ Years of Experience:</strong> Decades of successful flooring and waterproofing projects across Bangalore and Karnataka.</li>
                    <li><strong>ISO 9001:2015 Certified:</strong> Committed to quality and standard processes.</li>
                    <li><strong>Experienced Technical Team:</strong> Skilled professionals for surface preparation and installation.</li>
                    <li><strong>Premium Materials:</strong> Industrial-grade epoxy resins and coatings.</li>
                    <li><strong>Customized Solutions:</strong> Flooring designed for your operational needs and environment.</li>
                    <li><strong>Timely Completion:</strong> Efficient project execution with minimal downtime.</li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Our Epoxy Flooring Services in Bangalore</h2>
              <p className="text-gray-600 max-w-3xl mx-auto mt-4">We deliver tailored epoxy flooring solutions across industries — from factories to showrooms and parking areas.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Epoxy Flooring</h3>
                <p className="text-gray-600 mb-3">Built for factories, manufacturing plants and engineering units exposed to heavy traffic and machinery.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>High load-bearing strength</li>
                  <li>Abrasion and chemical resistance</li>
                  <li>Seamless, dust-free finish</li>
                  <li>Long-lasting durability</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Warehouse Epoxy Flooring</h3>
                <p className="text-gray-600 mb-3">Designed for warehouses and logistics centers with heavy forklift and pallet traffic.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Improved floor durability</li>
                  <li>Reduced dust formation</li>
                  <li>Easy maintenance and cleaning</li>
                  <li>Customized systems for traffic conditions</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Epoxy Flooring</h3>
                <p className="text-gray-600 mb-3">Ideal for offices, hospitals, malls, showrooms and retail spaces — available in decorative finishes.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Glossy and decorative finishes</li>
                  <li>Stain and scratch resistance</li>
                  <li>Custom colours and textures</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Car Parking Epoxy Flooring</h3>
                <p className="text-gray-600 mb-3">Anti-skid epoxy solutions for basement parking, ramps, driveways and commercial parking areas.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Anti-skid surface</li>
                  <li>Tire mark and oil resistance</li>
                  <li>Easy cleaning and long life</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chemical-Resistant Epoxy Flooring</h3>
                <p className="text-gray-600 mb-3">Specialist systems for pharmaceutical, laboratory, chemical processing and food industries where floors face aggressive chemicals and solvents.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Protection against acids, solvents and oils</li>
                  <li>Corrosion and stain resistance</li>
                  <li>Compliant for hygienic & critical environments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Industrial Epoxy Screed Flooring Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="prose max-w-none mb-6">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Professional Industrial Epoxy Screed Flooring in Bangalore</h2>
              <p className="text-gray-700 text-lg">Sanjana Enterprises is a trusted provider of industrial epoxy screed flooring in Bangalore, offering durable and high-performance flooring solutions for factories, warehouses, manufacturing plants, engineering units, pharmaceutical industries, and commercial facilities. With over 30 years of experience in industrial flooring and waterproofing solutions, we specialize in heavy-duty epoxy screed flooring systems designed to withstand heavy operational traffic, machinery movement, impact loads, abrasion, and industrial chemical exposure.</p>
              <p className="text-gray-700 text-lg mt-4">Our industrial epoxy screed flooring systems provide a strong, seamless, and long-lasting protective layer that improves floor durability, workplace safety, and operational efficiency. As an <strong>ISO 9001:2015 Certified</strong> company, we use premium-quality epoxy resins, industrial-grade screed materials, and advanced installation methods to deliver customized flooring solutions suitable for demanding industrial environments.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">What is Industrial Epoxy Screed Flooring?</h3>
                  <p className="text-gray-600 mb-4">Industrial epoxy screed flooring is a heavy-duty flooring system created by combining epoxy resin with graded aggregates to form a thick and durable screed layer over concrete surfaces. This flooring system is designed for industrial environments requiring superior strength, abrasion resistance, impact resistance, and chemical protection.</p>
                  <p className="text-gray-600 mb-4">Unlike standard epoxy coatings, epoxy screed flooring provides enhanced thickness and structural durability, making it suitable for areas exposed to extreme operational conditions and heavy industrial traffic.</p>
                  <h4 className="font-semibold mt-4">Common Applications</h4>
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
              </ScrollAnimation>

              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Our Screed Flooring?</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li><strong>High Strength & Load Capacity:</strong> Designed to handle heavy machinery and forklift traffic.</li>
                    <li><strong>Impact & Abrasion Resistance:</strong> Protects against wear from constant industrial activity.</li>
                    <li><strong>Chemical Protection:</strong> Resistant to oils, acids, solvents and industrial chemicals.</li>
                    <li><strong>Seamless & Hygienic:</strong> Smooth, dust-free surface ideal for clean environments.</li>
                    <li><strong>Customized Systems:</strong> Tailored formulations based on industry and exposure conditions.</li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Heavy Duty Industrial Flooring</h4>
                <p className="text-gray-600 mb-3">Our heavy-duty epoxy screed flooring systems are specially designed for factories and industrial facilities exposed to high operational loads and continuous machinery movement.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>High load-bearing capacity</li>
                  <li>Impact resistance</li>
                  <li>Abrasion protection</li>
                  <li>Seamless finish</li>
                  <li>Chemical resistance</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Warehouse Screed Flooring</h4>
                <p className="text-gray-600 mb-3">Warehouse floors require strong and durable flooring systems capable of handling forklifts, pallets, trolleys, and heavy storage loads.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Smooth and seamless finish</li>
                  <li>Dust-free surface</li>
                  <li>High durability</li>
                  <li>Easy maintenance</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Factory Epoxy Screed Flooring</h4>
                <p className="text-gray-600 mb-3">Customized epoxy screed flooring systems for factories based on industry type, traffic levels and chemical exposure.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Tailored to floor condition and operational needs</li>
                  <li>Professional surface preparation and installation</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm md:col-span-2">
                <h4 className="text-xl font-bold mb-3">Chemical Resistant Screed Flooring</h4>
                <p className="text-gray-600 mb-3">Specialist chemical-resistant systems for pharmaceutical industries, laboratories, food processing units and chemical plants exposed to aggressive substances.</p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Resistance to acids, solvents and industrial chemicals</li>
                  <li>Corrosion and stain protection</li>
                  <li>Suitable for hygienic and critical environments</li>
                </ul>
              </div>
            </div>

            <div className="py-12">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Features of Industrial Epoxy Screed Flooring</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  'High strength flooring',
                  'Seamless surface',
                  'Impact resistance',
                  'Abrasion resistance',
                  'Chemical protection',
                  'Long service life',
                  'Easy maintenance'
                ].map((f, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">{f}</h4>
                    <p className="text-gray-600">{f === 'High strength flooring' ? 'Exceptional compressive strength suitable for heavy traffic.' : ''}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Installation Process</h3>
              <div className="space-y-6">
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
                  <h4 className="font-semibold">Surface Finishing & Topcoat</h4>
                  <p className="text-gray-700 mt-2">The flooring is finished smoothly or with anti-skid texture and a final protective topcoat is applied for durability and chemical resistance.</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start mt-12">
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
                  Why Choose Sanjana Enterprises
                  <span className="block text-blue-600">for Epoxy Flooring?</span>
                </h2>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wrench size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Skilled Design Experts</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We have years of experience in the installation of industrial, commercial, and residential epoxy flooring.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Construction Materials</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We use only the highest quality epoxy resins to ensure durability, chemical resistance, and long-term performance of your flooring.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Palette size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Customised Flooring Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We design and construct flooring solutions to meet all your specific needs in terms of colour, texture, construction pattern, etc.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={300}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Health & Safety Compliance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Anti-slip and hygienic coatings will meet all health and safety requirements for your flooring.
                  </p>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Projects are Completed on Time</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All installation jobs will be completed efficiently, with little or no interruption to the flow of your business or daily routine.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
        
        {/* Why Epoxy is Smart Investment Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Sparkles size={16} />
                    Smart Investment
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Why Epoxy Flooring is a
                    <span className="block text-blue-600">Smart Investment</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    When it comes to flooring, epoxy has some fantastic benefits that can really make a difference. 
                    First off, you'll find that the long-term maintenance costs for your floors will be significantly lower. 
                    Plus, with the addition of anti-slip coatings, you can create a safer environment for everyone.
                  </p>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Not to mention, the overall look of your space will get a nice boost in aesthetic appeal. 
                    Concrete surfaces will be shielded from wear and tear, as well as those pesky harmful chemicals. 
                    And let's not forget, investing in epoxy flooring can actually increase the value of your property. 
                    There are also eco-friendly and sustainable options available, making it a smart choice for the environment!
                  </p>
                  <div className="flex flex-wrap gap-4 mt-8">
                    <div className="flex items-center gap-2 text-gray-700 bg-blue-50 px-4 py-2 rounded-lg">
                      <CheckCircle size={20} className="text-green-600" />
                      <span className="font-semibold">Lower Maintenance Costs</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 bg-blue-50 px-4 py-2 rounded-lg">
                      <CheckCircle size={20} className="text-green-600" />
                      <span className="font-semibold">Increased Property Value</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700 bg-blue-50 px-4 py-2 rounded-lg">
                      <CheckCircle size={20} className="text-green-600" />
                      <span className="font-semibold">Eco-Friendly Options</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Key Advantages</h3>
                  <div className="space-y-4">
                    {[
                      "Significantly lower long-term maintenance costs",
                      "Safer environment with anti-slip coatings",
                      "Enhanced aesthetic appeal for your space",
                      "Protection against wear and tear",
                      "Resistance to harmful chemicals",
                      "Increased property value",
                      "Eco-friendly and sustainable options"
                    ].map((advantage, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-cyan-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={16} className="text-blue-600" />
                        </div>
                        <span className="text-blue-50 leading-relaxed">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
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
              
              <ScrollAnimation animation="fade-in-up" delay={300}>
                <Link to="/repair-section" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group block">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Wrench size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Repair Services</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">Expert repair and restoration services for all types of flooring systems.</p>
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

export default EpoxyFlooringServicesBangalore

