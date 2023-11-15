/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'Fraunces': ['Fraunces', 'serif'],
        'Manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        'Dark-Purple': '#24053E',
        'Eucaplyptus': '#44FFA1',
        'Davys-Grey': '#584D62',
        'Ghost-White': '#FCF8FF',
        'White': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

