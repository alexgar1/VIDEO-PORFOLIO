/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Apple Garamond"', 'Garamond', '"Times New Roman"', 'serif'],
        body: ['Calibri', '"Segoe UI"', 'sans-serif'],
        signature: ['"Great Vibes"', '"Cormorant Garamond"', 'Didot', '"Times New Roman"', 'serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 195, 113, 0.22)',
      },
      colors: {
        ink: '#090B0F',
        mist: '#F0EDE5',
      },
    },
  },
  plugins: [],
}
