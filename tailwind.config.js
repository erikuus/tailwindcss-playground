/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.html',
    './plugins/**/*.html',
    './views/**/*.php',
    './tailwind.css'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
