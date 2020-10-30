let path = require('path')
//安装html-webpack-plugin， cnpm install html-webpack-plugin
let HtmlWebpackPlugin = require('html-webpack-plugin');
// console.log(path.resolve(__dirname,'dist'));
module.exports = {
    //入口文件
    entry: "./src/index.js",
    output: {
        //输出文件名称
        filename: "bundle.js",
        //输出的路径
        //绝对路径
        path:path.resolve(__dirname,'dist')
    },
    //开发模式 production(生产模式)
    mode: 'development',
    //loader的配置
    module: {
        //对某个格式的文件进行转换处理
        rules: [
            {
                test:/\.css$/,
                use: [
                    //use数组里的loader的顺序，是从下到上,逆序执行
                    //将js的样式内容插入到style标签里
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    //plugins插件配置
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}