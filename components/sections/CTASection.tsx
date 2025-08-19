import React from 'react'
import { motion } from 'framer-motion'
interface CTASectionProps {
    title: string
    subtitle: string
    buttonText: string
    buttonLink: string
}

const CTASection: React.FC<CTASectionProps> = ({ 
    title = "Elevate Your Beauty with FashionTV",
    subtitle = "Experience the epitome of luxury cosmetics. Discover your signature look with FashionTV.",
    buttonText = "Shop Now",
    buttonLink = "/shop" 
}) => {
    return (
        <section className="flex flex-col items-center justify-center bg-white py-16 px-4 md:px-8">
            <motion.h2 
                className="text-4xl font-bold text-pink-500 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {title}
            </motion.h2>
            <motion.p 
                className="text-lg text-gray-700 text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                {subtitle}
            </motion.p>
            <motion.a 
                href={buttonLink}
                className="bg-pink-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 hover:bg-pink-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {buttonText}
            </motion.a>
        </section>
    )
}
export default CTASection;