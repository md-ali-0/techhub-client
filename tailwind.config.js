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
        'primary': '#1F2937',
        'secondary': '#29303D',
        'heading': '#292930',
        'sub-heading': '#ff497c',
      },
      fontFamily: {
        'Dm': ['DM Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}