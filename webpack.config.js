const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { merge } = require('webpack-merge')
const modeConfig = (env) => require(`./builds-utils/webpack.${env}`)(env)

module.exports = (env) => {
  const { mode = 'production', presets = [] } = env
  return merge(
    {
      mode,
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  )
}
