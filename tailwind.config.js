// const colors = require('tailwindcss/colors')

module.exports = {
  // presets: [
  //   require('./custom.preset.js')
  // ],
  // corePlugins: {
  //   preflight: false,
  // },
  mode: 'jit',
  content: [
    './docs/*.html',
    './plugins/*.html',
    './labs/*.html',
    './views/*.php'
  ],
  plugins: [
    //require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
  theme: {
    // colors: {
    //   gray: colors.stone,
    //   blue: colors.cyan,
    //   red: colors.fuchsia,
    //   white: colors.white
    // }
  },
  variants: {},
}
