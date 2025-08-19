import React from 'react'
import { motion } from 'framer-motion'
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-6 text-center w-11/12 md:w-2/3 lg:w-1/2"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-pink-500 mb-4">{title}</h2>
        <div className="text-gray-700 mb-6">
          {children}
        </div>
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition duration-200"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  )
}
export default Modal;