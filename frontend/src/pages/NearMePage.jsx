import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation, Navigate } from 'react-router-dom'
import { Phone, MessageCircle, MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import { LOCATION_SERVICES, BANGALORE_AREAS } from '../data/locationPagesData'
import ScrollAnimation from '../components/ScrollAnimation'

const BASE = 'https://www.sanjanawaterproofing.com'

function NearMePage() {
  const { pathname } = useLocation()
  const serviceSlug = pathname.replace(/^\//, '').replace(/-near-me$/, '')
  const service = LOCATION_SERVICES.find((s) => s.slug === serviceSlug)

  if (!service) return <Navigate to="/" replace /> 

  const title = `${service.title} Near Me`
  const canonical = `${BASE}/${service.slug}-near-me`
  const isEpoxy = service.slug === 'epoxy-flooring'
  const metaDescription = isEpoxy
    ? `${service.title} contractor near me in Bangalore. Find professional epoxy flooring contractor options nearby. Call or contact Sanjana Enterprises for quick response across Bangalore.`
    : `${service.title} near me in Bangalore. Find professional ${service.title.toLowerCase()} services nearby. Call or contact Sanjana Enterprises for quick service across Bangalore.`

  const faqs = [
    {
      q: `Where do you provide ${service.title.toLowerCase()} ${isEpoxy ? 'contractor' : 'services'}?`,
      a: `We serve all of Bangalore including Whitefield, Indiranagar, Marathahalli, BTM, HSR, Electronic City, Hebbal, Yelahanka, JP Nagar, Koramangala, and other localities. Call us to check availability for your area.`,
    },
    {
      q: `How can I get ${service.title.toLowerCase()} near my location?`,
      a: 'Call us on +91 9916290799 or submit the contact form with your requirement. We will provide a detailed quote. We serve residential, commercial, and industrial clients across Bangalore.',
    },
    {
      q: 'Do you offer same-day or quick service?',
      a: 'We typically schedule a visit within 24–48 hours. For urgent leak detection or repairs, mention it when you call and we will try to accommodate.',
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Sanjana Enterprises - ${service.title} Near Me`,
    description: metaDescription,
    url: canonical,
    areaServed: { '@type': 'City', name: 'Bangalore' },
    telephone: '+91-9916290799',
    address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'KA', addressCountry: 'IN' },
  }

  return (
    <>
      <Helmet>
        <title>{title} | Bangalore | Sanjana Enterprises</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${title} | Sanjana Enterprises`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-16 sm:py-20">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <MapPin size={16} />
                Bangalore & Nearby
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                {service.title} Near Me
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-10">
                Looking for {service.title.toLowerCase()} near you in Bangalore? Sanjana Enterprises provides {service.description} We serve all major localities—call or contact us for a quick quote.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+919916290799"
                  className="bg-white text-slate-800 hover:bg-slate-100 font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2 shadow-lg min-w-[200px]"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-slate-800 font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2 min-w-[200px]"
                >
                  <MessageCircle size={20} />
                  Contact / Quote
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Areas we serve */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-3xl font-black text-gray-900 mb-4">We Serve All Bangalore Areas</h2>
              <p className="text-gray-600 mb-8">
                Select your area for a dedicated page, or call us for service anywhere in Bangalore.
              </p>
              <div className="flex flex-wrap gap-3">
                {BANGALORE_AREAS.map((area) => (
                  <Link
                    key={area.slug}
                    to={`/${service.slug}-${area.slug}-bangalore`}
                    className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium hover:bg-teal-100 transition-colors"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Why choose + services */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Why Choose Sanjana Enterprises</h2>
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {service.whyChoose.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="flex-shrink-0 text-emerald-500" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={service.mainPagePath}
                className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700"
              >
                View full {service.title} {isEpoxy ? 'contractor options' : 'services'}
                <ArrowRight size={18} />
              </Link>
            </ScrollAnimation>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
              <ul className="space-y-6">
                {faqs.map((faq, i) => (
                  <li key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl font-black text-white mb-6">Get {service.title} Near You</h2>
            <p className="text-xl text-teal-100 mb-10">
              Call or contact Sanjana Enterprises for {service.title.toLowerCase()} anywhere in Bangalore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919916290799"
                className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                +91 9916290799
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
              >
                Get Quote
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default NearMePage
