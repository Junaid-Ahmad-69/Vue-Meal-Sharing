/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1920px",
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "white": "#FFFFFF",
        "mint": "#A1DF8C",
        "pale": "#248A00",
        "orange": "#F28C28",
        "smoke": "#F9F8F3",
        "carrot": "#D23B3B",
        "steel": "#6B6B6B",
        "fossil": "#29292A",
        "arsenic": "#2D5A271A",
        "sea": "#2D5A27",
        "lime": "#9FE2BF66",
        "light-orange": "#FDAA48",
      }
    },
  },
  plugins: [],
}

