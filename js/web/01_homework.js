const http=require('http');
//引入fs模块
const fs=require('fs');
//引入压缩模块，对文件压缩
const zlib=require('zlib');
//创建web服务器，
var app=http.createServer();
//监听端口
app.listen(8080);


//接收请求
app.on('request',function(req,res){
	if(req.url==='/list'){
		res.write('this is product list')
			res.end();
	}else if (req.url==='/index')
	{ res.write('this is hompage')
		res.end();
	}else if(req.url==='/'){
		res.writeHead(302,{
			location:'/index'
			
		});res.end();
	}else if(req.url==='/study'){
	//	res.writeHead(302,{
	//		Location:'http://www.tmooc.cn'
	//	});
//响应文件
//读取文件(同步)
var data=fs.readFileSync('./02.html');
//把读取的文件作为响应的 内容
//res.write(data);
//2.使用压缩响应文件
//前提：设置响应的压缩类型为gzip,这时候浏览器会对压缩进行解压
res.writeHead(200,{
	'Content-Encoding':'gzip'

});
//创建gzip压缩包
var gzip=zlib.createGzip();
//创建读取文件的流，添加到压缩包gzip中
//通过管道（流）的形式响应到浏览器
fs.createReadStream('./02.html').pipe(
	gzip).pipe(res);


	}else{
		res.writeHead(404);
		res.write('nod found');
	}
res.end();
})