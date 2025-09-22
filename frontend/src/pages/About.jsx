import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Shield, Award, Users, CheckCircle, Star, Target, Phone, ArrowRight, MapPin, Cpu, Layers, Wrench } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'
import founderImage from '../assets/founder.jpg'
import isoImage from '../assets/ISO.jpg'

const About = () => {
  const achievements = [
    { number: '30+', label: 'Years Experience', icon: Shield },
    { number: '100000+', label: 'Happy Customers', icon: Award },
    { number: '100+', label: 'Services Offered', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Star }
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
    <>
      <Helmet>
        <title>About Sanjana Enterprises | Waterproofing & Flooring Experts in Karnataka</title>
        <meta name="description" content="Sanjana Enterprises: 30+ years waterproofing and industrial flooring expertise in Bangalore and Karnataka. ISO 9001 certified, professional team, modern technology." />
        <meta name="keywords" content="about waterproofing company bangalore, best waterproofing in bangalore, experienced waterproofing contractor bangalore, iso certified waterproofing bangalore, industrial flooring experts bangalore, epoxy flooring experts bangalore, pu flooring experts bangalore, polyurethane flooring experts bangalore, injection grouting experts bangalore, leakage detection experts bangalore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/about" />
        <meta property="og:title" content="About Sanjana Enterprises" />
        <meta property="og:description" content="Premier waterproofing and flooring specialists in Karnataka with decades of experience." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section id="about" className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-28 sm:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimation animation="fade-in-up" delay={0}>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
                <Target size={16} />
                About Sanjana Enterprises
      </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white mb-6 sm:mb-8 leading-tight">
                Karnataka's Premier
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text py-2 text-transparent">
                  Waterproofing & Flooring Specialists
              </span>
            </h1>
              <p className="text-base sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12">
                With over three decades of proven expertise, we deliver comprehensive waterproofing 
                and flooring solutions that protect and enhance structures across Karnataka.
              </p>
              
              {/* Achievement Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
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

      {/* Why Choose Us */}
      <div className="py-8 sm:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimation animation="fade-in-up" delay={0}>
            <div className="text-center mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target size={16} />
                Why Choose Us
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
                Trusted Partner for Waterproofing & Flooring
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto">
                Choosing the right partner is critical to the strength, safety, and longevity of your structure. At Sanjana Enterprises, we bring unmatched expertise and professionalism to every project.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { title: '30+ Years of Experience', desc: 'Decades of proven expertise across residential, commercial, and industrial projects.', icon: Award },
              { title: 'Based in Bangalore, Serving All of Karnataka', desc: 'A strong presence with successful projects delivered across the state.', icon: MapPin },
              { title: 'Professional & Skilled Team', desc: 'Experienced specialists who ensure precision, quality workmanship, and on-time delivery.', icon: Users },
              { title: 'Advanced Technology', desc: 'Use of modern leakage detection equipment and industry-leading application techniques.', icon: Cpu },
              { title: 'Premium Quality Materials', desc: 'Trusted systems such as APP, EPDM, SBS membranes, and high-performance coatings.', icon: Layers },
              { title: 'Customized Solutions', desc: 'Tailor-made services designed to meet your project’s unique requirements, budget, and timeline.', icon: Wrench },
              { title: 'Commitment to Durability', desc: 'Solutions built for long-term performance, protecting and enhancing your property’s value.', icon: Shield },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} animation="fade-in-up" delay={idx * 100}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <item.icon size={28} className="text-blue-600 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
              </div>

          <ScrollAnimation animation="fade-in-up" delay={700}>
            <div className="mt-10 bg-blue-50 rounded-2xl p-6 text-blue-900 text-center">
              <p className="font-semibold">At Sanjana Enterprises, we don’t just complete projects — we build trust, deliver reliability, and provide solutions that stand the test of time.</p>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      {/* Core Values */}
<div className="py-8 sm:py-8 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <ScrollAnimation animation="fade-in-up" delay={0}>
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Star size={16} />
          Our Values
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
          What Sets Us Apart
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Our commitment to excellence drives everything we do, from material selection to project completion.
        </p>
      </div>
    </ScrollAnimation>
   
    {/* Main Content: Values Left, ISO Right */}
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Side - Core Values */}
      <div>
        <div className="grid gap-2">
          {values.map((value, index) => (
            <ScrollAnimation key={index} animation="fade-in-up" delay={index * 100}>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                    <value.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {/* Right Side - ISO Certification */}
      <div className="flex gap-4 justify-center items-center">
        <ScrollAnimation animation="fade-in-up" delay={300}>
          <div className="text-center rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            <img 
              src={isoImage} 
              alt="ISO 9001:2015 Certified" 
              className="w-64 h-auto rounded-2xl shadow-lg mx-auto mb-4" 
            />
            </div>
        </ScrollAnimation>
      </div>
    </div>
  </div>
</div>

      {/* Leadership Section */}
      <div className="py-8 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollAnimation animation="fade-in-up" delay={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award size={16} />
              Leadership
            </div>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-6 leading-tight">
                Visionary Leadership
            </h2>
          </div>
          </ScrollAnimation>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Large founder image */}
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <div className="text-center lg:text-left">
                <div className="inline-block relative">
                  <div className="w-64 sm:w-80 lg:w-[28rem] rounded-2xl overflow-hidden shadow-2xl mx-auto lg:mr-auto">
                    <img src={founderImage} alt="Mr. Chandrappa B R - Founder" className="w-full h-full object-cover" />
                      </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Award size={24} className="text-white" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
            
            {/* Right: Founder details */}
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mr. Chandrappa B R</h3>
                  <p className="text-blue-600 font-semibold mb-4">Founder & Managing Director</p>
                  <p className="text-gray-600 leading-relaxed">
                    Civil Engineering Applications Specialist, trained in Germany at TPH Bausysteme GmbH.
                    </p>
                  </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">About our Founder</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Qualified in Civil Engineering Applications, trained in Germany at TPH Bausysteme GmbH</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Over 25 years of expertise in waterproofing, industrial flooring, soil stabilization, and structural rehabilitation</span>
                    </li>
                    
                    <li className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Successfully led projects for major industrial, commercial, and residential clients</span>
                    </li>
                  </ul>
              </div>
              
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-blue-900 mb-4">Member of</h4>
                  <div className="space-y-2">
                    {[
                      'Indian Concrete Institute',
                      'Founder & President – Association of Waterproofing Contractors',
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
    </>
  )
}

export default About