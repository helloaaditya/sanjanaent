import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Clock, Star, ChevronDown, ArrowRight } from 'lucide-react'
import { smoothScrollToWithEasing, throttle } from '../utils/smoothScroll'
import logoImage from '../assets/sanjana-enterprises.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false)
  const [isIOS, setIsIOS] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // Detect iOS devices (iPhone, iPad, iPod)
    try {
      const ua = navigator.userAgent || navigator.vendor || ''
      setIsIOS(/iPad|iPhone|iPod/.test(ua))
    } catch {}

    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
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
      window.removeEventListener('resize', handleResize)
      document.body.classList.remove('top-bar-hidden')
    }
  }, [])

  const handleNavigation = (item) => {
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
    { name: 'Gallery', path: '/gallery', id: 'gallery'},
    { name: 'Contact', path: '/contact', id: 'contact' }
  ]

  const topBarHeight = 56 // Increased height for better spacing

  return (
    <>
      {/* Premium Top Bar */}
      <div className={`fixed top-0 left-0 w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-3.5 px-4 hidden md:block relative overflow-hidden transition-all duration-700 ease-in-out z-50 ${
        showTopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-[shimmer_3s_linear_infinite]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm relative z-10">
          {/* Left side - Contact info */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer">
              <div className="p-1.5 rounded-full bg-blue-600/20 group-hover:bg-blue-600 transition-all duration-300">
                <Phone size={12} className="group-hover:animate-pulse" />
              </div>
              <span className="font-medium tracking-wide">+91 9916290799</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer">
              <div className="p-1.5 rounded-full bg-green-600/20 group-hover:bg-green-600 transition-all duration-300">
                <Mail size={12} className="group-hover:animate-bounce" />
              </div>
              <span className="font-medium tracking-wide">sanjana.waterproofing@gmail.com</span>
            </div>
          </div>
          
          {/* Right side - Location, Hours, Rating */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group">
              <div className="p-1.5 rounded-full bg-red-600/20 group-hover:bg-red-600 transition-all duration-300">
                <MapPin size={12} className="group-hover:animate-pulse" />
              </div>
              <span className="font-medium tracking-wide">Bangalore, Karnataka</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 group">
              <div className="p-1.5 rounded-full bg-orange-600/20">
                <Clock size={12} className="animate-pulse" />
              </div>
              <span className="font-medium">Mon-Sat: 9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-all duration-300 group cursor-pointer">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-current group-hover:animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <span className="font-semibold">4.9/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`${(isIOS && isMobile) ? 'relative' : 'fixed'} left-0 w-full z-40 transition-all duration-500 ease-out`}
        style={{
          top: (isIOS && isMobile) ? undefined : (isMobile ? 'env(safe-area-inset-top, 0px)' : (showTopBar ? `${topBarHeight}px` : 'env(safe-area-inset-top, 0px)')),
          backgroundColor: isScrolled || !showTopBar 
            ? 'rgba(255, 255, 255, 0.98)' 
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: (isIOS && isMobile) ? undefined : 'blur(20px)',
          WebkitBackdropFilter: (isIOS && isMobile) ? undefined : 'blur(20px)',
          boxShadow: isScrolled || !showTopBar
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.1)'
            : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          borderBottom: isScrolled || !showTopBar 
            ? '1px solid rgba(59, 130, 246, 0.1)' 
            : '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo - Left Side */}
            <Link to="/" className="flex-shrink-0 group" onClick={() => setIsMenuOpen(false)}>
              <div className="h-20 transition-all duration-300 group-hover:scale-105">
                <img 
                  src={logoImage} 
                  alt="Sanjana Enterprises Logo" 
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </Link>

            {/* Navigation & CTA - Right Side */}
            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`nav-button relative px-5 py-2.5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 group overflow-hidden ${
                      isActivePage(item)
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 scale-105'
                        : 'text-gray-700 hover:text-white bg-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:scale-105'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>{item.name}</span>
                      {isActivePage(item) && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
                      )}
                    </span>
                    
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </button>
                ))}
              </nav>



              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden relative p-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className={`absolute transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-1'
                  }`}>
                    <div className={`w-5 h-0.5 bg-white rounded-full ${isMenuOpen ? 'opacity-100' : 'opacity-100'}`}></div>
                  </div>
                  <div className={`absolute w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></div>
                  <div className={`absolute transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-1'
                  }`}>
                    <div className={`w-5 h-0.5 bg-white rounded-full ${isMenuOpen ? 'opacity-100' : 'opacity-100'}`}></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl transition-all duration-500 ease-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`nav-button relative px-6 py-4 rounded-xl font-semibold text-left transition-all duration-300 group overflow-hidden ${
                    isActivePage(item)
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                      : 'text-gray-700 hover:text-white bg-gray-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:scale-[1.02]'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                    opacity: isMenuOpen ? 1 : 0
                  }}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    <span>{item.name}</span>
                    <ArrowRight size={16} className={`transition-all duration-300 ${
                      isActivePage(item) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`} />
                  </span>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </button>
              ))}

            </nav>
          </div>
        </div>
      </header>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .nav-button {
          position: relative;
        }
        
        .nav-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }
        
        .nav-button:hover::before {
          transform: translateX(100%);
        }
      `}</style>
    </>
  )
}

export default Header