import React, { useState } from 'react'
import { motion } from 'framer-motion'
interface InputProps {
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  validationMessage?: string
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, required = false, validationMessage }) => {
  const [value, setValue] = useState<string>('')
  const [touched, setTouched] = useState<boolean>(false)
  const isValid = !required || (required && value.trim() !== '')
  return (
    <div className="mb-6">
      <label className="block text-white text-sm font-semibold mb-2">
        {label}
      </label>
      <motion.input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={() => setTouched(true)}
        className={shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${isValid ? 'border-white' : 'border-red-500'}}
        style={{ backgroundColor: '#FFC0CB' }} // Custom pink background
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
        aria-invalid={!isValid}
        aria-describedby={!isValid && touched ? ${label}-error : undefined}
      />
      {!isValid && touched && (
        <p id={${label}-error} className="text-red-500 text-xs italic mt-2">
          {validationMessage || 'This field is required.'}
        </p>
      )}
    </div>
  )
}
export default Input;