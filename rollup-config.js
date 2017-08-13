import {
  external
} from './rollup-external.js'

export default {
  // Bundle's entry point
  // See https://github.com/rollup/rollup/wiki/JavaScript-API#entry
  entry: 'build/eang.js',
  dest: 'dist/eang.js', // output a single application bundle

  // Format of generated bundle
  // See https://github.com/rollup/rollup/wiki/JavaScript-API#format
  format: 'es',

  // A list of IDs of modules that should remain external to the bundle
  // See https://github.com/rollup/rollup/wiki/JavaScript-API#external
  external,
}
