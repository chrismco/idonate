const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  // mode: 'development',
  // watch: true,
  entry: './src/main',
  // output: {
  //   path: __dirname + './build',
  //   filename: 'build.js'
  // },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
     
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: __dirname + '/src'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      },
      {
        test: /\.(jpe?g|gif|png)$/,
        loader: 'file-loader?emitFile=false&name=[path][name].[ext]'
       }
     
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     'file-loader'
      //   ]
      // },
      
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    // new ExtractTextPlugin('[name].css'),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      // global app config object
      config: JSON.stringify({
        apiUrl: 'http://localhost:4000'
      })
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true
  },
  devServer: {
    historyApiFallback: true
  }
};