const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const config = {
    mode: "development",
    devServer: {
        port: 3000,
        static: "./public"
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "index.bundle.dev.js"
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            }
        ]
    }
}

module.exports = merge(common, {
    ...config,
});