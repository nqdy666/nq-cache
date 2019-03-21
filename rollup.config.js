import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default [{
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dist/cache.min.js',
    name: 'cache',
    esModule: false,
    sourcemap: true
  },
  plugins: [
    resolve(),
    babel(),
    commonjs(),
    uglify()
  ]
}, {
  input: 'src/index.js',
  output: {
    format: 'umd',
    file: 'dist/cache.js',
    name: 'cache',
    esModule: false,
    sourcemap: true
  },
  plugins: [
    resolve(),
    babel(),
    commonjs()
  ]
}]
