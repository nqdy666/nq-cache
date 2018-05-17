import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

export default [{
  input: 'src/index.js',
  output: {
    format: 'iife',
    file: 'dist/cache.min.js',
    name: 'cache'
  },
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      runtimeHelpers: true,
      presets: [
        ['@babel/preset-env', {
          targets: {
            useBuiltIns: 'entry'
          },
          modules: false,
          loose: true
        }],
        '@babel/preset-stage-0',
        '@babel/preset-flow'
      ]
    }),
    commonjs(),
    uglify()
  ]
}, {
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dist/cache.js',
    name: 'cache'
  },
  plugins: [
    resolve(),
    babel({
      babelrc: false,
      runtimeHelpers: true,
      presets: [
        ['@babel/preset-env', {
          targets: {
            useBuiltIns: 'entry'
          },
          modules: false,
          loose: true
        }],
        '@babel/preset-stage-0',
        '@babel/preset-flow'
      ]
    }),
    commonjs()
  ]
}]
