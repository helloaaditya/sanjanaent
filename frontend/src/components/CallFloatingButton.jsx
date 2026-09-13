import React from 'react'
import { Phone } from 'lucide-react'
import { reportCallConversion } from '../gtag'

const PHONE_NUMBER = '+919916290799'

const CallFloatingButton = () => {
  const handleClick = () => {
    reportCallConversion()
  }

  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      onClick={handleClick}
      aria-label="Call Sanjana Enterprises"
      title="Call Now"
      className="fixed bottom-24 right-6 z-[60] group flex items-center gap-3"
    >
      <span className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-white text-gray-800 text-sm font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
        Call Now
      </span>
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 hover:shadow-xl hover:scale-110 transition-all duration-300">
        <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20" aria-hidden="true" />
        <Phone size={24} className="relative" />
      </span>
    </a>
  )
}

export default CallFloatingButton
