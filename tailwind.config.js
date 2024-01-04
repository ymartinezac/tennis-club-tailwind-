/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'yellow': '#F7E733',
      'green': '#324835',
      'white': '#F7F7F9',
      'blue': '#00E0D5',
    },
    fontFamily: {
      heading: ['Vina Sans', 'sans-serif'],
      body: ['Noto Sans', 'serif'],
      form: ['Ubuntu', 'sans-serif',]
    },
    screens: {
      'md': '864px',
      'lg': '1000px',
    },

  }
}