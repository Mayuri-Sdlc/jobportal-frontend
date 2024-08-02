/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        grotesk: ['Hanken Grotesk', 'sans-serif']
      },
      colors: {
        'sidebar-link': '#F5F4F5',
        'sidebar-profile': '#F5F6F7',
        'sidebar': '#171795',
        'primary': '#2626EA',
        'secondary': '#091E42',
        'secondary-light': '#7A8699',
        'secondary-extra-light': '#A6AEBB'
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['0.938rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.5rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      },
    },
  },
  variants: {},
  plugins: [daisyui]
 
}

