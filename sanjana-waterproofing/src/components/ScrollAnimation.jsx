import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ScrollAnimation = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0, 
  threshold = 0.1,
  className = '',
  ...props 
}) => {
  const { ref, hasAnimated } = useScrollAnimation({
    threshold,
    animationClass: `animate-${animation}`
  })

  const animationClasses = {
    'fade-in-up': 'scroll-animate',
    'fade-in-down': 'scroll-animate',
    'fade-in-left': 'scroll-animate-left',
    'fade-in-right': 'scroll-animate-right',
    'scale': 'scroll-animate-scale',
    'slide-up': 'scroll-animate',
    'slide-left': 'scroll-animate-left',
    'slide-right': 'scroll-animate-right'
  }

  const baseClass = animationClasses[animation] || 'scroll-animate'
  const finalClass = `${baseClass} ${hasAnimated ? 'in-view' : ''} ${className}`

  return (
    <div 
      ref={ref} 
      className={finalClass}
      style={{ 
        transitionDelay: `${delay}ms`,
        ...props.style 
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation
