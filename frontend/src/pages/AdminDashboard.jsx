import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Plus, Edit, Trash2, Eye, LogOut, Home, Image, Calendar, MapPin, User, Building, Upload, X, MessageSquare, Phone, Mail, Filter, CheckCircle, Clock, AlertCircle, RefreshCw, Calculator } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import apiService from '../services/api'

const AdminDashboard = () => {
  const [projects, setProjects] = useState([])
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [imagePreview, setImagePreview] = useState('')
  
  // Leads management state
  const [leads, setLeads] = useState([])
  const [leadsLoading, setLeadsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('projects')
  const [servicesLoading, setServicesLoading] = useState(false)
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [serviceForm, setServiceForm] = useState({
    title: '',
    description: '',
    category: 'Waterproofing',
    features: '',
    image: ''
  })
  const [leadFilter, setLeadFilter] = useState('all')
  const [updatingLead, setUpdatingLead] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    category: 'Residential',
    image: '',
    description: '',
    location: '',
    completedDate: '',
    client: '',
    area: '',
    duration: ''
  })
  const navigate = useNavigate()

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      navigate('/admin/login')
      return
    }
    fetchProjects()
    fetchServices()
  }, [navigate])

  // Fetch leads when tab changes or filter changes
  useEffect(() => {
    if (activeTab === 'leads') {
      fetchLeads()
    }
  }, [activeTab, leadFilter])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/projects`)
      const data = await response.json()
      setProjects(data)
    } catch (err) {
      setError('Failed to fetch projects')
    } finally {
      setLoading(false)
    }
  }

  const fetchServices = async () => {
    try {
      setServicesLoading(true)
      const data = await apiService.getServices()
      setServices(Array.isArray(data) ? data : [])
    } catch (err) {
      setError('Failed to fetch services')
    } finally {
      setServicesLoading(false)
    }
  }

  const fetchLeads = async () => {
    try {
      setLeadsLoading(true)
      const token = localStorage.getItem('adminToken')
      const filters = leadFilter !== 'all' ? { type: leadFilter } : {}
      console.log('Fetching leads with filters:', filters)
      const data = await apiService.getLeads(token, filters)
      console.log('Fetched leads:', data)
      setLeads(data)
    } catch (err) {
      console.error('Fetch leads error:', err)
      setError('Failed to fetch leads: ' + err.message)
    } finally {
      setLeadsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUsername')
    navigate('/admin/login')
  }

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      setError('Please select a valid image file (JPEG, PNG, GIF, or WebP)')
      return
    }

    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size must be less than 5MB')
      return
    }

    try {
      setUploadingImage(true)
      setError('')
      
      const token = localStorage.getItem('adminToken')
      const result = await apiService.uploadImage(file, token)
      
      setFormData(prev => ({
        ...prev,
        image: result.imageUrl
      }))
      setImagePreview(result.imageUrl)
    } catch (err) {
      setError('Failed to upload image: ' + err.message)
    } finally {
      setUploadingImage(false)
    }
  }

  // Services CRUD Handlers
  const openAddService = () => {
    setEditingService(null)
    setServiceForm({
      title: '', description: '', category: 'Waterproofing', features: '', image: ''
    })
    setShowServiceModal(true)
  }

  const openEditService = (service) => {
    setEditingService(service)
    setServiceForm({
      title: service.title || '',
      description: service.description || '',
      category: service.category || 'Waterproofing',
      features: (service.features || []).join(', '),
      image: service.image || ''
    })
    setShowServiceModal(true)
  }

  const submitService = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('adminToken')
      const payload = {
        title: serviceForm.title,
        description: serviceForm.description,
        category: serviceForm.category,
        image: serviceForm.image,
        features: serviceForm.features
          .split(',')
          .map(f => f.trim())
          .filter(Boolean)
      }
      if (editingService) {
        await apiService.updateService(editingService._id, payload, token)
      } else {
        await apiService.createService(payload, token)
      }
      setShowServiceModal(false)
      setEditingService(null)
      await fetchServices()
      setSuccessMessage('Service saved successfully')
      setTimeout(() => setSuccessMessage(''), 2500)
    } catch (err) {
      setError('Failed to save service')
    }
  }

  const deleteService = async (id) => {
    if (!window.confirm('Delete this service?')) return
    try {
      const token = localStorage.getItem('adminToken')
      await apiService.deleteService(id, token)
      await fetchServices()
    } catch (err) {
      setError('Failed to delete service')
    }
  }

  const handleImageUrlChange = (url) => {
    setFormData(prev => ({
      ...prev,
      image: url
    }))
    setImagePreview(url)
  }

  const clearImage = () => {
    setFormData(prev => ({
      ...prev,
      image: ''
    }))
    setImagePreview('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('adminToken')
      const url = editingProject 
        ? `http://localhost:3001/api/admin/projects/${editingProject._id}`
        : 'http://localhost:3001/api/admin/projects'
      
      const method = editingProject ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setShowModal(false)
        setEditingProject(null)
        setFormData({
          title: '',
          category: 'Residential',
          image: '',
          description: '',
          location: '',
          completedDate: '',
          client: '',
          area: '',
          duration: ''
        })
        setImagePreview('')
        fetchProjects()
      } else {
        setError('Failed to save project')
      }
    } catch (err) {
      setError('Failed to save project')
    }
  }

  const handleEdit = (project) => {
    setEditingProject(project)
    setFormData({
      title: project.title || '',
      category: project.category || 'Residential',
      image: project.image || '',
      description: project.description || '',
      location: project.location || '',
      completedDate: project.completedDate || '',
      client: project.client || '',
      area: project.area || '',
      duration: project.duration || ''
    })
    setImagePreview(project.image || '')
    setShowModal(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return
    
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch(`http://localhost:3001/api/admin/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        fetchProjects()
      } else {
        setError('Failed to delete project')
      }
    } catch (err) {
      setError('Failed to delete project')
    }
  }

  const handleAddNew = () => {
    setEditingProject(null)
    setFormData({
      title: '',
      category: 'Residential',
      image: '',
      description: '',
      location: '',
      completedDate: '',
      client: '',
      area: '',
      duration: ''
    })
    setImagePreview('')
    setShowModal(true)
  }

  const handleClearAll = async () => {
    if (!window.confirm('Are you sure you want to delete ALL projects? This action cannot be undone.')) return
    
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch('http://localhost:3001/api/admin/projects/clear', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        fetchProjects()
        setError('')
      } else {
        setError('Failed to clear projects')
      }
    } catch (err) {
      setError('Failed to clear projects')
    }
  }

  const handleUpdateLeadStatus = async (leadId, newStatus) => {
    try {
      setUpdatingLead(leadId)
      setError('')
      setSuccessMessage('')
      console.log('Updating lead status:', leadId, newStatus)
      const token = localStorage.getItem('adminToken')
      const result = await apiService.updateLead(leadId, { status: newStatus }, token)
      console.log('Update result:', result)
      await fetchLeads()
      setSuccessMessage('Lead status updated successfully!')
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (err) {
      console.error('Update lead status error:', err)
      setError('Failed to update lead status: ' + err.message)
    } finally {
      setUpdatingLead(null)
    }
  }

  const handleDeleteLead = async (leadId) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return
    
    try {
      const token = localStorage.getItem('adminToken')
      await apiService.deleteLead(leadId, token)
      fetchLeads()
    } catch (err) {
      setError('Failed to delete lead')
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800'
      case 'contacted': return 'bg-yellow-100 text-yellow-800'
      case 'quoted': return 'bg-purple-100 text-purple-800'
      case 'converted': return 'bg-green-100 text-green-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getTypeIcon = (type) => {
    return type === 'quote' ? <Calculator size={16} /> : <MessageSquare size={16} />
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Admin Dashboard - Sanjana Waterproofing</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <span className="text-sm text-gray-500">
                Welcome, {localStorage.getItem('adminUsername')}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
              >
                <Home size={20} />
                <span>View Site</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-600 hover:text-red-900"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('projects')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'projects'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Image size={16} />
                  <span>Projects ({projects.length})</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'services'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Image size={16} />
                  <span>Services ({services.length})</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('leads')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'leads'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <MessageSquare size={16} />
                  <span>Leads ({leads.length})</span>
                </div>
              </button>
            </nav>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            {successMessage}
          </div>
        )}

        {/* Projects Tab Content */}
        {activeTab === 'projects' && (
          <>
            {/* Actions */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold text-gray-900">Projects ({projects.length})</h2>
              <div className="flex space-x-3">
            {projects.length > 0 && (
              <button
                onClick={handleClearAll}
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                <Trash2 size={20} />
                <span>Clear All</span>
              </button>
            )}
            <button
              onClick={handleAddNew}
              className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
            >
              <Plus size={20} />
              <span>Add Project</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-lg">{project.title}</h3>
                  <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                
                <div className="space-y-1 text-xs text-gray-500 mb-4">
                  {project.location && (
                    <div className="flex items-center space-x-1">
                      <MapPin size={12} />
                      <span>{project.location}</span>
                    </div>
                  )}
                  {project.completedDate && (
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(project.completedDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  {project.client && (
                    <div className="flex items-center space-x-1">
                      <User size={12} />
                      <span>{project.client}</span>
                    </div>
                  )}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="flex-1 flex items-center justify-center space-x-1 bg-blue-100 text-blue-600 px-3 py-2 rounded text-sm hover:bg-blue-200"
                  >
                    <Edit size={14} />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="flex-1 flex items-center justify-center space-x-1 bg-red-100 text-red-600 px-3 py-2 rounded text-sm hover:bg-red-200"
                  >
                    <Trash2 size={14} />
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

            {projects.length === 0 && (
              <div className="text-center py-12">
                <Building className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
                <p className="text-gray-500 mb-4">Get started by adding your first project.</p>
                <button
                  onClick={handleAddNew}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
                >
                  Add Project
                </button>
              </div>
            )}
          </>
        )}

        {/* Services Tab Content */}
        {activeTab === 'services' && (
          <>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold text-gray-900">Services ({services.length})</h2>
              <div className="flex space-x-3">
                <button
                  onClick={openAddService}
                  className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
                >
                  <Plus size={20} />
                  <span>Add Service</span>
                </button>
                <button
                  onClick={fetchServices}
                  className="flex items-center space-x-2 bg-white border px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  <RefreshCw size={16} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {servicesLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading services...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc) => (
                  <div key={svc._id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-lg">{svc.title}</h3>
                        <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs">
                          {svc.category}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{svc.description}</p>
                      {Array.isArray(svc.features) && svc.features.length > 0 && (
                        <div className="text-xs text-gray-500 mb-3">
                          Features: {svc.features.slice(0, 3).join(', ')}{svc.features.length > 3 ? '…' : ''}
                        </div>
                      )}
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openEditService(svc)}
                          className="flex-1 flex items-center justify-center space-x-1 bg-blue-100 text-blue-600 px-3 py-2 rounded text-sm hover:bg-blue-200"
                        >
                          <Edit size={14} />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => deleteService(svc._id)}
                          className="flex-1 flex items-center justify-center space-x-1 bg-red-100 text-red-600 px-3 py-2 rounded text-sm hover:bg-red-200"
                        >
                          <Trash2 size={14} />
                          <span>Delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* Leads Tab Content */}
        {activeTab === 'leads' && (
          <>
            {/* Leads Actions */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-semibold text-gray-900">Leads ({leads.length})</h2>
              <div className="flex items-center space-x-4">
                <select
                  value={leadFilter}
                  onChange={(e) => setLeadFilter(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  <option value="all">All Leads</option>
                  <option value="contact">Contact Inquiries</option>
                  <option value="quote">Quote Requests</option>
                </select>
                <button
                  onClick={fetchLeads}
                  className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
                >
                  <RefreshCw size={16} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            {/* Leads List */}
            {leadsLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading leads...</p>
              </div>
            ) : leads.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No leads yet</h3>
                <p className="text-gray-500">Leads will appear here when customers contact you.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {leads.map((lead) => (
                  <div key={lead._id} className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                          {getTypeIcon(lead.type)}
                          <span className="text-sm font-medium text-gray-900">
                            {lead.type === 'quote' ? 'Quote Request' : 'Contact Inquiry'}
                          </span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => handleDeleteLead(lead._id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{lead.name}</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Mail size={14} />
                            <span>{lead.email}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone size={14} />
                            <span>{lead.phone}</span>
                          </div>
                          {lead.location && (
                            <div className="flex items-center space-x-2">
                              <MapPin size={14} />
                              <span>{lead.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div>
                        {lead.type === 'quote' && (
                          <div className="space-y-1 text-sm">
                            {lead.projectType && (
                              <div><strong>Project:</strong> {lead.projectType}</div>
                            )}
                            {lead.timeline && (
                              <div><strong>Timeline:</strong> {lead.timeline}</div>
                            )}
                          </div>
                        )}
                        {lead.subject && (
                          <div className="text-sm">
                            <strong>Subject:</strong> {lead.subject}
                          </div>
                        )}
                      </div>
                    </div>

                    {(lead.message || lead.description) && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                          {lead.message || lead.description}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <select
                          value={lead.status}
                          onChange={(e) => handleUpdateLeadStatus(lead._id, e.target.value)}
                          disabled={updatingLead === lead._id}
                          className={`text-sm border border-gray-300 rounded px-2 py-1 ${
                            updatingLead === lead._id ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="quoted">Quoted</option>
                          <option value="converted">Converted</option>
                          <option value="closed">Closed</option>
                        </select>
                        {updatingLead === lead._id && (
                          <div className="ml-2">
                            <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                          </div>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={`mailto:${lead.email}`}
                          className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <Mail size={14} />
                          <span>Email</span>
                        </a>
                        <a
                          href={`tel:${lead.phone}`}
                          className="flex items-center space-x-1 text-green-600 hover:text-green-800 text-sm"
                        >
                          <Phone size={14} />
                          <span>Call</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Project Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Image</label>
                  
                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="mb-4 relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-lg border border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={clearImage}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}

                  {/* Upload Options */}
                  <div className="space-y-4">
                    {/* File Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Image File
                      </label>
                      <div className="flex items-center space-x-4">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                          disabled={uploadingImage}
                        />
                        <label
                          htmlFor="image-upload"
                          className={`flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${
                            uploadingImage ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          <Upload size={16} />
                          <span>{uploadingImage ? 'Uploading...' : 'Choose File'}</span>
                        </label>
                        {uploadingImage && (
                          <div className="flex items-center space-x-2 text-primary-600">
                            <div className="w-4 h-4 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-sm">Uploading...</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Supported formats: JPEG, PNG, GIF, WebP (Max 5MB)
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">OR</span>
                      </div>
                    </div>

                    {/* URL Input */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Use Image URL
                      </label>
                      <input
                        type="url"
                        value={formData.image}
                        onChange={(e) => handleImageUrlChange(e.target.value)}
                        placeholder="https://example.com/image.jpg"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Enter a direct link to an image
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Completed Date</label>
                    <input
                      type="date"
                      value={formData.completedDate}
                      onChange={(e) => setFormData({...formData, completedDate: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                    <input
                      type="text"
                      value={formData.client}
                      onChange={(e) => setFormData({...formData, client: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
                    <input
                      type="text"
                      value={formData.area}
                      onChange={(e) => setFormData({...formData, area: e.target.value})}
                      placeholder="e.g., 1200 sq ft"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      placeholder="e.g., 5 days"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                  >
                    {editingProject ? 'Update Project' : 'Add Project'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Service Modal */}
      {showServiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                {editingService ? 'Edit Service' : 'Add New Service'}
              </h3>
              <form onSubmit={submitService} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      value={serviceForm.title}
                      onChange={(e) => setServiceForm({...serviceForm, title: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      value={serviceForm.category}
                      onChange={(e) => setServiceForm({...serviceForm, category: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option>Waterproofing</option>
                      <option>Flooring</option>
                      <option>Coating</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    rows={3}
                    value={serviceForm.description}
                    onChange={(e) => setServiceForm({...serviceForm, description: e.target.value})}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Features (comma separated)</label>
                  <input
                    type="text"
                    value={serviceForm.features}
                    onChange={(e) => setServiceForm({...serviceForm, features: e.target.value})}
                    placeholder="e.g., UV Resistant, 15-Year Warranty"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image URL (optional)</label>
                    <input
                      type="url"
                      value={serviceForm.image}
                      onChange={(e) => setServiceForm({...serviceForm, image: e.target.value})}
                      placeholder="https://..."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-2">
                  <button type="button" onClick={() => setShowServiceModal(false)} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">{editingService ? 'Update Service' : 'Add Service'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard
