//引入express
const express=require('express');
//查询
const querystring=require('querystring');
//创建web服务器
var app=express();
//设置端口
app.listen(8081);
/*
app.get('/shopping/:prices/:spec',function(req,res){
	console.log(req.params)
	res.send(`
	价格:${req.params.prices} <br>
		规格:${req.params.spec}
	`);
});

app.get('/login',function(req,res){
	res.sendFile(__dirname+'/login.html')
}【
		//根据表单提交来创建对应的路由
	//请求方法：post  请求url: /mylogin
	//响应成功
	app.post('/mylogin',function(req,res){
	//获取post请求传递的数据
   //监听是否有数据传递,自动的触发回调函数
   req.on('data',function(chunk){
	//chunk  就是传递的数据
	var str=chunk.toString()
		//把查询字符串解析为对象
  var obj=querystring.parse(str);
  console.log(obj);
   })
      res.send('登录成功')
	})
*/
	   //练习：向服务器请求方法：get  /url:/reg   响应一个注册文件 reg.html

app.get('/reg',function(req,res){
	res.sendFile(__dirname+'/reg.html')
});
	app.get('/myreg',function(req,res){
		//获取get请求的数据：是查询字符串
		console.log(req.query)
		res.send('欢迎注册成功')
	})
