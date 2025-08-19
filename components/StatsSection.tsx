import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
interface Stats {
  title: string
  count: number
  description: string
}

const statsData: Stats[] = [
  {
    title: 'Years in Business',
    count: 10,
    description: 'Delivering luxury and elegance since 2013.',
  },
  {
    title: 'Products Sold',
    count: 5000,
    description: 'Exquisite cosmetics that define beauty.',
  },
  {
    title: 'Happy Customers',
    count: 20000,
    description: 'Join the FashionTV family and experience true luxury.',
  },
  {
    title: 'Awards Won',
    count: 15,
    description: 'Recognized for excellence in the fashion industry.',
  },
]
const StatsSection: React.FC = () => {
  const [countedStats, setCountedStats] = useState<number[]>(new Array(statsData.length).fill(0))
  useEffect(() => {
    const interval = setInterval(() => {
      setCountedStats((prev) => {
        return prev.map((count, index) => {
          if (count < statsData[index].count) {
            return Math.min(count + 1, statsData[index].count)
          }
          return count
        })
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-500">FashionTV Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="bg-pink-100 border border-pink-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl font-semibold text-pink-500">{countedStats[index]}</h3>
              <p className="text-lg font-medium text-gray-700">{stat.title}</p>
              <p className="text-sm text-gray-500 mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default StatsSection;