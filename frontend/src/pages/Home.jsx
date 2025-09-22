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
        <meta name="keywords" content="waterproofing bangalore, waterproofing bengaluru, waterproofing contractor bangalore, waterproofing company bangalore, terrace waterproofing bangalore, roof waterproofing bangalore, basement waterproofing bangalore, bathroom waterproofing bangalore, injection grouting bangalore, leakage detection bangalore, sump waterproofing bangalore, water tank waterproofing bangalore, swimming pool waterproofing bangalore, industrial flooring bangalore, epoxy flooring bangalore, epoxy self leveling bangalore, self-leveling epoxy bangalore, esd flooring bangalore, antistatic flooring bangalore, anti static flooring bangalore, pu flooring bangalore, polyurethane flooring bangalore, pu concrete flooring bangalore, polyurethane concrete bangalore, urethane concrete bangalore, epoxy screed bangalore, floor screeding bangalore, anti slip flooring bangalore, non slip flooring bangalore, car park deck coating bangalore, parking epoxy flooring bangalore, warehouse flooring bangalore, factory flooring bangalore, cleanroom flooring bangalore, food grade flooring bangalore, hygienic flooring bangalore, chemical resistant flooring bangalore, heavy duty flooring bangalore, epoxy coating bangalore, floor coating bangalore, app membrane bangalore, sbs membrane bangalore, expansion joint waterproofing bangalore, structural rehabilitation bangalore, karnataka waterproofing, hebbal, jakkur, yelahanka, whitefield, indiranagar, koramangala, hsr layout, electronic city, marathahalli, sarjapur road, bellandur, jp nagar, rt nagar, mg road, rajajinagar, malleshwaram, banashankari, basaveshwaranagar, peenya, nagarbhavi, k r puram, btm layout" />
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
