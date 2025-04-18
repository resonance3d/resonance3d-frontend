/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        customRed: '#ff0000',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Montserrat font
        ptsans: ['PT Sans', 'sans-serif'],       // PT Sans font
      },
    },
  },
  plugins: [],
}

