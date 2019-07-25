
//引入http模块
const http=require('http');
//创建web服务器
var app=http.createServer();
//设置端口，监听浏览器请求
//http://127.0.0.1:8081 / http://localhost:8081
app.listen(8081);
//事件:接收请求，监听请求
//通过回调函数处理请求
app.on('request',function(req,res){
	//req 请求对象
	//请求的url，请求的方法
	console.log(req.url,req.method);
	//res 响应对象
	//设置响应的头信息和状态码
	/*
	res.writeHead(302,{
		location:'http://www.tmooc.cn'
	})
	//设置响应的内容
	res.write('not found');
		*/
	//console.log('有一个请求对象')
	//如果请求注册  /reg  响应'this is reg'
	//如果请求登录  /login  响应'this is login'
	if(req.url==='/reg'){
		res.write('this is reg');
	}else if(req.url==='/login'){
		res.write('this is login');
	}
	//结束并发送响应
	res.end();
});



