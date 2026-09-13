import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import WhatsAppFloatingButton from './WhatsAppFloatingButton'
import CallFloatingButton from './CallFloatingButton'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
      <CallFloatingButton />
      <WhatsAppFloatingButton />
    </div>
  )
}

export default Layout
