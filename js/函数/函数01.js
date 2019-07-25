//全局污染：变量或者函数放到了全局作用域下
//解决方法：把变量或者函数放到函数作用域下
(function(){
//第1组轮播图
var num=2;
console.log(num);
})();
(function(){
//第2组轮播图
var num=3;
console.log(num);
})();
(function(){
//第3组轮播图
var num=5;
console.log(num);
})();


function fn(a){
	//a=function(){ console.log(2);}
	//a是传递匿名函数的函数名称
	a();
}
fn(function(){
	console.log(2);
});


//练习，创建函数，传递两个参数，都是匿名函数的形式，在匿名函数中返回一个数字。计算两个数字相加的和

function fx(a,b){
	console.log(a()+b());
 }
fx(function(){
	return 123;
},function(){
	return 12;
});
