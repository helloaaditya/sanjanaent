import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Clock, Star, ArrowRight } from 'lucide-react'
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
    const checkIsMobile = () => {
      if (typeof window !== 'undefined') {
        return window.innerWidth < 768
      }
      return false
    }
    
    setIsMobile(checkIsMobile())
    
    const handleResize = () => {
      setIsMobile(checkIsMobile())
    }
    
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
      }
    }, 16)
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

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
    <div className="relative w-full">
      {/* Premium Top Bar - Desktop Only */}
      {!isMobile && (
        <div className={`fixed top-0 left-0 w-full bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-3.5 px-4 relative overflow-hidden transition-all duration-700 ease-in-out ${
          showTopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`} style={{ zIndex: 1000 }}>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm relative z-10">
            {/* Left side - Contact info */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer">
                <div className="p-1.5 rounded-full bg-blue-600/20 group-hover:bg-blue-600 transition-all duration-300">
                  <Phone size={12} />
                </div>
                <span className="font-medium tracking-wide">+91 9916290799</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer">
                <div className="p-1.5 rounded-full bg-green-600/20 group-hover:bg-green-600 transition-all duration-300">
                  <Mail size={12} />
                </div>
                <span className="font-medium tracking-wide">sanjana.waterproofing@gmail.com</span>
              </div>
            </div>
            
            {/* Right side - Location, Hours, Rating */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group">
                <div className="p-1.5 rounded-full bg-red-600/20 group-hover:bg-red-600 transition-all duration-300">
                  <MapPin size={12} />
                </div>
                <span className="font-medium tracking-wide">Bangalore, Karnataka</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 group">
                <div className="p-1.5 rounded-full bg-orange-600/20">
                  <Clock size={12} />
                </div>
                <span className="font-medium">Mon-Sat: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-all duration-300 group cursor-pointer">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-current" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Header */}
      <header 
        className="fixed left-0 w-full bg-white shadow-lg border-b border-gray-200"
        style={{
          top: isMobile ? '0px' : (showTopBar ? `${topBarHeight}px` : '0px'),
          zIndex: 999,
          minHeight: '64px'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center" style={{ minHeight: '64px' }}>
            {/* Logo - Left Side */}
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center" 
              onClick={() => setIsMenuOpen(false)}
              style={{ zIndex: 1001 }}
            >
              <div className="h-12 w-auto">
                <img 
                  src={logoImage} 
                  alt="Sanjana Enterprises Logo" 
                  className="h-full w-auto object-contain"
                  style={{ 
                    maxHeight: '48px',
                    width: 'auto',
                    display: 'block'
                  }}
                  onError={(e) => {
                    console.error('Logo failed to load:', e)
                    e.target.style.display = 'none'
                  }}
                  onLoad={() => {
                    console.log('Logo loaded successfully')
                  }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item)}
                  className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    isActivePage(item)
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-white hover:bg-blue-600'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button - Only show on mobile/tablet */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex lg:hidden p-2 rounded-lg bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-200 items-center justify-center"
              style={{ 
                zIndex: 1001,
                minWidth: '44px',
                minHeight: '44px'
              }}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="lg:hidden bg-white border-t border-gray-200 shadow-2xl"
            style={{ zIndex: 1000 }}
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item)}
                    className={`px-6 py-4 rounded-xl font-semibold text-left transition-all duration-300 ${
                      isActivePage(item)
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:text-white bg-gray-50 hover:bg-blue-600'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      <span className="text-lg">{item.name}</span>
                      <ArrowRight size={16} />
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
            style={{ zIndex: 998 }}
          />
        )}
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div 
        className="w-full"
        style={{ 
          height: isMobile ? '64px' : (showTopBar ? `${topBarHeight + 64}px` : '64px')
        }}
      />

      {/* Inline Styles for better iOS compatibility */}
      <style jsx>{`
        /* Force hardware acceleration on iOS */
        header {
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        /* Ensure proper stacking on iOS */
        .fixed {
          position: -webkit-sticky;
          position: fixed;
        }

        /* iOS specific button fixes */
        button {
          -webkit-appearance: none;
          -webkit-tap-highlight-color: transparent;
        }

        /* Prevent zoom on iOS */
        input, select, textarea, button {
          font-size: 16px;
        }

        @media screen and (max-width: 767px) {
          input, select, textarea, button {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  )
}

export default Header