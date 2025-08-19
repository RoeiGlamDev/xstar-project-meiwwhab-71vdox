import { useEffect, useRef, useState } from 'react'
/
 * Custom hook to handle animations for FashionTV luxury cosmetics website.
 * This hook allows for elegant transitions and animations to enhance user experience in a high-end fashion interface.
 * 
 * @returns {object} - Object containing animation states and functions.
 * @property {boolean} isAnimating - Indicates if a transition is currently happening.
 * @property {function} startAnimation - Triggers a custom animation.
 * @property {function} resetAnimation - Resets the animation state.
 * 
 * Example usage:
 * const { isAnimating, startAnimation, resetAnimation } = useAnimation()
 */
export const useAnimation = () => {
    const [isAnimating, setIsAnimating] = useState(false)
    const animationRef = useRef<null | Animation[]>(null)
    /
     * Starts the custom animation for FashionTV components.
     * This can be triggered on user interactions such as clicks or hovers to create an elegant effect.
     * 
     * @param {HTMLElement} element - The DOM element to animate.
     * @param {string} animationType - The type of animation to apply (fade, slide, etc.)
     */
    const startAnimation = (element: HTMLElement, animationType: string) => {
        setIsAnimating(true)
        const options = {
            duration: 500,
            easing: 'ease-in-out',
            fill: 'forwards',
        }
        if (animationType === 'fadeIn') {
            animationRef.current = [
                element.animate([{ opacity: 0 }, { opacity: 1 }], options)
            ]
        } else if (animationType === 'slideIn') {
            animationRef.current = [
                element.animate([{ transform: 'translateX(-100%)' }, { transform: 'translateX(0)' }], options)
            ]
        }

        Promise.all(animationRef.current).then(() => {
            setIsAnimating(false)
        })
    }
    /
     * Resets the animation state, enabling new animations.
     */
    const resetAnimation = () => {
        setIsAnimating(false)
    }
    // Cleanup animation references when component unmounts
    useEffect(() => {
        return () => {
            if (animationRef.current) {
                animationRef.current.forEach(animation => animation.cancel())
            }
        }
    }, [])
    return {
        isAnimating,
        startAnimation,
        resetAnimation,
    }
};