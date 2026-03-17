/**
 * Vercel Edge Middleware: strip duplicate-causing query params (no .html redirects).
 * Homepage/contact with ?cid, ?/es, ?q etc. → clean URL.
 */
export const config = {
  matcher: ['/', '/contact'],
}

export default function middleware(request) {
  const url = new URL(request.url)
  const pathname = url.pathname
  const search = url.search
  const params = url.searchParams
  const origin = url.origin

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
