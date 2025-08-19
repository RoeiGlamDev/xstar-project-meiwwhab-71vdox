import React from 'react'
import { motion } from 'framer-motion'
interface Testimonial {
    name: string
    review: string
    rating: number
    photo: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Sophia Grace',
        review: 'FashionTV transformed my entire wardrobe with their exquisite pieces. Each item feels like a work of art that elevates my style and confidence.',
        rating: 5,
        photo: '/images/testimonials/sophia.jpg',
    },
    {
        name: 'Liam Carter',
        review: 'The customer service at FashionTV is as luxurious as their collections. I felt pampered every step of the way!',
        rating: 5,
        photo: '/images/testimonials/liam.jpg',
    },
    {
        name: 'Olivia Thompson',
        review: 'Shopping with FashionTV is not just a purchase, it's an experience! The attention to detail is unparalleled.',
        rating: 5,
        photo: '/images/testimonials/olivia.jpg',
    },
]
const TestimonialsSection: React.FC = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto text-center">
                <motion.h2
                    className="text-4xl font-bold mb-12 text-pink-500"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    What Our Clients Say About FashionTV
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-pink-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img
                                src={testimonial.photo}
                                alt={${testimonial.name}'s testimonial}
                                className="w-20 h-20 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg font-semibold mb-2 text-pink-600">{testimonial.name}</h3>
                            <p className="text-gray-700 italic mb-4">"{testimonial.review}"</p>
                            <div className="flex justify-center">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-yellow-500"
                                        viewBox="0 0 20 20" fill="currentColor"
                                    >
                                        <path d="M10 15l4.33-3.273L19 8l-6.69-.965L10 0 7.69 7.035 1 8l4.67 3.727L10 15z" />
                                    </svg>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default TestimonialsSection;