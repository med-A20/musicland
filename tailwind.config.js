/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme:  {
    extend: {
      colors : {
        dark : '#6F00FF',
        light : "#ecfeff",
        dark2 : "#7B68EE",
        rose : "#e703e4",
        red : "#f20723",
      },
    },
  },
  plugins: [],
}
