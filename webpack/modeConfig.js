const modeConfig = (mode) => {
  const env = mode === 'production' ? 'prod' : 'dev'
  return require(`./webpack.${env}`)(mode)
}

exports.modeConfig = modeConfig
