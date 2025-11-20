/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7c16ff',
          700: '#7209f7',
          800: '#5f07d0',
          900: '#4f05aa',
          950: '#2f0274',
        },
        dark: {
          100: '#404040',
          200: '#323232',
          300: '#282828',
          400: '#1e1e1e',
          500: '#141414',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}