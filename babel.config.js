module.exports = api => {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '3.0.0' }],
    '@babel/preset-react',
  ];
  const plugins = [
    '@babel/plugin-transform-spread',
    '@babel/plugin-transform-template-literals',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-transform-destructuring',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-async-to-generator',
    [
      'babel-plugin-styled-components',
      {
        pure: true,
      },
    ],
  ];

  const env = {
    test: {
      plugins: ['require-context-hook'],
    },
  };

  return {
    presets,
    plugins,
    env,
  };
};
