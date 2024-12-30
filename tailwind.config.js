/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", 
        secondary: "#F59E0B", 
        accent: "#10B981", 
        button: "#33BBC5"
      },
    },
    fontFamily: {
      sans: ["Poppins", ...fontFamily.sans],
    },
  },
  plugins: [],
};
