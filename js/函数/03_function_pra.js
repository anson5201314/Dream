//计算任意两个数字相加的和
/*
function add(x,y){//形参
	console.log(x+y);
}
add(2,3);//实参
add(4,3);

function add(n){
for(var i=1,sum=0;i<n;i++){
	sum+=i;
}
console.log(sum);
}
add(20);
add(10);

function fn(a,b){
	//形参为赋值，结果undefined
	console.log(a,b);
}
fn(1);  //undefined
fn();   //undefined
fn(2,3);  //2 3
*/
function year(x,y){
	for(var a=x,sum=0;a<=y;a++ ){
	if(a%4===0 && a%100!==0 || a%400===0){
		sum++;
	}
	}
	console.log(sum);
	return sum;
}
var num1=year(2000,2019);
var num2=year(1900,2020);
console.log(num1,num2);
