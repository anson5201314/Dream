//判断一个整数是偶数还是奇数，并输出判断结果

/*var k=1; 
if(k%2!=0){
	console.log(k+'奇数');
k++;
}else if(k%2===0){
	console.log(k+'偶数');
	k++;
}


var num=prompt('input number');
var num=parseInt(num);
if(isNaN(num)){
	console.log('你输入的不是一个数')；

}else{
	
	if(num%2===0){
		console.log(num,'偶数')；
	}else {
		console.log(num,'奇数');
	}
}
}


7、开发一款软件，输入身高，根据公式（身高-108）*2=体重，可以有10斤左右的浮动。来观察测试者是否超重
*/
var height=prompt('身高');
var weight=prompt('weight');
var t_weight=(height-108)*2;
var wc=weight-t_weight;
var height=Number=(height);
var weight=Number=(weight);
if(wc>10){
alert('NG');
}else if(wc<-10){
alert('NG');
}else{
alert('OK');
}
