module.exports = {
  to: '',
  plugins: [
    require('postcss-import')(),
    require('postcss-mixins')(),
    // require('postcss-preset-env')({
    //   stage: 3,
    //   features: {
    //     'nesting-rules': true
    //   }
    // }),
    // require('postcss-cssnext')({
    //   features: {
    //     customProperties: {
    //       warnings: false
    //     }
    //   }
    // }),
    require('postcss-nested')(),
    require('postcss-assets')({
      basePath: 'projects/eamode/eang/themes',
      relative: 'projects/eamode/eang/themes'
    })
  ]
}
