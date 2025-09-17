import React from 'react'
import { Shield, Award, Users, Clock, CheckCircle, Target, Star, ArrowRight, Phone, MapPin, Mail } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'
import clientsImage from '../assets/clients.jpg'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white ">
      <div className="container-max">
        {/* Header */}
        <ScrollAnimation animation="fade-in-up" delay={0}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Target size={18} />
              <span>About Sanjana Enterprises</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Your Trusted Partner in
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Waterproofing Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With <span className="font-bold text-cyan-600">30+ years of expertise</span>, innovative solutions, 
              and a commitment to delivering exceptional results, Sanjana Enterprises has become Bangalore's 
              <span className="font-bold text-blue-600"> most trusted waterproofing company</span>.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <ScrollAnimation animation="fade-in-left" delay={200}>
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">Why Choose Us</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Choosing the right partner for waterproofing and flooring is critical to the strength, safety,
                  and longevity of your structure. At Sanjana Enterprises, we bring unmatched expertise and
                  professionalism to every project.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4">
                {[
                  '30+ Years of Experience — proven expertise across residential, commercial, and industrial projects.',
                  'Based in Bangalore, Serving All of Karnataka — successful projects delivered across the state.',
                  'Professional & Skilled Team — precision, quality workmanship, and on-time delivery.',
                  'Advanced Technology — modern leakage detection and industry-leading application techniques.',
                  'Premium Quality Materials — APP, EPDM, SBS membranes and high‑performance coatings.',
                  'Customized Solutions — tailored to your requirements, budget, and timeline.',
                  'Commitment to Durability — long-term performance that protects property value.'
                ].map((point, index) => (
                  <ScrollAnimation key={index} animation="fade-in-left" delay={400 + index * 100}>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">{point}</span>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                We don’t just complete projects — we build trust, deliver reliability, and provide solutions that
                stand the test of time.
              </p>

              <ScrollAnimation animation="fade-in-up" delay={800}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group">
                    Get Free Consultation
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="tel:+919916290799" className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                    <Phone size={20} className="mr-2" />
                    Call Now
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>

          {/* Right Side Visual */}
          <ScrollAnimation animation="fade-in-right" delay={400}>
            <div className="group relative h-100 md:h-[480px] rounded-[28px] overflow-hidden shadow-2xl border border-gray-100 bg-white">
              {/* Decorative ring */}
              <div className="pointer-events-none absolute inset-0 rounded-[28px] border-2 border-dashed border-blue-200/60 scale-95 group-hover:scale-100 transition-transform duration-500" />

              {/* Soft gradient blobs */}
              <div className="absolute -top-10 -left-10 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />

              {/* Image */}
              <img 
                src={clientsImage}
                alt="About Sanjana Enterprises - Waterproofing experts at work"
                className="relative z-10 w-full h-full transform group-hover:scale-[1.04] transition-transform duration-700"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default About
