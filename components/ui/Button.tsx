import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  children: ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseStyles = 'px-6 py-3 rounded transition duration-300 ease-in-out focus:outline-none'
  const primaryStyles = 'bg-pink-500 text-white hover:bg-pink-600 active:bg-pink-700'
  const secondaryStyles = 'bg-white text-pink-500 border border-pink-500 hover:bg-pink-100 active:bg-pink-200'
  const styles = variant === 'primary' ? primaryStyles : secondaryStyles
  return (
    <motion.button
      className={${baseStyles} ${styles}}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={variant === 'primary' ? 'Shop Now' : 'View More'}
    >
      {children}
    </motion.button>
  )
}
export default Button;