//引入express
const express=require('express');
//创建路由器对象
var router=express.Router();
//添加路由
router.get('/list',function(req,res){
	res.send('这是用户列表test')
})
		module.exports=router;
		
