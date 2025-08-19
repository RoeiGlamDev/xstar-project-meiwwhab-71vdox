import React from 'react'
import { motion } from 'framer-motion'
interface PricingPlan {
    title: string
    price: string
    features: string[]
}

const pricingPlans: PricingPlan[] = [
    {
        title: 'FashionTV Luxe',
        price: '$199/month',
        features: [
            'Exclusive access to premium cosmetics',
            'Personalized beauty consultations',
            'VIP event invitations',
            'Early access to new products',
        ],
    },
    {
        title: 'FashionTV Elite',
        price: '$299/month',
        features: [
            'All features from FashionTV Luxe',
            'One-on-one sessions with top stylists',
            'Luxury gift boxes quarterly',
            'Exclusive behind-the-scenes content',
        ],
    },
    {
        title: 'FashionTV Prestige',
        price: '$499/month',
        features: [
            'All features from FashionTV Elite',
            'Customized cosmetic experiences',
            'Private fashion shows invitations',
            'Lifetime membership perks',
        ],
    },
]
const FAQ = [
    {
        question: 'What is FashionTV?',
        answer: 'FashionTV is a luxury cosmetics brand dedicated to transforming beauty with high-end products and unparalleled service tailored to our customers' individuality.',
    },
    {
        question: 'How do I choose a plan?',
        answer: 'Consider the features that suit your beauty needs best, then select the plan that offers those premium services you desire at FashionTV.',
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Absolutely! You can upgrade or downgrade your plan at any time to match your evolving beauty journey with FashionTV.',
    },
]
const PricingPage: React.FC = () => {
    return (
        <div className="bg-white text-pink-600 min-h-screen px-5 py-10">
            <motion.h1 
                className="text-4xl font-bold text-center mb-10"
                initial={{opacity: 0, y: -20}} 
                animate={{opacity: 1, y: 0}} 
                transition={{duration: 0.5}}
            >
                FashionTV Pricing Plans
            </motion.h1>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {pricingPlans.map((plan, index) => (
                    <motion.div
                        key={index}
                        className="bg-pink-100 rounded-lg shadow-lg p-6 transition-transform duration-300 transform hover:scale-105"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: index * 0.2, duration: 0.5}}
                    >
                        <h2 className="text-2xl font-semibold mb-3">{plan.title}</h2>
                        <p className="text-xl font-bold mb-5">{plan.price}</p>
                        <h3 className="text-lg font-semibold mb-2">Features:</h3>
                        <ul className="list-disc list-inside mb-5">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="text-gray-700">{feature}</li>
                            ))}
                        </ul>
                        <button className="bg-pink-600 text-white py-2 px-4 rounded shadow hover:bg-pink-700 transition duration-300">
                            Sign Up
                        </button>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20">
                <motion.h2 
                    className="text-3xl font-bold text-center mb-10"
                    initial={{opacity: 0, y: -20}} 
                    animate={{opacity: 1, y: 0}} 
                    transition={{duration: 0.5}}
                >
                    Frequently Asked Questions
                </motion.h2>
                <div className="max-w-2xl mx-auto">
                    {FAQ.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-pink-50 p-4 rounded mb-4 shadow"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: index * 0.2, duration: 0.5}}
                        >
                            <h3 className="font-semibold">{item.question}</h3>
                            <p className="text-gray-700">{item.answer}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default PricingPage;