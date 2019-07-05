const path=require("path");
module.exports={
   mode: "production",
   entry:"./src/index.js",
   output:{
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   devServer:{
       contentBase:"./dist"
   },
   module:{
       rules:[
            {
               test:/\.js$/,
               use:["babel-loader"]
            },
            {
                test:/\.(css)$/i,
                use:["style-loader","css-loader"]
            }
       ]
   }
};
