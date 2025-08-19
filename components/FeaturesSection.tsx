import React from 'react'
import { motion } from 'framer-motion'
interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Exclusive Collections',
    description: 'Discover our exclusive range of luxury cosmetics, thoughtfully curated for the modern connoisseur.',
    icon: '💄',
  },
  {
    id: 2,
    title: 'Premium Ingredients',
    description: 'Each product is crafted with the finest ingredients, ensuring a lavish experience for your skin.',
    icon: '🌼',
  },
  {
    id: 3,
    title: 'Personalized Recommendations',
    description: 'Enjoy personalized beauty consultations tailored to your unique style and preferences.',
    icon: '✨',
  },
  {
    id: 4,
    title: 'Sustainable Luxury',
    description: 'Our commitment to sustainability ensures you look good while feeling good about your choices.',
    icon: '♻️',
  },
]
const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-600 mb-8">
          FashionTV Luxury Cosmetics Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="bg-pink-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-pink-600">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default FeaturesSection;