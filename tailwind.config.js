/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-2': '#403F3F',
        'dark-3': '#706F6F',
        'dark-4': '#9F9F9F'
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}