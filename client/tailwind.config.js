/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '375px',

      'tablet': '1024px',

      'desktop': '1240px',
    },
    extend: {},
  },
  plugins: [],
}