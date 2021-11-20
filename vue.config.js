/**
 * Created by denishuang on 2021/11/18.
 */


module.exports = {
    // 修改 src 为 src
    // pages: {
    //     index: {
    //         entry: "src/main.js",
    //         template: "public/index.html",
    //         filename: "index.html"
    //     }
    // },
    configureWebpack: {
        externals: {
            vue: 'Vue',
            'vue-router': 'VueRouter',
            axios: 'axios',
            'element-ui': 'ElementUI',
            'xlsx': 'XLSX'
        }
    },
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

