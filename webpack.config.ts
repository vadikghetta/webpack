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
    const isDev = env.mode === "development" ? true : false;
    const config : webpack.Configuration =  {
        mode: env.mode ?? "development",
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true
        },
        devtool: isDev ? "inline-source-map" : false,
        devServer : isDev ? {
            port : env.port ?? 3000,
            open : true
        } : undefined,
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
        isDev && new webpack.ProgressPlugin()
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                  },
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