import type { Config } from 'tailwindcss'
/.*?/
 * Custom Tailwind CSS configuration for FashionTV.
 * This configuration focuses on creating a luxury look and feel for the FashionTV cosmetics website,
 * utilizing a pink and white color palette that reflects the high-end fashion industry.
 * 
 * @module tailwind.config.ts
 * @owner FashionTV
 * @version 1.0
 */

const tailwindConfig: Config = {
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FEC8D8',
          DEFAULT: '#FF4F92',
          dark: '#BF2D53',
        },
        white: '#FFFFFF',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        slideIn: 'slideIn 0.7s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
export default tailwindConfig;