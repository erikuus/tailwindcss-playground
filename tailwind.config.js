module.exports = {
  // presets: [
  //   require('./tailwind.preset.js')
  // ],
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  purge: {
    enabled: false,
    content: [
      './*.html',
      './*.php',
    ],
  },
  theme: {},
  variants: {},
}