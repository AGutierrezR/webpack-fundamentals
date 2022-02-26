const { merge } = require('webpack-merge')

const applyPresets = (env) => {
  const { presets } = env
  const mergePresets = [].concat(...[presets])
  const mergeConfigs = mergePresets.map((presetsName) =>
    require(`./presets/webpack.${presetsName}`)(env)
  )

  return merge({}, ...mergeConfigs)
}

module.exports = applyPresets
