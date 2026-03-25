import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams, Navigate } from 'react-router-dom'
import { CheckCircle, Phone, ArrowRight, MapPin, MessageCircle } from 'lucide-react'
import {
  BANGALORE_AREAS,
  LOCATION_SERVICES,
  parseLocationSlug,
  getLocationPageUrl,
  getAllLocationSlugs,
} from '../data/locationPagesData'
import ScrollAnimation from '../components/ScrollAnimation'

const BASE = 'https://www.sanjanawaterproofing.com'

function LocationServicePage() {
  const { locationSlug } = useParams()

  const parsed = useMemo(() => (locationSlug ? parseLocationSlug(locationSlug) : null), [locationSlug])

  if (!parsed) return <Navigate to="/" replace />

  const { service, area } = parsed
  const areaName = area.name
  const serviceTitle = service.title
  const h1 = `${serviceTitle} in ${areaName} Bangalore`
  const canonical = getLocationPageUrl(service.slug, area.slug)
  const isEpoxy = service.slug === 'epoxy-flooring'
  const metaDescription = isEpoxy
    ? `Professional epoxy flooring contractor in ${areaName} Bangalore. ${service.description.slice(0, 100)}... Contact Sanjana Enterprises.`
    : `Professional ${service.title.toLowerCase()} services in ${areaName} Bangalore. ${service.description.slice(0, 100)}... Contact Sanjana Enterprises.`

  const faqs = [
    {
      q: `How much does ${service.shortTitle.toLowerCase()} cost in ${areaName}?`,
      a: service.slug === 'water-leakage-detection'
        ? 'Leak detection services usually cost between ₹1,500–₹5,000 depending on the complexity and area. We provide a transparent quote for Whitefield, BTM, and all Bangalore localities. Contact us for an accurate estimate.'
        : `Rates vary by scope and surface area. We provide a detailed quote for ${areaName} and nearby areas. Contact us for an accurate estimate.`,
    },
    {
      q:
        service.slug === 'water-leakage-detection'
          ? 'Can leaks be detected without breaking walls?'
          : `Do you serve ${areaName} and nearby localities?`,
      a:
        service.slug === 'water-leakage-detection'
          ? 'Yes. Modern tools like thermal scanners and pipe cameras allow non-destructive leak detection. We locate hidden leaks in walls, pipes, and terraces without unnecessary damage.'
          : `Yes. We regularly serve ${areaName}, ${area.nearby.slice(0, 2).join(', ')}, and all Bangalore areas. Our team can visit your site for inspection and execution.`,
    },
    {
      q: `Why choose Sanjana Enterprises for ${service.shortTitle.toLowerCase()} in ${areaName}?`,
      a: `We have 30+ years of experience in Bangalore, use quality materials, and offer professional execution. Our team serves ${areaName} and all localities with quick response, transparent pricing, and post-service support.`,
    },
    {
      q: `How soon can you start ${service.shortTitle.toLowerCase()} in ${areaName}?`,
      a: `We respond within 24–48 hours and provide a detailed quote. After you approve the quote, we plan the work as per your convenience. We serve ${areaName} and surrounding areas regularly.`,
    },
    {
      q: service.slug === 'water-leakage-detection'
        ? 'What methods do you use for leak detection?'
        : `Is there a warranty on ${service.shortTitle.toLowerCase()} work?`,
      a: service.slug === 'water-leakage-detection'
        ? 'We use thermal imaging, moisture meters, pipe cameras, and pressure testing to locate leaks accurately. All methods are non-destructive where possible.'
        : 'We use proven materials and methods. Warranty terms depend on the scope; we discuss this at the time of quote and provide written assurance where applicable.',
    },
    {
      q: `How can I get a quote for ${areaName}?`,
      a: `Call us on +91 9916290799 or submit the contact form with your requirement. We will provide a detailed quote for ${areaName} and nearby areas. We serve residential, commercial, and industrial clients across Bangalore.`,
    },
    {
      q: `What areas near ${areaName} do you cover?`,
      a: `We cover ${areaName}, ${area.nearby.join(', ')}, and all major Bangalore localities. Our team is based in Bangalore and can reach your site quickly.`,
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: isEpoxy
      ? `Sanjana Enterprises - Epoxy Flooring Contractor in ${areaName}`
      : `Sanjana Enterprises - ${serviceTitle} in ${areaName}`,
    description: metaDescription,
    url: canonical,
    areaServed: { '@type': 'Place', name: `${areaName}, Bangalore` },
    telephone: '+91-9916290799',
    address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'KA', addressCountry: 'IN' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const otherAreasSameService = BANGALORE_AREAS.filter(a => a.slug !== area.slug).slice(0, 6)

  return (
    <>
      <Helmet>
        <title>{h1} | Sanjana Enterprises</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${h1} | Sanjana Enterprises`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="geo.placename" content={`${areaName}, Bangalore`} />
        <meta name="geo.region" content="IN-KA" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 py-16 sm:py-20">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                <MapPin size={16} />
                {areaName}, Bangalore
              </div>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                {serviceTitle} in {areaName} Bangalore
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fade-in-up" delay={200}>
              <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed mb-10">
                If you are searching for {service.title.toLowerCase()} {isEpoxy ? 'contractor' : 'services'} in {areaName} Bangalore, Sanjana Enterprises provides {service.description}
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

        {/* About service in area – extra content */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-3xl font-black text-gray-900 mb-6">
                {serviceTitle} in {areaName} – What We Offer
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Sanjana Enterprises has been serving Bangalore, including {areaName} and neighbouring localities, with professional {service.title.toLowerCase()} solutions for over three decades. Whether you are in a residential building, commercial space, or industrial unit in {areaName}, we provide the same quality of materials and workmanship that we offer across the city.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our team is familiar with local requirements and serves {areaName} regularly. We use proven techniques and quality products to ensure long-lasting results. From quote to completion, we keep you informed and deliver on time.
              </p>
            </ScrollAnimation>
          </div>
        </section>

        {/* Services / contractor in area */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-3xl font-black text-gray-900 mb-8">
                {isEpoxy ? 'Epoxy Flooring Contractor in' : 'Services in'} {areaName}
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.servicePoints.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="flex-shrink-0 text-emerald-500" size={20} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-3xl font-black text-gray-900 mb-8">Why Choose Sanjana Enterprises</h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {service.whyChoose.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="text-emerald-500 font-bold">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollAnimation>
          </div>
        </section>

        {/* How we work / What to expect */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-3xl font-black text-gray-900 mb-10">How We Work in {areaName}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">1</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Enquiry</h3>
                  <p className="text-gray-600 text-sm">Call or contact us. We note your requirement and provide a detailed quote for your location in {areaName}.</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">2</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quote</h3>
                  <p className="text-gray-600 text-sm">We assess your requirement and provide a clear quote with no hidden charges. Contact us for details.</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">3</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Execution</h3>
                  <p className="text-gray-600 text-sm">Once you approve, we complete the work using quality materials and proven methods on the agreed timeline.</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">4</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Handover</h3>
                  <p className="text-gray-600 text-sm">We hand over the completed work and share care tips. We remain available for any follow-up in {areaName}.</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Areas Near */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-3xl font-black text-gray-900 mb-8">Areas Near {areaName}</h2>
              <div className="flex flex-wrap gap-3">
                {area.nearby.map((near, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                  >
                    {near}
                  </span>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
              <ul className="space-y-6">
                {faqs.map((faq, i) => (
                  <li key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
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
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-4xl font-black text-white mb-6">
                Get {serviceTitle} in {areaName}
              </h2>
              <p className="text-xl text-teal-100 mb-10">
                Contact Sanjana Enterprises for professional {service.title.toLowerCase()} {isEpoxy ? 'contractor' : 'services'} in {areaName} and across Bangalore.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
                >
                  Get Quote
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="tel:+919916290799"
                  className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-bold py-4 px-8 rounded-xl transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  +91 9916290799
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Internal links: same service other areas + main service */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollAnimation animation="fade-in-up" delay={0}>
              <h2 className="text-2xl font-black text-gray-900 mb-6">{serviceTitle} in Other Bangalore Areas</h2>
              <div className="flex flex-wrap gap-3 mb-10">
                {otherAreasSameService.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/${service.slug}-${a.slug}-bangalore`}
                    className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium hover:bg-teal-100 transition-colors"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
              <Link
                to={service.mainPagePath}
                className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700"
              >
                View all {serviceTitle} {isEpoxy ? 'contractor options' : 'services'}
                <ArrowRight size={18} />
              </Link>
            </ScrollAnimation>
          </div>
        </section>
      </div>
    </>
  )
}

export default LocationServicePage
