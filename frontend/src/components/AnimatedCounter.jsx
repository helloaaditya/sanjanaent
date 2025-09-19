import React, { useState, useEffect } from 'react'
import { Users, Shield, Award, Clock, CheckCircle, Star, FileCheck } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(end * easeOutCubic))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById(`counter-${end}`)
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [end])

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
    }
    return num.toString()
  }

  return (
    <div id={`counter-${end}`} className="text-4xl lg:text-5xl font-bold">
      <span className="text-gray-900">
        {prefix}{end >= 1000 ? formatNumber(count) : count}{suffix}
      </span>
    </div>
  )
}

const StatsSection = () => {
  const { ref: statsRef, hasAnimated: statsAnimated } = useScrollAnimation({
    threshold: 0.2,
    animationClass: 'animate-fade-in-up'
  })

  const stats = [
    { 
      icon: Users, 
      label: 'Happy Customers', 
      value: 100000, 
      suffix: '+',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
      description: 'Satisfied clients across India'
    },
    { 
      icon: Shield, 
      label: 'Years of Experience', 
      value: 30, 
      suffix: '+',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      iconColor: 'text-green-600',
      description: 'Decade of waterproofing expertise'
    },
    { 
      icon: Award, 
      label: 'Services Offered', 
      value: 100, 
      suffix: '+',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      iconColor: 'text-purple-600',
      description: 'Comprehensive solutions available'
    },
    { 
      icon: Clock, 
      label: 'Response Timings', 
      value: 1, 
      suffix: 'hour',
      prefix: '<',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      iconColor: 'text-orange-600',
      description: 'Quick response guarantee'
    }
  ]

  return (
    <section className="relative py-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 px-6 py-3 rounded-full text-sm font-medium border border-blue-200 shadow-lg mb-6">
            <Star size={16} className="fill-current animate-pulse" />
            <span className="font-semibold">Trusted by Thousands</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Over a decade of excellence in waterproofing & Flooring solutions with thousands of satisfied customers and honored with National & State Awards          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-32" ref={statsRef}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group transform transition-all duration-700 hover:scale-105 ${
                statsAnimated ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animationDelay: `${index * 200}ms`,
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Card Background */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-blue-200">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Animated background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-br ${stat.bgColor} rounded-full blur-2xl`}></div>
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.bgColor} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 relative z-10`}>
                  <stat.icon 
                    size={36} 
                    className={`${stat.iconColor} transition-all duration-500 group-hover:scale-110`} 
                  />
                  {/* Icon glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}></div>
                </div>

                {/* Counter */}
                <div className="mb-3 relative z-10">
                  <AnimatedCounter
                    end={stat.value}
                    duration={2000 + index * 100}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>

                {/* Label */}
                <div className="mb-2 relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {stat.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                  {stat.description}
                </p>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color} w-0 group-hover:w-full transition-all duration-500 rounded-full`}></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-3xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-cyan-200/20 rounded-full animate-float opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-purple-200/20 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>
    </section>
  )
}

export default StatsSection