/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00113a',
          container: '#002366',
          fixed: '#dbe1ff',
        },
        secondary: {
          DEFAULT: '#D4A017',
          container: '#F0D27A',
          fixedDim: '#B8860B',
        },
        surface: {
          DEFAULT: '#f8f9fa',
          containerDrop: '#edeeef',
          containerLow: '#f3f4f5',
          containerHighest: '#e1e3e4',
          lowest: '#ffffff',
          variant: '#e1e3e4',
        },
        outline: {
          DEFAULT: '#757682',
          variant: '#c5c6d2', // Used for ghost border with opacity
        },
        text: {
          normal: '#191c1d',
          variant: '#444650',
          white: '#ffffff'
        }
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'serif'],
        sans: ['"Work Sans"', 'sans-serif'],
      },
      boxShadow: {
        'ambient': '0 10px 40px rgba(25, 28, 29, 0.04)',
      },
    },
  },
  plugins: [],
}
