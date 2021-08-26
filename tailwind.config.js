module.exports = {
  // presets: [
  //   require('./tailwind.preset.js')
  // ],
  // corePlugins: {
  //   preflight: false,
  // },
  mode: 'jit',
  purge: [
    './docs/*.html',
    './labs/*.html',
    './views/*.php'
  ],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
  theme: {},
  variants: {},
}