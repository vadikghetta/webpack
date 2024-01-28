export interface  IBuildPaths  {
    entry : string
    html : string
    output : string
}

export type TMode = "production" | "development";

export interface IBuildOptions  {
    port : number
    paths: IBuildPaths
    mode : TMode
    analizer : boolean
    src : string
}

 export interface IEnvVarsType {
    mode : TMode
    port : number
    anlizer : boolean
}