//练习：声明变量保存四个英文字母(大小写)，无限循环弹出提示框，输入验证码(不区分大小写)，如果准确则结束循环
/*var num='TeAr';

while (true){
	var str=prompt('input number');
if(str.toUpperCase()===num.toUpperCase()){
	
	break;
}
}


//截取字符串
var str='javascript';
console.log(str.slice(0,4))     //java
console.log(str.slice(-3,-1))  //ip

//声明变量保存邮箱，分别截取邮箱的用户名和服务器名称
var str='tom@163.com';
var index=str.indexOf('@');   //3
console.log(str.slice(0,index));
console.log(str.slice(index+1));


//按照长度截取字符串
var str='javascript';
console.log(str.substr(4,3))   //scr
console.log(str.substr(-3,2))  //ip

//声明变量保存字符串（身份证）截取出生的年月日和性别，打印机1997年10月20 性别男
var num='110230199710203579';
var num1=num.substr(6,4);
var num2=num.substr(10,2);
var num3=num.substr(12,2);
var sex=num.substr(-2,1);
var s=sex%2===1 ? '男':'女';
console.log(num1+'年'+num2+'月'+num3+'日','性别'+s);

var str='javascript';
console.log(str.substring(4))
console.log(str.substring(4,7))
//如果是负数，自动转为0
console.log(str.substring(-3))
//下标自动从小到大
console.log(str.substring(7,4))

//练习：声明变量保存一个单词(hello)，将首字母转大写，其他小写
var str='hello';
var first=str.substring(0,1).toUpperCase();
var other=str.substring(1).toLowerCase();
console.log(first+other);
*/



//数组转字符串
var arr=['html','css','js'];
var str=arr.join('-');
console.log(str)

//字符串转数组
console.log(str.split('-'))


var email='tom123@126.com';
var str=email.split('@');
console.log(str[0],str[1]);