/**
 * Vercel Edge Middleware: 301 redirects before SPA rewrites.
 * - Legacy .html URLs → canonical non-.html paths
 * - Duplicate alias URLs → one canonical path
 * - Homepage/contact query params → clean URL
 */
import { HTML_REDIRECTS, ALIAS_REDIRECTS } from './redirects.js'

export const config = {
  matcher: ['/', '/contact', '/:path*'],
}

export default function middleware(request) {
  const url = new URL(request.url)
  const pathname = url.pathname
  const search = url.search
  const params = url.searchParams
  const origin = url.origin

  const pathRedirect = HTML_REDIRECTS[pathname] ?? ALIAS_REDIRECTS[pathname]
  if (pathRedirect !== undefined) {
    return Response.redirect(`${origin}${pathRedirect}`, 301)
  }

  if (pathname === '/') {
    // Strip all legacy/junk query params (?eid=, ?mode=, ?/faq, tracking junk, etc.)
    if (search.length > 0) {
      return Response.redirect(`${origin}/`, 301)
    }
  }

  if (pathname === '/contact' && params.has('q')) {
    return Response.redirect(`${origin}/contact`, 301)
  }
}
