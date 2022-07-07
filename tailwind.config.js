/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue-dark-mode':        'hsl(209, 23%, 22%)',
        'very-dark-blue-dark-mode':   'hsl(207, 26%, 17%)',
        'very-dark-blue-light-mode':  'hsl(200, 15%, 8%)',
        'dark-grey-light-mode':       'hsl(0, 0%, 52%)',
        'very-light-grey-light-mode': 'hsl(0, 0%, 98%)'
      },
      fontSize: {
        'homepage-items':     '14px',
        'detail-page':        '16px'
      },
      screens: {
        'tablet': '860px',
        'lg': '1200px',
        'desktop': '1440px'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
