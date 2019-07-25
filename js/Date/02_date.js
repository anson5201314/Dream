/*
var d1=new Date('2019/7/16 14:28:30');
var d2=new Date(d1);
//设置30分钟以后
d1.setMinutes(58);
d1.setHours(16);
d1.setMonth(1);
//d1.setTime(1467800000000);   //2016
//3年后，'先获取当前的年份，然后加3，把结果设置为当前的年份'
//d1.setFullYear()+3
d1.setFullYear(d1.getFullYear()+3);
//设置一星期后时间
d1.setDate(d1.getDate()+7)
console.log(d1.toLocaleString())
console.log(d2.toLocaleString())
*/
//创建Date对象，保存员工的入职时间’2019/7/16’,合同期为3年，计算到期时间
//入职时间
var a=new Date('2019/7/16');
//到期时间,复制一个入职时间
var a1=new Date(a);
//设置3年后到期
a1.setFullYear(a1.getFullYear()+3);
var a2=new Date(a1);
//合同到期提前一个月
a2.setMonth(a2.getMonth()-1)
//判断那天是否是周末，提前到周五续签
var day=a2.getDay();
console.log(day)
if(day===6){
	//提前一天
	a2.setDate(a2.getDay()-1);
}else if(day===0){
	//提前两天
	a2.setDate(a2.getDay()-2);
}
console.log('入职时间:'+a.toLocaleString());
console.log('到期时间:'+a1.toLocaleString());
console.log('到期提前一个月时间:'+a2.toLocaleString());