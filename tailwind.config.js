/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'roboto-black':['"roboto black"','Ubuntu','Roboto'],
      'roboto-bold':['"roboto bold"','Ubuntu','Roboto'],
      'roboto-medium':['"roboto medium"','Ubuntu','Roboto'],
      'roboto-regular':['"roboto regular"','Ubuntu','Roboto'],
      'roboto-light':['"roboto light"','Ubuntu','Roboto'],
      'roboto-thin':['"roboto thin"','Ubuntu','Roboto'],


      'montserrat-black':['"montserrat black"','Ubuntu','Roboto'],
      'montserrat-bold':['"montserrat bold"','Ubuntu','Roboto'],
      'montserrat-medium':['"montserrat medium"','Ubuntu','Roboto'],
      'montserrat-regular':['"montserrat regular"','Ubuntu','Roboto'],
      'montserrat-light':['"montserrat light"','Ubuntu','Roboto'],
      'montserrat-thin':['"montserrat thin"','Ubuntu','Roboto'],
    }
  },
  plugins: [],
}

