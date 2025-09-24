// API service for database operations
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`
    const method = (options.method || 'GET').toUpperCase()
    const config = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {}),
      },
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        let bodyText = ''
        try { bodyText = await response.text() } catch {}
        const error = new Error(`${method} ${url} -> ${response.status} ${response.statusText}${bodyText ? ` | ${bodyText}` : ''}`)
        error.status = response.status
        error.url = url
        error.method = method
        error.body = bodyText
        throw error
      }

      // Handle empty responses (204 etc.)
      const contentType = response.headers.get('content-type') || ''
      if (!contentType.includes('application/json')) {
        return null
      }
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // Projects API
  async getProjects() {
    return this.request('/projects')
  }

  async getProjectById(id) {
    return this.request(`/projects/${id}`)
  }

  async getProjectsByCategory(category) {
    return this.request(`/projects?category=${category}`)
  }

  // Categories API
  async getCategories() {
    return this.request('/categories')
  }

  // Image upload API
  async uploadImage(file, token) {
    const formData = new FormData()
    formData.append('image', file)
    
    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    return await response.json()
  }

  // Leads API
  async submitLead(leadData) {
    return this.request('/leads', {
      method: 'POST',
      body: JSON.stringify(leadData)
    })
  }

  // Optional: notify via email (backend may implement this route)
  async notifyLeadEmail(payload) {
    return this.request('/leads/notify', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
  }

  async getLeads(token, filters = {}) {
    const queryParams = new URLSearchParams(filters).toString()
    const endpoint = queryParams ? `/leads?${queryParams}` : '/leads'
    
    return this.request(endpoint, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

  async updateLead(id, leadData, token) {
    return this.request(`/leads/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(leadData)
    })
  }

  async deleteLead(id, token) {
    return this.request(`/leads/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

  // Services API
  async getServices(filters = {}) {
    const query = new URLSearchParams(filters).toString()
    const endpoint = query ? `/services?${query}` : '/services'
    return this.request(endpoint)
  }

  async getServiceById(id) {
    return this.request(`/services/${id}`)
  }

  async createService(serviceData, token) {
    return this.request('/admin/services', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(serviceData)
    })
  }

  async updateService(id, serviceData, token) {
    return this.request(`/admin/services/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(serviceData)
    })
  }

  async deleteService(id, token) {
    return this.request(`/admin/services/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }

  // Testimonials API
  async getTestimonials() {
    return this.request('/testimonials')
  }

  async submitTestimonial(data) {
    return this.request('/testimonials', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  async adminGetTestimonials(token, filters = {}) {
    // Drop undefined/null/empty values so we don't send status=undefined
    const clean = {}
    Object.entries(filters || {}).forEach(([k, v]) => {
      if (v !== undefined && v !== null && String(v).trim() !== '') clean[k] = v
    })
    const query = new URLSearchParams(clean).toString()
    const endpoint = query ? `/admin/testimonials?${query}` : '/admin/testimonials'
    return this.request(endpoint, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  }

  async adminUpdateTestimonial(id, data, token) {
    return this.request(`/admin/testimonials/${id}`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(data)
    })
  }

  async adminDeleteTestimonial(id, token) {
    return this.request(`/admin/testimonials/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    })
  }

  // Special Services API
  async getSpecialServices() {
    return this.request('/special-services')
  }

  async adminGetSpecialServices(token) {
    return this.request('/admin/special-services', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  }

  async adminCreateSpecialService(data, token) {
    return this.request('/admin/special-services', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(data)
    })
  }

  async adminUpdateSpecialService(id, data, token) {
    return this.request(`/admin/special-services/${id}`, {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(data)
    })
  }

  async adminDeleteSpecialService(id, token) {
    return this.request(`/admin/special-services/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    })
  }

  // Settings (brochure)
  async getPublicSettings() {
    return this.request('/settings/public')
  }

  async adminGetSettings(token) {
    return this.request('/admin/settings', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
  }

  async adminUpdateSettings(data, token) {
    return this.request('/admin/settings', {
      method: 'PUT',
      headers: { 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(data)
    })
  }

  // Brochures API
  async getBrochures() {
    return this.request('/brochures')
  }

  async adminGetBrochures(token) {
    return this.request('/admin/brochures', {
      headers: { Authorization: `Bearer ${token}` }
    })
  }

  async adminCreateBrochure(data, token) {
    return this.request('/admin/brochures', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data)
    })
  }

  async adminUpdateBrochure(id, data, token) {
    return this.request(`/admin/brochures/${id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data)
    })
  }

  async adminDeleteBrochure(id, token) {
    return this.request(`/admin/brochures/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
  }
}

export default new ApiService()
