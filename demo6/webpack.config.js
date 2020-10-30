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
            }, {
                //匹配图片文件
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: 'url-loader',
                //图片小于8kb,base64处理，减少请求数量，会使得体积更大
                options: {
                    limit: 8 * 1024,
                    //url-loader的es6模块化解析关闭掉
                    esModule: false,
                    //[hash:10]取图片hash的前10位
                    //[ext]取图片的扩展名
                    name:'[hash:10].[ext]'
                }
            }, {
                test: /\.html$/,
                loader:'html-loader'
            }
        ]
    },
    //plugins插件配置
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    devServer: {
        //项目构建路径
        contentBase: path.resolve(__dirname, "dist"),
        //启动gzip压缩
        compress: true,
        //端口号
        port: 3000,
        //自动打开浏览器
        open:true
    }
}