import React from 'react'
import { motion } from 'framer-motion'
interface SlideUpProps {
  children: React.ReactNode
  duration?: number
}

const SlideUp: React.FC<SlideUpProps> = ({ children, duration = 0.5 }) => {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration }}
      className="bg-white text-pink-600 p-8 rounded-lg shadow-lg"
      role="region"
      aria-label="Luxury FashionTV Cosmetics"
    >
      {children}
    </motion.div>
  )
}
export default SlideUp;