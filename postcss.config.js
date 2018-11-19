module.exports = {
  to:'',
  plugins: [
    require('postcss-import')(),
    require('postcss-mixins')(),
    require('postcss-nested')(),
    require('postcss-color-function')(),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          warnings: false
        }
      }
    }),
    require('postcss-assets')({
      basePath: 'projects/eamode/eang/themes',
      relative: 'projects/eamode/eang/themes'
    })
  ]
}
