module.exports = (api) => {

  api.cache(true);

  return {
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
        },
      ],
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            chrome: '58',
            ie: '11',
          },
          corejs: '3',
          useBuiltIns: 'entry',
        },
      ],
    ],
  };
};
