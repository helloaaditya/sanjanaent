import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Clock, Star, ChevronDown, ArrowRight } from 'lucide-react'
import { smoothScrollToWithEasing, throttle } from '../utils/smoothScroll'
import logoImage from '../assets/sanjana-enterprises.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  // Initialize mobile state properly
  useEffect(() => {
    const checkIsMobile = () => window.innerWidth < 768
    setIsMobile(checkIsMobile())
    
    const handleResize = () => setIsMobile(checkIsMobile())
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      
      // Only show/hide top bar on desktop
      if (!isMobile) {
        const shouldShowTopBar = scrollY < 100
        setShowTopBar(shouldShowTopBar)
        
        // Update body class for padding adjustment
        if (shouldShowTopBar) {
          document.body.classList.remove('top-bar-hidden')
        } else {
          document.body.classList.add('top-bar-hidden')
        }
      }
    }, 16) // ~60fps
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.body.classList.remove('top-bar-hidden')
    }
  }, [isMobile])

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

  const topBarHeight = 56

  return (
    <>
      {/* Premium Top Bar - Desktop Only */}
      <div className={`fixed top-0 left-0 w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-3.5 px-4 hidden md:block relative overflow-hidden transition-all duration-700 ease-in-out z-50 ${
        showTopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-shimmer"></div>
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
        className={`fixed left-0 w-full z-40 transition-all duration-500 ease-out ${
          isScrolled || !showTopBar || isMobile
            ? 'bg-white/98 backdrop-blur-xl shadow-lg border-b border-blue-100' 
            : 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100'
        }`}
        style={{
          top: isMobile ? '0px' : (showTopBar ? `${topBarHeight}px` : '0px'),
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
            {/* Logo - Left Side */}
            <Link 
              to="/" 
              className="flex-shrink-0 group relative z-50" 
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="h-12 sm:h-14 md:h-16 lg:h-20 transition-all duration-300 group-hover:scale-105">
                <img 
                  src={logoImage} 
                  alt="Sanjana Enterprises Logo" 
                  className="w-full h-full object-contain drop-shadow-lg"
                  style={{ maxWidth: 'none' }}
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
                className="lg:hidden relative p-2.5 sm:p-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group z-50"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6 flex items-center justify-center">
                  {isMenuOpen ? (
                    <X size={20} className="transition-all duration-300 rotate-0" />
                  ) : (
                    <Menu size={20} className="transition-all duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-t border-gray-200/50 shadow-2xl transition-all duration-500 ease-out overflow-hidden ${
          isMenuOpen ? 'max-h-[400px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
            <nav className="flex flex-col space-y-1 sm:space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`nav-button relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold text-left transition-all duration-300 group overflow-hidden ${
                    isActivePage(item)
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                      : 'text-gray-700 hover:text-white bg-gray-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:scale-[1.02]'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(-20px)',
                    opacity: isMenuOpen ? 1 : 0,
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                >
                  <span className="relative z-10 flex items-center justify-between">
                    <span className="text-base sm:text-lg">{item.name}</span>
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

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
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

        /* Prevent body scroll when menu is open on mobile */
        body.menu-open {
          overflow: hidden;
        }

        /* iOS specific fixes */
        @supports (-webkit-touch-callout: none) {
          .backdrop-blur-xl {
            -webkit-backdrop-filter: blur(20px) saturate(180%);
            backdrop-filter: blur(20px) saturate(180%);
          }
          
          .backdrop-blur-lg {
            -webkit-backdrop-filter: blur(16px) saturate(160%);
            backdrop-filter: blur(16px) saturate(160%);
          }
        }

        /* Fix for very small screens */
        @media (max-width: 320px) {
          .max-w-7xl {
            padding-left: 12px;
            padding-right: 12px;
          }
        }
      `}</style>
    </>
  )
}

export default Header