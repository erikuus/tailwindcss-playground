module.exports = {
  // presets: [
  //   require('./custom.preset.js')
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
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
  theme: {},
  variants: {},
}