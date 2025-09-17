import { useState, useEffect } from 'react'
import apiService from '../services/api'

export const useProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProjects = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await apiService.getProjects()
      setProjects(data)
    } catch (err) {
      setError(err.message)
      console.error('Failed to fetch projects:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects
  }
}

export const useProjectsByCategory = (category) => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchProjects = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = category === 'All' 
        ? await apiService.getProjects()
        : await apiService.getProjectsByCategory(category)
      setProjects(data)
    } catch (err) {
      setError(err.message)
      console.error('Failed to fetch projects:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [category])

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects
  }
}

export const useCategories = () => {
  const [categories, setCategories] = useState(['All'])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCategories = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await apiService.getCategories()
      setCategories(['All', ...data])
    } catch (err) {
      setError(err.message)
      console.error('Failed to fetch categories:', err)
      // Fallback to default categories
      setCategories(['All', 'Residential', 'Commercial', 'Industrial'])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return {
    categories,
    loading,
    error,
    refetch: fetchCategories
  }
}
