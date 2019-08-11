const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    'large-to-num': './src/index.js',
    'large-to-num.min': './src/index.js',
  },
  output: {
    filename: '[name].js',
    library: 'largeToNumber', // 打包出库的名称,
    libraryTarget: 'umd', // ES module, CMD, AMD, <script>
    libraryExport: 'default'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ //webpack 4 默认开启 terser-webpack-plugin
        include: /\.min\.js$/,
      })
    ]
  }
};