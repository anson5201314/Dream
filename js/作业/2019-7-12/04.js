
//4、输入某年某月某日，判断这一天是这一年的第几天？
 var a=[31,28,31,30,31,30,31,31,30,31,30,31]; 
var b=[31,29,31,30,31,30,31,31,30,31,30,31];  
var year=2019;
var month=2;
var day=2;
var sum1=0;
if(year%4==0 && year%100!=0 || year%400===0){
for(var i=1;i<=month;i++){
	sum+=a[i-1];
}
	sum+=day;
console.log(sum);

}else{
	for(var i=1;i<=month;i++){
	sum+=b[i-1];
}
	sum+=day;
console.log(sum);
}




var a=[31,28,31,30,31,30,31,31,30,31,30,31];
var year=2019;
var month=2;
var day=2;
var sum1=0;
var sum;
for(var i=0;i<month-1;i++){
	sum1+=a[i];
}
if(year%4==0 && year%100!=0 || year%400===0){
	sum=sum1+day+1
}else {
	sum=sum1+day;
}
	console.log(sum);