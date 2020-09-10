const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    productionSourceMap: false,
    lintOnSave: true,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'));

        config.module
            .rule("vue")
            .use("vue-loader")
            .loader("vue-loader")
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true;
                return options;
            });
    },
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 3000,
        https: false,
        hot: true,
        hotOnly: true,
        //   proxy: {
        //     '/api': {
        //       target: 'http://',
        //       changeOrigin: true,
        //     },
        //   },
    }
}