import React, { useState, useEffect } from 'react'
import { Shield, CheckCircle, ArrowRight, Award, Phone, Eye, Target, Sparkles, Hammer, Wrench, X } from 'lucide-react'
import apiService from '../services/api'

const Services = () => {
  const [activeTab, setActiveTab] = useState('waterproofing')
  const [dbServices, setDbServices] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [selectedService, setSelectedService] = useState(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true)
        setError('')
        const services = await apiService.getServices()
        setDbServices(Array.isArray(services) ? services : [])
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
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
          <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color || 'from-blue-600 to-purple-600'} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Shield size={32} className="text-white" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 flex-grow group-hover:text-gray-800 transition-colors duration-300">
            {service.description}
          </p>
          <div className="space-y-2 mb-6">
            {(service.features || []).map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </div>
            ))}
          </div>
          <button onClick={() => setSelectedService(service)} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform group-hover:scale-[1.02]">
            View Details
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
        ></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles size={16} />
              Professional Services
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight">
              Expert
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                Waterproofing & Flooring
              </span>
              Solutions
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              Comprehensive waterproofing and flooring solutions for all your property needs. From residential 
              homes to industrial facilities, we provide expert services across Karnataka with guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{animationDelay: '1s'}}>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105">
                Get Free Quote
                <ArrowRight size={20} className="ml-2" />
              </button>
              <a 
                href="tel:+919916290799"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm hover:shadow-2xl transform hover:scale-105"
              >
                Call +91 9916290799
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Target size={16} />
              Our Services
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
              Complete Solutions for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Every Need
              </span>
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(dbServices.length > 0
                ? dbServices.filter(s => (activeTab === 'waterproofing' ? (s.category || '').toLowerCase().includes('water') : (s.category || '').toLowerCase().includes('floor')))
                : []
              ).map((service, index) => (
                <ServiceCard key={service._id || index} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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
      <section className="py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
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
            <button className="bg-white text-gray-900 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-2xl transform hover:scale-105">
              Get Free Consultation
            </button>
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