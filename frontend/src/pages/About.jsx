import React, { useState, useEffect } from 'react'
import { Shield, Award, Users, CheckCircle, Star, MapPin, Phone, Mail, Clock, ChevronRight, Eye, Target, Heart } from 'lucide-react'

const About = () => {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const values = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We use only the highest quality materials and follow industry best practices to ensure long-lasting results.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      delay: '0s'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Our certified professionals have years of experience in waterproofing and construction.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      delay: '0.1s'
    },
    {
      icon: CheckCircle,
      title: 'Cx Satisfaction',
      description: 'We prioritize customer satisfaction and provide comprehensive support throughout the project.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      delay: '0.2s'
    },
    {
      icon: Star,
      title: 'Innovation',
      description: 'We stay updated with the latest waterproofing technologies and techniques.',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      delay: '0.3s'
    }
  ]

  const achievements = [
    { number: '30+', label: 'Years Experience', color: 'text-blue-600' },
    { number: '1000+', label: 'Projects Completed', color: 'text-green-600' },
    { number: '50+', label: 'Expert Team', color: 'text-purple-600' },
    { number: '99%', label: 'Client Satisfaction', color: 'text-amber-600' }
  ]

  const founderDetails = [
    { icon: CheckCircle, text: 'Over 25 years of expertise in waterproofing, industrial flooring, soil stabilization, and structural rehabilitation' },
    { icon: Award, text: 'Founder & President – Association of Waterproofing Contractors' },
    { icon: Star, text: 'Recognized for innovative solutions in civil engineering and waterproofing' },
    { icon: Users, text: 'Successfully led projects for major industrial, commercial, and residential clients' },
    { icon: Shield, text: 'Known for promoting quality standards and professional training in the waterproofing industry' }
  ]

  const memberships = [
    { name: 'Indian Concrete Institute', color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { name: 'INSTRUCT (Institute for Research, Development and Training)', color: 'bg-gradient-to-r from-purple-500 to-purple-600' },
    { name: 'KASSIA (Karnataka Small Scale Industries Association)', color: 'bg-gradient-to-r from-green-500 to-green-600' }
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
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
            <h1 className="text-7xl md:text-8xl font-black text-white mb-8 leading-tight">
              About
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                Sanjana Enterprises
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              With over 30 years of proven expertise, we are recognized as Karnataka's trusted leader 
              in delivering comprehensive waterproofing and flooring solutions.
            </p>
            <div className="flex justify-center gap-8 animate-fade-in-up" style={{animationDelay: '1s'}}>
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-4xl font-black ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                    {achievement.number}
                  </div>
                  <div className="text-gray-400 font-medium">{achievement.label}</div>
                </div>
              ))}
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

      {/* Company Story with Glassmorphism */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Eye size={16} />
                Our Story
              </div>
              <h2 className="text-5xl font-black text-gray-900 mb-8 leading-tight">
                Building Trust Through
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="hover:text-gray-800 transition-colors duration-300">
                  Founded with a vision to deliver superior waterproofing and flooring solutions, 
                  Sanjana Enterprises has grown into Karnataka's most trusted name in the industry.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  We understand that every project presents unique challenges — from preventing water 
                  ingress to designing flooring systems built to withstand heavy usage. Our solutions 
                  are reliable, durable, and tailored to meet specific requirements.
                </p>
                <p className="hover:text-gray-800 transition-colors duration-300">
                  Our services safeguard and enhance structures across diverse applications, ensuring 
                  long-lasting protection and performance with the highest standards of quality.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-8 shadow-lg">
                      <Shield size={48} className="text-white" />
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-6">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      To provide comprehensive waterproofing and flooring solutions that protect, 
                      enhance, and add value to structures through innovation, quality, and professional excellence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section with Interactive Cards */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart size={16} />
              Our Values
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
              What Drives Us to
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Deliver Excellence
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group cursor-pointer animate-fade-in-up hover:transform hover:-translate-y-2 transition-all duration-500"
                style={{animationDelay: value.delay}}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/30 rounded-2xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <value.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section with Advanced Layout */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Target size={16} />
              Leadership
            </div>
            <h2 className="text-5xl font-black text-white mb-6 leading-tight">
              Meet Our
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Visionary Leader
              </span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-green-500/30 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                      <div className="w-44 h-44 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg font-bold">CB</span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-white mb-2">Mr. Chandrappa B R</h3>
                    <p className="text-blue-400 font-semibold mb-4 text-xl">Founder & Managing Director</p>
                    <p className="text-gray-300 leading-relaxed">
                      Qualified Civil Engineering Applications, trained in Germany at TPH Bausysteme GmbH
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <h3 className="text-3xl font-black text-white mb-8">Expertise & Achievements</h3>
              <div className="space-y-6">
                {founderDetails.map((detail, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <detail.icon size={16} className="text-white" />
                    </div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                      {detail.text}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h4 className="text-2xl font-bold text-white mb-6">Professional Memberships</h4>
                <div className="space-y-4">
                  {memberships.map((membership, index) => (
                    <div 
                      key={index} 
                      className="group cursor-pointer"
                    >
                      <div className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className={`w-3 h-3 ${membership.color} rounded-full group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                          {membership.name}
                        </span>
                        <ChevronRight size={16} className="text-gray-500 group-hover:text-white ml-auto transition-colors duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default About