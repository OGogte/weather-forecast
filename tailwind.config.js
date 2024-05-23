/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  media: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans',  ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'special-black': '#131214',
        'special-purple': '#b5a1e5',
        'special-gray' : '#1d1c1f',
        'text-gray' : '#7b7980',
        'special-white' : '#dddae5',
        'highlights-black' : 'hsla(0, 0%, 0%, 0.1)'
      },
    },
  },
  plugins: [],
}