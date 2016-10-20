const path = require('path');
const webpack = require('webpack');

const DEV = (process.argv.indexOf('--develop') >= 0);
const VERBOSE = (process.argv.indexOf('--verbose') >= 0);
const HOT = (process.argv.indexOf('--hot') >= 0);

console.info("--develop", DEV);
console.info("--verbose", VERBOSE);
console.info("--hot", HOT);

const GLOBAL_VARS = {
  __DEV__: DEV,
  'process.env': {
    NODE_ENV: DEV ? '"development"' : '"production"',
    HOT: HOT,
    API_URL: '"http://localhost:2000"'
  }
};

const baseConfig = {

  cache: DEV,
  debug: DEV,

  stats: {
    colors: true,
    timings: true,
    reason: DEV,
    hash: VERBOSE,
    version: VERBOSE,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
  ],

  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.txt$/,
        loader: 'raw',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url',
      },
      {
        test: /\.(eot|ttf)$/,
        loader: 'file',
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /.tsx?$/,
        loader: 'ts',
        exclude: /node_modules/,
      },
      {
        test: /(\.css|\.scss)$/,
        loader: 'style!css?modules&minimize&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss!sass',
      }
    ]
  }
};

const appConfig = Object.assign({}, baseConfig, {

  // entry point
  entry: [
    ...(HOT ? [
      'webpack-hot-middleware/client?reload=true&path=http://localhost:3000/__webpack_hmr'
    ] : []),
    './app/index.tsx'
  ],

  // output build file
  output: {
    path: path.join(__dirname, 'build/public'),
    filename: 'main.js'
  },

  devtool: DEV ? '#source-map' : false,

  plugins: [
    new webpack.DefinePlugin(GLOBAL_VARS),
    ...(DEV ? [] : [
      new webpack.optimize.AggressiveMergingPlugin()
    ]),
    ...(HOT ? [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ] : []),
  ],

});

if (HOT) {
  appConfig.output.publicPath = 'http://localhost:3000/build/public/';
}

module.exports = appConfig;
