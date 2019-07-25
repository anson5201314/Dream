const http=require('http')
//创建目录
//fs.mkdirSync('mydir');
//删除目录
/*
fs.rmdir('./mydir',function(err){
	if(err) throw err;
	console.log('删除成功')
});
*/

//创建web服务器
var arr=http.createServer();
//设置端口
arr.listen(8080);
//接收请求，监听请求，并通过回调函数处理请求
arr.on('request',function(req,res){
	console.log(req.url,req.method)
		/*res.writeHead(302,{
			location:'http://www.tmooc.cn'
		})
});
	*/
	if(req.url==='/list'){
	res.write('this is product list')
	}else if(req.url==='/index'){
		res.write('this is homepage')
	}else if(req.url==='/'){
			res,write('/index');
		}else if(req.url==='/study'){
		res.writeHead(302,{
			location:'http://www.tmooc.cn'
		});
		
	}
	res.end();
	});