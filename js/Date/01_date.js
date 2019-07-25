//创建Date对象
/*
var d1=new Date('2019/7/16 9:57:30');
var d2=new Date(2019,7,16,9,57,30);   //月：0-11
var d3=new Date();//自动获取系统时间
var d4=new Date(1552800000000);  //计算机元年 1970-1-1 0:0:0
console.log(d4)

var d=new Date();
//console.log(d)
//获取年
console.log(d.getFullYear());   //获取年
console.log(d.getMonth());      //获取月份 0~11
console.log(d.getDate());      //获取日期
console.log(d.getHours());     //获取时
console.log(d.getMinutes());   //获取分
console.log(d.getSeconds());        //获取秒
console.log(d.getMilliseconds());  //获取毫秒
//获取距离计算机元年的毫米数
console.log(d.getTime())
console.log(d.getDay())        //获取星期

var d=new Date('2019/3/1')
var year=(d.getFullYear());
var month=(d.getMonth()+1);
var date=(d.getDate());
var day=(d.getDay());
//如果月份、日期小于10，前边拼接0
if(month<10){
	month='0'+month;
}
if(date<10){
	date='0'+date;
}
//使用day来作为下标来找数组对应的元素
var week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
console.log(year+'年'+month+'月'+date+'日'+week[day]);


	//练习：计算距离2019/9/13还有多少天多少小时多少分多少秒
	//创建当前系统时间的对象和2019/9/13的对象
	var now=new Date()
	var target=new Date('2019/9/13');
	//计算；两者相差的毫米数  getTime
//console.log(target.getTime()-now.getTime());
//两个对象相减，代表相差的毫米数
var d=target-now;
//把相差的单位转成秒
d=Math.floor(d/1000);
//计算相差的天数，把相差的值换算成天
var day=Math.floor(d/(24*60*60));
//计算相差的小时
//去除d中的天数：去除谁就和谁取余
var hours=d%(24*60*60)
hours=Math.floor(hours/(60*60))
//计算相差的分钟
//计算相差的小时
var minutes=d%(60*60);
//转成分钟
minutes=Math.floor(minutes/60);
//计算相差的秒
//计算相差的分钟
var seconds=d%60;
console.log('距离中秋节还有'+day+'天'+hours+'小时'+minutes+'分'+seconds+'秒');
*/

//获取本地字符串格式

var now=new Date();
console.log(now.toLocaleDateString());
console.log(now.toLocaleString())
console.log(now.toLocaleTimeString());

