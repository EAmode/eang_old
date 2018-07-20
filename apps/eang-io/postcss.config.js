module.exports = {
  plugins: [
    require('postcss-import')({
      path:['libs/eang/themes']
    }),
    require('postcss-nested')(),
    require('postcss-responsive-type')(),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          warnings: false
        }
      }
    }),
    require('postcss-assets')({
      loadPaths: ['libs/eang/themes']
    }),
    require('lost')(),
  ]
}
