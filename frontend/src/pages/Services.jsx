import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Shield, CheckCircle, ArrowRight, Award, Phone, Eye, Target, Sparkles, Hammer, Wrench, X } from 'lucide-react'
import apiService from '../services/api'

const Services = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('waterproofing')
  const [dbServices, setDbServices] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedService, setSelectedService] = useState(null)
  const [specialServices, setSpecialServices] = useState([])

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const category = (params.get('category') || '').toLowerCase()
    if (category === 'flooring' || category === 'waterproofing') {
      setActiveTab(category)
    }
  }, [location.search])

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true)
        setError('')
        const services = await apiService.getServices()
        setDbServices(Array.isArray(services) ? services : [])
        // fetch special services (public)
        const specials = await apiService.getSpecialServices()
        setSpecialServices(Array.isArray(specials) ? specials : [])
      } catch (e) {
        setError('Failed to load services')
      } finally {
        setLoading(false)
      }
    }
    fetchServices()
  }, [])


  const process = [
    {
      step: '01',
      title: 'Free Inspection',
      description: 'We conduct a thorough inspection of your property to identify problem areas and recommend the best solution.',
      icon: Eye,
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '02',
      title: 'Custom Quote',
      description: 'Based on the inspection, we provide a detailed quote with transparent pricing and timeline.',
      icon: Target,
      color: 'from-green-500 to-green-600'
    },
    {
      step: '03',
      title: 'Professional Installation',
      description: 'Our certified team uses premium materials and follows industry best practices for installation.',
      icon: Hammer,
      color: 'from-purple-500 to-purple-600'
    },
    {
      step: '04',
      title: 'Quality Assurance',
      description: 'We conduct quality checks and provide you with a comprehensive warranty for peace of mind.',
      icon: Award,
      color: 'from-amber-500 to-amber-600'
    }
  ]


  const ServiceCard = ({ service, index }) => (
    <div 
      className="group cursor-pointer animate-fade-in-up hover:transform hover:-translate-y-2 transition-all duration-500"
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <div className="relative h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
          {/* Image header */}
          {service.image && (
            <div className="w-full h-48 overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          )}

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {service.title}
            </h3>
            <button onClick={() => setSelectedService(service)} className="mt-auto w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform group-hover:scale-[1.02]">
              View Details
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Services Tabs */}
      <section className="pt-28 sm:pt-32 py-8 sm:py-10 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target size={16} />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
              Complete Solutions for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Every Need
              </span>
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-10 sm:mb-16">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 border border-gray-200/50 shadow-lg">
              <button
                onClick={() => setActiveTab('waterproofing')}
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'waterproofing'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Water Proofing
              </button>
              <button
                onClick={() => setActiveTab('flooring')}
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeTab === 'flooring'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Flooring
              </button>
            </div>
          </div>

          {/* Services Grid */}
          {error && (
            <div className="text-center text-red-600 mb-6">{error}</div>
          )}
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading services...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(dbServices.length > 0
                ? dbServices
                    .filter(s => (activeTab === 'waterproofing' ? (s.category || '').toLowerCase().includes('water') : (s.category || '').toLowerCase().includes('floor')))
                    .sort((a,b) => (Number(a.order ?? 0) - Number(b.order ?? 0)))
                : []
              ).map((service, index) => (
                <ServiceCard key={service._id || index} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Leakage Detection Using Special Equipment - Only for Waterproofing */}
      {activeTab === 'waterproofing' && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles size={16} />
                Leakage Detection Using Special Equipment
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-4">Smart Structural Diagnostics</h3>
              <p className="text-lg text-gray-600">Advanced tools to identify hidden moisture, leaks, and structural issues with precision.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialServices.map((item) => (
                <div key={item._id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {item.image && (
                    <div className="h-48 w-full overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Wrench size={16} />
              Our Process
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
              How We Deliver
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Exceptional Results
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index} 
                className="group text-center animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl text-white text-xl font-black mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {step.step}
                  </div>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}>
                    <step.icon size={16} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-5xl font-black text-white mb-8 leading-tight">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Don't let water damage or flooring issues affect your property. Contact us now for a free inspection 
            and personalized solution for all your waterproofing and flooring needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/contact">
            <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl transform hover:scale-105" onClick={() => setShowQuoteModal(true)}>
              Get Free Consultation
            </button>
            </a>
            <a 
              href="tel:+919916290799"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Call Now: +91 9916290799
            </a>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                <button onClick={() => setSelectedService(null)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={20} />
                </button>
              </div>
              <p className="text-gray-700 mb-4">{selectedService.description}</p>
              {(selectedService.features || []).length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {selectedService.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
      `}</style>
    </div>
  )
}

export default Services