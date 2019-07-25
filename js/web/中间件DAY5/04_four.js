//创建web服务器，托管静态资源到public目录，创建文件login.html 点击提交，向服务器
 // 发送post请求，请求方法post，请求的url:/mylogin,在路由中获取post请求的数据
//引入
 const express=require('express');
 //1.引入body-parser
 const bodyParser=require('body-parser');
// const querystring=require('querystring');
 //创建服务器并设置端口
 var app=express();
 app.listen(8081);
 //托管静态资源
 app.use(express.static('./public'));


 //2、使用body-parser中间件,获取post请求的数据，并解析为对象
 app.use(bodyParser.urlencoded({
	extended:false   //不使用扩展的查询字符串模块qs,而是使用官方提供的querystring模块解决为对象
 }));

 //根据表单请求，创建对应的路由
 app.post('/mylogin',function(req,res){
	 /*req.on('data',function(chunk){
		var str=chunk.toString();
		//console.log(str)
			//使用查询字符串模块解析为对象
		var obj=querystring.parse(str)
			console.log(obj);
	 })
	//console.log(req.query)
	*/
	console.log(req.body);
	res.send(`注册成功
	<br>
	用户名:${req.body.uname}<br>
	密码: ${req.body.upwd}
	`);
 })