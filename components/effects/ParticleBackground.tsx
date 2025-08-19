import React, { useEffect } from 'react'
import * as THREE from 'three'
import { useAnimation } from 'framer-motion'
const ParticleBackground: React.FC = () => {
    const animations = useAnimation()
    useEffect(() => {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ alpha: true })
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)
        const particlesCount = 500
        const positions = new Float32Array(particlesCount * 3)
        const colors = new Float32Array(particlesCount * 3)
        const pinkColor = new THREE.Color(0xff69b4); // Pink
        const whiteColor = new THREE.Color(0xffffff); // White

        for (let i = 0; i < particlesCount; i++) {
            positions[i  3] = (Math.random() - 0.5)  20
            positions[i  3 + 1] = (Math.random() - 0.5)  20
            positions[i  3 + 2] = (Math.random() - 0.5)  20
            const mixedColor = Math.random() < 0.5 ? pinkColor : whiteColor
            colors[i * 3] = mixedColor.r
            colors[i * 3 + 1] = mixedColor.g
            colors[i * 3 + 2] = mixedColor.b
        }

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
        const material = new THREE.PointsMaterial({ size: 0.05, vertexColors: true })
        const particles = new THREE.Points(geometry, material)
        scene.add(particles)
        camera.position.z = 10
        const animate = function () {
            requestAnimationFrame(animate)
            particles.rotation.x += 0.001
            particles.rotation.y += 0.001
            renderer.render(scene, camera)
        }
        animate()
        return () => {
            document.body.removeChild(renderer.domElement)
        }
    }, [])
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <h1 className="font-bold text-5xl text-pink-500 text-center mt-20 animate__animated animate__fadeIn">
                Welcome to FashionTV
            </h1>
            <p className="text-white text-center text-xl mt-5 font-light animate__animated animate__fadeIn delay-1s">
                Discover the latest in luxury cosmetics curated just for you.
            </p>
        </div>
    )
}
export default ParticleBackground;