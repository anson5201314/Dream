var str='javascript';

//获取字符的长度
console.log(str.length);
//
console.log(str[4]);   //数组
console.log(str.charAt(4)); //api方法

console.log('廖'.charCodeAt());

//获取字符串中a出现的次数

var str='javascript';
for(var i=0,sum=0;i<=str.length;i++){
	
	if(str.charAt(i)==='a'){
		sum++;
	}
}
console.log(sum);
//获取字符的下标
console.log(str.indexOf('a',2));
console.log(str.lastIndexOf('a'));
console.log(str.indexOf('b'));

//声明变量保存邮箱，检查该变量中是否含有@，如果有打印机‘合法的邮箱’，否则打印；非法邮箱
var email='123@456798.com';
	if(email.indexOf('@')===-1){
		console.log('非法的邮箱');
	}else{
		console.log('合法的邮箱');
	}
	

	//英文字母转大写或小写
	var str='JavaScript';
	console.log(str.toUpperCase());  //大写
    console.log(str.toLowerCase());  //小写

