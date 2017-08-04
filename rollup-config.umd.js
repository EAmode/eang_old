import {
  external
} from './rollup-external.js'

export default {
  // Bundle's entry point
  // See https://github.com/rollup/rollup/wiki/JavaScript-API#entry
  entry: 'build/eang.js',
  dest: 'dist/eang.umd.js', // output a single application bundle

  // Format of generated bundle
  // See https://github.com/rollup/rollup/wiki/JavaScript-API#format
  format: 'umd',

  // Export mode to use
  // See https://github.com/rollup/rollup/wiki/JavaScript-API#exports
  exports: 'named',

  // The name to use for the module for UMD/IIFE bundles
  // (required for bundles with exports)
  // See https://github.com/rollup/rollup/wiki/JavaScript-API#modulename
  moduleName: 'eang',

  // A list of IDs of modules that should remain external to the bundle
  // See https://github.com/rollup/rollup/wiki/JavaScript-API#external
  external,

  onwarn(warning) {
    console.warn(warning.message);
  }
}
