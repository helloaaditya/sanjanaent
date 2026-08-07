export const SITE_URL = 'https://www.sanjanawaterproofing.com'
export const SITE_NAME = 'Sanjana Enterprises'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/sanjana-enterprises.png`
export const DEFAULT_PHONE = '+91-9916290799'
export const DEFAULT_EMAIL = 'sanjana.waterproofing@gmail.com'

export const SERVICE_LINKS = [
  { name: 'Terrace Waterproofing', path: '/terrace-waterproofing' },
  { name: 'Basement Waterproofing', path: '/basement-waterproofing' },
  { name: 'Water Tank Waterproofing', path: '/water-tanks-waterproofing' },
  { name: 'Water Leakage Detection', path: '/water-leakage-detection' },
  { name: 'Epoxy Flooring', path: '/epoxy-flooring' },
  { name: 'PU Flooring', path: '/pu-flooring' },
  { name: 'ESD Flooring', path: '/esd-flooring-installation-in-bangalore' },
  { name: 'Anti-Corrosion Coating', path: '/anti-corrosion-coating-services-in-bangalore' },
]

export function absoluteUrl(path = '/') {
  if (!path) return SITE_URL
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function blogPostingSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.featuredImage || DEFAULT_OG_IMAGE,
    author: {
      '@type': 'Organization',
      name: post.author || SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: DEFAULT_OG_IMAGE,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    url: absoluteUrl(`/blog/${post.slug}`),
    keywords: (post.tags || []).join(', '),
    articleSection: post.category,
  }
}

export function blogListSchema(posts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_NAME} Blog`,
    description: 'Expert guides on waterproofing and industrial flooring in Bangalore',
    url: absoluteUrl('/blog'),
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
    })),
  }
}

export function serviceBusinessSchema({ name, description, url, areaServed = 'Bangalore, Karnataka' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name,
    description,
    url: absoluteUrl(url),
    image: DEFAULT_OG_IMAGE,
    telephone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    areaServed: { '@type': 'City', name: areaServed },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'KA',
      addressCountry: 'IN',
    },
    priceRange: '₹₹',
  }
}

export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
}

export const WATER_LEAK_FAQS = [
  {
    q: 'How much does water leakage detection cost in Bangalore?',
    a: 'Water leakage detection in Bangalore typically costs ₹1,500–₹5,000 depending on property size and complexity. We provide a transparent quote before inspection.',
  },
  {
    q: 'Can water leaks be detected without breaking walls?',
    a: 'Yes. We use thermal imaging, moisture meters, and pipe cameras for non-destructive water leakage detection in walls, bathrooms, terraces, and underground pipes.',
  },
  {
    q: 'What methods do you use for water leak detection?',
    a: 'Our team uses infrared thermography, electronic moisture meters, pipe camera inspection, pressure testing, and controlled water testing to locate hidden leaks accurately.',
  },
  {
    q: 'How soon can you inspect for water leakage in Bangalore?',
    a: 'We typically schedule water leakage detection within 24–48 hours across Bangalore. Call +91 9916290799 for urgent leak inspection.',
  },
  {
    q: 'Which areas in Bangalore do you serve for leak detection?',
    a: 'We serve Whitefield, Indiranagar, Koramangala, HSR, BTM, Electronic City, Hebbal, Yelahanka, JP Nagar, and all major Bangalore localities.',
  },
  {
    q: 'Why choose Sanjana Enterprises for water leakage detection?',
    a: '30+ years in Bangalore, advanced thermal imaging equipment, non-destructive methods, accurate reporting, and quick response for residential and commercial properties.',
  },
]

export const EPOXY_CONTRACTOR_FAQS = [
  {
    q: 'How much does epoxy flooring cost in Bangalore?',
    a: 'Epoxy flooring contractor rates in Bangalore depend on surface area, epoxy type, and preparation work. Industrial epoxy flooring typically ranges from ₹80–₹250 per sq ft. We provide a detailed site quote.',
  },
  {
    q: 'How long does epoxy flooring installation take?',
    a: 'Most epoxy flooring projects take 3–7 days including surface preparation, primer, epoxy coats, and curing. Our epoxy flooring contractors plan work to minimize downtime.',
  },
  {
    q: 'What types of epoxy flooring do you install in Bangalore?',
    a: 'We install self-leveling epoxy, heavy-duty industrial epoxy, warehouse epoxy flooring, anti-slip epoxy, chemical-resistant epoxy, and decorative epoxy finishes.',
  },
  {
    q: 'Is epoxy flooring suitable for factories and warehouses?',
    a: 'Yes. Epoxy flooring is ideal for factories, warehouses, and commercial spaces due to chemical resistance, heavy load capacity, seamless finish, and easy maintenance.',
  },
  {
    q: 'Do you provide epoxy flooring across Bangalore?',
    a: 'Yes. Our epoxy flooring contractors serve Whitefield, Electronic City, Peenya, Koramangala, and all Bangalore areas with site inspection and professional installation.',
  },
  {
    q: 'Why hire an epoxy flooring contractor instead of a general painter?',
    a: 'Professional epoxy flooring contractors ensure proper surface preparation, correct epoxy system selection, and durable installation with warranty-backed workmanship.',
  },
]
