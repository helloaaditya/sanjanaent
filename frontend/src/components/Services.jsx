import React, { useState } from 'react'
import { Home, Building2, Droplets, Shield, Wrench, CheckCircle, ArrowRight, Star, Award, Phone, Eye, X, Palette, Factory, ExternalLink, Grid3x3 } from 'lucide-react'
import { Link } from 'react-router-dom'

// Mock ScrollAnimation component for demo
const ScrollAnimation = ({ children, animation, delay }) => (
  <div className={`animate-fade-in-up`} style={{ animationDelay: `${delay}ms` }}>
    {children}
  </div>
)

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

  // Main 4 featured services
  const mainServices = [
    {
      icon: Factory, // replace with suitable flooring icon
      title: 'Industrial Epoxy Flooring',
      shortDescription: 'Heavy-duty seamless flooring for industrial spaces',
      fullDescription:
        'Industrial spaces demand flooring that can withstand heavy loads, chemical exposure, and continuous movement without compromising safety or durability. Epoxy flooring is one of the most trusted solutions, offering a seamless, strong, and highly resistant surface ideal for warehouses, factories, and production areas.',
      features: [
        'High resistance to chemicals, oils, and abrasions',
        'Seamless, dust-free, and hygienic surface',
        'Excellent load-bearing capacity and durability',
        'Easy maintenance with long-lasting performance',
        'Enhanced safety with anti-slip and anti-static options'
      ],
      popular: true,
      category: 'Flooring',
      benefits: [
        'Reliable performance in demanding industrial conditions',
        'Hygienic and low-maintenance surface',
        'Improved workplace safety with anti-slip properties',
        'Durable, long-lasting flooring solution'
      ]
    },
    {
      icon: Palette, // replace with suitable PU flooring icon
      title: 'PU Flooring',
      shortDescription: 'Durable and flexible polyurethane flooring system',
      fullDescription:
        'Polyurethane (PU) flooring is a versatile and high-performance solution widely used in industrial, commercial, and specialized environments. Known for its flexibility and durability, PU flooring provides excellent resistance to chemicals, impact, and abrasion while maintaining a smooth and seamless finish.',
      features: [
        'Superior resistance to chemicals, oils, and cleaning agents',
        'High durability with flexibility to absorb impact and vibrations',
        'Seamless, hygienic, and easy-to-clean surface',
        'Comfortable underfoot, reducing fatigue in work environments',
        'Excellent performance in areas with temperature variations'
      ],
      popular: false,
      category: 'Flooring',
      benefits: [
        'Ideal for pharmaceutical, food, and manufacturing industries',
        'Improved worker comfort and safety',
        'Enhanced durability in high-traffic areas',
        'Reliable performance under varying temperature conditions'
      ]
    },
    {
      icon: Building2, // replace with ESD flooring icon
      title: 'ESD Flooring',
      shortDescription: 'Electrostatic discharge control flooring system',
      fullDescription:
        'Electrostatic Discharge (ESD) flooring is designed to control static electricity, ensuring the safety of sensitive equipment and creating a secure working environment. It is widely used in industries where even minor static discharges can cause serious damage, such as electronics, pharmaceuticals, data centers, and laboratories.',
      features: [
        'Effective dissipation of static electricity',
        'Protection of sensitive electronic equipment and components',
        'Seamless, durable, and easy-to-clean surface',
        'High resistance to chemicals, abrasions, and heavy traffic',
        'Compliance with industry safety and quality standards'
      ],
      popular: true,
      category: 'Flooring',
      benefits: [
        'Safe and secure environment for sensitive industries',
        'Protection against costly equipment damage',
        'Durable and low-maintenance flooring',
        'Reliable compliance with industry standards'
      ]
    },
    {
      icon: Home, // replace with anti-skid flooring icon
      title: 'Anti-Skid Flooring',
      shortDescription: 'Slip-resistant flooring for safe environments',
      fullDescription:
        'In areas where safety is a priority, anti-skid flooring provides a reliable solution to prevent slips and falls. Designed with a textured or coated surface, it offers improved grip and stability, even in wet, oily, or high-traffic environments.',
      features: [
        'Enhanced safety by reducing slip and fall risks',
        'Durable surface with strong resistance to wear and abrasion',
        'Suitable for wet areas, ramps, car parks, and industrial floors',
        'Easy to clean and maintain without losing grip quality',
        'Available in various finishes to suit functional and aesthetic needs'
      ],
      popular: false,
      category: 'Flooring',
      benefits: [
        'Improved workplace and public safety',
        'Durable and reliable performance in wet conditions',
        'Low maintenance with long-term grip quality',
        'Versatile design options for industrial and commercial use'
      ]
    }
  ]
  

  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null

    return (
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="p-6 md:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-2xl flex items-center justify-center flex-shrink-0">
                  <service.icon size={32} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                    {service.popular && (
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star size={12} className="fill-current" />
                        <span>Popular</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">{service.title}</h3>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 ml-4"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Description */}
            <div className="mb-8">
              <p className="text-lg text-gray-600 leading-relaxed">{service.fullDescription}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Service Features */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600" />
                  Service Features
                </h4>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle size={12} className="text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award size={20} className="text-blue-600" />
                  Key Benefits
                </h4>
                <div className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Star size={12} className="text-blue-600 fill-current" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group">
                Learn More About {service.title}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center">
                <Phone size={18} className="mr-2" />
                Contact Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="services" className="relative py-16 md:py-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation animation="fade-in-up" delay={0}>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Shield size={16} className="md:w-5 md:h-5" />
              <span>Our Premium Services</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
              Complete Waterproofing &
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mt-2">
                Flooring Solutions
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From residential homes to commercial buildings, we provide cutting-edge services 
              with <span className="font-semibold text-cyan-600">guaranteed results</span> and 
              <span className="font-semibold text-blue-600"> long-term warranty</span>.
            </p>
          </div>
        </ScrollAnimation>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 md:mb-16">
          {mainServices.map((service, index) => (
            <ScrollAnimation key={index} animation="fade-in-up" delay={200 + index * 100}>
              <div className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-cyan-200 transform hover:-translate-y-2 h-full flex flex-col">
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-100 to-blue-100 text-cyan-600 rounded-xl lg:rounded-2xl flex items-center justify-center group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <service.icon size={24} className="lg:w-7 lg:h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors leading-tight">
                        {service.title}
                      </h3>
                      {service.popular && (
                        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 flex-shrink-0">
                          <Star size={10} className="fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                    </div>
                    <span className="bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium border border-cyan-100">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Service Description */}
                <div className="flex-1 mb-6">
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-4">
                    {service.shortDescription}
                  </p>
                  
                  {/* Key Features Preview */}
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                    <div className="text-sm text-cyan-600 font-medium">
                      +{service.features.length - 3} more features...
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedService(service)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2 text-sm group/btn"
                  >
                    <Eye size={16} />
                    <span>View Details</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimation animation="fade-in-up" delay={1000}>
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Property?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join <span className="font-bold text-cyan-300">500+ satisfied customers</span> who trust 
              our expertise for their waterproofing, flooring, and coating needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center group"
              >
                View All Services
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+919916290799" 
                className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                <Phone size={18} className="mr-2" />
                Call: +91 9916290799
              </a>
            </div>
          </div>
        </ScrollAnimation>

        {/* Service Detail Modal */}
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      </div>

      <style jsx>{`
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
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Services