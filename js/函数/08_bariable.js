//提升var声明的变量到所在作用域最前边，赋值还是在原来的位置

//console.log(a);
//var a=1;

/*functionfn(){
	console.log(b);
	var b=2;
}
fn;


//查看一下程序的打印结果

var c=3;
function fun(){
	//var c;
	console.log(c);
	 c=5;
}
fun();
console.log(e);

*/
//函数中的参数
function fn1(){
	//参数是局部变量，不能被外部访问
	//var a,b;
	return a+b;
}
fn1(2,3);
//console.log(a);

var m=7;
function fn2(m){
	//var =5;
	//修改的值是当前作用域下的m
	m=m+3;//在原来基础上加3
	//参数m（局部变量）值是8
}
fn2(5);
console.log(m);
