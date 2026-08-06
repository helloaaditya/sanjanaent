/**
 * Vercel Edge Middleware: 301 redirects before SPA rewrites.
 * Query-string stripping must happen here — vercel.json redirects preserve query params.
 */
import { HTML_REDIRECTS, ALIAS_REDIRECTS } from './redirects.js'

export const config = {
  matcher: [
    '/',
    '/contact',
    '/((?!assets/|.*\\.(?:ico|png|jpg|jpeg|gif|svg|webp|woff2?|css|js|txt|xml|json)$).*)',
  ],
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

  if (pathname === '/' && search.length > 0) {
    return Response.redirect(`${origin}/`, 301)
  }

  if (pathname === '/contact' && params.has('q')) {
    return Response.redirect(`${origin}/contact`, 301)
  }
}
