const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const { modeConfig } = require('./webpack/modeConfig')
const presetConfig = require('./webpack/loadPresets')

module.exports = (env) => {
  const { mode = 'production', presets = [] } = env

  return merge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [{ loader: 'url-loader', options: { limit: 5000 } }],
          },
        ],
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  )
}
