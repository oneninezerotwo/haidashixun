// const  constant 常量
// require 获取
// 获取node提供给你的fs功能，把这个功能赋值给fs变量
var fs = require('fs');
// 打印
// console.log(fs)
// 调用fs的api接口函数去写入文件
fs.writeFileSync('./input.txt', 'hello world')
// 把hello world写入到input.txt文件下