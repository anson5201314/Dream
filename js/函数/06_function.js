//计算1~任意数字之间所有整数的和
//阶乘: 5!=5*4*3*2*1
 //    4!=4*3*2*1

//练习1,创建函数，计算1~任意数字之间所有整数的乘积，并返回结果

function get(n){
for(var a=1,h=1;a<=n;a++){
	h*=a;
}
	return h;
}
console.log(get(5));

//计算1~任意数字之间所有整数的和
function jc(x){
	for(var i=1,sum=0;i<=x;i++){
		sum+=i;	
	}
	return sum;
}
console.log(jc(100));


//求阶乘的和
function jc(x){
	for(var i=1,sum=0;i<=x;i++){
		sum=get(i);
	}
	return sum;
}
console.log(jc(5));