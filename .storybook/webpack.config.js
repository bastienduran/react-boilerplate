const prettierConfig = require('../.prettierrc');

module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          prettierConfig,
        },
      },
    ],
    enforce: 'pre',
  });

  return config;
};
