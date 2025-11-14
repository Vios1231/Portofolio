/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#5850ec',
          700: '#4c51bf',
          800: '#4338ca',
          900: '#3730a3'
        },
        accent: {
          500: '#22d3ee',
          600: '#06b6d4'
        }
      },
      boxShadow: {
        glow: '0 0 30px rgba(99, 102, 241, 0.35)',
        'inner-glow': 'inset 0 0 40px rgba(56, 189, 248, 0.15)'
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'float-slow': 'float 8s ease-in-out infinite'
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    },
  },
  plugins: [],
}
