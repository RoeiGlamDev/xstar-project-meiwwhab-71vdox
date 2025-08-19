import React from 'react'
import { motion } from 'framer-motion'
const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
}
const Page: React.FC = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen flex flex-col bg-white"
    >
      <header className="bg-pink-500 text-white py-6">
        <h1 className="text-4xl font-bold text-center">FashionTV</h1>
      </header>

      <main className="flex-grow">
        <section className="hero bg-pink-300 text-center py-20">
          <h2 className="text-3xl font-semibold text-white">Experience Luxury Like Never Before</h2>
          <p className="mt-4 text-lg text-white px-6">
            Discover the exclusive line of high-end cosmetics crafted for those who value elegance and sophistication.
          </p>
          <button className="mt-8 bg-white text-pink-500 px-6 py-3 rounded shadow-lg transition duration-300 hover:bg-pink-500 hover:text-white">
            Shop Now
          </button>
        </section>

        <section className="features py-20">
          <h2 className="text-4xl font-bold text-center text-pink-500">Our Featured Products</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
              <img src="/images/luxury-lipstick.jpg" alt="Luxury Lipstick" className="w-full h-48 object-cover rounded-t-lg"/>
              <h3 className="text-lg font-semibold text-pink-500 mt-4">Luxury Lipstick</h3>
              <p className="text-gray-600 mt-2 px-4">Elevate your look with our richly pigmented lipstick, designed for the confident woman.</p>
              <button className="mt-4 mb-6 bg-pink-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-pink-600">
                Learn More
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
              <img src="/images/silk-foundation.jpg" alt="Silk Foundation" className="w-full h-48 object-cover rounded-t-lg"/>
              <h3 className="text-lg font-semibold text-pink-500 mt-4">Silk Foundation</h3>
              <p className="text-gray-600 mt-2 px-4">Achieve a flawless complexion with our luxurious silk foundation, perfect for all skin types.</p>
              <button className="mt-4 mb-6 bg-pink-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-pink-600">
                Learn More
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 text-center">
              <img src="/images/glamour-eyeshadow.jpg" alt="Glamour Eyeshadow Palette" className="w-full h-48 object-cover rounded-t-lg"/>
              <h3 className="text-lg font-semibold text-pink-500 mt-4">Glamour Eyeshadow Palette</h3>
              <p className="text-gray-600 mt-2 px-4">Unleash your creativity with our versatile eyeshadow palette, featuring stunning shades.</p>
              <button className="mt-4 mb-6 bg-pink-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-pink-600">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-pink-500 text-white py-6">
        <p className="text-center">© 2023 FashionTV. All Rights Reserved.</p>
      </footer>
    </motion.div>
  )
}
export default Page;