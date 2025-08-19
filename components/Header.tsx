import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface HeaderProps {
  logoUrl: string
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoUrl} alt="FashionTV Logo" className="h-10" />
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.a
            className="text-pink-500 hover:text-pink-700 transition duration-300"
            href="#about"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.a
            className="text-pink-500 hover:text-pink-700 transition duration-300"
            href="#products"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.a
            className="text-pink-500 hover:text-pink-700 transition duration-300"
            href="#collections"
            whileHover={{ scale: 1.05 }}
          >
            Collections
          </motion.a>
          <motion.a
            className="text-pink-500 hover:text-pink-700 transition duration-300"
            href="#contact"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.a>
        </nav>
        <button
          className="md:hidden text-pink-500 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          Menu
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-md"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
        >
          <div className="flex flex-col space-y-2 p-4">
            <motion.a
              className="text-pink-500 hover:text-pink-700"
              href="#about"
              whileHover={{ scale: 1.05 }}
              onClick={toggleMobileMenu}
            >
              About Us
            </motion.a>
            <motion.a
              className="text-pink-500 hover:text-pink-700"
              href="#products"
              whileHover={{ scale: 1.05 }}
              onClick={toggleMobileMenu}
            >
              Products
            </motion.a>
            <motion.a
              className="text-pink-500 hover:text-pink-700"
              href="#collections"
              whileHover={{ scale: 1.05 }}
              onClick={toggleMobileMenu}
            >
              Collections
            </motion.a>
            <motion.a
              className="text-pink-500 hover:text-pink-700"
              href="#contact"
              whileHover={{ scale: 1.05 }}
              onClick={toggleMobileMenu}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
export default Header;