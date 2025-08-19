import React, { useEffect } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
interface FloatingElementProps {
  position: [number, number, number]
  color: string
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position, color }) => {
  return (
    <motion.mesh
      position={position}
      animate={{ y: [0, 0.5, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
    >
      <sphereBufferGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial color={color} />
    </motion.mesh>
  )
}
const FloatingElements: React.FC = () => {
  const elements = [
    { position: [-1, 0, 0], color: '#FFC0CB' },
    { position: [1, 0, 0], color: '#FFFFFF' },
    { position: [0, 1, 0], color: '#FFC0CB' },
    { position: [0, -1, 0], color: '#FFFFFF' },
  ]
  useEffect(() => {
    document.title = "Luxury Cosmetics | FashionTV"
  }, [])
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-pink-600">Welcome to FashionTV</h1>
      <p className="mt-4 text-lg text-gray-700">Discover luxury cosmetics that elevate your beauty.</p>
      <Canvas className="w-full h-full">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        {elements.map((element, index) => (
          <FloatingElement key={index} position={element.position} color={element.color} />
        ))}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}
export default FloatingElements;