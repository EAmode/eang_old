module.exports = ctx => ({
  map: ctx.options.map,
  plugins: [
    require('postcss-import')(),
    require('postcss-mixins')(),
    require('postcss-nested')(),
    require('postcss-assets')({
      basePath: 'projects/eamode/eang/themes',
      relative: 'projects/eamode/eang/themes'
    })
  ]
})
