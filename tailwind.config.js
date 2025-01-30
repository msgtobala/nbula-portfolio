/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#A855F7',
        dark: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155'
        },
        light: {
          100: '#F1F5F9',
          200: '#E2E8F0'
        }
      }
    },
  },
  plugins: [],
};