/**
 * Generates public/sitemap-locations.xml for programmatic location pages.
 * Run: node scripts/generate-location-sitemap.js
 */
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { BANGALORE_AREAS, LOCATION_SERVICES } from '../src/data/locationPagesData.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BASE = 'https://www.sanjanawaterproofing.com'
const urls = []
const seen = new Set()
for (const service of LOCATION_SERVICES) {
  for (const area of BANGALORE_AREAS) {
    const loc = `${BASE}/${service.slug}-${area.slug}-bangalore`
    if (seen.has(loc)) continue
    seen.add(loc)
    urls.push(loc)
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url>
    <loc>${loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>
`

const outPath = join(__dirname, '..', 'public', 'sitemap-locations.xml')
writeFileSync(outPath, xml, 'utf8')
console.log('Written', urls.length, 'URLs to', outPath)
