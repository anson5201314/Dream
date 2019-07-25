const express=require('express');
//引入用户路由器对象
const userRouter=require('./router/user.js');
//引入商品路由器对象
const productRouter=require('./router/product.js');
//引入第三方body-parser中间件
const bodyParser=require('body-parser');
//创建服务器为并设置端口
var app=express();
app.listen(8080);
//使用body-parser中间件,将post请求的数据解析为对象
app.use(bodyParser.urlencoded({
	extended:false
}));
//使用静态资源挂载到public目录下 
	app.use(express.static('./public'));
	app.use(express.static('./laptop'));
	//挂载到/user下  /user/reg
	app.use('/user',userRouter);
	//使用商品路由器，挂载到/product   /product/list
	app.use('/product',productRouter);
