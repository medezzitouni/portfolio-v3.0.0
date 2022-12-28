/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary: 'wheat',
        secondary: 'rgba(56, 65, 59, .8)'
      },
      flexBasis: {
        '3/10': '30%',
        '100': '99%'
      },
      height:{
        '1/12': '8.33%'
      }
    },
  },
  plugins: [],
}
