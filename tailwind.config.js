/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    letterSpacing: {
      wider: '.1em',
      widest: '.25em',

    },
    extend: {
      colors: {
        'Background': '#011326',
        'Color-Text-H1': '#228DFF',
        'Color-Text-H2': '#6DEDFF',
        'Color-Text-H3': '#8150FF',
        'Color-Text-H4': '#E6E7E9',
        'Color-Text-H5': '#777A94',
        'icon-color': '#A4A4A4',
        'bg-img': '#01133c',
        'text-mini': '#A8B2D1',
        'bg-example': '#112240',
      },
      minHeight: {
        750: '50rem',
        hTarjet: '330px'
      },
      maxWidth: {
        150: '500px',
        240: '60rem',
        250: '68rem',
        200: '80rem', //960px
        workTarjet: '990px'
      },
      translate: {
        '1/5': '44%',
      },
      width: {
        'tarjet': '60rem',
      },
      transitionDelay: {
        '0': '0ms',
        '5': '5ms',
      },
      boxShadow: {
        'xl': '0px 0px 20px 10px #011326',
      },
      hueRotate: {
        img: '417deg',
      },
      grayscale: {
        50: '50%',
        60: '60%',
        70: '70%',
        80: '80%',
        90: '90%',
      }
    },
  },
  plugins: [],
}