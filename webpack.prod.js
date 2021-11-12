const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const config = {
    mode: "production",
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "index.bundle.prod.js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./styles/styles.css",
        }),
    ],
}
module.exports = merge(common, {
    ...config,
});