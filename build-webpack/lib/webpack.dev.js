const merge = require('webpack-merge');
const webpack = require('webpack');
const baseCfg = require('./webpack.base');

const devCfg = {
  mode: 'development',
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
  devtool: 'cheap-source-map',
};

module.exports = merge(baseCfg, devCfg);
