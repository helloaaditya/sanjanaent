import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Clock, Star, ChevronDown } from 'lucide-react'
import { smoothScrollToWithEasing, throttle } from '../utils/smoothScroll'
import logoImage from '../assets/sanjana-enterprises.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      const shouldShowTopBar = scrollY < 100
      setShowTopBar(shouldShowTopBar)
      
      // Update body class for padding adjustment
      if (shouldShowTopBar) {
        document.body.classList.remove('top-bar-hidden')
      } else {
        document.body.classList.add('top-bar-hidden')
      }
    }, 16) // ~60fps
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('top-bar-hidden')
    }
  }, [])

  const handleNavigation = (item) => {
    // Use React Router's navigate for instant, smooth navigation
    navigate(item.path)
    setIsMenuOpen(false)
  }

  const isActivePage = (item) => {
    return location.pathname === item.path
  }

  const navItems = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'About', path: '/about', id: 'about' },
    { name: 'Services', path: '/services', id: 'services' },
    { name: 'Gallary', path: '/gallery', id: 'gallery'},
    { name: 'Contact', path: '/contact', id: 'contact' }
  ]

  // Calculate the height of top bar for smooth transitions
  const topBarHeight = 48 // 3rem (py-3) = 48px

  return (
    <>
      {/* Top Bar - Premium Gradient */}
      <div className={`fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 py-4 px-4 hidden md:block relative overflow-hidden transition-all duration-800 ease-in-out z-50 ${
        showTopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        <div className="container-max flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-300 group">
              <Phone size={14} className="group-hover:animate-wiggle" />
              <span className="font-medium">+91 9916290799</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-300 group">
              <Mail size={14} className="group-hover:animate-bounce" />
              <span className="font-medium">sanjana.waterproofing@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-300 group">
              <MapPin size={14} className="group-hover:animate-pulse" />
              <span className="font-medium">Bangalore, Karnataka</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white/80">
              <Clock size={14} className="animate-pulse" />
              <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-300 hover:text-yellow-200 transition-colors duration-300 group">
              <Star size={14} className="fill-current group-hover:animate-spin" />
              <span className="font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Premium Design */}
      <header 
        className="fixed left-0 w-full z-40 transition-all duration-300 ease-in-out"
        style={{
          top: showTopBar ? `${topBarHeight}px` : '0px',
          backgroundColor: showTopBar 
            ? 'rgba(255, 255, 255, 0.9)' 
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          boxShadow: showTopBar 
            ? 'none' 
            : '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.1)',
          borderBottom: showTopBar 
            ? 'none' 
            : '1px solid rgba(59, 130, 246, 0.2)'
        }}
      >
        <div className="container-max">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="group" onClick={() => setIsMenuOpen(false)}>
              <div className="w-250 h-16">
                <img 
                  src={logoImage} 
                  alt="Sanjana Enterprises Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`nav-button relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group overflow-hidden ${
                    isActivePage(item)
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-700 hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600'
                  }`}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{item.name}</span>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isActivePage(item)
                        ? 'bg-white' 
                        : 'bg-blue-600 scale-0 group-hover:scale-100'
                    }`}></div>
                  </span>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <Link 
                to="/contact" 
                className="nav-button hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group relative overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Get Quote</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </span>
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                <div className="relative">
                  {isMenuOpen ? <X size={20} className="group-hover:rotate-90 transition-transform duration-300" /> : <Menu size={20} className="group-hover:scale-110 transition-transform duration-300" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gradient-to-br from-white via-blue-50/50 to-white border-t border-blue-200/50 shadow-2xl backdrop-blur-xl">
            <div className="container-max py-6">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`nav-button relative px-6 py-4 rounded-xl font-semibold transition-all duration-300 group overflow-hidden ${
                      isActivePage(item)
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                        : 'text-gray-700 hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      <span>{item.name}</span>
                      <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        isActivePage(item)
                          ? 'bg-white' 
                          : 'bg-blue-600 scale-0 group-hover:scale-100'
                      }`}></div>
                    </span>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </button>
                ))}
                <Link 
                  to="/contact" 
                  className="nav-button mx-0 mt-4 px-6 py-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-700 hover:via-cyan-700 hover:to-blue-800 text-white font-semibold rounded-xl text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 group relative overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <span>Get Free Quote</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </span>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header