/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarycolor:"#45474B",
        secondarycolor:"#392467",
        colorkasadaxaad:"#F8FAE5"
      }
     
    },
  },
  plugins: [],
}

