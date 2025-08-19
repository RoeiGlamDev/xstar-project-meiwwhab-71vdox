import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormData {
  name: string
  email: string
  message: string
  reason: string
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    reason: '',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [submitted, setSubmitted] = useState(false)
  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {}
    if (!formData.name) newErrors.name = 'Name is required.'
    if (!formData.email) newErrors.email = 'Email is required.'
    if (!formData.message) newErrors.message = 'Message is required.'
    if (!formData.reason) newErrors.reason = 'Please select a reason.'
    return newErrors
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors)
    } else {
      console.log('Form submitted', formData)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '', reason: '' })
      setErrors({})
    }
  }
  return (
    <section className="py-12 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-pink-600 text-center mb-8"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Contact FashionTV
        </motion.h2>
        
        <p className="text-center mb-6 text-lg text-gray-700">
          For all luxury fashion inquiries, please fill out the form below.
        </p>

        <form className="bg-pink-50 p-8 rounded-lg shadow-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-pink-600 font-medium" htmlFor="name">
              Name
            </label>
            <input 
              className="mt-1 p-2 border-2 border-pink-300 rounded w-full focus:ring-pink-500 focus:border-pink-500"
              type="text" 
              id="name" 
              value={formData.name} 
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-pink-600 font-medium" htmlFor="email">
              Email
            </label>
            <input 
              className="mt-1 p-2 border-2 border-pink-300 rounded w-full focus:ring-pink-500 focus:border-pink-500"
              type="email" 
              id="email" 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-pink-600 font-medium" htmlFor="reason">
              Reason for Inquiry
            </label>
            <select 
              className="mt-1 p-2 border-2 border-pink-300 rounded w-full focus:ring-pink-500 focus:border-pink-500"
              id="reason" 
              value={formData.reason} 
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })} 
            >
              <option value="">Select a reason...</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Partnership">Partnership</option>
              <option value="Customer Service">Customer Service</option>
            </select>
            {errors.reason && <p className="text-red-500">{errors.reason}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-pink-600 font-medium" htmlFor="message">
              Message
            </label>
            <textarea 
              className="mt-1 p-2 border-2 border-pink-300 rounded w-full focus:ring-pink-500 focus:border-pink-500"
              id="message" 
              rows={4} 
              value={formData.message} 
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          <button 
            className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition duration-200"
            type="submit"
          >
            Send Inquiry
          </button>
        </form>
        
        {submitted && (
          <p className="mt-4 text-center text-green-600">
            Thank you for contacting FashionTV! We will get back to you shortly.
          </p>
        )}

        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-pink-600">FashionTV Business Information</h3>
          <p className="mt-2 text-lg text-gray-700">Location: 123 Fashion Ave, Suite 456</p>
          <p className="mt-2 text-lg text-gray-700">Business Hours: Mon-Fri, 9 AM - 6 PM</p>
        </div>
      </div>
    </section>
  )
}
export default ContactSection;