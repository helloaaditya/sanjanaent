import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px 0px -50px 0px',
    animationClass = 'animate-fade-in-up'
  } = options

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin
  })

  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return {
    ref,
    inView,
    hasAnimated,
    animationClass: hasAnimated ? animationClass : ''
  }
}

export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed
        setOffset(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return { elementRef, offset }
}

export const useStaggerAnimation = (items, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState([])
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      items.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index])
        }, index * delay)
      })
    }
  }, [inView, items, delay])

  return { ref, visibleItems }
}
