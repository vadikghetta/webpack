import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { IBuildOptions } from "./types";

export function buildLoaders  (options : IBuildOptions) : ModuleOptions["rules"] {

    const isDev = options.mode === "development" ? true : false;
    const sassLoader =  {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader",
      ],
    }
    const tsLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }
    return [
      sassLoader,
      tsLoader
    ]
}