/**
 * Vercel Edge Middleware: 301 redirects so Google indexes only canonical URLs.
 * - .html URLs → non-.html canonical path (runs before rewrites)
 * - Homepage/contact with duplicate-causing query params → clean URL
 */
const HTML_REDIRECTS = {
  '/epoxy-flooring.html': '/epoxy-flooring',
  '/pu-flooring.html': '/pu-flooring',
  '/water-leakage-detection-by-thermal-imaging.html': '/water-leakage-detection',
  '/terrace-waterproofing.html': '/terrace-waterproofing',
  '/basement-waterproofing.html': '/basement-waterproofing',
  '/water-tanks-waterproofing.html': '/water-tanks-waterproofing',
  '/repair-section.html': '/repair-section',
  '/about.html': '/about',
  '/contact.html': '/contact',
  '/services.html': '/services',
  '/blog.html': '/services',
  '/gallery.html': '/gallery',
  '/training.html': '/contact',
  '/client.html': '/contact',
  '/swimming-pool-repair-and-waterproofing.html': '/services',
  '/video.html': '/gallery',
  '/awards.html': '/',
  '/bathroom-waterproofing.html': '/services',
}

export const config = {
  matcher: ['/', '/contact', '/:path.html'],
}

export default function middleware(request) {
  const url = new URL(request.url)
  const pathname = url.pathname
  const search = url.search
  const params = url.searchParams
  const origin = url.origin

  // .html URLs → 301 to canonical path (Page with redirect fix)
  const dest = HTML_REDIRECTS[pathname]
  if (dest !== undefined) {
    return Response.redirect(`${origin}${dest}`, 301)
  }

  // Homepage: strip ?/es, ?/id, ?/..., and ?cid=
  if (pathname === '/') {
    const isAlternateQuery =
      search === '?/es' ||
      search === '?/id' ||
      (search.length > 1 && search.startsWith('?/'))
    if (params.has('cid') || isAlternateQuery) {
      return Response.redirect(`${origin}/`, 301)
    }
  }

  // Contact: strip ?q=
  if (pathname === '/contact' && params.has('q')) {
    return Response.redirect(`${origin}/contact`, 301)
  }
}
