const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

/* const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'), */
  //[/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "surfAngularTemplate",
    publicPath: "http://localhost:4201/"
  },
  optimization: {
    runtimeChunk: false
  },   
 /*  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  }, */
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
         name: "surfAngularTemplate",
         library: { type: "var", name: "surfAngularTemplate" },
         filename: "remoteEntry.js",
         exposes: {
            // './SurfModule': './src/app/contact/contact.module.ts',
            //If we have different framework versions, we can expose web components:
            './web-components': './src/bootstrap.ts',
         },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },

        shared: ["@angular/core","@angular/common,","@angular/router"]
        /* {
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/common/http": { singleton: true, strictVersion: true }, 
          "@angular/router": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        } */
        
    }),
    //sharedMappings.getPlugin()
  ],
};
