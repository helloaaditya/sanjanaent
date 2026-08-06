/** Shared 301 redirect maps for middleware, vercel.json generation, and client fallback */

export const HTML_REDIRECTS = {
  '/index.html': '/',
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
  '/blog.html': '/blog',
  '/gallery.html': '/gallery',
  '/training.html': '/contact',
  '/client.html': '/contact',
  '/swimming-pool-repair-and-waterproofing.html': '/services',
  '/video.html': '/gallery',
  '/awards.html': '/',
  '/bathroom-waterproofing.html': '/services',
}

/** Non-.html alias URLs → single canonical path */
export const ALIAS_REDIRECTS = {
  '/best-pu-flooring-services-in-bangalore': '/pu-flooring',
  '/epoxy-flooring-services-bangalore': '/epoxy-flooring-services-in-bangalore',
  '/heavy-duty-epoxy-flooring-bangalore': '/heavy-duty-epoxy-flooring-in-bangalore',
  '/car-parking-flooring-bangalore': '/car-parking-flooring-solutions-in-bangalore',
  '/chemical-resistant-epoxy-flooring-in-bangalore': '/chemical-resistant-epoxy-flooring-bangalore',
}

export const ALL_PATH_REDIRECTS = { ...HTML_REDIRECTS, ...ALIAS_REDIRECTS }
