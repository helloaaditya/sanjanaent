import React from 'react'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react'
import logoImage from '../assets/sanjana-enterprises.png'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }


  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container-max pt-16 pb-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-16 h-16 rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src={logoImage} 
                    alt="Sanjana Enterprises Logo" 
                    className="w-full h-full object-contain bg-white p-2"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sanjana Enterprises</h3>
                  <p className="text-gray-400 text-sm">Waterproofing Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                With 30+ years of experience, we are Bangalore's trusted waterproofing specialists, 
                providing reliable solutions for residential and commercial properties.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">info@sanjanawaterproofing.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-gray-300">Bangalore, Karnataka</span>
              </div>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm mb-2">Follow us on social media:</p>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61580615135804" 
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                  <a 
                    href="https://www.instagram.com/sanjana.enterprises/" 
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/sanjana-enterprises-975918383/" 
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h5 className="font-semibold mb-2">Emergency Service</h5>
                <p className="text-gray-300 text-sm mb-3">24/7 Emergency Support Available</p>
                <a 
                  href="tel:+919876543210" 
                  className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded transition-colors inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Sanjana Enterprises. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
