/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        caveat: ['Caveat', 'sans-serif'],
      },
      colors: {
        customBlue: '#15419E',
        customOrange: '#FF7A00',
        customGray: '#808080'
      },
    },
  },
  plugins: [],
}
