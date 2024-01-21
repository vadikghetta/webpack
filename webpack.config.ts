import path from "path"
import webpack from "webpack";
import { IBuildPaths, IEnvVarsType } from "config/webpack-config/types";
import {buildWebpack} from "./config/webpack-config/build-webpack";






export default (env : IEnvVarsType) =>
{
    const paths : IBuildPaths = {
        entry : path.resolve(__dirname, "src", "index.tsx"),
        output : path.resolve(__dirname, 'build'),
        html : path.resolve(__dirname, "public", "index.html")
    }
    const config : webpack.Configuration = buildWebpack({
        port : env.port ?? 3000,
        mode : env.mode ?? "development",
        paths
    });

    return config;
}


