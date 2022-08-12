/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Background-white': '#EDF4FA',
        'Hover-gray': '#D5DCE0',
        'Color-Text-H1': '#122C3B',
        'Color-Text-H2': '#245A7A',
        'Color-Text-H3': '#4BBAFA',
      },
    },
  },
  plugins: [],
}