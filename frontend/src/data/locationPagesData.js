/**
 * Programmatic Local SEO: Bangalore areas + services for location pages.
 * URL pattern: /{serviceSlug}-{areaSlug}-bangalore
 */

export const BANGALORE_AREAS = [
  { name: 'Whitefield', slug: 'whitefield', nearby: ['ITPL', 'Brookefield', 'Kadugodi', 'Hope Farm'] },
  { name: 'Indiranagar', slug: 'indiranagar', nearby: ['CMH Road', '100 Feet Road', 'Jeevanbhima Nagar'] },
  { name: 'Marathahalli', slug: 'marathahalli', nearby: ['Bellandur', 'Kadubeesanahalli', 'Varthur'] },
  { name: 'BTM Layout', slug: 'btm', nearby: ['Bommanahalli', 'HSR Layout', 'Jayanagar'] },
  { name: 'HSR Layout', slug: 'hsr', nearby: ['Sector 1', 'Sector 2', 'Agara'] },
  { name: 'Electronic City', slug: 'electronic-city', nearby: ['Phase 1', 'Phase 2', 'Konappana Agrahara'] },
  { name: 'Hebbal', slug: 'hebbal', nearby: ['Kodigehalli', 'Sahakar Nagar', 'HBR Layout'] },
  { name: 'Yelahanka', slug: 'yelahanka', nearby: ['Yelahanka New Town', 'Jakkur', 'Chikkabanavara'] },
  { name: 'JP Nagar', slug: 'jp-nagar', nearby: ['Jayanagar', 'Bannerghatta Road', 'Uttarahalli'] },
  { name: 'Bannerghatta Road', slug: 'bannerghatta-road', nearby: ['JP Nagar', 'Jayanagar', 'Uttarahalli'] },
  { name: 'KR Puram', slug: 'kr-puram', nearby: ['Mahadevapura', 'Whitefield', 'B Narayanapura'] },
  { name: 'Kalyan Nagar', slug: 'kalyan-nagar', nearby: ['HRBR Layout', 'HBR Layout', 'Banaswadi'] },
  { name: 'Jayanagar', slug: 'jayanagar', nearby: ['JP Nagar', 'BTM', 'Basavanagudi'] },
  { name: 'Rajajinagar', slug: 'rajajinagar', nearby: ['Mahalakshmi Layout', 'Yeshwanthpur', 'Malleshwaram'] },
  { name: 'Malleshwaram', slug: 'malleshwaram', nearby: ['Yeshwanthpur', 'Rajajinagar', 'Seshadripuram'] },
  { name: 'Koramangala', slug: 'koramangala', nearby: ['HSR Layout', 'BTM', 'Jayanagar'] },
  { name: 'Bellandur', slug: 'bellandur', nearby: ['Whitefield', 'Indiranagar', 'Marathahalli'] },
  { name: 'Banaswadi', slug: 'banaswadi', nearby: ['Kalyan Nagar', 'HRBR Layout', 'HBR Layout'] },
  { name: 'HBR Layout', slug: 'hbr-layout', nearby: ['Kalyan Nagar', 'HRBR Layout', 'Banaswadi'] },
  { name: 'HRBR Layout', slug: 'hrbr-layout', nearby: ['Kalyan Nagar', 'HRBR Layout', 'Banaswadi'] },
  { name: 'Yeshwanthpur', slug: 'yeshwanthpur', nearby: ['Rajajinagar', 'Malleshwaram', 'Seshadripuram'] },
  { name: 'Seshadripuram', slug: 'seshadripuram', nearby: ['Yeshwanthpur', 'Rajajinagar', 'Malleshwaram'] },
  { name: 'Mahalakshmi Layout', slug: 'mahalakshmi-layout', nearby: ['Yeshwanthpur', 'Rajajinagar', 'Malleshwaram'] },
  { name: 'Basavanagudi', slug: 'basavanagudi', nearby: ['Jayanagar', 'BTM', 'Basavanagudi'] },
  { name: 'Uttarahalli', slug: 'uttarahalli', nearby: ['JP Nagar', 'Bannerghatta Road', 'Uttarahalli'] },
  { name: 'Chikkabanavara', slug: 'chikkabanavara', nearby: ['Yelahanka', 'Jakkur', 'Chikkabanavara'] },
  { name: 'Kodigehalli', slug: 'kodigehalli', nearby: ['Hebbal', 'Sahakar Nagar', 'HBR Layout'] },
  { name: 'Sahakar Nagar', slug: 'sahakar-nagar', nearby: ['Hebbal', 'Kodigehalli', 'HBR Layout'] },
  { name: 'HBR Layout', slug: 'hbr-layout', nearby: ['Hebbal', 'Kodigehalli', 'Sahakar Nagar'] },
  { name: 'Yelahanka New Town', slug: 'yelahanka-new-town', nearby: ['Yelahanka', 'Jakkur', 'Chikkabanavara'] },
  { name: 'Jakkur', slug: 'jakkur', nearby: ['Yelahanka', 'Jakkur', 'Chikkabanavara'] },
  { name: 'Chikkabanavara', slug: 'chikkabanavara', nearby: ['Yelahanka', 'Jakkur', 'Chikkabanavara'] },
  { name: 'Yelahanka New Town', slug: 'yelahanka-new-town', nearby: ['Yelahanka', 'Jakkur', 'Chikkabanavara'] },
  { name: 'Jakkur', slug: 'jakkur', nearby: ['Yelahanka', 'Jakkur', 'Chikkabanavara'] },
  { name: 'Chikkabanavara', slug: 'chikkabanavara', nearby: ['Yelahanka', 'Jakkur', 'Chikkabanavara'] },
  { name: 'Koramangala', slug: 'koramangala', nearby: ['HSR Layout', 'BTM', 'Jayanagar'] },

]

export const LOCATION_SERVICES = [
  {
    slug: 'water-leakage-detection',
    title: 'Water Leakage Detection',
    shortTitle: 'Water Leakage Detection',
    description: 'professional leak detection using advanced technology such as pipe camera inspection and thermal leak detection. Our team helps identify hidden leaks in walls, underground pipes, bathrooms, and terraces without unnecessary wall breaking.',
    servicePoints: [
      'Wall leakage detection',
      'Underground pipe leak detection',
      'Bathroom leak detection',
      'Terrace leak inspection',
      'Pipe camera inspection',
    ],
    whyChoose: ['Non-destructive leak detection', 'Fast inspection', 'Accurate leak identification', 'Affordable service'],
    mainPagePath: '/water-leakage-detection',
  },
  {
    slug: 'epoxy-flooring',
    title: 'Epoxy Flooring',
    shortTitle: 'Epoxy Flooring',
    description: 'durable epoxy flooring solutions for homes and businesses. We provide seamless, chemical-resistant, and long-lasting epoxy floor coating and installation.',
    servicePoints: [
      'Industrial epoxy flooring',
      'Decorative epoxy flooring',
      'Epoxy garage floors',
      'Epoxy for commercial spaces',
      'Self-leveling epoxy',
    ],
    whyChoose: ['Seamless finish', 'Chemical resistance', 'Quick installation', '10+ years durability'],
    mainPagePath: '/epoxy-flooring',
  },
  {
    slug: 'terrace-waterproofing',
    title: 'Terrace Waterproofing',
    shortTitle: 'Terrace Waterproofing',
    description: 'reliable terrace and roof waterproofing to stop leaks and protect your building. We use quality membranes and coatings for long-lasting protection.',
    servicePoints: [
      'Terrace waterproofing',
      'Roof leak repair',
      'Balcony waterproofing',
      'PU coating',
      'Crack sealing',
    ],
    whyChoose: ['Leak-proof guarantee', 'UV-resistant coatings', 'Fast completion', 'Expert team'],
    mainPagePath: '/terrace-waterproofing',
  },
  {
    slug: 'basement-waterproofing',
    title: 'Basement Waterproofing',
    shortTitle: 'Basement Waterproofing',
    description: 'basement waterproofing to keep your lower floors dry. We prevent seepage and dampness with injection grouting and membrane systems.',
    servicePoints: [
      'Basement wall waterproofing',
      'Injection grouting',
      'Damp proofing',
      'Seepage control',
      'Membrane waterproofing',
    ],
    whyChoose: ['Permanent solution', 'No excavation needed', 'Proven methods', 'Competitive pricing'],
    mainPagePath: '/basement-waterproofing',
  },
  {
    slug: 'pu-flooring',
    title: 'PU Flooring',
    shortTitle: 'PU Flooring',
    description: 'high-performance PU (polyurethane) flooring for industrial and commercial spaces. Seamless, hygienic, and resistant to chemicals and heavy traffic.',
    servicePoints: [
      'Industrial PU flooring',
      'Food-grade PU flooring',
      'PU concrete flooring',
      'Warehouse flooring',
      'Chemical-resistant PU',
    ],
    whyChoose: ['Hygienic & seamless', 'Chemical resistant', 'Thermal shock resistant', 'Long lifespan'],
    mainPagePath: '/best-pu-flooring-services-in-bangalore',
  },
  {
    slug: 'water-tanks-waterproofing',
    title: 'Water Tanks Waterproofing',
    shortTitle: 'Water Tanks Waterproofing',
    description: 'drinking-water-safe tank waterproofing for overhead and underground tanks. We use approved coatings to prevent leaks and contamination.',
    servicePoints: [
      'Overhead tank waterproofing',
      'Underground tank coating',
      'Potable water safe coating',
      'Tank cleaning & repair',
      'Leak sealing',
    ],
    whyChoose: ['Potable water safe', 'Leak-proof', 'Durable', 'Quick service'],
    mainPagePath: '/water-tanks-waterproofing',
  },
  {
    slug: 'repair-section',
    title: 'Repair & Waterproofing',
    shortTitle: 'Repair Services',
    description: 'expert repair and waterproofing for leaks, cracks, and water damage. We fix terraces, bathrooms, walls, and basements with proven methods.',
    servicePoints: [
      'Leak repair',
      'Crack repair',
      'Terrace repair',
      'Bathroom leak repair',
      'Wall & basement repair',
    ],
    whyChoose: ['Expert technicians', 'Quality materials', 'Quick turnaround', 'Competitive pricing'],
    mainPagePath: '/repair-section',
  },
  {
    slug: 'esd-flooring-installation',
    title: 'ESD Flooring Installation',
    shortTitle: 'ESD Flooring',
    description: 'anti-static ESD flooring for cleanrooms, electronics, and sensitive environments. We install conductive and dissipative flooring that meets ESD standards.',
    servicePoints: [
      'ESD epoxy flooring',
      'Conductive flooring',
      'Cleanroom flooring',
      'Electronics manufacturing',
      'ESD testing & compliance',
    ],
    whyChoose: ['ESD compliant', 'Cleanroom grade', 'Durable', 'Expert installation'],
    mainPagePath: '/esd-flooring-installation-in-bangalore',
  },
  {
    slug: 'car-parking-flooring',
    title: 'Car Parking Flooring',
    shortTitle: 'Car Parking Flooring',
    description: 'durable, slip-resistant flooring for car parks and parking decks. We provide epoxy and PU coatings that withstand vehicle traffic and weather.',
    servicePoints: [
      'Parking deck coating',
      'Anti-slip parking flooring',
      'Basement parking flooring',
      'Rooftop parking',
      'Line marking & signage',
    ],
    whyChoose: ['Slip-resistant', 'Heavy-duty', 'Weather resistant', 'Long-lasting'],
    mainPagePath: '/car-parking-flooring-solutions-in-bangalore',
  },
  {
    slug: 'warehouse-bay-marking',
    title: 'Warehouse Bay Marking',
    shortTitle: 'Warehouse Bay Marking',
    description: 'professional warehouse floor marking and bay marking for better organisation and safety. We use durable paints and tapes for clear lane and bay identification.',
    servicePoints: [
      'Warehouse line marking',
      'Bay marking',
      'Lane marking',
      'Safety zone marking',
      'Custom floor graphics',
    ],
    whyChoose: ['Clear visibility', 'Durable finish', 'Safety compliant', 'Quick installation'],
    mainPagePath: '/warehouse-bay-marking-in-bangalore',
  },
  {
    slug: 'anti-corrosion-coating',
    title: 'Anti-Corrosion Coating',
    shortTitle: 'Anti-Corrosion Coating',
    description: 'protective anti-corrosion coatings for metal structures, machinery, and industrial equipment. We extend asset life and reduce maintenance with quality coatings.',
    servicePoints: [
      'Metal structure coating',
      'Industrial equipment coating',
      'Pipeline coating',
      'Tank coating',
      'Structural steel protection',
    ],
    whyChoose: ['Rust prevention', 'Long-lasting', 'Industrial grade', 'Expert application'],
    mainPagePath: '/anti-corrosion-coating-services-in-bangalore',
  },
]

const BASE = 'https://www.sanjanawaterproofing.com'

/** All valid location page slugs for routing */
export function getAllLocationSlugs() {
  const slugs = []
  for (const service of LOCATION_SERVICES) {
    for (const area of BANGALORE_AREAS) {
      slugs.push(`${service.slug}-${area.slug}-bangalore`)
    }
  }
  return slugs
}

/** Parse locationSlug (e.g. water-leakage-detection-whitefield-bangalore) into { service, area } or null */
export function parseLocationSlug(locationSlug) {
  if (!locationSlug || !locationSlug.endsWith('-bangalore')) return null
  const beforeBangalore = locationSlug.slice(0, -'-bangalore'.length)
  const areasByLength = [...BANGALORE_AREAS].sort((a, b) => b.slug.length - a.slug.length)
  for (const area of areasByLength) {
    const suffix = `-${area.slug}`
    if (beforeBangalore.endsWith(suffix)) {
      const serviceSlug = beforeBangalore.slice(0, -suffix.length)
      const service = LOCATION_SERVICES.find(s => s.slug === serviceSlug)
      if (service) return { service, area }
      return null
    }
  }
  return null
}

/** Get canonical URL for a location page */
export function getLocationPageUrl(serviceSlug, areaSlug) {
  return `${BASE}/${serviceSlug}-${areaSlug}-bangalore`
}
