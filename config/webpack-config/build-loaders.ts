import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { IBuildOptions } from "./types";



export function buildLoaders  (options : IBuildOptions) : ModuleOptions["rules"] {
  const isDev = options.mode === "development" ? true : false;
  const cssModules =   {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? "[path][name]__[local]" : "[path][hash:base64:8]",
      } 
    },
  }
    const assetLoader =    {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            limit: 8192,
          }
        },
      ],

     type: 'javascript/auto'
    }
    const sassLoader =  {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        cssModules,
        "sass-loader",
      ],
    }
    const tsLoader =  {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      }

    const svgrLoader = {
      test: /\.svg$/i,
      use: [
          {
              loader: '@svgr/webpack',
              options: {
                  icon: true,
                  svgoConfig: {
                      plugins: [
                          {
                              name: 'convertColors',
                              params: {
                                  currentColor: true,
                              }
                          }
                      ]
                  }
              }
          }
      ],
  }
    return [
      sassLoader,
      tsLoader,
      svgrLoader,
      assetLoader
    ]
}