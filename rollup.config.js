import copy from 'rollup-plugin-copy'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.common.js',
    format: 'cjs',
    exports: 'named',
  },
  external: ['react', 'prop-types'],
  plugins: [
    resolve({
      extensions: ['.js', '.json', '.jsx'],
    }),
    babel({
      plugins: ['external-helpers'],
      exclude: 'node_modules/**',
    }),
    copy({
      'src/styles/fonts': 'dist/fonts',
    }),
  ],
}
