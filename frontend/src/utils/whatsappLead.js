/** Fallback only: if online submit fails or times out, open WhatsApp to this number (+91 8797223004) */
const WHATSAPP_FALLBACK_PHONE = '918797223004'

export const LEAD_SUBMIT_TIMEOUT_MS = 25000

export function withTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      const id = setTimeout(() => {
        clearTimeout(id)
        reject(new Error('TIMEOUT'))
      }, ms)
    }),
  ])
}

/** outcome: 'timeout' | 'failed' (only used when online submit did not succeed) */
export function buildLeadWhatsAppMessage(lead, outcome) {
  const lines = ['*New lead — sanjanawaterproofing.com*']
  if (outcome === 'timeout') {
    lines.push('Status: *Online form timed out* — please treat as new lead')
  } else {
    lines.push('Status: *Online submit failed* — please treat as new lead')
  }

  const type = lead.type === 'quote' ? 'Quote' : 'Contact'
  lines.push(`Type: ${type}`)
  if (lead.name) lines.push(`Name: ${lead.name}`)
  if (lead.phone) lines.push(`Phone: ${lead.phone}`)
  if (lead.email) lines.push(`Email: ${lead.email}`)
  if (lead.subject) lines.push(`Subject: ${lead.subject}`)
  if (lead.location) lines.push(`Location: ${lead.location}`)
  if (lead.projectType) lines.push(`Project type: ${lead.projectType}`)
  if (lead.timeline) lines.push(`Timeline: ${lead.timeline}`)
  if (lead.message) lines.push(`Message: ${lead.message}`)

  return lines.join('\n')
}

function waUrl(phoneDigits, text) {
  const encoded = encodeURIComponent(text)
  return `https://wa.me/${phoneDigits}?text=${encoded}`
}

function truncateForWa(text) {
  if (text.length <= 3500) return text
  return `${text.slice(0, 3490)}…`
}

/** Opens WhatsApp once — only when primary online submit failed or timed out. */
export function openWhatsAppFallbackLead(lead, outcome) {
  if (typeof window === 'undefined') return
  const text = truncateForWa(buildLeadWhatsAppMessage(lead, outcome))
  const url = waUrl(WHATSAPP_FALLBACK_PHONE, text)
  const w = window.open(url, '_blank', 'noopener,noreferrer')
  if (!w && typeof console !== 'undefined') {
    console.warn('WhatsApp popup may have been blocked; allow popups or open the link manually.')
  }
}
