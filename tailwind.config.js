/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   'black': '#131214',
    // },
    extend: {
      colors: {
        'special-black': '#131214',
        'special-purple': '#B8A5E6',
      },
    },
  },
  plugins: [],
}