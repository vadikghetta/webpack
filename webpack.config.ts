import path from "path"
import  HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack";


type TMode = "production" | "development";
interface IEnvVarsType {
    mode : TMode
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
        plugins: [new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html")
        }),
        new webpack.ProgressPlugin()
        ],
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