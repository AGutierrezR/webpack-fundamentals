const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const { modeConfig } = require('./webpack/modeConfig')

module.exports = (env) => {
  const { mode = 'production', presets = [] } = env
  return merge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: ['url-loader'],
          },
        ],
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  )
}
