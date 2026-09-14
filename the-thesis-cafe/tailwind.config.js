/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d5016',
        radiant: '#00B4D8',
        lightRadiant: '#48CAE4',
        gold: '#D4AF37',
      },
    },
  },
  plugins: [],
}
