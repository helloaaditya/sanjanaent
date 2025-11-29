import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Car, CheckCircle, Award, Phone, ArrowRight, Wrench, Eye, Target, Sparkles, Hammer, Shield, ParkingCircle } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

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

  const applications = [
    "Commercial Parking Garages",
    "Residential Apartment Parking",
    "Shopping Mall Parking Areas",
    "Office Building Basements",
    "Hotel Parking Facilities",
    "Hospital Parking Lots",
    "Airport Parking Structures",
    "Multi-Level Parking Complexes"
  ]

  return (
    <>
      <Helmet>
        <title>Car Parking Flooring Solutions in Bangalore | Sanjana Enterprises</title>
        <meta name="description" content="Durable and safe car parking flooring solutions in Bangalore. Anti-skid, epoxy, and PU options available." />
        <meta name="keywords" content="car parking flooring solutions in bangalore, parking garage flooring, parking lot flooring, anti-slip parking flooring, commercial parking flooring" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/car-parking-flooring-solutions-in-bangalore" />
        <meta property="og:title" content="Car Parking Flooring Solutions in Bangalore" />
        <meta property="og:description" content="Durable and aesthetic parking flooring solutions. Heavy-duty, anti-slip, and weather-resistant for all parking facilities." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/car-parking-flooring-solutions-in-bangalore" />
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
                  Parking Flooring Solutions
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-up" delay={200}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Car Parking Flooring
                  <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Solutions in Bangalore
                  </span>
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

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="fade-in-right" delay={0}>
                <div>
                  <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Car size={16} />
                    About Our Car Parking Flooring
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 leading-tight">
                    About Our Car Parking Flooring
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Vehicle pressure, friction, and environmental factors all put constant stress on car parking floors. For commercial, residential, 
                    and industrial parking spaces, our speciality flooring systems—epoxy, PU coating, anti-skid finish, and waterproof coatings—offer 
                    a robust, seamless, and long-lasting solution.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Our parking flooring solutions combine strength, safety, and aesthetics to create functional 
                    and attractive parking areas that stand the test of time.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Heavy-Duty Construction</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Anti-Slip Surface</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={20} className="text-green-600" />
                      <span>Weather Resistant</span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-in-left" delay={200}>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="space-y-4">
                    {[
                      "Withstands heavy vehicle traffic and constant use",
                      "Resistant to oil, grease, and automotive chemicals",
                      "Anti-slip surface enhances safety for pedestrians",
                      "Weather-resistant for covered and open parking areas",
                      "Easy to clean and maintain professional appearance",
                      "Available in various colors and finishes",
                      "Long-lasting durability reduces replacement costs",
                      "Professional installation ensures optimal performance"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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

