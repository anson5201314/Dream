/*

//1、输入年月日显示星期几
var d=new Date('2019/7/16');
var year=(d.getFullYear());
var month=(d.getMonth()+1);
var day=(d.getDay());
var date=(d.getDate());
var week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']
if(month<10){
	month='0'+month
}
if(date>10){
	date='0'+date
}
	console.log(year+'年'+month+'月'+date+'日'+' '+week[day])


//2、使用JavaScript生成一个当前时间的倒数7天的数组。比如今天是10月1号，生成的数组是["9月25号","9月26号","9月27号","9月28号","9月29号","9月30号","10月1号"]。



//31 30 28 29
var d1=new Date('2000/3/1');
var month=d1.getMonth()+1;
var date=d1.getDate();
var b=[];
b[0]=d1.getMonth()+1+'月'+d1.getDate()+'日';
for(var i=1;i<7;i++){
	d1.setDate(d1.getDate()-1);
	b[i]=(d1.getMonth())+1+'月'+(d1.getDate())+'日'

}
b.reverse();
console.log(b);



//计算2019/7/16 17:57:45 距离2019/10/1 6:15:30相差的天、小时、分钟、秒
//现在日期时间
var now=new Date('2019/7/16 17:57:45');
//距离国庆时间
var target=new Date('2019/10/1 6:15:30');
//相差秒
var d=Math.floor(target-now)/1000;
//计算相差天数
var day=Math.floor(d/(24*60*60));
//计算小时相差，去除天数
var hours=d%(24*60*60);
//相差时数
hours=Math.floor(hours/(60*60));
 //去除相差分钟数
var minutes=d%(60*60);
//相差分钟数
minutes=Math.floor(minutes/60);
var seconds=d%60

console.log('距离国庆节还有'+day+'天'+hours+'时'+minutes+'分'+seconds+'秒')
*/



var timer=setInterval(()=>{

var now=new Date();

//2019/12/1时间
var arr=new Date('2019/12/1');
//两者相差时间
var d=Math.floor(arr-now)/1000;
//距离相差天数
var date=Math.floor(d/(24*60*60));
//计算距离相差小时数
var hours=d%(24*60*60);
hours=Math.floor(hours/(60*60))
//去除小时数，计算分钟数
var minutes=d%(60*60)
minutes=Math.floor(minutes/60)
var seconds=Math.floor(d%60)
var timer=setInterval(()=>{
console.log('距离2019年12月1号还有:'+date+'天'+hours+'小时'+minutes+'分钟'+seconds+'秒')
})
clearTime(timer)