const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [{
    // 配置less加载器，通过js加载less
    plugin: CracoLessPlugin,
    options: {
      lessLoaderOptions: {
        lessOptions: {
          // modifyVars: { '@primary-color': '#1DA57A' },
          javascriptEnabled: true,
        },
      },
    },
  }],
};
