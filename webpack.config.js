const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const config = {
    entry: {
        app: "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "index.bundle.js"
    },
    devServer: {
        port: 3000,
        contentBase: "./public"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "realisations.html",
            template: "src/realisations.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "competences.html",
            template: "src/competences.pug"
        }),
        new HtmlWebpackPlugin({
            filename: "experiences.html",
            template: "src/experiences.pug"
        }),
        new MiniCSSExtractPlugin({
            filename: "./styles/styles.css"
        })
    ],
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
                exclude: /node_modules/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                    "postcss-loader"
                ]
            }
        ]
    }
};
module.exports = (env, argv) => {
    if (argv.mode === "development") {
    }
    if (argv.mode === "production") {
    }
    return config;
};





/*"build": "webpack --mode=production",
        "build:dev": "webpack --mode=development",
        "start:dev": "webpack-dev-server --mode=development"*/