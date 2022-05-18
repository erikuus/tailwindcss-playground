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
    './comps/*.html',
    './private/*.html',    
    './views/*.php'
  ],
  plugins: [
    //require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    //require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ],
  theme: {
    extend : {
      fontFamily: {
        inter: 'Inter, sans-serif'
      }
    }
    // colors: {
    //   gray: colors.stone,
    //   blue: colors.cyan,
    //   red: colors.fuchsia,
    //   white: colors.white
    // }
  },
  variants: {},
}
