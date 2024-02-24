import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, DefinePlugin } from "webpack";
import { IBuildOptions } from "./types";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { platform } from "os";
import CopyWebpackPlugin  from "copy-webpack-plugin"
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"

export function buildPlugins ({mode, paths : {html}, analizer} : IBuildOptions) : Configuration["plugins"]  {

    const isDev = mode === "development";
    const isProd = mode === "production";
    const plugins : Configuration["plugins"] = [
        new HtmlWebpackPlugin({
            template: html
        }),
        new DefinePlugin({
            __PLATFORM__ : JSON.stringify(platform)
        }),
        new CopyWebpackPlugin({
            patterns: [
              { from: "src/assets", to: "build/assets" }
            ],
          }),
          new ForkTsCheckerWebpackPlugin()
        
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
    if(analizer) {
        plugins.push(new BundleAnalyzerPlugin())
    }
    return plugins;
}