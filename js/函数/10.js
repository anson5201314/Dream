/*
//求1~n任意数字之间所有整数的和
function getSum(n){
	//当n为1的时候，返回1
	if(n===1){
		return 1;
	}
	//由当前的数+上一个数~1之间所有整数的和
	return n+getSum(n-1);
}
getSum(5);
console.log(getSum(8));

*/
//创建一个圆对象，含有半径和圆周率属性，添加计算周长和计算面积的方法，返回结果
var circle={
	r:4,
	pi:3.14,
	getlength:function(){
		return 2*this.pi*this.r;
	},
	getArea:function(){
	return this.pi*this.r*this.r;
		//传递半径来计算面积
		getArea2:function(myr){
			return this.pi*myr*myr;
		}
	},
};
console.log(circle.getlength());
console.log(circle.getArea());
console.log(circle.getArea2(5));

