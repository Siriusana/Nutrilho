/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{App,components,assets}/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: '#79CACC',
          purple: '#A479CC',
          coral: '#CC7B79',
          green: '#A1CC79',
        }
      }
    },
  },
  plugins: [],
}