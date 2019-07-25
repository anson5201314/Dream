/*
function add(a,b){
	//只是表示把a+b打印到控制台，并不代表把结果返回
	//console.log(a+b);
	return a+b;
	console.log('函数执行结束');
}
add(87,92);
add(75,81);
var num1=add(87,92);
var num2=add(75,81);
console.log(num1,num2);

function test(a,b){
	//if(a>b){
	//	return a;
	//}else {
		//return b;
	//}
return a>b ? a : b;
}
var num1=test(3,8);
console.log(num1);
*/
function test1(a,b,c){
	if(a>b){
		return a;
	}else {
		return b;
	}if(b>c){
		return b;
	}else{
		return c;
   }
}
var num1=test1(8,2,7);
console.log(num1);


