const base = require('./webpack.base.config')
const config = Object.assign({}, base, { plugins: base.plugins || [] })
const ExtractTextWebpack = require('extract-text-webpack-plugin')
config.module.rules
  .filter(x => { return x.loader === 'vue-loader' })
  .forEach(x => { x.options.extactCSS = true })
config.plugins.push(
  new ExtractTextWebpack('assets/styles.css')
)
module.exports = config
