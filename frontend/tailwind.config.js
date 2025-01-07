/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Adding Roboto to the theme
        playwrite: ['Playwrite AU SA', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  
}