//引入
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.商品列表
router.get('/list',function(req,res){
	var obj=req.query;
	var pno=obj.pno;
	var size=obj.size;
	//如果页码为空,默认为1
	if(!obj)pno=1;
	  //如果大小为空，默认显示9条数据
    if(!obj)size=9;
	//console.log(size)
	//转整形
	pno=parseInt(pno);
    size=parseInt(size);
   //1.4计算查询的值
	var start=(pno-1)*size;
   //1.5 执行sql语句
	pool.query('SELECT lid,price,title FROM xz_laptop LIMIT ? ,?',[start,size],function(err,result){
		if(err) throw err;
		res.send(result);
	   });
});




//2.商品的详情
//3.商品的添加
//4.删除商品
//5.修改商品

//导出路由器对象
module.exports=router;
