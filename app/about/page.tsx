import React from 'react'
import { motion } from 'framer-motion'
interface TeamMember {
  name: string
  position: string
  bio: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Martinez',
    position: 'Creative Director',
    bio: 'With over a decade of experience in luxury fashion design, Sophia elevates the FashionTV brand through innovative designs and an eye for elegance.',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Chen',
    position: 'Marketing Strategist',
    bio: 'Liam specializes in upscale branding and marketing strategies that resonate with our elite clientele and enhance the FashionTV experience.',
    image: '/images/liam.jpg',
  },
  {
    name: 'Isabella Rossi',
    position: 'Head of Product Development',
    bio: 'Isabella ensures that every product reflects the luxurious standards of FashionTV, making quality and sophistication a priority.',
    image: '/images/isabella.jpg',
  },
]
const About: React.FC = () => {
  return (
    <div className="bg-white text-pink-600">
      <motion.div 
        className="container mx-auto py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold text-center mb-8">About FashionTV</h1>
        <p className="text-lg text-center mb-12">
          At FashionTV, we pride ourselves on redefining luxury cosmetics, harmonizing elegance with innovation. Our journey began with a vision of creating products that embody sophistication and style.
        </p>
        
        <h2 className="text-3xl font-semibold text-center mb-6">Our History</h2>
        <p className="text-md text-center mb-8">
          Founded in 2020, FashionTV emerged from a passion for high-end fashion and beauty. We have continuously pushed the boundaries of luxury cosmetics, curating collections that captivate and inspire the world.
        </p>

        <h2 className="text-3xl font-semibold text-center mb-6">Our Values</h2>
        <ul className="list-disc list-inside text-md mb-8">
          <li>Elegance: Each product is crafted with a focus on sophisticated design.</li>
          <li>Quality: We ensure that every item meets our stringent luxury standards.</li>
          <li>Innovation: Our team is dedicated to pioneering trends within the beauty industry.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-center mb-6">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-pink-100 p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-center">{member.name}</h3>
              <p className="text-md text-center text-gray-600">{member.position}</p>
              <p className="text-sm text-center mt-2">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
export default About;