import React from 'react'
import { motion } from 'framer-motion'
interface HeroSectionProps {
  headline: string
  subheading: string
  ctaText: string
  ctaLink: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  headline, 
  subheading, 
  ctaText, 
  ctaLink 
}) => {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-r from-pink-500 to-white">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }} 
        className="absolute top-0 left-0 w-full h-full bg-opacity-50 z-10"
      ></motion.div>
      <div className="relative z-20 text-center p-6">
        <motion.h1 
          className="text-6xl font-bold text-pink-700 mb-4" 
          initial={{ y: -50 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          Welcome to FashionTV
        </motion.h1>
        <motion.p 
          className="text-xl text-white mb-8 max-w-2xl mx-auto" 
          initial={{ y: 50 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.5 }}
        >
          At FashionTV, we redefine elegance and luxury in cosmetics, providing high-end beauty solutions tailored for the fashion-forward.
        </motion.p>
        <motion.a 
          href={ctaLink} 
          className="inline-block px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400" 
          initial={{ scale: 0.8 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          {ctaText}
        </motion.a>
      </div>
    </div>
  )
}
export default HeroSection;