import React from 'react'

const WHATSAPP_NUMBER = '919916290799'
const PREBUILT_MESSAGE =
  'Hi Sanjana Enterprises, I need a quote for waterproofing / epoxy flooring services in Bangalore. Please contact me.'

const WhatsAppFloatingButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREBUILT_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] group flex items-center gap-3"
    >
      <span className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 bg-white text-gray-800 text-sm font-semibold px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
        Chat on WhatsApp
      </span>
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" aria-hidden="true" />
        <svg
          viewBox="0 0 32 32"
          className="relative w-8 h-8 fill-current"
          aria-hidden="true"
        >
          <path d="M16.04 3C9.4 3 4 8.37 4 14.96c0 2.1.55 4.15 1.6 5.96L4 29l8.29-1.73a12.1 12.1 0 0 0 3.75.59h.01c6.64 0 12.04-5.37 12.04-11.96C28.09 8.37 22.68 3 16.04 3zm0 21.86h-.01a10.1 10.1 0 0 1-5.14-1.41l-.37-.22-4.92 1.03 1.04-4.8-.24-.39a9.9 9.9 0 0 1-1.52-5.28c0-5.48 4.5-9.94 10.05-9.94 5.54 0 10.05 4.46 10.05 9.94 0 5.48-4.51 9.94-10.04 9.94zm5.52-7.44c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.93-2.25-.24-.58-.5-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </span>
    </a>
  )
}

export default WhatsAppFloatingButton
