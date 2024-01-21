import path from "path"
import  HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";


type TMode = "production" | "development";
interface IEnvVarsType {
    mode : TMode
    port : number
}


export default (env : IEnvVarsType) =>
{
    const config : webpack.Configuration =  {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.ts"),
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true
        },
        devServer : {
            port : env.port ?? 3000,
            open : true
        },
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
        new webpack.ProgressPlugin()
        ],
        devtool: "inline-source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
    }

    return config;
}