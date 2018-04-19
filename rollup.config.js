import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import sourcemaps from 'rollup-plugin-sourcemaps'
import json from 'rollup-plugin-json'

export default {
  input: 'build/index.js',
  output: {
    file: 'dist/eang.js',
    format: 'es'
  },
  plugins: [
    sourcemaps(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    json()
  ],
  external: [
    '@angular/core',
    '@angular/common',
    '@angular/forms',
    'rxjs/Observable',
    'rxjs/operators',
    'rxjs/observable/combineLatest',
    'rxjs/observable/of'
    // "rxjs/add/operator/switchMap",
    // "rxjs/add/operator/map",
    // "markdown-it",
    // "lodash"
  ]
}
