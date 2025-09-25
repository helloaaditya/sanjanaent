import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const Contact = () => {

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '9916290799, 9986498999, 9663778931, 9972615309',
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
      details: '# 786/1/30&31, 3rd main, 2nd cross, telecom layout, beside muneshwara temple, srirampura, jakkurpost, Bangalore, India, Karnataka',
      description: 'Serving all areas of Bangalore & Karnataka'
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
        <title>Contact Sanjana Enterprises | Waterproofing Company in Bangalore</title>
        <meta name="description" content="Get a free waterproofing inspection and quote in Bangalore. Call +91 9916290799 or email sanjana.waterproofing@gmail.com." />
        <meta name="keywords" content="contact waterproofing bangalore, waterproofing quote bangalore, waterproofing inspection bangalore, waterproofing contractor contact bangalore, epoxy flooring contractor bangalore contact, pu flooring bangalore contact, polyurethane flooring bangalore contact, pu concrete flooring bangalore contact, epoxy self leveling bangalore contact, esd flooring bangalore contact, antistatic flooring bangalore contact, injection grouting bangalore contact, terrace waterproofing bangalore contact, basement waterproofing bangalore contact, roof waterproofing bangalore contact, hebbal waterproofing contact, jakkur waterproofing contact, yelahanka waterproofing contact, whitefield waterproofing contact, koramangala waterproofing contact, hsr layout waterproofing contact" />
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
            "telephone": ["+91-9916290799", "+91-9986498999", "+91-9663778931", "+91-9972615309"],
              "email": "sanjana.waterproofing@gmail.com",
              "address": {
                "@type": "PostalAddress",
              "streetAddress": "# 786/1/30&31, 3rd main, 2nd cross, telecom layout, beside muneshwara temple, srirampura, jakkurpost",
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

      <main className="pt-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-8 sm:py-8">
          <div className="container-max px-4 sm:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Contact <span className="text-blue-600">Sanjana Enterprises</span>
              </h1>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                Ready to protect your property? Get in touch with us for a free inspection 
                and personalized quote. Our expert team is here to help you with all your 
                waterproofing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-4 sm:py-20">
          <div className="container-max px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Get in Touch</h2>
                  <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                    We're here to help you with all your waterproofing needs. Contact us through 
                    any of the channels below, and we'll respond promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                        <info.icon size={20} className="sm:w-6 sm:h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-900 font-medium mb-1 break-words whitespace-normal text-sm sm:text-base">{info.details}</p>
                        <p className="text-gray-600 text-xs sm:text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Google Map */}
      <section className="py-8 sm:pb-16 bg-gray-50">
        <div className="container-max px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Location</h2>
            <div className="w-full h-64 sm:h-96">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31091.96119488624!2d77.619329!3d13.067775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1938a69d6de9%3A0x8916add82f543855!2sSANJANA%20ENTERPRISES%20-%20Waterproofing%20%7C%20Epoxy%20%7C%20PU%20Flooring%20Solution%20%26%20Services!5e0!3m2!1sen!2sin!4v1758270940557!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16">
          <div className="container-max text-center px-4 sm:px-6">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">Ready to Get Started?</h2>
            <p className="text-base sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Don't wait for water damage to occur. Contact us today for a free inspection 
              and protect your property with our professional waterproofing services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="tel:+919916290799" 
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <Phone size={20} className="mr-2" />
                Call Now
              </a>
              <a 
                href="mailto:sanjana.waterproofing@gmail.com" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-md transition-colors duration-200 flex items-center justify-center"
              >
                <MessageCircle size={18} className="mr-2" />
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
