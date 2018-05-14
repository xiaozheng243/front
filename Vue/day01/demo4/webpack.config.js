const path = require('path')
const HTMLPlugin = require("html-webpack-plugin")
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === "development";
config = {
    target: 'web',
    //配置入口地址(绝对路径),__dirname为当前路径名称
    entry: path.join(__dirname, 'src/main.js'),
    //出口(/dist/bundles.js)
    output: {
        filename: 'bundles.js',
        path: path.join(__dirname, 'dist')
    },
    //为了让webpack处理除js以外的文件，需要向其指定相关的模块
    module: {
        //根据规则加载相应的loader，其加载顺序为逆序加载，正则表达式
        rules: [{ //处理vue的vue-loader
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader' //!区分
            },
            { //styl文件(css预处理器)
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            { //图片
                test: /\.(gif|png|svg|jpg)$/,
                use: [{ //配置url-loader及其属性
                    loader: 'url-loader',//图片<1024，转换成代码放入css中，否则按照name重新起名存放
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    //process.env.NODE_ENV=
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {//区分开发环境和生产环境
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin({
            template: './src/index.html'
        })
    ]
}
//开发模式，易于调试
if (isDev) {
    config.devtool = "#cheap-module-eval-source-map" //便于调试
    config.devServer = {//启动服务后打开localhost:8000即可打开项目,也可访问0.0.0.0:8000
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        hot: true//不需要刷新就可以重新渲染项目
        // historyFallback:{

        // }
        // open:true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config