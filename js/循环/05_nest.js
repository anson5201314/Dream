/*
 *****
 

for(a=1,str='';a<=5;a++){
	str+='*'
	}
console.log(str);
//循环5次
//外层：控制循环的行数
for(var j=1;j<=9;j++){
//内层：控制每一行的列数
	for(a=1,str='';a<=5;a++){
//循环体
	str+='*'
	}
console.log(str);
}

for(var j=1;j<=5;j++){
	//循环条件：小于等于前面的行号
	for(a=1,str='';a<=j;a++){
		str+='*'
	}
console.log(str);
}
                       9
//1*1=1                   1    4   12
  1*2=2  2*2=4
  1*3=3  2*3=6 3*3=9 
  1*4=4  2*4=8 3*4=12 4*4=16

for(var i=1;i<=9;i++){
	for(var j=1,str='';j<=i;j++){
	str+=j+'*'+i+'='+i*j+' ';
}
console.log(str);
}

 //9*9倒序
for(var i=9;i>=1;i--){
	for(var j=1,str='';j<=i;j++){
	str+=j+'*'+i+'='+i*j+' ';
}
console.log(str);
}

for(var i=9;i>=1;i--){
	for(var j=i,str='';j>=1;j--){
	str+=j+'*'+i+'='+i*j+' ';
}
console.log(str);
}

//倒着9*9口诀
//打印本世纪（2000-2100）的前10个闰年
//计算1~100之间所有整数的和，当和大于4000的时候，提前结束循环，打印当前的和
for(var i=2000,a=1;i<=2100;i++){
	if(i%4===0 && i%100!==0 || i%400===0){
  
   console.log(i);
		a++;
		if(a===10){
   	break;
	}
}
}
*/
//课后练习3：计算1~100之间所有整数的和，当和大于4000的时候，提前结束循环，打印当前的和
for(var a=1,sum=0;a<=100;a++){
	if(sum>4000){
		break;
	}
	sum+=a;		
}
console.log(sum);
