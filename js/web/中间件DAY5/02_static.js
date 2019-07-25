
const express=require('express');
//创建服务器,并监听端口
var app=express();
app.listen(8080);
//把所有的网页所需要的文件html/css/js/图形（静态资源）托管到public目录下，
//如果浏览器请求静态资源，会自动到Public目录下寻找，不需要创建路由
//内置中间件
app.use(express.static('./public'));
app.use(express.static('./files'));
