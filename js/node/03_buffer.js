
/*

//创建Buffer
var buf=Buffer.alloc(6,'我');
console.log(buf);

//转成字符串
//console.log(String(buf));
console.log(buf.toString());
*/


//一次性定时器
//当间隔时间到了，执行回调函数

global.setTimeout(function(){
	console.log('aaaaa');
},3000)
