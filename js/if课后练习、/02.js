/*2. 编写程序，模拟下述分段函数，输入x，输出正确的y值
y = 2x + 1 (x < 0),
y = x ^ 2 * 5 (0 <= x < 5) ,
y=3x-6
*/
var x=-1;
var y;
if(x<0){
y=2*x+1;
}else if(x<5 && x>=0){
	y=x*x*5;
}else if(x>=5){
	y=3*x-6;
}
console.log('y'+y);
