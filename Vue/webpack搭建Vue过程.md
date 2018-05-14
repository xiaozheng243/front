# webpack搭建Vue过程

## 初始化npm项目

```shell
npm init
```

初始化项目的过程中需要输入项目的相关信息，可以一直回车默认。然后生成`package.json`文件。



## 安装webpack及vue文件

```shell
npm i webpack vue vue-loader
```

安装完后，需要根据提醒安装相关依赖：

```shell
npm i css-loader vue-template-compiler
```



## 创建vue单文件

首先在项目文件夹中创建一个src文件夹，然后在其中创建一个`app.vue`文件，该文件是vue的单文件界面。

在`app.vue`中填入下方代码：

```vue
//vue的HTML模板文件，只能有一个根节点
<template> 
<div id=test>{{text}}</div>
</template>
//vue的脚本文件
<script>
export default {
  data() {
    return {
      text: "abc"
    };
  }
};
</script>
//css文件
<style>
#test {
  color: aqua;
}
</style>
```

该文件主要存放HTML、css、JavaScript的代码。

## 创建入口文件

在`src`目录中创建一个`index.js`的入口文件。

```javascript
import Vue from 'vue';
import App from './app.vue';
const root = docuemnt.createElement("div");
document.body.appendChild(root);
new Vue({
    render: (creater) => creater(App)//渲染app.vue文件中的信息到body中的div
}).$mount(root);
```

该文件主要创建一个DOM节点并将vue文件中的信息渲染到该节点上。

## 创建并配置webpack.config.js



配置文件最终修改成：

```js
const path = require('path')
const HTMLPlugin = require("html-webpack-plugin")
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === "development";
config = {
    target: 'web',
    //配置入口地址(绝对路径),__dirname为当前路径名称
    entry: path.join(__dirname, 'src/index.js'),
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
        new HTMLPlugin()
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
        hot: true//不需要刷新就可以重新渲染单页项目
        // historyFallback:{

        // }
        // open:true
    }
    config.plugins.push(//加入配合hot的插件
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config
```

配置完成后，需要安装相关组件：

```shell
npm i style-loader url-loader file-loader
```

```shell
npm i webpack-dev-server
```

```shell
npm i cross-env
```

```shell
npm i html-webpack-plugin
```



## 引入图片及其他样式文件

在`src`文件中创建相关文件夹并存放相关文件，目录查看最后的项目目录。

`index.js`引入文件后：

```javascript
import Vue from 'vue';
import App from './app.vue';
//引入文件
import "./assets/styles/test.css";
import './assets/styles/test.styl';
import './assets/imags/test.png';
const root = document.createElement("div");
document.body.appendChild(root);
new Vue({
    render: (creater) => creater(App)
}).$mount(root);
```

其中`styl`文件需要额外安装loader:

```shell
npm i stylus-loader stylus
```



## 修改package.json文件的script

```json
{
  "name": "demo1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "cross-env NODE_ENV=production webpack --config webpack.config.js",
    "dev": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "css-loader": "^0.28.9",
    "file-loader": "^1.1.8",
    "html-webpack-plugin": "^2.30.1",
    "style-loader": "^0.20.2",
    "stylus": "^0.54.5",
    "stylus-loader": "^3.0.1",
    "url-loader": "^0.6.2",
    "vue": "^2.5.13",
    "vue-loader": "^14.1.1",
    "vue-template-compiler": "^2.5.13",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1"
  },
  "devDependencies": {
    "cross-env": "^5.1.3"
  }
}
```



## 运行项目

在终端中输入

```shell
npm run dev
```

如果出现cross-env不是可运行文件保存，在管理员终端下运行：

```shell
npm install cross-env --save-dev
```



## 输出项目

```shell
npm run build
```



## 添加post-css

继续配置项目，首先安装依赖

```shell
npm i postcss-loader autoprefixer babel-loader babel-core
```

## 创建postcss.config.js

在项目目录下创建package.config.js文件，添加以下代码

```javascript
const autoprefixer =require('autoprefixer');

module.exports={
    plugins:[
        autoprefixer()//自动处理css属性
    ]
}
```

## 创建.babelrc

```js
{
    "presets": [
        "env"
    ],
    "plugins": [
        "transform-vue-jsx"
    ]
}
```

安装包：

```shell
npm i babel-preset-env babel-plugin-transform-vue-jsx
```

## 继续配置webpack.config.js

修改module下的loader

```javascript
const path = require('path')
const HTMLPlugin = require("html-webpack-plugin")
const webpack = require('webpack');
const isDev = process.env.NODE_ENV === "development";
config = {
    target: 'web',
    //配置入口地址(绝对路径),__dirname为当前路径名称
    entry: path.join(__dirname, 'src/index.js'),
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
                test: /\.jsx$/,
                loader: 'babel-loader'
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
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    'stylus-loader'
                ]
            },
            { //图片
                test: /\.(gif|png|svg|jpg)$/,
                use: [{ //配置url-loader及其属性
                    loader: 'url-loader', //图片<1024，转换成代码放入css中，否则按照name重新起名存放
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
            'process.env': { //区分开发环境和生产环境
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}
//开发模式，易于调试
if (isDev) {
    config.devtool = "#cheap-module-eval-source-map" //便于调试
    config.devServer = { //启动服务后打开localhost:8000即可打开项目,也可访问0.0.0.0:8000
        port: 8000,
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        hot: true //不需要刷新就可以重新渲染项目
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
```

安装依赖：

```shell
npm i babel-helper-vue-jsx-merge-props babel-plugin-syntax-jsx
```

