/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/**/*.{css,js}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

