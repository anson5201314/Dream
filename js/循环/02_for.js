//打印1~10之间所有整数
/*for(var i=1;i<=10;i++){
	console.log(i);
}
*/
//练习：打印80 75 70 65 60
 /*for(var i=80;i>=60;i-=5){
 	console.log(i);
 }
 
//练习：计算1~100之间所有奇数的和
for(var i=1,sum=0;i<=100;i+=2){
	sum+=i;
}
console.log(sum);

for(var i=1,sum=0;i<=100;i++){
	if(i%2===1);
	sum+=i;
}
console.log(sum);


//1-20之间所有能被3整除的数字的积
//打印2000-2100之间所有的闰年
for(var i=1,s=1;i<=20;i++){
	if(i%3===0){
	s*=i;
	}
}
console.log(s);

for(var i=2000;i<=2100;i++){
	if(i%4===0 && i%100!==0 || i%400===0){
		console.log(i);
	}
}
*/
//循环产生1-5，拼接起来，最后打印
for(var i=1,str='';i<=5;i++){
	str+=i+'*'5'='+i*5+' '; //1*5=5 2*5=10 3*5=15 4*5=25 5*5=25
}
console.log(str);    //123456
