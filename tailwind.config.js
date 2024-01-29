/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'textos': ["Jacques Francois", "serif"],
      'numeros': ["Jost", "sans-serif"],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#f9efdb',
      'black': '#000000',
      'beige': {
        100: '#ebd9b4',
        200:"#e0dacc",
        800: '#545048',
      },
      'green': {
        100: '#9dbc98',
        200: '#7EAE7F',
        300: '#7AC88A',
      },
      'blue':{
        100: '#94BDB3',
        200: '#638889',
        300: '#459699',
      },
    },
    extend: {},
  },
  plugins: [],
}

