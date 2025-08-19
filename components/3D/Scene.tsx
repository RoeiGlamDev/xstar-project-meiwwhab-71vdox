import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
interface SceneProps {
  className?: string
}

const Scene: React.FC<SceneProps> = ({ className }) => {
  useEffect(() => {
    // Load textures or models here if needed
  }, [])
  return (
    <div className={w-full h-screen ${className}} style={{ backgroundColor: '#ffffff' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight color="#ffffff" intensity={1} position={[0, 10, 10]} />
        <OrbitControls enablePan={false} enableZoom={false} />
        {/ Add your 3D models here /}
        {/ Example box /}
        <motion.mesh
          onClick={() => console.log('3D element clicked!')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          receiveShadow
          castShadow
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#ff69b4" />
        </motion.mesh>
      </Canvas>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
        <motion.h1 
          className="text-5xl font-bold text-pink-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}>
          Welcome to FashionTV
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}>
          Discover the epitome of luxury in cosmetics and fashion.
        </motion.p>
      </div>
    </div>
  )
}
export default Scene;