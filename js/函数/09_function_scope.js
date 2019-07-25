//在全局作用域下创建的函数
/*
function fn1(){
	
}
function fn2(){
	//在函数作用域下创建的函数
	function fn3(){
		console.log(3);
	}
	fn3();
}
fn2();


fn();
function fn(){
	console.log(1);
	fn();
}

斐波那契数列
1  1  2  3  5  8  13   21  34
第1项值是1，第2项值是1，从第3项开始，每项的值是前两项相加的和
课后任务
   使用函数计算斐波那契数列的第N项
*/
function fn(n){
	var n1=1;
	var n2=1;
	//循环从3开始
	for(var i=3;i<=n;i++){
		//每次挪动，n1的值是上一次n2的值
		//n2的值，上一次n1+n2的值
		//用到第三方的变量
		var c=n1;
		n1=n2;
		n2=c+n2;
	}
	//返回n2，当前项的值
	return n2;
}
console.log(fn(50));
/*
function fn1(x){
	if(x===1 || x===2){
		return 1;
	}
 return fn1(x-1)+fn1(x-2);
}
console.log(fn1(50));
*/