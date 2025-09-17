import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Star, ArrowRight, Shield, Award, AlertCircle, MessageCircle, Users, Calendar, Zap } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    area: '',
    message: '',
    urgency: 'normal'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service type'
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsLoading(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        area: '',
        message: '',
        urgency: 'normal'
      })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error('Submission failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      subtitle: 'Speak with our experts',
      value: '+91 9916290799',
      action: 'tel:+919916290799',
      description: '24/7 Emergency Support',
      color: 'bg-emerald-500',
      hoverColor: 'hover:bg-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      subtitle: 'Quick response guaranteed',
      value: '+91 9916290799',
      action: 'https://wa.me/919916290799',
      description: 'Instant consultation',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Detailed project discussion',
      value: 'info@sanjanaenterprises.com',
      action: 'mailto:info@sanjanaenterprises.com',
      description: 'Response within 2 hours',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    }
  ]

  const services = [
    'Roof Waterproofing',
    'Basement Waterproofing', 
    'Bathroom Waterproofing',
    'Terrace Waterproofing',
    'Swimming Pool Waterproofing',
    'Industrial Flooring',
    'Epoxy Flooring',
    'PU Flooring',
    'Sports Flooring',
    'Wall Coating & Painting',
    'Chemical Resistant Flooring',
    'Other Services'
  ]


  const FormField = ({ label, name, type = 'text', required = false, placeholder, options = null, rows = null }) => (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-800">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {type === 'select' ? (
        <select
          name={name}
          required={required}
          value={formData[name]}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-white ${
            errors[name] ? 'border-red-300 ring-1 ring-red-200' : 'border-gray-200'
          }`}
        >
          <option value="">{placeholder}</option>
          {options?.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          name={name}
          rows={rows || 4}
          required={required}
          value={formData[name]}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-gray-900 bg-white ${
            errors[name] ? 'border-red-300 ring-1 ring-red-200' : 'border-gray-200'
          }`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          value={formData[name]}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-white ${
            errors[name] ? 'border-red-300 ring-1 ring-red-200' : 'border-gray-200'
          }`}
          placeholder={placeholder}
        />
      )}
      {errors[name] && (
        <div className="flex items-center space-x-2 text-red-600">
          <AlertCircle size={16} />
          <span className="text-sm font-medium">{errors[name]}</span>
        </div>
      )}
    </div>
  )

  return (
    <section className="py-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
            <Phone size={16} className="mr-2" />
            Contact Our Experts
          </div>
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Your <span className="text-blue-600">Free Quote</span>
            <br />
            <span className="text-gray-600 text-3xl md:text-4xl lg:text-5xl">in 24 Hours</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join 500+ satisfied customers who trust our waterproofing expertise. 
            Get professional consultation and detailed pricing for your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Start?</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose your preferred way to connect with our waterproofing specialists.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="block group"
                >
                  <div className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`${method.color} ${method.hoverColor} w-12 h-12 rounded-lg flex items-center justify-center text-white transition-colors`}>
                        <method.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{method.title}</h4>
                        <p className="text-sm text-gray-600 mb-2">{method.subtitle}</p>
                        <p className="font-semibold text-gray-800">{method.value}</p>
                        <p className="text-xs text-gray-500">{method.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Your Free Quote</h3>
                <p className="text-gray-600">
                  Fill out this form and our team will contact you within 24 hours with a detailed quote.
                </p>
              </div>
              
              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <div>
                    <h4 className="font-semibold text-green-800">Quote Request Submitted!</h4>
                    <p className="text-green-700 text-sm">We'll contact you within 24 hours with your detailed quote.</p>
                  </div>
                </div>
              )}

              <div onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    label="Full Name"
                    name="name"
                    required={true}
                    placeholder="Your full name"
                  />
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    required={true}
                    placeholder="Your phone number"
                  />
                </div>

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Your email address (optional)"
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    label="Service Required"
                    name="service"
                    type="select"
                    required={true}
                    placeholder="Select service type"
                    options={services}
                  />
                  <FormField
                    label="Project Area"
                    name="area"
                    type="number"
                    placeholder="Area in sq.ft (approximate)"
                  />
                </div>

                <FormField
                  label="Project Urgency"
                  name="urgency"
                  type="select"
                  options={['Normal (1-2 weeks)', 'Urgent (Within 1 week)', 'Emergency (ASAP)']}
                  placeholder="Select urgency level"
                />

                <FormField
                  label="Project Details"
                  name="message"
                  type="textarea"
                  rows={4}
                  placeholder="Tell us about your project: location, specific requirements, timeline, budget range, etc."
                />

                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-white ${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Processing Request...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Get My Free Quote
                      <ArrowRight size={20} className="ml-2" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-gray-500">
                  By submitting this form, you agree to receive communications from our team. 
                  Your information is secure and never shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
        
    </section>
  )
}

export default Contact