//文件系统模块 fs ->file system
//引入fs模块

const fs=require('fs');
//文件包含文件形式和目录形式
//1、查看文件的状态(文件大小、创建时间、目录/文件形式)
var a=fs.stat('./03_1.js',function(err,stats){
	//err:可能产生的错误信息
	if(err) throw err;
		
	


//stats:文件的状态
console.log(stats)
});
