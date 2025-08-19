import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface ContactFormProps {
  name: string
  email: string
  message: string
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormProps>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    setSubmitted(true)
  }
  return (
    <div className="flex flex-col items-center justify-center bg-white p-10">
      <motion.h1
        className="text-4xl font-bold text-pink-500 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact FashionTV
      </motion.h1>
      <p className="text-lg text-gray-700 mb-6">We'd love to hear from you! Please fill out the form below to get in touch.</p>
      
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <div className="mb-4">
          <label className="block text-pink-500 font-semibold mb-2" htmlFor="name">Name</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-pink-500"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-pink-500 font-semibold mb-2" htmlFor="email">Email</label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-pink-500"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-pink-500 font-semibold mb-2" htmlFor="message">Message</label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-pink-500"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <motion.button
          type="submit"
          className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-400 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>

      {submitted && (
        <motion.div
          className="mt-6 text-green-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for contacting FashionTV! We will get back to you shortly.
        </motion.div>
      )}

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-pink-500 mb-4">Our Location</h2>
        <p className="text-lg text-gray-700">FashionTV Headquarters<br />123 Luxury Ave,<br />Paris, France</p>
        <h2 className="text-2xl font-bold text-pink-500 mt-6 mb-4">Business Hours</h2>
        <p className="text-lg text-gray-700">Monday - Friday: 9 AM - 6 PM<br />Saturday: 10 AM - 4 PM<br />Closed on Sundays</p>
      </div>
    </div>
  )
}
export default ContactPage;