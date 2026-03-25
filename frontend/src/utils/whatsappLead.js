/** WhatsApp copies of leads — two business numbers (India, digits only for wa.me) */
const WHATSAPP_LEAD_PHONES = ['919916290799', '918797223004']

export const LEAD_SUBMIT_TIMEOUT_MS = 2500

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

export function buildLeadWhatsAppMessage(lead, outcome) {
  const lines = ['*New lead — sanjanawaterproofing.com*']
  if (outcome === 'success') lines.push('Status: *Submitted OK* (backup copy)')
  else if (outcome === 'timeout') lines.push('Status: *Request timed out* — please treat as new lead')
  else lines.push('Status: *Submit failed* — please treat as new lead')

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

/**
 * Opens WhatsApp (Web/App) with the same message for each number.
 * Second window is delayed slightly to reduce popup blocking.
 */
export function openWhatsAppLeadCopies(lead, outcome) {
  if (typeof window === 'undefined') return
  const text = truncateForWa(buildLeadWhatsAppMessage(lead, outcome))

  const open = (phone, i) => {
    const url = waUrl(phone, text)
    const w = window.open(url, '_blank', 'noopener,noreferrer')
    if (!w && i === 0 && typeof console !== 'undefined') {
      console.warn('WhatsApp popup may have been blocked; user can open link manually.')
    }
  }

  WHATSAPP_LEAD_PHONES.forEach((phone, i) => {
    if (i === 0) open(phone, 0)
    else setTimeout(() => open(phone, i), 500 * i)
  })
}
