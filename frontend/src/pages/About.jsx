import React from 'react'
import { Shield, Award, Users, CheckCircle, Star, Target, Phone, ArrowRight } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'
import founderImage from '../assets/founder.jpg'

const About = () => {
  const achievements = [
    { number: '30+', label: 'Years Experience', icon: Shield },
    { number: '100000+', label: 'Happy Customers', icon: Award },
    { number: '100+', label: 'Services Offered', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
  ]

  const services = [
    {
      title: 'Waterproofing Solutions',
      description: 'Advanced membrane systems, liquid coatings, and injection treatments for complete water ingress protection.',
      features: ['APP/SBS Membranes', 'Liquid Coatings', 'Injection Systems']
    },
    {
      title: 'Industrial Flooring',
      description: 'High-performance flooring systems designed for heavy-duty industrial and commercial applications.',
      features: ['Epoxy Flooring', 'PU Coatings', 'Anti-Static Solutions']
    },
    {
      title: 'Structural Repairs',
      description: 'Comprehensive rehabilitation services to restore and strengthen concrete structures.',
      features: ['Crack Repairs', 'Carbon Fiber', 'Strengthening Systems']
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Premium materials and proven methodologies ensure long-lasting results.',
    },
    {
      icon: CheckCircle,
      title: 'Professional Excellence',
      description: 'Certified experts delivering projects on time and within budget.',
    },
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Latest technologies and techniques for superior performance.',
    }
  ]

  return (
    <section id="about" className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-28">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" delay={0}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                <Target size={16} />
                About Sanjana Enterprises
              </div>
              <h1 className="text-5xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Karnataka's Premier
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text py-2 text-transparent">
                  Waterproofing & Flooring Specialists
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                With over three decades of proven expertise, we deliver comprehensive waterproofing 
                and flooring solutions that protect and enhance structures across Karnataka.
              </p>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center group">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                      <achievement.icon size={24} className="text-cyan-400" />
                    </div>
                    <div className="text-3xl lg:text-4xl font-black text-white mb-2">{achievement.number}</div>
                    <div className="text-gray-400 font-medium">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <CheckCircle size={16} />
                  Our Expertise
                </div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                  Protecting Structures with
                  <span className="block text-blue-600">Proven Solutions</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Sanjana Enterprises combines decades of industry experience with cutting-edge technology 
                  to deliver waterproofing and flooring solutions that stand the test of time. Our commitment 
                  to quality and innovation has made us the trusted choice for projects across residential, 
                  commercial, and industrial sectors.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center group">
                    Get Free Consultation
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="tel:+919916290799" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <Phone size={20} className="mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="grid gap-6">
                {services.map((service, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" delay={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star size={16} />
                Our Values
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                What Sets Us Apart
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence drives everything we do, from material selection to project completion.
              </p>
            </div>
          </ScrollAnimation>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <value.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollAnimation animation="fade-in-up" delay={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award size={16} />
                Leadership
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Visionary Leadership
              </h2>
            </div>
          </ScrollAnimation>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <div className="text-center lg:text-left">
                <div className="inline-block relative mb-8">
                  <div className="w-52 rounded-2xl overflow-hidden shadow-xl mx-auto lg:mx-0">
                    <img src={founderImage} alt="Mr. Chandrappa B R - Founder" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Award size={24} className="text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-2">Mr. Chandrappa B R</h3>
                <p className="text-blue-600 font-semibold mb-4 text-lg">Founder & Managing Director</p>
                <p className="text-gray-600 leading-relaxed">
                  Civil Engineering Applications Specialist, trained in Germany at TPH Bausysteme GmbH. 
                  President of the Association of Waterproofing Contractors.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Professional Expertise</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>25+ years in waterproofing and structural rehabilitation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Founder & President – Association of Waterproofing Contractors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>International training in advanced waterproofing systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Led 1000+ successful projects across Karnataka</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Professional Memberships</h4>
                  <div className="space-y-2">
                    {[
                      'Indian Concrete Institute',
                      'INSTRUCT (Institute for Research, Development and Training)',
                      'KASSIA (Karnataka Small Scale Industries Association)'
                    ].map((membership, index) => (
                      <div key={index} className="flex items-center gap-3 text-blue-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="font-medium">{membership}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollAnimation animation="fade-in-up" delay={0}>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
              Ready to Protect Your Investment?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Get expert consultation and premium waterproofing solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group">
                Start Your Project
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:+919916290799" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                <Phone size={20} className="mr-2" />
                Call Expert Now
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default About