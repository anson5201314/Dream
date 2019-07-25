//引入
const express=require('express');
//创建路由器对象
var product=express.Router();
//添加路由
product.get('/study',function(req,res){
    res.send('这只是一个测试')	
})
		//导出
		module.exports=product;