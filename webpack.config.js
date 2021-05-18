const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = options => {
  return {
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      publicPath: "http://localhost:4204/",
      uniqueName: "mfe4"
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                presets: ['@babel/react', '@babel/env']
              }
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        
          // For remotes (please adjust)
          name: "mfe4",
          library: { type: "var", name: "mfe4" },
          filename: "remoteEntry.js",
          exposes: {
              './web-components': './app.js',
          },        

          shared: ["react", "react-dom"]
        }),
        new CopyWebpackPlugin({
          patterns: [
            {
              from: './*.html'
            }
          ]
        })
    ],
    devServer: {
      port: 4204
    }
  }
}
