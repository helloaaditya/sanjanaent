import React from 'react'
import { Target, ArrowRight, Phone } from 'lucide-react'
import ScrollAnimation from './ScrollAnimation'

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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Your Trusted Partner in
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent py-2">
                Waterproofing & Flooring Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With <span className="font-bold text-cyan-600">30+ years of expertise</span>, innovative solutions, 
              and a commitment to delivering exceptional results, Sanjana Enterprises has become Bangalore's 
              <span className="font-bold text-blue-600"> most trusted waterproofing & flooring company</span>.
            </p>
          </div>
        </ScrollAnimation>

        {/* Partners Marquee - Clean Logo Display */}
        <div className="mt-12">
          {/* Helper to resolve src/assets/ptlogo images */}
          {(() => {
            // Load all images from src/assets/ptlogo (png, jpg, svg, webp)
            const modules = import.meta.glob('../assets/ptlogo/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' })
            const logos = Object.values(modules)
            const track = (reverse = false) => (
              <div className={`overflow-hidden relative`}> 
                <div className={`flex items-center gap-8 py-8 whitespace-nowrap ${reverse ? 'animate-marquee-rtl' : 'animate-marquee-ltr'}`}>
                  {[...logos, ...logos].map((src, idx) => (
                    <div key={`${reverse ? 'r' : 'l'}-${idx}`} className="flex items-center justify-center flex-shrink-0">
                      <img
                        src={src}
                        alt="Partner logo"
                        className="max-h-28 max-w-[180px] w-auto h-auto object-contain transition-opacity duration-300"
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )
            return (
              <ScrollAnimation animation="fade-in-up" delay={100}>{track(false)}</ScrollAnimation>
            )
          })()}
        </div>
        
        {/* CTA Row */}
        <ScrollAnimation animation="fade-in-up" delay={400}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group">
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

      {/* Marquee animations */}
      <style>{`
        @keyframes marquee-ltr {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rtl {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-ltr { animation: marquee-ltr 25s linear infinite; }
        .animate-marquee-rtl { animation: marquee-rtl 25s linear infinite; }
        @media (max-width: 768px) {
          .animate-marquee-ltr, .animate-marquee-rtl { animation-duration: 15s; }
        }
      `}</style>
    </section>
  )
}

export default About