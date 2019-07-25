//创建函数——函数声明
function fn(){
	
}
//创建函数-——函数表达式
//变量的名称fun；是函数名称
var fun=function(a,b){
	return a+b;
}

//调用匿名函数创建的函数
console.log(fun(5,8));


function fx(){	
}
var fan=function(a,b){
	//计算a~b之间所有整数的和
	for(var i=a,sum=0; i<=b;i++){
		sum+=i;

	}
	return sum;
}
console.log(fan(10,100))
