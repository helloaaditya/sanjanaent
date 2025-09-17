import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
