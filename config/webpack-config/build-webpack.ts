
import webpack from "webpack";
import { IBuildOptions } from "./types";
import { buildDevServer } from "./build-dev-server";
import { buildLoaders } from "./build-loaders";
import { buildPlugins } from "./build-plugins";
import { buildResolvers } from "./build-resolvers";

 export function buildWebpack  (options : IBuildOptions) : webpack.Configuration {
    const {mode, paths} = options;
    const isDev = mode === "development" ? true : false;
    return {
        mode: mode ?? "development",
        entry: paths.entry,
        output : {
            filename: 'js/[name].[contenthash].js',
            path: paths.output,
            clean: true
        },
        optimization : {
            splitChunks: {
                chunks: 'all',
                minSize: 0,
                cacheGroups: {
                  vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                  },
                },}
        },
        devtool: isDev ? "inline-source-map" : false,
        devServer : isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
    }
}
