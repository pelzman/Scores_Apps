/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        cyan:"#008F8F",
        darkWhite:"#C8C8C8"
      },
      fontFamily :{
        sans : ["Roboto","sans-serif" ]
      }
    },
  },
  plugins: [],
}

