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
      relative: true, 
      loadPaths: ['libs/eang/themes', 'src']
    }),
    require('lost')(),
  ]
}
