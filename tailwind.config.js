/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gym-red': '#C0392B',
        'gym-dark': '#0a0a0a',
        'gym-darker': '#050505',
      },
      fontFamily: {
        'display': ['"Bebas Neue"', 'sans-serif'],
        'body': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
