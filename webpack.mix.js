const mix = require('laravel-mix');

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
  .sass('resources/sass/app.scss', 'public/css')
  .extract(['react', '@material-ui/core', '@material-ui/icons'])
  .setPublicPath("/")
  
  .webpackConfig({
    entry: {
      index: './resources/js/app.js',
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      // `path` is the folder where Webpack will place your bundles
      path: __dirname + '/',
      // `publicPath` is where Webpack will load your bundles from (optional)
      publicPath: __dirname + 'dist/'
    },
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
      alias: {
        '@material-ui/core': '@material-ui/core/esm',
        '@material-ui/icons': '@material-ui/icons/esm'
      },
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    }
  });