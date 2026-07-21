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
