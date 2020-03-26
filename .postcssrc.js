"use strict";
module.exports = {
    plugins:[
        require('autoprefixer')(),
        require('postcss-sprites')({
            spritePath:'./src',
            spritesmith:{
                padding: 2
            },
            filterBy: function(image){
                return new Promise(function(resolve,reject){
                    if(image.path.indexOf("spriteIMG")>=0){
                        resolve(true);
                    }else{
                        reject();
                    }
                })
            }
        })
    ]
};
