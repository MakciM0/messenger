
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: { 
      filename: path.resolve(__dirname, "src/index.tsx") 
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name][contenthash].js',
        clean: true
    },
    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] },
            {
              test: /\.(js|jsx)$/,    
              exclude: /node_modules/,
              use: ["babel-loader"],
            },
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: '/node_modules/'
            },
            {
              test: /\.(module.scss|scss)$/,
              use: [
                { 
                  loader: "style-loader",
                },
                { 
                  loader: "css-loader",
                  options: {
                    modules: true, 
                  },
                },
                { 
                  loader: "sass-loader",
                },
              ],
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
        ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx", '.ts', '.tsx',],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack",
            filename: 'index.html',
            template: "./src/index.html",
        }),
    ],
    devServer: {
        port: 3001,
        hot: true,
        static:{
          directory: path.join(__dirname, 'dist')
        }
    },
    mode: 'development'
};