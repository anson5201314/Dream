//3、输入一个三位数，如果是水仙花数，输出YES，否则的话，输出NO;所谓的水仙花数是指 每一位的数字立方和等于这位数本身。例如 153 = 1^3+5^3+3^3
/*var x=num;
//存放三位数中的百位数值
var a=num/100;
//存放三位数中的十位数值
   var b=num/10%10;
//存放三位数中的个位数值
 var c=num%10;
 num1=a*a*a+b*b*b+c*c*c;
 if(num>=100 && num<=999){
	  if(num=num1){
	  console.log();
 }
	 }
 */
//计算出所有三位数中的水仙花
 for(var i=100,a,b,c;i<=999;i++){
 	a=parseInt(i/100);
 	b=parseInt(i/10%10);
 	c=parseInt(i%10);
 	if(a*a*a+b*b*b+c*c*c==i){
 		 console.log(i);
 	}
 }