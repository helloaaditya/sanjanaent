import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Clock, Star, ArrowRight, ChevronDown } from 'lucide-react'
import { smoothScrollToWithEasing, throttle } from '../utils/smoothScroll'
import { reportCallConversion } from '../gtag'
import logoImage from '../assets/sanjana-enterprises.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(null)
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
    // Close mobile menu first
    setIsMenuOpen(false)
    setIsServicesDropdownOpen(false)
    setOpenSubMenu(null)
    
    // Small delay to allow menu close animation
    setTimeout(() => {
      navigate(item.path)
    }, 100)
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

  const serviceItems = [
    { 
      name: 'Epoxy Flooring', 
      path: '/epoxy-flooring',
      subItems: [
        { name: 'Epoxy flooring services in bangalore', path: '/epoxy-flooring-services-in-bangalore' },
        { name: 'Heavy duty epoxy flooring in bangalore', path: '/heavy-duty-epoxy-flooring-in-bangalore' },
        { name: 'Epoxy flooring for warehouses in bangalore', path: '/epoxy-flooring-for-warehouses-in-bangalore' },
        { name: 'Industrial epoxy screed flooring in bangalore', path: '/industrial-epoxy-screed-flooring-in-bangalore' },
        { name: 'Antiskid epoxy flooring in bangalore', path: '/antiskid-epoxy-flooring-in-bangalore' }
      ]
    },
    { name: 'PU Flooring', path: '/best-pu-flooring-services-in-bangalore' },
    { name: 'Water Leakage Detection', path: '/water-leakage-detection' },
    { name: 'Terrace Waterproofing', path: '/terrace-roof-waterproofing-in-bangalore' },
    { name: 'Basement Waterproofing', path: '/basement-waterproofing' },
    { name: 'Water Tanks Waterproofing', path: '/water-tanks-waterproofing' },
    { name: 'Repair Services', path: '/repair-section' },
    { name: 'ESD flooring installation in Bangalore', path: '/esd-flooring-installation-in-bangalore' },
    { name: 'Car parking flooring solutions in bangalore', path: '/car-parking-flooring-solutions-in-bangalore' },
    { name: 'Warehouse bay marking in bangalore', path: '/warehouse-bay-marking-in-bangalore' },
    { name: 'Anti corrosion coating services in bangalore', path: '/anti-corrosion-coating-services-in-bangalore' }
  ]

  const topBarHeight = 56

  const handlePhoneClick = () => {
    reportCallConversion()
    window.location.href = "tel:+919916290799"
  }

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
              <div 
                onClick={handlePhoneClick}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 group cursor-pointer"
              >
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
          zIndex: 2000,
          minHeight: '64px'
        }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center" style={{ minHeight: '64px' }}>
            {/* Logo - Left Side */}
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center" 
              onClick={() => {
                setIsMenuOpen(false)
                setIsServicesDropdownOpen(false)
              }}
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
                <div key={item.name} className="relative">
                  {item.name === 'Services' ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => {
                        setIsServicesDropdownOpen(true)
                      }}
                      onMouseLeave={(e) => {
                        // Don't close if moving to dropdown
                        const relatedTarget = e.relatedTarget
                        if (relatedTarget && e.currentTarget.contains(relatedTarget)) {
                          return
                        }
                        setIsServicesDropdownOpen(false)
                      }}
                    >
                      <button
                        onClick={() => handleNavigation(item)}
                        className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center ${
                          isActivePage(item)
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-700 hover:text-white hover:bg-blue-600'
                        }`}
                      >
                        {item.name}
                        <ChevronDown size={16} className="ml-1" />
                      </button>
                      
                      {/* Services Dropdown */}
                      {isServicesDropdownOpen && (
                        <div 
                          className="absolute top-full left-0 pt-1 w-72 sm:w-80"
                          style={{ zIndex: 9999 }}
                          onMouseEnter={() => setIsServicesDropdownOpen(true)}
                          onMouseLeave={(e) => {
                            const relatedTarget = e.relatedTarget
                            if (!relatedTarget || !e.currentTarget.contains(relatedTarget)) {
                              setIsServicesDropdownOpen(false)
                            }
                          }}
                        >
                          <div 
                            className="bg-white rounded-xl shadow-2xl border border-gray-200 py-2 max-h-[80vh] overflow-y-auto"
                            style={{
                              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                            }}
                          >
                          {serviceItems.map((service) => (
                            <div 
                              key={service.name} 
                              className="relative"
                              onMouseEnter={() => setIsServicesDropdownOpen(true)}
                            >
                              {service.subItems ? (
                                <>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      setOpenSubMenu(openSubMenu === service.name ? null : service.name)
                                    }}
                                    className="w-full text-left px-5 py-3 text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-200 font-medium flex items-center justify-between break-words"
                                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                                  >
                                    <span className="flex-1 pr-2 text-sm leading-snug">{service.name}</span>
                                    <ChevronDown 
                                      size={16} 
                                      className={`ml-2 flex-shrink-0 transition-transform duration-200 ${openSubMenu === service.name ? 'rotate-180' : ''}`} 
                                    />
                                  </button>
                                  {/* Sub-items dropdown - Desktop - Below */}
                                  {openSubMenu === service.name && (
                                    <div 
                                      className="absolute top-full left-0 w-full bg-gray-50 rounded-lg mt-1 py-1 shadow-lg border border-gray-200 lg:block hidden"
                                      style={{
                                        zIndex: 10000
                                      }}
                                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                                    >
                                      {service.subItems.map((subItem, index) => (
                                        <button
                                          key={subItem.name}
                                          onClick={(e) => {
                                            e.stopPropagation()
                                            handleNavigation(subItem)
                                          }}
                                          className="w-full text-left px-6 py-2.5 text-gray-600 hover:text-white hover:bg-blue-500 transition-all duration-200 font-normal text-sm break-words leading-relaxed"
                                        >
                                          <span className="block">{subItem.name}</span>
                                        </button>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <button
                                  onClick={() => handleNavigation(service)}
                                  className="w-full text-left px-5 py-3 text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-200 font-medium break-words text-sm leading-snug"
                                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                                >
                                  <span className="block">{service.name}</span>
                                </button>
                              )}
                            </div>
                          ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item)}
                      className={`px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                        isActivePage(item)
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'text-gray-700 hover:text-white hover:bg-blue-600'
                      }`}
                    >
                      {item.name}
                    </button>
                  )}
                </div>
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
            className="lg:hidden bg-white border-t border-gray-200 shadow-2xl pointer-events-auto"
            style={{ 
              position: 'fixed',
              top: isMobile ? '64px' : (showTopBar ? `${topBarHeight + 64}px` : '64px'),
              left: 0,
              right: 0,
              zIndex: 3000,
              maxHeight: 'calc(100vh - 64px)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              overscrollBehavior: 'contain'
            }}
          >
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
              <nav className="flex flex-col space-y-1.5 sm:space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.name === 'Services' ? (
                      <div>
                        <button
                          onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                          className={`w-full px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl font-semibold text-left transition-all duration-300 active:scale-[0.98] flex justify-between items-center ${
                            isActivePage(item)
                              ? 'bg-blue-600 text-white shadow-lg'
                              : 'text-gray-700 hover:text-white bg-gray-50 hover:bg-blue-600 active:bg-blue-700'
                          }`}
                          style={{ 
                            minHeight: '52px',
                            touchAction: 'manipulation',
                            WebkitTapHighlightColor: 'transparent'
                          }}
                        >
                          <span className="text-base sm:text-lg">{item.name}</span>
                          <ChevronDown 
                            size={18} 
                            className={`flex-shrink-0 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        
                        {/* Mobile Services Dropdown */}
                        {isServicesDropdownOpen && (
                          <div className="pl-4 pr-4 pb-2 pt-2 space-y-1">
                            {serviceItems.map((service) => (
                              <div key={service.name} className="w-full">
                                {service.subItems ? (
                                  <>
                                    <button
                                      onClick={() => setOpenSubMenu(openSubMenu === service.name ? null : service.name)}
                                      className={`w-full text-left px-4 py-3.5 rounded-lg text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-300 font-medium flex items-center justify-between active:scale-98 ${
                                        isActivePage(service)
                                          ? 'bg-blue-600 text-white'
                                          : 'bg-gray-50'
                                      }`}
                                      style={{ 
                                        minHeight: '48px',
                                        touchAction: 'manipulation',
                                        WebkitTapHighlightColor: 'transparent'
                                      }}
                                    >
                                      <span className="flex-1 pr-2 text-base break-words">{service.name}</span>
                                      <ChevronDown 
                                        size={18} 
                                        className={`flex-shrink-0 transition-transform duration-200 ${openSubMenu === service.name ? 'rotate-180' : ''}`} 
                                      />
                                    </button>
                                    {/* Sub-items - Mobile */}
                                    {openSubMenu === service.name && (
                                      <div className="w-full bg-gray-50 rounded-lg mt-1 py-1 shadow-sm border border-gray-100">
                                        {service.subItems.map((subItem, index) => (
                                          <button
                                            key={subItem.name}
                                            onClick={() => handleNavigation(subItem)}
                                            className={`w-full text-left px-6 py-3 text-gray-600 hover:text-white hover:bg-blue-500 transition-all duration-200 font-normal text-sm active:scale-98 ${
                                              isActivePage(subItem)
                                                ? 'bg-blue-500 text-white'
                                                : ''
                                            }`}
                                            style={{ 
                                              minHeight: '44px',
                                              touchAction: 'manipulation',
                                              WebkitTapHighlightColor: 'transparent'
                                            }}
                                          >
                                            <span className="break-words leading-relaxed block">{subItem.name}</span>
                                          </button>
                                        ))}
                                      </div>
                                    )}
                                  </>
                                ) : (
                                  <button
                                    onClick={() => handleNavigation(service)}
                                    className={`w-full text-left px-4 py-3.5 rounded-lg text-gray-700 hover:text-white hover:bg-blue-600 transition-all duration-300 font-medium active:scale-98 ${
                                      isActivePage(service)
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-50'
                                    }`}
                                    style={{ 
                                      minHeight: '48px',
                                      touchAction: 'manipulation',
                                      WebkitTapHighlightColor: 'transparent'
                                    }}
                                  >
                                    <span className="text-base break-words leading-relaxed">{service.name}</span>
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        key={item.name}
                        onClick={() => {
                          console.log(`Navigating to: ${item.name} - ${item.path}`)
                          handleNavigation(item)
                        }}
                        className={`px-6 py-4 rounded-xl font-semibold text-left transition-all duration-300 active:scale-95 ${
                          isActivePage(item)
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-700 hover:text-white bg-gray-50 hover:bg-blue-600 active:bg-blue-700'
                        }`}
                        style={{ 
                          minHeight: '56px',
                          touchAction: 'manipulation',
                          WebkitTapHighlightColor: 'transparent'
                        }}
                      >
                        <span className="flex items-center justify-between">
                          <span className="text-lg">{item.name}</span>
                          <ArrowRight size={16} className="transition-transform duration-200 group-active:translate-x-1" />
                        </span>
                      </button>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => {
              console.log('Overlay clicked - closing menu')
              setIsMenuOpen(false)
              setIsServicesDropdownOpen(false)
              setOpenSubMenu(null)
            }}
            style={{ zIndex: 2500 }}
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