import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const Contact = () => {

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9916290799',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'sanjana.waterproofing@gmail.com',
      description: 'Send us your queries via email'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Bangalore, Karnataka',
      description: 'Serving all areas of Bangalore'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Sat: 9:00 AM - 6:00 PM',
      description: 'Sunday: Emergency calls only'
    }
  ]


  return (
    <>
      <Helmet>
        <title>Contact Sanjana Enterprises - Waterproofing Company in Bangalore | Free Quote</title>
        <meta name="description" content="Contact Sanjana Enterprises for waterproofing services in Bangalore. Free inspection & quote. Call +91 9916290799 or email sanjana.waterproofing@gmail.com" />
        <meta name="keywords" content="contact waterproofing company bangalore, waterproofing quote bangalore, waterproofing inspection bangalore, waterproofing contractor contact bangalore" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sanjanawaterproofing.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Sanjana Enterprises - Waterproofing Company in Bangalore" />
        <meta property="og:description" content="Contact Sanjana Enterprises for waterproofing services in Bangalore. Free inspection & quote. Call +91 9916290799" />
        <meta property="og:url" content="https://sanjanawaterproofing.com/contact" />
        <meta property="og:type" content="website" />
        
        {/* Contact Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Sanjana Enterprises",
            "description": "Contact page for Sanjana Enterprises waterproofing services in Bangalore",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Sanjana Enterprises",
              "telephone": "+91-9916290799",
              "email": "sanjana.waterproofing@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              },
              "openingHours": "Mo-Sa 09:00-18:00",
              "url": "https://sanjanawaterproofing.com"
            }
          })}
        </script>
      </Helmet>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="container-max">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Contact <span className="text-blue-600">Sanjana Enterprises</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to protect your property? Get in touch with us for a free inspection 
                and personalized quote. Our expert team is here to help you with all your 
                waterproofing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-8">
                    We're here to help you with all your waterproofing needs. Contact us through 
                    any of the channels below, and we'll respond promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <info.icon size={24} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                        <p className="text-gray-600 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Emergency Contact */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                      <Phone size={20} className="text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Emergency Service</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Need immediate waterproofing assistance? We provide emergency services 
                    for urgent water damage situations.
                  </p>
                  <a 
                    href="tel:+919916290799" 
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 inline-flex items-center"
                  >
                    <Phone size={16} className="mr-2" />
                    Call Emergency Line
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-max">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
              <p className="text-gray-600">
                We proudly serve all areas of Bangalore and surrounding regions
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg border border-gray-200">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Central Bangalore</h3>
                  <p className="text-gray-600 text-sm">Koramangala, Indiranagar, MG Road, Brigade Road</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">North Bangalore</h3>
                  <p className="text-gray-600 text-sm">Hebbal, Yelahanka, Vidyaranyapura, Malleswaram</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">South Bangalore</h3>
                  <p className="text-gray-600 text-sm">JP Nagar, Banashankari, Jayanagar, BTM Layout</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">East Bangalore</h3>
                  <p className="text-gray-600 text-sm">Whitefield, Marathahalli, KR Puram, HSR Layout</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">West Bangalore</h3>
                  <p className="text-gray-600 text-sm">Rajajinagar, Vijayanagar, Basaveshwaranagar</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Outer Areas</h3>
                  <p className="text-gray-600 text-sm">Electronic City, Sarjapur, Devanahalli</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20">
          <div className="container-max text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't wait for water damage to occur. Contact us today for a free inspection 
              and protect your property with our professional waterproofing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919916290799" 
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
              <a 
                href="mailto:sanjana.waterproofing@gmail.com" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <MessageCircle size={20} className="mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact
