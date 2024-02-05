/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {

        'Roboto': "'Roboto', sans-serif",

        'Poppins': "'Poppins', sans-serif",

        'Josefin-Sans': "'Josefin Sans', sans-serif"
      },
      boxShadow: {
        '5xl': '0px 0px 60.571px 0px #E5E9F6',
        '3xl': ' 0px 0px 60.571px 0px #E5E9F6',
        '4xl': ' 0px 4px 20px 0px rgba(96, 34, 234, 0.20)',
        '6xl': '0px 40px 80px 0px #E5E9F6',
        '7xl': '0px 20px 50px 0px rgba(39, 0, 124, 0.50)',
      },
    },
  },
  plugins: [],
}

