/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#0b72e7',
          dark: '#0646ac',
        },
      },
      backgroundImage: {
        'gradient-hero':
          'radial-gradient(circle at top left, rgba(56,189,248,0.25), transparent 55%), radial-gradient(circle at top right, rgba(129,140,248,0.35), transparent 60%)',
      },
    },
  },
  plugins: [],
}


