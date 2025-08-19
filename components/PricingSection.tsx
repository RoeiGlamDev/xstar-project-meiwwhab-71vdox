import React from 'react'
import { motion } from 'framer-motion'
interface PricingTier {
  name: string
  price: string
  features: string[]
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic Glam',
    price: '$50',
    features: [
      'One Fashion Consultation',
      'Style Guide PDF',
      'Follow-Up Email Support',
    ],
  },
  {
    name: 'Signature Style',
    price: '$120',
    features: [
      'Two Fashion Consultations',
      'Custom Style Wardrobe Plan',
      'Personal Shopping Experience',
      'Exclusive Fashion Trends Newsletter',
    ],
  },
  {
    name: 'Luxury Experience',
    price: '$250',
    features: [
      'Unlimited Consultations',
      'Personalized Style Wardrobe',
      'VIP Shopping Experience',
      'Private Fashion Show Invitations',
      'Monthly Style Updates',
    ],
  },
]
const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-16" id="pricing">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-8">FashionTV Pricing</h2>
        <p className="text-lg text-gray-700 mb-12">
          Discover our exclusive pricing tiers tailored for the discerning fashionista.
        </p>
        <div className="flex justify-center space-x-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-pink-100 border border-pink-600 rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">{tier.name}</h3>
              <p className="text-xl font-bold text-pink-700 mb-4">{tier.price}</p>
              <ul className="list-disc list-inside mb-6">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-800">{feature}</li>
                ))}
              </ul>
              <button className="bg-pink-600 text-white font-semibold py-2 px-4 rounded shadow hover:bg-pink-500 transition duration-300">
                Choose {tier.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default PricingSection;