import React, { useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
interface FadeInProps {
  children: React.ReactNode
  className?: string
}

const FadeIn: React.FC<FadeInProps> = ({ children, className }) => {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: 50 })
    }
  }, [controls, inView])
  return (
    <motion.div
      ref={ref}
      className={transition-all duration-700 ease-out ${className}}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}
export default FadeIn;