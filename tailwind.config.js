/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/templates/**/*.html',
    './**/*.js',
    '../../sites/**/public/*.html',
    './public/js/**/*.js',        
    './public/css/**/*.css',
    "./best/public/**/*.{html,js,css}",
    "./best/templates/**/*.{html,py}",
    "./best/www/**/*.{html,js}",
    "./best/**/*.py"  
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

