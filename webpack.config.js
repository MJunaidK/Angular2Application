const webpack=require('webpack');
const path=require('path');
module.exports={
    entry : './src/main.ts',
    output : {
        path: path.join(__dirname+'/dist'),
        filename:'app.bundle.js'
    },
    module:{
        loaders: [
            {test:/\.ts$/, loader:'ts-loader'}
        ]
    },
    resolve:{
        extensions : ['.ts','.js','.json']
    },
    devtool:'source-map',
    devServer :{
        contentBase:[
             path.join(__dirname,"./webpack/dist")
        ],
        compress : true,
        overlay : {
            warnings:false,
            errors:true
        },
        port: 3000,
        inline:true
    }
};