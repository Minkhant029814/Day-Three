/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*{html,js}"],

  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',

      
    },
    fontFamily:{
      dancing:"Dancing Script",
      Lato:"Lato",
    },
    extend: {},
  },
  plugins: [],
}

