import React from 'react'
import { motion } from 'framer-motion'
interface CardProps {
  title: string
  description: string
  imageUrl: string
  onClick: () => void
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <motion.div
      className="bg-white/30 backdrop-blur-lg border border-pink-500 rounded-lg p-5 shadow-lg transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onClick()
      }}
      aria-label={View details of ${title}}
    >
      <img src={imageUrl} alt={${title} image} className="w-full h-48 rounded-lg object-cover" />
      <h2 className="text-pink-600 text-2xl font-bold mt-4">{title}</h2>
      <p className="text-gray-700 text-md mt-2">{description}</p>
    </motion.div>
  )
}
export default Card;