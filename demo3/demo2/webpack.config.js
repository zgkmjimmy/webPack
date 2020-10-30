let path = require('path')
console.log(path.resolve(__dirname,'dist'));
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
    mode:'development'

}