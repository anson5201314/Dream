
const fs=require('fs');


//新建目录123
/*
fs.mkdir('./123',function(err){
	if(err) throw err
		console.log('写入成功')
});
*/
//fs.mkdirSync('./4')

fs.writeFile('./num.txt','我的中国梦',function(err){
	if(err) throw err;
	console.log('写入成功')
})

fs.writeFileSync('./num.txt','中国心123');

/*
//3.读取目录


fs.readdir('./123',function(err,result){
	if(err) throw err;
	console.log(result);
});
//使用同步 readdirSync


console.log(fs.readdirSync('./01_homework'));


//创建文件
//往文件num.txt写入数据1
fs.writeFile('./num.txt',1,function(err){
	if(err) throw err;
	console.log('写入成功')
})

//使用同步方法往文件data.txt中写入数据tom]
fs.writeFileSync('./data.txt','tom');

//追加写入

fs.appendFile('./data2.txt','king\n',function(err){
if(err) throw err;
 	console.log('写入成功')
})

		//使用同步方法，往文件stu.txt中写入一组学员的姓名
		//创建数组

		var arr=['king','anson'];
		//遍历数组，获取每个元素（数据）写入

for(var i=0;i<arr.length;i++){
  //arr[i]
  //同步追加写入
  fs.appendFileSync('./stu.txt',arr[i]+'\n');
}

//6.读取文件
fs.readFile('./stu.txt',function(err,data){
	if(err) throw err;
		console.log(data);
})
console.log(fs.readFileSync('./stu.txt'.toString()));




//7.删除文件

fs.unlink('./num.txt',function(err){
	if(err) throw err;{
	console.log('删除成功')
	
	}
})

//同步 data.txt
fs.unlinkSync('./data2.txt')

//8.检查文件是否存在

console.log(fs.existsSync('./data2.txt'));

//练习：如果文件data2.txt存在，同步删除

if(fs.existsSync('./data2.txt')===true){
	fs.unlinkSync('./data2.txt')
}
*/