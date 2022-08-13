/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {
      colors: {
        'Background': '#011326',
        'Color-Text-H1': '#228DFF',
        'Color-Text-H2': '#6DEDFF',
        'Color-Text-H3': '#8150FF',
        'Color-Text-H4': '#E6E7E9',
        'Color-Text-H5': '#777A94',
      },
    },
  },
  plugins: [],
}