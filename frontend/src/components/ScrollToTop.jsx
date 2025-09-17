import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { smoothScrollToTop, throttle } from '../utils/smoothScroll'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsVisible(window.scrollY > 300)
    }, 16)

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={smoothScrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <ChevronUp 
        size={24} 
        className="group-hover:animate-bounce transition-transform duration-300" 
      />
    </button>
  )
}

export default ScrollToTop
