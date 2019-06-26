# 音乐下载，图片下载

在前端，用于获取整个网站所有的图片地址
```js
var imgs = document.querySelectorAll("img")
var imgss = []
for(var i = 0; i<imgs.length; i++){
	console.log(imgs[i].src)
	imgss.push(imgs[i].src)
}
```

# 插件(木马)

新建一份`manifest`文件

```js
{
    //（必须）manifest版本，而且必须是2
	"manifest_version": 2,
	// （必须）名称
	"name": "特洛伊木马",
	// （必须）版本
	"version": "5.2.0",
	// （推荐）描述
	"description": "我是专门破坏你电脑的",
    // 需要直接注入页面的JS
	"content_scripts": [
        {
            // 匹配所有http和https的网站
			"matches": ["http://*/*", "https://*/*"],
            // 如果匹配成功就可以注入这份JS
			"js": ["hack.js"]
		}
    ]
}
```

在浏览器的拓展程序里面加载该插件
<img src="1.PNG" />

# 木马脚本

```js
// 获取所有网页图片，把图片吧修改木马的图片
var imgs = document.querySelectorAll("img");
for(var i = 0; i< imgs.length;i++){
	imgs[i].src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1126537924,4258824202&fm=27&gp=0.jpg"
}

// // 更改百度按钮
document.querySelector('#su').style.backgroundColor = 'red'

// // 监听输入框的内容
document.querySelector('#kw').addEventListener('keyup',function(e){
	console.log(e.target.value)
})

// 自动输入QQ的密码
document.querySelector('#u').value="123456"
document.querySelector('#p').value="123456"

document.querySelector("#go").click()
// 把logo给删除
$("#logo").remove()
setInterval(function(){
	$("#k_s_ol_chatWin").remove()
},500)

console.log($("#logo"))
```