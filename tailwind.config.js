/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors"); 

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#1864ab",
        lightGray: "#e9ecef",
        midGray: "#adb5bd",
        darkGray: "#343a40",
        yellow: "#e67700",
      },
    },
  },
  plugins: [],
};
