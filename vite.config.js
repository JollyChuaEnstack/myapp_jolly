// vite.config.js
import commonjs from 'rollup-plugin-commonjs';

export default {
  plugins: [
    // other plugins
    commonjs()
  ]
}