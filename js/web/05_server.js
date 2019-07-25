//引出
const express=require('express');
//引出路由
const userRouter=require('./product.js');
//创建服务器及设置端口
var app=express();
app.listen(8081);
//
app.use('/product',userRouter);