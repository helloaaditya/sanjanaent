import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Plus, Edit, Trash2, Eye, LogOut, Home, Image, Calendar, MapPin, User, Building, Upload, X, MessageSquare, Phone, Mail, Filter, CheckCircle, Clock, AlertCircle, RefreshCw, Calculator, Settings, BarChart3, Search, Menu, X as CloseIcon, ChevronDown, Star, TrendingUp, Users, Briefcase } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import apiService from '../services/api'

const AdminDashboard = () => {
  const [projects, setProjects] = useState([])
  const [services, setServices] = useState([])
  const [testimonials, setTestimonials] = useState([])
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
  const [testimonialsLoading, setTestimonialsLoading] = useState(false)
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [serviceForm, setServiceForm] = useState({
    title: '',
    description: '',
    category: 'Waterproofing',
    features: '',
    image: ''
  })
  const [testimonialSearch, setTestimonialSearch] = useState('')
  const [projectSearch, setProjectSearch] = useState('')
  const [serviceSearch, setServiceSearch] = useState('')
  const [leadFilter, setLeadFilter] = useState('all')
  const [updatingLead, setUpdatingLead] = useState(null)
  const [successMessage, setSuccessMessage] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [autoRefreshInterval, setAutoRefreshInterval] = useState(null)
  const [lastRefreshTime, setLastRefreshTime] = useState(null)
  const [newLeadsCount, setNewLeadsCount] = useState(0)
  const [showNewLeadsNotification, setShowNewLeadsNotification] = useState(false)
  const [autoRefreshEnabled, setAutoRefreshEnabled] = useState(true)
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
    fetchTestimonials()
  }, [navigate])

  // Fetch leads when tab changes or filter changes
  useEffect(() => {
    if (activeTab === 'leads') {
      fetchLeads()
    }
    if (activeTab === 'testimonials') {
      fetchTestimonials()
    }
  }, [activeTab, leadFilter])

  // Auto-refresh leads every 30 seconds when on leads tab
  useEffect(() => {
    if (activeTab === 'leads' && autoRefreshEnabled) {
      // Clear any existing interval
      if (autoRefreshInterval) {
        clearInterval(autoRefreshInterval)
      }
      
      // Set up new interval
      const interval = setInterval(() => {
        fetchLeads(true) // Pass true for auto-refresh
      }, 30000) // 30 seconds
      
      setAutoRefreshInterval(interval)
      
      // Cleanup on unmount or tab change
      return () => {
        clearInterval(interval)
        setAutoRefreshInterval(null)
      }
    } else {
      // Clear interval when not on leads tab or auto-refresh disabled
      if (autoRefreshInterval) {
        clearInterval(autoRefreshInterval)
        setAutoRefreshInterval(null)
      }
    }
  }, [activeTab, autoRefreshEnabled])

  // Cleanup interval on component unmount
  useEffect(() => {
    return () => {
      if (autoRefreshInterval) {
        clearInterval(autoRefreshInterval)
      }
    }
  }, [])

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

  const fetchTestimonials = async () => {
    try {
      setTestimonialsLoading(true)
      const token = localStorage.getItem('adminToken')
      const data = await apiService.adminGetTestimonials(token, {})
      setTestimonials(data || [])
    } catch (err) {
      console.error('Fetch testimonials error:', err)
      // Auto-logout on auth errors
      if (err.status === 401 || err.status === 403) {
        try { localStorage.removeItem('adminToken') } catch {}
        navigate('/admin/login')
        return
      }
    } finally {
      setTestimonialsLoading(false)
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

  const fetchLeads = async (isAutoRefresh = false) => {
    try {
      if (!isAutoRefresh) {
      setLeadsLoading(true)
      }
      const token = localStorage.getItem('adminToken')
      const filters = leadFilter !== 'all' ? { type: leadFilter } : {}
      console.log('Fetching leads with filters:', filters)
      const data = await apiService.getLeads(token, filters)
      console.log('Fetched leads:', data)
      
      // Check for new leads during auto-refresh
      if (isAutoRefresh && leads.length > 0) {
        const newLeads = data.filter(newLead => 
          !leads.some(existingLead => existingLead._id === newLead._id)
        )
        if (newLeads.length > 0) {
          setNewLeadsCount(newLeads.length)
          setShowNewLeadsNotification(true)
          // Auto-hide notification after 5 seconds
          setTimeout(() => {
            setShowNewLeadsNotification(false)
            setNewLeadsCount(0)
          }, 5000)
        }
      }
      
      setLeads(data)
      setLastRefreshTime(new Date())
    } catch (err) {
      console.error('Fetch leads error:', err)
      if (!isAutoRefresh) {
      setError('Failed to fetch leads: ' + err.message)
      }
    } finally {
      if (!isAutoRefresh) {
      setLeadsLoading(false)
      }
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
        const res = await apiService.updateService(editingService._id, payload, token)
        if (res && res.status === 401) {
          handleLogout(); return
        }
      } else {
        const res = await apiService.createService(payload, token)
        if (res && res.status === 401) {
          handleLogout(); return
        }
      }
      setShowServiceModal(false)
      setEditingService(null)
      await fetchServices()
      setSuccessMessage('Service saved successfully')
      setTimeout(() => setSuccessMessage(''), 2500)
    } catch (err) {
      setError('Failed to save service: ' + (err?.message || 'Unknown error'))
    }
  }

  const deleteService = async (id) => {
    if (!window.confirm('Delete this service?')) return
    try {
      const token = localStorage.getItem('adminToken')
      const res = await apiService.deleteService(id, token)
      if (res && res.status === 401) { handleLogout(); return }
      await fetchServices()
    } catch (err) {
      setError('Failed to delete service: ' + (err?.message || 'Unknown error'))
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
        ? `${import.meta.env.VITE_API_BASE_URL}/admin/projects/${editingProject._id}`
        : `${import.meta.env.VITE_API_BASE_URL}/admin/projects`
      
      const method = editingProject ? 'PUT' : 'POST'
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (response.status === 401) {
        handleLogout();
        return
      }

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
        const msg = await response.text().catch(() => '')
        setError(`Failed to save project (${response.status}): ${msg || 'Unexpected error'}`)
      }
    } catch (err) {
      setError('Failed to save project: ' + (err?.message || 'Unknown error'))
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
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.status === 401) { handleLogout(); return }

      if (response.ok) {
        fetchProjects()
      } else {
        const msg = await response.text().catch(() => '')
        setError(`Failed to delete project (${response.status}): ${msg || 'Unexpected error'}`)
      }
    } catch (err) {
      setError('Failed to delete project: ' + (err?.message || 'Unknown error'))
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
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/admin/projects/clear`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.status === 401) { handleLogout(); return }

      if (response.ok) {
        fetchProjects()
        setError('')
      } else {
        const msg = await response.text().catch(() => '')
        setError(`Failed to clear projects (${response.status}): ${msg || 'Unexpected error'}`)
      }
    } catch (err) {
      setError('Failed to clear projects: ' + (err?.message || 'Unknown error'))
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

  // Derived filtered lists
  const filteredProjects = projects.filter((p) => {
    const q = projectSearch.trim().toLowerCase()
    if (!q) return true
  return (
      (p.title || '').toLowerCase().includes(q) ||
      (p.category || '').toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q) ||
      (p.location || '').toLowerCase().includes(q)
    )
  })
  const filteredServices = services.filter((s) => {
    const q = serviceSearch.trim().toLowerCase()
    if (!q) return true
    return (
      (s.title || '').toLowerCase().includes(q) ||
      (s.category || '').toLowerCase().includes(q) ||
      (s.description || '').toLowerCase().includes(q)
    )
  })

  const filteredTestimonials = testimonials.filter((t) => {
    const q = testimonialSearch.trim().toLowerCase()
    if (!q) return true
    return (
      (t.name || '').toLowerCase().includes(q) ||
      (t.message || '').toLowerCase().includes(q) ||
      String(t.rating || '').includes(q) ||
      (t.status || '').toLowerCase().includes(q)
    )
  })

  // Enhanced stats with icons and trends
  const stats = [
    { 
      label: 'Total Projects', 
      value: projects.length, 
      icon: Building, 
      color: 'blue',
      trend: '+12%',
      change: 'positive'
    },
    { 
      label: 'Active Services', 
      value: services.length, 
      icon: Briefcase, 
      color: 'green',
      trend: '+8%',
      change: 'positive'
    },
    { 
      label: 'New Leads', 
      value: leads.length, 
      icon: Users, 
      color: 'purple',
      trend: '+23%',
      change: 'positive'
    },
   
  ]

  // Navigation items
  const navigationItems = [
    { id: 'projects', label: 'Projects', icon: Image, count: projects.length },
    { id: 'services', label: 'Services', icon: Briefcase, count: services.length },
    { id: 'leads', label: 'Leads', icon: MessageSquare, count: leads.length },
    { id: 'testimonials', label: 'Testimonials', icon: Star, count: testimonials.length },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Helmet>
        <title>Admin Dashboard - Sanjana Waterproofing</title>
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          @keyframes slide-in-right {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slide-in-right {
            animation: slide-in-right 0.3s ease-out;
          }
        `}</style>
      </Helmet>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white/95 backdrop-blur-lg border-r border-gray-200/50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Admin</h1>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                    activeTab === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    activeTab === item.id
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {item.count}
              </span>
                </button>
              )
            })}
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-gray-200/50">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
            </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{localStorage.getItem('adminUsername')}</p>
                <p className="text-xs text-gray-500">Administrator</p>
              </div>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => navigate('/')}
                className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                <span className="text-sm">View Site</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top bar */}
        <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
              <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
                >
                  <Menu className="w-5 h-5" />
              </button>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 capitalize">{activeTab}</h2>
                  <p className="text-sm text-gray-500">Manage your {activeTab} efficiently</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                {/* Notifications */}
              <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 rounded-lg hover:bg-gray-100"
                >
                  <MessageSquare className="w-5 h-5 text-gray-600" />
                  {leads.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {leads.length}
                    </span>
                  )}
              </button>
              </div>
            </div>
          </div>
        </header>

        {/* New Leads Notification */}
        {showNewLeadsNotification && (
          <div className="fixed top-20 right-4 z-50 animate-slide-in-right">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-lg border border-green-200">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold">New Lead{newLeadsCount > 1 ? 's' : ''} Detected!</p>
                  <p className="text-sm opacity-90">{newLeadsCount} new lead{newLeadsCount > 1 ? 's' : ''} added</p>
                </div>
              <button
                  onClick={() => setShowNewLeadsNotification(false)}
                  className="ml-4 text-white/80 hover:text-white"
                >
                  <X className="w-5 h-5" />
              </button>
          </div>
        </div>
          </div>
        )}

        <div className="p-6">
          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              const colorClasses = {
                blue: 'from-blue-500 to-blue-600',
                green: 'from-green-500 to-green-600',
                purple: 'from-purple-500 to-purple-600',
                orange: 'from-orange-500 to-orange-600'
              }
              return (
                <div key={stat.label} className="group relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          stat.change === 'positive' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {stat.trend}
                        </span>
                      </div>
                    </div>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[stat.color]} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[stat.color]} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              )
            })}
          </div>
          {/* Content Area */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">

        {/* Error Message */}
        {error && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 m-6 rounded-r-lg">
                <div className="flex">
                  <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                  <p className="text-red-700">{error}</p>
                </div>
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
              <div className="bg-green-50 border-l-4 border-green-400 p-4 m-6 rounded-r-lg">
                <div className="flex">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <p className="text-green-700">{successMessage}</p>
                </div>
          </div>
        )}

        {/* Projects Tab Content */}
        {activeTab === 'projects' && (
              <div className="p-6">
                {/* Enhanced Toolbar */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Image className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
                        <p className="text-sm text-gray-500">{projects.length} total projects</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={projectSearch}
                        onChange={(e) => setProjectSearch(e.target.value)}
                        placeholder="Search projects..."
                        className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="flex space-x-2">
            {projects.length > 0 && (
              <button
                onClick={handleClearAll}
                          className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                          <Trash2 size={16} />
                <span>Clear All</span>
              </button>
            )}
            <button
              onClick={handleAddNew}
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
                        <Plus size={16} />
              <span>Add Project</span>
            </button>
                    </div>
          </div>
        </div>

                {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <div key={project._id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-6">
                        <div className="mb-3">
                          <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1">{project.title}</h3>
                          <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>
                        </div>
                        
                        <div className="space-y-2 text-xs text-gray-500 mb-4">
                  {project.location && (
                            <div className="flex items-center space-x-2">
                              <MapPin size={14} className="text-blue-500" />
                      <span>{project.location}</span>
                    </div>
                  )}
                  {project.completedDate && (
                            <div className="flex items-center space-x-2">
                              <Calendar size={14} className="text-green-500" />
                      <span>{new Date(project.completedDate).toLocaleDateString()}</span>
                    </div>
                  )}
                  {project.client && (
                            <div className="flex items-center space-x-2">
                              <User size={14} className="text-purple-500" />
                      <span>{project.client}</span>
                    </div>
                  )}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(project)}
                            className="flex-1 flex items-center justify-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <Edit size={14} />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDelete(project._id)}
                            className="flex-1 flex items-center justify-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Building className="w-12 h-12 text-blue-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects yet</h3>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">Get started by adding your first project to showcase your work.</p>
                <button
                  onClick={handleAddNew}
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                      <Plus className="w-5 h-5 inline mr-2" />
                      Add Your First Project
                </button>
              </div>
            )}
              </div>
        )}

        {/* Services Tab Content */}
        {activeTab === 'services' && (
              <div className="p-6">
                {/* Enhanced Toolbar */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Briefcase className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Services</h2>
                        <p className="text-sm text-gray-500">{services.length} active services</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        value={serviceSearch}
                        onChange={(e) => setServiceSearch(e.target.value)}
                        placeholder="Search services..."
                        className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div className="flex space-x-2">
                <button
                  onClick={fetchServices}
                        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <RefreshCw size={16} />
                  <span>Refresh</span>
                </button>
                      <button
                        onClick={openAddService}
                        className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        <Plus size={16} />
                        <span>Add Service</span>
                      </button>
                    </div>
              </div>
            </div>

            {servicesLoading ? (
                  <div className="text-center py-16">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading services...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.map((svc) => (
                      <div key={svc._id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="font-bold text-gray-900 text-lg mb-2">{svc.title}</h3>
                              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                          {svc.category}
                        </span>
                      </div>
                            {svc.image && (
                              <div className="w-16 h-16 rounded-lg overflow-hidden ml-4">
                                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
                              </div>
                            )}
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{svc.description}</p>
                          
                      {Array.isArray(svc.features) && svc.features.length > 0 && (
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-1">
                                {svc.features.slice(0, 3).map((feature, index) => (
                                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                    {feature}
                                  </span>
                                ))}
                                {svc.features.length > 3 && (
                                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                    +{svc.features.length - 3} more
                                  </span>
                                )}
                              </div>
                        </div>
                      )}
                          
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openEditService(svc)}
                              className="flex-1 flex items-center justify-center space-x-2 bg-blue-50 hover:bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          <Edit size={14} />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => deleteService(svc._id)}
                              className="flex-1 flex items-center justify-center space-x-2 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
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
              </div>
        )}

        {/* Leads Tab Content */}
        {activeTab === 'leads' && (
              <div className="p-6">
                {/* Enhanced Toolbar */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <MessageSquare className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Leads</h2>
                        <p className="text-sm text-gray-500">{leads.length} total leads</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                <select
                  value={leadFilter}
                  onChange={(e) => setLeadFilter(e.target.value)}
                      className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="all">All Leads</option>
                  <option value="contact">Contact Inquiries</option>
                  <option value="quote">Quote Requests</option>
                </select>
                    
                <button
                      onClick={() => setAutoRefreshEnabled(!autoRefreshEnabled)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        autoRefreshEnabled
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${autoRefreshEnabled ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                      <span className="text-sm font-medium">
                        {autoRefreshEnabled ? 'Auto-refresh ON' : 'Auto-refresh OFF'}
                      </span>
                    </button>
                    
                    <button
                      onClick={() => fetchLeads(false)}
                      className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <RefreshCw size={16} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

                {/* Auto-refresh indicator */}
                {autoRefreshEnabled && (
                  <div className="flex items-center justify-between mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">Auto-refresh active</span>
                      </div>
                      <span className="text-xs text-gray-500">• Updates every 30 seconds</span>
                      {newLeadsCount > 0 && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                          +{newLeadsCount} new
                        </span>
                      )}
                    </div>
                    {lastRefreshTime && (
                      <div className="text-xs text-gray-500">
                        Last updated: {lastRefreshTime.toLocaleTimeString()}
                      </div>
                    )}
                  </div>
                )}

                {/* Enhanced Leads List */}
            {leadsLoading ? (
                  <div className="text-center py-16">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading leads...</p>
              </div>
            ) : leads.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <MessageSquare className="w-12 h-12 text-purple-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">No leads yet</h3>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto">Leads will appear here when customers contact you through your website.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {leads.map((lead) => (
                      <div key={lead._id} className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                              <User className="w-6 h-6 text-purple-600" />
                            </div>
                            <div>
                              <div className="flex items-center space-x-3 mb-2">
                          {getTypeIcon(lead.type)}
                                <span className="text-lg font-bold text-gray-900">
                            {lead.type === 'quote' ? 'Quote Request' : 'Contact Inquiry'}
                          </span>
                        </div>
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </div>
                          </div>
                          <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </span>
                        <button
                          onClick={() => handleDeleteLead(lead._id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
              </div>
        )}

        {/* Testimonials Tab Content */}
        {activeTab === 'testimonials' && (
          <div className="p-6">
            {/* Toolbar */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Testimonials</h2>
                    <p className="text-sm text-gray-500">{testimonials.length} submissions</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={testimonialSearch}
                    onChange={(e) => setTestimonialSearch(e.target.value)}
                    placeholder="Search testimonials..."
                    className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={fetchTestimonials}
                    className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <RefreshCw size={16} />
                    <span>Refresh</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-white rounded-2xl shadow border border-gray-100">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {testimonialsLoading ? (
                    <tr><td className="px-4 py-3 text-gray-500" colSpan={5}>Loading...</td></tr>
                  ) : filteredTestimonials.length === 0 ? (
                    <tr><td className="px-4 py-3 text-gray-500" colSpan={5}>No testimonials found.</td></tr>
                  ) : (
                    filteredTestimonials.map((t) => (
                      <tr key={t._id}>
                        <td className="px-4 py-3 font-medium text-gray-900">{t.name}</td>
                        <td className="px-4 py-3">{t.rating} / 5</td>
                        <td className="px-4 py-3 text-gray-700 max-w-xl truncate">{t.message}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${t.status === 'approved' ? 'bg-green-100 text-green-700' : t.status === 'rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{t.status}</span>
                        </td>
                        <td className="px-4 py-3 text-right space-x-2">
                          <button
                            onClick={async () => { const token = localStorage.getItem('adminToken'); await apiService.adminUpdateTestimonial(t._id, { status: 'approved' }, token); fetchTestimonials() }}
                            className="px-3 py-1.5 rounded bg-green-600 text-white text-sm hover:bg-green-700"
                          >Approve</button>
                          <button
                            onClick={async () => { const token = localStorage.getItem('adminToken'); await apiService.adminUpdateTestimonial(t._id, { status: 'rejected' }, token); fetchTestimonials() }}
                            className="px-3 py-1.5 rounded bg-yellow-600 text-white text-sm hover:bg-yellow-700"
                          >Reject</button>
                          <button
                            onClick={async () => { const token = localStorage.getItem('adminToken'); await apiService.adminDeleteTestimonial(t._id, token); fetchTestimonials() }}
                            className="px-3 py-1.5 rounded bg-red-600 text-white text-sm hover:bg-red-700"
                          >Delete</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
          </div>
        </div>
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
