const fs=require('fs');


//fs.writeFileSync('./num.txt','中国心123');

//创建可读取的流
/*
var readStream=fs.createReadStream('num.txt');

//设置UTF8编码
readStream.setEncoding('utf8');
//监听是否有数据流
//一旦有数据进入，自动触发回调函数，来获取数据
readStream.on('data',function(chunk){
	//chunk  获取的数据，，分段的
	console.log(chunk)
})
//监听是否读取结束
//一旦读取结束，自动触发回调函数
readStream.on('end',function(){
     console.log('读取结束');	
})

*/


//创建可写入的流
//把读取的流放入到写入的流里面，完成拷贝


//创建一个可读取的流
var readStream=fs.createReadStream('num.txt');
//创建可写入的流
var writeStream=fs.createWriteStream('2.txt');
//把读取的流放入到写入的流里面，完成拷贝
readStream.pipe(writeStream);