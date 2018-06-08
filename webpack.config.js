/*
    ██╗    ██╗███████╗██████╗ ██████╗  █████╗  ██████╗██╗  ██╗
    ██║    ██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██║ ██╔╝
    ██║ █╗ ██║█████╗  ██████╔╝██████╔╝███████║██║     █████╔╝
    ██║███╗██║██╔══╝  ██╔══██╗██╔═══╝ ██╔══██║██║     ██╔═██╗
    ╚███╔███╔╝███████╗██████╔╝██║     ██║  ██║╚██████╗██║  ██╗
      ╚══╝╚══╝ ╚══════╝╚═════╝ ╚═╝     ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
 */


/**
 * ::::: REQUIRE MODULES ::::::::::::::::::::::::::::::
 */
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Path = require('path');
const DIR = require('./DIR.js');


/**
 * ::::: NODE ENV ::::::::::::::::::::::::::::::
 */

const NODE_ENV = process.env.NODE_ENV;
const ENV_DEVELOPMENT = NODE_ENV === 'development';
const ENV_PRODUCTION = NODE_ENV === 'production';

/**
 * ::::: alias ::::::::::::::::::::::::::::::
 */

const alias = {
  modernizr$: Path.resolve(__dirname, '.modernizrrc'),
  ScrollToPlugin: 'gsap/ScrollToPlugin.js',
  EasePack: 'gsap/EasePack.js',
  vue$: 'vue/dist/vue.common.js'
};


/**
 * ::::: RULE ::::::::::::::::::::::::::::::
 */

const sassResources = [
  Path.resolve(
    __dirname,
    'app/src/styles/variables/**/*.sass'
  ),
  Path.resolve(
    __dirname,
    'app/src/styles/mixins/**/*.sass'
  ),
  Path.resolve(
    __dirname,
    'node_modules/tokyo-shibuya-reset/_reset.sass'
  ),
  Path.resolve(
    __dirname,
    'app/src/styles/presets/_preset.sass'
  )
];

const sassDevSetting = {
  loader: 'vue-style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax!sass-resources-loader',
  options: {
    resources: sassResources
  }
};

const sassProdSetting = ExtractTextPlugin.extract({
  use: [
    {
      loader: 'css-loader',
      options: { minimize: true }
    },
    'postcss-loader',
    'sass-loader?indentedSyntax',
    {
      loader: 'sass-resources-loader',
      options: {
        resources: sassResources
      }
    }
  ],
  fallback: 'vue-style-loader'
});

const rules = [
  {
    test: /\.ts$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/]
    }
  },
  {
    test: /\.modernizrrc$/,
    loader: 'modernizr-loader'
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: {
      loaders: {
        sass: ENV_DEVELOPMENT ? sassDevSetting : sassProdSetting,
        ts: 'ts-loader!tslint-loader'
      },
      cssSourceMap: ENV_DEVELOPMENT
    }
  }
];


/**
 * ::::: devtool ::::::::::::::::::::::::::::::
 */

const devtool = 'cheap-module-source-map';


/**
 * ::::: devserver ::::::::::::::::::::::::::::::
 */

const devServer = {
  contentBase: DIR.dest$,
  historyApiFallback: true,
  compress: true,
  port: 3000
};


/**
 * ::::: COMMON CONFIG ::::::::::::::::::::::::::::::
 */

const config = {
  entry: `./${DIR.src}index.ts`,
  output: {
    path: DIR.dest$,
    publicPath: '',
    filename: 'bundle.js'
  },
  // ファイル名解決のための設定
  resolve: {
    // 拡張子の省略
    extensions: ['ts', 'vue', '.js'],
    // moduleのディレクトリ指定
    modules: ['node_modules'],
    // プラグインのpath解決
    alias: alias
  },
  // モジュール
  module: {
    rules: rules
  },
  plugins: [
    new CleanWebpackPlugin(`./${DIR.dest}`),
    new HtmlWebpackPlugin({
      title: 'CRAZY WORLD',
      template: `./${DIR.src}index.html`
    }),
    new CopyWebpackPlugin([{
      from: `./${DIR.src}images`,
      to: 'images/'
    }]),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      gifsicle: {
        optimizationLevel: 3,
        interlaced: true
      },
      jpegtran: { progressive: true },
      optipng: { optimizationLevel: 5 },
      svgo: { removeViewBox: false }
    })
  ]
};

/**
 * ::::: DEVELOPMENT ::::::::::::::::::::::::::::::
 */

if (ENV_DEVELOPMENT) {
  config.devtool = devtool;
  config.devServer = devServer;
}


/**
 * ::::: DEVELOPMENT ::::::::::::::::::::::::::::::
 */

if (ENV_PRODUCTION) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new UglifyJsPlugin({
      warningsFilter: () => true
    }),
    new ExtractTextPlugin('bundle.css')
  );
}


/**
 * ::::: EXPORTS ::::::::::::::::::::::::::::::
 */

module.exports = config;
