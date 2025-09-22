import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import About from '../components/About'
import AnimatedCounter from '../components/AnimatedCounter'
import Awards from '../components/awards'
import VideoGallerySection from '../components/VideoGallerySection' 
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sanjana Enterprises | Waterproofing & Industrial Flooring in Bangalore | 30+ Years</title>
        <meta name="description" content="Expert waterproofing and industrial flooring in Bangalore. Terrace, bathroom, basement, and roof waterproofing with up to 10-year warranty. Free site inspection. Call +91 9916290799." />
        <meta name="keywords" content="waterproofing bangalore, terrace waterproofing, roof waterproofing, basement waterproofing, bathroom waterproofing, industrial flooring, epoxy flooring, PU coating, APP membrane, SBS membrane, Karnataka waterproofing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sanjana Enterprises | Waterproofing & Industrial Flooring" />
        <meta property="og:description" content="Waterproofing and industrial flooring in Bangalore and across Karnataka. Free site inspection. 30+ years of experience." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/" />
        <meta property="og:type" content="website" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sanjana Enterprises",
            "description": "Waterproofing and industrial flooring services in Bangalore and across Karnataka.",
            "url": "https://sanjanawaterproofing.com",
            "telephone": "+91-9916290799",
            "email": "sanjana.waterproofing@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "12.9716",
              "longitude": "77.5946"
            },
            "openingHours": "Mo-Sa 09:00-18:00",
            "priceRange": "₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })}
        </script>
      </Helmet>
      
      <main>
        <Hero />
        <AnimatedCounter />
        <Awards />
        <VideoGallerySection />
        <About />
        <Testimonials />
      </main>
    </>
  )
}

export default Home
