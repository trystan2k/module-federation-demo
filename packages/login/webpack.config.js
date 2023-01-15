const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { config } = require('../../webpack/webpack.config');
const moduleFederationConfig = require('./module.federation.config');

module.exports = {
  ...config,
  entry: {
    index: './src/index.tsx',
  },
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    },
  },
  plugins: [...config.plugins, new ModuleFederationPlugin(moduleFederationConfig)],
};
