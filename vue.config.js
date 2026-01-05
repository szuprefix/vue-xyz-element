/**
 * Created by denishuang on 2021/11/18.
 */


module.exports = {
    // 修改 examples 为 examples
    pages: {
        index: {
            entry: "examples/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    // configureWebpack: {
    //     externals: {
    //         vue: 'Vue',
    //         'vue-router': 'VueRouter',
    //         axios: 'axios',
    //         'element-ui': 'ElementUI',
    //         'xlsx': 'XLSX'
    //     }
    // },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages/')
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
    }
}

