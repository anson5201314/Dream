/*var i=1,sum=0;                 
for(;i<=100;){   
	sum+=i;      
	i++;                  
}
console.log(sum);
*/  
for(var i=1,sum=0;i<=100;i++){
sum+=i;
}
 console.log(sum);
//多个循环 条件，后边的起作用
for(var i=1,j=7;i<=10,j>=1;i++,j--){
	console.log(i,j);
}
//练习：计算1/20+2/18+...10/2
for(var a=1,b=20,sum=0;a<=10;a++,b-=2){
	sum+=a/b;
}
console.log(sum);
