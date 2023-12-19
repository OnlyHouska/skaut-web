/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './include/*.html',
    './index.html',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    extend: {
      colors: {
        'header-1': '#3879b3',
        'header-2': '#346baa',
        'header-3': '#284984',
        'oddil-menu': '#f49e00',
        'oddil-hover': '#00000030',
        'skaut-orange': '#f5b016'
      }
    },
  },
  plugins: [],
}

