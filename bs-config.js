/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
  ui: false,
  open: false,
  files: ['dist/eang.umd.js', 'playground'],
  server: {
    baseDir: 'playground',
    routes: {
      '/': 'playground',
      '/node_modules/': 'node_modules',
      '/dist/': 'dist',
      '/.playground': '.playground'
    }
  }
}
