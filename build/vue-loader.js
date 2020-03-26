'use strict';
const isDev = process.env.NODE_ENV !== 'production';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
function cssLoaders (options) {
    options = options || {}
  
    var cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: !isDev,
            sourceMap: isDev
        }
    }
    var postCssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: isDev
        }
    };
  
    // generate loader string to be used with extract text plugin
    function generateLoaders (loader, loaderOptions) {
        var loaders = [cssLoader,postCssLoader]
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: isDev
                })
            })
        }

        // Extract CSS when that option is specified
        // (which is the case during production build)
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            });
        } else {
			return ['vue-style-loader'].concat(loaders)
        }
    }
    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass')
    };
}

function styleLoaders(options) {
    const output = [];
    var loaders = cssLoaders(options)
    for (const extension in loaders) {
        const loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader
        });
    }
    return output;
}
module.exports = {
    vueLoader: {
        loaders: isDev?cssLoaders():cssLoaders({extract:true}),
        cssSourceMap: isDev
    },
    styleLoaders: styleLoaders,
};
