/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grayL: "#F9F9F9",
        main: "#FABB18",
        mainL: "#FFF8E8",
        white: "#FFFFFF",
        black: "#000000",
        gray: "#757575",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
