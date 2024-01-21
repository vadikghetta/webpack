import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration } from "webpack";
import { IBuildOptions } from "./types";
import webpack from "webpack";

export function buildPlugins ({mode, paths : {html}} : IBuildOptions) : Configuration["plugins"]  {

    const isDev = mode === "development";
    const isProd = mode === "production";
    const plugins : Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: html
        })
    ]
    if(isDev) {
        plugins.push(
            new webpack.ProgressPlugin()
        )
    }
    if(isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }))
    }
    return plugins;
}