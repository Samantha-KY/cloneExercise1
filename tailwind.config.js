/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens:{
        sm: {max: '800px'},
        md: {max: '1024px'}
      }
    },
  },
  plugins: [],
}
