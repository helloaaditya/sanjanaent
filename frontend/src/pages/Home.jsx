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
        <title>Sanjana Enterprises | Waterproofing & Industrial Flooring in Bangalore</title>
        <meta name="description" content="Professional waterproofing & industrial flooring services in Bangalore. Terrace, basement, water tank waterproofing. Epoxy & PU flooring. 30+ years experience. Quick inspection." />
        <meta name="keywords" content="waterproofing bangalore, industrial flooring bangalore, terrace waterproofing, basement waterproofing, epoxy flooring, pu flooring, water tank waterproofing, bathroom waterproofing, roof waterproofing" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Sanjana Enterprises | Waterproofing & Industrial Flooring in Bangalore" />
        <meta property="og:description" content="Professional waterproofing and industrial flooring services in Bangalore. Quick site inspection with 30+ years of experience." />
        <meta property="og:url" content="https://sanjanawaterproofing.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta name="geo.placename" content="Bangalore, Karnataka" />
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sanjana Enterprises",
            "description": "Professional waterproofing and industrial flooring services in Bangalore and across Karnataka.",
            "url": "https://sanjanawaterproofing.com",
            "telephone": "+91-9916290799",
            "email": "sanjana.waterproofing@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "# 786/1/30&31, 3rd main, 2nd cross, telecom layout, beside muneshwara temple, srirampura, jakkurpost",
              "addressLocality": "Bangalore",
              "addressRegion": "Karnataka",
              "postalCode": "560064",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "13.067775",
              "longitude": "77.619329"
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