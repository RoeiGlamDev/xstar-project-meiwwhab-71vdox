import React from 'react'
import { motion } from 'framer-motion'
interface FooterProps {
  companyName: string
  socialLinks: { platform: string; url: string }[]
}

const Footer: React.FC<FooterProps> = () => {
  const socialLinks = [
    { platform: 'Instagram', url: 'https://instagram.com/FashionTV' },
    { platform: 'Facebook', url: 'https://facebook.com/FashionTV' },
    { platform: 'Twitter', url: 'https://twitter.com/FashionTV' },
    { platform: 'Pinterest', url: 'https://pinterest.com/FashionTV' },
  ]
  return (
    <footer className="bg-white text-pink-500 px-6 py-8">
      <div className="container mx-auto flex flex-col items-center">
        <motion.h2
          className="text-3xl mb-4 font-serif font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          FashionTV
        </motion.h2>
        <motionul
          className="flex space-x-6 mb-4"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <li>
            <a href="/about" className="hover:text-pink-700 transition">
              About Us
            </a>
          </li>
          <li>
            <a href="/shop" className="hover:text-pink-700 transition">
              Shop
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-pink-700 transition">
              Contact
            </a>
          </li>
          <li>
            <a href="/faq" className="hover:text-pink-700 transition">
              FAQ
            </a>
          </li>
        </motionul>
        <div className="text-center mb-6">
          <p className="text-sm">
            © {new Date().getFullYear()} FashionTV. All rights reserved.
          </p>
          <p className="text-sm">
            A luxury cosmetics line bringing you unparalleled quality and style.
          </p>
        </div>
        <motion.div
          className="flex space-x-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition"
            >
              {link.platform}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
export default Footer;