import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Car, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Shield, ParkingCircle, MapPin } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'
import { BANGALORE_AREAS } from '../data/locationPagesData'

const CarParkingFlooring = () => {
  const handlePhoneClick = () => {
    window.location.href = "tel:+919916290799"
  }

  const features = [
    {
      title: "Anti-Skid Surface for more secure driving",
      description: "Provides superior traction for safe vehicle movement even in wet conditions.",
      icon: Shield
    },
    {
      title: "High Capacity to Bear Loads",
      description: "Designed to withstand constant vehicle traffic and heavy loads without damage.",
      icon: Award
    },
    {
      title: "Chemical, Fuel, and Oil Resistance",
      description: "Excellent resistance to oil, grease, fuel, and automotive chemicals.",
      icon: CheckCircle
    },
    {
      title: "UV and Weather Defence",
      description: "Withstands temperature variations, UV exposure, and harsh weather conditions.",
      icon: Target
    },
    {
      title: "Durable, Dust-Free, and Smooth Finish",
      description: "Long-lasting, seamless surface that's easy to clean and maintain.",
      icon: Sparkles
    },
    {
      title: "Simple to Maintain & Clean",
      description: "Easy maintenance keeps parking areas looking professional with minimal effort.",
      icon: ParkingCircle
    },
    {
      title: "Accessible in a Variety of Colours and Markings",
      description: "Multiple color options and custom markings available for better organization.",
      icon: Hammer
    }
  ]

  const parkingTypes = [
    "Parking flooring made of epoxy",
    "PU Flooring for Parking",
    "Coating to Prevent Skid",
    "Parking on Rooftops Flooring that is waterproof",
    "Floor Coating for Basement Parking",
    "Directional and Bay Marking"
  ]

  const applications = [
    "Apartments for residents",
    "Commercial structures",
    "Mall shopping",
    "IT offices and parks",
    "Medical facilities",
    "Units of industry",
    "Public parking lots and hotels"
  ]

  const whyChooseUs = [
    "Expert installers with technical know-how",
    "Superior epoxy and PU coating materials",
    "Durable and weatherproof flooring",
    "Precise labelling and line arrangement",
    "Timely completion of the project",
    "Competitive and open pricing"
  ]

  const process = [
    {
      step: '01',
      title: 'Site Evaluation',
      description: 'Assessment of parking area conditions, traffic patterns, and specific requirements.',
      icon: Eye
    },
    {
      step: '02',
      title: 'Surface Preparation',
      description: 'Cleaning, grinding, and repair of concrete surface to ensure optimal adhesion and durability.',
      icon: Wrench
    },
    {
      step: '03',
      title: 'Flooring Installation',
      description: 'Application of specialized parking flooring system with anti-slip and protective properties.',
      icon: Hammer
    },
    {
      step: '04',
      title: 'Curing & Finishing',
      description: 'Proper curing time and final finishing to ensure maximum durability and performance.',
      icon: Target
    }
  ]

  return (
    <>
      <Helmet>
        <title>Car Parking Flooring Solutions in Bangalore | Epoxy Parking</title>
        <meta name="description" content="Best car parking flooring solutions in Bangalore with anti-skid epoxy coatings for basement parking, ramps, driveways, and commercial parking areas offering durability, safety, and easy maintenance." />
        <meta name="keywords" content="car parking flooring solutions in bangalore, epoxy parking, anti-skid parking flooring, basement parking epoxy" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.sanjanawaterproofing.com/car-parking-flooring-in-bangalore" />
        <meta property="og:title" content="Car Parking Flooring Solutions in Bangalore | Epoxy Parking" />
        <meta property="og:description" content="Anti-skid epoxy parking flooring for basements, ramps, driveways and commercial parking areas. Durable, safe and low-maintenance." />
        <meta property="og:url" content="https://www.sanjanawaterproofing.com/car-parking-flooring-in-bangalore" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 py-16 sm:py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <ScrollAnimation animation="fade-in-up" delay={0}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                  <Car size={16} />
                  Car Parking Epoxy Flooring
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Car Parking Epoxy Flooring Solutions in Bangalore
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={400}>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                  Sanjana Waterproofing offers high-performance, long-lasting car parking flooring solutions in Bangalore that are resistant 
                  to weather exposure, heavy vehicle movement, oil spills, and normal wear and tear. Our parking floor coatings prolong the 
                  life of your parking area, increase safety, and improve aesthetics.
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
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

        {/* Company Intro & What is Parking Epoxy */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="prose max-w-none mb-6">
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">Professional Car Parking Flooring Solutions in Bangalore</h2>
              <p className="text-gray-700 text-lg">Sanjana Enterprises is a trusted provider of car parking flooring solutions in Bangalore, offering durable and high-performance epoxy flooring systems for basement parking areas, commercial parking spaces, driveways, ramps, residential complexes, and industrial parking zones. With over 30 years of experience in flooring and waterproofing solutions, we specialize in delivering seamless, anti-skid, and long-lasting parking floor coatings designed to withstand heavy vehicle movement, abrasion, oil stains, moisture, and daily wear.</p>
              <p className="text-gray-700 text-lg mt-4">As an <strong>ISO 9001:2015 Certified</strong> company, we focus on quality workmanship, customer satisfaction, and durable flooring systems that offer long-lasting performance in demanding parking environments.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">What is Car Parking Epoxy Flooring?</h3>
                  <p className="text-gray-600 mb-4">Car parking epoxy flooring is a seamless protective floor coating system applied over concrete parking surfaces using epoxy resin and hardener. Once cured, the epoxy forms a strong and durable layer capable of resisting tire movement, abrasion, oil stains, water exposure, and heavy operational traffic.</p>
                  <p className="text-gray-600 mb-4">Parking epoxy flooring is commonly used in basement parking areas, commercial parking spaces, residential apartment parking, shopping mall parking, industrial parking zones, ramps and driveways, and multi-level parking facilities. These systems improve durability and appearance while reducing maintenance and dust formation.</p>
                  <h4 className="font-semibold mt-4">Common Uses</h4>
                  <ul className="list-disc pl-5 text-gray-700 mt-2">
                    <li>Basement parking areas</li>
                    <li>Commercial parking spaces</li>
                    <li>Residential apartment parking</li>
                    <li>Shopping mall parking</li>
                    <li>Industrial parking zones</li>
                    <li>Ramps and driveways</li>
                    <li>Multi-level parking facilities</li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Sanjana Enterprises?</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li><strong>30+ Years Experience:</strong> Decades of flooring and waterproofing projects across Bangalore and Karnataka.</li>
                    <li><strong>ISO 9001:2015 Certified:</strong> Quality systems and standards.</li>
                    <li><strong>Experienced Technical Team:</strong> Proper surface preparation and professional application.</li>
                    <li><strong>Premium Materials:</strong> Industrial-grade epoxy resins and coatings.</li>
                    <li><strong>Customized Solutions:</strong> Tailored to parking traffic and site conditions.</li>
                    <li><strong>Timely Completion:</strong> Efficient execution with minimal disruption.</li>
                  </ul>
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
                <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Sparkles size={16} />
                  Premium Features
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Why Choose Our
                  <span className="block text-indigo-600">Parking Flooring?</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Our parking flooring systems are engineered for maximum durability and safety in parking environments.
                </p>
              </div>
            </ScrollAnimation>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-black mb-6">Ideal for</h2>
                  <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                    Our car parking flooring is suitable for:
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Applications:</h3>
                    <ul className="space-y-3">
                      {applications.map((application, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                          <span>{application}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Target size={16} />
                    Installation Process
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    Professional
                    <span className="block text-indigo-600">Installation Process</span>
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our expert team ensures proper installation to maximize the durability and performance 
                    of your parking flooring system.
                  </p>
                  
                  <div className="space-y-6">
                    {process.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon size={24} className="text-white" />
                          </div>
                          <div className="text-4xl font-black text-indigo-200 text-center mt-2">{step.step}</div>
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

        {/* Types of Parking Flooring Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                  Types of Parking Flooring
                  <span className="block text-indigo-600">We Offer</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {parkingTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span className="text-gray-800 font-medium">{type}</span>
                    </div>
                  </div>
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
                <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
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
                  <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-lg">
                We customize parking floor coatings based on traffic load, location, and surface condition.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Contact Us for Car Parking Flooring Solutions in Bangalore
              </h2>
              <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
                Make your parking area safer, stronger, and more attractive with our reliable flooring solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-indigo-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={handlePhoneClick}
                  className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center"
                >
                  <Phone size={20} className="mr-2" />
                  Call: +91 9916290799
                </button>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Industries, Testimonials & FAQ */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Industries and Properties We Serve</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Residential apartments</li>
                  <li>Commercial complexes</li>
                  <li>Shopping malls</li>
                  <li>Hospitals</li>
                  <li>Hotels</li>
                  <li>Warehouses</li>
                  <li>Industrial factories</li>
                  <li>Office buildings</li>
                  <li>Multi-level parking structures</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Car Parking Flooring Process</h3>
                <ol className="list-decimal pl-5 text-gray-700 space-y-2">
                  <li><strong>Surface Preparation:</strong> Grinding and cleaning to remove dust, oil and damaged concrete.</li>
                  <li><strong>Primer Application:</strong> High-quality epoxy primer for improved adhesion.</li>
                  <li><strong>Epoxy Coating Application:</strong> Industrial-grade epoxy applied evenly for a seamless finish.</li>
                  <li><strong>Anti-Skid Layer:</strong> Optional aggregates for ramps and high-traction areas.</li>
                  <li><strong>Final Finishing:</strong> Protective topcoat for gloss, durability and long-term performance.</li>
                </ol>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Areas in Bangalore</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {['Whitefield','Electronic City','Peenya','KR Puram','Hebbal','Yelahanka','Bommasandra','Hosur Road','HSR Layout','Marathahalli','JP Nagar','Rajajinagar'].map((area, i) => (
                  <div key={i} className="bg-gray-50 px-4 py-3 rounded-lg border border-gray-100">{area}</div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-800">“The flooring work was completed smoothly and the finish looks excellent. Highly recommended for epoxy flooring services.”</p>
                  <footer className="text-sm text-gray-600 mt-2">— Lavanya R</footer>
                </blockquote>
                <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-800">“Professional service with good technical knowledge and reasonable pricing.”</p>
                  <footer className="text-sm text-gray-600 mt-2">— Ashwin Virupaksha</footer>
                </blockquote>
                <blockquote className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-800">“The basement flooring project was completed professionally with durable results and timely service.”</p>
                  <footer className="text-sm text-gray-600 mt-2">— Udas Kundu</footer>
                </blockquote>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">What is car parking epoxy flooring?</summary>
                  <p className="text-gray-700 mt-2">Car parking epoxy flooring is a seamless protective coating system used for basement parking areas, ramps, and commercial parking spaces.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is epoxy flooring suitable for parking areas?</summary>
                  <p className="text-gray-700 mt-2">Yes, epoxy flooring is highly durable and suitable for areas exposed to continuous vehicle movement and tire friction.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Does parking epoxy flooring provide anti-skid protection?</summary>
                  <p className="text-gray-700 mt-2">Yes, anti-skid coatings are available for ramps and parking zones to improve safety and traction.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Can epoxy flooring resist oil stains and tire marks?</summary>
                  <p className="text-gray-700 mt-2">Yes, epoxy coatings provide excellent resistance against oil stains, grease, and tire marks.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">How long does parking epoxy flooring last?</summary>
                  <p className="text-gray-700 mt-2">High-quality parking epoxy flooring can last between 5 to 10 years depending on traffic conditions and maintenance.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Is parking epoxy flooring easy to maintain?</summary>
                  <p className="text-gray-700 mt-2">Yes, epoxy parking floors are easy to clean and require minimal maintenance.</p>
                </details>
                <details className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <summary className="font-semibold">Do you provide parking flooring services across Bangalore?</summary>
                  <p className="text-gray-700 mt-2">Yes, Sanjana Enterprises provides parking flooring solutions across Bangalore and nearby areas. Contact us for a site visit and quote.</p>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Location pages – programmatic local SEO */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="flex items-center gap-2 text-indigo-600 mb-6">
                <MapPin size={20} />
                <h2 className="text-2xl font-black text-gray-900">Car Parking Flooring Across Bangalore</h2>
              </div>
              <p className="text-gray-600 mb-6">We serve all major areas. Select your locality or find service near you:</p>
              <div className="mb-4">
                <Link to="/car-parking-flooring-near-me" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700">
                  <MapPin size={18} />
                  Car Parking Flooring Near Me
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                {BANGALORE_AREAS.map((area) => (
                  <Link key={area.slug} to={`/car-parking-flooring-${area.slug}-bangalore`} className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium hover:bg-indigo-100 transition-colors">
                    {area.name}
                  </Link>
                ))}
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
                  <span className="block text-indigo-600">Services</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Explore our other specialized services that complement parking flooring solutions.
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
                  <div className="text-indigo-600 font-semibold flex items-center">
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
                  <div className="text-indigo-600 font-semibold flex items-center">
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
                  <div className="text-indigo-600 font-semibold flex items-center">
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

export default CarParkingFlooring

