const path = require('path');

module.exports = {
  devtool: 'eval-source-map',

  entry: './app/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },

  devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },

  module: {
    rules: [
        {
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        },
        {
            test: /\.css$/,
            use: [
                {
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }
            ]
        }
    ]
  }
};
