import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  role: string
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Chen',
    role: 'Creative Director',
    imageUrl: '/images/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    role: 'Head of Marketing',
    imageUrl: '/images/liam.jpg',
  },
  {
    name: 'Emma Williams',
    role: 'Fashion Consultant',
    imageUrl: '/images/emma.jpg',
  },
]
const AboutSection: React.FC = () => {
  return (
    <section className="bg-white text-pink-600 py-16 px-4" id="about">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About FashionTV
        </motion.h2>

        <motion.p
          className="text-lg mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At FashionTV, we believe in the art of luxury cosmetics and the passion for fashion. Our journey began with a vision to revolutionize high-end beauty products, embracing elegance and sophistication. We curate a range of cosmetics that embody style, offering an experience that resonates with the essence of glamour.
        </motion.p>

        <motion.h3
          className="text-2xl font-semibold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        
        <motion.p
          className="text-lg mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          FashionTV is on a mission to empower individuals through luxury cosmetics that inspire confidence and celebrate uniqueness. We are committed to using the finest ingredients, ensuring our products not only enhance beauty but also reflect a lifestyle of elegance and sophistication.
        </motion.p>

        <motion.h3
          className="text-2xl font-semibold mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <motion.img
                src={member.imageUrl}
                alt={member.name}
                className="rounded-full mb-4 w-32 h-32 mx-auto transition duration-300 transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h4 className="font-semibold text-lg">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-lg text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          At FashionTV, we value creativity, excellence, and a commitment to sustainability. Join us on this journey towards a more beautiful and stylish world.
        </motion.p>
      </div>
    </section>
  )
}
export default AboutSection;