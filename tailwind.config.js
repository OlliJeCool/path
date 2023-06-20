/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#3A383D",
        secondary: "#565454"
      },
      fontFamily:{
        manrope: 'Manrope'
      }
    },
  },
  plugins: [],
}

