/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#020617',
        'secondary': '#DBE9FF',
      },
      fontFamily: {
        'open': ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}