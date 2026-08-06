import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Shield, CheckCircle, Phone, ArrowRight, Target } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const ChemicalResistantEpoxyFlooring = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  return (
    <>
      <Helmet>
        <title>Chemical Resistant Epoxy Flooring in Bangalore | Industrial Protection</title>
        <meta name="description" content="Sanjana Enterprises provides chemical resistant epoxy flooring in Bangalore for pharmaceutical, laboratory, food processing and chemical plants — durable, seamless and corrosion-resistant systems." />
        <meta name="keywords" content="chemical resistant epoxy flooring in bangalore, chemical resistant epoxy, industrial chemical resistant flooring, lab epoxy flooring" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sanjanawaterproofing.com/chemical-resistant-epoxy-flooring-bangalore" />
        <meta property="og:title" content="Chemical Resistant Epoxy Flooring in Bangalore | Industrial Protection" />
        <meta property="og:description" content="High-performance chemical resistant epoxy flooring for industries, labs and processing units in Bangalore — protection against acids, solvents and spills." />
        <meta property="og:url" content="https://www.sanjanawaterproofing.com/chemical-resistant-epoxy-flooring-bangalore" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                  <Shield size={16} />
                  Chemical Resistant Epoxy Flooring
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Chemical Resistant Epoxy Flooring Services in Bangalore
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                  We install high-performance chemical resistant epoxy flooring suitable for laboratories, pharmaceutical units, chemical plants and industrial facilities where superior protection against chemicals, spills and abrasion is required.
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

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="prose max-w-none mb-6">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Professional Chemical Resistant Epoxy Flooring in Bangalore</h2>
              <p className="text-gray-700 text-lg">Sanjana Enterprises is a trusted provider of chemical resistant epoxy flooring in Bangalore, offering high-performance industrial flooring solutions for factories, laboratories, pharmaceutical industries, chemical processing plants, food processing units, and manufacturing facilities. With over 30 years of experience in industrial flooring and waterproofing solutions, we specialize in durable epoxy flooring systems designed to resist chemicals, acids, solvents, oils, abrasion, and industrial wear.</p>
              <p className="text-gray-700 text-lg mt-4">Industrial floors exposed to chemicals and harsh operational conditions often suffer from corrosion, surface damage, cracks, stains, and moisture penetration. Ordinary concrete flooring is not suitable for environments where chemical spills and industrial exposure are common. Our chemical resistant epoxy flooring systems provide a seamless and durable protective layer that improves floor lifespan, workplace safety, and operational efficiency.</p>
              <p className="text-gray-700 text-lg mt-4">At Sanjana Enterprises, we use premium-quality epoxy resins, industrial-grade coating materials, and advanced installation techniques to deliver customized chemical-resistant flooring solutions for industrial and commercial projects across Bangalore and Karnataka. As an ISO 9001:2015 Certified company, we focus on quality workmanship, durable floor protection, and long-term customer satisfaction.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">What is Chemical Resistant Epoxy Flooring?</h3>
                <p className="text-gray-600 mb-4">Chemical resistant epoxy flooring is a specialized industrial floor coating system designed to protect concrete surfaces from chemicals, acids, alkalis, solvents, oils, and industrial spills. The flooring system is created by applying epoxy resin and hardener over prepared concrete surfaces to form a strong, seamless, and corrosion-resistant protective layer.</p>
                <p className="text-gray-600 mb-4">Unlike ordinary floor coatings, chemical resistant epoxy flooring is formulated to withstand harsh industrial environments where floors are exposed to aggressive chemicals and operational stress. These flooring systems improve durability, reduce maintenance costs, and help maintain industrial hygiene standards.</p>
                <h4 className="font-semibold mt-4">Common Uses</h4>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  <li>Pharmaceutical industries</li>
                  <li>Chemical processing plants</li>
                  <li>Laboratories</li>
                  <li>Food processing industries</li>
                  <li>Manufacturing facilities</li>
                  <li>Automobile industries</li>
                  <li>Engineering industries</li>
                  <li>Industrial warehouses</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Chemical Resistant Epoxy Flooring Services in Bangalore</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold">Industrial Chemical Resistant Flooring</h4>
                    <p className="mt-2">We provide industrial chemical resistant epoxy flooring solutions for factories and manufacturing plants exposed to industrial chemicals, oils, solvents, and heavy operational traffic. Our systems provide chemical resistance, abrasion resistance, seamless finish, corrosion protection, long-lasting durability and easy maintenance.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Pharmaceutical Flooring Solutions</h4>
                    <p className="mt-2">Pharmaceutical industries require hygienic and chemical-resistant flooring systems capable of maintaining clean and contamination-free environments. Our systems offer seamless and hygienic finishes, chemical protection, easy cleaning, moisture resistance and long service life.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Laboratory Epoxy Flooring</h4>
                    <p className="mt-2">Laboratories are exposed to chemical spills, acids, solvents, and frequent cleaning procedures. We provide durable chemical-resistant flooring systems for laboratories and research facilities with acid resistance, stain protection and easy sanitization.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Food Processing Industry Flooring</h4>
                    <p className="mt-2">Food processing industries require seamless and hygienic flooring systems resistant to chemicals, oils, moisture, and heavy operational traffic. Our food-grade epoxy flooring systems provide chemical resistance, hygienic finish, moisture protection, easy cleaning and anti-skid options.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Features of Chemical Resistant Epoxy Flooring</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Excellent Chemical Resistance — resists acids, solvents, alkalis, oils and industrial chemicals</li>
                  <li>Seamless Surface Finish — prevents dust accumulation and improves hygiene</li>
                  <li>Corrosion Protection — shields concrete from chemical attack and surface damage</li>
                  <li>Abrasion Resistance — stands up to heavy operational wear</li>
                  <li>Moisture Protection — prevents water penetration and moisture-related damage</li>
                  <li>Easy Maintenance — smooth surface for fast cleaning and low upkeep</li>
                  <li>Anti-Skid Safety — available textured finishes for wet or high-risk areas</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h4 className="text-xl font-bold mb-3">Why Choose Sanjana Enterprises?</h4>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>30+ Years of Industry Experience</li>
                  <li>ISO 9001:2015 Certified Company</li>
                  <li>Experienced Technical Team for proper preparation and application</li>
                  <li>Premium Quality Materials and tailored systems</li>
                  <li>Customized Flooring Solutions for specific chemical exposures</li>
                  <li>Timely Project Completion with minimal downtime</li>
                </ul>
              </div>
            </div>

            <div className="py-12">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Chemical Resistant Epoxy Flooring Installation Process</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Surface Preparation</h4>
                  <p className="text-gray-700 mt-2">The concrete surface is cleaned, repaired, and mechanically prepared for proper coating adhesion.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Primer Application</h4>
                  <p className="text-gray-700 mt-2">An industrial-grade epoxy primer is applied to improve floor bonding and durability.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Epoxy Coating Installation</h4>
                  <p className="text-gray-700 mt-2">Chemical-resistant epoxy coatings are applied evenly to create a seamless and durable protective surface.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Protective Topcoat Application</h4>
                  <p className="text-gray-700 mt-2">A final protective topcoat is applied for enhanced chemical resistance, durability, and finish.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Quality Inspection</h4>
                  <p className="text-gray-700 mt-2">The completed flooring system is inspected to ensure proper coating performance and surface quality.</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-bold mb-3">Industries We Serve</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  {['Pharmaceutical industries','Chemical processing plants','Laboratories and research centers','Food processing industries','Manufacturing industries','Automobile industries','Engineering workshops','Warehouses and industrial units'].map((it, idx) => (
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
                  <p className="text-gray-800">“Professional industrial flooring service with excellent technical knowledge and durable results.”</p>
                  <footer className="text-sm text-gray-600 mt-2">— Suresh C.H</footer>
                </blockquote>
                <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-800">“Good quality epoxy flooring work with reliable support and timely completion.”</p>
                  <footer className="text-sm text-gray-600 mt-2">— Ashwin Virupaksha</footer>
                </blockquote>
                <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-800">“The industrial flooring project was completed professionally with strong and durable finishing.”</p>
                  <footer className="text-sm text-gray-600 mt-2">— Udas Kundu</footer>
                </blockquote>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-black text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">What is chemical resistant epoxy flooring?</summary>
                  <p className="text-gray-700 mt-2">Chemical resistant epoxy flooring is a specialized industrial flooring system designed to protect floors from chemicals, acids, solvents, oils, and corrosion.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is chemical resistant flooring suitable for factories?</summary>
                  <p className="text-gray-700 mt-2">Yes, it is ideal for factories and industrial facilities exposed to chemicals and heavy operational traffic.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Can epoxy flooring resist acid spills?</summary>
                  <p className="text-gray-700 mt-2">Yes, chemical-resistant epoxy flooring systems are designed to withstand acid spills and industrial chemicals.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is chemical resistant epoxy flooring easy to maintain?</summary>
                  <p className="text-gray-700 mt-2">Yes, the seamless surface is easy to clean and requires minimal maintenance.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">How long does chemical resistant epoxy flooring last?</summary>
                  <p className="text-gray-700 mt-2">With proper installation and maintenance, these flooring systems can last between 8 to 15 years.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is epoxy flooring suitable for pharmaceutical industries?</summary>
                  <p className="text-gray-700 mt-2">Yes, epoxy flooring is widely used in pharmaceutical industries because of its seamless and hygienic finish.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Do you provide services across Bangalore?</summary>
                  <p className="text-gray-700 mt-2">Yes, Sanjana Enterprises provides chemical resistant epoxy flooring services across Bangalore and nearby industrial areas.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default ChemicalResistantEpoxyFlooring
