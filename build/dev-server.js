const webpack = require('webpack');
const clientConfig = require('./webpack.client.config');
module.exports = function setupDevServer(app) {
  clientConfig.entry.app = [
    'webpack-hot-middleware/client',
    clientConfig.entry.app,
  ];
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  );
  const clientCompliler = webpack(clientConfig);
  app.use(
    require('webpack-dev-middleware')(clientCompliler, {
      stats: {
        colors: true,
      },
    })
  );
  app.use(require('webpack-hot-middleware')(clientCompliler));
};
