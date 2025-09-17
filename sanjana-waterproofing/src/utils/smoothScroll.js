// Smooth scroll utility functions
export const smoothScrollTo = (elementId, offset = 0) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

export const smoothScrollToTop = () => {
  // Scroll to the very top of the page
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

export const smoothScrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  })
}

// Enhanced scroll behavior with easing
export const smoothScrollToWithEasing = (elementId, offset = 0, duration = 800) => {
  const element = document.getElementById(elementId)
  if (!element) return

  const startPosition = window.pageYOffset
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset
  const distance = targetPosition - startPosition
  let startTime = null

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)
    const ease = easeInOutCubic(progress)

    window.scrollTo(0, startPosition + distance * ease)

    if (timeElapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

// Scroll spy utility
export const createScrollSpy = (sections, options = {}) => {
  const {
    offset = 0,
    onSectionChange = () => {},
    activeClass = 'active'
  } = options

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          onSectionChange(sectionId)
          
          // Update active navigation
          document.querySelectorAll(`[href="#${sectionId}"]`).forEach(link => {
            link.classList.add(activeClass)
          })
          
          // Remove active class from other links
          document.querySelectorAll(`[href^="#"]:not([href="#${sectionId}"])`).forEach(link => {
            link.classList.remove(activeClass)
          })
        }
      })
    },
    {
      rootMargin: `-${offset}px 0px -50% 0px`
    }
  )

  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId)
    if (element) {
      observer.observe(element)
    }
  })

  return observer
}

// Parallax scroll effect
export const createParallaxEffect = (element, speed = 0.5) => {
  const updateParallax = () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -speed
    element.style.transform = `translateY(${rate}px)`
  }

  window.addEventListener('scroll', updateParallax)
  
  return () => {
    window.removeEventListener('scroll', updateParallax)
  }
}

// Throttle function for performance
export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Debounce function for performance
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
