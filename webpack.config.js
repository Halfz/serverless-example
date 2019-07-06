/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');

const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    path.join(process.cwd(), 'src/serverless/lambda.js'),
  ],
  output: {
    filename: 'serverless.js',
    path: path.resolve(process.cwd(), `build`),
    libraryTarget: 'commonjs',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transform all .js files required somewhere with Babel
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  externals: [
    nodeExternals({
      modulesFromFile: {
        include: ['dependencies'],
      },
    }),
    'aws-sdk',
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
    ],
    mainFields: [
      'main',
    ],
  },
  optimization: {
    minimize: false, // <---- disables uglify.
  },
  target: 'node',
};
