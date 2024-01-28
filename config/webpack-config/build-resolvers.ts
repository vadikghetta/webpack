import { Configuration } from "webpack";
import { IBuildOptions } from "./types";

export function buildResolvers  (option : IBuildOptions) : Configuration["resolve"]{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias : {
            "@" : option.src
        }
    }
}