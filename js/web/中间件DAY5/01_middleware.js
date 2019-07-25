

const express=require('express');
var app=express();
app.listen(8080);
//中间件：验证用户是否为root，如果是才允许访问路由
app.use('/list',function(req,res,next){
	console.log(req.query)
	//检测用户是否为root   req.query
if(req.query.uname!=='root'){
	 //响应用户名错误
	 res.send('用户名或密码错误')
}else{
	//用户名正确，继续往后执行
       next();  
}
});
//查看所有的数据列表路由
app.get('/list',function(req,res){
	res.send('这是所有的数据列表')
});
//中间件，拦截URL；/shopping
app.use('/shopping',function(req,res,next){
	//把传递数据转为数值型
	req.query.price=Number(req.query.price);
	//获取商品的价格，在之前的基础上加100
     req.query.price+=100;
	 //执行下一个中间件，或者路由
	 next();
})
//创建路由
app.get('/shopping',function(req,res){
	res.send('商品的价格为:'+req.query.price)
	
})

