import { IBuildOptions,  } from "./types"
import {Configuration as DevServerConfiguration} from "webpack-dev-server";


export function buildDevServer  (options : IBuildOptions): DevServerConfiguration  {
    return {
            port : options.port ?? 3000,
            open : true,
            historyApiFallback : true
    }
}