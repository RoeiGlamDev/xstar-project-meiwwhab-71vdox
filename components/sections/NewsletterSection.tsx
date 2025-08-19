import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface NewsletterProps {
  title: string
  description: string
}

const NewsletterSection: React.FC<NewsletterProps> = ({ title, description }) => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically handle email submission (e.g., API call)
    setIsSubmitted(true)
  }
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold text-pink-500 mb-4"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 mb-6"
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          {description}
        </motion.p>

        {isSubmitted ? (
          <motion.div 
            className="text-lg text-green-500"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            Thank you for subscribing to FashionTV! Stay tuned for exclusive updates.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-2 mb-4 sm:mb-0 sm:mr-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <motion.button 
              type="submit" 
              className="bg-pink-500 text-white px-6 py-2 rounded-lg transition duration-300 hover:bg-pink-600 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Subscribe
            </motion.button>
          </form>
        )}
      </div>
    </section>
  )
}
export default NewsletterSection;