// 引入request模块
var request = require('request');
var fs = require('fs');
// 伪造一段请求，发送过去，获取网址给我的响应信息
// http://www.umei.cc/p/gaoqing/cn/
// request('http://i1.whymtj.com/uploads/tu/201906/10231/s5v6a.jpg', function (error, response, body) {
// //   console.log('error:', error); // Print the error if one occurred
// //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.
//   fs.writeFileSync('./imgs/test.jpg',body)
// });

request('http://m701.music.126.net/20190625161134/4b5de4b3423c39335b5f62d6e51c7747/jdyyaac/5358/0609/5409/d2c0282f3c1c160c13f9cc4684aa9853.m4a').pipe(fs.createWriteStream('./imgs/test2.m4a'))