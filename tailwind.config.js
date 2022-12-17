/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
