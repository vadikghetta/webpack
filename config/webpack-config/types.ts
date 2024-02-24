export interface  IBuildPaths  {
    entry : string
    html : string
    output : string
}

export type TMode = "production" | "development";
export type BuildPlatform = 'mobile' | 'desktop';
export interface IBuildOptions  {
    port : number
    paths: IBuildPaths
    mode : TMode
    analizer : boolean
    src : string
    platform?: BuildPlatform;
}

 export interface IEnvVarsType {
    mode : TMode
    port : number
    anlizer : boolean
    paths: IBuildOptions;
    platform: BuildPlatform;
    analyzer?: boolean;
}