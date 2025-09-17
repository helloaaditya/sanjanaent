// API service for database operations
const API_BASE_URL = 'http://localhost:3001/api'

class ApiService {
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`
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
        throw new Error(`HTTP error! status: ${response.status}`)
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
}

export default new ApiService()
