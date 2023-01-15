const deps = require('./package.json').dependencies;
const version = require('./package.json').version;

const mfeConfig = {
  host: 'http://localhost',
  port: '3003',
  filename: 'remoteEntry.js',
};

module.exports = {
  name: 'app_login',
  filename: `${version}/${mfeConfig.filename}`,
  exposes: {
    './LoginMFE': './src/App',
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
};
