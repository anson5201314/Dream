var deposit=10;
if(deposit>500){
	console.log('凯迪拉克');
}else if(deposit>=100){
	console.log('帕萨特');
}else if(deposit>=50){
	console.log('伊兰特');
}else if(deposit>=10){
	console.log('奥拓');
}else if(deposit<10){
	console.log('捷安特');
}
	
/*  1.我想买车，买什么车决定于我在银行有多少存款，如果我的存款超过 500万，我就买凯迪拉克，否则，如果我的存款超过 100万，我就买帕萨特，否则， 如果我的存款超过50万，我就买依兰特，否则， 如果我的存款超过10万，我就买奥托，否则， 如果我的存款10万以下 ，我买捷安特
 
2. 编写程序，模拟下述分段函数，输入x，输出正确的y值
y = 2x + 1 (x < 0),
y = x ^ 2 * 5 (0 <= x < 5) ,
y =3x - 6(x >= 5)

   3、输入一个三位数，如果是水仙花数，输出YES，否则的话，输出NO;所谓的水仙花数是指 每一位的数字立方和等于这位数本身。例如 153 = 1^3+5^3+3^3
   function work1(){
   var x=num;
   //存放三位数中的百位数值
   var a=num/100;
   //存放三位数中的十位数值
   var b=num/10%10;
   //存放三位数中的个位数值
   var c=num%10;
   num1=a*a*a+b*b*b+c*c*c;
   if(num>=100 && num<=999){
	  if(num=num1){
	  console.log(num,'yes');
 }
   }else
     console.log(num,'NO')
}

   4、输入3个数a,b,c；输出最大的数
   var a=num;
   var b=num1;
   var b=num2;
   if(a>b){
      if(a>c){
		  console.log(a,最大);
	  }
   else {
        console.log(c,最大)；
   }
   }
   else{ 
	   if(b>c){
	   console.log(b,最大)
	   }
   else{
   console.log(c,最大)
   }
   }
   }

   5、东方航空从北京飞往马尔代夫的机票原价为4000元，4到10月份为旺季， 其他月份为淡季，旺季时候头等舱打9折，经济舱打7.5折；淡季头等舱打6折， 经济舱打3折。从页面输入出行的月份和选择的舱型计算出机票价格
    var month=i;
	var ticke=a  //哪等舱
     if（month>=1 && month<=12）{
	 if(month>=4 && month<=10){
	 if(ticke=='头等舱'){
	 console.log(4000*0.9);
	 }
	 else if(ticke=='经济舱'){
	 console.log(4000*0.75);
	 }
	
	 else f(ticke=='头等舱'){
	 console.log(4000*0.6);
	 }
	 else if(ticke=='经济舱'){
	 console.log(4000*0.3);
	 alert('错误月份')
	 
	 }
	 }
   
   
   
   
   6、判断一个整数是偶数还是奇数，并输出判断结果
   7、开发一款软件，输入身高，根据公式（身高-108）*2=体重，可以有10斤左右的浮动。来观察测试者是否超重
var height=prompt('身高');
var weight=prompt('体重');
var t_weight=(height-108)*2;
var wc=weight-t_weight;
if(wc>10){
console.log('超重');
}else if(wc<-10){
console.log('瘦');
}else{
console.log('正常');
}








   8、可做可不做 ：输入a,b,c的值，求出一元二次方程的实根方程
     ax2+bx+c=0;一元二次方程。求根
           △=b2-4ac；若△<0方程无实根
          若△>0，方程有两个不相同的实根x1   x2
         若△=0，方程有两个相同的实根
         某个数进行开平方——Math.Sqrt()
         求根公式：（-b±Math.Sqrt(△)）/2a
var a=prompt('number');
var b=prompt('number');
var c==prompt('number');
var delt=b*b-4*a*c;
if(a!=0){
	if(delt<0){
	console.log('没有实根');
	}else if(delt==0){
	var x=(-b)/(2*a);
	console.log('有一个实根');
	}else{
		var x1=（-b+Math.Sqrt(delt))/(2*a);
		var x2=（-b-Math.Sqrt(delt))/(2*a);
		console.log('两个实根；分别是x1='+x1+',x2='+x2');
	
	}
}
else{
  console.log('a不能输入0')
}






		 */
var money=prompt('12:单位（万）');
money=parserFloat(money);
if(money>500){
	console.log('凯迪拉克');
}else if(money>100){
   console.log('帕萨特');
}



