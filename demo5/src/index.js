import data from "./data.json"
//引入样式资源
import './style.css';
function fn1() {
    console.log('fn1');
}

fn1()

console.log(data);


//开发环境打包：
// webpack ./src/index.js -o ./dist/bundle.js --mode=development

//生产环境下的打包
// webpack ./src/index.js -o ./dist/bundle_production.js --mode=production

//webpack默认可以处理js文件、json文件
//生产环境下比开发环境多了压缩代码和代码混淆