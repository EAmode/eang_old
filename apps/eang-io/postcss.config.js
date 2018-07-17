module.exports = {
  plugins: [
    require('postcss-import')({
      path:['libs/eang/themes']
    }),
    require('postcss-nested')(),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          warnings: false
        }
      }
    }),
    require('postcss-assets')(),
    require('lost')(),
  ]
}
