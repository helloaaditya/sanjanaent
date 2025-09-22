import React, { useEffect, useState } from 'react'
import { Star, Send, Loader2, CheckCircle2, AlertCircle, MessageSquare, X } from 'lucide-react'
import apiService from '../services/api'

const StarRating = ({ value, onChange, size = 18 }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1,2,3,4,5].map((i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange?.(i)}
          className="text-yellow-400 hover:scale-110 transition-transform"
          aria-label={`${i} star`}
        >
          <Star size={size} fill={i <= value ? 'currentColor' : 'none'} />
        </button>
      ))}
    </div>
  )
}

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

const Testimonials = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', message: '', rating: 5 })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const fetchTestimonials = async () => {
    try {
      setLoading(true)
      const data = await apiService.getTestimonials()
      setItems(data || [])
    } catch (err) {
      console.error(err)
      setError('Failed to load testimonials')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchTestimonials() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    if (!form.name.trim() || !form.message.trim()) {
      setError('Please enter your name and feedback')
      return
    }
    try {
      setSubmitting(true)
      await apiService.submitTestimonial({
        name: form.name.trim(),
        message: form.message.trim(),
        rating: form.rating,
      })
      setSuccess('Thanks! Your feedback was submitted for approval.')
      setForm({ name: '', message: '', rating: 5 })
      setTimeout(() => {
        setIsModalOpen(false)
        setSuccess('')
      }, 2000)
    } catch (err) {
      console.error(err)
      setError('Failed to submit. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setError('')
    setSuccess('')
  }

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">What Our Clients Say</h2>
            <p className="text-gray-600 mt-2">Real feedback from satisfied customers.</p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            <MessageSquare className="mr-2" size={18} />
            Give Feedback
          </button>
        </div>

        {/* Testimonials List */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-full flex items-center justify-center text-gray-500 py-12">
              <Loader2 className="animate-spin mr-2" /> Loading testimonials...
            </div>
          ) : items.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-12">No testimonials yet.</div>
          ) : (
            items.map((t) => (
              <div key={t._id} className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <div className="flex items-center text-yellow-500">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} size={16} fill={i <= (t.rating || 0) ? 'currentColor' : 'none'} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{t.message}</p>
              </div>
            ))
          )}
        </div>

        {/* Feedback Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Share Your Feedback</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {error && (
              <div className="flex items-center text-red-600 mb-4 p-3 bg-red-50 rounded-lg">
                <AlertCircle className="mr-2 flex-shrink-0" size={18} /> 
                {error}
              </div>
            )}
            {success && (
              <div className="flex items-center text-green-600 mb-4 p-3 bg-green-50 rounded-lg">
                <CheckCircle2 className="mr-2 flex-shrink-0" size={18} /> 
                {success}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <StarRating value={form.rating} onChange={(r) => setForm((f) => ({ ...f, rating: r }))} size={20} />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your experience with our services..."
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg disabled:opacity-60 transition-colors duration-200"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={18} />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Submit Feedback
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </section>
  )
}

export default Testimonials