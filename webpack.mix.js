const mix = require('laravel-mix');
const { BundleStatsWebpackPlugin } = require('bundle-stats');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
.extract()
.webpackConfig({
    plugins: [
    //   new BundleStatsWebpackPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: "/node_modules/"
        }
      ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    }
  }).babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
  }).version()

